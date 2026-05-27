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


  // ─── Generated batch appended 2026-05-27 ──────────────
  // ===== COUNTING (12) =====
  { type: "tinyQuiz", subtype: "count", prompt: "How many apples?", visual: "🍎🍎🍎", choices: ["2", "3", "4", "5"], correct: 1 },
  { type: "tinyQuiz", subtype: "count", prompt: "Count the stars.", visual: "⭐⭐⭐⭐⭐", choices: ["3", "4", "5", "6"], correct: 2 },
  { type: "tinyQuiz", subtype: "count", prompt: "How many cats do you see?", visual: "🐱🐱", choices: ["2", "3", "4", "5"], correct: 0 },
  { type: "tinyQuiz", subtype: "count", prompt: "How many puppies?", visual: "🐶🐶🐶🐶", choices: ["1", "2", "3", "4"], correct: 3 },
  { type: "tinyQuiz", subtype: "count", prompt: "Count the rainbows.", visual: "🌈", choices: ["1", "2", "3", "4"], correct: 0 },
  { type: "tinyQuiz", subtype: "count", prompt: "How many cookies?", visual: "🍪🍪🍪🍪🍪🍪", choices: ["4", "5", "6", "7"], correct: 2 },
  { type: "tinyQuiz", subtype: "count", prompt: "How many balloons?", visual: "🎈🎈🎈🎈🎈🎈🎈", choices: ["6", "7", "8", "9"], correct: 1 },
  { type: "tinyQuiz", subtype: "count", prompt: "Count the flowers.", visual: "🌸🌸🌸🌸🌸🌸🌸🌸", choices: ["5", "6", "7", "8"], correct: 3, cheer: "Wow, you counted 8! 🌟" },
  { type: "tinyQuiz", subtype: "count", prompt: "How many bees?", visual: "🐝🐝🐝🐝🐝", choices: ["3", "4", "5", "6"], correct: 2 },
  { type: "tinyQuiz", subtype: "count", prompt: "Count the butterflies.", visual: "🦋🦋🦋🦋🦋🦋🦋🦋🦋", choices: ["7", "8", "9", "10"], correct: 2, cheer: "Counting champ! 🦋" },
  { type: "tinyQuiz", subtype: "count", prompt: "How many presents?", visual: "🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁", choices: ["7", "8", "9", "10"], correct: 3, cheer: "All the way to 10! 🎁" },
  { type: "tinyQuiz", subtype: "count", prompt: "How many suns?", visual: "🌞🌞🌞", choices: ["3", "4", "5", "6"], correct: 0 },

  // ===== ADDITION (15) =====
  { type: "tinyQuiz", subtype: "addSub", prompt: "🐱 + 🐱 = ?", visual: "🐱 + 🐱", choices: ["1", "2", "3", "4"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "1 + 1 = ?", choices: ["2", "3", "4", "5"], correct: 0 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "2 + 1 = ?", choices: ["1", "2", "3", "4"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "You have 🍎🍎. You get 🍎. How many now?", visual: "🍎🍎 + 🍎", choices: ["1", "2", "3", "4"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "2 + 2 = ?", choices: ["2", "3", "4", "5"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "🐶 + 🐶 + 🐶 = ?", visual: "🐶 + 🐶 + 🐶", choices: ["3", "4", "5", "6"], correct: 0 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "3 + 1 = ?", choices: ["2", "3", "4", "5"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "2 + 3 = ?", choices: ["3", "4", "5", "6"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "You have 🎈🎈🎈. You get 🎈🎈. How many now?", visual: "🎈🎈🎈 + 🎈🎈", choices: ["4", "5", "6", "7"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "3 + 3 = ?", choices: ["4", "5", "6", "7"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "⭐ + ⭐ + ⭐ + ⭐ = ?", visual: "⭐ + ⭐ + ⭐ + ⭐", choices: ["2", "3", "4", "5"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "4 + 3 = ?", choices: ["5", "6", "7", "8"], correct: 2, cheer: "Adding superstar! 🌟" },
  { type: "tinyQuiz", subtype: "addSub", prompt: "You have 🍪🍪🍪🍪. You get 🍪🍪🍪🍪. How many now?", visual: "🍪🍪🍪🍪 + 🍪🍪🍪🍪", choices: ["5", "6", "7", "8"], correct: 3 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "5 + 4 = ?", choices: ["6", "7", "8", "9"], correct: 3, cheer: "You did it! 🎉" },
  { type: "tinyQuiz", subtype: "addSub", prompt: "5 + 5 = ?", choices: ["7", "8", "9", "10"], correct: 3, cheer: "Math wizard! 🪄" },

  // ===== SUBTRACTION (8) =====
  { type: "tinyQuiz", subtype: "addSub", prompt: "You have 🍪🍪🍪. You eat 🍪. How many left?", visual: "🍪🍪🍪 − 🍪", choices: ["1", "2", "3", "4"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "2 − 1 = ?", choices: ["1", "2", "3", "4"], correct: 0 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "4 − 2 = ?", choices: ["1", "2", "3", "4"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "You have 🍎🍎🍎🍎🍎. You eat 🍎🍎. How many left?", visual: "🍎🍎🍎🍎🍎 − 🍎🍎", choices: ["2", "3", "4", "5"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "5 − 1 = ?", choices: ["3", "4", "5", "6"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "You have ⭐⭐⭐⭐⭐⭐. You give away ⭐⭐⭐. How many left?", visual: "⭐⭐⭐⭐⭐⭐ − ⭐⭐⭐", choices: ["1", "2", "3", "4"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "7 − 3 = ?", choices: ["3", "4", "5", "6"], correct: 1, cheer: "Subtraction superstar! 🌟" },
  { type: "tinyQuiz", subtype: "addSub", prompt: "🎈🎈🎈🎈🎈🎈🎈🎈🎈 pop! pop! How many left?", visual: "🎈🎈🎈🎈🎈🎈🎈🎈🎈 − 🎈🎈", choices: ["5", "6", "7", "8"], correct: 2, cheer: "You got it! 🎈" },

  // ===== NUMBER RECOGNITION (3) =====
  { type: "tinyQuiz", subtype: "number", prompt: "Tap the number 5.", choices: ["3", "5", "7", "8"], correct: 1 },
  { type: "tinyQuiz", subtype: "number", prompt: "Tap the number 7.", choices: ["2", "4", "6", "7"], correct: 3 },
  { type: "tinyQuiz", subtype: "number", prompt: "Tap the number 3.", choices: ["3", "6", "8", "9"], correct: 0 },

  // ===== SHAPES (2) =====
  { type: "tinyQuiz", subtype: "shape", prompt: "Which one is a triangle?", choices: ["🔺", "🟦", "🟢", "⭐"], correct: 0 },
  { type: "tinyQuiz", subtype: "shape", prompt: "Which one is a circle?", choices: ["🔺", "🟦", "🟢", "❤️"], correct: 2 },
];
