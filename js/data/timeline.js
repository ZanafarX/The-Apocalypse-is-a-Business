// ============================================
// TIMELINE DATA — The Apocalypse Is a Business
// ============================================
// Events are displayed in order. Each has a time marker,
// chapter tag, category, and description.
//
// HOW TO ADD A NEW EVENT:
// 1. Copy the template at the bottom
// 2. Fill in the fields
// 3. Insert it at the correct chronological position
// 4. The page renders it automatically
// ============================================

var TIMELINE_EVENTS = [

  // ==========================================
  // DAY 1 — SYSTEM INITIALIZATION
  // ==========================================

  {
    id: 'system-init',
    time: 'Day 1 — Hour 0',
    title: 'System Initialization',
    chapter: 1,
    category: 'system',
    description: 'The System arrived without warning and without explanation. Public messages appeared to every entity in Turin simultaneously — text rendered in the air, monochrome, slightly luminous, impossible to ignore. Class selection windows opened. The 72-hour countdown began.',
    impact: 'Civil infrastructure began degrading within hours. Organizations with preexisting command structures held their shape while civic institutions fragmented.',
    relatedEntries: ['Cecilia Leonelli', 'The System']
  },

  {
    id: 'cecilia-selects',
    time: 'Day 1 — Hour 0',
    title: 'Cecilia Selects FIXER',
    chapter: 1,
    category: 'leonelli',
    description: 'Cecilia Leonelli engaged with the class selection window immediately and selected FIXER. She read the System\'s descriptor language correctly from the first moment: "For those who resolve what others cannot." No stated evolution ceiling. Classification window closed for this entity.',
    impact: 'The Leonelli organization had its first Player-classified member before most of Turin had finished reading the initial message.',
    relatedEntries: ['Cecilia Leonelli', 'FIXER']
  },

  {
    id: 'institutional-order',
    time: 'Day 1 — Hours 1–6',
    title: 'Institutional Stand-Down Order',
    chapter: 1,
    category: 'city',
    description: 'Police, military, and regulatory institutions issued orders to personnel: ignore the System prompts, do not engage with the classification window, await government guidance. The guidance was slow, contradictory, and arrived after the window closed.',
    impact: 'The majority of institutional personnel became NPCs. A fraction defied guidance and selected their classes independently, creating internal fracturing that would define institutional capability for the foreseeable future.',
    relatedEntries: ['NPC Status', 'Tredicesima']
  },

  {
    id: 'dario-selects',
    time: 'Day 1 — Hours 1–6',
    title: 'Dario Selects RUNNER',
    chapter: 1,
    category: 'leonelli',
    description: 'Dario Fioretti selected his class early, before the Core Five convened for formal discussion. "For those who move faster than consequences." He did not wait to be told.',
    impact: 'Dario was operationally active as a Player from Day 1, establishing early presence in his street networks.',
    relatedEntries: ['Dario Fioretti', 'RUNNER']
  },

  {
    id: 'shock-phase',
    time: 'Day 1 — Hours 1–6',
    title: 'Shock and Disbelief',
    chapter: 1,
    category: 'city',
    description: 'Emergency services attempted response. Social media saturated and then fragmented. Civilian hoarding began. The city entered the first phase of collapse behavior: denial confronted by undeniable evidence.',
    impact: null,
    relatedEntries: []
  },

  {
    id: 'luca-forum-post',
    time: 'Day 1 — Hours 3–8',
    title: 'Luca\'s Forum Post',
    chapter: 1,
    category: 'leonelli',
    description: 'Luca Terranova posted a 900-word class-selection breakdown on a niche gaming forum — more accurate and more immediately actionable than anything else available in Turin. He framed the selection problem as an architecture problem rather than a choice problem. He generalized his analysis for an audience rather than solving his own problem.',
    impact: 'Bianca found the thread. Cecilia read it. Three specific qualities distinguished it: organizational thinking, methodological rigor exceeding Cecilia\'s own analysis, and architectural framing. The acquisition sequence began.',
    relatedEntries: ['Luca Terranova', 'Bianca Severa']
  },

  {
    id: 'first-monster-incursions',
    time: 'Day 1 — Hours 6–24',
    title: 'First Monster Incursions',
    chapter: 1,
    category: 'system',
    description: 'First creature incursions in peripheral areas. Civil order visibly failing in low-density zones. First improvised community defense structures formed in Aurora and Barriera di Milano.',
    impact: 'The gap between Player and NPC capability became visible for the first time in direct engagement.',
    relatedEntries: []
  },

  // ==========================================
  // DAYS 2–3
  // ==========================================

  {
    id: 'power-intermittent',
    time: 'Day 2',
    title: 'Infrastructure Degradation Accelerates',
    chapter: 1,
    category: 'city',
    description: 'Power became intermittent. Emergency services overwhelmed. First factions visibly forming. Market economy breaking down; barter beginning. Hospital triage at Città della Salute becoming brutal.',
    impact: 'The cash and manual economies the Leonellis already operated in became the default for the entire city.',
    relatedEntries: []
  },

  {
    id: 'bianca-ids-luca',
    time: 'Day 2',
    title: 'Bianca Identifies Luca',
    chapter: 3,
    category: 'leonelli',
    description: 'Bianca Severa tracked the forum post to a physical location. Luca Terranova identified. Three kilometers from Palazzo Valperga. Bianca reported to Cecilia. The acquisition plan was set in motion.',
    impact: 'Matteo pre-positioned inside the target building. Exit options closed before Luca was aware of the approach.',
    relatedEntries: ['Bianca Severa', 'Luca Terranova', 'Matteo Vascari']
  },

  {
    id: 'ferro-patto-forms',
    time: 'Day 2',
    title: 'Ferro Patto Coalesces',
    chapter: 3,
    category: 'faction',
    description: 'Ferro Patto coalesced within 24 hours from private security contractors, ex-Carabinieri, ex-military, and ex-Polizia di Stato. Comandante Elena Ricci assumed leadership. They claimed Palazzo Reale as their headquarters — symbolic territory over logistical territory.',
    impact: 'The primary Book One antagonist established its base. The structural error of choosing symbolism over infrastructure was locked in.',
    relatedEntries: ['Ferro Patto', 'Elena Ricci', 'Palazzo Reale']
  },

  {
    id: 'fiamma-eterna-forms',
    time: 'Days 2–3',
    title: 'Fiamma Eterna Establishes at Superga',
    chapter: 3,
    category: 'faction',
    description: 'The Fiamma Eterna established itself at the Basilica di Superga within the first 48 hours, interpreting the hilltop\'s System significance as divine endorsement. Padre Elia Voss organized the first converts around the dynastic crypt and the Superga disaster mythology.',
    impact: 'They seized the highest contract amplification node in the city without knowing what it was mechanically. Their theological interpretation was wrong. Their strategic position was correct.',
    relatedEntries: ['Fiamma Eterna', 'Padre Elia Voss', 'Basilica di Superga']
  },

  // ==========================================
  // DAYS 3–4 — LUCA ACQUISITION
  // ==========================================

  {
    id: 'luca-acquisition',
    time: 'Day 3–4',
    title: 'Luca Terranova Acquired',
    chapter: 5,
    category: 'leonelli',
    description: 'Cecilia and Dario approached the building. Matteo was already pre-positioned inside. Exit options had been closed. The deal was framed as mutual. Luca accepted because his arithmetic was correct. Iris Terranova was brought into Palazzo Valperga under the terms of the arrangement.',
    impact: 'The System Analysis Division concept was proven. The first analyst was operational. Iris entered the building — and began observing everything.',
    relatedEntries: ['Luca Terranova', 'Iris Terranova', 'Cecilia Leonelli', 'Palazzo Valperga']
  },

  // ==========================================
  // DAY 3 — 72-HOUR WINDOW CLOSES
  // ==========================================

  {
    id: 'window-closes',
    time: 'Day 3 — Hour 72',
    title: 'Classification Window Closes',
    chapter: 7,
    category: 'system',
    description: 'The 72-hour class selection window closed. Every entity who did not engage became an NPC — no class, no progression, no System protection. Approximately half of Turin\'s two million residents became NPCs, including the majority of police, military, and the Leonelli organization\'s lower-tier personnel.',
    impact: 'The permanent division between Players and NPCs was locked in. The consequences were immediate and mechanical.',
    relatedEntries: ['NPC Status']
  },

  // ==========================================
  // DAY 3–4 — CLASS SELECTIONS
  // ==========================================

  {
    id: 'core-five-selections',
    time: 'Day 3 (before window close)',
    title: 'Core Five Class Selections',
    chapter: 7,
    category: 'leonelli',
    description: 'The Core Five finalized their class selections in a meeting at Palazzo Valperga. Ruggiero selected COLLECTOR on Luca\'s analytical reasoning — a significant moment of trust. Matteo selected ADVOCATE. Bianca selected WATCHER. Luca was confirmed as ARCHITECT. Luca\'s read on each class, delivered without deference, earned Bianca\'s first genuine assessment and Cecilia\'s quiet confirmation.',
    impact: 'The full Leonelli leadership build was locked. Luca transitioned from recruited asset to recognized mind. The Chapter 7 class selection scene is the narrative hinge.',
    relatedEntries: ['Ruggiero Montini', 'Matteo Vascari', 'Bianca Severa', 'Luca Terranova']
  },

  // ==========================================
  // NIGHT OF FIRST MEASURE
  // ==========================================

  {
    id: 'night-first-measure',
    time: 'Day 3–4 (Night)',
    title: 'The Night of First Measure',
    chapter: 7,
    category: 'system',
    description: 'Turin\'s first Scenario event. Three-tier deployment: Prowlers city-wide, Territorial Sentinels at high-value nodes, the Apex at Superga. Primary objective: survive. Hidden objective: identify and clear Sentinels for territorial claim bonuses and supply caches.',
    impact: 'Most factions survived by getting inside and staying there. Only factions with System insight exploited the secondary objectives. The discrepancy in faction rewards was the first breadcrumb toward hidden objectives — and the System Analysis Division\'s first proof of concept.',
    relatedEntries: ['Prowlers', 'Territorial Sentinels', 'The Apex', 'Basilica di Superga']
  },

  {
    id: 'apex-superga',
    time: 'Day 3–4 (Night)',
    title: 'The Apex Manifests at Superga',
    chapter: 7,
    category: 'system',
    description: 'A Tier 3 Scenario entity — one per Scenario — appeared at the Basilica di Superga, the highest-value System node in the zone. Not defeatable by any Book One faction. Engagement would cost more than it could return.',
    impact: 'Marked Superga as System-significant. The Fiamma Eterna interpreted it as a guardian angel. Both conclusions — avoid it, and something important is here — were correct.',
    relatedEntries: ['The Apex', 'Fiamma Eterna', 'Basilica di Superga']
  },

  // ==========================================
  // POST-NIGHT OF FIRST MEASURE
  // ==========================================

  {
    id: 'npc-revelation',
    time: 'Days 4–5',
    title: 'The NPC Revelation',
    chapter: 11,
    category: 'leonelli',
    description: 'The full scope of NPC classification within the Leonelli organization was revealed. The majority of the organization\'s personnel — soldiers, operators, support staff — were NPC-classified. Only thirteen people outside the inner circle had selected their classes within the window.',
    impact: 'Structural reckoning. The organization\'s enforcement capacity was mechanically limited in ways that required immediate strategic adjustment. Luca Terranova was formally assigned as head of the System Analysis Division.',
    relatedEntries: ['Luca Terranova', 'NPC Status', 'System Analysis Division']
  },

  {
    id: 'territorial-control-emerges',
    time: 'Days 4–7',
    title: 'Territorial Control Emerges',
    chapter: 11,
    category: 'city',
    description: 'Clear territorial control became visible across Turin. Civilians aligned with whoever offered protection. Food and water became critical. Rail infrastructure was abandoned by corporate operators. The Leonellis moved toward full Lingotto occupation.',
    impact: 'The post-System power landscape solidified. Faction lines hardened. The window for early advantage began to close.',
    relatedEntries: ['Lingotto Factory']
  }

];

// ==========================================
// CATEGORY STYLES
// ==========================================
var TIMELINE_CATEGORIES = {
  'system':   { color: '#c9a84c', label: 'System Event', icon: '⬡' },
  'leonelli': { color: '#c9a84c', label: 'Leonelli',     icon: '◉' },
  'faction':  { color: '#6a8caf', label: 'Faction',      icon: '◈' },
  'city':     { color: '#7a7a8a', label: 'City',         icon: '▪' },
  'scenario': { color: '#b33a3a', label: 'Scenario',     icon: '⚠' }
};

// ============================================
// TEMPLATE — Copy to add a new event:
// ============================================
/*
  {
    id: 'unique-id',
    time: 'Day X — Hour Y',           // display time marker
    title: 'Event Title',
    chapter: 1,                        // chapter where this is revealed
    category: 'system',                // must match key in TIMELINE_CATEGORIES
    description: 'What happened.',
    impact: 'What it changed, or null.',
    relatedEntries: ['Character', 'Location']   // cross-references, or empty array
  },
*/
