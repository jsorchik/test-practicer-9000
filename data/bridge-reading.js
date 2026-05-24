// BRIDGE_READING — extracted from index.html
const BRIDGE_READING = {
  passages: [
    { id: "bp1", title: "The Saturday Inventor", genre: "fiction",
      text: `Maya spread her supplies across the kitchen table: rubber bands, cardboard tubes, three plastic spoons, and a roll of tape that was already losing its stick. The school's Invention Fair was Monday, and so far her best idea was a "self-stirring" cereal bowl that did not actually stir anything.

Her older brother Theo wandered in, took one look at the mess, and snorted. "Let me guess. Another cereal bowl?"

"It's a marble launcher," Maya said firmly, even though she had only decided this five seconds ago. She taped two spoons to a cardboard tube, stretched a rubber band between them, and dropped a marble in. When she pulled back and let go, the marble flew exactly four inches before rolling sadly off the table.

Theo laughed, but then he sat down. "The rubber band's too loose. And your spoons are pointing the wrong way." He flipped one spoon around so it cupped the marble instead of letting it slide off.

Maya tried again. This time the marble shot across the kitchen and bounced off the refrigerator with a satisfying ping. She grinned so wide her cheeks hurt.

"Okay," Theo said, pretending not to be impressed. "But you need a target. Inventions need a point."

By dinner, Maya had built a cardboard castle with paper soldiers on top. The launcher knocked them down one by one.` },
    { id: "bp2", title: "The Night Shift in the Garden", genre: "nonfiction",
      text: `When the sun goes down, most flowers close their petals and rest. But a small group of plants does the opposite. These night-blooming flowers wait until darkness falls, then open wide to greet a very different crowd of visitors.

During the day, gardens are busy with bees, butterflies, and hummingbirds. These animals find flowers using bright colors and sweet smells. At night, however, those colorful petals would be useless. Most night creatures cannot see red or yellow in the dark. So night-blooming plants take a different approach. Their petals are usually white or pale, which reflects what little moonlight there is. Their scents are also much stronger, sometimes carrying for hundreds of feet through the still night air.

The visitors these flowers attract are surprising. Moths are the most common pollinators, fluttering from bloom to bloom on dusty wings. In some parts of the world, bats also do the job. Even certain beetles get involved, crawling into wide blossoms and staying the night.

Scientists believe night blooming evolved because the daytime competition for pollinators is fierce. By opening after dark, these plants find quieter customers and avoid the crowd.` },
    { id: "bp3", title: "The Boy Who Mapped the Cold", genre: "biography",
      text: `Matthew Henson grew up in Maryland in the 1870s, the son of free Black farmers. By the time he was twelve, both his parents had died, and he set out on his own. He walked to Washington, then to Baltimore, where he talked his way onto a merchant ship as a cabin boy. The captain taught him to read charts, handle ropes, and navigate by the stars. By the time Henson was a young man, he had sailed across three oceans.

In 1887, he met an explorer named Robert Peary, who was planning trips to the Arctic. Peary needed someone strong, clever, and willing to face brutal cold. Henson agreed. Over the next twenty-two years, the two men made several attempts to reach the North Pole.

Henson became the team's most skilled member. He learned the Inuktitut language from the Inuit people of Greenland, who shared their knowledge of sled-building, dog handling, and surviving on the ice.

In April 1909, after weeks of brutal travel across drifting sea ice, a small group reached what they believed was the North Pole. Henson was at the front, breaking trail. For decades, history books gave most of the credit to Peary alone. Today his name appears in museums, on stamps, and in books that finally tell the whole story.` },
    { id: "bp4", title: "How a Snowflake Gets Its Shape", genre: "informational",
      text: `No two snowflakes are exactly alike, but every single one starts the same way: with a speck of dust floating high in a cloud. When the air around that speck is cold enough, water vapor freezes onto it, forming a tiny six-sided crystal. From that moment on, the snowflake begins a long, twisting journey toward the ground.

The six-sided shape is not an accident. Water molecules naturally lock together at angles that produce hexagons. As the crystal falls, more water vapor freezes onto its edges, and tiny arms begin to grow outward from each of the six corners.

The exact shape a snowflake takes depends on the temperature and humidity of every layer of air it passes through. A flake that drifts through warmer, wetter air may grow wide, flat plates. One that travels through colder, drier air may sprout long needles instead. Because no two snowflakes follow the exact same path, no two end up looking exactly the same.

Each flake in your hand carries a tiny record of the sky it just fell through.` },
    { id: "bp5", title: "The Treehouse Vote", genre: "fiction",
      text: `Jordan and his cousins had been working on the treehouse all summer. By August, the platform was finally finished, and the four of them sat on it, sweaty and proud. Now came the hard part: deciding what to put inside.

"A reading corner," said Priya, who always had a book in her backpack. "With pillows."

"A snack station," said Marcus, who always had crumbs on his shirt. "With a cooler."

"A lookout tower," said Jordan. He had wanted a lookout tower since he first saw the tree.

The fourth cousin, little Ezra, was only seven. He pulled at his shoelaces and said quietly, "A place where everybody can fit."

Nobody answered right away. The platform was big, but not huge. They could not have all three things, and four people meant any vote would end in a tie.

Priya sighed first. "Okay. What if the reading corner is also the snack spot? Pillows are good for sitting and eating."

Marcus shrugged. "Fine by me, as long as the cooler fits."

Jordan stared up through the leaves. A lookout tower would have been amazing. But he pictured himself sitting alone in it while the others laughed below. "We could put a window on that side," he said, pointing. "Anyone can look out."

Ezra grinned and bounced on his heels. They spent the rest of the afternoon arguing about pillow colors, which felt, somehow, like a victory.` },
    { id: "bp6", title: "The Town Under the Sand", genre: "informational",
      text: `In the deserts of southern Africa lies a place called Kolmanskop. Today it is silent. Sand pours through broken windows and piles up against doors that have not opened in decades. But a hundred years ago, Kolmanskop was one of the richest towns in the region.

The story began in 1908, when a railway worker noticed something glittering in the sand. It turned out to be a diamond. Word spread quickly, and within months, miners and their families had rushed in to dig for more.

The town that grew up around the diamond fields was unlike anything else in the desert. Kolmanskop had a hospital with the first X-ray machine in southern Africa. It had a bowling alley, a theater, an ice factory, and even a tram that carried fresh water from the coast.

But the diamonds did not last forever. By the 1930s, miners began finding larger deposits farther south. People packed up and left, taking what they could carry. The desert wasted no time. Wind carried sand through every open window, and dunes climbed slowly up staircases and into bedrooms.

Today Kolmanskop is a ghost town that visitors can tour.` }
  ],
  questions: [
    { passageId: "bp1", question: "What is the main idea of the passage?", correct: 1, choices: ["Maya wins the Invention Fair with a marble launcher.","With Theo's help, Maya turns a failing project into something she's proud of.","Theo teaches Maya that engineering is harder than it looks.","Maya's family always supports her projects."], explanation: "The story shows Maya's project transforming with Theo's quiet help." },
    { passageId: "bp1", question: "What was Maya's first idea?", correct: 2, choices: ["A cardboard castle","A target practice game","A self-stirring cereal bowl","A rubber band slingshot"], explanation: "Her best idea was a cereal bowl that didn't stir." },
    { passageId: "bp1", question: "What change did Theo make that helped the launcher work?", correct: 0, choices: ["He flipped a spoon so it cupped the marble.","He replaced the rubber band with tape.","He added a second cardboard tube.","He moved the launcher closer to the refrigerator."], explanation: "Flipping the spoon to cup the marble fixed it." },
    { passageId: "bp1", question: "Based on the passage, how does Theo most likely feel by the end?", correct: 2, choices: ["Annoyed at being asked to help.","She should have picked a better idea.","Proud of her but not showing it directly.","He wishes he'd built his own invention."], explanation: "He pretends not to be impressed but keeps helping." },
    { passageId: "bp1", question: "'snorted' in the second paragraph suggests Theo was", correct: 1, choices: ["surprised","amused or teasing","angry","trying not to wake their mother"], explanation: "A snort here shows light teasing." },
    { passageId: "bp1", question: "What is the author's purpose?", correct: 3, choices: ["To explain how to build a marble launcher.","To warn about messy kitchen projects.","To describe Invention Fair rules.","To show how a small bit of help turns frustration into success."], explanation: "The author celebrates how Theo's small help transforms Maya's project." },
    { passageId: "bp2", question: "What is the passage mostly about?", correct: 2, choices: ["Bees and butterflies pollinate flowers during the day.","Most flowers close their petals at night.","How and why some flowers bloom only after dark.","Different colors of flowers around the world."], explanation: "The passage centers on night-blooming flowers — how and why." },
    { passageId: "bp2", question: "Why are most night-blooming flowers white or pale?", correct: 1, choices: ["Colors fade in cold night air.","Pale petals reflect moonlight and are easier to see in the dark.","Bright colors would scare bats away.","White flowers produce more nectar."], explanation: "Pale petals reflect the little moonlight available." },
    { passageId: "bp2", question: "Which animals visit night-blooming flowers?", correct: 3, choices: ["Hummingbirds","Honeybees","Butterflies","Moths, bats, and certain beetles"], explanation: "The passage names moths, bats, and beetles as night pollinators." },
    { passageId: "bp2", question: "You can infer night-blooming plants probably", correct: 0, choices: ["face less competition for pollinators than daytime flowers.","produce more seeds than daytime flowers.","cannot survive in hot climates.","are pollinated only by moths."], explanation: "Night blooming evolved partly to escape daytime competition." },
    { passageId: "bp2", question: "'carrying' in 'scents carrying for hundreds of feet' means", correct: 2, choices: ["lifting","holding","traveling or spreading","transporting by hand"], explanation: "Scents traveling/spreading through air." },
    { passageId: "bp2", question: "The author's tone is best described as", correct: 1, choices: ["worried","curious and inviting","strictly factual","sad"], explanation: "The author invites readers to notice nature curiously." },
    { passageId: "bp3", question: "Best summary of Henson's life:", correct: 2, choices: ["He became a farmer in Maryland.","He sailed but was forgotten.","He overcame hardship to become a skilled Arctic explorer who helped reach the North Pole.","He worked with the Inuit to map Greenland."], explanation: "His journey from orphan to Arctic explorer and finally recognition." },
    { passageId: "bp3", question: "Who taught Henson to read charts and navigate by stars?", correct: 0, choices: ["A ship captain","Robert Peary","An Inuit guide","His father"], explanation: "The captain taught him." },
    { passageId: "bp3", question: "What did Henson learn from the Inuit?", correct: 3, choices: ["Ship repair","Map reading","Seal hunting","Sled-building, dog handling, and surviving on the ice"], explanation: "Inuit shared knowledge of sleds, dogs, and ice survival." },
    { passageId: "bp3", question: "Why did Henson not get proper credit for years?", correct: 1, choices: ["He never asked for credit.","History books gave most credit to Peary alone.","He returned to sailing and disappeared.","He couldn't prove he reached the Pole."], explanation: "History books for decades credited only Peary." },
    { passageId: "bp3", question: "'brutal' in 'brutal cold' means", correct: 2, choices: ["unfamiliar","interesting","extremely harsh","slightly chilly"], explanation: "'Brutal' here means extremely harsh." },
    { passageId: "bp3", question: "The author's purpose in the last paragraph is to", correct: 0, choices: ["Show that Henson's contributions are now being remembered.","Explain how the Pole was finally mapped.","Criticize past history books.","Describe modern museum exhibits."], explanation: "The paragraph highlights his contemporary recognition." },
    { passageId: "bp4", question: "Main idea?", correct: 2, choices: ["Snowflakes are always six-sided because of cold air.","Scientists grow snowflakes in labs.","A snowflake's shape depends on its journey through the sky.","Every snowflake starts with a piece of ice."], explanation: "Shape comes from the journey through varying air." },
    { passageId: "bp4", question: "Every snowflake begins with...", correct: 1, choices: ["A drop of rain","A speck of dust","A grain of pollen","A piece of older ice"], explanation: "A speck of dust floating in a cloud." },
    { passageId: "bp4", question: "What kind of air produces long, needle-shaped flakes?", correct: 3, choices: ["Warm and wet","Warm and dry","Cold and wet","Cold and dry"], explanation: "Colder, drier air produces needles." },
    { passageId: "bp4", question: "Two flakes falling the same day in the same town", correct: 0, choices: ["may still look very different because of slightly different paths.","will look identical to each other.","will be the same shape if they land at the same time.","must be the same temperature when they form."], explanation: "Different paths → different shapes, even nearby." },
    { passageId: "bp4", question: "'hexagons' refers to shapes with", correct: 2, choices: ["four sides","five sides","six sides","eight sides"], explanation: "Hexagons have six sides." },
    { passageId: "bp4", question: "The author's purpose is to", correct: 1, choices: ["Convince readers snow is dangerous.","Explain how snowflakes form and why they look different.","Compare snowflakes with raindrops.","Describe one scientist's life."], explanation: "Primarily explanatory: how and why snowflakes vary." },
    { passageId: "bp5", question: "Main lesson?", correct: 1, choices: ["Older cousins always know best.","Working together sometimes means giving up part of what you want.","Treehouses should be built in groups of four.","Reading and snacking go well together."], explanation: "Each cousin compromises to fit everyone." },
    { passageId: "bp5", question: "Why did the cousins struggle to decide?", correct: 2, choices: ["Their parents wouldn't let them buy supplies.","The platform was too small for anything.","Four cousins but only enough room for some ideas.","Ezra refused to vote."], explanation: "Big but not huge; four people = tie possible." },
    { passageId: "bp5", question: "How did Priya and Marcus solve part of the problem?", correct: 0, choices: ["They combined the reading corner and snack station.","They skipped the snack station.","They let Jordan have a small lookout tower.","They asked Ezra to decide."], explanation: "Priya proposed combining; Marcus agreed." },
    { passageId: "bp5", question: "What changed Jordan's mind about the tower?", correct: 3, choices: ["His cousins said it was dangerous.","The platform was too weak.","He realized a tower would have a bad view.","He pictured himself sitting alone in it."], explanation: "Imagining sitting alone made the tower less appealing." },
    { passageId: "bp5", question: "'victory' in 'felt like a victory' suggests", correct: 2, choices: ["They won a game against another team.","They had defeated Ezra's quiet suggestion.","The disagreement felt friendly because the bigger problem was solved.","Jordan finally got his lookout tower."], explanation: "Small arguments after working through the big issue feel triumphant." },
    { passageId: "bp5", question: "The author's purpose is to", correct: 1, choices: ["Teach how to build a real treehouse.","Show how compromise leads to a better group decision.","Explain why families often disagree.","Warn against letting younger kids vote."], explanation: "The story models cooperative compromise." },
    { passageId: "bp6", question: "What is the passage mostly about?", correct: 1, choices: ["The history of diamond mining around the world.","How a once-rich desert town rose, fell, and was claimed by the sand.","Why German settlers came to southern Africa.","Animals that live in abandoned desert towns."], explanation: "The passage traces Kolmanskop's discovery, growth, decline, and burial." },
    { passageId: "bp6", question: "What did a railway worker find in 1908?", correct: 0, choices: ["A diamond glittering in the sand.","Gold in nearby rocks.","An underground river.","A forgotten village."], explanation: "Something glittering turned out to be a diamond." },
    { passageId: "bp6", question: "Which of these did Kolmanskop have?", correct: 2, choices: ["An airport and university.","A large harbor for ships.","A hospital with the first X-ray machine in southern Africa.","A famous diamond museum."], explanation: "X-ray machine: first in southern Africa." },
    { passageId: "bp6", question: "Why did people leave Kolmanskop in the 1930s?", correct: 3, choices: ["Sand became too dangerous.","The government closed the town.","Disease spread.","Larger diamond deposits were discovered farther south."], explanation: "Bigger deposits south drew miners away." },
    { passageId: "bp6", question: "'wasted no time' in 'the desert wasted no time' means", correct: 1, choices: ["was careful and slow.","acted quickly.","destroyed nothing important.","became completely silent."], explanation: "Idiom for acting quickly." },
    { passageId: "bp6", question: "The tone of the final paragraph is", correct: 2, choices: ["Cheerful and excited.","Angry and critical.","Reflective and a little sad.","Frightened and uneasy."], explanation: "A 'ghost town' with sand-filled hallways evokes wistful sadness." }
  ]
};
