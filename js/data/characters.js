// ============================================
// CHARACTER DATA — The Apocalypse Is a Business
// ============================================
// HOW TO ADD A NEW CHARACTER:
// 1. Copy the template block at the bottom of this file
// 2. Fill in the fields
// 3. Add it to the CHARACTERS array
// 4. The page renders it automatically
//
// HOW SPOILER FILTERING WORKS:
// - "chapter" = the chapter where this character FIRST appears
// - Skills and relationships also have chapter tags
// - Anything above the reader's selected chapter is hidden
//
// NOTE ON SUMMARY FORMATTING:
// - Summaries use <br><br> to indicate paragraph breaks.
// - Your renderer must use innerHTML (not textContent) on the summary
//   field for these breaks to display correctly.
// ============================================

var CHARACTERS = [

  // ==========================================
  // THE CORE FIVE
  // ==========================================

  {
    id: 'cecilia',
    name: 'Cecilia Leonelli',
    alias: null,
    portrait: 'img/characters/cecilia.png',
    chapter: 1,
    faction: 'leonelli',
    role: 'core-five',
    title: 'Head of the Leonelli Organization',
    class: 'FIXER',
    tier: 'Origin (I)',
    classLine: 'Fixer → Leverage Broker → Sovereign Fixer → Final Arbiter',
    descriptor: 'For those who resolve what others cannot.',
    primaryStat: 'PRESENCE',
    secondaryStat: 'ACUITY',
    stats: {
      presence: 95,
      acuity: 85,
      force: 20,
      resilience: 35,
      velocity: 50,
      precision: 45,
      edge: 65
    },
    appearance: 'Age 26. Young face, sharp chin, features that read as pleasant right up until they read as precise. Ash-blonde hair cut to the jaw in a clean bob, slightly layered, a faint cool undertone at the tips where the light catches them differently. Bright green eyes, steady and direct. They register everything and give back almost nothing. Slim. She\'s never the most physically imposing person in a room, and she\'s built her whole presentation around that fact. Immaculate tailored black suit, white blouse, minimal jewelry. Concealed blades.',
    summary: 'Head of the Leonelli crime family. Calm, exact, patient. She governs by attention. Her quiet is the quiet of someone who\'s already worked out the thing the room is about to need, and is waiting to see if anyone else gets there too. She speaks softly because softness makes a room lean in, and she rarely repeats herself, because every repetition is paid for in authority. Her resting expression is a controlled near-smile, and she deploys it in inverse proportion to how comfortable the room feels. The more dangerous the moment, the more correct her manner becomes.<br><br>She reads leverage the way other people read faces. Debts, habits, fear, ambition: four entries in a ledger she keeps on everyone she meets, updated quietly in the back of every conversation. Her politeness is tuned so that disrespecting her feels less like a risk and more like a mistake of basic competence. The courtesy is so precise it does the threatening for her.<br><br>She protects her people because they\'re hers. That distinction matters to her. She isn\'t merciful and she doesn\'t pretend the work is anything other than what it is. What she won\'t do is confuse the people who depend on her with currency. Loyalty inside the organization gets treated as load-bearing structure, maintained as carefully as the building\'s actual walls. Loyalty outside it she earns or buys, whichever runs cheaper.<br><br>Her dislikes are specific. She\'s got no patience for ornamental authority, for people who mistake the trappings of power for the work that makes power. She\'s got even less for cowards who\'ve arranged their whole world so they never have to make the calls their position demands. She holds grudges for years, and she holds them so calmly that people mistake it for forgiveness. That\'s their error. A betrayal is just an open account, and the account stays open until she closes it.<br><br>Cecilia is the only child of Aurelio Leonelli, who ran the organization until his arrest and his death in custody, five years before the System showed up. She grew up inside the Family the way the children of senior figures do: visible to everyone, named by no one, present at functions where her presence was the whole point and her opinion went unasked. She watched her father work from balconies, from doorways, from the corners of rooms she wasn\'t supposed to be listening in. She listened anyway.<br><br>What she learned, she learned by watching. That authority is a performance held up by infrastructure. That infrastructure is built out of relationships. That the relationships worth having are the ones where both sides have run the math on betrayal and landed on the same number. She learned her father was very good at his work, that the work involved decisions she\'d one day make herself, and, eventually, that he\'d never planned for her to make them.<br><br>She was twenty-one when he was arrested. Twenty-one and a half when the hearing he\'d been preparing for went badly enough that the Family understood he wasn\'t coming home. The gold chain she wears under her shirt was a gift from the day before that hearing. She\'s worn it every day since.<br><br>The succession wasn\'t built for her. Her father had a handful of senior men whose history made them the obvious heirs, and the obvious heirs spent a short, ugly stretch assuming the obvious. What they\'d missed was that Aurelio, in the years before the arrest, had quietly wired her into the organization\'s records, its bookkeeping, and its dealings with its steadiest commercial partners.<br><br>By the time the obvious heirs looked at the books, the books answered to her. By the time they thought about fixing that, Ruggiero Montini and Matteo Vascari had said out loud where they stood, and correcting the situation became something you\'d have to settle in blood. The men who\'d have had to spill it went looking for a quieter answer.<br><br>The two years that followed she\'s called, in private, the apprenticeship her father never meant to give her. She made mistakes. Fewer than her doubters had bet on, and the ones she made she paid for herself, in person, which built her a name separate from his. Aurelio commanded a room because he\'d been born certain he belonged in it, and the certainty showed in everything he decided. Hers she has to build new every morning, out of evidence, against a bar he set and never had to clear. The bar is useful to her. The comparison wears her down. She\'s decided to keep both.<br><br>She still measures herself against him in private. She knows the comparison is unfair to both of them. She keeps it anyway. By twenty-five the Family was leaner, quieter, more profitable, and more disciplined than at any point in its history, and the doubters had either left or gone silent.<br><br>The System arrived eight months after her twenty-sixth birthday. She read its first announcement, clocked it as the largest rewrite of operational reality in her lifetime, and was giving orders before the first hour was out. Everything she\'s built since runs on one conviction she\'s held since the day her father didn\'t come home: the world won\'t arrange itself around her, so arranging it is her job.',
    coreFlaw: 'She underestimates irrational actors, because she expects self-interest to run the show.',
    skills: [
      {
        name: 'MARKED LEDGER',
        type: 'Passive',
        chapter: 13,
        desc: 'Spend enough time with someone and Cecilia finds the thing they\'re most afraid to lose. The System turns that into a catalogued flag, and every action she takes against a marked target lands harder for it.',
        ranks: 'Ranks 1–3 are visible. Hidden Rank 4 unlocks when she takes out a Marked target who\'s also carrying an active Breach Penalty. Becomes FINAL ACCOUNT.'
      },
      {
        name: 'WEIGHT OF OFFICE',
        type: 'Active — Presence-based',
        chapter: 13,
        desc: 'A command-presence effect over a set radius. Anyone inside who fails a Resilience check hesitates, a physical reluctance to move against Cecilia or someone she\'s named. High-Resilience enemies shrug it off, and so does anything with the right immunity skill. Against fanatics it barely registers.',
        ranks: null
      },
      {
        name: 'FINAL ACCOUNT',
        type: 'Active — Hidden Rank 4 Evolution',
        chapter: 99,
        desc: 'When a Marked Ledger target is sitting under an active Breach Penalty and Cecilia moves on them herself, the kill carries compulsion weight. The System logs it as a closed account.',
        ranks: 'Evolution of MARKED LEDGER at Hidden Rank 4. Not yet unlocked.'
      }
    ],
    relationships: [
      { name: 'Bianca Severa', detail: 'Cecilia trusts Bianca to hold the line and to keep her alive, no questions asked. Bianca is her constant shadow, and even guarded as she is, Cecilia knows the loyalty for what it is and gives it back. As she once put it, they "don\'t scare easily, you and me."', chapter: 1 },
      { name: 'Ruggiero Montini', detail: 'She respects the years he\'s put in, but she\'s forever managing how protective he gets, making sure his urge to shield her doesn\'t step on her authority or turn into a liability.', chapter: 1 },
      { name: 'Matteo Vascari', detail: 'She leans hard on his counsel and his steadiness. She took the Family young, and she values that Matteo gives her professional respect instead of treating her like a kid.', chapter: 1 },
      { name: 'Dario Fioretti', detail: 'She likes how clever he is and how well he reads people. She won\'t let him get reckless, but she enjoys the banter, and in quiet moments she lets a looser, more honest dynamic surface between them.', chapter: 1 },
      { name: 'Luca Terranova', detail: 'The one relationship in the Core group that\'s a real two-way street, intellectually.', chapter: 5 }
    ]
  },

  {
    id: 'bianca',
    name: 'Bianca Severa',
    alias: null,
    portrait: 'img/characters/bianca.png',
    chapter: 1,
    faction: 'leonelli',
    role: 'core-five',
    title: 'Intelligence Chief, Assassin, Internal Security',
    class: 'WATCHER',
    tier: 'Origin (I)',
    classLine: 'Watcher → Night Auditor → Widow Fang → Silence Collector',
    descriptor: 'For those who see what others will not.',
    primaryStat: 'VELOCITY',
    secondaryStat: 'PRECISION',
    stats: {
      presence: 35,
      acuity: 55,
      force: 45,
      resilience: 40,
      velocity: 90,
      precision: 80,
      edge: 40
    },
    appearance: 'Age 27. Severe in the way of someone who\'s stripped out everything unnecessary. Long black hair in a braided ponytail. Pale skin with a faint flush along the cheekbones, the one involuntary thing about her. Amber-gold eyes, heavy-lidded and usually downcast, the kind of gaze that takes everything in from below its own surface. Narrow face, lips held in a flat, sealed line. Toned. She moves without a wasted motion, and when she stops moving she\'s the stillest thing in the room. Black suit, white shirt, blue tie, flat shoes.',
    summary: 'Leonelli intelligence chief, assassin, and internal security. Reserved, exact, unsentimental. Bianca is the stillest person in any room she\'s in. The stillness is concentration pulled so narrow that people who haven\'t learned to look for it mistake it for absence. She listens more than anyone, says less than anyone, and treats every disclosed fact as leverage thrown away. She stands where she can see the doors and the reflections. When she\'s locked in she barely blinks. She rarely laughs.<br><br>She\'s unsentimental in a flinty Piedmontese register: careful about what\'s owed to whom, and unwilling to fake a warmth she doesn\'t feel. The warmth she does feel comes out as proximity, as readiness, as how fast she moves when something threatens what she\'s guarding. She\'d rather show you than tell you. Showing you can\'t be misread.<br><br>Her thing with Cecilia is the central fact of her inner life, and she\'s decided to keep it there. Her rule on the subject is simple: the only thing worse than caring too much was looking like you did. She lives inside that rule with the discipline of someone who\'s decided the discipline is the relationship. What she gives, she gives as attention.<br><br>She\'s wary of nearly everyone outside the Core Five. Past that perimeter her default is surveillance, and her threshold for going lethal runs lower than Cecilia would like. Cecilia\'s told her so. Bianca took the correction on board and goes right on operating, when she judges it necessary, a step past what she\'s been cleared for. She knows the trade. Losing a little of Cecilia\'s approval is a price worth paying to make sure there\'s still a Cecilia around to disapprove.<br><br>Bianca was born in Genoa, daughter of a longshoreman and a woman whose work never made it onto any document her daughter\'s been able to dig up. Her father died when she was fourteen, in an accident the family agreed to call an accident and that Bianca, by sixteen, had decided wasn\'t one. The investigation she ran between sixteen and eighteen turned up answers she\'s never shared and left consequences she\'s never described. She left Genoa at nineteen and never went back.<br><br>The years between nineteen and twenty-three go down in her file as freelance security work, which is what people call them when they don\'t need to know more. Whatever she did then gave her the skills she uses now and the reputation that put her on the Leonellis\' radar. She was twenty-three when she came in for an interview Cecilia had requested by name, off a recommendation Cecilia had checked herself.<br><br>The interview ran forty minutes. She sat across from a woman three years younger who\'d read her whole file, asked four questions, and offered terms better than Bianca had any right to expect. She said yes before it was over. It was the first time in her life she\'d sat across from a stranger and not felt the urge to get up and leave. Eight years on, she\'s never once gone looking for a different arrangement.',
    coreFlaw: 'She reaches for elimination faster than Cecilia likes, and she trusts almost nobody outside the Core Five.',
    skills: [
      {
        name: 'QUIET APPROACH',
        type: 'Passive',
        chapter: 7,
        desc: 'Inside enclosed spaces, Bianca\'s movement throws off no sound signature the System can read. She\'s not invisible. She still takes up space and can be run into. She just falls under the detection threshold of anyone whose senses the System hasn\'t enhanced.',
        ranks: 'Higher ranks push it outdoors and into crowds.'
      },
      {
        name: 'SILENCE FIELD',
        type: 'Active',
        chapter: 7,
        desc: 'Kills sound across a set radius. No auditory alarms, no spoken skill components. At the advanced tiers it smothers the System interface itself for anyone caught inside, so targets can\'t read their own status, can\'t get notifications, can\'t check a cooldown.',
        ranks: 'A room Bianca has silenced is a room the System has gone quiet in.'
      },
      {
        name: 'CLOSE COVERAGE',
        type: 'Active',
        chapter: 7,
        desc: 'Bianca names one target as her covered entity. While Coverage is up, attacks on that target get intercepted and redirected to Bianca at reduced damage. Coverage never extends on its own. She chooses.',
        ranks: null
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'Bianca\'s whole life orbits Cecilia, a path she walked into one small choice at a time. The affection is deep and unspoken, kept under the rule she lives by: the only thing worse than caring too much was looking like you did.', chapter: 1 },
      { name: 'Ruggiero Montini', detail: 'A quiet turf war over who gets to protect Cecilia. Bianca turning up on the dangerous jobs can set Ruggiero off, though each respects how lethal the other is.', chapter: 1 },
      { name: 'Dario Fioretti', detail: 'She\'s the deadpan wall his jokes break against. When Dario floated being the team\'s "bard" for morale, Bianca told him flatly she\'d rather "beat it out of people."', chapter: 1 },
	  { name: 'Luca Terranova', detail: 'The first person she\'s noticed instead of just monitored. That thread comes in slow.', chapter: 7 }
    ]
  },

  {
    id: 'ruggiero',
    name: 'Ruggiero Montini',
    alias: null,
    portrait: 'img/characters/ruggiero.png',
    chapter: 1,
    faction: 'leonelli',
    role: 'core-five',
    title: 'Enforcer and Collections Chief',
    class: 'COLLECTOR',
    tier: 'Origin (I)',
    classLine: 'Collector → Iron Collector → Execution Captain → Grave Warden',
    descriptor: 'For those who claim what is owed.',
    primaryStat: 'FORCE',
    secondaryStat: 'RESILIENCE',
    stats: {
      presence: 50,
      acuity: 40,
      force: 90,
      resilience: 80,
      velocity: 30,
      precision: 45,
      edge: 20
    },
    appearance: 'Age 43. Tallest in the group, broad through the shoulders and neck in a way that shrinks the rooms he walks into. Completely bald, the skull large and cleanly shaped. Ice-blue eyes set deep under a heavy brow that\'s pressed permanently down, so his face reads as anger at rest. It isn\'t anger. It\'s just his face. The brow\'s creased from decades of use, and the whole impression is of something that\'s absorbed a lot of force and is ready to take more. Strong jaw, wide nose, lips in a flat line. A scar runs from his left temple down to the cheekbone. Dark suit cut for a heavy frame, white shirt, striped tie.',
    summary: 'Leonelli enforcer and collections chief. Quiet, disciplined, literal. Ruggiero doesn\'t posture, and that absence is the most consistent thing about him. In a room full of men trained to project, he projects nothing he hasn\'t already earned, and the room clocks the difference. He jokes rarely. When he does it\'s dry, blunt, and pointed straight at the kind of pretension he\'s spent forty years being patient with. He checks the exits and the chokepoints on autopilot the second he\'s through a door. He rolls his shoulders before a fight.<br><br>His body\'s been the tool of his work for so long that it runs a beat ahead of his attention. He moves through spaces like they\'re slightly too small for him, which they generally are, and he does it without knocking anything over, because he\'s spent a lifetime learning the exact dimensions of rooms he doesn\'t fit in.<br><br>He\'s flatly intolerant of any disrespect aimed at Cecilia, and the intolerance is structural, not sentimental. He\'s decided her authority is the load-bearing wall of the whole organization, and any disrespect you let slide against it weakens the wall. When he thinks she\'s wrong he tells her, and only her. In public the deference is total, including on the calls he argued against in the room ten minutes earlier.<br><br>His patience for deliberation is thin. The moment a decision turns into discussion and discussion turns into stalling, Ruggiero is the voice naming what the delay is going to cost. He isn\'t always right. He\'s right often enough that Cecilia treats his impatience as an input to weigh rather than a habit to manage.<br><br>Ruggiero came into the Leonelli organization at nineteen, hired by Cecilia\'s father in the kind of arrangement that was common then and doesn\'t get talked through anymore. He came up from Bari, youngest of three brothers and the only one to see thirty. The scar at his temple is from the second of the two events that left him an only child. The rest of his scars don\'t show in any room he\'s dressed for.<br><br>He worked for Aurelio Leonelli for nineteen years before the arrest. Over that stretch he became, in order, a competent enforcer, a respected one, a feared one, and finally the head of enforcement and collections. None of it was flashy. He got promoted because the work landed correctly and on time, and because the men he was handed either rose to his standard or moved on. The reputation he built was for never reopening a decision once he\'d made it.<br><br>When Aurelio was arrested, Ruggiero sat through one meeting between the obvious heirs and the other senior figures, listened for ninety minutes, and announced at the end of it, to the whole room, that the Family was Cecilia\'s and that any other outcome would have to come through him. Everyone understood that as the close of the discussion. In the five years since, he\'s given none of the men in that room a reason to reopen it. His loyalty to her runs on capability, not on her father\'s name. He ran the math, eyes open, and decided the Family runs better under her than under anyone else on offer.',
    coreFlaw: 'He\'s got no patience for liars, cowards, or ornamental authority, and he\'ll push for decisive force in moments where holding back would\'ve been smarter.',
    skills: [
      {
        name: 'IRON THRESHOLD',
        type: 'Passive',
        chapter: 7,
        desc: 'Damage absorption climbs the longer a fight runs. The longer Ruggiero holds a spot, the more he can soak. Hidden Rank 4 kicks in on its own any time he\'s outnumbered, with no damage condition attached.',
        ranks: 'Hidden Rank 4 unlock: hold combat against four or more opponents at once without giving ground.'
      },
      {
        name: 'CORRIDOR',
        type: 'Active',
        chapter: 7,
        desc: 'Ruggiero names a stretch of space as held ground. Enemies trying to push through hit escalating resistance effects. Allies passing through get a small speed bonus.',
        ranks: 'Stacks with IRON THRESHOLD in chokepoints.'
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'Fiercely loyal, and quietly rattled by the new reality of Cecilia putting herself in the line of fire. He wants to be the one taking the hits, and now and then the protectiveness comes out sounding like an order.', chapter: 1 },
      { name: 'Matteo Vascari', detail: 'The two older veterans of the crew, and they move in lockstep. Matteo handles the logistics and the legal side; Ruggiero handles the part that needs hands.', chapter: 1 },
	  { name: 'Dario Fioretti', detail: 'He watches Dario\'s charming, thrill-chasing way of meeting the apocalypse with mild disbelief, and once asked him whether squaring off against a horrific monster is "what you call fun."', chapter: 1 }
    ]
  },

  {
    id: 'matteo',
    name: 'Matteo Vascari',
    alias: null,
    portrait: 'img/characters/matteo.png',
    chapter: 1,
    faction: 'leonelli',
    role: 'core-five',
    title: 'Consigliere — Contracts, Records, Formal Strategy',
    class: 'ADVOCATE',
    tier: 'Origin (I)',
    classLine: 'Advocate → Pact Advocate → Veiled Magistrate → Covenant Chancellor',
    descriptor: 'For those who make terms hold.',
    primaryStat: 'ACUITY',
    secondaryStat: 'PRESENCE',
    stats: {
      presence: 70,
      acuity: 90,
      force: 25,
      resilience: 40,
      velocity: 35,
      precision: 50,
      edge: 55
    },
    appearance: 'Age 49. Lean and broad-shouldered, with the kind of presence that makes his stillness feel like a choice. Silver-white hair swept back in a dramatic wave, dark streaks still running through it, the effect landing somewhere between distinguished and severe. Heavy dark brows pressed down over blue-tinted aviator glasses he wears by default, not for effect. The beard is full and shaped, dark going to silver at the chin. Angular cheekbones, a long jaw, a face that broadcasts authority without trying and skepticism without moving. Black suit, white shirt, black tie.',
    summary: 'Leonelli consigliere. Controlled, educated, exact. Matteo is the most controlled person in the Core Five and one of the most controlled in the city. The control doesn\'t look like stillness. He\'s animated, articulate, happy to argue. What\'s controlled is the choosing: every word he lets out is one he means, and he\'ll fix sloppy wording in other people mid-sentence, the way you\'d wipe down a counter, not to score a point. He cleans his glasses when he\'s thinking, a tic so reliable the rest of the Core Five reads it as a clock. When the glasses come off, something\'s being worked out, and the window for interrupting has closed. He reads contracts twice even when he wrote them.<br><br>He\'s the best speaker in the group in any formal setting and the most dangerous writer in the group in any setting at all. He\'s the only one who can argue with Cecilia in front of others without costing her authority, because he argues from evidence, and because she trusts him not to open his mouth unless he\'s ready to be right.<br><br>Matteo was born in Asti, second son of a notarial family whose practice had run out of the same building for four generations. He read law at Turin, passed his exams on the first try, and was offered partnership in his father\'s firm at twenty-six. He turned it down. The partnership, he\'d already worked out, meant forty years of property transfers, marriage contracts, and the winding-up of estates whose only real complications were settled long before the paperwork hit his desk. He wanted the complications nobody had settled yet.<br><br>He met Aurelio Leonelli at thirty, through a mutual acquaintance who\'d been told, in terms Matteo didn\'t understand at the time, that the introduction would be appreciated. The conversation ran three hours. By the end Aurelio had offered him a retainer to handle the legitimate side of various arrangements whose other sides were handled elsewhere, and Matteo had taken it. Within five years the legitimate side had grown into a practice of its own. Within ten it was the most quietly influential consigliere seat in Piedmont. Studio Vascari, the notarial office on the ground floor of Palazzo Valperga, was the public face of work no public document ever named.<br><br>He served Aurelio for nineteen years, well enough that in their last conversation before the arrest, Aurelio named him as one of two men he trusted to keep the organization alive in any form he\'d recognize. The other was Ruggiero. Nobody framed it as a succession talk at the time. Matteo has since reread it as exactly that.<br><br>Lining up behind Cecilia after Aurelio died was the easiest professional call he\'s ever made. He\'d watched her grow up. He\'d watched her father shape her, on purpose and otherwise. He\'d watched her work the two years before the arrest, and he\'d concluded she was, by a wide and measurable margin, the most capable person in the building. Backing her was just acknowledging that Aurelio had built a successor without meaning to, and that the Family was better off in her hands than anyone else\'s.<br><br>He treats Cecilia with professional respect, the only register he\'s ever offered anyone, and one she values precisely because it never wavers. In private, on rare occasions, he tells her to rest. She hasn\'t asked him to stop.',
    coreFlaw: 'Pride in his own intellect is the main one. He puts too much faith in systems he believes can be fully understood.',
    skills: [
      {
        name: 'BINDING CLAUSE / BREACH PENALTY',
        type: 'Active',
        chapter: 7,
        desc: 'Agreements Matteo formalizes carry weight the System will enforce. Break one and you trigger a Breach Penalty, a consequence the System registers and applies to whoever broke faith. Higher ranks add compulsion effects, enforcement tied to territory, and automatic flagging straight into Cecilia\'s Marked Ledger.',
        ranks: 'Hidden Rank 4 unlock: author a contract that gets breached, then watch the full Breach Penalty run its course without stepping in.'
      },
      {
        name: 'PRECEDENT',
        type: 'Passive',
        chapter: 7,
        desc: 'Matteo holds exact recall of any formalized agreement he\'s authored, witnessed, or analyzed. Higher ranks stretch it to spoken agreements made within earshot. He\'s a living archive of every binding commitment in reach.',
        ranks: null
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'He\'s old enough to be her father and careful never to play it that way. He keeps the dynamic professional, acts as her sounding board, and now and then tells her to rest, a quiet, fatherly support she privately appreciates.', chapter: 1 },
      { name: 'Dario Fioretti', detail: 'He puts up with Dario\'s looseness, and often weighs his unorthodox plans, like flipping informal defectors out of rival factions, with a critical but open mind.', chapter: 1 }
    ]
  },

  {
    id: 'dario',
    name: 'Dario Fioretti',
    alias: null,
    portrait: 'img/characters/dario.png',
    chapter: 1,
    faction: 'leonelli',
    role: 'core-five',
    title: 'Operator — Smuggling, Vice, Street-Facing Deals',
    class: 'RUNNER',
    tier: 'Origin (I)',
    classLine: 'Runner → Silk Knife → Vice Broker → Smiling Revenant',
    descriptor: 'For those who move faster than consequences.',
    primaryStat: 'EDGE',
    secondaryStat: 'PRESENCE',
    stats: {
      presence: 70,
      acuity: 65,
      force: 45,
      resilience: 35,
      velocity: 60,
      precision: 50,
      edge: 80
    },
    appearance: 'Age 33. Lean, with the loose posture of someone who\'s never needed to take up more room than he feels like taking. Dark black hair, longer on top and swept hard to one side, too consistent to be an accident. Full dark beard at medium length, a little ragged at the edges. Blue-tinted aviator glasses across the bridge of his nose, doing very little to hide what\'s underneath. The expression underneath is the headline: a half-smile that reads as genuine and calculated at once, the face of a man who\'s already decided he\'s the most interesting person in the room and is waiting to find out if you agree. Blue suit with a flashier cut than the others, white shirt, dark tie.',
    summary: 'Leonelli operator. Fast-talking, charming, watchful. Dario\'s the one member of the Core Five who\'s decided the work ought to be fun. He flirts on purpose, needles on purpose, and pokes at how tightly people are wound, because tightness is information and information is currency. The charm is real, in that he never had to build it, and strategic, in that he\'s spent most of his adult life sharpening what to do with it. He knows the effect he has on a room. He hasn\'t found a reason to dim it.<br><br>Under the show he\'s ruthless and practical. He fiddles with his cufflinks when he\'s reading a room he hasn\'t finished reading. He samples the food and the drink first in unfamiliar places. He never forgets an insult and pretends he has, because the pretending keeps the person who threw it relaxed, and a relaxed mark is a mark with his guard down. He\'s the youngest of the Core Five and the one whose social register sits closest to the streets the organization runs on. He uses that carefully. The carelessness, like the charm, is the act.<br><br>Dario was born in Naples and landed in Turin at fourteen, with an aunt whose explanation for why they\'d left has changed three times over the years and stopped getting asked for. He grew up in Aurora, went to school when he felt like it, and learned the city the way the people who actually run cities learn them: block by block, contact by contact, debt by debt. By seventeen he was running small errands for small operators. By twenty, larger errands for larger ones. By twenty-three he\'d been arrested twice, charged once, convicted never, and his name had started turning up in the conversations that decide who moves up in the city\'s informal economy.<br><br>He met Aurelio Leonelli at twenty-five, in circumstances he\'s described three different ways depending on who\'s listening. The version closest to true involves a deal that should\'ve gone badly for the Leonellis and didn\'t, because Dario, planted to be the loose end, had done the math and figured the long-term value of being useful to Aurelio beat the short-term value of the people paying him. Aurelio noticed. The conversation that followed came with a job offer. Dario took it.<br><br>He worked under Aurelio for three years before the arrest. In that time he was the operator who could go where the senior men couldn\'t, into the markets and the clubs and the neighborhoods where a Leonelli suit was a liability. He built relationships none of the others could\'ve built and kept them up in registers none of the others could\'ve held. By the time Aurelio went down, Dario looked junior on paper and was quietly running a parallel network the senior figures only half understood.<br><br>Choosing Cecilia took roughly as long as it took her to ask. Before she\'d walked into the room he\'d already worked out that she was the most interesting outcome on the board, and that working for her would be more entertaining than working for anyone she might shove aside. The math has held up. He still tests her boundaries on purpose, like a man who\'s decided the boundaries themselves are part of what makes her worth working for. She lets him, up to a point, and corrects him when he crosses it. He notices, every time, that the correction is exact. He hasn\'t gotten tired of the precision yet.',
    coreFlaw: 'He takes risks because he trusts how fast he can adapt, and that trust isn\'t always earned.',
    skills: [
      {
        name: 'READ THE ROOM',
        type: 'Passive',
        chapter: 7,
        desc: 'The second Dario walks into a space, he maps where everyone\'s head is at, emotionally and motivationally. The System formalizes it as a passive alignment display: a rough read on the gap between what people are saying and what they actually want.',
        ranks: null
      },
      {
        name: 'SUPPLY LINE',
        type: 'Active',
        chapter: 7,
        desc: 'Dario carries a running mental map of the workable trade routes, contacts, and resource nodes across a given territory. Higher ranks ping him with a System notification when a key route gets compromised, before there\'s anything visible to see.',
        ranks: null
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'He loves poking at her boundaries with jokes and casual nonsense, and he\'s genuinely compelled by how completely she holds control. He gets that she\'s sharpening him into a better asset, and he\'s all in on the process.', chapter: 1 },
      { name: 'Bianca Severa', detail: 'He likes needling her with his loose attitude, casually offering her a cigarette in the middle of a mobilization just to watch her turn it down.', chapter: 1 },
	  { name: 'Ruggiero Montini', detail: 'He lays the fast-talking, improvised groundwork that sets up Ruggiero\'s muscle and Matteo\'s legal traps. He\'ll dive straight into the messy, unpredictable crowds the older veterans would rather avoid.', chapter: 1 },
	  { name: 'Serena Marini', detail: 'Genuinely fond of her. Hasn\'t caused a problem yet.', chapter: 99 }
    ]
  },

  // ==========================================
  // ANALYSTS
  // ==========================================

  {
    id: 'luca',
    name: 'Luca Terranova',
    alias: 'Archimede',
    portrait: 'img/characters/luca.png',
    chapter: 5,
    faction: 'leonelli',
    role: 'analyst',
    title: 'Head of the System Analysis Division',
    class: 'ARCHITECT',
    tier: 'Origin (I)',
    classLine: 'Architect → System Architect → Framework Master → World Engine',
    descriptor: 'For those who build what others use.',
    primaryStat: 'EDGE',
    secondaryStat: 'ACUITY',
    stats: {
      presence: 30,
      acuity: 85,
      force: 20,
      resilience: 20,
      velocity: 25,
      precision: 35,
      edge: 90
    },
    appearance: 'Age 26. Average height, lean in a way that looks chronic rather than chosen; he forgets meals the way some people forget to answer texts. Dark hair with a faint reddish cast, permanently unkempt, falling across his forehead. Gray-purple eyes behind wire-framed glasses, usually carrying the flat look of someone who\'s been thinking too hard for too long. Dressed in whatever was nearest: a faded teal button-up over a white shirt, sleeves shoved to the elbow. Looks younger than he is at rest, older the moment he starts working.',
    summary: 'The first analyst the Leonellis brought in, now head of the System Analysis Division. Before the System, Luca was a competent and quietly bored data analyst at a financial modeling firm in San Donato. His real intellectual life ran under the handle "Archimede" on a niche gaming forum, where his MMORPG crafting simulators and market prediction tools served thousands of users who never knew his name.<br><br>The forum post that caught Cecilia\'s eye in the first hours after initialization wasn\'t the longest class-selection breakdown going around Turin. It was the most rigorously built, written for an audience he didn\'t have yet, digging into the language of the class descriptors for what they implied instead of what they said.<br><br>She brought him in by closing every exit before she opened the offer, then framing the deal as a meeting of interests. He signed because the arithmetic was sound, and because his sister Iris was already inside the building. He hasn\'t admitted to himself yet that he\'s exactly where he wants to be.',
    coreFlaw: 'Indispensable, humiliated, and boxed in, and aware of all three. He\'s the type to reach for leverage through control of information rather than open confrontation, and he hasn\'t decided what he\'d do with that leverage if he got it. The deeper problem he can already see: the System is reshaping how he thinks, not just sharpening it, and the only tool he\'d use to study the change is the thing being changed.',
    skills: [
      {
        name: 'LOAD-BEARING',
        type: 'Passive (developing)',
        chapter: 7,
        desc: 'Luca instinctively finds the structural dependencies in anything he looks at: the pieces that, if you move them, bring the rest down or transform it. Right now that covers informational, organizational, and Scenario architectures. The skill has no off switch. He can\'t walk into a room, read a report, or sit through a briefing without clocking what\'s holding it up.',
        ranks: 'Higher ranks reach into physical environments, faction structures, and System-generated Scenario architectures he hasn\'t run into yet. Because the class is EDGE-primary, the skill flags more than the dependencies. It flags where they can be made to give way.'
      },
      {
        name: 'FRAMEWORK',
        type: 'Active (developing)',
        chapter: 7,
        desc: 'Luca builds a predictive model of a developing situation and pushes it out as a System-legible output to a group he\'s designated. At low ranks it shows up as a probability estimate on their interfaces. At higher ranks it becomes a shared tactical overlay that updates live as conditions shift.',
        ranks: 'The skill that makes him irreplaceable in any complex Scenario. Also the one that makes him most dangerous to Cecilia, the day he ever turns it on understanding her specifically.'
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'The story\'s most charged dynamic and the one relationship in the Core Five that\'s genuinely two-way on the level of intellect. She sees through almost everyone around her. Luca she can\'t fully see through, because he\'s running her own process from a different angle with different tools. The equilibrium holds because a mind she can\'t map is worth more to her as an ally than it is as a threat she\'d have to box in.', chapter: 5 },
      { name: 'Iris Terranova', detail: 'His sister, and the emotional anchor of his storyline. Her presence in the Palazzo is what the acquisition cost, made flesh, and neither of them can quite pretend otherwise. He\'s protective in the way that has no clean outlet: she didn\'t choose to be here, and he\'s the one who put her here, because he couldn\'t see another door.', chapter: 5 }
    ]
  },

  {
    id: 'iris',
    name: 'Iris Terranova',
    alias: null,
    portrait: 'img/characters/iris.png',
    chapter: 6,
    faction: 'leonelli',
    role: 'analyst',
    title: 'Resident of Palazzo Valperga, Division Coordinator',
    class: 'SPARKCALLER',
    tier: 'Origin (I)',
    classLine: 'Sparkcaller → Arc Diviner → Latent Warden → Quickening',
    descriptor: 'For those who call out what is not yet awake.',
    primaryStat: 'EDGE',
    secondaryStat: 'FORCE',
    stats: {
      presence: 45,
      acuity: 55,
      force: 65,
      resilience: 20,
      velocity: 45,
      precision: 50,
      edge: 70
    },
    appearance: 'Age 23. Brown hair in a high, practical ponytail, a few strands always escaping around her face. Blue-gray eyes, wide and alert; the resting expression reads as mild surprise, which is misleading, because she\'s almost never caught off guard. It\'s just what attention looks like on her. Usually in a plain white top. Looks younger than she is, right up until she asks a question she already knew the answer to.',
    summary: 'Luca Terranova\'s younger sister and a resident of Palazzo Valperga. She was studying literature at the University of Turin when the System initialized. She\'s no theorist and no gamer, but she reads people the way her brother reads mechanics, with the same eye for what\'s implied rather than stated.<br><br>She was in the apartment when the Leonelli acquisition team showed up. She watched the whole negotiation and packed a bag without being told to. Her standing inside the Palazzo is deliberately blurry. She\'s no prisoner and no asset, with real freedom inside the building\'s perimeter and no leverage to get past it.<br><br>She runs the Analysis Division\'s referral pipeline, manages the team\'s outside contacts, and has built relationships with the people she chose to build them with. Her notebook holds observations the Division doesn\'t have, Matteo doesn\'t know about, and Cecilia would find professionally interesting and personally unwelcome. The anger isn\'t gone. She\'s just filed it.',
    coreFlaw: 'She sees too clearly, too early, inside an organization that hasn\'t decided what to do with someone who watches it the way she does. Her sharpest tension is with her brother. Her class makes her sensitive to latent emergence, and she isn\'t sure what she\'s watching him turn into.',
    skills: [
      {
        name: 'LATENT SENSE',
        type: 'Passive (developing)',
        chapter: 7,
        desc: 'Iris picks up on suppressed or developing System-recognized potential in the people around her, as rough qualitative impressions. She doesn\'t have the vocabulary to pin it down, which frustrates her. It feels like intuition because she has no better frame for it yet.',
        ranks: 'Higher ranks make the perception sharper and more specific. The practical upshot: she can sometimes see what people are becoming before they can. Not a comfortable thing to know inside the Palazzo Valperga.'
      },
      {
        name: 'SPARK',
        type: 'Active',
        chapter: 7,
        desc: 'Iris discharges electrokinetic force through contact or at short range, scaled by EDGE and FORCE. The obvious use is combat. The more interesting one is diagnostic: unstable System-property objects react to the discharge in ways that reveal how they\'re built underneath.',
        ranks: 'SPARKCALLER is a hybrid combat-and-analysis class. Iris is the Division\'s only field-capable analyst, and it\'s the class that gets her there, not the coordination work.'
      }
    ],
    relationships: [
      { name: 'Luca Terranova', detail: 'Her brother. The cost of his acquisition is embodied in her being here, and neither of them can fully pretend otherwise. She\'s watching him change. She loves him. She isn\'t sure the person he\'s becoming is someone she\'d have chosen to love.', chapter: 6 },
      { name: 'Matteo Vascari', detail: 'Wary professional respect. He tested her early and she passed by asking the question he expected instead of the one he was dodging, which told him she understood the game. He\'s since handed her work she wasn\'t officially cleared for, which she takes as a compliment and a leash at the same time.', chapter: 7 },
      { name: 'Cecilia Leonelli', detail: 'The arrangement neither of them names out loud. Cecilia knows Iris is watching. Iris knows Cecilia knows. Their dealings are correct, almost cordial, and transactional all the way down.', chapter: 6 }
    ]
  },

  {
    id: 'serena',
    name: 'Serena Marini',
    alias: 'Nullroute',
    portrait: 'img/characters/serena.png',
    chapter: 52,
    faction: 'leonelli',
    role: 'analyst',
    title: 'Exploit Lab Lead',
    class: 'BREAKER',
    tier: 'Origin (I)',
    classLine: 'Breaker → Edge Case → Undefined → Null Author',
    descriptor: 'For those who find where the rules end.',
    primaryStat: 'EDGE',
    secondaryStat: 'ACUITY',
    stats: {
      presence: 30,
      acuity: 75,
      force: 20,
      resilience: 20,
      velocity: 50,
      precision: 60,
      edge: 90
    },
    appearance: 'Age 27. Short black hair with a teal-to-olive gradient toward the tips, cut close around the ears and falling across her face so it covers one eye most of the time. The visible eye is yellow-green. Light olive skin. Usually in a white t-shirt under a cream oversized jacket worn open, which gives her an off-duty look that isn\'t quite accurate. Large over-ear headphones around her neck, black with magenta accent rings.',
    summary: 'Lead of the Exploit Lab. She\'s been a competitive speedrunner since she was sixteen, first in games with big communities, later in games with communities of eighteen people and servers on their last legs. Two of her pre-integration exploit finds forced emergency developer patches inside forty-eight hours, both because she ran them on public servers instead of reporting them. Both times she counted it as a win.<br><br>She\'s thrilled about the apocalypse. The world broke, the rules turned readable, and her entire skill set suddenly became professionally relevant. She considers this objectively good news and knows full well that almost nobody else in the building agrees.<br><br>She\'s tested things on herself that she should have tested on systems. She\'ll keep doing it.',
    coreFlaw: 'Tactically reckless by any sane standard. The analyst most likely to cause a disaster out of enthusiasm rather than resentment.',
    skills: [
      {
        name: 'NULL STATE',
        type: 'Passive',
        chapter: 52,
        desc: 'Serena sits partly outside the System\'s standard classification framework. In clean, expected interactions she works like anyone else. Out at the edges of a mechanic\'s definition, the threshold cases, the places where two systems collide that were never meant to touch, she throws off outputs the System wasn\'t modeling.',
        ranks: 'Not always useful. Occasionally spectacular.'
      },
      {
        name: 'EXPLOIT WINDOW',
        type: 'Active (developing)',
        chapter: 52,
        desc: 'Serena deliberately triggers the edge-case interactions her passive turns up and holds them open, keeping a mechanic stuck in an undefined state long enough to pull value out of it. At current ranks the windows are short and the triggers imprecise.',
        ranks: 'At higher ranks she\'ll engineer the conditions that create the windows instead of stumbling onto them. BREAKER doesn\'t level through grind. It levels by going somewhere the System\'s designers never went, which is also why the System can\'t tell her in advance what her next rank needs: by definition, the unlock condition is something it didn\'t see coming.'
      }
    ],
    relationships: [
      { name: 'Dario Fioretti', detail: 'Genuinely fond of him. He runs on a similar logic, reaction over analysis, the advantage in the moment. The fondness hasn\'t caused a problem yet.', chapter: 99 },
      { name: 'Luca Terranova', detail: 'Productive friction. She thinks he\'s too slow and too scared of being wrong. He thinks she throws off noise without enough framework to catch it. Both reads are partly right, and what they produce together beats what either does alone, which neither of them has fully admitted.', chapter: 99 }
    ]
  },

  {
    id: 'giulia-conti',
    name: 'Giulia Conti',
    alias: null,
    portrait: 'img/characters/giulia.png',
    chapter: 11,
    faction: 'leonelli',
    role: 'analyst',
    title: 'Artificer — Division Technical Arm',
    class: 'ARTIFICER',
    tier: 'Origin (I)',
    classLine: 'Artificer → Material Adept → Loomwright → Genesis Forge',
    descriptor: 'For those who coax what is built',
    primaryStat: 'PRECISION',
    secondaryStat: 'ACUITY',
    stats: {
      presence: 30,
      acuity: 65,
      force: 10,
      resilience: 20,
      velocity: 25,
      precision: 80,
      edge: 45
    },
    appearance: 'Age 25. Slight build, the kind that makes her look younger than she is in a full room and disappear in a crowd. Dark hair in two long braids with a faint purple tint, a choice she\'s kept since before any of this started. Green eyes, direct when she\'s focused on something, sliding off when she isn\'t. Darker complexion. Ink-stained fingers most days, the permanent kind that comes from technical work, not casual use. Usually a plain white t-shirt; the care she pours into objects doesn\'t reach her clothes. She avoids eye contact when things are unfamiliar. She holds it steady when she\'s explaining something she\'s sure of.',
    summary: 'Artificer of the System Analysis Division and the technical arm of the Leonelli operational edge. Before the System, she restored objects at a private conservation firm contracted to several of Turin\'s museums: quiet, credentialed work that ran on precision, patience, and an instinct for how a thing was built, because you can\'t fix what you don\'t understand. The skills the System later formalized had no professional name before it arrived.<br><br>Cecilia recruited her in the second week, and put it plainly: the things you build will keep people alive, credentials aren\'t the question, capability is. Giulia said yes, steadied by being wanted for something nobody had ever found a use for.<br><br>Her current output runs to the node disruptor, modified gear for Leonelli field operatives, and a restricted-license trickle to the wider protection network, which Cecilia meters out carefully to keep the technical edge in-house. In her workshop she moves without hesitating, asks straight for what she needs, and has thrown Dario out twice for being loud at the wrong moment.',
    coreFlaw: 'The anxiety in unfamiliar or high-threat places is real, not performed. She gets through a combat zone by keeping her attention on the object in her hands and off whatever\'s happening around her, which works right up until it doesn\'t.',
    skills: [
      {
        name: 'MATERIAL SENSE',
        type: 'Passive',
        chapter: 11,
        desc: 'Giulia reads the System properties latent in physical objects: what they\'ll let her modify, what won\'t play nice together, which stress point fails first under System-level force. It runs continuously and without her say-so, which means she hasn\'t been able to look at the Palazzo\'s infrastructure without running a structural assessment since her first week in the building.',
        ranks: 'She hasn\'t shared all of what she\'s found.'
      },
      {
        name: 'INFUSE',
        type: 'Active',
        chapter: 11,
        desc: 'Giulia works System properties into a physical object through sustained contact and focused attention. The precision it takes is no joke; sloppy infusion gives you unstable results, a lesson she\'s learned twice. At current ranks the process needs her workshop, the right raw materials, and time.',
        ranks: 'Higher ranks compress the time and the material needs. Up the tiers, ARTIFICER shifts from modifying things toward making them: objects with System properties built from raw stock, and eventually objects the System has no prior record of.'
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'The most straightforward loyalty in the building, which is exactly why Cecilia keeps rechecking it for what she might be missing. Giulia got recognized, got a workshop, got real materials and real problems, and got told that what she built would matter. What Cecilia\'s watching for is the day Giulia clocks that what she builds doesn\'t always go where she\'d send it. That day hasn\'t come.', chapter: 11 },
      { name: 'Luca Terranova', detail: 'Pulls her in when a Scenario analysis throws up a mechanical problem that needs a physical fix. The collaboration runs smooth and uncomplicated, by Division standards.', chapter: 13 },
      { name: 'Serena Marini', detail: 'Works with her more than anyone planned for. Exploit windows keep needing a device to prop them open. The collaboration is productive and, every so often, alarming.', chapter: 99 }
    ]
  },

  {
    id: 'ermilio',
    name: 'Ermilio Ferrero',
    alias: 'RaptorSix',
    portrait: 'img/characters/ermilio.png',
    chapter: 13,
    faction: 'leonelli',
    role: 'analyst',
    title: 'Auditor — System Analysis Division',
    class: 'AUDITOR',
    tier: 'Origin (I)',
    classLine: 'Auditor → Discrepant → Hidden Hand → The Witness',
    descriptor: 'For those who read what is not shown.',
    primaryStat: 'ACUITY',
    secondaryStat: 'PRECISION',
    stats: {
      presence: 20,
      acuity: 75,
      force: 20,
      resilience: 25,
      velocity: 35,
      precision: 65,
      edge: 35
    },
    appearance: 'Age 25. Short black hair. Yellow-amber eyes with a directness that reads as intensity until you realize it\'s anxiety. He looks at things the way you look at something when you\'re not sure it\'ll still be there if you glance away. Black jacket with orange-yellow accent cuffs, collar up. Looks harder than his age right up until he speaks, when the stutter comes back and revises the impression.',
    summary: 'Auditor of the System Analysis Division. A forum theory-crafter since fifteen, Ermilio spent his teens on private-server communities for games whose official support had already ended, and built up an unusual cast of mind in the process: an instinct for what\'s there rather than what\'s shown. Cut content, unreleased mechanics, developer notes left buried in the code. The handle "RaptorSix" came off a speedrunning technique he found and documented for a game with a twelve-person active community.<br><br>He correctly deduced several early System class mechanics from inference alone, which got him flagged by Bianca on a separate track from Luca. The two posts sat in her files together for four hours before Cecilia decided the second one was worth a visit.',
    coreFlaw: 'He\'s made peace with the arrangement faster than it deserves, mostly because the work is genuinely interesting. The skills he uses to help the Leonellis are the same ones he\'d use to find what the Leonellis hide, from the System, and now and then from each other.',
    skills: [
      {
        name: 'VARIABLE',
        type: 'Passive',
        chapter: 13,
        desc: 'Ermilio sees the System flags and hidden variables hung on entities, objects, and locations: the data points the System tracks but never surfaces. Condition triggers logged across multiple instances, spawn energy piling up at a given spot, compliance flags on contracts. It arrives as a second visual layer over his normal vision, mostly unobtrusive, occasionally overwhelming where there\'s heavy System activity.',
        ranks: 'Where the standard interface shows a Player\'s class name and tier, an AUDITOR can pull the data underneath: hidden flags, accumulated trigger conditions, behavioral records, and the environmental values the System logs for its own bookkeeping.'
      },
      {
        name: 'DISCREPANCY',
        type: 'Active',
        chapter: 13,
        desc: 'Ermilio finds the gaps between what the System shows and what it records. When a faction\'s public Reputation doesn\'t square with its logged behavior, he sees the gap. When a contract\'s been technically honored in a way that guts its logged intent, he sees that too.',
        ranks: 'The skill Matteo finds most useful and most unsettling.'
      }
    ],
    relationships: [
      { name: 'Lorena Ferrero', detail: 'His wife, his anchor, and his editor. When his framing runs out past the evidence, she says so, and he listens. That\'s not a common dynamic in the Division, and Matteo has quietly noted it.', chapter: 13 },
      { name: 'Luca Terranova', detail: 'Complicated at first by the fact that Ermilio arrived seeing Luca as a ceiling: older, better-credentialed, working at a level he was still climbing toward. The AUDITOR/ARCHITECT dynamic has rewritten that. Luca builds models from data anyone can see; Ermilio reads data nobody else can. They need each other, which is a more comfortable footing than either of them expected.', chapter: 34 }
    ]
  },

  {
    id: 'lorena',
    name: 'Lorena Ferrero',
    alias: null,
    portrait: 'img/characters/lorena.png',
    chapter: 13,
    faction: 'leonelli',
    role: 'analyst',
    title: 'Scribe — System Analysis Division',
    class: 'SCRIBE',
    tier: 'Origin (I)',
    classLine: 'Scribe → Notary → Codifier → The Canon',
    descriptor: 'For those who make a record hold',
    primaryStat: 'PRECISION',
    secondaryStat: 'ACUITY',
    stats: {
      presence: 35,
      acuity: 65,
      force: 15,
      resilience: 35,
      velocity: 20,
      precision: 80,
      edge: 45
    },
    appearance: 'Age 24. Brown hair worn up in a high bun on working days, loose when she\'s off the clock, which in the Palazzo isn\'t often. Blue-gray eyes that go wide easily. It looks like nerves. What it actually is, is attention: she catches the things worth worrying about a half-step before everyone else, and her face shows it before she can stop it. Practical V-neck top, usually with a little ink on her hands that didn\'t make it onto the page. That last part bothers her.',
    summary: 'Scribe of the System Analysis Division. Matteo\'s contracts bind people to each other. Hers do something quieter and just as load-bearing: they establish what actually happened, in a form the System recognizes and won\'t let anyone rewrite later. His architecture sits on top of her foundation.<br><br>Before the System, she worked at a notarial office in the Quadrilatero: property records, witnessed signatures, the slow careful paperwork that settles who owns what. She started at nineteen and finished a legal-administration certificate on the side. The job taught her how thin the protection in a document really is, and how much of the real story lives in the parts nobody wrote down.<br><br>That second part is what she\'s good at, more than the careful hand: reading what isn\'t written. A clause that\'s too clean. A condition nobody stated. The System talks in clear, logical sentences, and she\'s the one person in the Division who hears them the way she used to read contracts, listening for the gap where the trouble always hid. She\'s usually right. She tends not to make a point of it.<br><br>She married Ermilio at twenty. Both families thought it was too soon, and neither of them has reconsidered. When the System hit and the only question that mattered was which faction to trust, Ermilio was still running the analysis. Lorena had already packed their bags. She decided they were going with Cecilia, and she was right about that too.',
    coreFlaw: 'She\'s the only person in the Division who ended up at the Palazzo entirely on someone else\'s account. Ermilio was the one Cecilia wanted. Lorena came with the arrangement. She sees exactly what that does to her leverage. What she\'s still sorting out is how she feels about an organization she joined under duress and now keeps running with her own competence.',
    skills: [
      {
        name: 'INSCRIPTION',
        type: 'Active',
        chapter: 13,
        desc: 'Lorena writes down a fact she\'s witnessed herself, or one that reached her through a solid chain of documentation, and the System logs it as real: authenticated, timestamped, sitting in both the physical page and the System\'s own registry. Precision is the whole game. A record that\'s sloppy, or even slightly false, comes out distorted. She feels it the moment it happens. She can\'t always fix it.',
        ranks: 'An Inscribed record can\'t be altered after the fact without leaving a visible discrepancy, which is what makes it hold up as evidence in System-adjudicated disputes. At higher ranks the weight grows: an authenticated record of a contested fact starts to settle the dispute on its own, because the truth on file outweighs anyone\'s claim about it.'
      },
      {
        name: 'COLLATION',
        type: 'Passive (developing)',
        chapter: 13,
        desc: 'Lorena keeps perfect recall of everything she\'s Inscribed, and she keeps it as one connected set instead of a stack of separate pages. Every new record checks itself against all the old ones on its own. Contradictions, duplicates, things that can\'t both be true: they surface to her the way a misfiled deed surfaces to a clerk who knows the drawer. It\'s how she catches her own mistakes before they set, and how a gap she only felt at the time gets confirmed later, once the record proves she\'d been reading it right.',
        ranks: 'Right now it covers her own Inscriptions. Later it reaches documents she\'s analyzed properly, then documents reliable people have shown her, until she can lay a stranger\'s record beside her own and feel exactly where it lies.'
      }
    ],
    relationships: [
      { name: 'Ermilio Ferrero', detail: 'Her husband. When his thinking runs ahead of the evidence, she\'s the one who reels it back in, and he listens, which is more than almost anyone else in the Division gets from him. She looks out for him the practical way, by being good enough at her own work that the organization wants to keep them both. If she\'s indispensable, he\'s safer for it.', chapter: 13 },
      { name: 'Matteo Vascari', detail: 'Probably the smoothest working relationship in the Division. Their class lines fit together cleanly, and Matteo respects precision for its own sake, which is rarer than it sounds and most of why they work. He\'s never once asked her to inscribe something she hadn\'t verified. She\'s noticed that. It tells her something about him. It doesn\'t promise anything about next time, and she knows the difference.', chapter: 13 }
    ]
  },

  {
    id: 'ivan',
    name: 'Ivan Carceri',
    alias: null,
    portrait: 'img/characters/ivan.png',
    chapter: 13,
    faction: 'leonelli',
    role: 'analyst',
    title: 'Cartographer — Scenario Desk Lead',
    class: 'CARTOGRAPHER',
    tier: 'Origin (I)',
    classLine: 'Cartographer → Wayreader → Surveyor General → Horizon',
    descriptor: 'For those who chart what is coming.',
    primaryStat: 'ACUITY',
    secondaryStat: 'VELOCITY',
    stats: {
      presence: 20,
      acuity: 75,
      force: 25,
      resilience: 25,
      velocity: 60,
      precision: 40,
      edge: 45
    },
    appearance: 'Age 32. Blond going platinum, pushed back from his face, receding a little at the temples in a way he hasn\'t registered yet. Rectangular glasses, heavy frames. Almost always in professional-grade noise-canceling headphones, around his neck or over his ears; he bought three pairs before the System arrived, for reasons he described as focus, which was technically true. Broad through the shoulders in a way that doesn\'t match the nervous energy he carries everywhere else. Stubble that\'s perpetually one day past where he meant to trim it. His resting face looks faintly aggrieved, like he\'s just been handed information he\'d rather not have. It\'s not a mood. It\'s the permanent condition of a man whose class shows him things he can\'t unsee.',
    summary: 'Cartographer and Scenario Desk lead. For seven years before the System, he modeled emergency service routing in dense cities: ambulance dispatch, fire response, police deployment under shifting conditions. He was good at it because he\'d grasped that systems under stress behave nothing like systems at rest, and most models break exactly where it counts. The System found that useful.<br><br>Cecilia and Bianca pulled him out during the Night of First Measure, finding him barricaded in a Crocetta apartment behind hand-drawn charts of spawn projections, creature corridors, and density estimates by district. He\'d been working eighteen hours straight. The charts were startlingly accurate.<br><br>He delivers accurate reads under conditions that leave him visibly the worse for having done them, and the Division has learned to treat his physical state as a load-bearing readout. The apocalypse overwhelms him continuously; it\'s not a beat that resolves. He functions because the alternative is not functioning, and because he\'s decided his charts matter. He\'s probably right.',
    coreFlaw: 'The CARTOGRAPHER class cranks up a mind that was already taking in too much signal. He\'s most useful right at his limit, and his limit is where he breaks down, so his best outputs come at a reliable cost to his ability to produce the next one.',
    skills: [
      {
        name: 'SURVEY',
        type: 'Passive',
        chapter: 13,
        desc: 'Ivan takes in a low-level feed of positional and density data on System-active entities and energy buildups across a sizable radius. At rest it reads as ambient awareness: he knows which way the creatures are moving before anyone calls it in. Under stress it floods him.',
        ranks: 'The headphones are load-bearing infrastructure, not an affectation.'
      },
      {
        name: 'PROJECTION',
        type: 'Active',
        chapter: 13,
        desc: 'Ivan produces a formal predictive map of a defined area over a defined time window, rendered as a System-legible overlay he can share with designated parties. Accuracy falls off with distance and time horizon, and still beats anything you\'d get from direct observation by a wide margin.',
        ranks: 'At higher ranks the map stretches to faction movements, resource flows, and systemic trend lines that have nothing to do with creatures.'
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'She pulled him out. He\'s aware it wasn\'t a rescue.', chapter: 13 },
      { name: 'Bianca Severa', detail: 'She was there for the extraction. He hasn\'t stopped being aware of her since.', chapter: 13 },
      { name: 'Luca Terranova', detail: 'Functional, with a running tension about framing underneath. Ivan provides the data; Luca builds the models from it. The distinction matters to Ivan because his data sometimes points at conclusions Luca\'s models don\'t reach. He\'s learned to flag those divergences out loud instead of letting them melt into the synthesis.', chapter: 13 }
    ]
  },

  {
    id: 'giorgio',
    name: 'Giorgio Esposito',
    alias: null,
    portrait: 'img/characters/giorgio.png',
    chapter: 99, // Arc 2–3 — not yet in draft
    faction: 'leonelli',
    role: 'analyst',
    title: 'Enemy Modeling Desk',
    class: 'Unknown',
    tier: 'Origin (I)',
    classLine: null,
    descriptor: null,
    primaryStat: 'ACUITY',
    secondaryStat: 'EDGE',
    stats: {
      presence: 30,
      acuity: 80,
      force: 15,
      resilience: 30,
      velocity: 25,
      precision: 40,
      edge: 60
    },
    appearance: 'Age 41. Former competitive poker player turned online casino operator.',
    summary: 'His family owed the Leonellis a sizable debt before the System hit. He turned himself in voluntarily inside the first forty-eight hours, having already done the math.<br><br>His specialty is probability modeling under incomplete information and predicting how an opponent will move. Cynical, non-resentful, purely transactional. He doesn\'t object to anything on moral grounds, only on structural ones, when the plan won\'t hold.',
    coreFlaw: 'Pure transactionalism can turn into its own blind spot.',
    skills: [],
    relationships: [
      { name: 'Matteo Vascari', detail: 'The analyst Matteo trusts most.', chapter: 99 }
    ]
  },

  // ==========================================
  // CIVILIANS / NON-FACTION
  // ==========================================

  {
    id: 'benedetto',
    name: 'Father Benedetto Riva',
    alias: null,
    portrait: 'img/characters/benedetto.png',
    chapter: 99,
    faction: 'civilian',
    role: 'civilian',
    title: 'Parish Priest, Quadrilatero Romano',
    class: 'None — NPC',
    tier: null,
    classLine: null,
    descriptor: null,
    primaryStat: null,
    secondaryStat: null,
    stats: null,
    appearance: 'A parish priest. Further physical description pending.',
    summary: 'He didn\'t pick a class. He stayed in his church through the Night of First Measure. He\'s become the de facto coordinator of civilian welfare across a three-block radius.<br><br>He isn\'t afraid of Cecilia. He isn\'t impressed by her either. He\'s watching what she does, because the people he\'s responsible for are inside the area she\'s claiming.',
    coreFlaw: null,
    skills: [],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'She respects him the way she respects anyone who\'s good at their job and doesn\'t pretend to be something they aren\'t.', chapter: 99 }
    ]
  },

  // ==========================================
  // FACTION LEADERS
  // ==========================================

  {
    id: 'ermes',
    name: 'Comandante Ermes Di Falco',
    alias: null,
    portrait: 'img/characters/ermes.png',
    chapter: 99,
    faction: 'ferro-patto',
    role: 'faction-leader',
    title: 'Leader of Ferro Patto',
    class: 'Unknown — Military Variant',
    tier: null,
    classLine: null,
    descriptor: null,
    primaryStat: null,
    secondaryStat: null,
    stats: null,
    appearance: 'Former Carabinieri lieutenant colonel, age 47.',
    summary: 'He built Ferro Patto out of institutional muscle memory and a real conviction that public order is a duty you owe people. He\'s not cynical about the mission. He believes in it.<br><br>Tactically competent, weak on information architecture and the economics of keeping the lights on. The threat he poses to Cecilia is reputational: he offers civilians a cleaner-looking version of order.',
    coreFlaw: 'Sincerely wrong about what it takes to sustain his mission. He chose symbolic ground over the logistical kind.',
    skills: [],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'A competitive problem even when Cecilia is winning on every operational metric.', chapter: 99 }
    ]
  },

  {
    id: 'salvatore',
    name: 'Padre Nero Salvatore',
    alias: null,
    portrait: 'img/characters/salvatore.png',
    chapter: 99,
    faction: 'fiamma-eterna',
    role: 'faction-leader',
    title: 'Leader of Fiamma Eterna',
    class: 'Unknown',
    tier: null,
    classLine: null,
    descriptor: null,
    primaryStat: null,
    secondaryStat: null,
    stats: null,
    appearance: 'Age 58. Lean and angular, silver hair worn longer than fashionable. Quiet hands. Radiates authority from stillness.',
    summary: 'He believes the System is a divine selection event, fully and without a crack of doubt. He\'s not cruel. He\'s simply indifferent to any suffering that falls outside his transcendent purpose.<br><br>He won\'t step in to stop violence when the violence serves his organization. Cecilia can\'t place him on a leverage map, because his motives aren\'t self-interest in any form she knows how to engage.',
    coreFlaw: 'The living instance of Cecilia\'s core flaw.',
    skills: [],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'She can\'t place him on her leverage map. He\'s the living instance of her core flaw.', chapter: 99 }
    ]
  },

  {
    id: 'ferrante',
    name: 'Marco Ferrante',
    alias: 'Leone',
    portrait: 'img/characters/ferrante.png',
    chapter: 99,
    faction: 'leone-selvaggio',
    role: 'faction-leader',
    title: 'Operational Leader of Leone Selvaggio',
    class: 'Fighter Variant',
    tier: 'Origin (I)',
    classLine: null,
    descriptor: null,
    primaryStat: 'FORCE',
    secondaryStat: null,
    stats: null,
    appearance: 'Age 24. Further physical description pending.',
    summary: 'He leads by force of personality and by being the most capable fighter in the group. Effective, reckless, genuinely charismatic in the specific way that predatory young men with new powers are charismatic to each other.<br><br>He\'s not stupid and he\'s not irrational. He\'s the character who throws the story\'s central question straight back at the Leonellis: what exactly is the difference between what you do and what we do?',
    coreFlaw: 'Chasing a perfectly coherent self-interest with none of the infrastructure to keep it standing.',
    skills: [],
    relationships: []
  },

  {
    id: 'leto',
    name: 'Capitano Vitale Leto',
    alias: null,
    portrait: 'img/characters/moretti.png',
    chapter: 99,
    faction: 'tredicesima',
    role: 'faction-leader',
    title: 'Commanding Officer, Tredicesima',
    class: 'Commander or Sentinel Variant',
    tier: 'Origin (I)',
    classLine: null,
    descriptor: null,
    primaryStat: null,
    secondaryStat: null,
    stats: null,
    appearance: 'Age 45. Compact, methodical, specific in his language in a way that reminds Cecilia of Matteo.',
    summary: 'A Carabinieri captain. He runs a single unit out of a Centro Storico station that carries a higher-than-average share of Player-class personnel, because their commanding officer quietly pushed class selection from day one.<br><br>He still operates as law enforcement. He still wears the uniform. And he\'s drifting further from institutional norms every day, in capability and in how independently he runs.',
    coreFlaw: 'The gap between the institution he serves and the reality he works in gets wider every day.',
    skills: [],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'Aware of her. Not yet decided what that awareness requires him to do.', chapter: 99 }
    ]
  },

  {
    id: 'cannavaro',
    name: 'Assessore Giulia Cannavaro',
    alias: null,
    portrait: 'img/characters/cannavaro.png',
    chapter: 99,
    faction: 'municipio',
    role: 'faction-leader',
    title: 'Deputy Assessore for Public Works',
    class: 'None — NPC',
    tier: null,
    classLine: null,
    descriptor: null,
    primaryStat: null,
    secondaryStat: null,
    stats: null,
    appearance: 'Age 52.',
    summary: 'The most pragmatic survivor of the city\'s administrative core. She\'s NPC-classified, and she understands more clearly than anyone what that means for institutional authority going forward.<br><br>She\'s not sympathetic to the Leonellis. She\'s not hostile to them either. She deals with whoever makes the practical situation better, whatever they happen to be.',
    coreFlaw: 'Her tools no longer fit the world she has to work in.',
    skills: [],
    relationships: []
  },

  {
    id: 'valli',
    name: 'Ingegnere Sara Valli',
    alias: null,
    portrait: 'img/characters/valli.png',
    chapter: 99,
    faction: 'compagnia-acque',
    role: 'faction-leader',
    title: 'Leader, Compagnia delle Acque',
    class: 'Infrastructure Variant',
    tier: 'Origin (I)',
    classLine: null,
    descriptor: null,
    primaryStat: null,
    secondaryStat: null,
    stats: null,
    appearance: 'Age 44. Former municipal engineer.',
    summary: 'She picked her class in the first hour of the apocalypse, having grasped immediately that infrastructure expertise was about to become a direct power source.<br><br>Precise, technical, with no sentiment in her at all. She doesn\'t dislike Cecilia. She doesn\'t like anyone. She evaluates.',
    coreFlaw: 'Leverage without enforcement is borrowed time.',
    skills: [],
    relationships: []
  },

  {
    id: 'fasce',
    name: 'Avvocato Roberto Fasce',
    alias: null,
    portrait: 'img/characters/fasce.png',
    chapter: 99,
    faction: 'corporate-bloc',
    role: 'faction-leader',
    title: 'Turin Representative, Corporate Restoration Bloc',
    class: 'Advocate Variant',
    tier: 'Origin (I)',
    classLine: null,
    descriptor: null,
    primaryStat: 'ACUITY',
    secondaryStat: 'PRESENCE',
    stats: null,
    appearance: 'Age 51. Pre-integration corporate attorney and logistics consultant.',
    summary: 'He\'s assembling a protection-and-services operation with corporate branding: System-backed security contracts, supply chain restoration offers, institutional normality sold as a product.<br><br>He dresses predation up in legitimacy. He knows he does it. He doesn\'t consider it a problem.',
    coreFlaw: 'He believes he\'s something better than the Leonellis. Cecilia finds the distinction operationally meaningless and personally contemptible.',
    skills: [],
    relationships: [
      { name: 'Matteo Vascari', detail: 'Professional rival. Doing the same thing from a different starting position.', chapter: 99 }
    ]
  }

];

