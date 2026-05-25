# Phase 2 audit report — content quality

**Scope:** all 15 testable banks (3,431 entries total).
**Applied:** 12 high-confidence fixes (auto-applied).
**For review:** 144 flags below — borderline issues not auto-fixed.

---

## Applied fixes

### BRIDGE_MATH

- **idx 54** (wrong-explanation): `4⅓ minus 2⅓ = wait — 5 = 4 3/3. 4 3/3 − 2 `
  - Fix: `{"explanation":"5 = 4 3/3. So 4 3/3 − 2 1/3 = 2 2/3."}`
  - Reason: Existing explanation contains 'wait —' self-correction text that reads like a thinking-aloud draft, not a clean student-facing explanation.

### LOWER_READING

- **idx 53** (question-typo): `What can the reader infer about Audubon's father?`
  - Fix: `{"choices[0]":"He encouraged John's interest in nature from a young age."}`
  - Reason: Choice 0 contains author commentary leaking into the answer text: 'wait, the passage doesn't show that strongly. Better: encouraged him.' Should be a clean choice string.
- **idx 53** (wrong-explanation): `What can the reader infer about Audubon's father?`
  - Fix: `{"explanation":"The passage shows John drew birds from boyhood in France; the family later sent him to Pennsylvania, suggesting they supported his pursuits."}`
  - Reason: Current explanation contains meta-commentary ('The passage simplifies this — pick the most supported answer.') rather than citing passage support.

### LOWER_WORDS

- **idx 198** (wrong-correct): `curious`
  - Fix: `{"correct":"interested"}`
  - Reason: meaning given is neutral ('wanting to learn or know') but 'nosy' connotes intrusive prying; 'interested' matches the meaning
- **idx 266** (wrong-correct): `grin`
  - Fix: `{"correct":"beam"}`
  - Reason: meaning 'to smile wide' does not match 'smirk' (which is a self-satisfied/smug smile, not a wide one); 'beam' = to smile broadly
- **idx 331** (wrong-correct): `blossom`
  - Fix: `{"correct":"flower"}`
  - Reason: a 'bud' is an unopened flower, the opposite stage from a blossom; meaning 'the flower of a plant or tree' matches 'flower' not 'bud'

### MATH_ACHIEVEMENT (middle)

- **idx 158** (wrong-distractor): `What is 6 ÷ 3/4?`
  - Fix: `{"wrong":["4.5","2","18"]}`
  - Reason: Distractors '4.5' and '9/2' are mathematically identical values shown in different forms, so the multiple choice effectively has only 3 distinct options. Replace '9/2' with a different plausible wrong answer (e.g., 18 from misinterpreting as 6 × 3 = 18, or another common error).

### READING (middle)

- **idx 63** (wrong-distractor): `Why is the state legislature example included?`
  - Fix: `{"question":"Why does the passage mention that many people were unhappy with the IAU's decision?"}`
  - Reason: Passage p11 contains no 'state legislature' example. The text only says 'Many people were unhappy. Pluto had captured imaginations for generations.' The question references content that does not exist in the passage. Question stem must be rewritten to refer to actual passage content.
- **idx 81** (wrong-distractor): `What can you infer about her brother at the end?`
  - Fix: `{"question":"What can you infer about Mr. Okafor's view of Jasmine's script?","choices":["He is jealous of her writing talent.","He has been helping her revise it in secret.","He believes in her work `
  - Reason: Passage p14 contains no brother character. The only named characters are Jasmine, Mr. Okafor, and Theo. The original explanation cites 'Impressed for the first time in his life' — a phrase that does not appear in the passage. The question references content that does not exist.
- **idx 112** (wrong-distractor): `'diagonal' most nearly means:`
  - Fix: `{"question":"'truss' most nearly means:","choices":["a structural framework built from connected triangles","a long single beam laid flat across two supports","a kind of glue used in building models",`
  - Reason: The word 'diagonal' does not appear in passage p19. The explanation 'Diagonal noodles form the triangles' references a word not in the text. A valid vocabulary question would target a word actually used in the passage, such as 'truss' or 'constriction'.

### SENTENCE_COMPLETIONS (middle)

