// ============================================
// SYSTEM CODEX DATA — The Apocalypse Is a Business
// ============================================
// Six sections: OVERVIEW, STATS, CLASSES, SKILLS, SCENARIOS, MECHANICS
// Each section is a separate object/array.
// Templates at the bottom of each section.
// ============================================


// ==========================================
// SYSTEM OVERVIEW
// ==========================================

var SYSTEM_OVERVIEW = {
  chapter: 1,
  intro: 'The System showed up with no warning and no explanation. It didn\'t ask permission. It appeared in everyone\'s field of vision at once \(text hanging in the air, monochrome, faintly luminous, impossible to look away from or cover up\), and it spoke to each person directly, like it had been waiting on them.',
  initMessage: 'WELCOME TO THE NEW WORLD.\nYOUR REGISTRATION IS CONFIRMED.\nPLEASE REVIEW YOUR CLASSIFICATION OPTIONS.\nYOU HAVE 72 HOURS.',
  interface: [
    { label: 'Display Method', text: 'Painted straight onto your perception. No device needed. No opt-out.' },
    { label: 'Tone', text: 'It talks like a game master who\'s also the judge. Exact and indifferent, and never impersonal. Every notification is addressed to you, specific and direct.' },
    { label: 'Personal Messages', text: 'Invisible to anyone standing next to you.' },
    { label: 'Public Broadcasts', text: 'Hit every registered entity\'s vision at once. Same spot, same words, same instant.' },
    { label: 'Hidden Prompts', text: 'They exist and they\'re never announced. They surface only when some condition you were never told about gets met. The System won\'t confirm they exist. It won\'t deny it either.' },
    { label: 'Notifications', text: 'They appear once and don\'t repeat.' },
    { label: 'Appraise', text: 'A basic interaction anyone registered can use. It gives up class name and tier, nothing else. Level, stats, and skill loadout stay hidden. The only way to read someone\'s strength is to watch them use it.' }
  ],
  npcStatus: {
    chapter: 7,
    title: 'NPC Status',
    description: 'What you get labeled if you never touch the class selection window before it shuts. Roughly 80% of Turin\'s population ends up an "NPC." That includes most police and military, who were told by institutional command to ignore the System and wait on government guidance that never came.',
    consequences: [
      'NPC weapons and muscle do badly reduced damage against Players and creatures',
      'NPCs don\'t get a pass on Scenario events. Creatures hunt them the same as Players',
      'They get none of the protection class registration buys, and the full helping of exposure',
      'It\'s permanent, and it\'s mechanical'
    ],
    note: 'Not every uniform is an NPC. A fraction ignored the official line and picked their classes anyway, and that splits the institutions down the middle. Player officers are measurably better at the job, which breeds resentment in every direction at once.'
  }
};


// ==========================================
// STATS
// ==========================================

var STATS_DATA = {

  primaryStats: [
    {
      name: 'PRESENCE',
      chapter: 1,
      description: 'Command, coercion, social leverage, the fear economy, pressure at the negotiating table.',
      users: 'Primary: Cecilia (Fixer). Secondary: Matteo (Advocate), Dario (Runner).'
    },
    {
      name: 'ACUITY',
      chapter: 1,
      description: 'Pattern recognition, strategic planning, how fast you process information.',
      users: 'Primary: Matteo (Advocate), Ivan (Cartographer), Ermilio (Auditor). Secondary: Cecilia (Fixer), Luca (Architect), Lorena (Scribe), Giulia (Artificer), Serena (Breaker)'
    },
    {
      name: 'FORCE',
      chapter: 1,
      description: 'Raw physical output: strength, impact, how hard you hit.',
      users: 'Primary: Ruggiero (Collector). Secondary: Iris (Sparkcaller).'
    },
    {
      name: 'RESILIENCE',
      chapter: 1,
      description: 'How much you can soak, how long you can stay in it, endurance.',
      users: 'Secondary: Ruggiero (Collector).'
    },
    {
      name: 'VELOCITY',
      chapter: 1,
      description: 'Movement speed, reaction time, getting to the right spot first.',
      users: 'Primary: Bianca (Watcher). Secondary: Ivan (Cartographer).'
    },
    {
      name: 'PRECISION',
      chapter: 1,
      description: 'Accuracy, fine motor control, how clean your targeting is.',
      users: 'Primary: Lorena (Scribe), Giulia (Artificer). Secondary: Bianca (Watcher), Ermilio (Auditor)'
    },
    {
      name: 'EDGE',
      chapter: 1,
      description: 'Opportunistic action, misdirection, exploit windows, and the margin between what should work and what does. It governs classes whose power comes from positioning and timing instead of raw output.',
      users: 'Primary: Dario (Runner), Luca (Architect), Iris (Sparkcaller), Serena (Breaker)',
      note: 'The seventh stat. It\'s not in the initialization message. It\'s never announced. You find it through how the classes behave. Its existence has to be inferred; nobody states it.'
    }
  ],

  secondaryStats: [
    {
      name: 'INFAMY',
      chapter: 13,
      description: 'Builds up through anything the System files as fear-generating: killing where people can see, enforcing deals with violence, breaking someone\'s resistance in public. It doesn\'t reset.',
      effects: 'High Infamy sharpens intimidation, underworld compliance, and command weight. It also cranks up enemy aggression, marks you for the Hero factions, and drives your bounty values higher.',
      note: 'The System tracks it because it tells the System something useful about what you\'re turning into.'
    },
    {
      name: 'AUTHORITY',
      chapter: 13,
      description: 'Locked until your faction gets recognized. It measures organizational command power, and it scales with the quality of your hierarchy, your membership, your territory, and how many active agreements you\'re running.',
      effects: 'Without a recognized faction your Authority is zero, no matter how good every other stat is. Authority is the thing that turns one Player\'s capability into institutional power.',
      note: null
    }
  ]
};


