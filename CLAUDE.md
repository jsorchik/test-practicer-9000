# CLAUDE.md — for future Claude sessions

A test-practice web app for a 12-year-old prepping for the ISEE Middle Level. Now also supports PSAT 8/9 prep alongside ISEE. Hosted on GitHub Pages, no build step.

## Run it

Just open `index.html`. There's no bundler, no install, no `package.json`. Local dev: any static server (`python3 -m http.server` or `npx serve .`). Deploy: push to `main`, GitHub Pages serves it.

## File structure

```
index.html              ← all app code (CSS, HTML, JS) — ~6.2k lines
data/
  lower-words.js        ← LOWER_WORDS                (synonym bank, ISEE Lower)
  lower-sentences.js    ← LOWER_SENTENCE_COMPLETIONS
  lower-quant.js        ← LOWER_QUANT
  lower-math.js         ← LOWER_MATH_ACHIEVEMENT
  lower-reading.js      ← LOWER_READING (object: {passages, questions})
  lower-essays.js       ← LOWER_ESSAY_PROMPTS
  middle-*.js           ← same shape, Middle Level (WORDS, SENTENCE_COMPLETIONS, ...)
  bridge-*.js           ← same shape, Bridge Level (BRIDGE_WORDS, ...)
  psat-rw.js            ← PSAT_READING_WRITING (mixed comprehension / vocab / writingEdit)
  psat-math.js          ← PSAT_MATH (MCQ + grid-in + charts + tables)
  definitions.js        ← EXTRA_DEFINITIONS for sentence-completion words
AUDIT_REPORT.md         ← Phase 2 content-audit findings (one-time, 2026-05)
.gitignore              ← excludes .psat-tmp/ (agent staging area, kept local)
```

Each data file declares its bank with `const NAME = [...]`. Non-module classic `<script>` tags share a global lexical scope, so the consts are visible to the inline app script that loads after them. Load order matters — see the `<script src>` tags at the bottom of `<head>`.

## Versioning

Footer at the bottom of every view shows the build stamp (`v3.7 · 2026-05-27`) so a parent can confirm what version the kid is running after a hard refresh. Two constants near the top of the inline script:

```js
const APP_VERSION = "3.7";
const APP_VERSION_DATE = "2026-05-27";
```

Bump on every push of substantive changes. Small UX nits don't need a bump.

## Critical invariants

### Append-only data arrays
Mistakes are stored in `state.lifetimes[testType][grade].mistakes` keyed by `${grade}-${sectionKey}-${idx}` where `idx` is the **array index** in the bank. **Do not reorder, splice, or delete entries** in any data bank — the kid's mistakes pool would point to the wrong questions. Always append new entries; if you must change an existing entry, edit it in place to preserve its index.

The one safe form of dedup is **replacing** a duplicate's content in-place. Past dupe fixes (commit `f62badd`): three duplicate Middle WORDS headwords were rewritten as fresh entries at the same indices.

### Storage key
`STORAGE_KEY = "isee-progress-v5"`. **Do not rename** — the app was once explicitly named ISEE-something, the user later asked for generic naming, but localStorage data uses this exact key. Renaming silently wipes everyone's stats.

### Test types
Two: `isee` (default) and `psat`. `state.testType` is the current selector; home view has a top-level pill toggle. Each test type owns its own grades and sections, with lifetimes nested under `state.lifetimes[testType][grade]`.

```js
TESTS.isee.grades   = GRADES                     // {lower, bridge, middle}
TESTS.isee.sections = SECTIONS                   // verbal_synonyms, verbal_completion, …
TESTS.psat.grades   = { psat89: {...} }
TESTS.psat.sections = PSAT_SECTIONS              // psat_rw, psat_math
```

Helper functions (use these instead of `GRADES` / `SECTIONS` directly when the path is test-type-sensitive):

- `currentTest()` — `TESTS[state.testType]`
- `currentGrades()` — current test type's grades
- `currentSections()` — current test type's section list
- `currentGrade()` — `TESTS[testType].grades[gradeLevel]`
- `findSectionByKey(key)` — section lookup across **all** test types (for rendering mistakes from either type)
- `L()` — current testType + grade lifetime (falls back to a frozen `EMPTY_LIFETIME` stub if no current grade exists)