- **idx 358** (wrong-correct): `Despite his ___ wealth, the businessman lived in a sma`
  - Fix: `{"correct":"vast","explanation":"Living modestly contrasts with great wealth, so the blank takes vast (the antonym pair fits modest/humble/unassuming)."}`
  - Reason: 'Ostentatious' means showy in display; you cannot have 'ostentatious wealth' while living modestly, so the original is internally contradictory.

### WORDS (middle synonyms)

- **idx 288** (wrong-correct): `retaliate`
  - Fix: `{"correct":"avenge"}`
  - Reason: 'revenge' is normally a noun; 'avenge' is the verb synonym that matches 'retaliate' (verb).

Total: 12 fixes applied.

---

## Flags for your review (not auto-fixed)

Grouped by bank. These are borderline issues — the agent wasn't confident enough to auto-fix. Skim and decide.

### BRIDGE_QUANT — 3 flag(s)

- **idx 3** (other): `A pizza is cut into 8 equal slices`
  Distractor '2/8' is a weak distractor — not a typical 5th/6th grade mistake. Stronger choice: 4/8 or 6/8.
- **idx 4** (other): `What is 0.4 + 0.35?`
  Distractor '0.045' is implausible — no common decimal mistake produces it. Consider 0.39 keeper but swap 0.045 for 0.7 (ignoring hundredths) or 0.65.
- **idx 19** (other): `Rectangle 25 m × 10 m. Perimeter?`
  Distractor '60 m' has no clear-mistake derivation. A more typical wrong answer is '2(25)+10 = 60' which technically does match — acceptable, but '50' or '35' (just one side or sum) would be more diagnostic.

### BRIDGE_READING — 2 flag(s)

- **idx 35** (ambiguous) [passage bp6]: `The tone of the final paragraph is`
  The literal final paragraph is a single neutral sentence ('Today Kolmanskop is a ghost town that visitors can tour.'). The reflective/sad imagery (sand through windows, dunes climbing staircases) is in the second-to-last paragraph. Explanation cites 'sand-filled hallways' which belongs to that earlier paragraph, not the final one. Reflective tone is defensible via the phrase 'ghost town' but support is thin.
- **idx 3** (other) [passage bp1]: `Based on the passage, how does Theo most likely feel`
  Distractor B reads 'She should have picked a better idea.' — pronoun 'She' is jarring since the question asks how Theo feels. Likely intended as Theo's thought about Maya, but the phrasing is awkward and parallel-structure-breaking compared to the other choices which begin with 'He'.

### BRIDGE_SENTENCES — 6 flag(s)

- **idx 8** (ambiguous-context): `Even after losing three games in a row, the team's ___ spirit`
  'defiant' implies open resistance to authority; awkward fit for persevering through losses. 'resilient' or 'unyielding' would fit more naturally, though defiant is defensible as 'refusing to yield.'
- **idx 68** (other): `After hours of practice, the violinist's skill began to truly ___.`
  'shimmer' is an unusual collocation with 'skill' — skills typically 'shine' or 'sparkle.' Metaphor is a stretch for the target grade level.
- **idx 99** (other): `The crowd let out a ___ cheer when the home team scored`
  'vibrant cheer' is an awkward collocation; vibrant typically modifies color or general energy/life, not the sound of a cheer. 'thunderous' or 'rousing' would fit more naturally.
- **idx 150** (other): `The cave was so ___ that the explorers needed three flashlights`
  'murky' usually describes cloudy/dim water or unclear situations; 'dark' or 'gloomy' would more naturally describe a cave requiring flashlights. Defensible but slightly off-collocation.
- **idx 167** (ambiguous-context): `After tasting the bitter medicine, the toddler made a ___ face`
  'scornful' implies contempt/looking down on something — a toddler's reaction to bitter medicine is disgust, not scorn. None of the distractors (delighted/blank/kind) fit a disgusted face either, but the correct word is semantically off.
- **idx 182** (level-too-high): `Even though the trail was muddy, the children's enthusiasm remained ___`
  'undimmed' is an unusual word for late-elementary/early-middle level; context supports it but the word itself may exceed the target band. Other items in the bank use more accessible synonyms like 'unwavering' or 'steadfast.'

### BRIDGE_WORDS — 3 flag(s)

- **idx 140** (ambiguous): `fluent`
  correct 'smooth' is weak/generic; ISEE-typical synonym would be 'flowing' or 'articulate'. 'Smooth' is defensible (smooth speech) so not a fix, but worth review.
