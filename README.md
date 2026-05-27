# Custom Test Practicer 9000

A web app for practicing entrance-exam-style tests. Built originally for one kid's ISEE prep; now supports both **ISEE** (Lower / Bridge / Middle levels) and **PSAT 8/9** (Reading & Writing + Math). One static page, no build step, hosted on GitHub Pages.

**Live:** https://jsorchik.github.io/test-practicer-9000/

## What's in it

- **Two test types side by side** — toggle ISEE ↔ PSAT from the home view; each tracks its own progress, mistakes, and (optional) payouts independently
- **~3,800 questions** across all banks, audited for accuracy and level fit
- **Practice mode** (instant feedback, missed questions recycle) and **Test mode** (timed, real-format, no per-question feedback)
- **Real-test bubble-sheet UX**: numbered question navigator, flag-for-review, free navigation between questions, lock-in submit confirmation
- **Half-length** and **full-length** test variants
- **Mistakes pool** with mastery drilling (3 in a row to master) + reveal-answer + Khan brush-up links
- **Mock Test Day** (ISEE): full battery of all 6 sections back-to-back with breaks at the natural points
- **Past tests history**: every test you've completed, with full per-question detail recoverable
- **Monetized Mode** (parent-gated): per-test, accuracy-bonus, and mastery payouts; daily-rotating PIN (today's MMDD); Mark-Paid reset
- **PSAT-format support**: inline data tables, SVG charts (bar/line/scatter), grid-in numeric input questions
- **Khan Academy "Brush up" links** on every missed math/quant question (~948 entries topic-tagged)
- Celebrations: confetti on perfect scores, streak tracking, end-of-test summaries

## Architecture

Single static page (`index.html` ~6.2k lines) plus 20 question-bank files under `data/`. No build step, no dependencies, no backend. Everything runs in the browser; state persists via localStorage.

See `CLAUDE.md` for the full architecture map, data shapes, invariants, and conventions for future development.

## Run locally

```
python3 -m http.server 8000
# then open http://localhost:8000
```

Current build version + date appears in a muted footer at the bottom of every view (handy when reporting bugs or sanity-checking that a fix landed after a hard refresh).
