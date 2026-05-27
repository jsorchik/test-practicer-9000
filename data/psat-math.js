// PSAT Math — multiple-choice entries.
//
// Each entry shape:
//   { type: "psatMath",
//     question: "The question text. Math symbols / fractions OK — the
//                fmtFractions renderer will stack X/Y forms.",
//     correct: "the right answer string",
//     wrong:   [3 plausible-but-wrong strings],
//     explanation: "Step-by-step solution."
//   }
//
// V1 is multiple choice only. Calculator is allowed throughout (matches the
// post-2023 digital PSAT). Topics span: linear algebra, functions, geometry,
// problem-solving + data analysis, percentages, probability. Grid-in (numeric
// input) entries land later when the renderer supports them.
//
// Append-only — never reorder, splice, or delete entries (mistakes pool is
// keyed by array index). To replace a duplicate's content, edit it in place
// to preserve its index.

const PSAT_MATH = [
  {
    type: "psatMath",
    question: "If 3x + 7 = 22, what is the value of x?",
    correct: "5",
    wrong: ["3", "7", "15"],
    explanation: "Subtract 7 from both sides: 3x = 15. Then x = 5.",
  },
  {
    type: "psatMath",
    question: "A rectangle has length 12 and width 5. What is the length of its diagonal?",
    correct: "13",
    wrong: ["17", "7", "60"],
    explanation: "By the Pythagorean theorem, diagonal² = 12² + 5² = 144 + 25 = 169. So diagonal = 13.",
  },
  {
    type: "psatMath",
    question: "If f(x) = 2x² − 3x + 1, what is f(4)?",
    correct: "21",
    wrong: ["17", "25", "32"],
    explanation: "f(4) = 2(16) − 3(4) + 1 = 32 − 12 + 1 = 21.",
  },
  {
    type: "psatMath",
    question: "A jar holds 15 marbles — 6 red, 4 blue, 5 green. If one marble is drawn at random, what is the probability it is NOT red?",
    correct: "3/5",
    wrong: ["2/5", "1/3", "9/10"],
    explanation: "Non-red marbles: 4 blue + 5 green = 9. Total = 15. P(not red) = 9/15 = 3/5.",
  },
  {
    type: "psatMath",
    question: "The price of a shirt is reduced by 20%, then reduced by an additional 25% off the sale price. What is the total percentage discount from the original price?",
    correct: "40%",
    wrong: ["45%", "50%", "35%"],
    explanation: "After 20% off, you pay 80% of original. After 25% off that, you pay 75% of 80% = 60% of original. So 40% off total.",
  },
];
