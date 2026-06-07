// PARENTS_MISSEDQUANT_* — "Parents' Choice" → the exact quant questions the
// kid answered INCORRECTLY on a real ISEE practice test (parent-supplied
// screenshots; the wrong pick was marked red, the correct answer green).
// Reproduced here so they can re-drill precisely what they missed.
//
//   Middle: 7 of the 8 missed items (the 8th relied on a geometric figure
//           we can't reproduce faithfully and is omitted).
//   Lower:  all 11 missed items.
//
// Entries are normal quant shapes (math / quantComparison) and dispatch by
// type, so they render with the standard machinery. Charts use the ISEE
// chart support (bar/scatter); one table item embeds a small HTML <table>.
// `topic` drives Khan "Brush up" links.
//
// Append-only — never reorder/splice/delete (mistakes pool keys by index).

// ── Middle (missed) ────────────────────────────────────────────────────────
const PARENTS_MISSEDQUANT_MIDDLE = [
  { type: "math", topic: "mean_median_mode",
    question: "A set of 7 numbers has a mean of 9. What additional number must be included in this set to create a new set with a mean that is 3 less than the mean of the original set?",
    correct: "-15", wrong: ["-18", "-23", "-39"],
    explanation: "Original sum = 7 × 9 = 63. The new set of 8 numbers needs a mean of 9 − 3 = 6, so its sum = 8 × 6 = 48. The added number = 48 − 63 = −15." },
  { type: "math", topic: "fractions_decimals",
    question: "There are 7 same-sized cups filled with water. Fred used 1/3 of each cup of water. Janice used 1/4 of each cup of water. Approximately how many cups of water remain?",
    correct: "3", wrong: ["3.5", "4", "4.5"],
    explanation: "Each cup loses 1/3 + 1/4 = 7/12, leaving 5/12 of a cup. For 7 cups: 7 × 5/12 = 35/12 ≈ 2.9, about 3 cups." },
  { type: "math", topic: "volume_surface",
    question: "Two cubes have volumes of 8 in³ and 64 in³. What is the ratio of the side length of the smaller cube to the side length of the larger cube?",
    correct: "1 to 2", wrong: ["1 to 64", "1 to 16", "1 to 4"],
    explanation: "Side length is the cube root of the volume: ∛8 = 2 and ∛64 = 4. The ratio of the sides is 2 to 4 = 1 to 2." },
  { type: "math", topic: "ratios_proportions",
    question: "The scatter plot shows the total cost of an order versus the number of items ordered. Using the line of best fit, what is the average cost of a single item when 60 items are ordered?",
    chart: { type: "scatter", title: "Order Total", xLabel: "Number of Items Ordered", yLabel: "Total Cost ($)",
             points: [[10,200],[15,250],[20,230],[25,310],[30,290],[35,370],[40,350],[45,410],[50,390],[55,440],[60,460],[65,440],[70,500],[80,560],[90,610],[100,640]], xMin: 0, xMax: 100, yMin: 0, yMax: 800 },
    correct: "$7.50", wrong: ["$6.67", "$8.33", "$450.00"],
    explanation: "The line of best fit predicts a total of about $450 when 60 items are ordered. Cost per item = 450 ÷ 60 = $7.50. ($450 is the total, not the per-item cost.)" },
  { type: "quantComparison", topic: "linear_eq",
    columnA: "The value of x when y = 15, for the equation y = 4x − 1",
    columnB: "The value of y when x = 4, for the equation y = 4x − 1",
    answer: "b",
    explanation: "Column A: 15 = 4x − 1 → 4x = 16 → x = 4. Column B: y = 4(4) − 1 = 15. So Column A = 4 and Column B = 15 — Column B is greater." },
  { type: "quantComparison", topic: "exponents_roots",
    columnA: "−3⁴", columnB: "(−3)⁴", answer: "b",
    explanation: "−3⁴ means −(3⁴) = −81, but (−3)⁴ = +81. Column B is greater. (A common trap — the parentheses change everything.)" },
  { type: "quantComparison", topic: "expressions",
    columnA: "The slope of the line 4x − 2y = 10",
    columnB: "The slope of the line through the points (4, 4) and (2, 8)",
    answer: "a",
    explanation: "4x − 2y = 10 rearranges to y = 2x − 5, so the slope is 2. Through the points: (8 − 4)/(2 − 4) = 4/(−2) = −2. Column A (2) is greater than Column B (−2)." },
];

