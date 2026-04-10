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
  // PRE-SYSTEM
  // ==========================================

  {
    id: 'anonymous-warning',
    time: 'Pre-System — March 11',
    title: 'Anonymous Warning Received',
    chapter: 1,
    category: 'leonelli',
    description: 'A handwritten note arrived through Matteo\'s channels, dated March 11: <em>"Be advised. The world will be altered within the next two days. Physical parameters will change. Prepare accordingly."</em> The signature matched a historical society that had been inactive for decades.',
    impact: 'Cecilia initially dismissed it as a prank or a test. Within twenty-four hours, multiple independent sources were echoing the same clinical phrasing — too similar, too widely distributed, too devoid of political content to be a hoax.',
    relatedEntries: ['Matteo Vascari']
  },

  {
    id: 'warnings-proliferate',
    time: 'Pre-System — March 12',
    title: 'Warnings Proliferate',
    chapter: 1,
    category: 'city',
    description: 'Bianca reported that similar warnings were reaching business leaders, politicians, law enforcement, and criminal organizations across the city — all within twelve hours. Several referenced "physical parameters," "reality restructuring," and "dimensional stability." One specified a time: noon GMT the following day.',
    impact: 'Cecilia recalled the Core Five and ordered full preparation. The government placed offices on alert, but response was slow and contradictory. Some businesses closed for the day.',
    relatedEntries: ['Bianca Severa', 'Cecilia Leonelli']
  },

  // ==========================================
  // DAY 1 — SYSTEM INITIALIZATION
  // ==========================================

  {
    id: 'system-init',
    time: 'Day 1 — Hour 0',
    title: 'System Initialization',
    chapter: 1,
    category: 'system',
    description: 'At 11:55 on March 13, the world changed. A pressure shift behind the eyes, light too sharp for a March noon, shadows cut rather than cast. Then the words appeared — glowing text suspended in the air above Turin, impossible to ignore. The System announced itself to 2,247,891 registered entities. The Classification Window opened. The 72-hour countdown began.',
    impact: 'Civil infrastructure began degrading within hours. Organizations with preexisting command structures held their shape while civic institutions fragmented. The sky turned a deep, vibrant purple and did not return to blue.',
    relatedEntries: ['Cecilia Leonelli', 'The System']
  },

  {
    id: 'cecilia-selects',
    time: 'Day 1 — Late Night',
    title: 'Cecilia Selects FIXER',
    chapter: 1,
    category: 'leonelli',
    description: 'Alone at her desk after 3 AM, Cecilia opened the class selection interface. She evaluated Sovereign, Enforcer, and Fixer with the same eye she used for contracts — reading the architecture, not the meaning. Sovereign required legitimacy that hadn\'t been established yet. Enforcer didn\'t match her direction. Fixer named an outcome without specifying a method, with a ceiling signal — <em>"what others cannot"</em> — that marked a threshold of capability, not willingness.',
    impact: 'The Leonelli organization had its first Player-classified member before most of Turin had finished processing the initial message. Cecilia selected before consulting the others, reading the System\'s descriptor language on instinct.',
    relatedEntries: ['Cecilia Leonelli', 'FIXER']
  },

  {
    id: 'dario-selects',
    time: 'Day 1 — Hours 1–6',
    title: 'Dario Selects RUNNER',
    chapter: 7,
    category: 'leonelli',
    description: 'Dario selected his class early, before the Core Five convened for formal discussion. <em>"For those who move faster than consequences."</em> He chose Runner over Brute and Infiltrator because it was about speed and options rather than fixed positions. He did not wait to be told.',
    impact: 'Dario\'s early selection meant the Leonellis had two Player-classified members within the first day — one strategic, one operational.',
    relatedEntries: ['Dario Fioretti', 'RUNNER']
  },

  {
    id: 'institutional-order',
    time: 'Day 1 — Hours 1–6',
    title: 'Institutional Stand-Down Order',
    chapter: 2,
    category: 'city',
    description: 'Police, military, and regulatory institutions issued orders to personnel: ignore the System prompts, do not engage with the classification window, await government guidance. The guidance was slow, contradictory, and arrived after the window closed.',
    impact: 'The majority of institutional personnel became NPCs. A fraction defied guidance and selected their classes independently, creating internal fracturing that would define institutional capability for the foreseeable future.',
    relatedEntries: ['NPC Status']
  },

  {
    id: 'day1-collapse-begins',
    time: 'Day 1 — Hours 6–24',
    title: 'First Night of Collapse',
    chapter: 2,
    category: 'city',
    description: 'Phone signal dropped to intermittent patches. Cars choked major boulevards. A military convoy of decades-old APCs pressed southwest down Corso Regina Margherita. By 6 PM, gunshots. By 9 PM, bodies on the pavement. Pharmacies and shops were looted selectively — obvious goods taken, specialist medicines left behind by people who couldn\'t read the labels.',
    impact: 'The knowledge gap — who understood what the System was and what it meant — began to matter as much as the supply gap. People who grasped the new reality in the first hours separated sharply from those who waited for the old one to return.',
    relatedEntries: ['Cecilia Leonelli']
  },

  // ==========================================
  // DAY 2
  // ==========================================

  {
    id: 'palazzo-secured',
    time: 'Day 2 — Morning',
    title: 'Palazzo Valperga Secured',
    chapter: 3,
    category: 'leonelli',
    description: 'Cecilia walked the building at 5:30 AM. People were sleeping in corridors on unauthorized bedding. The cellar access hadn\'t been properly secured. Ruggiero had sealed entrances, repositioned guards, and kept the perimeter clean since 3 AM. Eleven non-payroll people were sheltering inside, including the Esposito family. Cecilia ordered a protocol for intake and exchange.',
    impact: 'Palazzo Valperga began its transition from private headquarters to fortified shelter. The question of who to take in — and what to ask in return — became a policy problem that would define the organization\'s relationship with the civilian population.',
    relatedEntries: ['Palazzo Valperga', 'Ruggiero Brando']
  },

  {
    id: 'espositos-sheltered',
    time: 'Day 2 — Morning',
    title: 'Esposito Family Taken Under Protection',
    chapter: 3,
    category: 'leonelli',
    description: 'The Esposito sisters arrived at Palazzo Valperga. Their father had been traveling to Geneva when the System hit and hadn\'t been heard from since Tuesday. Roads out of Turin were paralyzed. Cecilia extended protection, set terms through Matteo, and kept them within the building.',
    impact: 'The Esposito arrangement was the first instance of the Leonellis converting a pre-collapse business relationship into post-collapse leverage. Protection offered in crisis became debt held in perpetuity.',
    relatedEntries: ['Cecilia Leonelli', 'Matteo Vascari']
  },

  {
    id: 'archimede-thread',
    time: 'Day 2 — Mid-Morning',
    title: 'The Archimede Thread',
    chapter: 3,
    category: 'leonelli',
    description: 'Bianca brought Cecilia a cached gaming forum post by a user called Archimede. Written the previous evening and posted during a narrow signal window, the thread dismantled the class selection interface from first principles — identifying ceiling signals in descriptor language, selection architecture, and why most people were choosing wrong. It was rigorous, generalized, and written for strangers.',
    impact: 'Cecilia recognized the author as someone who could identify value faster than anyone else — and who had done it publicly, for free, on the chance that the right people would find it. She ordered Bianca to find him.',
    relatedEntries: ['Luca Terranova', 'Bianca Severa']
  },

  {
    id: 'luca-recruited',
    time: 'Day 2 — Afternoon',
    title: 'Luca Terranova Recruited',
    chapter: 5,
    category: 'leonelli',
    description: 'Cecilia, Dario, and Matteo traveled on foot across a collapsing city to recruit Luca Terranova from his apartment in San Donato. He\'d been alone since the System hit, monitoring through his window. Matteo had entered the building twenty minutes ahead with a tighter version of the contract already prepared. Luca signed after reading the architecture of both drafts and negotiating the compensation clause.',
    impact: 'The Leonellis acquired their first dedicated System analyst — someone who understood game mechanics as a professional discipline and could generalize that knowledge to the new reality. Luca\'s sister Iris was brought to Palazzo Valperga within the hour.',
    relatedEntries: ['Luca Terranova', 'Iris Terranova', 'Cecilia Leonelli']
  },

  {
    id: 'first-creature-encounter',
    time: 'Day 2 — Afternoon',
    title: 'First Creature Encounter',
    chapter: 4,
    category: 'scenario',
    description: 'On the Lungo Po embankment en route to Luca\'s building, Cecilia and Dario encountered one of the System\'s creatures for the first time. Low-slung, fast, with obsidian-like skin and a vertical mouth of needle teeth. It paused, registered their presence, and chose not to engage.',
    impact: 'The creature\'s decision not to attack was itself significant. Something that made decisions could be understood. Something that could be understood could eventually be predicted. Cecilia\'s need for an analyst capable of asking those questions sharpened.',
    relatedEntries: ['Cecilia Leonelli', 'Dario Fioretti']
  },

  {
    id: 'recruitment-begins',
    time: 'Day 2 — Evening',
    title: 'Talent Recruitment Begins',
    chapter: 6,
    category: 'leonelli',
    description: 'Using criteria refined by Luca — top-100 ladder finishers, theory crafters, economy modelers, exploit hunters, guild officers who optimized rather than managed — the Leonellis began building a recruitment list. Iris Terranova produced eleven names from her own network. Bianca identified a second forum analyst worth pursuing: RaptorSix (Ermilo Ferrero). Medical personnel recruitment from Aurora was also ordered.',
    impact: 'The Leonellis formalized their approach to human acquisition in the new economy: find people who understood systems under pressure, reach them before anyone else did, and make staying more attractive than leaving.',
    relatedEntries: ['Luca Terranova', 'Iris Terranova', 'Bianca Severa']
  },

  // ==========================================
  // DAY 3 — CLASSIFICATION WINDOW CLOSES
  // ==========================================

  {
    id: 'core-five-classes',
    time: 'Day 3 — Late Afternoon',
    title: 'Core Five Class Selections',
    chapter: 7,
    category: 'leonelli',
    description: 'With the classification window closing in hours, the Core Five finalized their selections in a group session led by Luca\'s analysis. Ruggiero chose Collector after Luca argued its ceiling scaled with what the organization could make people owe. Matteo chose Advocate for its potential to enforce agreements mechanically. Bianca chose Watcher because its ceiling was knowledge, not action. Luca had already chosen Architect. Dario and Cecilia had selected days earlier.',
    impact: 'The Leonelli inner circle was now a complementary set: Fixer, Runner, Collector, Advocate, Watcher, Architect. The selections were strategic rather than aspirational — each chosen for ceiling potential and organizational fit rather than immediate power.',
    relatedEntries: ['Cecilia Leonelli', 'Ruggiero Brando', 'Matteo Vascari', 'Bianca Severa', 'Dario Fioretti', 'Luca Terranova']
  },

  {
    id: 'classification-closes',
    time: 'Day 3 — Evening',
    title: 'Classification Window Closes / Night of First Measure Begins',
    chapter: 7,
    category: 'system',
    description: 'The System announced that all unregistered entities had been automatically categorized. Tier 1 classes activated. The first Scenario initiated immediately: <strong>Night of First Measure</strong>. Duration: 8 hours. Objective: Survive. <em>"The city belongs to whoever holds it at dawn."</em>',
    impact: 'Every person in Turin who had hesitated, waited for guidance, or followed institutional orders not to engage was now locked into whatever the System decided they were. The window for early advantage slammed shut.',
    relatedEntries: ['The System', 'Night of First Measure']
  },

  // ==========================================
  // NIGHT OF FIRST MEASURE (SCENARIO 1)
  // ==========================================

  {
    id: 'nofm-teams-deployed',
    time: 'Night of First Measure',
    title: 'Leonelli Recruitment Teams Deployed',
    chapter: 8,
    category: 'leonelli',
    description: 'Cecilia dispatched two teams into the city during the Scenario. North team — Bianca, Dario, and Luca — moved via Via Milano to recruit from the priority analyst list. South team — Cecilia, Ruggiero, and four others — took a van southeast toward Corso Casale. Both teams operated under a directive: disengage from creatures, avoid military, retrieve the names on the list.',
    impact: 'Recruiting during an active Scenario was an acceleration risk. It was also the only window in which the competition would be too busy surviving to contest the same targets.',
    relatedEntries: ['Cecilia Leonelli', 'Bianca Severa', 'Dario Fioretti']
  },

  {
    id: 'nofm-checkpoint',
    time: 'Night of First Measure',
    title: 'Via Po Checkpoint — Police Position Overrun',
    chapter: 8,
    category: 'scenario',
    description: 'Cecilia\'s team encountered a police checkpoint on Via Po: two cars, one fire truck, four officers behind portable barriers. During the stop, three creatures attacked from beneath civilian vehicles. Ruggiero engaged hand-to-hand. The team neutralized all three. One officer was killed. Cecilia ordered the barriers moved and proceeded.',
    impact: 'The first direct evidence that conventional law enforcement was mechanically outmatched by System entities. Officers with service weapons could barely slow the creatures. The institutional order the checkpoint represented died with it.',
    relatedEntries: ['Ruggiero Brando', 'NPC Status']
  },

  {
    id: 'nofm-lanza-dead',
    time: 'Night of First Measure',
    title: 'Davide Lanza Found Dead — Rival Group Confirmed',
    chapter: 9,
    category: 'faction',
    description: 'The team\'s first recruitment target, Davide Lanza (market analyst, MMO auction tool builder), was found shot dead behind his shop counter on Corso Casale. His equipment had been stripped. On the wall behind him: "SAFE ZONE" with an arrow and a phone number. Someone was collecting useful people — and killing the ones who resisted.',
    impact: 'Confirmation that the Leonellis were not the only organization identifying System-literate talent. The phone number and directional markings indicated an organized operation with infrastructure and intent.',
    relatedEntries: ['Ferro Patto']
  },

  {
    id: 'nofm-ferrero-rescue',
    time: 'Night of First Measure',
    title: 'Ferrero Siblings Extracted',
    chapter: 9,
    category: 'leonelli',
    description: 'Ermilo Ferrero (RaptorSix) and his sister were found barricaded on the top floor of their building, having fought off four armed men from the same rival group hours earlier. Two neighbors had been killed. Cecilia\'s team cleared the building, interrogated a survivor, and extracted the Ferreros. The survivor named "Marinelli" as the group\'s backer.',
    impact: 'The Ferreros brought Observer and Scribe classes into the organization — information-gathering and recording capabilities that would prove critical for the System Analysis Division. The name Marinelli provided a thread to follow.',
    relatedEntries: ['Ermilo Ferrero', 'Cecilia Leonelli']
  },

  {
    id: 'nofm-gate-battle',
    time: 'Night of First Measure',
    title: 'Gate Battle at Palazzo Valperga',
    chapter: 10,
    category: 'leonelli',
    description: 'Bianca\'s north team returned under fire — pursued by armed hostiles and a creature. The attackers included individuals with combat classes: one who could erect shimmering barriers, another who threw concussive force blasts, a third with perception through cover. The roof team engaged. A creature was caught and killed in the closing gate. The team brought back one asset: Giulia Conti, class Artificer.',
    impact: 'First direct combat between the Leonellis and players with active System abilities. The rival group was identified as <strong>Ferro Patto</strong> — a cluster of ex-police, private security, and old military men who had organized around emergency authority.',
    relatedEntries: ['Bianca Severa', 'Giulia Conti', 'Ferro Patto', 'Palazzo Valperga']
  },

  {
    id: 'npc-revelation',
    time: 'Night of First Measure',
    title: 'The NPC Revelation',
    chapter: 11,
    category: 'system',
    description: 'Luca asked all Leonelli personnel to open their System interfaces. The result was immediate and structural: the vast majority were classified as NPCs — non-player characters. They had not selected classes before the window closed. Only thirteen people outside the inner circle had done so. NPCs could not level, gain experience, or acquire skills. The System considered them background.',
    impact: 'Structural reckoning. The organization\'s enforcement capacity was mechanically limited in ways that required immediate strategic adjustment. Luca Terranova was formally assigned as head of the System Analysis Division.',
    relatedEntries: ['Luca Terranova', 'NPC Status', 'System Analysis Division']
  },

  {
    id: 'npc-combat-deficit',
    time: 'Night of First Measure',
    title: 'NPC Combat Disadvantage Confirmed',
    chapter: 11,
    category: 'system',
    description: 'Cecilia connected the checkpoint and the military casualties to the NPC problem: institutions that ordered personnel not to engage with the System had created an army of mechanically weakened soldiers. Ruggiero confirmed through testing that NPC-fired weapons did significantly less damage against creatures than the same weapons fired by Players.',
    impact: 'The institutional stand-down order — issued to maintain authority — had instead guaranteed that the military and police would fight at a severe disadvantage they didn\'t know they had. The Leonellis\' handful of Player-classified members were now worth more than entire units of NPC soldiers.',
    relatedEntries: ['NPC Status', 'Ruggiero Brando']
  },

  {
    id: 'nofm-complete',
    time: 'Day 4 — 5:58 AM',
    title: 'Night of First Measure — Complete',
    chapter: 11,
    category: 'system',
    description: 'The System declared the Scenario complete at dawn. The Leonellis had survived without losing a single member. Cecilia received her first class skills: <strong>Marked Ledger</strong> (designate targets for increased effectiveness) and <strong>Weight of Office</strong> (aura of authority causing hesitation in enemies). A third notification arrived: the System recognized the Leonelli Family as a Tier 1 Organization.',
    impact: 'Organization recognition unlocked a 5% efficiency bonus for members acting in their designated roles and gave Cecilia access to Organizational Quests and Renown tracking. A crime family had become a System-sanctioned faction.',
    relatedEntries: ['Cecilia Leonelli', 'FIXER', 'The System']
  },

  // ==========================================
  // DAY 4 — CONSOLIDATION
  // ==========================================

  {
    id: 'player-npc-demonstration',
    time: 'Day 4 — Morning',
    title: 'Player vs. NPC Demonstration',
    chapter: 12,
    category: 'leonelli',
    description: 'Cecilia ordered Gonzaga, an NPC, to shoot Dario, a Player, in the chest at six paces. The round hit like a BB gun — barely a bruise. The demonstration proved the mechanical gap between Players and NPCs in a way the entire room could see.',
    impact: 'The test removed any remaining ambiguity about the NPC disadvantage and gave the organization a visceral understanding of why Player-classified members were irreplaceable assets.',
    relatedEntries: ['Dario Fioretti', 'NPC Status']
  },

  {
    id: 'military-position-salvage',
    time: 'Day 4 — Morning',
    title: 'Military Position Salvaged',
    chapter: 12,
    category: 'leonelli',
    description: 'Cecilia\'s team found an abandoned military position on Corso Francia — two armored vehicles with doors open, bullet holes clustered in patterns that said the soldiers hadn\'t expected the angles. Blood on the asphalt, no bodies. She recovered a military map marked with safe routes and fallback positions.',
    impact: 'The map revealed how the military had been thinking about the city and where their planning had failed. The salvaged equipment and intelligence gave the Leonellis resources they didn\'t have to manufacture.',
    relatedEntries: ['Cecilia Leonelli']
  },

  {
    id: 'ricci-recruited',
    time: 'Day 4 — Morning',
    title: 'Paride Ricci Recruited',
    chapter: 12,
    category: 'leonelli',
    description: 'Near the abandoned military position, Cecilia encountered Paride Ricci, a former Polizia supervisor who had kept a group of civilians alive in a building basement through the Night of First Measure. He\'d heard of the Leonellis. He came anyway.',
    impact: 'Ricci brought an organized block of civilians — families and workers who\'d already accepted collective discipline. His police background provided institutional knowledge the Leonellis lacked.',
    relatedEntries: ['Cecilia Leonelli']
  },

  {
    id: 'analysis-division-first-briefing',
    time: 'Day 4 — Afternoon',
    title: 'System Analysis Division — First Briefing',
    chapter: 13,
    category: 'leonelli',
    description: 'Luca ran his first formal briefing. Key findings: (1) Creatures used coordinated tactics — they withdrew on shared signals and did not scavenge, behaving like combatants with doctrine rather than animals. (2) The Night of First Measure had contained hidden secondary objectives — certain locations generated bonus rewards no one had known to pursue. (3) Groups with complementary classes received amplified rewards. The System was incentivizing synergistic teams in strategic locations.',
    impact: 'The secondary objective discovery meant the Leonellis could prepare teams with specific class combinations and deploy them to high-value locations before future Scenarios triggered. Territory wasn\'t just defensible — it was mechanically profitable.',
    relatedEntries: ['Luca Terranova', 'System Analysis Division']
  },

  {
    id: 'territorial-control-emerges',
    time: 'Days 4–7',
    title: 'Territorial Control Emerges',
    chapter: 14,
    category: 'city',
    description: 'Clear territorial control became visible across Turin. Civilians aligned with whoever offered protection. Food and water became critical. Rail infrastructure was abandoned by corporate operators. The Leonellis moved toward full consolidation of the Quadrilatero Romano.',
    impact: 'The post-System power landscape solidified. Faction lines hardened. The window for early advantage began to close.',
    relatedEntries: ['Palazzo Valperga']
  },

  {
    id: 'porta-palazzo-recon',
    time: 'Day 4 — Morning',
    title: 'Porta Palazzo Market Reconnaissance',
    chapter: 14,
    category: 'leonelli',
    description: 'Dario visited Porta Palazzo market to assess conditions. System drops from the Night of First Measure were already circulating as trade goods. Three unidentified Players were mapping the market\'s vulnerabilities. Dario reconnected with Fatima Hassan, a longtime Aurora contact who asked whether the Leonellis were "still in business." He confirmed.',
    impact: 'The market was adapting faster than institutions. Barter had replaced currency in some stalls, System-generated items had entered trade, and the social physics of protection and exchange were already reshaping around whoever showed up consistently.',
    relatedEntries: ['Dario Fioretti']
  },

  {
    id: 'civil-security-coalition',
    time: 'Day 4 — Afternoon',
    title: 'Civil Security Coalition Announced',
    chapter: 14,
    category: 'faction',
    description: 'The military announced the formation of a Civil Security Coalition under Commander Fedele Gasparini, recruiting civilians for a Reconstruction Unit. Public bulletins appeared at Porta Palazzo and other high-traffic areas — a claim on public space and public trust.',
    impact: 'Cecilia decided to counter with a public announcement of Leonelli-controlled territory and services: safety, organization, fair markets. The goal was to define what legitimacy looked like before the Coalition could. <em>"If they respond with force, they look bad. If they don\'t, they look weak. Either way, we win."</em>',
    relatedEntries: ['Cecilia Leonelli', 'Matteo Vascari']
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
