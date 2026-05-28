// TINY_NUMBERS — Unicorn Quest counting / add-subtract / number / shape
// questions. One entry type with a subtype field:
//   subtype: "count" | "addSub" | "number" | "shape"
// Shape:
//   { type: "tinyQuiz", subtype, prompt, audioPrompt?, visual?, choices[4], correct, cheer? }
//
// audioPrompt is what TTS speaks aloud (kid can't read yet). prompt is the
// visible on-screen text (parent-readable backup). Emoji equations stay in
// prompt; audioPrompt describes them in words.
//
// Append-only — never reorder, splice, or delete entries (mistakes pool is
// keyed by array index, even for tiny mode).
const TINY_NUMBERS = [
  { type: "tinyQuiz", subtype: "count",  prompt: "How many?", audioPrompt: "How many apples?", visual: "🍎🍎🍎", choices: ["2", "3", "4", "5"], correct: 1 },
  { type: "tinyQuiz", subtype: "count",  prompt: "How many?", audioPrompt: "How many stars?", visual: "⭐⭐⭐⭐⭐", choices: ["3", "4", "5", "6"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "🐱 + 🐱 = ?", audioPrompt: "One cat plus one cat. How many cats?", visual: "🐱 + 🐱", choices: ["1", "2", "3", "4"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "🍪🍪🍪 − 🍪 = ?", audioPrompt: "You have three cookies. You eat one. How many are left?", visual: "🍪🍪🍪 − 🍪", choices: ["1", "2", "3", "4"], correct: 1 },
  { type: "tinyQuiz", subtype: "number", prompt: "Tap the 5", audioPrompt: "Tap the number five.", choices: ["3", "5", "7", "8"], correct: 1 },


  // ─── Generated batch appended 2026-05-27 ──────────────
  // ===== COUNTING (12) =====
  { type: "tinyQuiz", subtype: "count", prompt: "How many?", audioPrompt: "How many apples?", visual: "🍎🍎🍎", choices: ["2", "3", "4", "5"], correct: 1 },
  { type: "tinyQuiz", subtype: "count", prompt: "How many?", audioPrompt: "Count the stars.", visual: "⭐⭐⭐⭐⭐", choices: ["3", "4", "5", "6"], correct: 2 },
  { type: "tinyQuiz", subtype: "count", prompt: "How many?", audioPrompt: "How many cats do you see?", visual: "🐱🐱", choices: ["2", "3", "4", "5"], correct: 0 },
  { type: "tinyQuiz", subtype: "count", prompt: "How many?", audioPrompt: "How many puppies?", visual: "🐶🐶🐶🐶", choices: ["1", "2", "3", "4"], correct: 3 },
  { type: "tinyQuiz", subtype: "count", prompt: "How many?", audioPrompt: "Count the rainbows.", visual: "🌈", choices: ["1", "2", "3", "4"], correct: 0 },
  { type: "tinyQuiz", subtype: "count", prompt: "How many?", audioPrompt: "How many cookies?", visual: "🍪🍪🍪🍪🍪🍪", choices: ["4", "5", "6", "7"], correct: 2 },
  { type: "tinyQuiz", subtype: "count", prompt: "How many?", audioPrompt: "How many balloons?", visual: "🎈🎈🎈🎈🎈🎈🎈", choices: ["6", "7", "8", "9"], correct: 1 },
  { type: "tinyQuiz", subtype: "count", prompt: "How many?", audioPrompt: "Count the flowers.", visual: "🌸🌸🌸🌸🌸🌸🌸🌸", choices: ["5", "6", "7", "8"], correct: 3, cheer: "Wow, you counted 8! 🌟" },
  { type: "tinyQuiz", subtype: "count", prompt: "How many?", audioPrompt: "How many bees?", visual: "🐝🐝🐝🐝🐝", choices: ["3", "4", "5", "6"], correct: 2 },
  { type: "tinyQuiz", subtype: "count", prompt: "How many?", audioPrompt: "Count the butterflies.", visual: "🦋🦋🦋🦋🦋🦋🦋🦋🦋", choices: ["7", "8", "9", "10"], correct: 2, cheer: "Counting champ! 🦋" },
  { type: "tinyQuiz", subtype: "count", prompt: "How many?", audioPrompt: "How many presents?", visual: "🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁", choices: ["7", "8", "9", "10"], correct: 3, cheer: "All the way to 10! 🎁" },
  { type: "tinyQuiz", subtype: "count", prompt: "How many?", audioPrompt: "How many suns?", visual: "🌞🌞🌞", choices: ["3", "4", "5", "6"], correct: 0 },

  // ===== ADDITION (15) =====
  { type: "tinyQuiz", subtype: "addSub", prompt: "🐱 + 🐱 = ?", audioPrompt: "One cat plus one cat. How many cats?", visual: "🐱 + 🐱", choices: ["1", "2", "3", "4"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "1 + 1 = ?", audioPrompt: "One plus one equals?", choices: ["2", "3", "4", "5"], correct: 0 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "2 + 1 = ?", audioPrompt: "Two plus one equals?", choices: ["1", "2", "3", "4"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "🍎🍎 + 🍎 = ?", audioPrompt: "You have two apples. You get one more. How many apples now?", visual: "🍎🍎 + 🍎", choices: ["1", "2", "3", "4"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "2 + 2 = ?", audioPrompt: "Two plus two equals?", choices: ["2", "3", "4", "5"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "🐶 + 🐶 + 🐶 = ?", audioPrompt: "One puppy plus one puppy plus one puppy. How many puppies?", visual: "🐶 + 🐶 + 🐶", choices: ["3", "4", "5", "6"], correct: 0 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "3 + 1 = ?", audioPrompt: "Three plus one equals?", choices: ["2", "3", "4", "5"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "2 + 3 = ?", audioPrompt: "Two plus three equals?", choices: ["3", "4", "5", "6"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "🎈🎈🎈 + 🎈🎈 = ?", audioPrompt: "You have three balloons. You get two more. How many balloons now?", visual: "🎈🎈🎈 + 🎈🎈", choices: ["4", "5", "6", "7"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "3 + 3 = ?", audioPrompt: "Three plus three equals?", choices: ["4", "5", "6", "7"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "⭐ + ⭐ + ⭐ + ⭐ = ?", audioPrompt: "One star plus one star plus one star plus one star. How many stars?", visual: "⭐ + ⭐ + ⭐ + ⭐", choices: ["2", "3", "4", "5"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "4 + 3 = ?", audioPrompt: "Four plus three equals?", choices: ["5", "6", "7", "8"], correct: 2, cheer: "Adding superstar! 🌟" },
  { type: "tinyQuiz", subtype: "addSub", prompt: "🍪🍪🍪🍪 + 🍪🍪🍪🍪 = ?", audioPrompt: "You have four cookies. You get four more. How many cookies now?", visual: "🍪🍪🍪🍪 + 🍪🍪🍪🍪", choices: ["5", "6", "7", "8"], correct: 3 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "5 + 4 = ?", audioPrompt: "Five plus four equals?", choices: ["6", "7", "8", "9"], correct: 3, cheer: "You did it! 🎉" },
  { type: "tinyQuiz", subtype: "addSub", prompt: "5 + 5 = ?", audioPrompt: "Five plus five equals?", choices: ["7", "8", "9", "10"], correct: 3, cheer: "Math wizard! 🪄" },

  // ===== SUBTRACTION (8) =====
  { type: "tinyQuiz", subtype: "addSub", prompt: "🍪🍪🍪 − 🍪 = ?", audioPrompt: "You have three cookies. You eat one. How many are left?", visual: "🍪🍪🍪 − 🍪", choices: ["1", "2", "3", "4"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "2 − 1 = ?", audioPrompt: "Two minus one equals?", choices: ["1", "2", "3", "4"], correct: 0 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "4 − 2 = ?", audioPrompt: "Four minus two equals?", choices: ["1", "2", "3", "4"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "🍎🍎🍎🍎🍎 − 🍎🍎 = ?", audioPrompt: "You have five apples. You eat two. How many are left?", visual: "🍎🍎🍎🍎🍎 − 🍎🍎", choices: ["2", "3", "4", "5"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "5 − 1 = ?", audioPrompt: "Five minus one equals?", choices: ["3", "4", "5", "6"], correct: 1 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "⭐⭐⭐⭐⭐⭐ − ⭐⭐⭐ = ?", audioPrompt: "You have six stars. You give away three. How many are left?", visual: "⭐⭐⭐⭐⭐⭐ − ⭐⭐⭐", choices: ["1", "2", "3", "4"], correct: 2 },
  { type: "tinyQuiz", subtype: "addSub", prompt: "7 − 3 = ?", audioPrompt: "Seven minus three equals?", choices: ["3", "4", "5", "6"], correct: 1, cheer: "Subtraction superstar! 🌟" },
  { type: "tinyQuiz", subtype: "addSub", prompt: "🎈🎈🎈🎈🎈🎈🎈🎈🎈 − 🎈🎈 = ?", audioPrompt: "You have nine balloons. Two pop! How many balloons are left?", visual: "🎈🎈🎈🎈🎈🎈🎈🎈🎈 − 🎈🎈", choices: ["5", "6", "7", "8"], correct: 2, cheer: "You got it! 🎈" },

  // ===== NUMBER RECOGNITION (3) =====
  { type: "tinyQuiz", subtype: "number", prompt: "Tap the 5", audioPrompt: "Tap the number five.", choices: ["3", "5", "7", "8"], correct: 1 },
  { type: "tinyQuiz", subtype: "number", prompt: "Tap the 7", audioPrompt: "Tap the number seven.", choices: ["2", "4", "6", "7"], correct: 3 },
  { type: "tinyQuiz", subtype: "number", prompt: "Tap the 3", audioPrompt: "Tap the number three.", choices: ["3", "6", "8", "9"], correct: 0 },

  // ===== SHAPES (2) =====
  { type: "tinyQuiz", subtype: "shape", prompt: "Tap the triangle", audioPrompt: "Tap the triangle.", choices: ["🔺", "🟦", "🟢", "⭐"], correct: 0 },
  { type: "tinyQuiz", subtype: "shape", prompt: "Tap the circle", audioPrompt: "Tap the circle.", choices: ["🔺", "🟦", "🟢", "❤️"], correct: 2 },
];