// ── Lower (missed) ─────────────────────────────────────────────────────────
const PARENTS_MISSEDQUANT_LOWER = [
  { type: "math", topic: "word_problems",
    question: "A can of water painted black sat in the sun. Its temperature was recorded every 10 minutes: <table><tr><th>Time</th><th>Black Can</th></tr><tr><td>Start</td><td>50°F</td></tr><tr><td>10 min</td><td>53°F</td></tr><tr><td>20 min</td><td>57°F</td></tr><tr><td>30 min</td><td>62°F</td></tr><tr><td>40 min</td><td>68°F</td></tr><tr><td>50 min</td><td>75°F</td></tr></table> Following the same pattern, what is the predicted temperature at 70 minutes?",
    correct: "92", wrong: ["75", "79", "83"],
    explanation: "The temperature rises by 3, then 4, 5, 6, 7 °F each 10 minutes. Continuing the pattern: 50 min = 75, +8 → 83 at 60 min, +9 → 92°F at 70 min." },
  { type: "math", topic: "area_perimeter",
    question: "The perimeter of a square is 8s. What is the length of one side?",
    correct: "2s", wrong: ["2", "4", "4s"],
    explanation: "A square has 4 equal sides, so one side = perimeter ÷ 4 = 8s ÷ 4 = 2s." },
  { type: "math", topic: "word_problems",
    question: "A large triangle is divided into rows of small triangles. The 1st row has 1 small triangle, the 2nd row has 3, the 3rd has 5, and the 4th has 7. If the pattern continues, how many small triangles are in the 6th row?",
    correct: "11", wrong: ["5", "7", "9"],
    explanation: "Each row adds 2 more triangles: 1, 3, 5, 7, 9, 11. The 5th row has 9 and the 6th row has 11." },
  { type: "math", topic: "mean_median_mode",
    question: "A cat had a litter of 4 kittens. Two of the kittens weighed 2½ ounces each, one kitten weighed 3 ounces, and one kitten weighed 4 ounces. What is the mean weight of the kittens?",
    correct: "3", wrong: ["2½", "2¾", "4"],
    explanation: "Total weight = 2½ + 2½ + 3 + 4 = 12 ounces. Mean = 12 ÷ 4 = 3 ounces." },
  { type: "math", topic: "volume_surface",
    question: "A small cube has a volume of 1 cubic unit. A larger cube is built so that it is 3 small cubes wide, 3 small cubes deep, and 3 small cubes tall. What is the volume of the larger cube?",
    correct: "27 units³", wrong: ["9 units³", "18 units³", "81 units³"],
    explanation: "The larger cube is 3 × 3 × 3 = 27 small cubes, so its volume is 27 cubic units." },
  { type: "math", topic: "fractions_decimals",
    question: "A snack recipe uses 10 cups of cereal, 7 cups of pretzels, 2 cups of raisins, 3 cups of chocolate chips, and 1 cup of sunflower seeds. The mixture is mixed and divided evenly into 5 bags. Approximately how many cups are in each bag?",
    correct: "4½", wrong: ["3½", "4", "5"],
    explanation: "Total = 10 + 7 + 2 + 3 + 1 = 23 cups. 23 ÷ 5 = 4.6, which is about 4½ cups per bag." },
  { type: "math", topic: "ratios_proportions",
    question: "On Tanji's map, 1.2 inches represents 10 miles. How many inches would represent 25 miles?",
    correct: "3.0", wrong: ["2.5", "3.5", "3.7"],
    explanation: "25 miles is 2.5 times 10 miles, so it needs 2.5 × 1.2 = 3.0 inches." },
  { type: "math", topic: "mean_median_mode",
    question: "The bar graph shows how many minutes each of four students spent reading. Based on the graph, which statement is true?",
    chart: { type: "bar", title: "Minutes Spent Reading", xLabel: "Student", yLabel: "Minutes", categories: ["Mandy","Eric","Lisa","Joey"], values: [10,15,30,20], yMin: 0, yMax: 35 },
    correct: "The mean is between 18 and 19 minutes.",
    wrong: ["Eric read fewer minutes than Mandy.", "The range is greater than the number of minutes Joey read.", "Lisa read the same number of minutes as Joey and Eric combined."],
    explanation: "Mean = (10 + 15 + 30 + 20) ÷ 4 = 75 ÷ 4 = 18.75, between 18 and 19. (Range = 30 − 10 = 20, equal to Joey's 20, not greater; Eric's 15 > Mandy's 10; Joey + Eric = 35 ≠ Lisa's 30.)" },
  { type: "math", topic: "word_problems",
    question: "A figure has 7 sides (a heptagon) with one vertex labeled P. How many triangular regions are formed by drawing straight line segments from P to each of the other vertices?",
    correct: "5", wrong: ["4", "6", "7"],
    explanation: "Drawing all the diagonals from one vertex of a figure with n sides makes (n − 2) triangles. For 7 sides: 7 − 2 = 5 triangles." },
  { type: "math", topic: "probability",
    question: "A box of chocolates has 5 different cream fillings. The probability of choosing a chocolate filled with caramel is 4 out of 9. Which combination of chocolates is possible?",
    correct: "20 caramel and 25 others", wrong: ["4 caramel and 9 others", "16 caramel and 36 others", "18 caramel and 8 others"],
    explanation: "P(caramel) = caramel ÷ total = 4/9. For 20 caramel + 25 others: 20 ÷ 45 = 4/9. ✓ (The others give 4/13, 16/52 = 4/13, and 18/26 = 9/13.)" },
  { type: "math", topic: "basic_arithmetic",
    question: "Josh used a calculator to compute (51 × 743) ÷ 25. Which is a reasonable estimate of his answer?",
    correct: "between 1,200 and 2,000", wrong: ["between 1,000 and 1,200", "between 2,000 and 2,500", "between 2,500 and 3,000"],
    explanation: "Round: 51 ≈ 50 and 743 ≈ 750, so 50 × 750 = 37,500; then 37,500 ÷ 25 = 1,500 — between 1,200 and 2,000." },
];
