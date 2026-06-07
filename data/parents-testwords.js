// PARENTS_TESTWORDS_* — "Parents' Choice" → real-practice-test vocabulary.
//
// Words pulled from the kid's actual ISEE practice tests (parent-supplied),
// drilled as a focused set in their own Parents' Choice sections — one set
// per grade, each as both a synonym bank and a fill-in-the-blank (cloze) bank.
//
//   Middle (11 words): pacify lofty plume torrid insolently overhaul
//     supplement inundated thwarted vigorous haphazard
//   Lower (9 words): elongate solemnly uproot salvage seldom liberate
//     devotion attractive widespread
//
// makeQuestion dispatches on entry SHAPE, so synonym ({word,correct,wrong,
// meaning}) and cloze ({sentence,correct,wrong,explanation}) entries render
// with the normal verbal machinery under these Parents' Choice sections.
// ERB distractor pattern: <=1 antonym + <=1 trap + unrelated neutrals.
//
// Append-only — never reorder/splice/delete (mistakes pool keys by index).

// ── Middle ───────────────────────────────────────────────────────────────
const PARENTS_TESTWORDS_MIDDLE_SYN = [
  { word: "pacify",     correct: "calm",         wrong: ["enrage", "measure", "hollow"],     meaning: "to make calm or peaceful; soothe" },
  { word: "lofty",      correct: "towering",     wrong: ["lowly", "soggy", "brief"],         meaning: "very high or tall; grand" },
  { word: "plume",      correct: "feather",      wrong: ["root", "puddle", "stone"],         meaning: "a large feather, or a rising column of smoke" },
  { word: "torrid",     correct: "scorching",    wrong: ["freezing", "gentle", "spotted"],   meaning: "very hot and dry" },
  { word: "insolently", correct: "rudely",       wrong: ["politely", "quickly", "faintly"],  meaning: "in a rude, disrespectful way" },
  { word: "overhaul",   correct: "repair",       wrong: ["neglect", "borrow", "sketch"],     meaning: "to fix or revise something thoroughly" },
  { word: "supplement", correct: "addition",     wrong: ["reduction", "puzzle", "meadow"],   meaning: "something added to complete or enhance" },
  { word: "inundated",  correct: "flooded",      wrong: ["drained", "polished", "narrow"],   meaning: "overwhelmed or flooded" },
  { word: "thwarted",   correct: "blocked",      wrong: ["aided", "painted", "rented"],      meaning: "prevented from succeeding; frustrated" },
  { word: "vigorous",   correct: "energetic",    wrong: ["feeble", "silent", "square"],      meaning: "strong, active, and full of energy" },
  { word: "haphazard",  correct: "disorganized", wrong: ["orderly", "sturdy", "ancient"],    meaning: "lacking order or plan; random" },
];

const PARENTS_TESTWORDS_MIDDLE_CLOZE = [
  { sentence: "A warm bottle was the only thing that could ___ the wailing baby.", correct: "pacify", wrong: ["overhaul", "elongate", "scatter"], explanation: "Pacify means to calm or soothe." },
  { sentence: "From the valley we gazed up at the ___ peaks that vanished into the clouds.", correct: "lofty", wrong: ["shallow", "cramped", "damp"], explanation: "Lofty means very high or towering." },
  { sentence: "A single ___ of gray smoke rose from the chimney.", correct: "plume", wrong: ["puddle", "crumb", "shadow"], explanation: "A plume is a rising column of smoke (or a large feather)." },
  { sentence: "Crossing the desert at noon, the travelers suffered in the ___ heat.", correct: "torrid", wrong: ["frigid", "gentle", "damp"], explanation: "Torrid means very hot and dry." },
  { sentence: "The student rolled his eyes and ___ talked back to the teacher.", correct: "insolently", wrong: ["politely", "quietly", "neatly"], explanation: "Insolently means in a rude, disrespectful way." },
  { sentence: "The mechanic needed a whole weekend to ___ the rusty old engine.", correct: "overhaul", wrong: ["ignore", "borrow", "admire"], explanation: "To overhaul is to repair or rebuild thoroughly." },
  { sentence: "Coach added an extra drill to ___ the team's usual practice.", correct: "supplement", wrong: ["reduce", "cancel", "forget"], explanation: "To supplement is to add something to enhance it." },
  { sentence: "After the storm, the office was ___ with calls from worried customers.", correct: "inundated", wrong: ["drained", "polished", "painted"], explanation: "Inundated means flooded or overwhelmed." },
  { sentence: "The locked gate ___ the raccoon's plan to raid the garden.", correct: "thwarted", wrong: ["aided", "painted", "rented"], explanation: "Thwarted means blocked or prevented." },
  { sentence: "The puppy gave the rope such a ___ tug that it pulled free from my hand.", correct: "vigorous", wrong: ["feeble", "silent", "square"], explanation: "Vigorous means strong and full of energy." },
  { sentence: "His ___ notes were so scattered that he could not study from them.", correct: "haphazard", wrong: ["orderly", "sturdy", "ancient"], explanation: "Haphazard means disorganized and without a plan." },
];

