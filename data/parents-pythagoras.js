// PARENTS_PYTHAGORAS — "Parents' Choice" → Middle → Pythagorean Theorem.
//
// Solving right triangles with a² + b² = c². Two directions:
//   • Find the hypotenuse:  c = √(a² + b²)   (square the legs, add, square-root)
//   • Find a missing leg:   a = √(c² − b²)   (SUBTRACT — the hypotenuse is biggest)
//
// The recurring teaching points in the `steps`:
//   - c is the hypotenuse: the longest side, opposite the right angle.
//   - Square first, add/subtract, THEN take the square root at the end —
//     don't just add the sides (3 + 4 ≠ 5).
//   - Solving for a LEG means subtracting (leg² = c² − b²), and a leg must
//     come out SHORTER than the hypotenuse — a built-in sanity check.
//
// Answers use Pythagorean triples (3-4-5, 6-8-10, 5-12-13, 8-15-17, 9-12-15,
// 7-24-25, 9-40-41) so they come out clean. `math`-type MCQ with `steps`.
// Distractors map to the classic errors: adding the sides without squaring,
// forgetting the final square root, or adding instead of subtracting for a leg.
//
// Append-only — never reorder/splice/delete (mistakes pool keys by index).
const PARENTS_PYTHAGORAS = [
  {
    type: "math", topic: "pythagorean",
    question: "A right triangle has legs 3 and 4. Find the hypotenuse c.",
    correct: "5", wrong: ["7", "12", "25"],
    steps: [
      "The two given sides are the legs. You want c, the hypotenuse (longest side, across from the right angle).",
      "Formula: a² + b² = c²",
      "Square each leg and add: 3² + 4² = 9 + 16 = 25 — that's c².",
      "Take the square root: c = √25 = 5",
      "Tip: don't just add the sides (3 + 4 = 7). You must square first, then square-root at the very end.",
    ],
    explanation: "c = √(3² + 4²) = √25 = 5.",
  },
  {
    type: "math", topic: "pythagorean",
    question: "A right triangle has legs 6 and 8. Find the hypotenuse c.",
    correct: "10", wrong: ["14", "48", "100"],
    steps: [
      "Square the legs and add: 6² + 8² = 36 + 64 = 100 = c²",
      "Square root: c = √100 = 10",
    ],
    explanation: "c = √(36 + 64) = √100 = 10.",
  },
  {
    type: "math", topic: "pythagorean",
    question: "A right triangle has legs 5 and 12. Find the hypotenuse c.",
    correct: "13", wrong: ["17", "60", "169"],
    steps: [
      "Square the legs and add: 5² + 12² = 25 + 144 = 169 = c²",
      "Square root: c = √169 = 13",
    ],
    explanation: "c = √(25 + 144) = √169 = 13.",
  },
  {
    type: "math", topic: "pythagorean",
    question: "A right triangle has legs 8 and 15. Find the hypotenuse c.",
    correct: "17", wrong: ["23", "120", "289"],
    steps: [
      "Square the legs and add: 8² + 15² = 64 + 225 = 289 = c²",
      "Square root: c = √289 = 17",
    ],
    explanation: "c = √(64 + 225) = √289 = 17.",
  },
  {
    type: "math", topic: "pythagorean",
    question: "A right triangle has legs 9 and 12. Find the hypotenuse c.",
    correct: "15", wrong: ["21", "108", "225"],
    steps: [
      "Square the legs and add: 9² + 12² = 81 + 144 = 225 = c²",
      "Square root: c = √225 = 15",
      "(This is the 3-4-5 triangle tripled: 9-12-15.)",
    ],
    explanation: "c = √(81 + 144) = √225 = 15.",
  },
  {
    type: "math", topic: "pythagorean",
    question: "A right triangle has legs 7 and 24. Find the hypotenuse c.",
    correct: "25", wrong: ["31", "168", "625"],
    steps: [
      "Square the legs and add: 7² + 24² = 49 + 576 = 625 = c²",
      "Square root: c = √625 = 25",
    ],
    explanation: "c = √(49 + 576) = √625 = 25.",
  },
  {
    type: "math", topic: "pythagorean",
    question: "A right triangle has a hypotenuse of 5 and one leg of 3. Find the other leg.",
    correct: "4", wrong: ["2", "5.83", "16"],
    steps: [
      "Here c = 5 is the hypotenuse and you're missing a LEG.",
      "Rearrange a² + b² = c² to solve for the leg: leg² = c² − b² (subtract, because the hypotenuse is the biggest side).",
      "Plug in: leg² = 5² − 3² = 25 − 9 = 16",
      "Square root: leg = √16 = 4",
      "Sanity check: a leg must be shorter than the hypotenuse (5). If you ADD instead (√(25+9) ≈ 5.83) you'd get something longer than c — impossible.",
    ],
    explanation: "leg = √(5² − 3²) = √16 = 4.",
  },
  {
    type: "math", topic: "pythagorean",
    question: "A right triangle has a hypotenuse of 13 and one leg of 5. Find the other leg.",
    correct: "12", wrong: ["8", "13.93", "144"],
    steps: [
      "c = 13 is the hypotenuse; you're missing a leg, so SUBTRACT.",
      "leg² = c² − b² = 13² − 5² = 169 − 25 = 144",
      "Square root: leg = √144 = 12",
    ],
    explanation: "leg = √(169 − 25) = √144 = 12.",
  },
  {
    type: "math", topic: "pythagorean",
    question: "A right triangle has a hypotenuse of 10 and one leg of 6. Find the other leg.",
    correct: "8", wrong: ["4", "11.66", "64"],
    steps: [
      "c = 10 is the hypotenuse; missing a leg, so SUBTRACT.",
      "leg² = 10² − 6² = 100 − 36 = 64",
      "Square root: leg = √64 = 8",
    ],
    explanation: "leg = √(100 − 36) = √64 = 8.",
  },
  {
    type: "math", topic: "pythagorean",
    question: "A right triangle has a hypotenuse of 17 and one leg of 15. Find the other leg.",
    correct: "8", wrong: ["2", "22.67", "64"],
    steps: [
      "c = 17 is the hypotenuse; missing a leg, so SUBTRACT.",
      "leg² = 17² − 15² = 289 − 225 = 64",
      "Square root: leg = √64 = 8",
    ],
    explanation: "leg = √(289 − 225) = √64 = 8.",
  },
  {
    type: "math", topic: "pythagorean",
    question: "A right triangle has legs 9 and 40. Find the hypotenuse c.",
    correct: "41", wrong: ["49", "360", "1681"],
    steps: [
      "Square the legs and add: 9² + 40² = 81 + 1600 = 1681 = c²",
      "Square root: c = √1681 = 41",
    ],
    explanation: "c = √(81 + 1600) = √1681 = 41.",
  },
  {
    type: "math", topic: "pythagorean",
    question: "A ladder leans on a wall. Its base is 6 ft from the wall and it reaches 8 ft up the wall. How long is the ladder?",
    correct: "10", wrong: ["14", "48", "100"],
    steps: [
      "The wall and ground make the right angle, so the two distances (6 ft and 8 ft) are the legs, and the ladder is the hypotenuse c.",
      "a² + b² = c²  →  6² + 8² = 36 + 64 = 100 = c²",
      "Square root: c = √100 = 10 ft",
      "Real-world tip: the ladder (hypotenuse) is always the longest side — longer than either the height or the base.",
    ],
    explanation: "ladder = √(6² + 8²) = √100 = 10 ft.",
  },
];
