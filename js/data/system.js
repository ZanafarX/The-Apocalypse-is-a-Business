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
  intro: 'The System arrived without warning and without explanation. It did not ask permission. It appeared in every person\'s visual field simultaneously — text rendered in the air, monochrome, slightly luminous, impossible to ignore or obscure — and it addressed each person directly, as though it had been waiting. It did not say what it was. It said what it wanted.',
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
    description: 'The designation given to any human entity who does not engage with the class selection window before it closes. Approximately half of Turin\'s population becomes NPC — including most police and military, who were ordered by institutional command to ignore the System and await government guidance that never came.',
    consequences: [
      'NPC weapons and physical force deal significantly reduced damage against Players and creatures',
      'What would take a Player one action costs an NPC unit ten, with corresponding casualties',
      'NPCs are not excluded from Scenario events — creatures do not distinguish them from Players as targets',
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
      users: 'Primary: Matteo (Advocate), Luca (Architect). Secondary: Cecilia (Fixer)'
    },
    {
      name: 'FORCE',
      chapter: 1,
      description: 'Raw physical output — strength, impact, damage delivery.',
      users: 'Primary: Ruggiero (Collector).'
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
      users: 'Primary: Bianca (Watcher).'
    },
    {
      name: 'PRECISION',
      chapter: 1,
      description: 'Accuracy, fine motor control, targeting quality.',
      users: 'Secondary: Bianca (Watcher)'
    },
    {
      name: 'EDGE',
      chapter: 1,
      description: 'Opportunistic action, misdirection, exploit windows, and the margin between what should work and what does. Governs classes whose power derives from positioning and timing rather than raw output.',
      users: 'Primary: Dario (Runner)',
      note: 'The seventh stat. Not listed in the initialization message. Not announced. Discovered through class behavior. Its existence is inferred, not stated.'
    }
  ],

  secondaryStats: [
    {
      name: 'INFAMY',
      chapter: 13,
      description: 'Accumulates through acts the System categorizes as fear-generating — killing under observation, enforcing agreements by violence, breaking resistance publicly. Does not reset.',
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
    combatNotes: 'His fights should feel almost unfair. He is never where expected. He does not face opponents — he appears at their margins and is already gone. Weapons: knives, garrote, poison. All close-range and opportunistic.'
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
    primary: 'ACUITY',
    secondary: 'PRESENCE (emerging)',
    classLine: ['Architect', 'System Architect', 'Framework Master', 'World Engine'],
    ceiling: null,
    buildDirection: 'Non-combat support and systemic intelligence. The most unusual class line in the group, with no natural combat evolution. It has a structural evolution instead. At higher tiers, Luca\'s outputs begin to interact with the System at an architectural level.',
    combatNotes: 'Luca does not fight. His value is in what he can build, model, and predict. His class line has no equivalent in any other faction in Turin.'
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
