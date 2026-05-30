# CLAUDE.md — for future Claude sessions

A test-practice web app originally built for a 12-year-old prepping for the ISEE Middle Level. Now also supports PSAT 8/9 prep and a "Unicorn Quest" tiny mode for a 5-year-old learning letters / phonics / counting. Hosted on GitHub Pages, no build step.

## Run it

Just open `index.html`. There's no bundler, no install, no `package.json`. Local dev: any static server (`python3 -m http.server` or `npx serve .`). Deploy: push to `main`, GitHub Pages serves it.

## File structure

```
index.html              ← all app code (CSS, HTML, JS) — ~7.4k lines
data/
  lower-words.js        ← LOWER_WORDS                (synonym bank, ISEE Lower)
  lower-sentences.js    ← LOWER_SENTENCE_COMPLETIONS
  lower-quant.js        ← LOWER_QUANT
  lower-math.js         ← LOWER_MATH_ACHIEVEMENT
  lower-reading.js      ← LOWER_READING (object: {passages, questions})
  lower-essays.js       ← LOWER_ESSAY_PROMPTS
  bridge-*.js           ← same shape, Bridge Level (BRIDGE_WORDS, ...)
  middle-words.js       ← WORDS (Middle, unprefixed const name — legacy)
  middle-sentences.js   ← SENTENCE_COMPLETIONS (same — unprefixed)
  middle-{quant,math,reading,essays}.js ← QUANT_QUESTIONS, MATH_ACHIEVEMENT, READING, ESSAY_PROMPTS
  psat-rw.js            ← PSAT_READING_WRITING (mixed comprehension / vocab / writingEdit)
  psat-math.js          ← PSAT_MATH (MCQ + grid-in + charts + tables)
  tiny-letters.js       ← TINY_LETTERS (Unicorn Quest — letter recognition + phonics)
  tiny-numbers.js       ← TINY_NUMBERS (Unicorn Quest — counting + simple math)
  definitions.js        ← EXTRA_DEFINITIONS for sentence-completion words
AUDIT_REPORT.md         ← Phase 2 content-audit findings (one-time, 2026-05)
.gitignore              ← excludes .psat-tmp/ (agent staging area, kept local)
```

Each data file declares its bank with `const NAME = [...]`. Non-module classic `<script>` tags share a global lexical scope, so the consts are visible to the inline app script that loads after them. Load order matters — see the `<script src>` tags at the bottom of `<head>`.

**Naming quirk:** `middle-words.js` and `middle-sentences.js` use unprefixed const names (`WORDS`, `SENTENCE_COMPLETIONS`) for historical reasons. Lower/Bridge use prefixed names. Don't refactor — load order makes it work and changing breaks the `tests:` config that references them.

## Versioning

Footer at the bottom of every view shows the build stamp (`v3.19.3 · 2026-05-29`) so a parent can confirm what version the kid is running after a hard refresh. Two constants near the top of the inline script:

```js
const APP_VERSION = "3.19.3";
const APP_VERSION_DATE = "2026-05-29";
```

Bump on every push of substantive changes. Small UX nits don't need a bump.

**Auto-update banner** (`v3.15+`): the app polls `index.html` every 5 min + on tab visibility change + on `pageshow`, regex-extracts the live `APP_VERSION`, and surfaces a "New version available — Reload" floating banner if it differs from the one bootstrapped. Dismissible per session. No new files to maintain — re-uses APP_VERSION as the source of truth.

## Critical invariants

### Append-only data arrays
Mistakes are stored in `state.lifetimes[testType][grade].mistakes` keyed by `${grade}-${sectionKey}-${idx}` where `idx` is the **array index** in the bank. **Do not reorder, splice, or delete entries** in any data bank — the kid's mistakes pool would point to the wrong questions. Always append new entries; if you must change an existing entry, edit it in place to preserve its index.

