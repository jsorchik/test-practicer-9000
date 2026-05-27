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
];
