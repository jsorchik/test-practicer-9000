# Test Practicer 9000

A web app for practicing for entrance-exam-style tests (synonyms, sentence completion, quantitative reasoning, math, reading comprehension, essay). Built originally for one kid's ISEE prep.

**Live:** https://jsorchik.github.io/test-practicer-9000/

## What's in it

- Three grade levels (Lower / Bridge / Middle), each with its own question bank
- ~3,400 questions total, content-audited for accuracy and level fit
- Practice mode (instant feedback, missed questions recycle) and Test mode (timed, real-ISEE format)
- Half-length and full-length test variants
- Mistakes pool with mastery drilling
- Mock Test Day: full battery of all 6 sections back-to-back with breaks at the natural points
- Celebrations: confetti on perfect scores, streak tracking, end-of-test summaries

## Architecture

Single static page (`index.html`) plus 18 question-bank files under `data/`. No build step, no dependencies. Deploys directly to GitHub Pages. Everything runs in the browser; state persists via localStorage.

See `CLAUDE.md` for details on invariants and conventions for future development.

## Run locally

```
python3 -m http.server 8000
# then open http://localhost:8000
```
