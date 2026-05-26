# CLAUDE.md — for future Claude sessions

A test-practice web app for a 12-year-old prepping for the ISEE Middle Level entrance exam. Hosted on GitHub Pages, no build step.

## Run it

Just open `index.html`. There's no bundler, no install, no `package.json`. Local dev: any static server (`python3 -m http.server` or `npx serve .`). Deploy: push to `main`, GitHub Pages serves it.

## File structure

```
index.html              ← all app code (CSS, HTML, JS) ~3.1k lines
data/
  lower-words.js        ← LOWER_WORDS              (synonym bank, Lower)
  lower-sentences.js    ← LOWER_SENTENCE_COMPLETIONS
  lower-quant.js        ← LOWER_QUANT
  lower-math.js         ← LOWER_MATH_ACHIEVEMENT
  lower-reading.js      ← LOWER_READING (object: {passages, questions})
  lower-essays.js       ← LOWER_ESSAY_PROMPTS
  middle-*.js           ← same shape, Middle Level (WORDS, SENTENCE_COMPLETIONS, etc.)
  bridge-*.js           ← same shape, Bridge Level (BRIDGE_WORDS, etc.)
AUDIT_REPORT.md         ← Phase 2 content-audit findings (one-time, 2026-05)
```

Each data file declares its bank with `const NAME = [...]`. Non-module classic `<script>` tags share a global lexical scope, so the consts are visible to the inline app script that loads after them. Load order matters — see the script tags at the bottom of `<head>`.

## Critical invariants

### Append-only data arrays
Mistakes are stored in `state.lifetimes[grade].mistakes` keyed by `${grade}-${sectionKey}-${idx}` where `idx` is the **array index** in the bank. **Do not reorder, splice, or delete entries** in any data bank — the kid's mistakes pool would point to the wrong questions. Always append new entries; if you must change an existing entry, edit it in place to preserve its index.

The one safe form of dedup is **replacing** a duplicate's content in-place. Past dupe fixes (commit `f62badd`): three duplicate Middle WORDS headwords were rewritten as fresh entries at the same indices.

### Storage key
`STORAGE_KEY = "isee-progress-v5"`. **Do not rename** — the app was once explicitly named ISEE-something, the user later asked for generic naming, but localStorage data uses this exact key. Renaming silently wipes everyone's stats. The comment at the constant says as much.

### Grade levels
Three: `lower` (Grades 4→5), `bridge` (Grade 5→6), `middle` (Grades 6→7). All three have the same six section keys: `verbal_synonyms`, `verbal_completion`, `quant_reasoning`, `math_achievement`, `reading`, `essay`. The kid's grade is `state.gradeLevel`.

### Test volume
`state.testVolume` is `"half"` or `"full"`. Each `GRADES[g].tests` is the half-length config; `GRADES[g].testsFull` is the real-ISEE config. `testConfigFor(section)` picks the right one. Default `"half"` for daily practice.

## Architecture

### Modes
`state.mode` is one of:
- `"practice"` — instant feedback, no timer, missed questions recycle back into the queue
- `"test"` — timed section, feedback hidden until the end
- `"review"` — drill the mistakes pool until each entry hits the `MASTERY_THRESHOLD = 3` correct-in-a-row threshold

### Views
`state.view` and the `showView(name)` switcher: `home | quiz | results | mistakes | essay | stats | batteryTransition | batteryResults`. All views are sibling divs in `<body>`; `showView` toggles `.hidden` on each.

### Battery mode (Mock Test Day)
A "full battery" mode that chains all 6 sections back-to-back in real-ISEE order (Verbal → Quant → break → Reading → Math → break → Essay). `state.battery.active` locks the kid in (back button hidden). `finishTest`/`finishEssay` check `state.battery.active` and dispatch into `batteryAdvanceAfterSection` instead of the normal results view. Reward formula is in `calculateBatteryReward`.

### Question registry
`buildRegistries()` walks every bank at boot and builds `QUESTION_REGISTRY[id] = { entry, sectionKey, gradeLevel }` for fast lookup of any question by its mistakes-pool key. Reading passages get their own `PASSAGE_LOOKUP[passageId]`.

## When adding content

- **Synonyms / sentences**: append to the end of the relevant `data/{grade}-{section}.js` file
- **Math / quant**: same; verify the math holds before committing
- **Reading**: add a passage to `passages[]` and at least one question with `passageId` matching
- **Essays**: append a string to the prompts array
- Run `node -e "..."` to verify the file parses; spawn agents for content audits at scale (see `AUDIT_REPORT.md` for the audit format)

## Things NOT to do

- Don't add a build step or bundler — keep it drag-and-drop deployable to GH Pages
- Don't add backend dependencies — it's a static app by design (parent-remote-review was explicitly deferred)
- Don't `confirm()` for major flows — use the in-app modal pattern (see `#batteryModal`); native `confirm()` is unreliable on mobile Safari
- Don't add tests — the kid is the user, the test plan is "does it run cleanly when refreshed and a section starts"; rely on `node -e 'new Function(...)'` for parse-check
- Don't commit data without running the parse-check across all `data/*.js` plus the inline app script in load order

## User preferences picked up across the project

- Plain prose, no emojis in commit messages or code unless explicitly for kid-facing UI
- Auto Mode is on — bias toward action over clarifying questions for small calls
- Confident fixes get auto-applied; borderline calls go in a report (e.g. AUDIT_REPORT.md)
- Single-file index.html is the right call for app code; data extraction was a good tradeoff
