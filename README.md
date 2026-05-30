# Custom Test Practicer 9000

A web app for practicing entrance-exam-style tests. Built originally for one kid's ISEE prep; now supports three modes: **ISEE** (Lower / Bridge / Middle levels), **PSAT 8/9** (Reading & Writing + Math), and **Unicorn Quest** — a read-aloud "tiny mode" for a 5-year-old learning letters, phonics, and counting. One static page, no build step, hosted on GitHub Pages.

**Live:** https://jsorchik.github.io/test-practicer-9000/

## What's in it

- **Three test types** — toggle ISEE / PSAT / Unicorn Quest from the home view; each tracks its own progress, mistakes, and (optional) payouts independently
- **~4,500 questions** across all banks, audited for accuracy, level fit, and real-test distractor patterns
- **Practice mode** (instant feedback, missed questions recycle) and **Test mode** (timed, real-format, no per-question feedback)
- **Real-test bubble-sheet UX**: numbered question navigator, flag-for-review, free navigation between questions, lock-in submit confirmation
- **Half-length** and **full-length** test variants (rolled into the Test mode button as sub-tabs)
- **Mistakes pool** with mastery drilling (3 in a row to master) + reveal-answer + Khan brush-up links
- **Mock Test Day** (ISEE): full battery of all 6 sections back-to-back with breaks at the natural points
- **Past tests history**: every test you've completed, with full per-question detail recoverable
- **Monetized Mode** (parent-gated, per-test-type): per-test, accuracy-bonus, and mastery payouts into a single rewards bank; daily-rotating PIN (today's MMDD); Mark-Paid reset
- **Unicorn Quest** (tiny mode): browser text-to-speech narrates every question for a pre-reader, with a 🔊 replay button, big emoji visuals, color-coded answer buttons, and a unicorn mascot
- **PSAT-format support**: inline data tables, SVG charts (bar/line/scatter), grid-in numeric input questions
- **Khan Academy "Brush up" links** on every missed math/quant question (topic-tagged across ~950 entries)
- **Auto-update banner**: polls for a new deployed version and prompts a reload, so a kid mid-session sees fresh content after a push
- Celebrations: confetti on perfect scores, streak tracking, end-of-test summaries

## Content standards

The question banks are written to mirror the real exams' distractor construction, not just plausible-looking wrong answers:

- **ISEE verbal** (synonyms + sentence completion) follows the ERB pattern: at most one antonym + at most one related-trap + the rest unrelated-domain neutrals — avoiding the "spot the outlier" shortcut the real test doesn't offer.
- **Math** distractors each map to a specific student-error archetype (wrong-operation, sign-error, factor-of-10, swap-numerator/denominator, wrong-formula, intermediate-quantity, off-by-one).
- **Quant comparison** items respect the "never *cannot-be-determined* when both columns are all-numeric" rule, with a balanced answer distribution.
- **Reading** passages are 300-600 words (ISEE convention), nonfiction or narrative-nonfiction at the Middle level, and every question is tagged with its ERB question type (main idea / supporting / inference / vocab / organization / tone).
- **PSAT R&W** questions are tagged with the College Board's 10-type taxonomy, with per-type distractor patterns (4-relation transitions, punctuation-ladder boundaries, support/weaken evidence items, etc.).

Sources: ERB *What to Expect on the ISEE* guides and the College Board *Assessment Framework for the Digital SAT Suite*, plus established test-prep publishers.

## Architecture

Single static page (`index.html` ~7.4k lines) plus 23 question-bank files under `data/`. No build step, no dependencies, no backend. Everything runs in the browser; state persists via localStorage.

See `CLAUDE.md` for the full architecture map, data shapes, invariants, and conventions for future development.

## Run locally

```
python3 -m http.server 8000
# then open http://localhost:8000
```

Current build version + date appears in a muted footer at the bottom of every view (handy when reporting bugs or sanity-checking that a fix landed after a hard refresh).
