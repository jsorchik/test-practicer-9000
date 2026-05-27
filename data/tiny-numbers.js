// TINY_NUMBERS — Unicorn Quest counting / add-subtract / number / shape
// questions. One entry type with a subtype field:
//   subtype: "count" | "addSub" | "number" | "shape"
// Shape:
//   { type: "tinyQuiz", subtype, prompt, visual?, choices[4], correct, cheer? }
//
// Append-only — never reorder, splice, or delete entries (mistakes pool is
// keyed by array index, even for tiny mode).
const TINY_NUMBERS = [
  { type: "tinyQuiz", subtype: "count",  prompt: "How many apples?", visual: "🍎🍎🍎", choices: ["2", "3", "4", "5"], correct: 1 },
  { type: "tinyQuiz", subtype: "count",  prompt: "How many stars?", visual: "⭐⭐⭐⭐⭐", choices: ["3", "4", "5", "6"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "🐱 + 🐱 = ?", visual: "🐱 + 🐱", choices: ["1", "2", "3", "4"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "You have 🍪🍪🍪. You eat 🍪. How many left?", visual: "🍪🍪🍪 − 🍪", choices: ["1", "2", "3", "4"], correct: 1 },
  { type: "tinyQuiz", subtype: "number", prompt: "Tap the number 5.", choices: ["3", "5", "7", "8"], correct: 1 },
];