The one safe form of dedup is **replacing** a duplicate's content in-place. Past dupe fixes (commit `f62badd`): three duplicate Middle WORDS headwords were rewritten as fresh entries at the same indices.

### Storage key
`STORAGE_KEY = "isee-progress-v5"`. **Do not rename** — the app was once explicitly named ISEE-something, the user later asked for generic naming, but localStorage data uses this exact key. Renaming silently wipes everyone's stats.

### Test types
Three: `isee` (default), `psat`, `tiny` (Unicorn Quest for a 5yo). `state.testType` is the current selector; home view has a top-level pill toggle. Each test type owns its own grades and sections, with lifetimes nested under `state.lifetimes[testType][grade]`.

```js
TESTS.isee.grades   = GRADES                     // {lower, bridge, middle}
TESTS.isee.sections = SECTIONS                   // verbal_synonyms, verbal_completion, …
TESTS.psat.grades   = { psat89: {...} }
TESTS.psat.sections = PSAT_SECTIONS              // psat_rw, psat_math
TESTS.tiny.grades   = { prek: {...} }
TESTS.tiny.sections = TINY_SECTIONS              // tiny_letters, tiny_numbers
```

Helper functions (use these instead of `GRADES` / `SECTIONS` directly when the path is test-type-sensitive):

- `currentTest()` — `TESTS[state.testType]`
- `currentGrades()` — current test type's grades
- `currentSections()` — current test type's section list
- `currentGrade()` — `TESTS[testType].grades[gradeLevel]`
- `findSectionByKey(key)` — section lookup across **all** test types (for rendering mistakes from either type)
- `L()` — current testType + grade lifetime (falls back to a frozen `EMPTY_LIFETIME` stub if no current grade exists)

`state.lastGradeByType` remembers the per-type grade selection so toggling ISEE ↔ PSAT ↔ Tiny restores spot.

### Grade levels and sections

| Test type | Grade keys | Section keys |
|---|---|---|
| `isee` | `lower` (4→5), `bridge` (5→6), `middle` (6→7) | `verbal_synonyms`, `verbal_completion`, `verbal_combined`, `quant_reasoning`, `math_achievement`, `reading`, `essay` |
| `psat` | `psat89` (8→9) | `psat_rw`, `psat_math` |
| `tiny` | `prek` (4-6yo) | `tiny_letters`, `tiny_numbers` |

PSAT has no essay (the real digital PSAT dropped its essay in 2021). Tiny has no essay or reading.

`verbal_combined` is the real-ISEE-format combined verbal section (synonyms + sentence-completion mixed in one timed block); shown in test mode. Practice mode shows the two individual cards.

### Test volume
`state.testVolume` is `"half"` or `"full"`. Each grade's `tests` is the half-length config; `testsFull` is the real-test config. `testConfigFor(section)` picks the right one. Default `"half"` for daily practice.

The home view exposes this as **two sub-tabs of the Test mode button** (`Test · Half | Test · Full`), not a separate row. Tapping either sub-tab sets `state.mode = "test"` + `state.testVolume` in one click.

### Question entry types
`makeQuestion(entry, sectionKey, idx, gradeLevel)` dispatches on entry shape. Optional `topic` field (math/quant only) drives Khan brush-up links. Optional `qType` field (reading/PSAT R&W) carries the ERB / College Board question-type taxonomy.

