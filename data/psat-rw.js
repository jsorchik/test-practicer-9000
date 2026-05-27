// PSAT Reading & Writing — passage-based multiple-choice entries.
//
// Each entry shape:
//   { type: "psatRW",
//     subtype: "comprehension" | "vocab" | "writingEdit",
//     passage: "Short passage text. For writingEdit subtypes, wrap the
//              variable text in <u>…</u> so it renders underlined.",
//     question: "The question text.",
//     choices: [4 strings],
//     correct: 0-3,   // index into choices
//     explanation: "Why the correct choice is right and others aren't."
//   }
//
// Subtypes correspond to the three main PSAT R&W question styles:
//   comprehension — "What is the author's main point?", etc.
//   vocab         — "As used in the passage, 'X' most nearly means…"
//   writingEdit   — "Which choice provides the best version of the
//                    underlined text?" (NO CHANGE typically first)
//
// Choices are NOT shuffled at runtime — order is meaningful for
// writingEdit (NO CHANGE convention). Comprehension/vocab entries
// can put choices in any order; the renderer leaves them as-is.
//
// Append-only — never reorder, splice, or delete entries (mistakes
// pool is keyed by array index). To replace a duplicate's content,
// edit it in place to preserve its index.

const PSAT_READING_WRITING = [
  {
    type: "psatRW", subtype: "comprehension",
    passage: "Lichens are slow-growing organisms formed by a partnership between a fungus and an alga. The fungus provides structure and traps moisture; the alga produces sugar through photosynthesis. Neither could survive alone in the harsh climates where lichens often thrive — bare rock, arctic tundra, tree bark — but together they endure for decades.",
    question: "The passage suggests that lichens are notable primarily because they:",
    choices: [
      "grow more quickly than other organisms",
      "consist of two organisms that depend on each other",
      "produce food without sunlight",
      "are found exclusively in arctic regions",
    ],
    correct: 1,
    explanation: "The passage emphasizes the fungus-alga partnership ('neither could survive alone… but together they endure'). Choice B captures this mutualism.",
  },
  {
    type: "psatRW", subtype: "vocab",
    passage: "The novelist's prose was unfailingly austere — short sentences, plain words, almost no adjectives. Critics admired its discipline; some readers found it cold.",
    question: "As used in the passage, 'austere' most nearly means:",
    choices: ["lavish", "spare", "confusing", "joyful"],
    correct: 1,
    explanation: "The passage describes the prose as having 'short sentences, plain words, almost no adjectives' — i.e. stripped down. 'Spare' captures that meaning. 'Lavish' is the opposite; 'confusing' and 'joyful' don't fit.",
  },
  {
    type: "psatRW", subtype: "writingEdit",
    passage: "The committee, <u>which they had only just been formed</u>, decided to delay any votes until its members had time to read the proposal.",
    question: "Which choice provides the most grammatically correct and concise version of the underlined text?",
    choices: [
      "NO CHANGE",
      "which had only just been formed",
      "which they were forming only now",
      "having been formed only just now",
    ],
    correct: 1,
    explanation: "The original mixes a relative pronoun ('which') with a redundant subject ('they'). 'Which had only just been formed' is the cleanest fix — relative clause with no double subject.",
  },
  {
    type: "psatRW", subtype: "comprehension",
    passage: "Early radio broadcasting in the 1920s relied heavily on improvisation. Performers often had no script; engineers tinkered with new equipment during broadcasts; even the music was sometimes chosen minutes before airing. What seems chaotic in hindsight was, at the time, a feature — listeners tuned in not knowing what would happen, and that uncertainty was part of the appeal.",
    question: "The author's main point is that early radio broadcasting:",
    choices: [
      "was technically inferior to modern broadcasting",
      "was disorganized in ways that audiences found exciting",
      "depended on a small number of skilled performers",
      "was eventually replaced by scripted television",
    ],
    correct: 1,
    explanation: "The passage frames the chaos positively — 'a feature… uncertainty was part of the appeal'. Choice B captures the author's actual claim. The other choices are not supported by the text.",
  },
  {
    type: "psatRW", subtype: "vocab",
    passage: "After weeks of debate, the city council passed a tepid resolution that neither raised funds for the project nor blocked it outright.",
    question: "As used in the passage, 'tepid' most nearly means:",
    choices: ["enthusiastic", "lukewarm", "secret", "controversial"],
    correct: 1,
    explanation: "Tepid literally means slightly warm — figuratively, lacking enthusiasm or commitment. The resolution 'neither raised funds nor blocked' the project, so it was half-hearted. 'Lukewarm' captures that.",
  },
];
