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
      acuity: 80,
      force: 25,
      resilience: 35,
      velocity: 40,
      precision: 50,
      edge: 65
    },
    appearance: 'Age 26. Shorter than the others, slim, compact build. Ash-blonde bob cut at the jaw, bright green eyes, young face, sharp chin. Deceptively small in a room full of larger people — never physically imposing, always visually controlled. Wears an immaculate tailored black suit, white blouse, minimal jewelry, concealed blades.',
    summary: 'Protagonist. Head of the Leonelli crime family. Calm, exact, patient. Speaks softly and rarely repeats herself. Notices leverage points immediately: debts, habits, fear, ambition. Polite on purpose. Protects her people because they are hers, not because she is merciful. Straightens her cuffs before making a threat. Lets silence run long if it pressures the other person.',
    coreFlaw: 'Underestimates irrational actors because she expects self-interest to govern behavior.',
    skills: [
      {
        name: 'MARKED LEDGER',
        type: 'Passive',
        chapter: 13,
        desc: 'Through sustained interaction, Cecilia identifies a target\'s primary vulnerability — the thing they most fear losing. The System formalizes this as a catalogued flag that enhances all her actions against that target.',
        ranks: 'Ranks 1–3 visible. Hidden Rank 4 unlocks when she eliminates a Marked target also operating under an active Breach Penalty — becomes FINAL ACCOUNT.'
      },
      {
        name: 'WEIGHT OF OFFICE',
        type: 'Active — Presence-based',
        chapter: 13,
        desc: 'A command presence effect projected in a defined radius. Entities within range who fail a Resilience check experience hesitation — a physical reluctance to take hostile action against Cecilia or a designated ally. Does not work on enemies with very high Resilience or specific immunity skills. Scales poorly against fanatical states.',
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
      { name: 'Bianca Severa', detail: 'Protected by absolute devotion she has never had to request.', chapter: 1 },
      { name: 'Ruggiero Montini', detail: 'Her wall. Completely intolerant of disrespect toward her.', chapter: 1 },
      { name: 'Matteo Vascari', detail: 'The only person who argues with her directly without losing her respect.', chapter: 1 },
      { name: 'Dario Fioretti', detail: 'She sees through him instantly. The partnership works because neither mistakes the other for harmless.', chapter: 1 },
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
      force: 35,
      resilience: 35,
      velocity: 90,
      precision: 75,
      edge: 50
    },
    appearance: 'Age 27. Tall, slim, almost severe. Long black hair in a single braid. Pale skin, light violet or gray-lilac eyes, narrow face, unreadable expression. Moves without wasted motion; when standing still, she is the stillest person in the room. Fitted black suit, pale shirt, slim tie, flat shoes.',
    summary: 'Leonelli intelligence chief, assassin, and internal security. Reserved, exact, unsentimental. Speaks less than anyone else and listens more. Positions herself where she can see doors and reflections. Blinks infrequently when focused. Rarely laughs. Loves Cecilia with dangerous, absolute devotion — expressed through attention, readiness, and the speed with which she moves against threats.',
    coreFlaw: 'Can escalate to elimination faster than Cecilia prefers. Trusts almost no one outside the Core Five.',
    skills: [
      {
        name: 'QUIET APPROACH',
        type: 'Passive',
        chapter: 7,
        desc: 'Bianca\'s movement generates no System-legible sound signature within enclosed spaces. Not true invisibility — she still occupies space and can be physically encountered. But her movement falls below the detection threshold of non-System-enhanced awareness.',
        ranks: 'At higher ranks, extends to outdoor environments and crowds.'
      },
      {
        name: 'SILENCE FIELD',
        type: 'Active',
        chapter: 7,
        desc: 'Suppresses sound in a designated radius. Prevents auditory alerting and verbal skill components. At advanced tiers, suppresses the System interface itself for entities inside — targets cannot read their own status, receive notifications, or see skill cooldowns.',
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
      { name: 'Cecilia Leonelli', detail: 'Dangerous, absolute devotion expressed through action, never plain statement.', chapter: 1 },
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
      presence: 55,
      acuity: 40,
      force: 95,
      resilience: 85,
      velocity: 30,
      precision: 45,
      edge: 40
    },
    appearance: 'Age 43. Tallest in the group. Broad shoulders, thick neck, heavy hands, completely bald. Square jaw, deep brow, narrow eyes, one visible scar at the temple and cheek. Looks like a wall in a suit. Black suit cut for a heavy frame, dark shirt, dark tie, plain heavy-soled shoes.',
    summary: 'Leonelli enforcer and collections chief. Quiet, disciplined, literal. Does not posture. Jokes rarely, and when he does it is dry and blunt. Checks exits and chokepoints automatically. Rolls his shoulders before a fight. Most openly protective of Cecilia. Argues for decisive force when others deliberate. Excels in corridors, stairwells, and cramped terrain.',
    coreFlaw: 'Impatient with liars, cowards, and ornamental authority. Argues for decisive force when deliberation may be wiser.',
    skills: [
      {
        name: 'IRON THRESHOLD',
        type: 'Passive',
        chapter: 7,
        desc: 'Damage absorption scales upward during sustained engagement. The longer Ruggiero holds a position, the more he can absorb. Hidden Rank 4 activates automatically in any outnumbered engagement — damage condition no longer required.',
        ranks: 'Hidden Rank 4 unlock: Sustain combat against four or more simultaneous opponents without retreating.'
      },
      {
        name: 'CORRIDOR',
        type: 'Active',
        chapter: 7,
        desc: 'Ruggiero designates a physical space — hallway, doorframe, stairwell — as held ground. Enemies attempting to move through face escalating resistance effects. Allies moving through receive a minor speed bonus.',
        ranks: 'Pairs with IRON THRESHOLD in chokepoint situations.'
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'Most openly protective. Completely intolerant of disrespect toward her.', chapter: 1 },
      { name: 'Luca Terranova', detail: 'Accepted COLLECTOR on Luca\'s reasoning in Chapter 7. Does not give respect easily — the fact that he did says something about both of them.', chapter: 7 }
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
      force: 15,
      resilience: 25,
      velocity: 20,
      precision: 40,
      edge: 50
    },
    appearance: 'Age 49. Lean, silver-gray hair combed back. Trimmed beard, narrow mouth, long nose, angular cheekbones. Wears dark glasses or lightly tinted lenses — when he removes them, it should matter. Immaculate charcoal or black suit, pale shirt, dark tie.',
    summary: 'Leonelli consigliere. Controlled, educated, exact. Best speaker in formal settings, most dangerous writer in the group. Can argue with Cecilia directly without losing her respect because he argues with evidence, not sentiment. Cleans his glasses when thinking. Corrects imprecise wording mid-sentence. Reads contracts twice even when he wrote them. Transforms criminal administration into System-backed leverage through contract mechanics.',
    coreFlaw: 'Pride in his intellect is his primary flaw — too much faith in comprehensible systems.',
    skills: [
      {
        name: 'BINDING CLAUSE / BREACH PENALTY',
        type: 'Active',
        chapter: 7,
        desc: 'Formalized agreements authored by Matteo carry System-enforceable weight. Violation triggers a Breach Penalty — a System-registered consequence applied to the violating party. At higher ranks: compulsion effects, territory-linked enforcement, automatic flagging into Cecilia\'s Marked Ledger.',
        ranks: 'Hidden Rank 4 unlock: Author a contract that is breached, then witness the full Breach Penalty execution without intervening.'
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
      { name: 'Cecilia Leonelli', detail: 'The only person who argues with her directly. Argues with evidence, not sentiment.', chapter: 1 },
      { name: 'Giorgio Esposito', detail: 'The analyst Matteo trusts most.', chapter: 99 }
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
      presence: 65,
      acuity: 55,
      force: 40,
      resilience: 35,
      velocity: 75,
      precision: 60,
      edge: 85
    },
    appearance: 'Age 32. Lean, athletic build. Dark blue-black hair, longer on top, always deliberately unruly. Short beard or careful stubble. Tinted glasses worn low enough to show his grin. Handsome in an unserious, dangerous way. Sharp black suit with a flashier cut than the others, blue tie or accent.',
    summary: 'Leonelli operator. Fast-talking, charming, observant. Flirts and needles people on purpose to test how tightly wound they are. Underneath that, ruthless and practical. Fidgets with his cufflinks. Samples food and drink first in unfamiliar places. Never forgets an insult but pretends he did. Reaches spaces and people the others cannot.',
    coreFlaw: 'Takes risks because he trusts his own adaptability — his primary flaw.',
    skills: [
      {
        name: 'READ THE ROOM',
        type: 'Passive',
        chapter: 7,
        desc: 'On entry to any space, Dario instinctively maps the emotional and motivational state of everyone present. The System formalizes this as a passive alignment display — a rough read of the gap between stated behavior and actual intent.',
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
      { name: 'Cecilia Leonelli', detail: 'She sees through him instantly. Neither mistakes the other for harmless.', chapter: 1 },
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
    primaryStat: 'ACUITY',
    secondaryStat: 'PRESENCE (emerging)',
    stats: {
      presence: 30,
      acuity: 95,
      force: 10,
      resilience: 20,
      velocity: 25,
      precision: 35,
      edge: 30
    },
    appearance: 'Age 26. Average height, lean from forgetting to eat. Dark hair, usually unkempt. Wears glasses.',
    summary: 'Co-protagonist. First Leonelli analyst. Pre-collapse data analyst whose real intellectual life was MMORPG economy modeling — his crafting simulators had thousands of users. Posted a 900-word class-selection breakdown more accurate than anything else available in Turin. Calm, methodical, speaks in systems. Non-combat. The analyst the Division is built around.',
    coreFlaw: 'Internally aware that he is indispensable, humiliated, and constrained. Most likely to seek leverage through control of information rather than direct confrontation.',
    skills: [
      {
        name: 'LOAD BEARING',
        type: 'Passive — Developing',
        chapter: 7,
        desc: 'Luca instinctively identifies the structural dependencies of any system he observes: the things that, if removed or changed, cause the rest to collapse or transform. In a Scenario, identifies which element of enemy deployment or objective chain is load-bearing before anyone else.',
        ranks: 'At higher ranks, applies to physical environments, faction structures, and System-generated Scenario architectures.'
      },
      {
        name: 'FRAMEWORK',
        type: 'Active — Developing',
        chapter: 7,
        desc: 'Luca constructs a predictive model of a developing situation and shares it as a System-legible output to a designated group. At higher ranks, becomes a shared tactical overlay updating in real time.',
        ranks: 'The skill that makes him irreplaceable — and the skill most dangerous if directed against Cecilia\'s interests.'
      }
    ],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'The only relationship in the group that is genuinely bilateral in intellectual respect. She cannot fully see through him because he does the same thing she does, from a different angle.', chapter: 5 },
      { name: 'Iris Terranova', detail: 'His sister. The emotional anchor of his storyline. The consequence of his acquisition is embodied in her presence.', chapter: 5 },
      { name: 'Bianca Severa', detail: 'Called her class correctly. She noticed him for it. Noticing is different from monitoring.', chapter: 7 }
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
    title: 'Resident of Palazzo Valperga',
    class: 'Sparkcaller',
    tier: 'Origin (I)',
    classLine: null,
    descriptor: null,
    primaryStat: 'PRECISION',
    secondaryStat: 'ACUITY',
    stats: {
      presence: 40,
      acuity: 65,
      force: 15,
      resilience: 20,
      velocity: 40,
      precision: 70,
      edge: 35
    },
    appearance: 'Age 23. Luca\'s sister. Long auburn hair.',
    summary: 'The most observant civilian in the building. She is not a prisoner. She is not an asset. She is a person in an impossible situation who has decided that understanding the situation is more useful than objecting to it. Building a picture of the Leonelli organization from the inside, noting its structures, loyalties, tensions, and gaps. Whether she engaged with the class selection window has not been confirmed.',
    coreFlaw: null,
    skills: [],
    relationships: [
      { name: 'Luca Terranova', detail: 'Her brother. The consequence of his acquisition is embodied in her presence, and neither of them can entirely pretend otherwise.', chapter: 6 }
    ]
  },

  {
    id: 'serena',
    name: 'Serena Marini',
    alias: 'Nullroute',
    portrait: 'img/characters/serena.png',
    chapter: 99, // Arc 2 — not yet in draft
    faction: 'leonelli',
    role: 'analyst',
    title: 'Exploit Lab Lead',
    class: 'Unknown',
    tier: 'Origin (I)',
    classLine: null,
    descriptor: null,
    primaryStat: 'ACUITY',
    secondaryStat: 'Unknown',
    stats: {
      presence: 35,
      acuity: 85,
      force: 15,
      resilience: 25,
      velocity: 50,
      precision: 45,
      edge: 60
    },
    appearance: 'Age 31. Former competitive speedrunner.',
    summary: 'Approaches the Leonellis voluntarily and negotiates aggressively from a position of practical weakness — correctly identifying that her skills generate leverage regardless. Responsible pre-collapse for two game-breaking exploit discoveries that required emergency patches. Enthusiastic about the apocalypse in a way that unsettles everyone around her. Specialty: finding what the System did not intend to reward as generously as it does.',
    coreFlaw: 'Tactically reckless by Bianca\'s standards. Most likely analyst to create problems through enthusiasm rather than resentment.',
    skills: [],
    relationships: [
      { name: 'Dario Fioretti', detail: 'Genuinely fond of him, which has not caused a problem yet.', chapter: 99 },
      { name: 'Luca Terranova', detail: 'Two most capable analysts. Think in different modes — architecture vs. edge cases. Likely to both respect and irritate each other.', chapter: 99 }
    ]
  },
  
  {
    id: 'giulia-conti',
    name: 'Giulia Conti',
    alias: null,
    portrait: 'img/characters/giulia-conti.png',
    chapter: 99,
    faction: 'leonelli',
    role: 'analyst',
    title: 'Artificer — System Analysis Division (tentative)',
    class: 'ARTIFICER',
    tier: 'Origin (I)',
    classLine: null,
    descriptor: null,
    primaryStat: 'PRECISION',
    secondaryStat: 'ACUITY',
    stats: {
      presence: 25,
      acuity: 70,
      force: 10,
      resilience: 20,
      velocity: 20,
      precision: 70,
      edge: 40
    },
    appearance: 'Slight, mousy. Ink-stained fingers. Tendency to avoid eye contact.',
    summary: 'Tentative recruit for the System Analysis Division. Her Artificer class grants her the ability to manipulate and upgrade physical items with System properties — a capability no one else in the organization possesses and no one has yet fully mapped for operational use. Her value is structural and immediate; her integration is not. Crippling anxiety in combat zones makes her dependent on others for basic field safety, a liability the Division absorbs because the alternative is forfeiting the class entirely. She knows exactly how much she is worth and has no idea how to use that knowledge.',
    coreFlaw: 'Practically helpless outside of controlled environments. Her anxiety is not an obstacle to her work — it is an obstacle to surviving long enough to do it.',
    skills: [],
    relationships: []
  },

  {
    id: 'ermilo',
    name: 'Ermilo Ferrero',
    alias: 'RaptorSix',
    portrait: 'img/characters/ermilo.png',
    chapter: 13,
    faction: 'leonelli',
    role: 'analyst',
    title: 'Observer — System Analysis Division',
    class: 'OBSERVER',
    tier: 'Origin (I)',
    classLine: null,
    descriptor: null,
    primaryStat: 'ACUITY',
    secondaryStat: 'PRECISION',
    stats: {
      presence: 20,
      acuity: 70,
      force: 15,
      resilience: 15,
      velocity: 30,
      precision: 65,
      edge: 35
    },
    appearance: 'Age 24. Pale, sleep-deprived, frantic eyes. Nervous stutter.',
    summary: 'Forum theory-crafter who correctly deduced early class mechanics before anyone with real authority was listening. His MMORPG veteran\'s instinct is sound; his real-world survival capacity is not. Pressed into Leonelli service, his Observer class makes him an invaluable analytical asset — he sees hidden System variables that fall outside Luca\'s ARCHITECT framework, the things the System logs but does not surface. In the Division\'s information architecture, he reads what others cannot find. Outside of it, he needs managing.',
    coreFlaw: 'The gap between his theoretical capability and his practical fragility is wide enough to be dangerous — to him and, in the wrong situation, to whoever is depending on his read.',
    skills: [],
    relationships: [
      { name: 'Lorena Ferrero', detail: 'His wife. His grounding force. The person between him and operational collapse.', chapter: 13 },
      { name: 'Luca Terranova', detail: 'Complementary capabilities — ARCHITECT and OBSERVER see different layers of the same System. Whether that produces collaboration or friction depends on the day.', chapter: 34 }
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
    primaryStat: 'ACUITY',
    secondaryStat: 'RESILIENCE',
    stats: {
      presence: 35,
      acuity: 70,
      force: 15,
      resilience: 65,
      velocity: 20,
      precision: 40,
      edge: 30
    },
    appearance: 'Age 24. Pragmatic bearing. Fiercely protective energy.',
    summary: 'Ermilo\'s wife. She came with him; she is not an afterthought. Her Scribe class allows her to physically record and formalize System data in ways that carry institutional weight — a foundational capability for Matteo\'s expanding contract architecture, which depends entirely on reliable documentation of System-legible agreements. Where Matteo authors binding terms, Lorena creates the substrate that makes those terms verifiable. She is also, practically speaking, the reason Ermilo functions at all: she is his grounding force when his theoretical mind gets overwhelmed by their new reality. The Division got two assets and billed it as one acquisition.',
    coreFlaw: 'Her value is tied to Ermilo\'s presence, which makes her leverage and her exposure the same thing.',
    skills: [],
    relationships: [
      { name: 'Ermilo Ferrero', detail: 'Her husband. She manages the distance between his capabilities and his limits.', chapter: 13 },
      { name: 'Matteo Vascari', detail: 'Her Scribe class is the foundation his contract architecture builds on. A quiet, functional dependency neither has yet formally acknowledged.', chapter: 13 }
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
    title: 'Cartographer — System Analysis Division',
    class: 'CARTOGRAPHER',
    tier: 'Origin (I)',
    classLine: null,
    descriptor: null,
    primaryStat: 'ACUITY',
    secondaryStat: 'PRECISION',
    stats: {
      presence: 20,
      acuity: 70,
      force: 10,
      resilience: 15,
      velocity: 35,
      precision: 70,
      edge: 25
    },
    appearance: 'Age 32. Lanky, too much hair, constantly nervous. High-strung energy that does not settle.',
    summary: 'Recruitment target extracted by Cecilia and Bianca during the Night of First Measure — found barricaded in his apartment, surrounded by hand-drawn charts, already doing the work. Deeply overwhelmed by the apocalypse and not pretending otherwise. His Cartographer class allows him to predict short-term systemic trends before they become visible in the data — a capability that sits between Luca\'s structural modeling and Ermilo\'s hidden-variable reading, and overlaps neatly with neither. The frantic, obsessive quality of his mind is not incidental to the class; it is the cost of it. He produces accurate reads under conditions that leave him visibly worse off for having done so.',
    coreFlaw: 'The class takes a severe toll on his nerves. He is most useful at his limit, and his limit is where he breaks down.',
    skills: [],
    relationships: [
      { name: 'Cecilia Leonelli', detail: 'She extracted him. He is aware that this was not rescue.', chapter: 13 },
      { name: 'Bianca Severa', detail: 'Was present at the extraction. He has not stopped being aware of her since.', chapter: 13 }
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
    secondaryStat: 'Unknown',
    stats: {
      presence: 30,
      acuity: 80,
      force: 15,
      resilience: 30,
      velocity: 25,
      precision: 40,
      edge: 55
    },
    appearance: 'Age 41. Former competitive poker player turned online casino operator.',
    summary: 'Pre-collapse, his family owed the Leonellis a significant debt — he presents himself voluntarily within 48 hours of initialization, having already done the math. Specializes in probability modeling under incomplete information and opponent behavior prediction. Cynical, non-resentful, purely transactional. Does not object to anything on moral grounds, only on structural grounds when the plan is unsound.',
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
    summary: 'Did not select a class. Remained in his church through the Night of First Measure. De facto coordinator of civilian welfare in a three-block radius. Not afraid of Cecilia. Not impressed by her. Watching what she does, because the people he is responsible for are inside the area she is claiming.',
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
    summary: 'Built Ferro Patto from institutional muscle memory and genuine conviction that public order is a service obligation. Not cynical about his mission — sincerely believes in it. Competent tactically, weak on information architecture and economic logistics. His threat to Cecilia is reputational: he offers civilians a cleaner-looking version of order.',
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
    summary: 'Believes the System is a divine selection event, sincerely and entirely. He is not cruel. He is indifferent to suffering that falls outside his transcendent purpose. Declines to prevent violence when it serves his organization. Cannot be placed in a leverage map because his motivations are not self-interest in any form Cecilia can engage.',
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
    summary: 'Operational leader by force of personality and by being the most capable combatant in the group. Effective, reckless, genuinely charismatic in the specific way that predatory young men with new powers are charismatic to each other. Not stupid. Not irrational. The character who most directly asks the story\'s central question back at the Leonellis: what exactly is the difference between what you do and what we do?',
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
    summary: 'Carabinieri captain. A single Carabinieri unit operating out of a Centro Storico station with a higher-than-average rate of Player-class personnel because its commanding officer privately encouraged class selection from the first day. Still operates as law enforcement. Still wears the uniform. Increasingly divergent from institutional norms in capability and in operational independence.',
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
    summary: 'The most pragmatic surviving member of the city\'s administrative core. NPC-classified, but the person who understands most clearly what that means for institutional authority going forward. Not sympathetic to the Leonellis. Not hostile. She deals with whoever makes the practical situation better, regardless of what they are.',
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
    summary: 'Selected her class in the first hour of the apocalypse, having immediately understood that infrastructure expertise was about to become a direct power source. Precise, technical, entirely unsentimental. She does not dislike Cecilia. She does not like anyone. She evaluates.',
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
    summary: 'Assembling a protection-and-services operation with corporate branding: System-backed security contracts, supply chain restoration offers, the presentation of institutional normality as a product. He dresses predation in legitimacy. He knows he does this. He does not consider it a problem.',
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
    summary: 'Character summary.',
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