- **idx 122** (ambiguous): `arrogant`
  correct 'proud' is acceptable but ambiguous — 'proud' can be positive (proud of work) or negative. 'Haughty' or 'conceited' would be tighter; however 'proud' is already used as the synonym pair-mate and remains plausible.
- **idx 7** (ambiguous): `quench`
  correct 'satisfy' fits the thirst sense only; meaning also mentions putting out a fire (extinguish). 'Satisfy' captures half the definition but is the more common ISEE answer.

### LOWER_MATH_ACHIEVEMENT — 13 flag(s)

- **idx 5** (level-mismatch): `Solve for x: x + 7 = 12.`
  Uses variable notation (solve for x); Lower Level spec excludes variables/algebra.
- **idx 29** (level-mismatch): `Solve for n: 4n = 28.`
  Algebraic equation with variable; Lower Level spec excludes variables/algebra.
- **idx 36** (level-mismatch): `If 3n + 2 = 14, what is the value of n?`
  Multi-step algebraic equation; clearly beyond Lower Level (Grades 4-5) scope.
- **idx 60** (level-mismatch): `Solve for x: x + 8 = 15.`
  Uses variable notation; Lower Level spec excludes variables/algebra.
- **idx 66** (level-mismatch): `Solve for n: 5n = 45.`
  Algebraic equation with variable; excluded from Lower Level scope.
- **idx 75** (level-mismatch): `Evaluate 3x + 4 when x = 5.`
  Evaluating algebraic expression with variable; beyond Lower Level scope.
- **idx 84** (level-mismatch): `Solve: x − 6 = 14.`
  Algebraic equation with variable; excluded from Lower Level scope.
- **idx 99** (level-mismatch): `Solve: 2n + 3 = 17.`
  Multi-step algebraic equation; beyond Lower Level scope.
- **idx 112** (level-mismatch): `Solve: x ÷ 4 = 9.`
  Algebraic equation with variable; excluded from Lower Level scope.
- **idx 120** (level-mismatch): `Evaluate 4y − 1 when y = 6.`
  Evaluating algebraic expression with variable; beyond Lower Level scope.
- **idx 132** (level-mismatch): `Solve: 8 = x + 3.`
  Algebraic equation with variable; excluded from Lower Level scope.
- **idx 143** (level-mismatch): `Solve: 4x − 5 = 19.`
  Multi-step algebraic equation; beyond Lower Level scope.
- **idx 142** (level-mismatch): `What is 6³ (6 cubed)?`
  Cubes/exponents beyond simple squares are typically Middle School; borderline for Lower Level.

### LOWER_QUANT — 24 flag(s)

- **idx 8** (level-mismatch): `What is 50% of 80?`
  Percent computation is Middle Level, not Lower.
- **idx 9** (level-mismatch): `What is 25% of 60?`
  Percent computation is Middle Level, not Lower.
- **idx 10** (level-mismatch): `A shirt costs $20 and is 10% off...`
  Percent computation is Middle Level, not Lower.
- **idx 11** (level-mismatch): `What is the value of x in: x + 4 = 9?`
  Solving for a variable (x) is Middle Level algebra.
- **idx 12** (level-mismatch): `What is the value of n in: n - 7 = 12?`
  Solving for a variable is Middle Level algebra.
- **idx 13** (level-mismatch): `What is the value of x in: 3 x x = 24?`
  Solving for a variable is Middle Level algebra.
- **idx 41** (level-mismatch): `If 5 + n = 14, what is the value of n?`
  Solving for a variable is Middle Level algebra.
- **idx 42** (level-mismatch): `If 6 x y = 42, what is the value of y?`
  Solving for a variable is Middle Level algebra.
- **idx 45** (level-mismatch): `What is 50% of 48?`
  Percent computation is Middle Level, not Lower.
- **idx 59** (level-mismatch): `Solve for x: x + 8 = 15.`
  Solving for a variable is Middle Level algebra.
- **idx 60** (level-mismatch): `What is 50% of 64?`
  Percent computation is Middle Level, not Lower.
- **idx 74** (level-mismatch): `Solve for y: 4y = 28.`
  Solving for a variable is Middle Level algebra.