// ==========================================
// CLASSES
// ==========================================

var CLASSES_DATA = [

  {
    id: 'fixer',
    name: 'FIXER',
    chapter: 1,
    holder: 'Cecilia Leonelli',
    descriptor: 'For those who resolve what others cannot.',
    tier: 'Origin (I)',
    primary: 'PRESENCE',
    secondary: 'ACUITY',
    classLine: ['Fixer', 'Leverage Broker', 'Sovereign Fixer', 'Final Arbiter'],
    ceiling: 'No stated evolution ceiling. The classification window closed for this entity. That\'s a different designation, not a cap.',
    buildDirection: 'Command authority, leverage application, territory-linked effects, execution bonuses against marked targets, compulsion and contract interactions.',
    combatNotes: 'Cecilia isn\'t a frontline fighter. Her combat scenes are short, decisive, and set up by a read that made the outcome inevitable before a blow landed. She hits with precision, at the exact moment it costs her opponent the most.'
  },

  {
    id: 'collector',
    name: 'COLLECTOR',
    chapter: 8,
    holder: 'Ruggiero Montini',
    descriptor: 'For those who claim what is owed.',
    tier: 'Origin (I)',
    primary: 'FORCE',
    secondary: 'RESILIENCE',
    classLine: ['Collector', 'Iron Collector', 'Execution Captain', 'Grave Warden'],
    ceiling: null,
    buildDirection: 'Enforcer-tank-controller. Terrain domination, group suppression, breaking up formations, staying in the fight. Ruggiero soaks punishment and turns it into forward momentum.',
    combatNotes: 'His fights should feel physical and cumulative. He absorbs. He pushes forward. He doesn\'t stop. The second he\'s in a room, the tactical math changes for everyone else in it.'
  },

  {
    id: 'advocate',
    name: 'ADVOCATE',
    chapter: 8,
    holder: 'Matteo Vascari',
    descriptor: 'For those who make terms hold.',
    tier: 'Origin (I)',
    primary: 'ACUITY',
    secondary: 'PRESENCE',
    classLine: ['Advocate', 'Pact Advocate', 'Veiled Magistrate', 'Covenant Chancellor'],
    ceiling: null,
    buildDirection: 'Control-support built on contract architecture, informational suppression, and ward systems. Matteo does almost no direct combat. He makes the terms of every engagement favorable before it starts.',
    combatNotes: 'Matteo doesn\'t fight. He writes the conditions under which other people fight and lose. His strongest scene is the moment a Breach Penalty executes where everyone can see it, and the room works out what it means.'
  },

  {
    id: 'runner',
    name: 'RUNNER',
    chapter: 20,
    holder: 'Dario Fioretti',
    descriptor: 'For those who move faster than consequences.',
    tier: 'Origin (I)',
    primary: 'EDGE',
    secondary: 'PRESENCE',
    classLine: ['Runner', 'Silk Knife', 'Vice Broker', 'Smiling Revenant'],
    ceiling: null,
    buildDirection: 'Mobile skirmisher, social infiltrator, market operator. Dario wins by being in exactly the wrong spot for his opponents and exactly the right one for himself.',
    combatNotes: 'His fights should feel almost unfair. He\'s never where you expect him. Weapons: knives, garrote, poison. Close-range and opportunistic, all of it.'
  },

  {
    id: 'watcher',
    name: 'WATCHER',
    chapter: 8,
    holder: 'Bianca Severa',
    descriptor: 'For those who see what others will not.',
    tier: 'Origin (I)',
    primary: 'VELOCITY',
    secondary: 'PRECISION',
    classLine: ['Watcher', 'Night Auditor', 'Widow Fang', 'Silence Collector'],
    ceiling: null,
    buildDirection: 'Precision eliminator and intelligence operative. She\'s at her best in silence: physical, informational, territorial. She\'s the most dangerous member of the crew in the exact situations she\'s built for, and she\'s taken pains to make those situations come up a lot.',
    combatNotes: 'Bianca\'s violence is personal. Her scenes should feel quiet even when they\'re not. What unsettles people isn\'t what she does. It\'s how completely it doesn\'t trouble her to do it.'
  },

  {
    id: 'architect',
    name: 'ARCHITECT',
    chapter: 8,
    holder: 'Luca Terranova',
    descriptor: 'For those who build what others use.',
    tier: 'Origin (I)',
    primary: 'EDGE',
    secondary: 'ACUITY',
    classLine: ['Architect', 'System Architect', 'Framework Master', 'World Engine'],
    ceiling: null,
    buildDirection: 'Non-combat support and systemic intelligence. The strangest class line in the group, with no natural combat evolution. What it has instead is a structural one. At higher tiers, Luca\'s outputs start interacting with the System at an architectural level.',
    combatNotes: 'Luca doesn\'t fight. His value is in what he can build, model, and predict. No other faction in Turin has anything like his class line.'
  },

  {
    id: 'sparkcaller',
    name: 'SPARKCALLER',
    chapter: 99,
    holder: 'Iris Terranova',
    descriptor: 'For those who call out what is not yet awake.',
    tier: 'Origin (I)',
    primary: 'EDGE',
    secondary: 'FORCE',
    classLine: ['Sparkcaller', 'Arc Diviner', 'Latent Warden', 'Quickening'],
    ceiling: null,
    buildDirection: 'A hybrid combat-and-analysis class. It pairs Electrokinesis with the drawing-out of latent System energy: the potential sitting in people, objects, and locations that hasn\'t been activated or recognized yet. She senses suppressed or developing System-recognized potential as a felt presence, not as stats or class detail. Sometimes she can perceive what an entity is becoming before it surfaces.',
    combatNotes: 'Iris fights at range and up close, channeling Electrokinesis straight into output. The analytical half is the more dangerous half. Inside the Palazzo, the ability to sense latent emergence is not comfortable knowledge to be holding.'
  },

  {
    id: 'cartographer',
    name: 'CARTOGRAPHER',
    chapter: 99,
    holder: 'Ivan Carceri',
    descriptor: 'For those who chart what is coming.',
    tier: 'Origin (I)',
    primary: 'ACUITY',
    secondary: 'VELOCITY',
    classLine: ['Cartographer', 'Wayreader', 'Surveyor General', 'Horizon'],
    ceiling: null,
    buildDirection: 'Non-combat spatial-temporal intelligence. It maps the System\'s patterns across space and time: spawn density, creature movement, energy accumulation, the probability corridors events run down. A Velocity secondary is unusual for a non-combat class, and it\'s there because the output is real-time. At higher ranks the map stretches to faction movements, resource flows, and systemic trend lines that have nothing to do with creatures.',
    combatNotes: 'Ivan doesn\'t fight. The class never switches off; the signal keeps coming. His value is the projection, not the engagement. The noise-canceling headphones are load-bearing infrastructure.'
  },

  {
    id: 'auditor',
    name: 'AUDITOR',
    chapter: 99,
    holder: 'Ermilio Ferrero',
    descriptor: 'For those who read what is not shown.',
    tier: 'Origin (I)',
    primary: 'ACUITY',
    secondary: 'PRECISION',
    classLine: ['Auditor', 'Discrepant', 'Hidden Hand', 'The Witness'],
    ceiling: null,
    buildDirection: 'Non-combat hidden-variable intelligence. He can reach the System\'s internal records, the variables it tracks but never pushes to the standard interface: hidden flags, accumulated trigger conditions, behavioral records, the environmental values it logs for itself. He sees the System working, not just the result it shows. He can spot where the visible output and the hidden record don\'t match.',
    combatNotes: 'Ermilio doesn\'t fight. His value is informational: the gap between what a faction shows and what the System has on file. The skill Matteo finds most useful and most unsettling.'
  },

  {
    id: 'scribe',
    name: 'SCRIBE',
    chapter: 99,
    holder: 'Lorena Ferrero',
    descriptor: 'For those who make a record hold.',
    tier: 'Origin (I)',
    primary: 'PRECISION',
    secondary: 'ACUITY',
    classLine: ['Scribe', 'Notary', 'Codifier', 'The Canon'],
    ceiling: null,
    buildDirection: 'Non-combat records infrastructure. A Scribe turns System data into physical records the System then treats as real: written down, validated, timestamped, living in both the document and the System\'s own registry. Those records carry System-backed authenticity, can\'t be altered afterward without leaving a visible discrepancy, and hold up as primary evidence in adjudicated disputes. The deeper half of the class is comprehension. A Scribe reads System language the way a notary reads a contract, taking in what it states and, underneath that, the shape of what it leaves out.',
    combatNotes: 'Lorena doesn\'t fight. The System treats her records as primary sources: the official version of what happened, solid enough that Matteo\'s contracts get built on top of them.'
  },

  {
    id: 'artificer',
    name: 'ARTIFICER',
    chapter: 99,
    holder: 'Giulia Conti',
    descriptor: 'For those who coax what is built.',
    tier: 'Origin (I)',
    primary: 'PRECISION',
    secondary: 'ACUITY',
    classLine: ['Artificer', 'Material Adept', 'Loomwright', 'Genesis Forge'],
    ceiling: null,
    buildDirection: 'Non-combat technical arm. She manipulates and upgrades physical items by working System properties into them, dealing directly with the material layer the System recognizes. She enhances existing gear, composites incompatible System properties into combinations that actually function, and builds devices that touch System mechanics in ways standard equipment can\'t. At higher ranks she moves from modifying things toward making objects the System has no prior record of.',
    combatNotes: 'Giulia doesn\'t fight on the line. Her anxiety in high-threat places is real. She gets through it by keeping her attention on the object in her hands. Her output includes the node disruptor, modified field gear, and a tightly restricted licensing line out to the wider protection network.'
  },

  {
    id: 'breaker',
    name: 'BREAKER',
    chapter: 99,
    holder: 'Serena Marini',
    descriptor: 'For those who find where the rules end.',
    tier: 'Origin (I)',
    primary: 'EDGE',
    secondary: 'ACUITY',
    classLine: ['Breaker', 'Edge Case', 'Undefined', 'Null Author'],
    ceiling: 'No defined progression path. It advances by finding states the System never fully defined: edge cases, undefined interactions, the gap between what a rule says and what happens when you shove it past its tested range. The System can\'t tell her the next unlock condition in advance, because by definition it\'s something the System didn\'t see coming.',
    buildDirection: 'Exploit specialist. She sits partly outside the System\'s standard classification framework. In defined interactions she works like anyone else; out at the edges of a mechanic\'s definition she throws off outputs the System wasn\'t modeling. She can deliberately trigger and stretch edge-case interactions, holding a mechanic in an undefined state long enough to pull value out of it.',
    combatNotes: 'Serena\'s value is the exploit, not the duel. Tactically reckless by any sane standard. She\'s tested things on herself she should have tested on systems, and she\'ll keep doing it. Her output runs from useless to spectacular with not much in between.'
  }

];