`state.lastGradeByType` remembers the per-type grade selection so toggling ISEE ↔ PSAT restores spot.

### Grade levels and sections

| Test type | Grade keys | Section keys |
|---|---|---|
| `isee` | `lower` (4→5), `bridge` (5→6), `middle` (6→7) | `verbal_synonyms`, `verbal_completion`, `verbal_combined`, `quant_reasoning`, `math_achievement`, `reading`, `essay` |
| `psat` | `psat89` (8→9) | `psat_rw`, `psat_math` |

PSAT has no essay (the real digital PSAT dropped its essay in 2021).
`verbal_combined` is the real-ISEE-format combined verbal section (synonyms + sentence-completion mixed in one timed block); shown in test mode. Practice mode shows the two individual cards.

### Test volume
`state.testVolume` is `"half"` or `"full"`. Each grade's `tests` is the half-length config; `testsFull` is the real-test config. `testConfigFor(section)` picks the right one. Default `"half"` for daily practice.

### Question entry types
`makeQuestion(entry, sectionKey, idx, gradeLevel)` dispatches on entry shape. Optional `topic` field (math/quant only) drives Khan brush-up links.

| Type | Shape | Notes |
|---|---|---|
| `quantComparison` | `{type, columnA, columnB, answer: "a"\|"b"\|"equal"\|"cant", explanation, topic?}` | ISEE quant-reasoning style |
| `psatMath` | `{type, question, correct, wrong[3], explanation, chart?, topic?}` | PSAT MCQ; optional inline chart or `<table>` in question |
| `psatMathGridIn` | `{type, question, correct, accept[]?, explanation, chart?, topic?}` | No `wrong[]`; kid types answer; `psatAnswersMatch` handles equivalents |
| `psatRW` | `{type, subtype: "comprehension"\|"vocab"\|"writingEdit", passage, question, choices[4], correct: 0-3, explanation}` | Passage inline; `<u>...</u>` allowed in passages |
| `math` (ISEE) | `{type, question, correct, wrong[3], explanation, topic?}` | Same as psatMath sans chart support |
| Reading question (ISEE) | `{question, choices, correct, explanation, passageId, topic?}` (no `type` field) | `passageId` links to a separate passage object |
| Sentence completion | `{sentence, correct, wrong[3], explanation}` | Sentence has `___` for the blank |
| Synonym | `{word, correct, wrong[3], meaning}` | `meaning` shown in feedback |
| Essay | `string` | Just the prompt |

### Passage HTML allowlist
PSAT R&W passages run through `unescapeAllowedTags(escapeHtml(...))`. Math `question` text passes through `fmtFractions(entry.question)` without escaping (trusted content; pre-existing pattern). Allowed tags in passages: `u, table, thead, tbody, tr, th, td, caption`. Bare tags only — no attributes (safe).

### Chart spec language
PSAT entries may include `chart: {type, title?, xLabel?, yLabel?, ...data...}`. Three chart types:
- `"bar"`: `categories[]` + parallel `values[]`
- `"line"` / `"scatter"`: `points: [[x,y], ...]`
- Optional `yMin`, `yMax`, `xMin`, `xMax` for explicit bounds

Rendered to inline SVG via `renderChartSvg`. No external dependencies.

### Grid-in answer normalization
`psatAnswersMatch(typed, accepted[])` handles equivalent forms:
- Whitespace trim, strip `$` `%` `,` and common unit suffixes (`cm` `m` `ft` `kg` etc.)
- Decimal ↔ fraction ↔ mixed-number conversion (numeric equality)
- Colon-form ratios (`"3:1"` → fraction form for comparison)
- Case-insensitive string equality fallback

Entries should populate `accept[]` with common variants the kid might type (e.g. `["3/2", "1.5", "1 1/2"]`).

`isAnswerCorrect(answerRecord)` is the single source of truth for "did the kid get this right?" Branches on `a.isGridIn` to use `psatAnswersMatch`, else compares `a.picked === a.correctIdx`. Use this — don't compare directly.