- **idx 77** (level-mismatch): `What is 25% of 200?`
  Percent computation is Middle Level, not Lower.
- **idx 87** (level-mismatch): `Solve for n: n - 13 = 22.`
  Solving for a variable is Middle Level algebra.
- **idx 92** (level-mismatch): `What is 10% of $90?`
  Percent computation is Middle Level, not Lower.
- **idx 100** (level-mismatch): `Solve: 9 + x = 17.`
  Solving for a variable is Middle Level algebra.
- **idx 103** (level-mismatch): `What is 75% of 40?`
  Percent computation is Middle Level, not Lower.
- **idx 114** (level-mismatch): `Solve: 7x = 56.`
  Solving for a variable is Middle Level algebra.
- **idx 125** (level-mismatch): `Solve: 18 - x = 11.`
  Solving for a variable is Middle Level algebra.
- **idx 138** (level-mismatch): `Solve: x + 11 = 20.`
  Solving for a variable is Middle Level algebra.
- **idx 152** (level-mismatch): `Solve: 6n = 54.`
  Solving for a variable is Middle Level algebra.
- **idx 154** (level-mismatch): `What is 25% of $80?`
  Percent computation is Middle Level, not Lower.
- **idx 161** (level-mismatch): `A backpack regularly costs $40 and is 50% off...`
  Percent computation (sale price) is Middle Level, not Lower.
- **idx 164** (level-mismatch): `If 8 + n = 3 x 5, what is n?`
  Solving for a variable is Middle Level algebra.

### LOWER_READING — 8 flag(s)

- **idx 38** (other) [passage lp8]: `Based on the passage, which is most likely true about drones?`
  The lp8 passage never mentions drones at all — it describes only the queen and female worker bees. The question is unanswerable from the passage; the 'correct' inference relies on outside knowledge.
- **idx 53** (ambiguous) [passage lp11]: `What can the reader infer about Audubon's father?`
  Passage gives almost no information about the father (only that 'his family sent him to live on a farm in Pennsylvania'). No choice has strong textual support; the intended correct answer is itself broken text. Recommend rewriting or replacing this question.
- **idx 23** (ambiguous) [passage lp5]: `Why does Maya hold her breath when she sees bubbles?`
  The passage never states that Maya holds her breath — it only says she 'pressed her face closer.' The question's premise is not supported by the text.
- **idx 30** (other) [passage lp7]: `Main idea?`
  Question stem is overly terse ('Main idea?'). Consider 'What is the main idea of this passage?' for consistency with other items.
- **idx 45** (other) [passage lp10]: `Main idea?`
  Terse stem ('Main idea?'). Consider expanding for consistency.
- **idx 47** (other) [passage lp10]: `Two fuels used in old lamps?`
  Terse stem. Consider 'What two fuels were used in old lighthouse lamps?'
- **idx 55** (other) [passage lp12]: `Main idea?`
  Terse stem. Consider 'What is the main idea of this passage?'
- **idx 57** (other) [passage lp12]: `Colors most likely to reach your eyes at sunset?`
  Terse stem. Consider 'Which colors are most likely to reach your eyes at sunset?'

### LOWER_SENTENCE_COMPLETIONS — 6 flag(s)

- **idx 45** (ambiguous-context): `After running the relay race, Theo felt ___ and asked for a glass of water.`
  Context clue 'asked for a glass of water' points to 'thirsty' rather than 'drowsy' (sleepy). Among given choices drowsy is best, but the sentence's clue doesn't strongly support it and the explanation ignores the water cue.
- **idx 88** (other): `The librarian gave a ___ stare when we forgot to use whisper voices.`
  'Strict stare' is an awkward collocation; 'stern' is the natural word for a disapproving look. Distractors are all clearly wrong so the answer is unambiguous, but the correct word feels off-register.
- **idx 105** (other): `Although the river looked gentle, it could ___ a small boat off course.`
  'Thrust a small boat off course' is an awkward verb choice; 'push' or 'shove' would be more natural. Distractors are clearly wrong so the answer is still unambiguous.
- **idx 219** (other): `The mountain peak was ___, towering above the clouds.`
  'Vast' typically describes wide expanses (oceans, deserts), not tall peaks. The sentence's clue 'towering' calls for a height word like 'tall' or 'huge'. Distractors are opposites of tall so the intended answer is clear by elimination.