| Type | Shape | Notes |
|---|---|---|
| `quantComparison` | `{type, columnA, columnB, answer: "a"\|"b"\|"equal"\|"cant", explanation, topic?}` | ISEE quant-reasoning style. **Rule:** `answer: "cant"` is NEVER valid when both columns are all-numeric — numbers always have a determinable relationship. |
| `psatMath` | `{type, question, correct, wrong[3], explanation, chart?, topic?}` | PSAT MCQ; optional inline chart or `<table>` in question |
| `psatMathGridIn` | `{type, question, correct, accept[]?, explanation, chart?, topic?}` | No `wrong[]`; kid types answer; `psatAnswersMatch` handles equivalents |
| `psatRW` | `{type, subtype: "comprehension"\|"vocab"\|"writingEdit", passage, question, choices[4], correct: 0-3, qType?, explanation}` | Passage inline; `<u>...</u>` allowed in passages. See "Question type taxonomies" below for qType values. |
| `math` (ISEE) | `{type, question, correct, wrong[3], explanation, topic?}` | Same as psatMath sans chart support |
| Reading question (ISEE) | `{question, choices, correct, explanation, passageId, qType?, topic?}` (no `type` field) | `passageId` links to a separate passage object |
| Sentence completion | `{sentence, correct, wrong[3], explanation}` | Sentence has `___` for the blank |
| Synonym | `{word, correct, wrong[3], meaning}` | `meaning` shown in feedback |
| `tinyQuiz` | `{type, subtype: "letter"\|"word"\|"count"\|"addSub"\|"number"\|"shape", prompt, audioPrompt?, visual?, choices[4], correct, cheer?}` | Unicorn Quest. Big-emoji visual + 4 huge color-coded choice buttons. `audioPrompt` overrides what's spoken via TTS (see Tiny mode section). |
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

### Math choices: ascending numeric order
ISEE / PSAT convention: when every answer choice is a pure number, present them ascending A-D rather than shuffled. `buildMathChoices(correct, wrong)` (in the inline script) does this — detects all-numeric via `isPureNumeric()`, sorts ascending; otherwise falls back to `shuffle()`. Used by the `math` and `psatMath` branches in `makeQuestion`. Non-numeric (algebraic expressions, prose, fractions) still shuffles.

## Architecture

### Modes
`state.mode` is one of:
- `"practice"` — instant feedback, no timer, missed questions recycle back into the queue
- `"test"` — timed section, no per-question feedback during test; numbered navigator strip + flag-for-review + free navigation + Submit Section confirmation
- `"review"` — drill the mistakes pool until each entry hits `MASTERY_THRESHOLD = 3` correct-in-a-row

### Views
`state.view` and `showView(name)`: `home | quiz | results | mistakes | essay | stats | tests | essays | batteryTransition | batteryResults`. All views are sibling divs in `<body>`; `showView` toggles `.hidden`. Routable views (`home/stats/essays/tests/mistakes`) sync to URL hash.

### Home selectors (compact layout, v3.14+)
Test type and grade are single-row segmented controls (not 3-column chunky cards). Subtitles ("Independent School Entrance Exam", "Grades 4 → 5") live in `title=` hover tooltips + screen-reader-only `.tt-sub` / `.sub` spans. Mode row is `[Practice] [Test · Half | Test · Full] [Review]` — the two Test sub-tabs sit flush against each other with a hairline divider so they read as a single segmented control. No separate volume toggle row.

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

### Recent-picks exclusion (v3.17+)
Test mode used to pure-random sample from each bank. With 668-word banks and 10 picks per test, birthday-paradox math meant the kid hit repeats by test 2 about 25% of the time. Now each `(testType × grade × poolKey)` tracks the last few tests' worth of picked indices in `L().recentPicks[poolKey]` and biases new draws away from them.

Helpers:
- `pickWithExclusion(pool, count, recent)` — prefers fresh indices; if fresh pool isn't big enough, tops up with the OLDEST recents (FIFO un-exclusion) so a draw never short-returns
- `rememberRecentPicks(poolKey, picks, poolSize)` — appends + de-dups + trims to `min(0.4 × poolSize, 120)`

Wired into `startTest` for combined + single-section + battery draws. Practice mode already cycles through the full pool so it doesn't need this; review mode is naturally bounded by the mistakes pool.

`saveProgress()` is called immediately after `startTest` sets the queue so the exclusion survives a mid-test refresh.