// ============================================
// FACTION COLOR MAP — used for card accents
// ============================================
var FACTION_COLORS = {
  'leonelli':        { color: '#c9a84c', label: 'Leonelli' },
  'ferro-patto':     { color: '#6a8caf', label: 'Ferro Patto' },
  'fiamma-eterna':   { color: '#d4763a', label: 'Fiamma Eterna' },
  'leone-selvaggio': { color: '#b33a3a', label: 'Leone Selvaggio' },
  'tredicesima':     { color: '#5a7a5a', label: 'Tredicesima' },
  'municipio':       { color: '#7a7a8a', label: 'Municipio Coalition' },
  'compagnia-acque': { color: '#4a7a9a', label: 'Compagnia delle Acque' },
  'corporate-bloc':  { color: '#8a7a6a', label: 'Corporate Bloc' },
  'civilian':        { color: '#6a6a60', label: 'Civilian' }
};

// ============================================
// ROLE LABELS
// ============================================
var ROLE_LABELS = {
  'core-five':      'Core Five',
  'analyst':        'Analyst',
  'faction-leader': 'Faction Leader',
  'civilian':       'Civilian'
};


// ============================================
// TEMPLATE — Copy this block to add a new character:
// ============================================
/*
  {
    id: 'unique-id',
    name: 'Full Name',
    alias: 'Callsign or null',
    portrait: 'img/characters/filename.png',
    chapter: 1,                    // first chapter they appear in
    faction: 'leonelli',           // must match a key in FACTION_COLORS
    role: 'core-five',             // must match a key in ROLE_LABELS
    title: 'Their role or rank',
    class: 'CLASS NAME',
    tier: 'Origin (I)',
    classLine: 'Tier I → Tier II → Tier III → Tier IV',
    descriptor: 'System class descriptor text.',
    primaryStat: 'STAT NAME',
    secondaryStat: 'STAT NAME',
    stats: {                       // values 0–100 for bar display, or null
      presence: 50,
      acuity: 50,
      force: 50,
      resilience: 50,
      velocity: 50,
      precision: 50,
      edge: 0
    },
    appearance: 'Physical description.',
    summary: 'Character summary. Use <br><br> between paragraphs.',
    coreFlaw: 'Their primary flaw.',
    skills: [
      {
        name: 'SKILL NAME',
        type: 'Passive / Active',
        chapter: 1,                // chapter skill is revealed
        desc: 'Skill description.',
        ranks: 'Rank progression notes or null.'
      }
    ],
    relationships: [
      { name: 'Other Character', detail: 'Nature of relationship.', chapter: 1 }
    ]
  },
*/