- **idx 377** (ambiguous-context): `Since the parrot had been raised in a noisy household, it became very ___.`
  'Noisy household' most directly implies a 'noisy' or 'loud' parrot rather than 'talkative.' Distractors (silent/quiet/shy) are all opposites, so talkative wins by elimination, but the logical link is weak.
- **idx 95** (other): `The old wooden bridge gave a ___ creak as the wagon rolled across.`
  An old wooden bridge under a wagon would more typically produce a loud creak than a faint one; 'faint' wins only because all distractors (booming/crashing/roaring) are loud sounds. Borderline.

### LOWER_WORDS — 11 flag(s)

- **idx 2** (ambiguous): `ample`
  distractor 'extra' can mean surplus/more than needed, mildly overlapping with ample's 'more than enough'
- **idx 28** (level-too-high): `fierce`
  'savage' is a strong/violent word; 'wild' or 'ferocious' would be more grade-appropriate and clearer for 4-5 grade
- **idx 75** (ambiguous): `sneer`
  'smirk' = self-satisfied smile; 'sneer' = scornful/contemptuous; overlap is partial, ambiguous synonym
- **idx 137** (level-too-high): `smug`
  'conceited' is a multisyllabic adjective borderline for 4-5 grade; 'proud' or 'vain' would be simpler
- **idx 195** (level-too-high): `croak`
  'rasp' as a verb is uncommon in 4-5 grade vocabulary; 'rough voice' is closer in meaning but 'rasp' itself is unusual
- **idx 202** (ambiguous): `devour`
  'gulp' typically applies to swallowing liquid in big amounts; 'wolf' or 'consume' fit devour (to eat hungrily) better
- **idx 222** (level-too-low): `false`
  'false' is very common; below ISEE Lower Level vocab range — a 5th grader almost certainly knows this
- **idx 227** (level-too-high): `famish`
  'famish' as a base verb is archaic; usually appears as 'famished' (adj); above 4-5 grade range
- **idx 297** (level-too-high): `lurk`
  'skulk' is uncommon in 4-5 grade vocabulary; 'sneak' or 'hide' would be more grade-appropriate
- **idx 304** (level-too-low): `obtain`
  answer 'get' is very plain; the question essentially asks for the most common word, providing little vocabulary stretch
- **idx 333** (ambiguous): `brittle`
  'crisp' as a synonym for brittle is weak; crisp connotes fresh/firm food, while brittle connotes easily-broken. 'fragile' would fit better but appears elsewhere in the bank

### QUANT_QUESTIONS (middle) — 17 flag(s)

- **idx 55** (other): `A bookstore sold 144 books on Monday...`
  Exact duplicate of idx 30.
- **idx 56** (other): `Solve for y: 4y + 7 = 3y + 15`
  Exact duplicate of idx 31.
- **idx 57** (other): `What is the value of 6² − 2³ + 5?`
  Exact duplicate of idx 32.
- **idx 58** (other): `A circle has a radius of 7 cm...`
  Exact duplicate of idx 33.
- **idx 59** (other): `A recipe for 4 servings uses 1½ cups...`
  Exact duplicate of idx 34.
- **idx 60** (other): `What is the least common multiple (LCM) of 8 and 12?`
  Exact duplicate of idx 35.
- **idx 61** (other): `Maria deposits $250 at 4% simple interest...`
  Near-duplicate of idx 36 (slightly reworded).
- **idx 62** (other): `If 8 workers can paint a fence in 6 hours...`
  Near-duplicate of idx 37.
- **idx 63** (other): `What is the next number in the sequence: 3, 6, 12, 24, 48...`
  Exact duplicate of idx 38.
- **idx 64** (other): `A trapezoid has parallel sides 8 cm and 14 cm...`
  Near-duplicate of idx 39.
- **idx 65** (other): `If x = −3, what is the value of 2x² − 4x + 1?`
  Exact duplicate of idx 40.
- **idx 66** (other): `A jar contains 12 red, 8 green, and 5 blue...`
  Near-duplicate of idx 41.
- **idx 67** (other): `Convert 0.375 to a fraction in simplest form.`
  Exact duplicate of idx 42.
- **idx 68** (other): `A right triangle has legs of length 5 and 12...`
  Near-duplicate of idx 43.
