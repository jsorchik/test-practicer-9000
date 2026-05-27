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
  { type: "tinyQuiz", subtype: "word",   prompt: "Which word matches?", visual: "🐱", choices: ["dog", "cat", "bat", "rat"], correct: 1 },
  { type: "tinyQuiz", subtype: "word",   prompt: "Which word means a place you sleep?", visual: "🛏️", choices: ["bed", "cup", "pan", "fan"], correct: 0 },


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
  { type: "tinyQuiz", subtype: "letter", prompt: "What letter does this start with?", visual: "⚾", choices: ["B", "L", "M", "F"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "What letter does 🐶 start with?", visual: "🐶", choices: ["B", "D", "G", "P"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Which letter says /m/?", visual: "🌙", choices: ["N", "W", "M", "H"], correct: 2 },
  { type: "tinyQuiz", subtype: "letter", prompt: "What letter does 🌞 start with?", visual: "🌞", choices: ["C", "T", "M", "S"], correct: 3, cheer: "Sunshine smart! 🌞" },
  { type: "tinyQuiz", subtype: "letter", prompt: "What letter does this start with?", visual: "🐟", choices: ["F", "S", "H", "T"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Which letter says /t/?", visual: "🐯", choices: ["D", "T", "P", "K"], correct: 1 },

  // --- Picture-word matching (10) ---
  // Rewritten 2026-05-27: original "Tap the word 'cat'" / "Which one says
  // 'cat'?" pattern put the answer literally in the prompt — a 5yo would
  // just match letters in prompt to letters in choices instead of reading.
  // Now everything is picture-based: kid sees the emoji, picks the word.
  // Abstract function-words (the, and, go, me) that can't be pictured were
  // swapped for concrete nouns. Indices preserved per the append-only rule.
  { type: "tinyQuiz", subtype: "word", prompt: "Which word matches?", visual: "🐱", choices: ["cat", "cab", "bat", "rat"], correct: 0 },
  { type: "tinyQuiz", subtype: "word", prompt: "Which word matches?", visual: "🐶", choices: ["log", "dog", "dot", "dig"], correct: 1 },
  { type: "tinyQuiz", subtype: "word", prompt: "Which word matches?", visual: "👀", choices: ["ear", "egg", "eye", "elf"], correct: 2 },
  { type: "tinyQuiz", subtype: "word", prompt: "Which word matches?", visual: "🚗", choices: ["bus", "van", "jet", "car"], correct: 3 },
  { type: "tinyQuiz", subtype: "word", prompt: "Which word matches?", visual: "🌞", choices: ["sun", "fun", "run", "bun"], correct: 0 },
  { type: "tinyQuiz", subtype: "word", prompt: "Which word matches?", visual: "🐝", choices: ["bug", "bee", "bow", "boo"], correct: 1 },
  { type: "tinyQuiz", subtype: "word", prompt: "Which word matches?", visual: "🎩", choices: ["bat", "mat", "hat", "rat"], correct: 2 },
  { type: "tinyQuiz", subtype: "word", prompt: "Which word matches?", visual: "🐟", choices: ["fan", "fin", "fox", "fish"], correct: 3 },
  { type: "tinyQuiz", subtype: "word", prompt: "Which word means very large?", visual: "🐘", choices: ["big", "bag", "bug", "beg"], correct: 0, cheer: "Big brain! 🧠" },
  { type: "tinyQuiz", subtype: "word", prompt: "Which word matches?", visual: "🛏️", choices: ["bed", "bow", "bib", "bug"], correct: 0 },
];