// Entities who did not select a class become NPCs directly.
// There is no fallback class. You either chose, or you didn't.

/*
--- CLASS TEMPLATE ---
  {
    id: 'unique-id',
    name: 'CLASS NAME',
    chapter: 1,
    holder: 'Character Name or description',
    descriptor: 'System descriptor text.',
    tier: 'Origin (I)',
    primary: 'STAT',
    secondary: 'STAT',
    classLine: ['Tier I', 'Tier II', 'Tier III', 'Tier IV'],
    ceiling: 'Ceiling note or null',
    buildDirection: 'What the class does.',
    combatNotes: 'How it fights, or null.'
  },
*/


// ==========================================
// SKILLS & HIDDEN RANKS
// ==========================================

var SKILLS_OVERVIEW = {
  chapter: 1,
  acquisition: 'Skills come out of behavior. The System formalizes what you keep doing instead of handing you a menu to pick from.',
  visibleRanks: 'Ranks 1 through 3 are visible and announced.',
  hiddenRanks: 'Ranks 4 and up exist and never get announced. The unlock conditions are specific behavioral convergences the System won\'t explain. You have to infer they happened from effects that don\'t add up. Every hidden rank unlock is a story beat.',
  hiddenRank4Rule: 'Hidden Rank 4 is qualitative, not numerical. It\'s not a beefier version of the old skill. It\'s a different thing that holds the old thing inside it. The System is recognizing that something has become true about you, and the skill has to reflect it now.',
  classWindowNote: 'Reading a class descriptor tells you the evolution ceiling. "Cannot" is a hard cap. "Will not" is about willingness, not limitation. Classes with no stated ceiling have room to grow.'
};