- **idx 69** (other): `A jacket originally $80 is on sale for $60...`
  Near-duplicate of idx 44.
- **idx 70** (other): `If the ratio of boys to girls in a class is 4:5...`
  Near-duplicate of idx 45.
- **idx 71** (other): `What is the value of |−7| + |3| − |−4|?`
  Exact duplicate of idx 46.

### READING (middle) — 3 flag(s)

- **idx 28** (ambiguous) [passage p7]: `Why does the passage mention Denver?`
  The passage attributes Denver's differing curveball behavior to thin mountain air, but earlier in the same paragraph it claims humid air is less dense than dry air. The choice 'to give an example of how thin air changes the way a curveball behaves' is correct, but young readers may be confused because the Denver sentence is preceded by a discussion of humidity rather than altitude.
- **idx 22** (ambiguous) [passage p5]: `As used in 'the light was beginning to thicken into evening,'`
  Choice 1 'to grow darker and more dense' combines two ideas. Choice 2 'to spread out across a wider area' could also be defended as evening light spreads. Borderline but acceptable; the intended answer is supportable.
- **idx 79** (other) [passage p14]: `Why does Jasmine panic after selection?`
  Distractor 'Worried about getting the auditorium.' is grammatically awkward and stands out as obviously not the answer. Consider rephrasing for parallelism with other choices.

### SENTENCE_COMPLETIONS (middle) — 19 flag(s)

- **idx 113** (level-too-low): `Although the recipe sounded fancy, the dish was actua`
  'Simple' is well below ISEE Middle vocabulary level.
- **idx 122** (level-too-low): `The reporter was ___ enough to ask the mayor a questi`
  'Brave' is elementary-level vocabulary.
- **idx 130** (level-too-low): `The new principal's plan was ___, with goals stretchi`
  'Ambitious' is on the low end for ISEE Middle.
- **idx 131** (level-too-low): `Although the museum tour was supposed to be brief, th`
  'Lengthy' is elementary-level vocabulary.
- **idx 173** (level-too-low): `Because the cave's ceiling was so ___, even the talle`
  'Low' is elementary; ISEE Middle targets richer vocabulary.
- **idx 188** (level-too-low): `Because the pond ice was alarmingly ___, the park ran`
  'Thin' is elementary-level vocabulary.
- **idx 197** (level-too-low): `The kitten's coat was so ___ that Lila had to brush i`
  'Tangled' is elementary-level vocabulary.
- **idx 199** (level-too-low): `The audience grew ___ during the third hour of speech`
  'Restless' is on the low end for ISEE Middle; distractors are fine but the answer word is plain.
- **idx 206** (other): `The puppy was so ___ that it slept through the doorbe`
  'Drowsy' (sleepy/half-awake) does not really describe a puppy sleeping THROUGH loud noises — a heavy/sound sleeper would; no listed distractor is a good substitute either.
- **idx 210** (level-too-low): `Because the trail markers were so ___, hikers frequen`
  'Confusing' is elementary-level vocabulary.
- **idx 228** (level-too-low): `Because the rumor spread so ___, by lunchtime nearly`
  'Quickly' is far below ISEE Middle vocabulary level.
- **idx 232** (level-too-low): `Aunt Petunia's ___ collection of porcelain owls cover`
  'Vast' is on the low end for ISEE Middle.
- **idx 244** (level-too-low): `The chef's ___ knife work, dicing onions in seconds w`
  'Skillful' is on the low end for ISEE Middle vocabulary.
- **idx 252** (other): `Although the cousins shared a bedroom for six years,`
  'Different' is elementary, and the explanation is circular ('Utterly different is contrasted with identical or alike').
- **idx 254** (level-too-low): `Because the medication's side effects were ___, the d`
  'Severe' is on the low end for ISEE Middle; explanation is also somewhat circular.
- **idx 274** (level-too-low): `Because the witness had a reputation for being ___, t`
  'Honest' is elementary-level vocabulary.
- **idx 284** (level-too-low): `Although the canyon walls towered overhead, the river`
  'Quietly' is elementary-level vocabulary.
- **idx 285** (level-too-low): `Because the bakery's croissants were so ___, customer`
  'Popular' is elementary-level vocabulary.
- **idx 439** (level-too-low): `Despite the storm raging outside, the campers' tent s`
  'Firm' is elementary-level vocabulary.

