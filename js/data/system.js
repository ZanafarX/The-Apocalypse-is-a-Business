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
  intro: 'The System arrived without warning and without explanation. It did not ask permission. It appeared in every person\'s visual field simultaneously \(text rendered in the air, monochrome, slightly luminous, impossible to ignore or obscure\) and it addressed each person directly, as though it had been waiting.',
  initMessage: 'WELCOME TO THE NEW WORLD.\nYOUR REGISTRATION IS CONFIRMED.\nPLEASE REVIEW YOUR CLASSIFICATION OPTIONS.\nYOU HAVE 72 HOURS.',
  interface: [
    { label: 'Display Method', text: 'Direct-to-perception overlays. No device required. No opt-out.' },
    { label: 'Tone', text: 'Speaks like a game master who is also a judge. Exact and indifferent, but not impersonal. Every notification is addressed to you, specific and direct.' },
    { label: 'Personal Messages', text: 'Invisible to bystanders.' },
    { label: 'Public Broadcasts', text: 'Appear simultaneously in every registered entity\'s visual field. Same position, same text, same moment.' },
    { label: 'Hidden Prompts', text: 'Exist and are never announced. Surface only when specific, undisclosed conditions are met. The System does not confirm they exist. It does not deny it.' },
    { label: 'Notifications', text: 'Appear once and do not repeat.' },
    { label: 'Appraise', text: 'Basic interaction available to all registered entities. Reveals class name and tier only. Level, stats, and skill loadout remain hidden. Strength is readable only by demonstration.' }
  ],
  npcStatus: {
    chapter: 7,
    title: 'NPC Status',
    description: 'The designation given to any human entity who does not engage with the class selection window before it closes. Approximately 80% of Turin\'s population become "NPCs". These include most police and military, who were ordered by institutional command to ignore the System and await government guidance that never came.',
    consequences: [
      'NPC weapons and physical force deal significantly reduced damage against Players and creatures',
      'NPCs are not excluded from Scenario events. Creatures do not distinguish them from Players as targets',
      'They receive none of the protection that class registration confers, and all of the exposure',
      'The consequences are permanent and mechanical'
    ],
    note: 'Not all institutional personnel are NPCs. A fraction defied official guidance and selected their classes. This creates internal institutional fracturing. Player officers are measurably more effective, generating resentment in multiple directions.'
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
      description: 'Command, coercion, social leverage, fear economy, negotiation pressure.',
      users: 'Primary: Cecilia (Fixer). Secondary: Matteo (Advocate), Dario (Runner).'
    },
    {
      name: 'ACUITY',
      chapter: 1,
      description: 'Pattern recognition, strategic planning, information processing speed.',
      users: 'Primary: Matteo (Advocate), Ivan (Cartographer), Ermilio (Auditor). Secondary: Cecilia (Fixer), Luca (Architect), Lorena (Scribe), Giulia (Artificer), Serena (Breaker)'
    },
    {
      name: 'FORCE',
      chapter: 1,
      description: 'Raw physical output — strength, impact, damage delivery.',
      users: 'Primary: Ruggiero (Collector). Secondary: Iris (Sparkcaller).'
    },
    {
      name: 'RESILIENCE',
      chapter: 1,
      description: 'Damage absorption, sustained engagement capacity, endurance.',
      users: 'Secondary: Ruggiero (Collector).'
    },
    {
      name: 'VELOCITY',
      chapter: 1,
      description: 'Movement speed, reaction time, positional advantage.',
      users: 'Primary: Bianca (Watcher). Secondary: Ivan (Cartographer).'
    },
    {
      name: 'PRECISION',
      chapter: 1,
      description: 'Accuracy, fine motor control, targeting quality.',
      users: 'Primary: Lorena (Scribe), Giulia (Artificer). Secondary: Bianca (Watcher), Ermilio (Auditor)'
    },
    {
      name: 'EDGE',
      chapter: 1,
      description: 'Opportunistic action, misdirection, exploit windows, and the margin between what should work and what does. Governs classes whose power derives from positioning and timing rather than raw output.',
      users: 'Primary: Dario (Runner), Luca (Architect), Iris (Sparkcaller), Serena (Breaker)',
      note: 'The seventh stat. Not listed in the initialization message. Not announced. Discovered through class behavior. Its existence is inferred, not stated.'
    }
  ],

  secondaryStats: [
    {
      name: 'INFAMY',
      chapter: 13,
      description: 'Accumulates through acts the System categorizes as fear-generating: killing under observation, enforcing agreements by violence, breaking resistance publicly. Does not reset.',
      effects: 'High Infamy improves intimidation, underworld compliance, and command weight. Also escalates enemy aggression, Hero faction targeting, and bounty values.',
      note: 'The System tracks it because it is useful information about what an entity is becoming.'
    },
    {
      name: 'AUTHORITY',
      chapter: 13,
      description: 'Unlocked only at faction recognition. Measures organizational command power. Scales with hierarchy quality, membership, territory, and active agreement density.',
      effects: 'An individual without a recognized faction has zero Authority regardless of every other stat. Authority is what converts individual Player capability into institutional power.',
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
    ceiling: 'No stated evolution ceiling. Classification window closed for this entity. Not a cap. A different designation.',
    buildDirection: 'Command authority, leverage application, territory-linked effects, execution bonuses against marked targets, compulsion and contract interactions.',
    combatNotes: 'Cecilia is not a frontline fighter. Her combat scenes are brief, decisive, and preceded by a read that made the outcome structurally inevitable. She hits most precisely, at the moment that costs her opponent most.'
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
    buildDirection: 'Enforcer-tank-controller. Terrain domination, group suppression, formation rupture, sustained engagement. Ruggiero absorbs punishment and converts it into forward momentum.',
    combatNotes: 'His combat scenes should feel physical and cumulative. He absorbs. He pushes forward. He does not stop. His presence in a physical space changes the tactical calculation for every entity in it.'
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
    buildDirection: 'Control-support through contract architecture, informational suppression, and ward systems. Matteo performs almost no direct combat. He makes the conditions of every engagement favorable before it begins.',
    combatNotes: 'Matteo does not fight. He writes the conditions under which other people fight and lose. His most powerful scene is the moment a Breach Penalty executes visibly and the room understands what it means.'
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
    buildDirection: 'Mobile skirmisher, social infiltrator, and market operator. Dario wins by being in precisely the wrong position for opponents and precisely the right one for himself.',
    combatNotes: 'His fights should feel almost unfair. He is never where expected. Weapons: knives, garrote, poison. All close-range and opportunistic.'
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
    buildDirection: 'Precision eliminator and intelligence operative. Excels in conditions of silence: physical, informational, and territorial. The most dangerous member of the crew in the specific situations she is designed for, which she has taken care to make very common.',
    combatNotes: 'Bianca\'s violence is personal. Her scenes should feel quiet even when they are not. The unsettling thing is not what she does. It is how completely untroubled she is by doing it.'
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
    buildDirection: 'Non-combat support and systemic intelligence. The most unusual class line in the group, with no natural combat evolution. It has a structural evolution instead. At higher tiers, Luca\'s outputs begin to interact with the System at an architectural level.',
    combatNotes: 'Luca does not fight. His value is in what he can build, model, and predict. His class line has no equivalent in any other faction in Turin.'
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
    buildDirection: 'Hybrid combat and analytical class. Pairs Electrokinesis with the drawing out of latent System energy: the potential in people, objects, and locations that has not been activated or recognized. Senses suppressed or developing System-recognized potential as a qualitative presence rather than as stats or class detail. Can sometimes perceive what an entity is becoming before it emerges.',
    combatNotes: 'Iris fights at range and in close, channeling Electrokinesis as direct output. The analytical half of the class is the more dangerous half: in the Palazzo, being able to sense latent emergence is not comfortable knowledge to hold.'
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
    buildDirection: 'Non-combat spatial-temporal intelligence. Maps the System\'s spatial and temporal patterns: spawn density, creature movement, energy accumulation, the probability corridors along which events unfold. Velocity secondary is unusual for a non-combat class and reflects the real-time nature of the output. At higher ranks the map extends to faction movements, resource flows, and systemic trend lines unrelated to creatures.',
    combatNotes: 'Ivan does not fight. The class does not turn off; he receives signal continuously. His value is the projection, not the engagement. The noise-canceling headphones are load-bearing infrastructure.'
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
    buildDirection: 'Non-combat hidden-variable intelligence. Has access to the System\'s internal records — the variables it tracks but does not surface to the standard interface: hidden flags, accumulated trigger conditions, behavioral records, and environmental values logged for the System\'s own purposes. Sees the System\'s working, not just its output. Can identify divergences between visible output and hidden records.',
    combatNotes: 'Ermilio does not fight. His value is informational: the gap between what a faction shows and what the System has logged. The skill Matteo finds most useful and most unsettling.'
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
    classLine: ['Scribe', 'Notary', 'Codifier', ' The Canon'],
    ceiling: null,
    buildDirection: 'Non-combat record infrastructure. Formalizes System data through physical recording. A recorded fact, in the format the System has made legible to the class, is validated and timestamped, existing in both the physical document and the System\'s own registry. Scribe-produced records carry System-backed authenticity, cannot be retroactively altered without producing a visible discrepancy, and can be submitted as evidence in System-adjudicated disputes.',
    combatNotes: 'Lorena does not fight. Her records are not supporting documentation for Matteo\'s contract architecture. They are System-recognized primary sources.'
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
    buildDirection: 'Non-combat technical arm. Manipulates and upgrades physical items by infusing them with System properties, working directly with the material layer the System recognizes. Enhances existing items, composites incompatible System properties into functional combinations, and produces devices that interact with System mechanics in ways standard equipment cannot. At higher ranks moves from modification toward creating objects the System has no prior record of.',
    combatNotes: 'Giulia does not fight on the line. Her anxiety in high-threat environments is real. She functions by keeping attention on the object in her hands. Output includes the node disruptor, modified field equipment, and a carefully restricted licensing line to the broader protection network.'
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
    ceiling: 'No defined progression path. Advances by finding states the System did not fully define: edge cases, undefined interactions, the gap between what a rule says and what happens when pushed past its tested range. The System cannot state the next unlock condition in advance because, by definition, it is something the System did not anticipate.',
    buildDirection: 'Exploit specialist. Exists partially outside the System\'s standard classification framework. Functions normally in defined interactions; at the edges of mechanic definitions she produces outputs the System was not modeling. Can deliberately trigger and extend edge-case interactions, holding a mechanic in an undefined state long enough to extract value from it.',
    combatNotes: 'Serena\'s value is the exploit, not the duel. Tactically reckless by any reasonable standard. She has tested things on herself she should have tested on systems, and will continue to. Her output is occasionally not useful and occasionally spectacular.'
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
  acquisition: 'Skills emerge from behavior — the System formalizes what an entity consistently does rather than offering a selection menu.',
  visibleRanks: 'Ranks 1 through 3 are visible and announced.',
  hiddenRanks: 'Ranks 4 and above exist but are never announced. Unlock conditions are specific behavioral convergences the System does not explain. Their existence must be inferred from anomalous effects. Every hidden rank unlock is a story beat.',
  hiddenRank4Rule: 'Hidden Rank 4 is qualitative, not numerical. It is not a stronger version of what the skill was. It is a different thing that contains the previous thing. The System is recognizing that something has become true about the entity that the skill now needs to reflect.',
  classWindowNote: 'Reading class descriptors reveals evolution ceiling. "Cannot" marks a hard cap. "Will not" marks willingness, not limitation. Classes without stated ceilings have room to grow.'
};

var SKILLS_DATA = [

  {
    id: 'marked-ledger',
    name: 'MARKED LEDGER',
    chapter: 13,
    holder: 'Cecilia Leonelli',
    class: 'FIXER',
    type: 'Passive',
    description: 'Through sustained interaction, Cecilia identifies a target\'s primary vulnerability, the thing they most fear losing. The System formalizes this as a catalogued flag that enhances all her actions against that target. In social contexts: negotiation reads. In combat contexts: identification of vulnerability at the moment of maximum cost.',
    ranks: [
      { rank: 1, text: 'Active during direct one-on-one engagement.', chapter: 1 },
      { rank: 2, text: 'Functions in group settings; multiple targets can be marked simultaneously.', chapter: 99 },
      { rank: 3, text: 'Survives the end of direct engagement; the read persists as a standing file.', chapter: 99 },
      { rank: 'H4', text: 'Unlocks when Cecilia eliminates a Marked target simultaneously under an active Breach Penalty. Becomes FINAL ACCOUNT. The skill fuses with contract enforcement.', chapter: 99 }
    ]
  },

  {
    id: 'final-account',
    name: 'FINAL ACCOUNT',
    chapter: 99,
    holder: 'Cecilia Leonelli',
    class: 'FIXER',
    type: 'Active — Hidden Rank 4 Evolution',
    description: 'When a Marked Ledger target has an active Breach Penalty and Cecilia acts against them directly, the execution carries compulsion weight. The target\'s resistance is mechanically suppressed. The System registers the outcome as a formal resolution of an outstanding liability, with downstream effects on faction reputation and contract authority.',
    ranks: []
  },

  {
    id: 'terms',
    name: 'WEIGHT OF OFFICE',
    chapter: 13,
    holder: 'Cecilia Leonelli',
    class: 'FIXER',
    type: 'Active — Presence-based',
    description: 'Cecilia can impose a conditional behavioral constraint on a target during direct engagement. At low ranks: a brief hesitation window. At higher ranks: a battlefield compulsion — an opponent under WEIGHT OF OFFICE cannot voluntarily move toward a protected target, use a specific named skill, or take a specific named action for the duration.',
    ranks: []
  },

  {
    id: 'iron-threshold',
    name: 'IRON THRESHOLD',
    chapter: 17,
    holder: 'Ruggiero Montini',
    class: 'COLLECTOR',
    type: 'Passive',
    description: 'Damage absorption scales upward during sustained engagement. The longer Ruggiero holds a position, the more he can absorb before output is affected.',
    ranks: [
      { rank: 1, text: 'Reactive — requires taking damage first to trigger elevated state.', chapter: 7 },
      { rank: 2, text: 'Threshold triggers earlier; elevated state sustains longer.', chapter: 99 },
      { rank: 3, text: 'Further scaling improvements.', chapter: 99 },
      { rank: 'H4', text: 'Sustain combat against four or more simultaneous opponents without retreating. Activates automatically on entry to any outnumbered engagement. Damage condition no longer required.', chapter: 99 }
    ]
  },

  {
    id: 'corridor',
    name: 'CORRIDOR',
    chapter: 17,
    holder: 'Ruggiero Montini',
    class: 'COLLECTOR',
    type: 'Active',
    description: 'Ruggiero designates a physical space as held ground. Enemies attempting to move through face escalating resistance effects that compound with each attempt. Allies moving through receive a minor speed bonus. Pairs with IRON THRESHOLD in chokepoint situations.',
    ranks: []
  },

  {
    id: 'binding-clause',
    name: 'BINDING CLAUSE / BREACH PENALTY',
    chapter: 22,
    holder: 'Matteo Vascari',
    class: 'ADVOCATE',
    type: 'Active',
    description: 'Formalized agreements authored by Matteo in the presence of all parties carry System-enforceable weight. Violation triggers a Breach Penalty, a System-registered consequence applied to the violating party.',
    ranks: [
      { rank: 1, text: 'Minor notification-based consequence on breach.', chapter: 7 },
      { rank: 2, text: 'Compulsion effects on breach.', chapter: 99 },
      { rank: 3, text: 'Territory-linked enforcement and automatic escalation.', chapter: 99 },
      { rank: 'H4', text: 'Author a contract that is breached, then witness the full Breach Penalty execution without intervening. Breach Penalties automatically flag into Cecilia\'s MARKED LEDGER, enabling the FINAL ACCOUNT convergence.', chapter: 99 }
    ]
  },

  {
    id: 'precedent',
    name: 'PRECEDENT',
    chapter: 22,
    holder: 'Matteo Vascari',
    class: 'ADVOCATE',
    type: 'Passive',
    description: 'Matteo retains exact recall of any formalized agreement he has authored, witnessed, or analyzed. At higher ranks, extends to oral agreements made within earshot, then to agreements reliably reported through documented channels. He is a living archive of every binding commitment.',
    ranks: []
  },

  {
    id: 'read-the-room',
    name: 'READ THE ROOM',
    chapter: 20,
    holder: 'Dario Fioretti',
    class: 'RUNNER',
    type: 'Passive',
    description: 'On entry to any space, Dario instinctively maps the emotional and motivational state of everyone present. A passive alignment display: a rough read of the gap between stated behavior and actual intent. In combat: tells him who is about to break before they know it themselves.',
    ranks: []
  },

  {
    id: 'supply-line',
    name: 'SUPPLY LINE',
    chapter: 20,
    holder: 'Dario Fioretti',
    class: 'RUNNER',
    type: 'Active',
    description: 'Dario maintains a mental map of viable trade routes, contacts, and resource nodes within a given territory. At higher ranks, generates a System notification when a key route becomes compromised before visible evidence appears. Makes him operationally irreplaceable.',
    ranks: []
  },

  {
    id: 'quiet-approach',
    name: 'QUIET APPROACH',
    chapter: 18,
    holder: 'Bianca Severa',
    class: 'WATCHER',
    type: 'Passive',
    description: 'Bianca\'s movement generates no System-legible sound signature within enclosed spaces. Not true invisibility. She still occupies space and can be physically encountered. Her movement falls below the detection threshold of non-System-enhanced awareness. At higher ranks, extends to outdoor environments and crowds.',
    ranks: []
  },

  {
    id: 'silence-field',
    name: 'SILENCE FIELD',
    chapter: 18,
    holder: 'Bianca Severa',
    class: 'WATCHER',
    type: 'Active',
    description: 'Suppresses sound in a designated radius. Prevents auditory alerting and interrupts verbal skill components. At advanced tiers, suppresses the System interface for entities inside: targets cannot read their own status, receive notifications, or see skill cooldowns. A room Bianca has silenced is a room the System has gone quiet in.',
    ranks: []
  },

  {
    id: 'close-coverage',
    name: 'CLOSE COVERAGE',
    chapter: 18,
    holder: 'Bianca Severa',
    class: 'WATCHER',
    type: 'Active',
    description: 'Bianca designates a single target as her covered entity. Incoming attacks during active Coverage are intercepted, with the effect redirected to Bianca at reduced damage. She does not extend Coverage automatically. It is a deliberate tactical decision.',
    ranks: []
  },

  {
    id: 'load-bearing',
    name: 'LOAD BEARING',
    chapter: 34,
    holder: 'Luca Terranova',
    class: 'ARCHITECT',
    type: 'Passive — Developing',
    description: 'Luca instinctively identifies the structural dependencies of any system he observes: the elements that, if removed or changed, cause the rest to collapse or transform. In a Scenario, identifies which element of enemy deployment or objective chain is load-bearing before anyone else has finished reading the announcement.',
    ranks: []
  },

  {
    id: 'framework',
    name: 'FRAMEWORK',
    chapter: 34,
    holder: 'Luca Terranova',
    class: 'ARCHITECT',
    type: 'Active — Developing',
    description: 'Luca constructs a predictive model of a developing situation and shares it as a System-legible output to a designated group. At higher ranks, becomes a shared tactical overlay updating in real time. The skill that makes him irreplaceable, and the most dangerous one in the group if ever directed against Cecilia\'s interests.',
    ranks: []
  },

  {
    id: 'spark-latent',
    name: 'LATENT SENSE',
    chapter: 99,
    holder: 'Iris Terranova',
    class: 'SPARKCALLER',
    type: 'Passive — Developing',
    description: 'Iris senses suppressed or developing System-recognized potential in entities, objects, and locations around her as qualitative inferences. She can sometimes perceive what people are becoming before they can. She does not yet have the language to describe this precisely, which frustrates her; it presents as intuition because she has no better framework for it. At higher ranks, the perception will sharpen from impression toward something she can articulate and act on.',
    ranks: []
  },

  {
    id: 'spark-electro',
    name: 'SPARK',
    chapter: 99,
    holder: 'Iris Terranova',
    class: 'SPARKCALLER',
    type: 'Active — Developing',
    description: 'Iris generates and directs electrical output as direct combat application, at range and in close. The combat half of the hybrid class. At higher ranks, scales in raw output \(Force secondary\) and gains finer control over discharge, with developing interactions between her Electrokinesis and the latent energy her passive perceives.',
    ranks: []
  },

  {
    id: 'survey',
    name: 'SURVEY',
    chapter: 99,
    holder: 'Ivan Carceri',
    class: 'CARTOGRAPHER',
    type: 'Passive',
    description: 'Ivan continuously receives low-level positional and density data about System-active entities and energy accumulations within a significant radius. At rest, this presents as ambient awareness. He knows which direction creatures are moving before anyone reports it. Under stress, it becomes overwhelming. The skill does not turn off, which is why the noise-canceling headphones are load-bearing infrastructure.',
    ranks: []
  },

  {
    id: 'projection',
    name: 'PROJECTION',
    chapter: 99,
    holder: 'Ivan Carceri',
    class: 'CARTOGRAPHER',
    type: 'Active',
    description: 'Ivan produces a formal predictive map of a defined area over a defined time window, rendered as a System-legible overlay shareable with designated parties. The accuracy degrades with distance and time horizon but is meaningfully better than anything available through direct observation. At higher ranks the map extends to faction movements, resource flows, and systemic trend lines unrelated to creatures.',
    ranks: []
  },

  {
    id: 'variable',
    name: 'VARIABLE',
    chapter: 99,
    holder: 'Ermilio Ferrero',
    class: 'AUDITOR',
    type: 'Passive',
    description: 'Ermilio can see System flags and hidden variables attached to entities, objects, and locations. These include data points the System tracks without showing, such as "this entity has triggered condition X across N instances," "this location has accumulated Y units of spawn energy," "this contract has a logged compliance flag." The information arrives as a secondary layer over his normal visual field: most of the time barely noticeable; occasionally, in locations with significant System activity, overwhelming.',
    ranks: []
  },

  {
    id: 'discrepancy',
    name: 'DISCREPANCY',
    chapter: 99,
    holder: 'Ermilio Ferrero',
    class: 'AUDITOR',
    type: 'Active',
    description: 'Ermilio can identify divergences between the System\'s visible output and its hidden records. When a faction\'s public Reputation does not match its logged behavioral record, he can see the gap. When a contract has been technically complied with in a way that violates its logged intent, he can see the gap. This is the skill Matteo finds most useful and most unsettling.',
    ranks: []
  },

  {
    id: 'inscription',
    name: 'INSCRIPTION',
    chapter: 99,
    holder: 'Lorena Ferrero',
    class: 'SCRIBE',
    type: 'Active',
    description: 'Lorena can produce a System-validated record of any fact she has directly witnessed or received through a credible chain of documentation. The record is timestamped by the System and flagged as authenticated, existing in both the physical document and the System\'s registry. The precision required is significant. Imprecise or partially false records produce distorted outputs she can detect but not fully correct.',
    ranks: []
  },

  {
    id: 'archive',
    name: 'ARCHIVE',
    chapter: 99,
    holder: 'Lorena Ferrero',
    class: 'SCRIBE',
    type: 'Passive — Developing',
    description: 'Lorena retains exact recall of any document she has Inscribed. At current ranks, this applies to her own Inscriptions. At higher ranks, it will extend to documents she has analyzed through proper channels, then to documents she has been shown by reliable parties.',
    ranks: []
  },

  {
    id: 'material-sense',
    name: 'MATERIAL SENSE',
    chapter: 99,
    holder: 'Giulia Conti',
    class: 'ARTIFICER',
    type: 'Passive',
    description: 'Giulia perceives the System properties latent in physical objects — the modifications possible, the incompatibilities present, and the stress points that will fail first under System-level force. This operates continuously and involuntarily, which means she has not been able to look at the Palazzo\'s infrastructure without running a structural assessment since the first week. She has not shared all of her findings.',
    ranks: []
  },

  {
    id: 'infuse',
    name: 'INFUSE',
    chapter: 99,
    holder: 'Giulia Conti',
    class: 'ARTIFICER',
    type: 'Active',
    description: 'Giulia can introduce System properties into a physical object through direct sustained contact and concentrated attention. The precision required is significant. Imprecise infusion produces unstable results, which she has learned from twice. At current ranks, this requires her workshop, specific raw materials, and time. At higher ranks, the time requirement will compress and the material dependency will broaden.',
    ranks: []
  },

  {
    id: 'null-state',
    name: 'NULL STATE',
    chapter: 99,
    holder: 'Serena Marini',
    class: 'BREAKER',
    type: 'Passive',
    description: 'Serena exists partially outside the System\'s standard classification framework. In defined, expected interactions, she functions normally. At the edges of mechanic definitions — the threshold cases, the interactions between systems that were not designed to interact — she produces outputs the System was not modeling. This is not always useful. It is occasionally spectacular.',
    ranks: []
  },

  {
    id: 'exploit-window',
    name: 'EXPLOIT WINDOW',
    chapter: 99,
    holder: 'Serena Marini',
    class: 'BREAKER',
    type: 'Active — Developing',
    description: 'Serena can deliberately trigger and extend the edge-case interactions her passive identifies, holding a mechanic in an undefined state long enough to extract value from it. At current ranks, the windows are short and the triggers are imprecise. At higher ranks, she will be able to engineer the conditions that create the windows rather than finding them in the environment.',
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
    text: 'The System generates Scenarios regularly and at multiple scales. They are the primary progression engine for all Players. The Leonellis approach every Scenario as an intelligence event first and a survival event second.'
  },

  scaleTypes: [
    { name: 'City-Wide Scenarios', chapter: 8, desc: 'Affect all of Turin simultaneously. Short-notice announcement. Secondary objectives never disclosed. All registered entities receive the alert. Creatures manifest at scale. Fixed duration. Rewards distributed on performance and undisclosed factors. Most dramatically reshape the faction landscape.' },
    { name: 'District Scenarios', chapter: 8, desc: 'Affect a specific area. May or may not be announced outside the affected district. Shorter, more focused, with localized creature types or conditions tied to the district\'s character. A well-positioned faction can extract disproportionate value.' },
    { name: 'Faction Scenarios', chapter: 8, desc: 'Issued directly to recognized factions. Invisible to non-members. Specific objectives, sometimes against rival factions. The System\'s method of stress-testing faction structure and rewarding organizational depth.' },
    { name: 'Individual Scenarios', chapter: 38, desc: 'Issued to specific Players. Private. Emerge from behavioral patterns the System has been observing. Calibrated to push the Player toward a specific threshold or test a specific capacity.' },
    { name: 'Recurring Minor Scenarios', chapter: 8, desc: 'Occur somewhere in the city every day. Not every district sees one, but at the city level, Scenarios are a permanent background condition.' }
  ],

  namedTypes: [
    { name: 'CLAIM', chapter: 8, desc: 'Contest a designated node between factions. The fight around the node often yields more than the node itself.' },
    { name: 'SUPPLY', chapter: 8, desc: 'Spawn resource caches weighted to district economic value, not random distribution.' },
    { name: 'RANKING', chapter: 8, desc: 'Publish individual and faction standings city-wide. The event is the information.' },
    { name: 'HIDDEN OBJECTIVE', chapter: 8, desc: 'Announce a stated primary objective that is not the real one.' },
    { name: 'NARRATIVE', chapter: 99, desc: 'The rarest type. Structural choices with permanent, irreversible consequences that reshape city conditions. The most significant Leonelli advantages and most serious threats arrive through Narrative Events.' }
  ],

  keyNote: 'The Leonelli information advantage is most front-loaded in the first weeks and closes as the population learns through attrition. Converting early knowledge into durable structural advantage before the gap closes is the entire game.'
};


// ==========================================
// MECHANICS (Contracts, Territory, Faction)
// ==========================================

var MECHANICS_DATA = {

  contracts: {
    chapter: 23,
    title: 'Contracts',
    description: 'Formalized agreements carry System-enforceable weight. Most factions do not know contracts exist as a mechanic. The Leonellis discover, develop, and exploit them first because Matteo\'s professional life already runs on binding agreements.',
    effects: [
      'Formalize agreements under System observation',
      'Generate Breach Penalty notifications when violated',
      'At higher development: compulsion effects, territory-linked bonuses, interaction with Cecilia\'s MARKED LEDGER'
    ],
    amplification: {
      chapter: 99,
      title: 'Turin Contract Amplification',
      text: 'Hidden mechanic. Contract and oath effects receive a significant bonus when executed at specific Turin locations with documented esoteric or lodge history: certain piazzas, underground chambers, specific buildings. Not announced by the System. Discoverable. Matteo finds it at Palazzo Scorza during an early negotiation. Reshapes how the Leonellis choose every future negotiation venue.',
      peakNode: 'The Superga summit is the highest-amplification node in the city. The Fiamma Eterna holds it without knowing what it is mechanically.'
    }
  },

  territory: {
    chapter: 99,
    title: 'Territory Tiers',
    tiers: [
      { name: 'PRESENCE', desc: 'Entity is there with force. System acknowledges occupation. Minimal bonuses. Unstable.' },
      { name: 'CONTROL', desc: 'Sustained occupation with civilian compliance threshold met. Minor bonuses: reduced hostile spawns, passive resource generation.' },
      { name: 'ADMINISTRATION', desc: 'Full System registration achieved. All bonuses active. Much harder to displace without major investment from a contesting faction.' }
    ]
  },

  factionMechanics: {
    chapter: 99,
    title: 'Faction Recognition',
    description: 'When a group meets a threshold of registered members, territory, and internal role differentiation, the System recognizes it as a Faction. Faction status unlocks organizational bonuses: command buffs for members acting within their designated role, territorial spawn suppression, Organizational Quests, and Renown accumulation.',
    orgQuests: 'Private System directives visible only to faction leadership. Generated based on organizational status and territorial position. Completing quests generates institutional rewards: the organization itself levels up, not the individual.',
    note: 'Unregistered additions degrade the multiplier until properly integrated.'
  },

  classSelection: {
    chapter: 1,
    title: 'Class Selection Window',
    description: 'Opens at initialization; closes after 72 hours. Entities choose from three options tailored to them by the System. Entities who do not engage with the window become NPCs when it closes. They receive no class, no progression, and no System protection. There is no middle option.',
    tierThresholds: [
      { tier: 'Tier II', condition: 'Level 20' },
      { tier: 'Tier III', condition: 'Level 50' },
      { tier: 'Tier IV (Sovereign)', condition: 'No level gate. Requires meeting a behavioral or organizational condition the System does not publish. It evaluates whether you have become what the class represents.' }
    ]
  }

};