## Architecture

### Modes
`state.mode` is one of:
- `"practice"` — instant feedback, no timer, missed questions recycle back into the queue
- `"test"` — timed section, no per-question feedback during test; numbered navigator strip + flag-for-review + free navigation + Submit Section confirmation
- `"review"` — drill the mistakes pool until each entry hits `MASTERY_THRESHOLD = 3` correct-in-a-row

### Views
`state.view` and `showView(name)`: `home | quiz | results | mistakes | essay | stats | tests | essays | batteryTransition | batteryResults`. All views are sibling divs in `<body>`; `showView` toggles `.hidden`. Routable views (`home/stats/essays/tests/mistakes`) sync to URL hash.

### Test mode UX (real-test bubble-sheet style)
- Numbered nav strip at top of card: click to jump; visual states for answered (blue), flagged (orange), current (ring)
- Tap option = answer recorded immediately (no two-step submit); revisit to change
- ⚑ Flag button toggles per-question flag
- ← Prev / Next → buttons + arrow-key navigation
- Always-visible **Submit Section** button (warm orange, distinct color from Next); tap → confirmation modal listing answered/flagged/unanswered counts
- Timer-end auto-submits without confirmation

State: `state.testAnswers[i]` is parallel to `state.testQueue`. Each entry: `{picked, flagged, correctIdx, isGridIn, correctAnswer, acceptedAnswers, choices, feedbackHtml, ...}`. `picked` is a choice index for MCQ, a string for grid-in.

### Battery mode (Mock Test Day)
**ISEE only** for now. Chains all 6 sections back-to-back in real-ISEE order (Verbal → Quant → break → Reading → Math → break → Essay). `state.battery.active` locks the kid in (back button hidden). `finishTest`/`finishEssay` dispatch into `batteryAdvanceAfterSection` instead of normal results. Reward formula in `calculateBatteryReward`. PSAT MTD (different chain, different timing) is a future feature.

### Question registry
`buildRegistries()` walks every bank in every test type at boot and builds `QUESTION_REGISTRY[id] = { entry, sectionKey, gradeLevel, testType }`. IDs are `${gradeLevel}-${sectionKey}-${idx}` — unique across testTypes since grade names don't collide.

Reading passages get their own `PASSAGE_LOOKUP[passageId]` (ISEE only — PSAT R&W passages are inline on the entry).

### Monetized Mode
Parent-gated payout system. Toggle on home view → PIN modal → config modal.

**PIN is today's date as MMDD** (e.g. `0527` for May 27), computed daily via `getCurrentParentPin()`. Not persisted — rotates every day.