### WORDS (middle synonyms) — 29 flag(s)

- **idx 16** (ambiguous): `arrogant`
  'haughty' or 'conceited' fits 'arrogant' more precisely than 'boastful'; distractor 'rude' is also borderline synonymous.
- **idx 50** (ambiguous): `endure`
  Distractor 'survive' is close enough to 'endure' that it could confuse students.
- **idx 87** (ambiguous): `essential`
  Distractor 'important' is borderline synonymous with 'essential'.
- **idx 88** (ambiguous): `notable`
  Distractor 'important' is close in meaning to 'notable'/'remarkable'.
- **idx 127** (ambiguous): `intervene`
  'interfere' has a negative connotation that 'intervene' doesn't always carry; some answer keys distinguish them.
- **idx 178** (ambiguous): `ingenuous`
  'innocent' is OK but 'naive' or 'guileless' is the more standard synonym; this is the commonly-tested ingenuous/ingenious pair.
- **idx 182** (ambiguous): `ironic`
  'unexpected' captures only part of 'ironic'; better synonyms include 'sarcastic' or 'paradoxical' depending on sense.
- **idx 270** (ambiguous): `heed`
  'heed' means 'pay attention to', not strictly 'obey'; the supplied meaning even says 'pay careful attention'.
- **idx 359** (ambiguous): `genial`
  'genial' most directly means 'friendly'/'affable'; 'cheerful' is secondary.
- **idx 363** (ambiguous): `gravitate`
  'drift' is loose; 'incline' or 'tend' is closer in meaning to 'gravitate toward'.
- **idx 165** (level-too-low): `gigantic`
  Common elementary-level word; most 6th graders know this cold.
- **idx 171** (level-too-low): `hideous`
  Common elementary word; likely too easy for ISEE Middle Level practice.
- **idx 167** (level-too-low): `gleeful`
  Familiar elementary-level word.
- **idx 191** (level-too-low): `loyal`
  Elementary-level word; likely already mastered.
- **idx 198** (level-too-low): `noble`
  Elementary-level word for a 6th grader.
- **idx 531** (level-too-high): `asperity`
  SAT/GRE-level word; uncommon on ISEE Middle Level.
- **idx 535** (level-too-high): `attenuate`
  SAT/GRE-level; rarely tested at Middle Level.
- **idx 536** (level-too-high): `augury`
  Quite rare; more typical of GRE word lists.
- **idx 539** (level-too-high): `aver`
  Archaic/legal verb; uncommon for ISEE Middle Level.
- **idx 549** (level-too-high): `bilk`
  Uncommon slang-leaning verb; more SAT-level.
- **idx 559** (level-too-high): `calumny`
  SAT/GRE-level rare noun.
- **idx 577** (level-too-high): `cogitate`
  Rarely encountered; more GRE-level.
- **idx 608** (level-too-high): `denouement`
  Literary/SAT-level term; borderline for Middle Level.
- **idx 613** (level-too-high): `desultory`
  SAT/GRE-level adjective.
- **idx 618** (level-too-high): `dilettante`
  Sophisticated noun more typical of SAT/GRE.
- **idx 643** (level-too-high): `ennui`
  French-derived literary noun; unusual at Middle Level.
- **idx 650** (level-too-high): `evanescent`
  Sophisticated; more SAT-level.
- **idx 674** (level-too-high): `gainsay`
  Archaic verb; rarely on Middle Level lists.
- **idx 679** (level-too-high): `gossamer`
  Literary adjective/noun; borderline above Middle Level.

Total: 144 flags.

---

## Notable cross-cutting findings

- **lower-math** has 13 algebra/variable problems that belong in Middle Level, not Lower (Grades 4-5).
- **lower-quant** has 24 entries (10 percent problems + 14 algebra) that belong in Middle Level.
- **middle-quant** has 17 entries (idx 55-71) that are near-duplicates of idx 30-46 — same topic + same answer with minor wording differences. Variety issue, not correctness.
- **middle-words** has ~14 SAT/GRE-level words (asperity, attenuate, augury, etc.) that may overshoot Middle Level — and ~5 words (gigantic, hideous, loyal, etc.) that may undershoot.
- **middle-sentences** has 17 entries whose required vocabulary is below Middle Level.