// ── Lower ────────────────────────────────────────────────────────────────
const PARENTS_TESTWORDS_LOWER_SYN = [
  { word: "elongate",   correct: "lengthen",  wrong: ["shorten", "wash", "borrow"],       meaning: "to make something longer; stretch out" },
  { word: "solemnly",   correct: "seriously", wrong: ["cheerfully", "quickly", "loudly"], meaning: "in a serious, formal way" },
  { word: "uproot",     correct: "remove",    wrong: ["plant", "paint", "borrow"],        meaning: "to pull out by the roots; remove completely" },
  { word: "salvage",    correct: "rescue",    wrong: ["abandon", "measure", "freeze"],    meaning: "to save something from being lost or destroyed" },
  { word: "seldom",     correct: "rarely",    wrong: ["often", "loudly", "neatly"],       meaning: "not often; hardly ever" },
  { word: "liberate",   correct: "free",      wrong: ["capture", "polish", "stack"],      meaning: "to set free" },
  { word: "devotion",   correct: "loyalty",   wrong: ["neglect", "puzzle", "hallway"],    meaning: "deep love, loyalty, or dedication" },
  { word: "attractive", correct: "appealing", wrong: ["ugly", "damp", "early"],           meaning: "pleasing to look at; appealing" },
  { word: "widespread", correct: "common",    wrong: ["rare", "sticky", "gentle"],        meaning: "found or spread over a large area" },
];

const PARENTS_TESTWORDS_LOWER_CLOZE = [
  { sentence: "Pulling on the soft clay will ___ it into a long, thin rope.", correct: "elongate", wrong: ["shorten", "wash", "fold"], explanation: "Elongate means to make something longer." },
  { sentence: "She ___ promised to keep the secret, her face very serious.", correct: "solemnly", wrong: ["cheerfully", "quickly", "loudly"], explanation: "Solemnly means in a serious, formal way." },
  { sentence: "The strong storm was powerful enough to ___ even the tallest trees.", correct: "uproot", wrong: ["plant", "paint", "water"], explanation: "Uproot means to pull out by the roots." },
  { sentence: "Divers worked all week to ___ the treasure from the sunken ship.", correct: "salvage", wrong: ["abandon", "sink", "measure"], explanation: "Salvage means to rescue or save something." },
  { sentence: "It ___ snows in our town, so the children were thrilled to see it.", correct: "seldom", wrong: ["often", "always", "quickly"], explanation: "Seldom means not often." },
  { sentence: "The farmer opened the cage to ___ the trapped bird.", correct: "liberate", wrong: ["capture", "polish", "stack"], explanation: "Liberate means to set free." },
  { sentence: "The dog showed great ___, waiting by the door all day for its owner.", correct: "devotion", wrong: ["neglect", "anger", "hunger"], explanation: "Devotion means deep loyalty and love." },
  { sentence: "The bright flowers made the garden very ___ to visitors.", correct: "attractive", wrong: ["ugly", "damp", "empty"], explanation: "Attractive means pleasing to look at." },
  { sentence: "News of the snow day was ___, reaching every family in town.", correct: "widespread", wrong: ["rare", "secret", "tiny"], explanation: "Widespread means found over a large area." },
];