var SKILLS_DATA = [

  {
    id: 'marked-ledger',
    name: 'MARKED LEDGER',
    chapter: 13,
    holder: 'Cecilia Leonelli',
    class: 'FIXER',
    type: 'Passive',
    description: 'Spend enough time with someone and Cecilia finds their primary vulnerability, the thing they\'re most afraid to lose. The System turns it into a catalogued flag that sharpens everything she does against that target. In social settings it reads as negotiation leverage. In combat it reads as knowing the vulnerability, and hitting it at the moment that costs the most.',
    ranks: [
      { rank: 1, text: 'Active during direct one-on-one engagement.', chapter: 1 },
      { rank: 2, text: 'Works in group settings; she can mark several targets at once.', chapter: 99 },
      { rank: 3, text: 'Outlasts the engagement; the read stays as a standing file.', chapter: 99 },
      { rank: 'H4', text: 'Unlocks when Cecilia takes out a Marked target who\'s also carrying an active Breach Penalty. Becomes FINAL ACCOUNT. The skill fuses with contract enforcement.', chapter: 99 }
    ]
  },

  {
    id: 'final-account',
    name: 'FINAL ACCOUNT',
    chapter: 99,
    holder: 'Cecilia Leonelli',
    class: 'FIXER',
    type: 'Active — Hidden Rank 4 Evolution',
    description: 'When a Marked Ledger target is under an active Breach Penalty and Cecilia moves on them herself, the kill carries compulsion weight. The target\'s resistance gets mechanically suppressed. The System logs the outcome as a formal resolution of an outstanding liability, with knock-on effects to faction reputation and contract authority.',
    ranks: []
  },

  {
    id: 'terms',
    name: 'WEIGHT OF OFFICE',
    chapter: 13,
    holder: 'Cecilia Leonelli',
    class: 'FIXER',
    type: 'Active — Presence-based',
    description: 'Cecilia can drop a conditional behavioral constraint on a target during direct engagement. At low ranks it\'s a short hesitation window. At higher ranks it\'s a battlefield compulsion: an opponent under WEIGHT OF OFFICE can\'t willingly move toward a protected target, use a specific named skill, or take a specific named action for the duration.',
    ranks: []
  },

  {
    id: 'iron-threshold',
    name: 'IRON THRESHOLD',
    chapter: 17,
    holder: 'Ruggiero Montini',
    class: 'COLLECTOR',
    type: 'Passive',
    description: 'Damage absorption climbs the longer a fight runs. The longer Ruggiero holds a spot, the more he can soak before it starts costing him output.',
    ranks: [
      { rank: 1, text: 'Reactive: he has to take damage first to trigger the elevated state.', chapter: 7 },
      { rank: 2, text: 'The threshold trips earlier and the elevated state holds longer.', chapter: 99 },
      { rank: 3, text: 'Further scaling improvements.', chapter: 99 },
      { rank: 'H4', text: 'Hold combat against four or more opponents at once without giving ground. Activates on its own the moment he enters any outnumbered fight. No damage condition needed anymore.', chapter: 99 }
    ]
  },

  {
    id: 'corridor',
    name: 'CORRIDOR',
    chapter: 17,
    holder: 'Ruggiero Montini',
    class: 'COLLECTOR',
    type: 'Active',
    description: 'Ruggiero names a stretch of space as held ground. Enemies trying to push through hit resistance effects that compound with every attempt. Allies passing through get a small speed bonus. Pairs with IRON THRESHOLD in chokepoints.',
    ranks: []
  },

  {
    id: 'binding-clause',
    name: 'BINDING CLAUSE / BREACH PENALTY',
    chapter: 22,
    holder: 'Matteo Vascari',
    class: 'ADVOCATE',
    type: 'Active',
    description: 'Agreements Matteo formalizes in front of all parties carry weight the System will enforce. Break one and you trip a Breach Penalty, a consequence the System registers and lands on whoever broke faith.',
    ranks: [
      { rank: 1, text: 'A minor notification-based consequence on breach.', chapter: 7 },
      { rank: 2, text: 'Compulsion effects on breach.', chapter: 99 },
      { rank: 3, text: 'Territory-linked enforcement and automatic escalation.', chapter: 99 },
      { rank: 'H4', text: 'Author a contract that gets breached, then watch the full Breach Penalty run its course without stepping in. Breach Penalties start flagging automatically into Cecilia\'s MARKED LEDGER, which is what enables the FINAL ACCOUNT convergence.', chapter: 99 }
    ]
  },

  {
    id: 'precedent',
    name: 'PRECEDENT',
    chapter: 22,
    holder: 'Matteo Vascari',
    class: 'ADVOCATE',
    type: 'Passive',
    description: 'Matteo holds exact recall of any formalized agreement he\'s authored, witnessed, or analyzed. At higher ranks it reaches spoken agreements made within earshot, then agreements reliably reported through documented channels. He\'s a living archive of every binding commitment.',
    ranks: []
  },

  {
    id: 'read-the-room',
    name: 'READ THE ROOM',
    chapter: 20,
    holder: 'Dario Fioretti',
    class: 'RUNNER',
    type: 'Passive',
    description: 'The second Dario walks into a space, he maps where everyone\'s head is at, emotionally and motivationally. A passive alignment display: a rough read on the gap between what people are saying and what they actually want. In combat it tells him who\'s about to break before they\'ve figured it out themselves.',
    ranks: []
  },

  {
    id: 'supply-line',
    name: 'SUPPLY LINE',
    chapter: 20,
    holder: 'Dario Fioretti',
    class: 'RUNNER',
    type: 'Active',
    description: 'Dario carries a running mental map of the workable trade routes, contacts, and resource nodes across a given territory. At higher ranks it pings him with a System notification when a key route gets compromised, before there\'s anything visible to go on. It\'s what makes him operationally irreplaceable.',
    ranks: []
  },

  {
    id: 'quiet-approach',
    name: 'QUIET APPROACH',
    chapter: 18,
    holder: 'Bianca Severa',
    class: 'WATCHER',
    type: 'Passive',
    description: 'Inside enclosed spaces, Bianca\'s movement throws off no sound signature the System can read. She\'s not invisible. She still takes up space and can be run into. Her movement just falls under the detection threshold of anyone the System hasn\'t enhanced. At higher ranks it reaches outdoor environments and crowds.',
    ranks: []
  },

  {
    id: 'silence-field',
    name: 'SILENCE FIELD',
    chapter: 18,
    holder: 'Bianca Severa',
    class: 'WATCHER',
    type: 'Active',
    description: 'Kills sound across a set radius. No auditory alarms, and verbal skill components get cut off mid-word. At the advanced tiers it smothers the System interface for anyone inside: targets can\'t read their own status, can\'t get notifications, can\'t see a cooldown. A room Bianca has silenced is a room the System has gone quiet in.',
    ranks: []
  },

  {
    id: 'close-coverage',
    name: 'CLOSE COVERAGE',
    chapter: 18,
    holder: 'Bianca Severa',
    class: 'WATCHER',
    type: 'Active',
    description: 'Bianca names one target as her covered entity. While Coverage is up, incoming attacks get intercepted and redirected to her at reduced damage. She never extends Coverage on its own. It\'s a deliberate tactical call, every time.',
    ranks: []
  },

  {
    id: 'load-bearing',
    name: 'LOAD BEARING',
    chapter: 34,
    holder: 'Luca Terranova',
    class: 'ARCHITECT',
    type: 'Passive — Developing',
    description: 'Luca instinctively finds the structural dependencies of anything he\'s looking at: the pieces that, if you pull or change them, bring the rest down or transform it. In a Scenario, he\'s clocked which part of the enemy deployment or objective chain is load-bearing before anyone else has finished reading the announcement.',
    ranks: []
  },

  {
    id: 'framework',
    name: 'FRAMEWORK',
    chapter: 34,
    holder: 'Luca Terranova',
    class: 'ARCHITECT',
    type: 'Active — Developing',
    description: 'Luca builds a predictive model of a developing situation and pushes it out as a System-legible output to a group he\'s designated. At higher ranks it becomes a shared tactical overlay that updates live. The skill that makes him irreplaceable, and the most dangerous one in the group the day it ever gets pointed at Cecilia\'s interests.',
    ranks: []
  },

  {
    id: 'spark-latent',
    name: 'LATENT SENSE',
    chapter: 99,
    holder: 'Iris Terranova',
    class: 'SPARKCALLER',
    type: 'Passive — Developing',
    description: 'Iris senses suppressed or developing System-recognized potential in the entities, objects, and locations around her, as rough qualitative impressions. Sometimes she can perceive what people are becoming before they can. She doesn\'t have the language to pin it down yet, which frustrates her, and it reads as intuition because she has no better frame for it. At higher ranks the perception sharpens from impression into something she can put into words and act on.',
    ranks: []
  },

  {
    id: 'spark-electro',
    name: 'SPARK',
    chapter: 99,
    holder: 'Iris Terranova',
    class: 'SPARKCALLER',
    type: 'Active — Developing',
    description: 'Iris generates and directs electrical output as direct combat application, at range and up close. The combat half of the hybrid class. At higher ranks it scales in raw output \(Force secondary\) and gains finer control over the discharge, with developing interactions between her Electrokinesis and the latent energy her passive picks up.',
    ranks: []
  },

  {
    id: 'survey',
    name: 'SURVEY',
    chapter: 99,
    holder: 'Ivan Carceri',
    class: 'CARTOGRAPHER',
    type: 'Passive',
    description: 'Ivan takes in a low-level feed of positional and density data on System-active entities and energy buildups across a sizable radius. At rest it reads as ambient awareness. He knows which way the creatures are moving before anyone calls it in. Under stress it floods him. The skill never switches off, which is why the noise-canceling headphones are load-bearing infrastructure.',
    ranks: []
  },

  {
    id: 'projection',
    name: 'PROJECTION',
    chapter: 99,
    holder: 'Ivan Carceri',
    class: 'CARTOGRAPHER',
    type: 'Active',
    description: 'Ivan produces a formal predictive map of a defined area over a defined time window, rendered as a System-legible overlay he can share with designated parties. Accuracy falls off with distance and time horizon, and it still beats anything you\'d get from direct observation by a wide margin. At higher ranks the map stretches to faction movements, resource flows, and systemic trend lines unrelated to creatures.',
    ranks: []
  },

  {
    id: 'variable',
    name: 'VARIABLE',
    chapter: 99,
    holder: 'Ermilio Ferrero',
    class: 'AUDITOR',
    type: 'Passive',
    description: 'Ermilio can see the System flags and hidden variables hung on entities, objects, and locations. These are data points the System tracks without showing, things like "this entity has triggered condition X across N instances," "this location has accumulated Y units of spawn energy," "this contract has a logged compliance flag." It arrives as a second layer over his normal vision: mostly barely noticeable, and occasionally, in places with heavy System activity, overwhelming.',
    ranks: []
  },

  {
    id: 'discrepancy',
    name: 'DISCREPANCY',
    chapter: 99,
    holder: 'Ermilio Ferrero',
    class: 'AUDITOR',
    type: 'Active',
    description: 'Ermilio can find the gaps between what the System shows and what it records. When a faction\'s public Reputation doesn\'t square with its logged behavior, he sees the gap. When a contract\'s been technically honored in a way that guts its logged intent, he sees that too. This is the skill Matteo finds most useful and most unsettling.',
    ranks: []
  },

  {
    id: 'inscription',
    name: 'INSCRIPTION',
    chapter: 99,
    holder: 'Lorena Ferrero',
    class: 'SCRIBE',
    type: 'Active',
    description: 'Lorena writes down a fact she\'s witnessed herself or received through a solid chain of documentation, and the System logs it as authenticated and timestamped, held in both the physical document and the registry. Precision carries the whole skill. A record that\'s sloppy or even partly false comes out distorted, and while she can feel the distortion forming, she can\'t always correct it. Once a record is set, nothing alters it without leaving a visible discrepancy, which is what lets it stand as primary evidence in System-adjudicated disputes.',
    ranks: []
  },

  {
    id: 'collation',
    name: 'COLLATION',
    chapter: 99,
    holder: 'Lorena Ferrero',
    class: 'SCRIBE',
    type: 'Passive — Developing',
    description: 'Lorena keeps perfect recall of everything she\'s Inscribed, and holds it as a single cross-referenced set instead of a pile of separate records. Each new Inscription checks itself against every earlier one, so contradictions, duplicates, and impossibilities surface on their own. It\'s what lets her catch a flaw in her own record before it sets, and where a gap she only sensed at the time gets confirmed later, once events prove the omission was real. For now it covers her own Inscriptions. At higher ranks it reaches documents she\'s analyzed properly, then ones reliable people have shown her, until she can set a stranger\'s record beside her own and feel exactly where it lies.',
    ranks: []
  },

  {
    id: 'material-sense',
    name: 'MATERIAL SENSE',
    chapter: 99,
    holder: 'Giulia Conti',
    class: 'ARTIFICER',
    type: 'Passive',
    description: 'Giulia reads the System properties latent in physical objects: what she can modify, what won\'t play nice together, which stress point fails first under System-level force. It runs continuously and without her say-so, which means she hasn\'t been able to look at the Palazzo\'s infrastructure without running a structural assessment since her first week. She hasn\'t shared all of what she\'s found.',
    ranks: []
  },

  {
    id: 'infuse',
    name: 'INFUSE',
    chapter: 99,
    holder: 'Giulia Conti',
    class: 'ARTIFICER',
    type: 'Active',
    description: 'Giulia can work System properties into a physical object through sustained contact and focused attention. The precision it takes is no joke. Sloppy infusion gives you unstable results, a lesson she\'s learned twice. At current ranks it needs her workshop, the right raw materials, and time. At higher ranks the time requirement compresses and the material dependency broadens.',
    ranks: []
  },

  {
    id: 'null-state',
    name: 'NULL STATE',
    chapter: 99,
    holder: 'Serena Marini',
    class: 'BREAKER',
    type: 'Passive',
    description: 'Serena sits partly outside the System\'s standard classification framework. In defined, expected interactions she works like anyone else. Out at the edges of a mechanic\'s definition, the threshold cases, the places where two systems collide that were never built to touch, she throws off outputs the System wasn\'t modeling. Not always useful. Occasionally spectacular.',
    ranks: []
  },

  {
    id: 'exploit-window',
    name: 'EXPLOIT WINDOW',
    chapter: 99,
    holder: 'Serena Marini',
    class: 'BREAKER',
    type: 'Active — Developing',
    description: 'Serena can deliberately trigger and stretch the edge-case interactions her passive turns up, holding a mechanic in an undefined state long enough to pull value out of it. At current ranks the windows are short and the triggers imprecise. At higher ranks she\'ll engineer the conditions that create the windows instead of stumbling onto them in the environment.',
    ranks: []
  }

];

