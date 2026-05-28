// TINY_LETTERS — Unicorn Quest letter + sight-word questions.
// One entry type with a subtype field:
//   subtype: "letter" | "word"
// Shape:
//   { type: "tinyQuiz", subtype, prompt, audioPrompt?, visual?, choices[4], correct, cheer? }
// Choices render as four big colorful buttons in a 2×2 grid. visual (optional
// emoji string) renders LARGE above the prompt. cheer (optional) overrides
// the random celebration phrase shown on a right answer. audioPrompt (optional)
// is what the browser TTS reads aloud — kid is pre-reader, so spoken phrasing
// must use real noun names (TTS skips emoji silently) and avoid /x/ phoneme
// notation. Falls back to prompt when audioPrompt is missing.
//
// Append-only — never reorder, splice, or delete entries (mistakes pool is
// keyed by array index, even for tiny mode).
const TINY_LETTERS = [
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the A", audioPrompt: "Tap the letter A.", choices: ["A", "M", "S", "K"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "🐱 starts with…", audioPrompt: "What letter does cat start with?", visual: "🐱", choices: ["B", "C", "D", "G"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the r", audioPrompt: "Tap the lowercase letter r.", choices: ["n", "m", "r", "h"], correct: 2 },
  { type: "tinyQuiz", subtype: "word",   prompt: "🐱 says…", audioPrompt: "Which word says cat?", visual: "🐱", choices: ["dog", "cat", "bat", "rat"], correct: 1 },
  { type: "tinyQuiz", subtype: "word",   prompt: "🛏️ is a…", audioPrompt: "Which word names where you sleep?", visual: "🛏️", choices: ["bed", "cup", "pan", "fan"], correct: 0 },


  // ─── Generated batch appended 2026-05-27 ──────────────
  // --- Letter recognition (15) ---
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the A", audioPrompt: "Tap the letter A.", choices: ["A", "M", "S", "K"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the B", audioPrompt: "Tap the letter B.", choices: ["H", "B", "R", "T"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the C", audioPrompt: "Find the letter C.", choices: ["G", "O", "C", "Q"], correct: 2 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the E", audioPrompt: "Tap the big letter E.", choices: ["F", "L", "T", "E"], correct: 3 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the H", audioPrompt: "Tap the letter H.", choices: ["H", "N", "M", "K"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the S", audioPrompt: "Find the letter S.", choices: ["Z", "S", "C", "X"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the Z", audioPrompt: "Tap the big letter Z.", choices: ["N", "X", "Z", "S"], correct: 2 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the a", audioPrompt: "Find the lowercase letter a.", choices: ["e", "o", "u", "a"], correct: 3 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the m", audioPrompt: "Find the lowercase letter m.", choices: ["m", "n", "w", "h"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the s", audioPrompt: "Tap the small letter s.", choices: ["c", "s", "z", "x"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the t", audioPrompt: "Tap the small letter t.", choices: ["l", "f", "t", "i"], correct: 2 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the o", audioPrompt: "Find the lowercase letter o.", choices: ["a", "e", "u", "o"], correct: 3 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the S", audioPrompt: "Tap the letter that looks like a snake.", choices: ["S", "T", "L", "K"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the O", audioPrompt: "Find the letter O.", choices: ["A", "O", "I", "H"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "Tap the R", audioPrompt: "Tap the big letter R.", choices: ["K", "N", "R", "F"], correct: 2 },

  // --- Phonics / letter sounds (10) ---
  { type: "tinyQuiz", subtype: "letter", prompt: "🐍 starts with…", audioPrompt: "What letter does snake start with?", visual: "🐍", choices: ["S", "T", "M", "P"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "⚽ starts with…", audioPrompt: "What letter does ball start with?", visual: "⚽", choices: ["D", "B", "P", "G"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "🍎 starts with…", audioPrompt: "What letter does apple start with?", visual: "🍎", choices: ["O", "E", "A", "U"], correct: 2 },
  { type: "tinyQuiz", subtype: "letter", prompt: "🐱 starts with…", audioPrompt: "What letter does cat start with?", visual: "🐱", choices: ["K", "S", "T", "C"], correct: 3 },
  { type: "tinyQuiz", subtype: "letter", prompt: "⚾ starts with…", audioPrompt: "What letter does baseball start with?", visual: "⚾", choices: ["B", "L", "M", "F"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "🐶 starts with…", audioPrompt: "What letter does dog start with?", visual: "🐶", choices: ["B", "D", "G", "P"], correct: 1 },
  { type: "tinyQuiz", subtype: "letter", prompt: "🌙 starts with…", audioPrompt: "What letter does moon start with?", visual: "🌙", choices: ["N", "W", "M", "H"], correct: 2 },
  { type: "tinyQuiz", subtype: "letter", prompt: "🌞 starts with…", audioPrompt: "What letter does sun start with?", visual: "🌞", choices: ["C", "T", "M", "S"], correct: 3, cheer: "Sunshine smart! 🌞" },
  { type: "tinyQuiz", subtype: "letter", prompt: "🐟 starts with…", audioPrompt: "What letter does fish start with?", visual: "🐟", choices: ["F", "S", "H", "T"], correct: 0 },
  { type: "tinyQuiz", subtype: "letter", prompt: "🐯 starts with…", audioPrompt: "What letter does tiger start with?", visual: "🐯", choices: ["D", "T", "P", "K"], correct: 1 },

  // --- Picture-word matching (10) ---
  // Rewritten 2026-05-27: original "Tap the word 'cat'" / "Which one says
  // 'cat'?" pattern put the answer literally in the prompt — a 5yo would
  // just match letters in prompt to letters in choices instead of reading.
  // Now everything is picture-based: kid sees the emoji, picks the word.
  // Abstract function-words (the, and, go, me) that can't be pictured were
  // swapped for concrete nouns. Indices preserved per the append-only rule.
  { type: "tinyQuiz", subtype: "word", prompt: "🐱 says…", audioPrompt: "Which word says cat?", visual: "🐱", choices: ["cat", "cab", "bat", "rat"], correct: 0 },
  { type: "tinyQuiz", subtype: "word", prompt: "🐶 says…", audioPrompt: "Which word says dog?", visual: "🐶", choices: ["log", "dog", "dot", "dig"], correct: 1 },
  { type: "tinyQuiz", subtype: "word", prompt: "👀 says…", audioPrompt: "Which word says eye?", visual: "👀", choices: ["ear", "egg", "eye", "elf"], correct: 2 },
  { type: "tinyQuiz", subtype: "word", prompt: "🚗 says…", audioPrompt: "Which word says car?", visual: "🚗", choices: ["bus", "van", "jet", "car"], correct: 3 },
  { type: "tinyQuiz", subtype: "word", prompt: "🌞 says…", audioPrompt: "Which word says sun?", visual: "🌞", choices: ["sun", "fun", "run", "bun"], correct: 0 },
  { type: "tinyQuiz", subtype: "word", prompt: "🐝 says…", audioPrompt: "Which word says bee?", visual: "🐝", choices: ["bug", "bee", "bow", "boo"], correct: 1 },
  { type: "tinyQuiz", subtype: "word", prompt: "🎩 says…", audioPrompt: "Which word says hat?", visual: "🎩", choices: ["bat", "mat", "hat", "rat"], correct: 2 },
  { type: "tinyQuiz", subtype: "word", prompt: "🐟 says…", audioPrompt: "Which word says fish?", visual: "🐟", choices: ["fan", "fin", "fox", "fish"], correct: 3 },
  { type: "tinyQuiz", subtype: "word", prompt: "🐘 is very…", audioPrompt: "Which word means very large?", visual: "🐘", choices: ["big", "bag", "bug", "beg"], correct: 0, cheer: "Big brain! 🧠" },
  { type: "tinyQuiz", subtype: "word", prompt: "🛏️ says…", audioPrompt: "Which word says bed?", visual: "🛏️", choices: ["bed", "bow", "bib", "bug"], correct: 0 },
];