Payout fields in `state.payoutConfig` (defaults in `DEFAULT_PAYOUT_CONFIG`):
- `testBase` — for finishing a full-length test (halved in half-mode via `payoutScale()`)
- `perCorrect` — per right answer (unscaled)
- `testGoodBonus` — bonus at ≥85% accuracy
- `testGreatBonus` — bonus at ≥95% accuracy
- `mtdCompletionBonus` — extra for finishing MTD
- `reviewMasteryBounty` — per mistake mastered (3-in-a-row natural mastery only; manual "Mark as mastered" intentionally doesn't pay)

Modal has a "Reset to defaults" button that snaps every field back to `DEFAULT_PAYOUT_CONFIG`.

Anti-spam:
- Per-test: if elapsed < `MIN_SEC_PER_QUESTION × N`, payout = $0
- Per-essay: if elapsed < `ESSAY_MIN_SEC` (5 min) AND words ≥ 100, payout = $0

Banked rewards in `L().rewardsBanked`. "Mark paid" button in modal resets the current grade's balance.

### Khan Academy "Brush up" links
Missed math/quant questions in three places (results screen, past-tests history, mistakes-list reveal) show a `📚 Brush up: [Topic]` link to a Khan Academy search-results page.

URLs are **search-form** (`khanacademy.org/search?page_search_query=...`), not deep links — Khan reorganizes URL paths every couple years, search URLs are stable.

`MATH_TOPICS` taxonomy (~32 topics) maps topic key → `{label, query}`. `brushUpLinkFor(entry)` returns "" for entries without a `topic` field (so verbal/essay entries naturally get no link).

Tagged via 4-agent batch run; ~948 math/quant entries across all banks. To add new entries: include a `topic` field referencing one of `MATH_TOPICS`'s keys.

### Past tests history
`L().tests` array (per testType + grade) stores up to 50 most-recent test snapshots. Each record includes per-question detail (id, choices, correctIdx, picked, isGridIn, correctAnswer, acceptedAnswers, feedbackHtml) so old tests are fully reviewable. `renderTestsHistory()` lists them; clicking expands per-question review (uses same `renderReviewItem` as the live results screen for visual consistency).

### Review surfaces (consistency)
Three views show "here's what you got wrong + why":

| Surface | Renderer | Compactness |
|---|---|---|
| Post-test results screen | `renderReviewItem` | Full |
| Past tests history (expanded card) | `renderReviewItem` (same) | Full |
| Mistakes list (reveal toggle) | Custom inline (compact for scan) | Scan-first, reveal on tap |

All three use the same `.ans-block.correct` green panel for the right answer, the same `.explain` styling for the explanation, and the same `brushUpLinkFor` for Khan links. Quant-comparison entries render side-by-side columns in all three.

## When adding content

- **Synonyms / sentences**: append to the end of the relevant `data/{grade}-{section}.js` file
- **Math / quant** (ISEE or PSAT): same; verify the math holds. Include a `topic` field for Khan linking.
- **Reading**: add a passage to `passages[]` and at least one question with `passageId` matching
- **Essays**: append a string to the prompts array
- **PSAT R&W**: append to `data/psat-rw.js` with the right `subtype` (comprehension/vocab/writingEdit)
- **PSAT Math**: append to `data/psat-math.js`; can include `chart` field for SVG charts, HTML `<table>` inline in `question`, or `psatMathGridIn` type for numeric input
- Run `node -e "..."` to parse-check the data files + the inline app script in load order

### Agent-driven content batches
Pattern: spawn parallel agents to write content batches → each writes a self-contained JS array literal to `.psat-tmp/batchname.js` → merge into the canonical data file via a Node script that finds the closing `];` and injects the new entries before it → audit-agent verifies math correctness / quality → apply audit fixes in place → commit.

`.psat-tmp/` is gitignored. Staging files + audit reports stay local-only.

## Things NOT to do

- Don't add a build step or bundler — keep it drag-and-drop deployable to GH Pages
- Don't add backend dependencies — it's a static app by design (parent-remote-review was explicitly deferred)
- Don't `confirm()` for major flows — use `appConfirm()` (in-app modal); native `confirm()` is unreliable on mobile Safari
- Don't add unit tests — the kid is the user, the test plan is "does it run cleanly when refreshed and a section starts"; rely on `node -e 'new Function(...)'` for parse-check
- Don't commit data without running the parse-check across all `data/*.js` plus the inline app script in load order
- Don't reorder/splice data arrays — append only; edit in place to preserve mistakes-pool indices
- Don't rename `STORAGE_KEY` — silently wipes user data
- Don't use deep Khan Academy links — they rot. Search URLs are stable.
- Don't use `entry.type === "X"`-style direct comparisons for "did the kid get this right" — use `isAnswerCorrect(answerRecord)`
- Don't compare `picked === correctIdx` directly — same reason; grid-in entries need `psatAnswersMatch`
- Don't iterate `SECTIONS` directly when the path is test-type-sensitive — use `currentSections()` or `findSectionByKey(key)`

## User preferences picked up across the project

- Plain prose, no emojis in commit messages or code unless explicitly for kid-facing UI
- Auto Mode is on — bias toward action over clarifying questions for small calls
- Confident fixes get auto-applied; borderline calls go in a report (e.g. `AUDIT_REPORT.md` or commit-message footnotes)
- Single-file `index.html` is the right call for app code; data extraction was a good tradeoff
- Local commits first; push when explicitly told OR when shipping a coherent feature pile
- Bump `APP_VERSION` on substantive pushes
- Co-author tag on commits: `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`