/*
--- SKILL TEMPLATE ---
  {
    id: 'unique-id',
    name: 'SKILL NAME',
    chapter: 1,
    holder: 'Character Name',
    class: 'CLASS NAME',
    type: 'Passive / Active',
    description: 'What the skill does.',
    ranks: [
      { rank: 1, text: 'Rank 1 description.', chapter: 1 },
      { rank: 'H4', text: 'Hidden Rank 4 unlock condition and effect.', chapter: 99 }
    ]
  },
*/


// ==========================================
// SCENARIOS
// ==========================================

var SCENARIOS_DATA = {

  overview: {
    chapter: 8,
    text: 'The System throws Scenarios regularly and at every scale. They\'re the main progression engine for every Player. The Leonellis treat each one as an intelligence event first and a survival event second.'
  },

  scaleTypes: [
    { name: 'City-Wide Scenarios', chapter: 8, desc: 'They hit all of Turin at once. Short-notice announcement. The secondary objectives never get disclosed. Every registered entity gets the alert. Creatures manifest at scale. Fixed duration. Rewards go out on performance and on factors nobody\'s told. These reshape the faction landscape more than anything else.' },
    { name: 'District Scenarios', chapter: 8, desc: 'They hit a specific area. They may or may not get announced outside the affected district. Shorter and more focused, with creature types or conditions tied to whatever the district is. A faction sitting in the right spot can pull disproportionate value out of one.' },
    { name: 'Faction Scenarios', chapter: 8, desc: 'Handed straight to recognized factions. Invisible to anyone outside. Specific objectives, sometimes aimed at a rival faction. It\'s how the System stress-tests a faction\'s structure and pays out organizational depth.' },
    { name: 'Individual Scenarios', chapter: 38, desc: 'Issued to a specific Player. Private. They grow out of behavioral patterns the System\'s been watching, tuned to push that Player toward a threshold or test one particular capacity.' },
    { name: 'Recurring Minor Scenarios', chapter: 8, desc: 'One goes off somewhere in the city every day. Not every district sees one, but citywide, Scenarios are a permanent background condition.' }
  ],

  namedTypes: [
    { name: 'CLAIM', chapter: 8, desc: 'Contest a designated node between factions. The fight around the node usually pays better than the node itself.' },
    { name: 'SUPPLY', chapter: 8, desc: 'Spawn resource caches weighted to a district\'s economic value, not scattered at random.' },
    { name: 'RANKING', chapter: 8, desc: 'Publish individual and faction standings citywide. The information is the event.' },
    { name: 'HIDDEN OBJECTIVE', chapter: 8, desc: 'Announce a primary objective that isn\'t the real one.' },
    { name: 'NARRATIVE', chapter: 99, desc: 'The rarest type. Structural choices with permanent, irreversible consequences that reshape the city\'s conditions. The biggest Leonelli advantages and the worst threats both come in through Narrative Events.' }
  ],

  keyNote: 'The Leonelli information edge is heaviest in the first weeks and closes as the population learns the hard way, by attrition. Turning that early knowledge into durable structural advantage before the gap shuts is the whole game.'
};