### Monetized Mode (v3.10+ — per-test-type)
Parent-gated payout system. Home view has a **"💰 Monetized Settings"** button (neutrally-styled — parent UI, not kid bait). Tapping it opens a modal that's **PIN-gated on every open** (no session unlock — kid can't blast the modal open between tests to jack up payouts).

**PIN is today's date as MMDD** (e.g. `0527` for May 27), computed daily via `getCurrentParentPin()`. Not persisted — rotates every day.

### Per-test-type switches + payouts
The modal shows three stacked cards — one per test type (ISEE / PSAT / Unicorn Quest). Each card has:
- iOS-style toggle switch (`state.monetizedByType[testType]`)
- Payout fields, COLLAPSED when the switch is off (cleaner modal):
  - `testBase` — for finishing a full-length test (halved in half-mode via `payoutScale()`)
  - `perCorrect` — per right answer (unscaled)
  - `testGoodBonus` — bonus at ≥85% accuracy
  - `testGreatBonus` — bonus at ≥95% accuracy
  - `mtdCompletionBonus` — ISEE only (hidden for PSAT/Tiny which have no MTD)
  - `reviewMasteryBounty` — per mistake mastered (3-in-a-row natural mastery; manual "Mark as mastered" intentionally doesn't pay)
- Live payout preview ("Per test 17-q: 85% → $2.65, 100% → $4.25" etc.) — `previewHtmlFor(testType)` computes against the type's default grade + current testVolume
- "↻ Reset payouts to defaults" button

All inputs **auto-save on each keystroke** — no Save button. Closing the modal optionally launches MTD if the flow was kicked off by a "Mock Test Day → Monetized required" intercept.

Per-type config lives in `state.payoutConfigByType[testType]`. Defaults in `DEFAULT_PAYOUT_CONFIG_BY_TYPE` — ISEE/PSAT share `DEFAULT_PAYOUT_CONFIG`; Tiny uses `TINY_DEFAULT_PAYOUT_CONFIG` (smaller numbers since tests are 5-10 questions).

Helpers (always use these, don't read state directly):
- `isMonetizedActive()` — current test type's switch
- `isMonetizedFor(testType)` — specific test type
- `activePayoutConfig()` — current test type's payout config (with fallback)

### Single global rewards bank (v3.11+)
Previously banked rewards were per-`(testType × grade)`. Now there's a single `state.rewardsBanked` shared across all test types and grades. `loadProgress` migrates legacy per-grade balances by summing into the global on first load and zeroing the old fields. All payout sites (per-test, MTD, essay, mastery bounty) write to `state.rewardsBanked`. The home header chip shows whenever `state.rewardsBanked > 0` regardless of any monetized switch — the kid is owed whatever's accrued even if the parent later turns everything off.

The Settings modal shows the bank at top as an **editable number input** (parent can manually adjust if the kid earned cash off-app). Mark Paid is a one-click zero. Editing auto-saves + updates the home header chip live via `refreshBankedBadge(viewName)`.

### Anti-spam
- Per-test: if elapsed < `MIN_SEC_PER_QUESTION × N`, payout = $0
- Per-essay: if elapsed < `ESSAY_MIN_SEC` (5 min) AND words ≥ 100, payout = $0

### Tiny mode (Unicorn Quest, v3.9+)
Pink-themed kid mode for a ~5-year-old learning letters / phonics / counting. `state.testType === "tiny"` enables it. The kid CAN'T read questions, so:

- **Browser TTS narration** — every `tinyQuiz` question speaks itself aloud via `window.speechSynthesis` when it renders. Optional `audioPrompt` field on the entry overrides what's spoken (useful when visible prompt is short/visual — "🐱 starts with…" — but spoken needs full words — "What letter does cat start with?"). Falls back to `prompt` if not set.
- **🔊 Replay button** — big pink circle next to the prompt; tap to hear it again
- **Visual emoji** — `entry.visual` renders LARGE above the prompt
- **2×2 grid of huge color-coded buttons** — body.tiny-mode CSS overrides `.option`
- **Unicorn mascot** — `tinyMascot` shows during quiz; reacts (cheer/sad) on each answer
- **Test-mode chrome suppressed** — no nav strip, flag, or Submit Section button (confusing for a 5yo). Tests still time out + finish via standard `finishTest` path.

Helpers: `tinySpeak(text)`, `tinyStopSpeak()`, `tinyMascotShow/Hide/React`. Speech is cancelled before each new utterance + on view changes via `showView`.

Content design: emoji-led phonics ("🐱 starts with…"), short visible prompts, full-sentence `audioPrompt` for TTS. Digit names spelled out ("Tap the number five.") for warmer TTS pronunciation.

### Khan Academy "Brush up" links
Missed math/quant questions in three places (results screen, past-tests history, mistakes-list reveal) show a `📚 Brush up: [Topic]` link to a Khan Academy search-results page.

URLs are **search-form** (`khanacademy.org/search?page_search_query=...`), not deep links — Khan reorganizes URL paths every couple years, search URLs are stable.

`MATH_TOPICS` taxonomy (~32 topics) maps topic key → `{label, query}`. `brushUpLinkFor(entry)` returns "" for entries without a `topic` field (so verbal/essay/tiny entries naturally get no link).

Tagged via 4-agent batch run; ~948 math/quant entries across all banks. To add new entries: include a `topic` field referencing one of `MATH_TOPICS`'s keys.

### Past tests history
`L().tests` array (per testType + grade) stores up to 50 most-recent test snapshots. Each record includes per-question detail (id, choices, correctIdx, picked, isGridIn, correctAnswer, acceptedAnswers, feedbackHtml) so old tests are fully reviewable. `renderTestsHistory()` lists them; clicking expands per-question review (uses same `renderReviewItem` as the live results screen for visual consistency).

**Important:** because past tests store a full snapshot of `choices` + `correctIdx` + `feedbackHtml` at finish time, rewrites to a bank's `wrong[]` arrays **do not retroactively affect past tests** — they render from the snapshot, not the live bank. Mistakes pool entries (which key by ID + track `correctStreak`/`mastered` only) carry forward stats but pick up new distractors on the next review pass.

### Review surfaces (consistency)
Three views show "here's what you got wrong + why":

| Surface | Renderer | Compactness |
|---|---|---|
| Post-test results screen | `renderReviewItem` | Full |
| Past tests history (expanded card) | `renderReviewItem` (same) | Full |
| Mistakes list (reveal toggle) | Custom inline (compact for scan) | Scan-first, reveal on tap |

All three use the same `.ans-block.correct` green panel for the right answer, the same `.explain` styling for the explanation, and the same `brushUpLinkFor` for Khan links. Quant-comparison entries render side-by-side columns in all three.

## Question type taxonomies (qType field)

Reading + PSAT R&W entries carry an optional `qType` field tagged via batch agents (v3.19.2-3). Currently unused by the app at render time — enables future per-type distractor audits, UI breakdowns, and content-balance checks.

### ISEE Reading (6 types — ERB official)
`mainIdea` | `supporting` | `inference` | `vocab` | `organization` | `tone`

Source: ERB *What to Expect on the ISEE — Lower/Middle/Upper* guides.

### PSAT R&W (10 types — College Board official)
**Information & Ideas:** `centralIdeas` | `commandEvidenceTextual` | `commandEvidenceQuant` | `inferences`
**Craft & Structure:** `wordsInContext` | `textStructurePurpose` | `crossText`
**Expression of Ideas:** `rhetoricalSynthesis` | `transitions`
**Standard English Conventions:** `boundaries` | `formStructureSense`

Source: College Board *Assessment Framework for the Digital SAT Suite* (2022).

## Content standards (ERB / College Board distractor patterns)

The verbal banks were rewritten in v3.19 to match the real ERB / ISEE distractor pattern documented in official sources (ERB *What to Expect* guides + tutor analyses: Mindfish, Test Innovators, Piqosity). The pattern:

> **AT MOST ONE antonym + AT MOST ONE related-trap + the rest unrelated-domain neutrals.**

The bad pattern we're avoiding ("3-antonym cluster" — correct is the obvious outlier in a sea of antonyms or a tight thematic cluster) is **explicitly not** what ERB does. Tutors actually teach students to exploit the rarity of antonym pairs as an elimination heuristic on the real test.

For math distractors: each wrong should map to a specific student-error archetype (wrong-operation, sign-error, factor-of-10, swap-numerator/denominator, wrong-formula, intermediate-quantity, off-by-one) — not random plausible-looking numbers.

For quant-comparison: `answer: "cant"` is never valid when both columns are all-numeric. Distribution target: roughly 25% each of a/b/equal/cant, with cant capped near 20-25%.

For reading passages: ISEE convention is 300-600 words (~400 avg). Middle/Upper passages should be nonfiction or narrative-nonfiction, not invented short fiction.

## When adding content

- **Synonyms / sentences**: append to the end of the relevant `data/{grade}-{section}.js` file. Follow the ERB distractor pattern above.
- **Math / quant** (ISEE or PSAT): same; verify the math holds. Include a `topic` field for Khan linking. Distractors should map to specific student-error archetypes.
- **Reading**: add a passage to `passages[]` (300-600 words for ISEE) and at least one question with `passageId` matching. Tag with `qType`.
- **Essays**: append a string to the prompts array
- **PSAT R&W**: append to `data/psat-rw.js` with the right `subtype` (comprehension/vocab/writingEdit) and `qType` (10-type College Board taxonomy)
- **PSAT Math**: append to `data/psat-math.js`; can include `chart` field for SVG charts, HTML `<table>` inline in `question`, or `psatMathGridIn` type for numeric input
- **Tiny mode**: append to `data/tiny-letters.js` or `data/tiny-numbers.js`. Always provide an `audioPrompt` if the visible `prompt` won't speak well via TTS.
- Run `node -e "..."` to parse-check the data files + the inline app script in load order

### Agent-driven content batches
Pattern: spawn parallel agents to write content batches → each writes a self-contained JS array literal to `.psat-tmp/batchname.js` → merge into the canonical data file via a Node script that finds the closing `];` and injects the new entries before it → audit-agent verifies math correctness / quality → apply audit fixes in place → commit.

`.psat-tmp/` is gitignored. Staging files + audit reports stay local-only.

For audit-style rewrites (e.g. the v3.19 distractor rewrite), agents EDIT IN PLACE rather than appending — preserves array indices for the mistakes pool.

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
- Don't read `state.monetized` or `state.payoutConfig` — those names don't exist anymore. Use `isMonetizedActive()` / `activePayoutConfig()` / `isMonetizedFor(testType)`.
- Don't write to `L().rewardsBanked` — there's no per-grade bank anymore. Write to `state.rewardsBanked`.
- Don't write the visible `prompt` for tiny entries assuming TTS will speak it well. Add `audioPrompt` for anything with emoji, slash-phonemes (`/s/`), or digits.

## User preferences picked up across the project

- Plain prose, no emojis in commit messages or code unless explicitly for kid-facing UI
- Auto Mode is on — bias toward action over clarifying questions for small calls
- Confident fixes get auto-applied; borderline calls go in a report (e.g. `AUDIT_REPORT.md` or commit-message footnotes)
- Single-file `index.html` is the right call for app code; data extraction was a good tradeoff
- Local commits first; push when explicitly told OR when shipping a coherent feature pile
- Bump `APP_VERSION` on substantive pushes
- Co-author tag on commits: `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`
- When researching test-prep patterns (ISEE distractors, PSAT taxonomies, etc.), prefer official ERB / College Board sources first; then established test-prep publishers (Test Innovators, Piqosity, Mindfish, Kaplan, Princeton Review); avoid random blogs / AI-generated content
