// TINY_LETTERS — Unicorn Quest letter + sight-word questions.
// One entry type with a subtype field:
//   subtype: "letter" | "word"
// Shape:
//   { type: "tinyQuiz", subtype, prompt, visual?, choices[4], correct, cheer? }
// Choices render as four big colorful buttons in a 2×2 grid. visual (optional
// emoji string) renders LARGE above the prompt. cheer (optional) overrides
// the random celebration phrase shown on a right answer.
//
// Append-only — never reorder, splice, or delete entries (mistakes pool is
// keyed by array index, even for tiny mode).
const TINY_LETTERS = [
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the letter A.", choices: ["A", "M", "S", "K"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Which letter is at the start of 🐱?", visual: "🐱", choices: ["B", "C", "D", "G"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the lowercase r.", choices: ["n", "m", "r", "h"], correct: 2 },
  { type: "tinyQuiz", subtype: "word",   prompt: "Which one says 'cat'?", choices: ["dog", "cat", "bat", "rat"], correct: 1 },
  { type: "tinyQuiz", subtype: "word",   prompt: "Which word means a place you sleep?", choices: ["bed", "cup", "pan", "fan"], correct: 0 },


  // ─── Generated batch appended 2026-05-27 ──────────────
  // --- Letter recognition (15) ---
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the letter A.", choices: ["A", "M", "S", "K"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the letter B.", choices: ["H", "B", "R", "T"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Find the letter C.", choices: ["G", "O", "C", "Q"], correct: 2 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Which is the capital letter E?", choices: ["F", "L", "T", "E"], correct: 3 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the letter H.", choices: ["H", "N", "M", "K"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Find the letter S.", choices: ["Z", "S", "C", "X"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Which is the capital letter Z?", choices: ["N", "X", "Z", "S"], correct: 2 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Find the lowercase a.", choices: ["e", "o", "u", "a"], correct: 3 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Find the lowercase m.", choices: ["m", "n", "w", "h"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the small letter s.", choices: ["c", "s", "z", "x"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Which is the small letter t?", choices: ["l", "f", "t", "i"], correct: 2 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Find the lowercase o.", choices: ["a", "e", "u", "o"], correct: 3 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the letter that looks like a snake.", choices: ["S", "T", "L", "K"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Find the letter O.", choices: ["A", "O", "I", "H"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Which is the capital letter R?", choices: ["K", "N", "R", "F"], correct: 2 },

  // --- Phonics / letter sounds (10) ---
  { type: "tinyQuiz", subtype: "letter", prompt: "Which letter says /s/?", visual: "🐍", choices: ["S", "T", "M", "P"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Which letter says /b/?", visual: "⚽", choices: ["D", "B", "P", "G"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "What letter does 🍎 start with?", visual: "🍎", choices: ["O", "E", "A", "U"], correct: 2 },
  { type: "tinyQuiz", subtype: "letter", prompt: "What letter does 🐱 start with?", visual: "🐱", choices: ["K", "S", "T", "C"], correct: 3 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the letter that starts 'ball'.", visual: "⚾", choices: ["B", "L", "M", "F"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "What letter does 🐶 start with?", visual: "🐶", choices: ["B", "D", "G", "P"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Which letter says /m/?", visual: "🌙", choices: ["N", "W", "M", "H"], correct: 2 },
  { type: "tinyQuiz", subtype: "letter", prompt: "What letter does 🌞 start with?", visual: "🌞", choices: ["C", "T", "M", "S"], correct: 3, cheer: "Sunshine smart! 🌞" },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the letter that starts 'fish'.", visual: "🐟", choices: ["F", "S", "H", "T"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Which letter says /t/?", visual: "🐯", choices: ["D", "T", "P", "K"], correct: 1 },

  // --- Sight words & simple CVC words (10) ---
  { type: "tinyQuiz", subtype: "word", prompt: "Which one says 'cat'?", visual: "🐱", choices: ["cat", "cab", "bat", "rat"], correct: 0 },
  { type: "tinyQuiz", subtype: "word", prompt: "Which one says 'dog'?", visual: "🐶", choices: ["log", "dog", "dot", "dig"], correct: 1 },
  { type: "tinyQuiz", subtype: "word", prompt: "Tap the word 'see'.", choices: ["she", "sea", "see", "set"], correct: 2 },
  { type: "tinyQuiz", subtype: "word", prompt: "Tap the word 'the'.", choices: ["she", "her", "them", "the"], correct: 3 },
  { type: "tinyQuiz", subtype: "word", prompt: "Which one says 'sun'?", visual: "🌞", choices: ["sun", "fun", "run", "bun"], correct: 0 },
  { type: "tinyQuiz", subtype: "word", prompt: "Tap the word 'and'.", choices: ["end", "and", "ant", "add"], correct: 1 },
  { type: "tinyQuiz", subtype: "word", prompt: "Which word means a hat you wear on your head?", visual: "🎩", choices: ["bat", "mat", "hat", "rat"], correct: 2 },
  { type: "tinyQuiz", subtype: "word", prompt: "Tap the word 'go'.", choices: ["so", "do", "no", "go"], correct: 3 },
  { type: "tinyQuiz", subtype: "word", prompt: "Which one says 'big'?", choices: ["big", "bag", "bug", "beg"], correct: 0, cheer: "Big brain! 🧠" },
  { type: "tinyQuiz", subtype: "word", prompt: "Tap the word 'me'.", choices: ["my", "me", "we", "be"], correct: 1 },
];