// ==========================================
// MECHANICS (Contracts, Territory, Faction)
// ==========================================

var MECHANICS_DATA = {

  contracts: {
    chapter: 23,
    title: 'Contracts',
    description: 'Formalized agreements carry weight the System will enforce. Most factions have no idea contracts exist as a mechanic. The Leonellis find them, develop them, and exploit them first, because Matteo\'s whole professional life already runs on binding agreements.',
    effects: [
      'Formalize agreements under System observation',
      'Throw Breach Penalty notifications when they\'re violated',
      'Further along: compulsion effects, territory-linked bonuses, interaction with Cecilia\'s MARKED LEDGER'
    ],
    amplification: {
      chapter: 99,
      title: 'Turin Contract Amplification',
      text: 'A hidden mechanic. Contract and oath effects get a big bonus when they\'re executed at specific Turin locations with documented esoteric or lodge history: certain piazzas, underground chambers, particular buildings. The System never announces it. You can find it. Matteo does, at Palazzo Scorza during an early negotiation, and it rewrites how the Leonellis pick every venue afterward.',
      peakNode: 'The Superga summit is the highest-amplification node in the city. The Fiamma Eterna holds it without knowing what it is mechanically.'
    }
  },

  territory: {
    chapter: 99,
    title: 'Territory Tiers',
    tiers: [
      { name: 'PRESENCE', desc: 'You\'re there with force. The System acknowledges you\'re occupying it. Minimal bonuses. Unstable.' },
      { name: 'CONTROL', desc: 'Sustained occupation, with the civilian compliance threshold met. Minor bonuses: fewer hostile spawns, passive resource generation.' },
      { name: 'ADMINISTRATION', desc: 'Full System registration. Every bonus active. A lot harder to dislodge without a contesting faction pouring in major investment.' }
    ]
  },

  factionMechanics: {
    chapter: 99,
    title: 'Faction Recognition',
    description: 'When a group clears a threshold of registered members, territory, and differentiated internal roles, the System recognizes it as a Faction. Faction status unlocks organizational bonuses: command buffs for members working inside their designated role, territorial spawn suppression, Organizational Quests, and Renown accumulation.',
    orgQuests: 'Private System directives only faction leadership can see. They\'re generated off organizational status and territorial position. Completing them pays institutional rewards: the organization itself levels up, not the individual.',
    note: 'Unregistered additions drag the multiplier down until they\'re properly integrated.'
  },

  classSelection: {
    chapter: 1,
    title: 'Class Selection Window',
    description: 'Opens at initialization and shuts after 72 hours. You choose from three options the System tailors to you. Anyone who doesn\'t engage with the window becomes an NPC when it closes. No class, no progression, no System protection. There\'s no middle option.',
    tierThresholds: [
      { tier: 'Tier II', condition: 'Level 20' },
      { tier: 'Tier III', condition: 'Level 50' },
      { tier: 'Tier IV (Sovereign)', condition: 'No level gate. It needs a behavioral or organizational condition the System doesn\'t publish. It\'s checking whether you\'ve actually become what the class represents.' }
    ]
  }

};