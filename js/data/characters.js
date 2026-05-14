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
    appearance: 'Age 26. Young face, sharp chin, features that read as pleasant until they read as precise. Ash-blonde hair cut to the jaw in a clean bob, slightly layered, with a faint cool undertone at the tips where the light catches it differently. Bright green eyes, steady and direct, the kind that register everything and give back very little. Her default expression is a controlled near-smile: not warmth, acknowledgment. Slim figure. She is never the most physically imposing person in the room and has arranged her entire presentation around the fact. Immaculate tailored black suit, white blouse, minimal jewelry, concealed blades.',
    summary: 'Protagonist. Head of the Leonelli crime family. Calm, exact, patient. She governs by attention. Her quiet is the quiet of a person who has already said the thing the room is about to need, and is waiting to see whether anyone else arrives at it. She speaks softly because softness compels the room to lean in, and rarely repeats herself because the cost of repetition is paid in authority. Her default expression is a controlled near-smile, which she deploys in inverse proportion to the room\'s comfort. The more dangerous the moment, the more correct her manner becomes.<br><br>She reads leverage points the way other people read faces. Debts, habits, fear, ambition: these are the four entries in the ledger she keeps for every person she meets, and she updates them in the background of every conversation she has. She is polite on purpose. The politeness is calibrated to make her opposite number feel that disrespecting her would be a category error rather than a threat. The threat is implied by the precision of the courtesy itself. She straightens her cuffs before making a threat. She lets silence run long when it pressures the other person.<br><br>She protects her people because they are hers. The distinction matters to her. She is not merciful, and she does not pretend the work she does is anything other than what it is. What she will not do is mistake the people who depend on her for currency. Loyalty inside the organization is treated as a structural asset, maintained with the same care she gives to the building\'s load-bearing walls. Loyalty outside the organization is treated as something to be earned or purchased, depending on which is cheaper.<br><br>Her dislikes are specific. She has no patience for ornamental authority, for people who confuse the trappings of power with the work that produces it. She has less for cowards who have arranged the world so that they can avoid making the decisions their position requires. She holds grudges for years, and has been observed to hold them with a calm that other people mistake for forgiveness. The mistake is theirs. Betrayal in particular she treats as an accounting problem; the account remains open until it is closed.<br><br>Cecilia is the only child of Aurelio Leonelli, head of the Leonelli organization until his arrest and death in custody five years before the System\'s arrival. She grew up inside the Family in the specific way that the children of senior figures in such organizations do: visible to everyone, mentioned by no one, present at functions where her presence was the entire point and her opinion was not requested. She watched her father conduct business from balconies, from doorways, from the corners of rooms she was not meant to be paying attention to. She paid attention.<br><br>What she learned, she learned from watching: that authority was a performance sustained by infrastructure, that infrastructure was built from relationships, and that the most valuable relationships were the ones where both parties had calculated the cost of betrayal and arrived at the same answer. She learned that her father was very good at his work, and that his work involved decisions she would one day have to make herself. She learned, eventually, that he had not planned for her to make them.<br><br>She was twenty-one when he was arrested. Twenty-one and a half when the hearing he had been preparing for went badly enough that the family understood he was not coming home. The gold chain she wears inside her shirt was given to her the day before that hearing. She has worn it every day since.<br><br>The succession was not designed for her. Her father had a number of senior figures whose history with the organization made them the obvious inheritors, and the obvious inheritors spent a brief, ugly period assuming the obvious. What they had not accounted for was that her father, in the years before his arrest, had quietly built her a position inside the organization\'s record system, its bookkeeping, and its relationships with its most stable commercial partners. By the time the obvious inheritors looked at the books, the books answered to her. By the time they considered correcting that, Ruggiero Montini and Matteo Vascari had publicly declared their alignment with her, and the question of correction became a question that would have to be settled in blood. The men who would have had to spill it preferred a different answer.<br><br>The two years that followed she has since described, in private, as the apprenticeship her father had not intended to give her. She made mistakes. She made fewer of them than her doubters had predicted, and the ones she made she paid for in person, which earned her a reputation distinct from her father\'s. He had been respected. She was respected differently, as the person who had been correct in a room full of people betting she would not be. By the time she was twenty-five, the Family was leaner, quieter, more profitable, and more disciplined than it had been at any point in its history. The doubters had either left or stopped doubting in public.<br><br>She has not, in private, stopped measuring herself against her father. She is aware of the comparison and aware that it is unfair to both of them. He held his position with a confidence she has not been able to inherit; he was born into the certainty that he belonged there, and the certainty was visible in every decision he made. Hers is constructed daily, out of evidence, against a standard he set without ever having to defend. She finds the standard useful. She finds the comparison tiring. She has chosen to keep both.<br><br>The System arrived eight months after her twenty-sixth birthday. She read its first announcement, quickly identified that it represented the largest restructuring of operational reality in her lifetime, and was issuing orders before the first hour was complete. The advantage she has built since then is downstream of a single conviction held since the moment her father did not come home: that the world will not arrange itself around her, and that arranging it is therefore her responsibility.',
    coreFlaw: 'Underestimates irrational actors because she expects self-interest to govern behavior.',
    skills: [
      {
        name: 'MARKED LEDGER',
        type: 'Passive',
        chapter: 13,
        desc: 'Through sustained interaction, Cecilia identifies a target\'s primary vulnerability: the thing they most fear losing. The System formalizes this as a catalogued flag that enhances all her actions against that target.',
        ranks: 'Ranks 1–3 visible. Hidden Rank 4 unlocks when she eliminates a Marked target also operating under an active Breach Penalty. Becomes FINAL ACCOUNT.'
      },
      {
        name: 'WEIGHT OF OFFICE',
        type: 'Active — Presence-based',
        chapter: 13,
        desc: 'A command presence effect projected in a defined radius. Entities within range who fail a Resilience check experience hesitation: a physical reluctance to take hostile action against Cecilia or a designated ally. Does not work on enemies with very high Resilience or specific immunity skills. Scales poorly against fanatical states.',
        ranks: null
      },
      {
        name: 'FINAL ACCOUNT',
        type: 'Active — Hidden Rank 4 Evolution',
        chapter: 99,
        desc: 'When a Marked Ledger target has an active Breach Penalty and Cecilia acts against them directly, the execution carries compulsion weight. The System registers the outcome as a closed account.',
        ranks: 'Evolution of MARKED LEDGER at Hidden Rank 4. Not yet unlocked.'
      }
    ],
    relationships: [
      { name: 'Bianca Severa', detail: 'Cecilia trusts Bianca implicitly to hold her ground and protect her. Bianca is her constant shadow, and while Cecilia is emotionally guarded, she recognizes and reciprocates the deep loyalty Bianca offers, noting that they "don\'t scare easily, you and me"', chapter: 1 },
      { name: 'Ruggiero Montini', detail: 'She respects his veteran experience but constantly has to manage his overprotectiveness, ensuring his desire to shield her doesn\'t undermine her authority or become a weakness.', chapter: 1 },
      { name: 'Matteo Vascari', detail: 'She relies heavily on his counsel and grounded nature. Because she took over the family at a young age, she values that Matteo treats her with professional respect rather than familial condescension.', chapter: 1 },
      { name: 'Dario Fioretti', detail: 'She appreciates his cleverness and ability to read people. While she doesn\'t let him get away with being reckless, she enjoys their banter and occasionally allows a more casual, honest dynamic to surface between them during quiet moments.', chapter: 1 },
      { name: 'Luca Terranova', detail: 'The only relationship in the Core group that is genuinely bilateral in terms of intellectual respect.', chapter: 5 }
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
    appearance: 'Age 27. Severe in the way of someone who has removed everything unnecessary. Long black hair tied into a braided ponytail. Pale skin with a faint flush along the cheekbones that reads as the only involuntary thing about her. Amber-gold eyes, heavy-lidded and downcast by default, the kind of gaze that registers everything from below its own surface. Narrow face, lips held in a flat, sealed line. Toned figure. She moves without wasted motion and when standing still she is the stillest person in the room. Black suit, white shirt, blue tie, flat shoes.',
    summary: 'Leonelli intelligence chief, assassin, and internal security. Reserved, exact, unsentimental. Bianca is the stillest person in any room she occupies. Her stillness is concentration narrowed to the point of being mistaken for absence by people who have not learned to look for it. She listens more than anyone else, speaks less than anyone else, and has organized her presentation around the principle that information disclosed is leverage discarded. She positions herself where she can see doors and reflections. She blinks infrequently when focused. She rarely laughs.<br><br>She is unsentimental in the specific Piedmontese register, careful about what is owed to whom and unwilling to perform warmth she does not feel. Warmth she does feel she expresses through proximity, through readiness, through the speed with which she moves against threats. She does not say what she means when she can demonstrate it instead. Demonstration carries no risk of misinterpretation.<br><br>Her relationship with Cecilia is the central organizing fact of her interior life, and one she has decided to keep there. Her operating principle on the subject is that the only thing worse than caring too much is looking like you do. She lives within that constraint with the discipline of someone who has decided the discipline is the relationship. What she gives, she gives through attention.<br><br>She is wary of almost everyone outside the Core Five. Outside that perimeter, her default position is monitoring, and her threshold for escalation runs lower than Cecilia\'s preferences allow. Cecilia has corrected her on this. Bianca has accepted the correction and continued to operate, when she judges it necessary, slightly past the line of what she has been authorized to do. She does this with full awareness of the trade-off, having decided that the loss of marginal approval is an acceptable price for ensuring there will be a Cecilia to disapprove.<br><br>Bianca was born in Genoa, the daughter of a longshoreman and a woman whose work was never formally entered in any document her daughter has been able to recover. Her father died when she was fourteen, in circumstances the family agreed were an accident and that Bianca, by sixteen, had concluded were not. The investigation she conducted between sixteen and eighteen produced answers she has never shared and consequences she has not described. She left Genoa at nineteen and did not return.<br><br>The years between nineteen and twenty-three are documented in her file as freelance security work, which is the term used for them by people who do not need to know more. What she did during those years gave her the skills she now uses and the reputation that brought her to the Leonellis\' attention. She was twenty-three when she was brought in for an interview Cecilia had requested personally, on the basis of a recommendation Cecilia had verified herself.<br><br>The interview lasted forty minutes. She sat across from a woman three years younger than her who had read her file completely, asked four questions, and offered her a position whose terms were better than she had any right to expect. She accepted before the end of the meeting. It was the first time in her life she had felt, sitting across from someone she had just met, the absence of the urge to leave the room. She has worked for Cecilia for the eight years since, and has not, in that time, considered any other arrangement.',
    coreFlaw: 'She escalates to elimination faster than Cecilia prefers and trusts almost no one outside the Core Five.',
    skills: [
      {
        name: 'QUIET APPROACH',
        type: 'Passive',
        chapter: 7,
        desc: 'Bianca\'s movement generates no System-legible sound signature within enclosed spaces. Not true invisibility: she still occupies space and can be physically encountered. Her movement falls below the detection threshold of non-System-enhanced awareness.',
        ranks: 'At higher ranks, extends to outdoor environments and crowds.'
      },
      {
        name: 'SILENCE FIELD',
        type: 'Active',
        chapter: 7,
        desc: 'Suppresses sound in a designated radius. Prevents auditory alerting and verbal skill components. At advanced tiers, suppresses the System interface itself for entities inside, leaving targets unable to read their own status, receive notifications, or see skill cooldowns.',
        ranks: 'A room Bianca has silenced is a room the System has gone quiet in.'
      },
      {
        name: 'CLOSE COVERAGE',
        type: 'Active',
        chapter: 7,
        desc: 'Bianca designates a single target as her covered entity. Incoming attacks against that target during active Coverage are intercepted, with the effect redirected to Bianca at reduced damage. She does not extend Coverage automatically. She decides.',
        ranks: null
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'Bianca\'s life revolves around Cecilia, a path she walked down through years of small choices. She harbors a deep, unspoken affection for her boss, operating under the personal rule that "the only thing worse than caring too much was looking like you did"', chapter: 1 },
      { name: 'Ruggiero Montini', detail: 'There is a professional rivalry over who gets to protect Cecilia. Bianca\'s presence on dangerous missions with Cecilia can provoke Ruggiero\'s irritation, though they respect each other\'s lethal capabilities.', chapter: 1 },
      { name: 'Dario Fioretti', detail: 'She acts as the deadpan foil to his constant joking. When Dario suggests he could be the team\'s "bard" for morale, Bianca coldly replies she\'d rather "beat it out of people"', chapter: 1 },
	  { name: 'Luca Terranova', detail: 'The first person she has noticed rather than merely monitored. That thread develops slowly.', chapter: 7 }
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
    appearance: 'Age 43. Tallest in the group, broad through the shoulders and neck in a way that makes rooms feel smaller. Completely bald, the skull large and cleanly shaped. Ice-blue eyes set deep under a heavy brow that sits in a permanent downward press, the kind of face that reads as anger at rest and is simply his face. The brow is crossed with creases earned over decades, and the overall impression is of something that has absorbed a great deal of force and is prepared to absorb more. Strong jaw, wide nose, lips held in a flat line. A scar runs from his left temple to the cheekbone. Dark suit cut for a heavy frame, white shirt, striped tie.',
    summary: 'Leonelli enforcer and collections chief. Quiet, disciplined, literal. Ruggiero does not posture. The absence is itself the most consistent thing about him: in a room of men trained to project, he projects nothing he has not already earned, and the room reads the difference. He jokes rarely. When he does it is dry, blunt, and aimed at the kind of pretension he has spent forty years being patient with. He checks exits and chokepoints automatically on entering any room. He rolls his shoulders before a fight.<br><br>His body has been the instrument of his work for so long that it operates ahead of his conscious attention. He moves through spaces as if those spaces were slightly too small for him, which they generally are, and he does so without clumsiness, because he has spent a lifetime learning the dimensions of rooms he is too large for.<br><br>He is openly, completely intolerant of disrespect directed at Cecilia. The intolerance is structural. He has decided that her authority is the load-bearing wall of the entire organization, and that any disrespect tolerated against it weakens the wall. When he believes she is wrong he tells her, and only her. The deference in public is absolute, including on the points he has argued against her in the room before.<br><br>His patience with deliberation runs short. In any meeting where decision becomes deliberation and deliberation becomes hesitation, Ruggiero is the voice that names the cost of further delay. He is not always right. He is right often enough that Cecilia treats his impatience as an input to be weighed rather than a tendency to be managed.<br><br>Ruggiero entered the Leonelli organization at nineteen, hired by Cecilia\'s father in the kind of arrangement that was common at the time and is no longer discussed in detail. He came from Bari, the youngest of three brothers, and the only one who survived to thirty. The scar at his left temple is from the second of the events that left him an only child. The other scars he carries are not visible in any room he is dressed for.<br><br>He worked for Aurelio Leonelli for nineteen years before Aurelio\'s arrest. In that time he became, in sequence, a competent enforcer, a respected enforcer, a feared enforcer, and finally the head of the organization\'s enforcement and collections arm. His advancement was not flashy. He was promoted because the work he was given was done correctly and on time, and because the people he was given to manage either learned to perform to his standard or left. The reputation he built was for unwillingness to revisit decisions once made.<br><br>When Aurelio was arrested, Ruggiero attended a single meeting between the obvious inheritors and a number of other senior figures, listened for ninety minutes, and declared, at the end of it and to the room, that the Family belonged to Cecilia and that any other arrangement would require going through him. The declaration was understood as the end of the discussion. He has not, in the five years since, given any of the men who were in that room cause to reopen it. He serves her now from loyalty grounded in capability rather than in her father\'s name, having decided, with full awareness of the trade, that the Family runs better under her than it would under any of the alternatives.',
    coreFlaw: 'He is impatient with liars, cowards, and ornamental authority, and argues for decisive force in situations where deliberation may be wiser.',
    skills: [
      {
        name: 'IRON THRESHOLD',
        type: 'Passive',
        chapter: 7,
        desc: 'Damage absorption scales upward during sustained engagement. The longer Ruggiero holds a position, the more he can absorb. Hidden Rank 4 activates automatically in any outnumbered engagement, with no damage condition required.',
        ranks: 'Hidden Rank 4 unlock: sustain combat against four or more simultaneous opponents without retreating.'
      },
      {
        name: 'CORRIDOR',
        type: 'Active',
        chapter: 7,
        desc: 'Ruggiero designates a physical space as held ground. Enemies attempting to move through face escalating resistance effects. Allies moving through receive a minor speed bonus.',
        ranks: 'Pairs with IRON THRESHOLD in chokepoint situations.'
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'He is fiercely loyal but struggles with the new reality of Cecilia putting herself in the line of fire. He wants to be the one taking the hits for her, occasionally letting his protectiveness sound like a command.', chapter: 1 },
      { name: 'Matteo Vascari', detail: 'As the two older veterans of the crew, they coordinate seamlessly. Matteo handles the logistics and legalities, while Ruggiero handles the physical enforcement.', chapter: 1 },
	  { name: 'Dario Fioretti', detail: 'He sometimes views Dario\'s charismatic, thrill-seeking approach to the apocalypse with mild disbelief, once asking Dario if fighting a horrific monster is "what you call fun"', chapter: 1 }
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
    appearance: 'Age 49. Lean and broad-shouldered, with the kind of physical presence that makes his stillness feel deliberate. Silver-white hair swept back from the face in a dramatic wave, dark streaks still running through it, the whole effect somewhere between distinguished and severe. Heavy dark brows set in a permanent downward press above blue-tinted aviator glasses that he wears as a default rather than an affectation. The beard is full and shaped, dark shading to silver at the chin. Angular cheekbones, a long jaw, a face that communicates authority without effort and skepticism without movement. Black suit, white shirt, black tie.',
    summary: 'Leonelli consigliere. Controlled, educated, exact. Matteo is the most controlled person in the Core Five and one of the most controlled people in the city. His control does not look like stillness. He is animated, articulate, willing to argue. What is controlled is the choosing: every word he allows himself is a word he means, and he revises imprecise wording in others mid-sentence as a matter of professional hygiene rather than correction. He cleans his glasses when thinking, a gesture so habitual that the other members of the Core Five read it as a clock: when his glasses come off, something is being worked out, and the time to interrupt has passed. He reads contracts twice even when he wrote them.<br><br>He is the best speaker in the group in formal settings and the most dangerous writer in the group in any setting. He is the only person who can argue with Cecilia in front of others without costing her authority, because he argues with evidence rather than sentiment, and because she trusts him not to argue unless he is prepared to be right.<br><br>Matteo was born in Asti, the second son of a notarial family whose practice had been in the same building for four generations. He read law at the University of Turin, passed his examinations on the first attempt, and was offered partnership in his father\'s firm at twenty-six. He declined. The partnership, he had concluded by then, would have committed him to forty years of property transfers, marriage contracts, and the administration of estates whose principal complications had already been settled by the time the documents reached his desk. He wanted complications that had not yet been settled.<br><br>He met Aurelio Leonelli at thirty, through a mutual acquaintance who had been told, in a manner Matteo did not at the time understand, that the introduction would be appreciated. The conversation that followed lasted three hours. By the end of it, Aurelio had offered him a retainer to handle the legitimate side of a number of arrangements whose other sides were handled elsewhere, and Matteo had accepted. Within five years, the legitimate side had grown into a parallel practice. Within ten, the parallel practice was the most quietly influential consigliere position in Piedmont. Studio Vascari, the notarial office on the ground floor of Palazzo Valperga, was the public face of work whose actual scope no public document had ever named.<br><br>He served Aurelio for nineteen years. He served him well enough that Aurelio, in the last conversation the two of them had before his arrest, identified Matteo by name as one of two people he trusted to ensure that the organization continued to exist in any form recognizable to him. The other was Ruggiero. The conversation was not, at the time, framed as a succession discussion. Matteo has since reconstructed it as one.<br><br>His decision to align with Cecilia after Aurelio\'s death was the easiest professional decision he has ever made. He had watched her grow up. He had watched her father shape her, deliberately and otherwise. He had watched her work in the two years before her father\'s arrest, and he had concluded that she was, by some measurable distance, the most capable person in the organization. The alignment was a recognition that Aurelio had, in his last years, built a successor he had not intended to build, and that the Family\'s interests were now better served by her than by any of the alternatives.<br><br>He treats Cecilia with professional respect, which is the only register he has ever offered anyone and one she values precisely because of its consistency. In private, on rare occasions, he reminds her to rest. She has not yet asked him to stop.',
    coreFlaw: 'Pride in his intellect is his primary flaw. He places too much faith in systems that can be fully comprehended.',
    skills: [
      {
        name: 'BINDING CLAUSE / BREACH PENALTY',
        type: 'Active',
        chapter: 7,
        desc: 'Formalized agreements authored by Matteo carry System-enforceable weight. Violation triggers a Breach Penalty, a System-registered consequence applied to the violating party. At higher ranks: compulsion effects, territory-linked enforcement, automatic flagging into Cecilia\'s Marked Ledger.',
        ranks: 'Hidden Rank 4 unlock: author a contract that is breached, then witness the full Breach Penalty execution without intervening.'
      },
      {
        name: 'PRECEDENT',
        type: 'Passive',
        chapter: 7,
        desc: 'Matteo retains exact recall of any formalized agreement he has authored, witnessed, or analyzed. At higher ranks, extends to oral agreements made within earshot. He is a living archive of every binding commitment.',
        ranks: null
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'He is old enough to be her father, but he carefully maintains a dynamic of professional respect. He acts as her sounding board and occasionally reminds her to rest, providing a subtle, fatherly support that Cecilia privately appreciates.', chapter: 1 },
      { name: 'Dario Fioretti', detail: 'He tolerates Dario\'s looseness, often evaluating Dario\'s unorthodox plans (like staging informal defectors from rival factions) with a critical but open mind.', chapter: 1 }
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
    appearance: 'Age 33. Lean, with the relaxed posture of someone who has never needed to take up more space than he chooses to. Dark black hair, longer on top and swept dramatically to one side in a way that is too consistent to be accidental. Full dark beard, kept at medium length, slightly unkempt at the edges. Blue-tinted aviator glasses worn across the bridge of his nose, doing very little to obscure the expression beneath them. That expression is the most notable thing about him: a half-smile that reads as both genuine and strategic, the face of someone who has already decided he is the most interesting person in the room and is waiting to find out if you agree. Blue suit with a flashier cut than the others, white shirt, dark tie.',
    summary: 'Leonelli operator. Fast-talking, charming, observant. Dario is the only member of the Core Five who has decided that the work should be enjoyable. He flirts on purpose, needles on purpose, and tests people\'s tightness because tightness is information and information is currency. The charm is genuine in the sense that he has not had to construct it, and strategic in the sense that he has spent most of his adult life refining what to do with it. He is aware of the effect he has on rooms. He has not yet found a reason to dim it.<br><br>Beneath the performance, he is ruthless and practical. He fidgets with his cufflinks when reading a room he has not finished reading. He samples food and drink first in unfamiliar places. He never forgets an insult and pretends he did, because pretending he did keeps the person who delivered it operating under a false sense of safety, and the false sense of safety is the leverage. He is the youngest of the Core Five and the one whose social register is closest to the streets the organization operates on. He uses this advantage carefully. The carelessness is, like the charm, a performance.<br><br>Dario was born in Naples and arrived in Turin at fourteen, in the company of an aunt whose explanation of why they had left has changed three times in the years since and is no longer asked for. He grew up in Aurora, attended school inconsistently, and learned the city the way the people who actually run cities learn them: block by block, contact by contact, debt by debt. By seventeen he was running small errands for small operators. By twenty he was running larger errands for larger ones. By twenty-three he had been arrested twice, charged once, and convicted never, and his name had begun to appear in the kind of conversations that decide who gets promoted in the city\'s informal economy.<br><br>He met Aurelio Leonelli at twenty-five, in circumstances Dario has described in three different ways depending on the audience. The version closest to the truth involves a transaction that should have gone badly for the Leonellis and did not, because Dario, who had been positioned to be the loose end, had calculated correctly that the long-term value of being useful to Aurelio exceeded the short-term value of being paid by the people who had hired him. Aurelio noticed. The conversation that followed produced a job offer. Dario accepted.<br><br>He worked under Aurelio for three years before Aurelio\'s arrest. In that time he was the operator who could go where the senior figures could not, into the markets, the clubs, the neighborhoods where the Leonelli suit would have been a liability rather than an asset. He built relationships none of the others could have built and maintained them in registers none of the others could have sustained. By the time Aurelio was arrested, Dario was junior on paper and running a parallel network whose existence the senior figures only partially understood.<br><br>His decision to align with Cecilia was made in approximately the time it took her to ask him to make it. He had calculated, before she walked into the room, that she was the most interesting professional outcome the situation had on offer, and that working for her would be more entertaining than working for anyone she might displace. The calculation has, in the years since, proved correct. He still flirts with her boundaries on purpose, in the manner of someone who has decided that the boundaries themselves are part of what makes her worth working for. She lets him do this within limits and corrects him when he exceeds them. He notices, every time, that the correction is exact. He has not yet stopped enjoying the precision.',
    coreFlaw: 'He takes risks because he trusts his own adaptability, and that trust is not always warranted.',
    skills: [
      {
        name: 'READ THE ROOM',
        type: 'Passive',
        chapter: 7,
        desc: 'On entry to any space, Dario instinctively maps the emotional and motivational state of everyone present. The System formalizes this as a passive alignment display: a rough read of the gap between stated behavior and actual intent.',
        ranks: null
      },
      {
        name: 'SUPPLY LINE',
        type: 'Active',
        chapter: 7,
        desc: 'Dario maintains a mental map of viable trade routes, contacts, and resource nodes within a given territory. At higher ranks, generates a System notification when a key route becomes compromised before visible evidence appears.',
        ranks: null
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'He loves testing her boundaries with jokes and casual behavior, but he is deeply compelled by her absolute control. He understands that she is actively shaping him into a sharper asset, a process he fully buys into.', chapter: 1 },
      { name: 'Bianca Severa', detail: 'He enjoys needling her with his relaxed attitude, casually offering her cigarettes in the middle of a mobilization just to see her reject it.', chapter: 1 },
	  { name: 'Ruggiero Montini', detail: 'He provides the fast-talking, improvisational groundwork that sets up Ruggiero\'s muscle and Matteo\'s legal traps. He isn\'t afraid to dive into the messy, unpredictable crowds that the older veterans prefer to avoid.', chapter: 1 },
	  { name: 'Serena Marini', detail: 'Genuinely fond of her, which has not caused a problem yet.', chapter: 99 }
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
    appearance: 'Age 26. Average height, lean in a way that reads as chronic rather than deliberate; he forgets meals the way some people forget to reply to messages. Dark hair with a faint reddish cast, permanently unkempt, falling across his forehead. Gray-purple eyes behind wire-framed glasses, usually carrying the flatness of someone who has been thinking too hard for too long. Habitually dressed in whatever was closest to hand: a faded teal button-up over a white shirt, sleeves pushed to the elbow. Looks younger than he is at rest, older when working.',
    summary: 'First analyst acquired by the Leonelli organization and current head of the System Analysis Division. Pre-collapse, Luca worked as a competent and quietly bored data analyst at a financial modeling firm in San Donato; his actual intellectual life ran under the handle "Archimede" on a niche gaming forum, where his MMORPG crafting simulators and market prediction tools served thousands of users who never knew his real name.<br><br>The forum post that drew Cecilia\'s attention in the first hours after initialization was not the longest class-selection breakdown circulating in Turin. It was the most structurally rigorous, written for an audience he did not yet have, examining the language of the class descriptors for what they implied rather than what they stated.<br><br>She acquired him through structured coercion: every exit closed before the contract was offered, the deal framed as mutual interest. He signed because his arithmetic was correct, and because his sister Iris was already inside the building. He has not yet admitted to himself that he is exactly where he wants to be.',
    coreFlaw: 'Indispensable, humiliated, and constrained, and aware of all three. Most likely to seek leverage through control of information rather than direct confrontation, and not yet decided what he would do with that leverage if he acquired it. The deeper problem he can already see: the System is shaping his cognition, not just developing it, and the tool he would use to analyze the change is the thing being modified.',
    skills: [
      {
        name: 'LOAD-BEARING',
        type: 'Passive (developing)',
        chapter: 7,
        desc: 'Luca instinctively identifies the structural dependencies of any system he observes: the elements that, if changed, cause the rest to collapse or transform. At current ranks, this applies to informational, organizational, and Scenario architectures. The skill does not turn off. He cannot enter a room, read a report, or hear a briefing without registering what is holding it together.',
        ranks: 'At higher ranks, extends to physical environments, faction structures, and System-generated Scenario architectures in ways he has not yet encountered. The class\'s EDGE-primary configuration means the skill identifies not only structural dependencies but the points at which those structures can be made to fail.'
      },
      {
        name: 'FRAMEWORK',
        type: 'Active (developing)',
        chapter: 7,
        desc: 'Luca constructs a predictive model of a developing situation and shares it as a System-legible output to a designated group. At low ranks, this presents as a probability estimate delivered to group interfaces. At higher ranks, it becomes a shared tactical overlay that updates in real time as conditions change.',
        ranks: 'The skill that makes him irreplaceable in any complex Scenario, and the skill that makes him most dangerous to Cecilia if he ever directs it toward understanding her specifically.'
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'The story\'s most charged dynamic and the only relationship in the Core Five that is genuinely bilateral in intellectual terms. She sees through almost everyone around her. She cannot fully see through Luca because he is running the same process she runs, from a different angle, with different tools. The equilibrium holds because a mind she cannot fully map is more valuable as an ally than threatening as a constraint.', chapter: 5 },
      { name: 'Iris Terranova', detail: 'His sister. The emotional anchor of his storyline. Her presence in the Palazzo embodies what the acquisition cost, and neither of them can entirely pretend otherwise. He is protective in the way that has no clean expression: she did not choose to be here, and he arranged it because there was no other option that he could see.', chapter: 5 }
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
    classLine: null,
    descriptor: null,
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
    appearance: 'Age 23. Brown hair worn in a high ponytail, practical, with a few strands always escaping around her face. Blue-gray eyes, wide and alert; the default expression reads as slight surprise, which is misleading, because she is almost never caught off guard. It is simply how attention looks on her. Usually in a plain white top. Looks younger than she is until she asks a question she already knew the answer to.',
    summary: 'Younger sister of Luca Terranova and resident of Palazzo Valperga. Studied literature at the University of Turin when the System initialized; not a theorist, not a gamer, but someone who reads people the way her brother reads mechanics, with the same attention to what is implied rather than stated.<br><br>She was in the apartment when the Leonelli acquisition team arrived, observed the negotiation in full, and packed a bag without being asked. Her status inside the Palazzo is structurally ambiguous: not a prisoner, not an asset, with functional agency inside the building\'s perimeter and no leverage to leave it.<br><br>Coordinates the Analysis Division\'s referral pipeline, manages the team\'s external interfaces, and has built relationships with people she has chosen to have them with. Her notebook contains observations the Division does not have, Matteo does not know about, and Cecilia would find professionally interesting and personally unwelcome. The anger is not gone. It has been filed.',
    coreFlaw: 'Sees too clearly, too early, and inside an organization that has not yet decided what to do with someone who watches it the way she does. Her sharpest tension is with her brother: she has a class that makes her sensitive to latent emergence, and she is not certain what she is watching him become.',
    skills: [
      {
        name: 'LATENT SENSE',
        type: 'Passive (developing)',
        chapter: 7,
        desc: 'Iris perceives suppressed or developing System-recognized potential in entities around her. Not stats, not class details: something more qualitative, the presence of something that has not yet emerged. She does not have the vocabulary to describe this precisely, which frustrates her. It presents as intuition because she has no better framework for it yet.',
        ranks: 'At higher ranks, the perception becomes more articulate and more specific. The practical implication is that she can sometimes see what people are becoming before they can. This is not comfortable knowledge to have in the Palazzo Valperga.'
      },
      {
        name: 'SPARK',
        type: 'Active',
        chapter: 7,
        desc: 'Iris discharges electrokinetic force through direct or short-range contact, scaled by EDGE and FORCE. The straightforward application is combat. The more interesting application is diagnostic: unstable System-property objects respond to the discharge in ways that index their underlying structure.',
        ranks: 'SPARKCALLER is a hybrid combat-and-analytical class. Iris is the Division\'s only field-capable analyst by virtue of class rather than coordination function.'
      }
    ],
    relationships: [
      { name: 'Luca Terranova', detail: 'Her brother. The consequence of his acquisition is embodied in her presence, and neither of them can entirely pretend otherwise. She is watching him change. She loves him. She is not certain the person he is becoming is someone she would have chosen to love.', chapter: 6 },
      { name: 'Matteo Vascari', detail: 'Wary professional respect. He tested her early and she passed by asking the question he expected rather than the one he was deflecting, which told him she understood the game. He has since given her access to work she was not officially cleared for, which she takes as a compliment and a leash simultaneously.', chapter: 7 },
      { name: 'Cecilia Leonelli', detail: 'The arrangement neither discusses directly. Cecilia knows Iris is watching. Iris knows Cecilia knows. Their interactions are correct, almost cordial, and entirely transactional underneath.', chapter: 6 }
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
    classLine: null,
    descriptor: null,
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
    appearance: 'Age 27. Short black hair with a teal-to-olive gradient toward the tips, cut close around the ears and falling across the face in a way that covers one eye most of the time. The visible eye is yellow-green. Light olive skin. Usually in a white t-shirt under a cream-colored oversized jacket worn open, which gives her a slightly off-duty appearance that is not entirely accurate. Large over-ear headphones worn around the neck, black with magenta accent rings.',
    summary: 'Lead of the Exploit Lab. Competitive speedrunner from age sixteen, initially in games with large communities and later in games with communities of eighteen people and declining servers. Two of her pre-collapse exploit discoveries required emergency developer patches within forty-eight hours, both because she ran them on public servers rather than reporting them. Both times she considered this a success.<br><br>She is enthusiastic about the apocalypse. The world broke, the rules became legible, and her entire skill set became professionally relevant; she considers this objectively good news and is aware that most people in the building do not share the assessment.<br><br>She has tested things on herself that she should have tested on systems. She will continue to do this.',
    coreFlaw: 'Tactically reckless by any reasonable standard. The analyst most likely to create problems through enthusiasm rather than resentment, which Bianca has logged as a separate category of risk from the ones she usually manages.',
    skills: [
      {
        name: 'NULL STATE',
        type: 'Passive',
        chapter: 52,
        desc: 'Serena exists partially outside the System\'s standard classification framework. In defined, expected interactions, she functions normally. At the edges of mechanic definitions, the threshold cases, the interactions between systems that were not designed to interact, she produces outputs the System was not modeling.',
        ranks: 'Not always useful. Occasionally spectacular.'
      },
      {
        name: 'EXPLOIT WINDOW',
        type: 'Active (developing)',
        chapter: 52,
        desc: 'Serena deliberately triggers and extends the edge-case interactions her passive identifies, holding a mechanic in an undefined state long enough to extract value from it. At current ranks, the windows are short and the triggers imprecise.',
        ranks: 'At higher ranks, she will engineer the conditions that create the windows rather than finding them in the environment. BREAKER does not advance through grind; it advances by going somewhere the System\'s designers did not go. The System cannot tell her in advance what her next rank unlock requires because the unlock condition is, by definition, something it did not anticipate.'
      }
    ],
    relationships: [
      { name: 'Dario Fioretti', detail: 'Genuinely fond of him. He operates by a similar logic: not analysis, reaction, the advantage in the moment. The fondness has not caused a problem yet.', chapter: 99 },
      { name: 'Luca Terranova', detail: 'Productive friction. She thinks he is too slow and too worried about being wrong. He thinks she generates noise without sufficient framework. Both assessments are partially correct, and their combined output is better than either could produce alone, which neither has fully admitted.', chapter: 99 }
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
    classLine: null,
    descriptor: null,
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
    appearance: 'Age 25. Slight build, the kind that makes her look younger than she is in a room full of people and invisible in a crowd. Dark hair worn in two long braids with a faint purple tint, a deliberate choice she has maintained since before any of this started. Green eyes, direct when she is focused on something, sliding away when she is not. Darker complexion. Ink-stained fingers on most days, the particular permanent kind that comes from technical work rather than casual use. Usually in a plain white t-shirt; the care she puts into objects does not extend to what she wears. Avoids eye contact in unfamiliar situations. Holds it steadily when she is explaining something she is certain about.',
    summary: 'Artificer of the System Analysis Division and the technical arm of the Leonelli operational advantage. Pre-collapse, she was a restoration technician at a private conservation firm contracted to several of Turin\'s museums: quiet, credentialed work that required precision, patience, and an instinctive understanding of how things were built in order to understand how to fix them. The skills the System later formalized had no professional vocabulary before its arrival.<br><br>Cecilia recruited her in the second week, in plain terms: the things you build will keep people alive, credentials are not the question, capability is. Giulia accepted, steadied specifically by being recognized for something no one had previously found a use for.<br><br>Her current output includes the node disruptor, modified equipment for Leonelli field operatives, and a restricted-license output to the broader protection network that Cecilia structures carefully to maintain the technical advantage. In her workshop she moves without hesitation, asks for what she needs directly, and has sent Dario away twice for being loud at the wrong moment.',
    coreFlaw: 'Anxiety in unfamiliar or high-threat environments is real and not performed. She functions in combat zones by keeping her attention on the object in her hands and not on what is happening around her, which works until it does not. The further unresolved question is whether she is grateful to the System for making her capabilities legible or angry at the previous world for failing to find a use for them sooner. The answer shifts depending on what she is being asked to build.',
    skills: [
      {
        name: 'MATERIAL SENSE',
        type: 'Passive',
        chapter: 11,
        desc: 'Giulia perceives the System properties latent in physical objects: the modifications possible, the incompatibilities present, and the stress points that will fail first under System-level force. This operates continuously and involuntarily, which means she has not been able to look at the Palazzo\'s infrastructure without running a structural assessment since her first week in the building.',
        ranks: 'She has not shared all of her findings.'
      },
      {
        name: 'INFUSE',
        type: 'Active',
        chapter: 11,
        desc: 'Giulia introduces System properties into a physical object through direct sustained contact and concentrated attention. The precision required is significant; imprecise infusion produces unstable results, which she has learned from twice. At current ranks, the process requires her workshop, specific raw materials, and time.',
        ranks: 'At higher ranks, time and material dependencies compress. The ARTIFICER class moves at higher tiers from modification toward creation: producing objects with System properties from raw materials, eventually objects the System has no prior record of.'
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'The most straightforward loyalty dynamic in the building, which Cecilia periodically reassesses for what she might be missing. Giulia was recognized, given a workshop, given real materials and real problems, and told that what she built would matter. What Cecilia watches for is the moment Giulia realizes that what she builds does not always go where she would send it. That moment has not arrived yet.', chapter: 11 },
      { name: 'Luca Terranova', detail: 'Consults her when a Scenario analysis produces a mechanical problem that needs a physical solution. The collaboration is productive and uncomplicated, by Division standards.', chapter: 13 },
      { name: 'Serena Marini', detail: 'Works with her more often than anyone planned. Exploit windows frequently require a device to hold them open. The collaboration is productive and occasionally alarming.', chapter: 99 }
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
    classLine: null,
    descriptor: null,
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
    appearance: 'Age 25. Short, black hair. Yellow-amber eyes with a directness that reads as intensity before you register that it is actually anxiety. He looks at things the way someone looks at things when they are not sure the thing will still be there if they glance away. Black jacket with orange-yellow accent cuffs, worn with the collar up. Looks harder than his age until he speaks, at which point the stutter reappears and revises the impression.',
    summary: 'Auditor of the System Analysis Division. Forum theory-crafter since age fifteen, Ermilio spent his teenage years on private server communities for games whose official support had ended, developing a specific and unusual cognitive orientation: an instinct for finding what was there rather than what was shown. Cut content, unreleased mechanics, developer notes left in the code. The handle "RaptorSix" came from a speedrunning technique he discovered and documented for a game with a twelve-person active community.<br><br>He correctly deduced several early System class mechanics from inference alone, which got him flagged by Bianca independently of Luca; the two posts sat in her files together for four hours before Cecilia decided the second was worth a visit.<br><br>He was found barricaded on the top floor of his building, holding off an extraction attempt by a rival faction, his wife having already decided they needed to go somewhere better. Cecilia announced herself by citing the analytical error in his forum post. He opened the door.',
    coreFlaw: 'Has made peace with the arrangement faster than the arrangement deserves, primarily because the work is genuinely interesting. The skills he uses to help the Leonellis are the same skills he would use to identify what the Leonellis hide from the System and occasionally from each other. He has not yet decided what to do with the things he has seen that no one asked him to look for.',
    skills: [
      {
        name: 'VARIABLE',
        type: 'Passive',
        chapter: 13,
        desc: 'Ermilio sees System flags and hidden variables attached to entities, objects, and locations: the data points the System tracks without surfacing. Condition triggers logged across multiple instances, accumulated spawn energy at specific locations, compliance flags on contracts. The information arrives as a secondary visual layer over his normal field of vision, mostly unobtrusive, occasionally overwhelming in locations with significant System activity.',
        ranks: 'Where the standard interface shows a Player\'s class name and tier, an AUDITOR can request the underlying data: hidden flags, accumulated trigger conditions, behavioral records, and environmental values the System logs for its own purposes.'
      },
      {
        name: 'DISCREPANCY',
        type: 'Active',
        chapter: 13,
        desc: 'Ermilio identifies divergences between the System\'s visible output and its hidden records. When a faction\'s public Reputation does not match its logged behavioral record, he can see the gap. When a contract has been technically complied with in a way that violates its logged intent, he can see the gap.',
        ranks: 'The skill Matteo finds most useful and most unsettling.'
      }
    ],
    relationships: [
      { name: 'Lorena Ferrero', detail: 'His wife. His anchor and his editor. When his framing goes somewhere the evidence does not support, she says so, and he listens. This is not a common dynamic in the Division, and Matteo has quietly noted it.', chapter: 13 },
      { name: 'Luca Terranova', detail: 'Complicated by the fact that Ermilio arrived at the Palazzo with the sense that Luca was a ceiling: older, better-credentialed, operating at a level he was still working toward. The AUDITOR/ARCHITECT dynamic has revised this. Luca builds models from data that can be seen; Ermilio reads data that cannot be seen by anyone else. They need each other, which is a more comfortable arrangement than either expected.', chapter: 34 }
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
    classLine: null,
    descriptor: null,
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
    appearance: 'Age 24. Brown hair worn up in a high bun on working days and falling loose when she is off the clock, which in the Palazzo happens infrequently. Blue-gray eyes that open wide when she is alarmed, which is regularly: not because she is easily frightened, but because she pays enough attention to be alarmed by things that should alarm people. Practical V-neck top. Often has ink on her hands from Scribe work that did not fully transfer to the official medium. This bothers her slightly.',
    summary: 'Scribe of the System Analysis Division and the formal-records infrastructure underwriting Matteo\'s contract architecture. Pre-collapse, she was completing a part-time legal administration certificate while working at a notarial office in the Quadrilatero, processing property records and witnessing documents. She started at nineteen. By the time the System arrived she was fast, precise, and held a thorough understanding of what formal documentation does and does not protect.<br><br>She married Ermilio at twenty, which both their families considered premature and neither of them reconsidered. She was the one who decided they were going with Cecilia: Ermilio was still running the analysis when she packed their bags.<br><br>Her Scribe class produces System-validated records of any fact she has directly witnessed or received through credible documentation, which means her records are not supporting documentation in System-adjudicated disputes; they are primary sources. She has been quietly right about several things before the Division reached the same conclusion, and she does not make a point of this.',
    coreFlaw: 'The only member of the Division who came to the Palazzo entirely because of someone else\'s value to the organization. Her own class emerged afterward, which means her current indispensability was not the reason she was brought in: it is something she built from inside the arrangement. She has a clear view of what this means for her leverage, and a slightly less clear view of what it means for her relationship with an organization she joined under duress and now functionally supports.',
    skills: [
      {
        name: 'INSCRIPTION',
        type: 'Active',
        chapter: 13,
        desc: 'Lorena produces a System-validated record of any fact she has directly witnessed or received through a credible chain of documentation. The record is timestamped by the System and flagged as authenticated. The precision required is significant: imprecise or partially false records produce distorted outputs she can detect but cannot fully correct.',
        ranks: 'An Inscribed record cannot be retroactively altered without producing a visible discrepancy, and can be submitted as evidence in System-adjudicated disputes.'
      },
      {
        name: 'ARCHIVE',
        type: 'Passive (developing)',
        chapter: 13,
        desc: 'Lorena retains exact recall of any document she has Inscribed. At current ranks, this applies to her own Inscriptions only.',
        ranks: 'At higher ranks, will extend to documents she has analyzed through proper channels, then to documents she has been shown by reliable parties.'
      }
    ],
    relationships: [
      { name: 'Ermilio Ferrero', detail: 'Her husband. Her function in his life is structural: she is the editorial pressure that keeps his framing tied to evidence, and the steady presence that keeps him operational. She is protective of him in the way of someone who has decided that her own competence is, among other things, a form of protection. If she is indispensable, he is safer by association.', chapter: 13 },
      { name: 'Matteo Vascari', detail: 'The most functional professional relationship in the Division, partly because their class lines are genuinely complementary and partly because Matteo respects precision as a value rather than a tool. He does not ask her to inscribe things she has not verified. She has not yet encountered a situation where he did, and she is aware that this is information about him rather than a guarantee.', chapter: 13 }
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
    classLine: null,
    descriptor: null,
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
    appearance: 'Age 32. Blond-going-platinum hair pushed back from his face, receding slightly at the temples in a way he has not registered yet. Rectangular glasses, heavy frames. Almost always wearing professional-grade noise-canceling headphones around his neck or over his ears; he bought three pairs before the System arrived for reasons he described as focus, which was technically accurate. Broad through the shoulders in a way that does not match the nervous energy he carries everywhere else. Stubble that is perpetually one day past where he intended to trim it. His face at rest looks slightly aggrieved, like he has just received information he would have preferred not to have. This is not a mood; it is the permanent condition of someone whose class shows him things he cannot stop seeing.',
    summary: 'Cartographer and Scenario Desk lead. Pre-collapse, he spent seven years at a private firm modeling emergency service routing in dense urban environments: ambulance dispatch, fire response, police deployment under variable conditions. He was good at it because he understood that systems under stress behave differently from systems at rest, and most models fail at the cases that matter. The System found that useful.<br><br>Cecilia and Bianca extracted him during the Night of First Measure, finding him barricaded in a Crocetta apartment, surrounded by hand-drawn charts of spawn projections, creature corridors, and density estimates by district. He had been working for eighteen hours without sleep. The charts were startlingly accurate.<br><br>He produces accurate reads under conditions that leave him visibly worse off for having done so, and the Division has learned to read his physical state as a load-bearing indicator. He is overwhelmed by the apocalypse continuously and not as a character beat that resolves. He functions because the alternative is not functioning, and because he has decided that his charts matter. He is probably right.',
    coreFlaw: 'The CARTOGRAPHER class amplifies a mind that was already receiving too much signal. He is most useful at his limit and his limit is where he breaks down, which means his most valuable outputs come at predictable cost to his ability to produce the next one.',
    skills: [
      {
        name: 'SURVEY',
        type: 'Passive',
        chapter: 13,
        desc: 'Ivan continuously receives low-level positional and density data about System-active entities and energy accumulations within a significant radius. At rest, this presents as ambient awareness: he knows which direction creatures are moving before anyone reports it. Under stress, it becomes overwhelming.',
        ranks: 'The headphones are load-bearing infrastructure, not affectation.'
      },
      {
        name: 'PROJECTION',
        type: 'Active',
        chapter: 13,
        desc: 'Ivan produces a formal predictive map of a defined area over a defined time window, rendered as a System-legible overlay shareable with designated parties. Accuracy degrades with distance and time horizon but is meaningfully better than anything available through direct observation.',
        ranks: 'At higher ranks, the map extends to faction movements, resource flows, and systemic trend lines that have nothing to do with creatures.'
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'She extracted him. He is aware that this was not rescue.', chapter: 13 },
      { name: 'Bianca Severa', detail: 'Was present at the extraction. He has not stopped being aware of her since.', chapter: 13 },
      { name: 'Luca Terranova', detail: 'Functional, with an undercurrent of tension about framing. Ivan provides data; Luca builds models from data. The distinction matters to Ivan because his data sometimes points toward conclusions Luca\'s models do not reach. He has learned to flag these divergences directly rather than letting them dissolve into the synthesis.', chapter: 13 }
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
    summary: 'Pre-collapse, his family owed the Leonellis a significant debt — he presents himself voluntarily within 48 hours of initialization, having already done the math.<br><br>Specializes in probability modeling under incomplete information and opponent behavior prediction. Cynical, non-resentful, purely transactional. Does not object to anything on moral grounds, only on structural grounds when the plan is unsound.',
    coreFlaw: 'Pure transactionalism can become its own blindness.',
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
    summary: 'Did not select a class. Remained in his church through the Night of First Measure. De facto coordinator of civilian welfare in a three-block radius.<br><br>Not afraid of Cecilia. Not impressed by her. Watching what she does, because the people he is responsible for are inside the area she is claiming.',
    coreFlaw: null,
    skills: [],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'She respects him in the specific way she respects anyone who is good at their function and does not pretend to be something they are not.', chapter: 99 }
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
    summary: 'Built Ferro Patto from institutional muscle memory and genuine conviction that public order is a service obligation. Not cynical about his mission — sincerely believes in it.<br><br>Competent tactically, weak on information architecture and economic logistics. His threat to Cecilia is reputational: he offers civilians a cleaner-looking version of order.',
    coreFlaw: 'Sincerely wrong about what will sustain his mission. Chose symbolic territory over logistical territory.',
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
    summary: 'Believes the System is a divine selection event, sincerely and entirely. He is not cruel. He is indifferent to suffering that falls outside his transcendent purpose.<br><br>Declines to prevent violence when it serves his organization. Cannot be placed in a leverage map because his motivations are not self-interest in any form Cecilia can engage.',
    coreFlaw: 'The living instance of Cecilia\'s core flaw.',
    skills: [],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'Cannot be placed in her leverage map. The living instance of her core flaw.', chapter: 99 }
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
    summary: 'Operational leader by force of personality and by being the most capable combatant in the group. Effective, reckless, genuinely charismatic in the specific way that predatory young men with new powers are charismatic to each other.<br><br>Not stupid. Not irrational. The character who most directly asks the story\'s central question back at the Leonellis: what exactly is the difference between what you do and what we do?',
    coreFlaw: 'Pursuing a completely coherent self-interest without the infrastructure to sustain it.',
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
    summary: 'Carabinieri captain. A single Carabinieri unit operating out of a Centro Storico station with a higher-than-average rate of Player-class personnel because its commanding officer privately encouraged class selection from the first day.<br><br>Still operates as law enforcement. Still wears the uniform. Increasingly divergent from institutional norms in capability and in operational independence.',
    coreFlaw: 'The gap between the institution he serves and the reality he operates in grows wider every day.',
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
    summary: 'The most pragmatic surviving member of the city\'s administrative core. NPC-classified, but the person who understands most clearly what that means for institutional authority going forward.<br><br>Not sympathetic to the Leonellis. Not hostile. She deals with whoever makes the practical situation better, regardless of what they are.',
    coreFlaw: 'Her tools are no longer adequate for the world she operates in.',
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
    summary: 'Selected her class in the first hour of the apocalypse, having immediately understood that infrastructure expertise was about to become a direct power source.<br><br>Precise, technical, entirely unsentimental. She does not dislike Cecilia. She does not like anyone. She evaluates.',
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
    appearance: 'Age 51. Pre-collapse corporate attorney and logistics consultant.',
    summary: 'Assembling a protection-and-services operation with corporate branding: System-backed security contracts, supply chain restoration offers, the presentation of institutional normality as a product.<br><br>He dresses predation in legitimacy. He knows he does this. He does not consider it a problem.',
    coreFlaw: 'Believes he is something better than the Leonellis. Cecilia finds this distinction operationally irrelevant and personally contemptible.',
    skills: [],
    relationships: [
      { name: 'Matteo Vascari', detail: 'Professional rival. Doing the same thing from different starting positions.', chapter: 99 }
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
