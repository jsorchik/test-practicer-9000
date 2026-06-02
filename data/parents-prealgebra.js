// PARENTS_PREALGEBRA — "Parents' Choice" → Lower → Pre-Algebra.
//
// A reinforcement set for solving one-step and two-step linear equations
// (solve for the variable). Anchored on the example a parent asked for:
//   4h + 10 = 26   →   h = 4
//
// These are standard `math`-type MCQ entries, so they reuse all the normal
// machinery (practice mode with instant feedback, test mode, mistakes pool,
// Khan "Brush up" links via the topic field). The teaching happens in the
// `explanation` field — each one walks the steps and checks the answer, so
// in Practice mode the kid sees a full worked solution after every question.
//
// Distractors map to the classic mistakes: dividing before subtracting,
// adding instead of subtracting, off-by-one, or a sign slip.
//
// Append-only — never reorder/splice/delete (mistakes pool keys by index).
const PARENTS_PREALGEBRA = [
  {
    type: "math", topic: "linear_eq",
    question: "Solve for h:  4h + 10 = 26",
    correct: "4",
    wrong: ["9", "6", "16"],
    explanation: "Two steps. First get the h-term by itself: subtract 10 from BOTH sides → 4h = 16. Then undo the ×4: divide BOTH sides by 4 → h = 4. Check: 4(4) + 10 = 16 + 10 = 26 ✓. (Common slip: dividing 26 by 4 first — but you must clear the +10 before you divide.)",
  },
  {
    type: "math", topic: "linear_eq",
    question: "Solve for x:  3x + 5 = 20",
    correct: "5",
    wrong: ["7", "8", "15"],
    explanation: "Subtract 5 from both sides → 3x = 15. Divide both sides by 3 → x = 5. Check: 3(5) + 5 = 15 + 5 = 20 ✓.",
  },
  {
    type: "math", topic: "linear_eq",
    question: "Solve for h:  2h + 6 = 14",
    correct: "4",
    wrong: ["10", "7", "3"],
    explanation: "Subtract 6 from both sides → 2h = 8. Divide both sides by 2 → h = 4. Check: 2(4) + 6 = 8 + 6 = 14 ✓.",
  },
  {
    type: "math", topic: "linear_eq",
    question: "Solve for n:  5n + 3 = 28",
    correct: "5",
    wrong: ["6", "25", "4"],
    explanation: "Subtract 3 from both sides → 5n = 25. Divide both sides by 5 → n = 5. Check: 5(5) + 3 = 25 + 3 = 28 ✓.",
  },
  {
    type: "math", topic: "linear_eq",
    question: "Solve for h:  h + 7 = 12",
    correct: "5",
    wrong: ["19", "7", "4"],
    explanation: "Only one step here — there's no number multiplying h. Subtract 7 from both sides → h = 5. Check: 5 + 7 = 12 ✓.",
  },
  {
    type: "math", topic: "linear_eq",
    question: "Solve for h:  6h − 4 = 20",
    correct: "4",
    wrong: ["3", "16", "24"],
    explanation: "This one SUBTRACTS 4, so undo it by ADDING 4 to both sides → 6h = 24. Divide both sides by 6 → h = 4. Check: 6(4) − 4 = 24 − 4 = 20 ✓.",
  },
  {
    type: "math", topic: "linear_eq",
    question: "Solve for h:  7 + 2h = 15",
    correct: "4",
    wrong: ["11", "8", "3"],
    explanation: "The h-term can sit second — that's fine. Subtract 7 from both sides → 2h = 8. Divide both sides by 2 → h = 4. Check: 7 + 2(4) = 7 + 8 = 15 ✓.",
  },
  {
    type: "math", topic: "linear_eq",
    question: "Solve for x:  4x + 2 = 22",
    correct: "5",
    wrong: ["6", "20", "4"],
    explanation: "Subtract 2 from both sides → 4x = 20. Divide both sides by 4 → x = 5. Check: 4(5) + 2 = 20 + 2 = 22 ✓.",
  },
  {
    type: "math", topic: "linear_eq",
    question: "Solve for h:  3h − 6 = 9",
    correct: "5",
    wrong: ["1", "3", "15"],
    explanation: "Add 6 to both sides (to undo the −6) → 3h = 15. Divide both sides by 3 → h = 5. Check: 3(5) − 6 = 15 − 6 = 9 ✓.",
  },
  {
    type: "math", topic: "linear_eq",
    question: "Solve for n:  2n + 9 = 9",
    correct: "0",
    wrong: ["9", "1", "18"],
    explanation: "Subtract 9 from both sides → 2n = 0. Divide both sides by 2 → n = 0. Zero is a perfectly good answer! Check: 2(0) + 9 = 0 + 9 = 9 ✓.",
  },
  {
    type: "math", topic: "linear_eq",
    question: "Solve for h:  10h + 5 = 55",
    correct: "5",
    wrong: ["6", "50", "60"],
    explanation: "Subtract 5 from both sides → 10h = 50. Divide both sides by 10 → h = 5. Check: 10(5) + 5 = 50 + 5 = 55 ✓.",
  },
  {
    type: "math", topic: "linear_eq",
    question: "Solve for x:  8x − 3 = 21",
    correct: "3",
    wrong: ["2.25", "18", "24"],
    explanation: "Add 3 to both sides → 8x = 24. Divide both sides by 8 → x = 3. Check: 8(3) − 3 = 24 − 3 = 21 ✓. (If you got 2.25, you divided 21 ÷ 8 before clearing the −3.)",
  },
];
