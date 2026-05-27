# PSAT Math Audit

## Summary
- Total entries reviewed: 128
- Critical issues (must fix): 0
- Quality issues (consider fixing): 4
- Style notes (optional): 3

All 128 entries were worked through by hand. No math errors found — every `correct` value matches what I computed. Format is consistent across the bank (all entries have `type`, `question`, `correct` as string, `wrong` as 3-string array, `explanation`). No figure dependencies. No exact duplicates.

## Critical issues

None. Every problem's stated `correct` value matches the computed answer.

## Quality issues

### Entry 106 (line ~768)
- **Question:** "A fair coin is flipped twice. What is the probability of getting heads both times?"
- **Issue:** Distractors are `["1/2", "1/3", "2/4"]`. `2/4 = 1/2`, so two of the three wrong answers are numerically identical. That effectively gives the student only two distinct wrong choices, and a careful reader will notice the redundancy and use it as a tell.
- **Suggested fix:** Replace `"2/4"` with `"1/8"` (a common "I multiplied wrong" mistake — e.g. confusing two flips with three, or applying an extra ½). Other plausible swaps: `"3/4"` (complement confusion) or `"1"`.

### Entry 36 (line ~278)
- **Question:** "If x > 5, which of the following must also be true?" Correct: `"2x > 10"`.
- **Issue:** A bit too easy/abstract — the distractors `"x > 10"`, `"x < 5"`, `"x = 5"` are all trivially eliminable. `"x < 5"` and `"x = 5"` directly contradict the premise; `"x > 10"` is the only one a student might briefly consider. Real PSAT items in this genre usually offer at least two near-misses.
- **Suggested fix:** Stronger distractor set, e.g. `["x > 10", "x − 1 > 5", "x/2 > 5"]` — at least one of those (`x − 1 > 5` means `x > 6`, which is not implied by `x > 5`) makes the student actually reason. (Note: `x/2 > 5` ↔ `x > 10`, so don't use both.)

### Entry 121 vs. Entry 1 (near-duplicate Pythagorean triple)
- **Issue:** Entry 1 (smoke-test set, untouchable) asks for the diagonal of a 12-by-5 rectangle (answer 13). Entry 121 asks for the unknown leg of a right triangle with hypotenuse 13 and leg 5 (answer 12). Same (5, 12, 13) triple, just inverted. Not strictly a duplicate — different direction of the Pythagorean theorem — but the kid will recognize the numbers instantly on entry 121 after seeing entry 1.
- **Suggested fix:** Swap entry 121's triple to (7, 24, 25) or (9, 40, 41) for variety. Replace in place to preserve index. Don't touch entry 1 (it's in the locked smoke-test set).

### Entry 67 vs. Entry 47 (similar question shape, identical distractors)
- **Issue:** Entry 47 asks `|x| = 7` → `7 and −7`, with wrongs `["7 only", "−7 only", "0 and 7"]`. Entry 67 asks `x² = 49` → `7 and −7`, with the **exact same** wrong array `["7 only", "−7 only", "0 and 7"]`. Different concepts (absolute value vs. squaring), but the answer-set shape is identical and the distractors carry over verbatim. The kid will pattern-match.
- **Suggested fix:** Diversify entry 67's distractors, e.g. `["49 and −49", "7 only", "±49"]` — these target common mistakes (forgot to take a root, only the positive root, doubled the answer).

## Style notes

### Entry 97 — non-integer Pythagorean answer
- **Question:** "A 12-foot ladder leans against a wall. Its base is 5 feet from the wall. How high up the wall does the ladder reach?" Correct: `"√119 ft"`.
- **Note:** The math is correct (`√(144 − 25) = √119`), and the distractors are well-chosen (13 = "added instead of subtracted", 7 = "subtracted linearly", 17 = "summed the legs"). But most ladder-problem traditions use Pythagorean triples so the answer is a clean integer (e.g. 5-12-**13** ladder with base 5 → height 12, or a 10-foot ladder with base 6 → height 8). Leaving as `√119` is defensible (PSAT does include irrational answers), but a triple-based version would feel less arbitrary for a kid.
- **Optional fix:** Change to "A 13-foot ladder leans against a wall, base 5 feet out — how high does it reach?" with correct `"12 ft"` and distractors `["13 ft", "8 ft", "18 ft"]`.

### Entries 116, 117 (unit conversion) — bottom of the difficulty range
- 116: "Convert 250 cm to meters" → 2.5 m.
- 117: "Convert 5 feet to inches" → 60 in.
- **Note:** Both are essentially single-step arithmetic that any 5th–6th grader can do. They're in scope for PSAT 8/9 "problem-solving" but are the easiest items in the bank. Fine to keep for confidence-building; just be aware they don't really train PSAT-level reasoning.

### Entry 98 ("What is 35% of 80?")
- **Note:** Same comment as above — single-step percent calculation, lower end of the difficulty range. The pure-arithmetic flavor is unusual for PSAT, which tends to embed percents in word problems (see entries 99–102, which are better calibrated). Could be left as a warm-up.
