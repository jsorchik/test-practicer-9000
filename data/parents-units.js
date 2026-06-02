// PARENTS_UNITS — "Parents' Choice" → Middle → Unit Conversion (Fencepost).
//
// Teaches the "fencepost" / factor-label / dimensional-analysis method for
// converting units (the railroad-tracks setup from HS chemistry, which is a
// great general strategy). The big idea, drilled in every `steps` block:
//
//   Write what you have, then multiply by conversion-factor fractions set
//   up so the unit you're getting rid of is on the BOTTOM and cancels —
//   leaving the unit you want. Once the units cancel, you never have to
//   guess "multiply or divide?": just multiply across the top, divide by
//   the bottom.
//
//   Example:  5 ft × (12 in / 1 ft) = 60 in     (ft cancels)
//   Two-step: 2 hr × (60 min/1 hr) × (60 s/1 min) = 7200 s
//
// `math`-type MCQ entries with a `steps` walkthrough (rendered as a numbered
// "How to solve it" list). Distractors target the classic fencepost mistake:
// flipping the factor (dividing when you should multiply) — which shows up as
// a weird number, exactly the tell the method is meant to prevent.
//
// Append-only — never reorder/splice/delete (mistakes pool keys by index).
const PARENTS_UNITS = [
  {
    type: "math", topic: "unit_conversion",
    question: "Convert 5 feet to inches.  (1 ft = 12 in)",
    correct: "60", wrong: ["5", "17", "0.42"],
    steps: [
      "Write what you have: 5 ft",
      "Multiply by a conversion factor with ft on the BOTTOM so it cancels: 5 ft × (12 in / 1 ft)",
      "The ft cancels (top ft with bottom ft), leaving inches.",
      "Multiply across: 5 × 12 = 60 in",
      "Tip: if you'd flipped the factor (× 1 ft / 12 in) you'd get 0.42 — a weird number is the sign your fencepost is upside-down.",
    ],
    explanation: "5 ft × (12 in / 1 ft) = 60 in.",
  },
  {
    type: "math", topic: "unit_conversion",
    question: "Convert 4 feet to inches.  (1 ft = 12 in)",
    correct: "48", wrong: ["16", "4", "0.33"],
    steps: [
      "Start with 4 ft.",
      "Put ft on the bottom so it cancels: 4 ft × (12 in / 1 ft)",
      "ft cancels → inches. Multiply across: 4 × 12 = 48 in",
    ],
    explanation: "4 ft × (12 in / 1 ft) = 48 in.",
  },
  {
    type: "math", topic: "unit_conversion",
    question: "Convert 2 hours to minutes.  (1 hr = 60 min)",
    correct: "120", wrong: ["62", "30", "2"],
    steps: [
      "Start with 2 hr.",
      "Multiply by (60 min / 1 hr) — hr on the bottom cancels the hr on top.",
      "2 × 60 = 120 min",
    ],
    explanation: "2 hr × (60 min / 1 hr) = 120 min.",
  },
  {
    type: "math", topic: "unit_conversion",
    question: "Convert 2 hours to seconds.  (1 hr = 60 min, 1 min = 60 s)",
    correct: "7200", wrong: ["120", "3600", "240"],
    steps: [
      "No direct hr→s factor, so chain two fenceposts.",
      "Start with 2 hr.",
      "First post — cancel hr: 2 hr × (60 min / 1 hr) = 120 min",
      "Second post — cancel min: 120 min × (60 s / 1 min) = 7200 s",
      "All the way: 2 × 60 × 60 = 7200 s. (Stopping at 120 means you forgot the second post.)",
    ],
    explanation: "2 × 60 × 60 = 7200 s.",
  },
  {
    type: "math", topic: "unit_conversion",
    question: "Convert 180 minutes to hours.  (60 min = 1 hr)",
    correct: "3", wrong: ["10800", "120", "240"],
    steps: [
      "Start with 180 min.",
      "Now you want min to cancel, so put min on the BOTTOM this time: 180 min × (1 hr / 60 min)",
      "min cancels → hours. 180 ÷ 60 = 3 hr",
      "Notice: the factor flips depending on which unit you're cancelling. Set up the cancel and the ×/÷ takes care of itself.",
    ],
    explanation: "180 min × (1 hr / 60 min) = 3 hr.",
  },
  {
    type: "math", topic: "unit_conversion",
    question: "Convert 4 kilometers to meters.  (1 km = 1000 m)",
    correct: "4000", wrong: ["0.004", "4", "400"],
    steps: [
      "Start with 4 km.",
      "Put km on the bottom to cancel: 4 km × (1000 m / 1 km)",
      "km cancels → meters. 4 × 1000 = 4000 m",
    ],
    explanation: "4 km × (1000 m / 1 km) = 4000 m.",
  },
  {
    type: "math", topic: "unit_conversion",
    question: "Convert 5000 meters to kilometers.  (1000 m = 1 km)",
    correct: "5", wrong: ["5000000", "5000", "50"],
    steps: [
      "Start with 5000 m.",
      "You want m to cancel, so m goes on the BOTTOM: 5000 m × (1 km / 1000 m)",
      "m cancels → kilometers. 5000 ÷ 1000 = 5 km",
      "Tip: flipping it (× 1000 m / 1 km) gives 5,000,000 — the giant number is the tell you set the fencepost upside-down.",
    ],
    explanation: "5000 m × (1 km / 1000 m) = 5 km.",
  },
  {
    type: "math", topic: "unit_conversion",
    question: "Convert 3 pounds to ounces.  (1 lb = 16 oz)",
    correct: "48", wrong: ["19", "3", "0.19"],
    steps: [
      "Start with 3 lb.",
      "Put lb on the bottom to cancel: 3 lb × (16 oz / 1 lb)",
      "lb cancels → ounces. 3 × 16 = 48 oz",
    ],
    explanation: "3 lb × (16 oz / 1 lb) = 48 oz.",
  },
  {
    type: "math", topic: "unit_conversion",
    question: "Convert 64 ounces to pounds.  (16 oz = 1 lb)",
    correct: "4", wrong: ["1024", "48", "80"],
    steps: [
      "Start with 64 oz.",
      "You want oz to cancel, so oz goes on the BOTTOM: 64 oz × (1 lb / 16 oz)",
      "oz cancels → pounds. 64 ÷ 16 = 4 lb",
    ],
    explanation: "64 oz × (1 lb / 16 oz) = 4 lb.",
  },
  {
    type: "math", topic: "unit_conversion",
    question: "Convert 3 days to hours.  (1 day = 24 hr)",
    correct: "72", wrong: ["27", "8", "3"],
    steps: [
      "Start with 3 days.",
      "Put days on the bottom to cancel: 3 days × (24 hr / 1 day)",
      "days cancels → hours. 3 × 24 = 72 hr",
    ],
    explanation: "3 days × (24 hr / 1 day) = 72 hr.",
  },
  {
    type: "math", topic: "unit_conversion",
    question: "Convert 3 gallons to cups.  (1 gal = 4 qt, 1 qt = 4 cups)",
    correct: "48", wrong: ["12", "7", "16"],
    steps: [
      "No direct gal→cups factor, so chain two posts.",
      "Start with 3 gal.",
      "First post — cancel gal: 3 gal × (4 qt / 1 gal) = 12 qt",
      "Second post — cancel qt: 12 qt × (4 cups / 1 qt) = 48 cups",
      "Chain: 3 × 4 × 4 = 48 cups.",
    ],
    explanation: "3 × 4 × 4 = 48 cups.",
  },
  {
    type: "math", topic: "unit_conversion",
    question: "Convert 2.5 hours to minutes.  (1 hr = 60 min)",
    correct: "150", wrong: ["62.5", "25", "120"],
    steps: [
      "Start with 2.5 hr.",
      "Multiply by (60 min / 1 hr) so hr cancels: 2.5 hr × (60 min / 1 hr)",
      "2.5 × 60 = 150 min",
      "Decimals ride along fine — the fencepost works the same.",
    ],
    explanation: "2.5 hr × (60 min / 1 hr) = 150 min.",
  },
];
