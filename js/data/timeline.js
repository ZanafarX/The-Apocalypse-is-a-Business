// ============================================
// TIMELINE DATA — The Apocalypse Is a Business
// ============================================
// Complete Book One timeline: 42 chapters across ~7 weeks.
// Events are displayed in order. Each has a time marker,
// chapter tag, category, and description.
//
// HOW TO ADD A NEW EVENT:
// 1. Copy the template at the bottom
// 2. Fill in the fields
// 3. Insert it at the correct chronological position
// 4. The page renders it automatically
//
// TIMEFRAME ASSUMPTIONS:
// Day 1 = System Initialization (March 13)
// Days 1–3 = Classification Window open
// Day 3 evening = Night of First Measure (Scenario 1)
// Day 4 = Post-NofM consolidation
// Days 5–7 = Week 1 closes; territorial lines harden
// Week 2 (Days 8–14) = Institutional maneuvering, contracts
// Week 3 (Days 15–21) = Political expansion, demographic analysis
// Week 4 (Days 22–28) = Skyfall scenario arc
// Weeks 5–6 (Days 29–42) = Two weeks post-Skyfall; maturation
// Week 7 (Days 43–49) = Longshadow, Fiamma Eterna, Book One close
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
    relatedEntries: ['Matteo Vascari', 'Fiamma Eterna']
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
    chapter: 8,
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
    id: 'recruitment-begins',
    time: 'Day 2 — Evening',
    title: 'Talent Recruitment Begins',
    chapter: 6,
    category: 'leonelli',
    description: 'Using criteria refined by Luca — top-100 ladder finishers, theory crafters, economy modelers, exploit hunters, guild officers who optimized rather than managed — the Leonellis began building a recruitment list. Iris Terranova produced eleven names from her own network. Bianca identified a second forum analyst worth pursuing: RaptorSix (Ermilio Ferrero). Medical personnel recruitment from Aurora was also ordered.',
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
    chapter: 8,
    category: 'leonelli',
    description: 'With the classification window closing in hours, the Core Five finalized their selections in a group session led by Luca\'s analysis. Ruggiero chose Collector after Luca argued its ceiling scaled with what the organization could make people owe. Matteo chose Advocate for its potential to enforce agreements mechanically. Bianca chose Watcher because its ceiling was knowledge, not action. Luca had already chosen Architect. Dario and Cecilia had selected days earlier.',
    impact: 'The Leonelli inner circle was now a complementary set: Fixer, Runner, Collector, Advocate, Watcher, Architect. The selections were strategic rather than aspirational — each chosen for ceiling potential and organizational fit rather than immediate power.',
    relatedEntries: ['Cecilia Leonelli', 'Ruggiero Brando', 'Matteo Vascari', 'Bianca Severa', 'Dario Fioretti', 'Luca Terranova']
  },

  {
    id: 'classification-closes',
    time: 'Day 3 — Evening',
    title: 'Classification Window Closes / Night of First Measure Begins',
    chapter: 9,
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
    chapter: 10,
    category: 'leonelli',
    description: 'Cecilia dispatched two teams into the city during the Scenario. North team — Bianca, Dario, and Luca — moved via Via Milano to recruit from the priority analyst list. South team — Cecilia, Ruggiero, and four others — took a van southeast toward Corso Casale. Both teams operated under a directive: disengage from creatures, avoid military, retrieve the names on the list.',
    impact: 'Recruiting during an active Scenario was an acceleration risk. It was also the only window in which the competition would be too busy surviving to contest the same targets.',
    relatedEntries: ['Cecilia Leonelli', 'Bianca Severa', 'Dario Fioretti']
  },

  {
    id: 'nofm-checkpoint',
    time: 'Night of First Measure',
    title: 'Via Po Checkpoint — Police Position Overrun',
    chapter: 10,
    category: 'scenario',
    description: 'Cecilia\'s team encountered a police checkpoint on Via Po: two cars, one fire truck, four officers behind portable barriers. During the stop, a creature emerged from beneath a civilian car and attacked. Ruggiero grappled it hand-to-hand. Paolo landed the kill shot from the van\'s roof. Three officers died. Cecilia ordered the barriers moved and proceeded.',
    impact: 'The first direct evidence that conventional law enforcement was mechanically outmatched by System entities. Officers with service weapons could barely slow the creatures. The institutional order the checkpoint represented died with it.',
    relatedEntries: ['Ruggiero Brando', 'NPC Status']
  },

  {
    id: 'nofm-lanza-dead',
    time: 'Night of First Measure',
    title: 'Davide Lanza Found Dead — Rival Group Confirmed',
    chapter: 10,
    category: 'faction',
    description: 'The team\'s first recruitment target, Davide Lanza (market analyst, MMO auction tool builder), was found shot dead behind his shop counter on Corso Casale. His equipment had been stripped. On the wall behind him: "SAFE ZONE" with an arrow and a phone number. Someone was collecting useful people — and killing the ones who resisted.',
    impact: 'Confirmation that the Leonellis were not the only organization identifying System-literate talent. The phone number and directional markings indicated an organized operation with infrastructure and intent.',
    relatedEntries: ['Ferro Patto']
  },

  {
    id: 'nofm-ferrero-rescue',
    time: 'Night of First Measure',
    title: 'Ferrero Siblings Extracted',
    chapter: 11,
    category: 'leonelli',
    description: 'Ermilio Ferrero (RaptorSix) and his sister Lorena were found barricaded on the top floor of their building, having fought off four armed men from the same rival group hours earlier. Two neighbors had been killed. Cecilia\'s team cleared the building, interrogated a survivor, and extracted the Ferreros. The survivor named "Marinelli" as the group\'s backer.',
    impact: 'The Ferreros brought Observer and Scribe classes into the organization — information-gathering and recording capabilities that would prove critical for the System Analysis Division. The name Marinelli provided a thread to follow.',
    relatedEntries: ['Ermilio Ferrero', 'Cecilia Leonelli']
  },

  {
    id: 'nofm-gate-battle',
    time: 'Night of First Measure',
    title: 'Gate Battle at Palazzo Valperga',
    chapter: 12,
    category: 'leonelli',
    description: 'Bianca\'s north team returned under fire — pursued by armed hostiles and a creature. The attackers included individuals with combat classes: one who could erect shimmering barriers, another who threw concussive force blasts, a third with perception through cover. The roof team engaged. A creature was caught and killed in the closing gate. The team brought back one asset: Giulia Conti, class Artificer.',
    impact: 'First direct combat between the Leonellis and Players with active System abilities. The rival group was identified as <strong>Ferro Patto</strong> — a cluster of ex-police, private security, and old military men who had organized around emergency authority.',
    relatedEntries: ['Bianca Severa', 'Giulia Conti', 'Ferro Patto', 'Palazzo Valperga']
  },

  {
    id: 'extraction-window',
    time: 'Night of First Measure — Midnight',
    title: 'Extraction Window Claimed',
    chapter: 13,
    category: 'scenario',
    description: 'By midnight, the team had mapped creature behavioral patterns: they hunted in groups of three to four, avoided well-defended positions, and targeted isolated streets. The mayor\'s office had gone dark. On a second excursion, Cecilia recruited Ivan Carceri, a Cartographer class who had been mapping creature spawn points from his building. Then the System issued a new objective: an Extraction Window at Via Po 77. Cecilia\'s team sprinted to the rooftop under rival fire and she claimed the node, registering it to herself.',
    impact: 'The Extraction Window proved the System generated timed reward events during Scenarios — another mechanism that favored speed and information over raw force.',
    relatedEntries: ['Cecilia Leonelli', 'Ivan Carceri']
  },

  {
    id: 'npc-revelation',
    time: 'Night of First Measure — Late',
    title: 'The NPC Revelation',
    chapter: 15,
    category: 'system',
    description: 'Luca asked all Leonelli personnel to open their System interfaces. The result was immediate and structural: the vast majority were classified as NPCs — non-player characters. They had not selected classes before the window closed. Only fifty-three people outside the inner circle had done so. NPCs could not level, gain experience, or acquire skills. The System considered them background.',
    impact: 'Structural reckoning. The organization\'s enforcement capacity was mechanically limited in ways that required immediate strategic adjustment. Luca Terranova was formally assigned as head of the System Analysis Division.',
    relatedEntries: ['Luca Terranova', 'NPC Status', 'System Analysis Division']
  },

  {
    id: 'npc-combat-deficit',
    time: 'Night of First Measure — Late',
    title: 'NPC Combat Disadvantage Confirmed',
    chapter: 15,
    category: 'system',
    description: 'Cecilia connected the checkpoint casualties and the overrun military positions to the NPC problem: institutions that ordered personnel not to engage with the System had created an army of mechanically weakened soldiers. The institutional chain of command, by instructing personnel to disregard the System, had crippled its own fighting force.',
    impact: 'The Leonellis\' handful of Player-classified members were now worth more than entire units of NPC soldiers. Cecilia recognized this as her primary strategic advantage.',
    relatedEntries: ['NPC Status', 'Cecilia Leonelli']
  },

  {
    id: 'nofm-complete',
    time: 'Day 4 — 5:58 AM',
    title: 'Night of First Measure — Complete',
    chapter: 15,
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
    chapter: 16,
    category: 'leonelli',
    description: 'Cecilia ordered Gonzaga, an NPC, to shoot Dario, a Player, in the chest at six paces. The round hit like a BB gun — barely a bruise. The demonstration proved the mechanical gap between Players and NPCs in a way the entire room could see.',
    impact: 'The test removed any remaining ambiguity about the NPC disadvantage and gave the organization a visceral understanding of why Player-classified members were irreplaceable assets.',
    relatedEntries: ['Dario Fioretti', 'NPC Status']
  },

  {
    id: 'military-position-salvage',
    time: 'Day 4 — Morning',
    title: 'Military Position Salvaged',
    chapter: 16,
    category: 'leonelli',
    description: 'Cecilia\'s team found an abandoned military position on Corso Francia — two armored vehicles with doors open, bullet holes clustered in patterns that said the soldiers hadn\'t expected the angles. Blood on the asphalt, no bodies. She recovered a military map marked with safe routes and fallback positions.',
    impact: 'The map revealed how the military had been thinking about the city and where their planning had failed. The salvaged equipment and intelligence gave the Leonellis resources they didn\'t have to manufacture.',
    relatedEntries: ['Cecilia Leonelli']
  },

  {
    id: 'boris-recruited',
    time: 'Day 4 — Morning',
    title: 'Paride Boris Recruited',
    chapter: 16,
    category: 'leonelli',
    description: 'Near the abandoned military position, Cecilia encountered Paride Boris, a former Polizia supervisor who had kept a group of civilians alive in a building basement through the Night of First Measure. He recognized the Leonelli name. Cecilia offered the same proposition she offered everyone: protection, food, water — or die alone when the next scenario begins. He accepted.',
    impact: 'Boris brought an organized block of civilians — families and workers who\'d already accepted collective discipline. His police background would later make him the ideal bridge figure to infiltrate the Civil Security Coalition.',
    relatedEntries: ['Cecilia Leonelli', 'Civil Security Coalition']
  },

  {
    id: 'analysis-division-first-briefing',
    time: 'Day 4 — Afternoon',
    title: 'System Analysis Division — First Briefing',
    chapter: 20,
    category: 'leonelli',
    description: 'Luca ran his first formal briefing. Key findings: (1) Creatures used coordinated tactics — they withdrew on shared signals and did not scavenge, behaving like combatants with doctrine rather than animals. (2) Creatures appeared to deprioritize NPCs, engaging Players more aggressively. (3) The Night of First Measure had contained hidden secondary objectives — certain locations generated bonus rewards no one had known to pursue. (4) Groups with complementary classes received amplified rewards. The System was incentivizing synergistic teams in strategic locations.',
    impact: 'The secondary objective discovery meant the Leonellis could prepare teams with specific class combinations and deploy them to high-value locations before future Scenarios triggered. Territory wasn\'t just defensible — it was mechanically profitable.',
    relatedEntries: ['Luca Terranova', 'System Analysis Division']
  },

  {
    id: 'giulia-capabilities',
    time: 'Day 4 — Evening',
    title: 'Artificer Capabilities Assessed',
    chapter: 20,
    category: 'leonelli',
    description: 'Cecilia met privately with Giulia Conti and drew out her Artificer class capabilities: equipment modification, potentially enchantment, requiring a workshop, electronics, raw materials, and power sources. Cecilia told her plainly that the things she built would keep people alive and that she didn\'t care about credentials, only capability.',
    impact: 'Giulia\'s class would eventually produce fabricated protective gear and modified weapons that gave the Leonellis a material edge no other faction could match without their own Artificer.',
    relatedEntries: ['Giulia Conti', 'Cecilia Leonelli']
  },

  // ==========================================
  // DAYS 5–7 — WEEK 1 CLOSES
  // ==========================================

  {
    id: 'porta-palazzo-recon',
    time: 'Day 5 — Morning',
    title: 'Porta Palazzo Market Reconnaissance',
    chapter: 21,
    category: 'leonelli',
    description: 'Dario visited Porta Palazzo market to assess conditions. His Runner skill <strong>Read the Room</strong> activated for the first time — an overlay mapping the emotional texture of the space, flagging outliers against the prevailing mood. System drops from the Night of First Measure were already circulating as trade goods. Three unidentified Players were mapping the market\'s vulnerabilities. Dario reconnected with Fatima Hassan, a longtime Aurora contact who asked whether the Leonellis were "still in business." He confirmed. She responded: <em>"Show me."</em>',
    impact: 'The market was adapting faster than institutions. Barter had replaced currency in some stalls, System-generated items had entered trade, and the social physics of protection and exchange were already reshaping around whoever showed up consistently.',
    relatedEntries: ['Dario Fioretti', 'RUNNER']
  },

  {
    id: 'civil-security-coalition',
    time: 'Day 5 — Afternoon',
    title: 'Civil Security Coalition Announced',
    chapter: 21,
    category: 'faction',
    description: 'The military announced the formation of a Civil Security Coalition under Commander Fedele Gasparini, recruiting civilians for a Reconstruction Unit. Public bulletins appeared at Porta Palazzo and other high-traffic areas — a claim on public space and public trust.',
    impact: 'The Coalition had institutional credibility the Leonellis lacked. Citizens would follow official voices in week one regardless of actual capability.',
    relatedEntries: ['Civil Security Coalition']
  },

  {
    id: 'coalition-counter-strategy',
    time: 'Day 5 — Evening',
    title: 'Coalition Counter-Strategy — The Boris Bridge',
    chapter: 21,
    category: 'leonelli',
    description: 'Dario proposed a counter-strategy: rather than opposing the Coalition publicly, use Boris as a bridge figure. As a former officer — not Leonelli — he could credibly offer Coalition personnel better equipment, terms, and survival odds through informal personal arrangements. The best operators would moonlight for the Leonellis while staying in uniform, creating embedded defectors who weakened Gasparini\'s command from within.',
    impact: 'Cecilia approved the plan. The solution was not to argue legitimacy but to demonstrate superior control and let quality drain from the Coalition naturally. <em>"If they respond with force, they look bad. If they don\'t, they look weak. Either way, we win."</em>',
    relatedEntries: ['Dario Fioretti', 'Cecilia Leonelli', 'Civil Security Coalition']
  },

  {
    id: 'territorial-control-emerges',
    time: 'Days 5–7',
    title: 'Territorial Control Emerges',
    chapter: 21,
    category: 'city',
    description: 'Clear territorial control became visible across Turin. Civilians aligned with whoever offered protection. Food and water became critical leverage. Rail infrastructure was abandoned by corporate operators. The Leonellis moved toward full consolidation of the Quadrilatero Romano. Ferro Patto claimed Palazzo Reale and the Centro Storico.',
    impact: 'The post-System power landscape solidified. Faction lines hardened. Ferro Patto chose symbolic territory — Palazzo Reale — over logistical territory, a structural error Cecilia filed for future exploitation.',
    relatedEntries: ['Palazzo Valperga', 'Ferro Patto']
  },

  // ==========================================
  // WEEK 2 — INSTITUTIONAL MANEUVERING
  // ==========================================

  {
    id: 'military-intel-briefing',
    time: 'Week 2 — Day 8',
    title: 'Military Intelligence Assessment',
    chapter: 22,
    category: 'leonelli',
    description: 'Cecilia briefed Dario on the military\'s rebuilding efforts: a command center at Caselle Airport, a forward position near Superga, resumed patrols, and the Civil Security Coalition gaining civilian traction. She framed the core problem: the Coalition had institutional credibility the Leonellis could not match directly. The exchange included a rare personal moment — Dario internally calling her <em>"La Capetta"</em> and recognizing she would have dominated any competitive game ecosystem.',
    impact: 'The strategic response crystallized: do not argue, demonstrate. Offer what the Coalition cannot match. Let capability speak louder than credentials.',
    relatedEntries: ['Cecilia Leonelli', 'Dario Fioretti']
  },

  {
    id: 'lingotto-meeting',
    time: 'Week 2 — Day 8',
    title: 'Lingotto Industrial Meeting',
    chapter: 23,
    category: 'faction',
    description: 'Dario attended an evening meeting at the old FIAT Lingotto complex where thirty-two people from heavy industry, salvage crews, and observer factions had gathered under Luciano Caruso, a former Mirafiori factory floor manager. Dario identified the key players: Caruso running the room like a rally, Emiliano Valle as an information broker, and Federico Marchi as the quiet mechanic who actually understood things. When the room stalled on protection, Dario proposed a testable project: restoring grid power to two blocks in San Paolo, with the Leonellis providing security.',
    impact: 'The offer forced Caruso to accept publicly or look like he was protecting his own claim over the city\'s recovery. Caruso agreed. Afterward, Valle dropped his hostility and offered intelligence about something the military was building in Lingotto\'s Building B — the first hint of military infrastructure ambitions.',
    relatedEntries: ['Dario Fioretti', 'Lingotto']
  },

  {
    id: 'contract-discovery',
    time: 'Week 2 — Day 10',
    title: 'System Contract Mechanic Discovered',
    chapter: 24,
    category: 'system',
    description: 'Matteo formalized a routine contract with Sandro Negri, a courier. When both parties signed, the System responded with a notification: <strong>"Contract Registered. Terms: Binding. Breach Penalty: Active."</strong> Neither party expected this. Cecilia immediately designed experiments: three contracts with varying specificity. Results confirmed the System only registered contracts with specific penalty conditions and genuine bilateral exchange. A deliberate breach produced a notification, a recorded penalty status, and a sensation described as <em>"the feeling of a door closing."</em>',
    impact: 'The System would enforce agreements that no human institution currently could. Matteo\'s Advocate class transformed from a thematic choice into a potentially dominant capability. Cecilia ordered all standard forms redesigned with exact penalty conditions and bilateral consideration, and told Matteo to test whether location affected contract behavior.',
    relatedEntries: ['Matteo Vascari', 'Contracts', 'ADVOCATE']
  },

  {
    id: 'protection-economy-formalized',
    time: 'Week 2 — Day 11',
    title: 'Protection Economy Formalized — The Fabbri Signing',
    chapter: 25,
    category: 'leonelli',
    description: 'Cecilia began formalizing the Leonelli protection economy across the Quadrilatero. Eight businesses signed oversight agreements with System-backed enforcement. The key meeting was with Armando Fabbri, a pharmaceutical supply depot owner. He\'d lost two employees during the Night of First Measure on a delivery run he authorized too late. Cecilia pivoted from business terms to something more fundamental: the guarantee. Under Leonelli protocols, no one would die because of a miscalculated schedule.',
    impact: 'The transition from emergency survival to institutional control. What was once a protection racket became something closer to a functioning municipal authority backed by mechanical law. Cecilia planned to let Fabbri\'s signing spread by reputation.',
    relatedEntries: ['Cecilia Leonelli', 'Matteo Vascari', 'Contracts']
  },

  {
    id: 'iris-intelligence',
    time: 'Week 2 — Day 12',
    title: 'Iris Begins Independent Intelligence Work',
    chapter: 26,
    category: 'leonelli',
    description: 'The narrative shifted to Iris\'s perspective as she worked under Matteo translating property documents. She discovered that three addresses in historical Leonelli correspondence overlapped with buildings Cecilia had identified as expansion priorities. She noticed but did not report the overlap — recording it privately. When she asked Matteo directly, he admitted he knew the full property history and had not told Cecilia everything. He framed it as avoiding complications rather than deception.',
    impact: 'Iris was building her own map of the organization\'s internal dynamics, including information asymmetries between its leaders. She was tracking Bianca\'s surveillance of her and decided she could track Bianca back. A quietly independent intelligence asset whose loyalty was functional, not ideological.',
    relatedEntries: ['Iris Terranova', 'Matteo Vascari', 'Bianca Severa']
  },

  {
    id: 'infrastructure-recruitment',
    time: 'Week 2 — Day 13',
    title: 'Infrastructure Recruitment Drive',
    chapter: 27,
    category: 'leonelli',
    description: 'Dario ran predawn recruitment missions targeting skilled tradespeople: Alesio Silvestri (construction site manager with existing Leonelli ties), an unnamed electrician in Aurora who was already unconsciously using System mechanics to splice unidentifiable materials. Each received the same framing — partnership rather than employment, with the condition of Leonelli-exclusive contracts.',
    impact: 'The organization was building the infrastructure workforce it needed for reconstruction — and for the visible public goods projects that would make the protection economy self-sustaining.',
    relatedEntries: ['Dario Fioretti']
  },

  // ==========================================
  // WEEK 3 — POLITICAL EXPANSION
  // ==========================================

  {
    id: 'night-market-education',
    time: 'Week 3 — Day 15',
    title: 'Night Market — Luca\'s Street Education',
    chapter: 28,
    category: 'leonelli',
    description: 'Dario took Luca to the night market to expand his capabilities beyond pure analysis. A trader confronted Luca aggressively; Luca held steady and responded calmly, passing what Dario explained was a credibility check. Dario delivered the lesson explicitly: the economy was people, not spreadsheets. Reading body language, understanding what someone was hiding by how they shifted their weight.',
    impact: 'The Dario-Luca relationship shifted from employer-contractor toward mentorship. Luca began connecting street-level observation to his analytical framework — a capability that would make the Analysis Division\'s outputs more grounded.',
    relatedEntries: ['Dario Fioretti', 'Luca Terranova']
  },

  {
    id: 'industrialist-banquet',
    time: 'Week 3 — Day 17',
    title: 'Industrialist Banquet at Palazzo Reale',
    chapter: 29,
    category: 'leonelli',
    description: 'The Leonellis hosted a formal banquet for ten of Turin\'s wealthiest surviving industrialists. Seven attended. Cecilia presented the framework as practical necessity: protection, cooperation protocols, and shared priorities in exchange for loyalty. She implied some guests had already engaged privately, letting others wonder who. Baroni pushed back hardest, citing his own security and the military\'s return. Matteo countered that the mayor was likely dead and the military could not fight what it did not understand.',
    impact: 'When Cecilia raised her glass, everyone drank — including Baroni. Matteo categorized the responses afterward: who said yes, who said not yet. The economic foundations were being established faster than the barracks could react.',
    relatedEntries: ['Cecilia Leonelli', 'Matteo Vascari']
  },

  {
    id: 'demographic-analysis',
    time: 'Week 3 — Day 19',
    title: 'Demographic Analysis — Players vs. NPCs',
    chapter: 30,
    category: 'leonelli',
    description: 'The Analysis Division produced a preliminary model of Turin\'s Player-NPC distribution: roughly 145,000 Players against 670,000 NPCs. Highest Player concentration in student areas, lowest in industrial zones like Mirafiori where unions had advised workers to ignore the System prompt. Cecilia immediately identified a "youth bulge" of powered individuals who did not defer to traditional authority — a revolutionary demographic that would either be recruited or become a mob.',
    impact: 'Matteo connected the data to their institutional strategy: with police and military mostly NPCs, the Leonellis could position themselves as the bridge between vulnerable civilians and the Player population. Cecilia specified the political vehicle — not the mayor\'s office (fragile single point) but the city council, where influence could be distributed across enough seats to steer without exposure.',
    relatedEntries: ['Luca Terranova', 'System Analysis Division', 'Matteo Vascari']
  },

  // ==========================================
  // WEEK 4 — SKYFALL ARC
  // ==========================================

  {
    id: 'scenario-alert-skyfall',
    time: 'Week 4 — Day 22',
    title: 'Scenario Alert — 48 Hours',
    chapter: 31,
    category: 'system',
    description: 'A scenario alert arrived with forty-eight hours of preparation time. Primary objective: retain control of designated zones. Secondary objectives: classified. Cecilia issued immediate orders: Luca\'s team to project spawn density, Ruggiero on three-shift patrol across the Quadrilatero, Centro Storico, and Porta Nuova, Matteo to activate scenario clauses in all existing contracts. She framed two parallel operations: territorial defense under Ruggiero, and an extermination detail under Dario to maximize creature kills for power growth.',
    impact: 'The firearms economy was mapped: six of fourteen registered gun stores were under Leonelli control. Cecilia ordered them closed and stock distributed internally. Street-level arms demand was tracked as intelligence for identifying rival factions afterward.',
    relatedEntries: ['Cecilia Leonelli', 'Ruggiero Brando', 'Dario Fioretti']
  },

  {
    id: 'quadrilatero-ambush',
    time: 'Week 4 — Day 22',
    title: 'Assassination Attempt — Three Players',
    chapter: 31,
    category: 'leonelli',
    description: 'That evening, while walking the perimeter with Bianca, three Players ambushed Cecilia near the Quadrilatero. One had enhanced physical bulk, another was a fire-caster, the third a large combatant. Bianca killed two swiftly. The third reached Cecilia. She used Marked Ledger instinctively, then emptied her magazine into his face at contact range.',
    impact: 'The attack confirmed Cecilia had become a visible target — not for territory or contracts, but because she represented the dominant power. Someone had decided the Leonelli name needed breaking. She began planning countermeasures before returning to the Palazzo.',
    relatedEntries: ['Cecilia Leonelli', 'Bianca Severa', 'Marked Ledger']
  },

  {
    id: 'pre-scenario-briefing',
    time: 'Week 4 — Day 23',
    title: 'Pre-Scenario Operational Briefing',
    chapter: 32,
    category: 'leonelli',
    description: 'Cecilia held a full briefing thirty hours before the scenario. She assigned Ruggiero to territorial defense across three zones, gave Dario the extermination detail with orders to ambush at known spawn locations, and instructed all Player-class operatives to use abilities openly as combat training. Bianca raised the question Cecilia had been avoiding: what happens if someone from the inner circle dies.',
    impact: 'Cecilia answered with controlled detachment: contract-holders whose loss was repaid through retribution, and core team members whose loss Bianca handled operationally while Cecilia decided whether to move on. The answer revealed the cost of her clarity.',
    relatedEntries: ['Cecilia Leonelli', 'Bianca Severa', 'Ruggiero Brando']
  },

  {
    id: 'analysts-moral-reckoning',
    time: 'Week 4 — Day 24',
    title: 'Analysis Division — The Moral Weight',
    chapter: 33,
    category: 'leonelli',
    description: 'In the hours before the scenario, the analysts confronted their situation. Ermilio voiced the discomfort of working for a crime boss. Giulia pushed back: the distinction between extortion and payment. The team arrived at a larger realization through conversation — Cecilia\'s model of class-derived territorial authority could be a blueprint for post-System governance, and the reason they were working for a crime boss was that she might be the only person in Turin capable of actually rebuilding society.',
    impact: 'Ivan accepted this grimly. Lorena framed it as survival versus ethics, with ethics deferred. Ermilio discovered the old tunnel network connecting Palazzo Valperga to Porta Palazzo — a physical secret that mirrored the moral compromises they had already made.',
    relatedEntries: ['System Analysis Division', 'Ermilio Ferrero']
  },

  {
    id: 'skyfall-deployment',
    time: 'Week 4 — Day 25',
    title: 'Skyfall Scenario — Field Deployment',
    chapter: 34,
    category: 'scenario',
    description: 'The Analysis Division reached the point where basement analysis was no longer sufficient. Luca arranged field integration with Dario\'s scouting parties. Bianca collected Luca and Ivan before sundown, checking their gear with clinical efficiency. When Ivan asked what happened if something attacked them, she told him to die quietly. The scenario announced: <strong>"Skyfall."</strong> Eight hours. Objective: close portals. Secondary conditions: undisclosed.',
    impact: 'Luca privately noticed his Architect class skills were subtly reshaping his cognition — certain patterns feeling intuitive in ways that blurred the line between his own thinking and System influence. He did not share this concern.',
    relatedEntries: ['Luca Terranova', 'Bianca Severa', 'Ivan Carceri']
  },

  {
    id: 'skyfall-portal-combat',
    time: 'Week 4 — Day 25',
    title: 'Skyfall — Portal Combat and The Load-Bearing Flaw',
    chapter: 35,
    category: 'scenario',
    description: 'Ivan\'s Cartographer class guided the team to a portal forming two blocks east. A dozen winged creatures poured through. Luca froze momentarily, then his Architect skill <strong>Load-Bearing</strong> activated — compressing the square\'s layout into tactical clarity, letting him call out a flanking creature on a third-story balcony that Bianca eliminated. When the portal began stabilizing into a permanent spawn point, Luca identified its structural weak point and directed the team to close it before the window narrowed.',
    impact: 'Luca\'s first live combat use of his class abilities. Load-Bearing worked on physical environments during active Scenarios — a capability that made him irreplaceable in any complex engagement. The Analysis Division crossed from theoretical modeling into field operations.',
    relatedEntries: ['Luca Terranova', 'ARCHITECT', 'Bianca Severa']
  },

  {
    id: 'skyfall-debrief',
    time: 'Week 4 — Day 26',
    title: 'Skyfall Debrief — The Offer',
    chapter: 36,
    category: 'leonelli',
    description: 'After Skyfall, Cecilia summoned Luca privately. She acknowledged his field initiative, asked him to communicate before acting alone in the future, then shifted seamlessly to operations: Ivan\'s spawn maps had improved Bianca\'s route efficiency by fifteen percent. She revealed that spawn aggression scaled inversely with Player density — a finding that enabled controlled farming of weaker waves. Then she made the offer: both Luca and Iris could leave if Iris wanted out.',
    impact: 'Luca recognized the offer as genuine trust rather than leverage. It recalibrated his understanding of his position in the organization. He stayed — and for the first time, the staying was a choice rather than a constraint.',
    relatedEntries: ['Cecilia Leonelli', 'Luca Terranova', 'Iris Terranova']
  },

  {
    id: 'post-skyfall-consolidation',
    time: 'Week 4 — Day 27',
    title: 'Post-Skyfall Consolidation',
    chapter: 37,
    category: 'leonelli',
    description: 'Cecilia checked her stats: Level 12, Authority 200, Infamy 40, with territorial control over the Quadrilatero and adjacent commercial assets. She catalogued the scenario\'s strategic lessons: she earned passive experience from her people\'s kills and objective completions, meaning she scaled without direct action. Scenarios generated tradeable resources including crystalline cores and energy-reactive metals. Dario warned that Luca\'s fast rise would look like favoritism.',
    impact: 'Cecilia signaled that the Leonellis would not remain a local operation forever — she warned Dario to worry about rival analysts in New York and London rather than internal optics. She assigned Bianca and Ruggiero to coordinate formal combat training, transitioning the Family from loose squads to a disciplined fighting force.',
    relatedEntries: ['Cecilia Leonelli', 'Dario Fioretti']
  },

  // ==========================================
  // WEEKS 5–6 — MATURATION
  // ==========================================

  {
    id: 'analysis-division-maturation',
    time: 'Week 6 — Day 39',
    title: 'Analysis Division — Two Weeks After Skyfall',
    chapter: 38,
    category: 'leonelli',
    description: 'Two weeks after Skyfall, the Division debated whether creature drop rates were designed or emergent. Luca cut the argument short: sixteen data points were noise. The real finding was that scenarios were clustering over the same areas with increasing frequency rather than diffusing outward — the System was stress-testing specific nodes. Luca predicted the next scenario would hit industrial zones, particularly Mirafiori, within seven days.',
    impact: 'Cecilia noted the Leonellis had fewer than a hundred Players against potentially half a million in the region. She ordered surveillance on emerging Player alliances and set Dario as gatekeeper for growing civilian intake requests, instructing him to bring Iris along on recruitment visits.',
    relatedEntries: ['Luca Terranova', 'System Analysis Division']
  },

  {
    id: 'deputy-mayor-meeting',
    time: 'Week 6 — Day 40',
    title: 'Deputy Mayor Meeting — Rossi\'s Play',
    chapter: 39,
    category: 'city',
    description: 'Cecilia and Matteo met the deputy mayor\'s office at a hotel near the train station. The delegation included Deputy Mayor Armano (a placeholder), a military attaché (selling capability the army couldn\'t deliver), and Rossi, a utility company liaison working to fold the Leonellis into a consortium he could influence. Cecilia proposed a pilot program in two or three districts — a logistical framework that didn\'t yet exist but would by the time the next scenario forced the government to depend on it.',
    impact: 'The deputy mayor agreed to a limited deal. Cecilia ordered Dario to deploy personnel in target districts before agreements were finalized, establishing facts on the ground. The gap between what she promised and what she had already built was closing from the other direction.',
    relatedEntries: ['Cecilia Leonelli', 'Matteo Vascari']
  },

  {
    id: 'vagabond-encounter',
    time: 'Week 6 — Day 41',
    title: 'Individual Scenario — The Vagabond',
    chapter: 40,
    category: 'scenario',
    description: 'A personal System notification arrived with a red urgency border: an Individual Scenario requiring Cecilia to contain a "B-class Anomaly" at a derelict railway warehouse near Porta Susa. Two-hour limit. Restricted participation. Inside, she and Bianca encountered the Vagabond — an entity unlike anything the System had spawned before. It spoke. It knew Cecilia\'s class title. It delivered a message about <em>"the ones who don\'t follow the rules."</em> Its form flickered between solid and smoke.',
    impact: 'Bianca took a deep cut engaging it. Cecilia used Marked Ledger to designate it and fired with the full force of her Fixer authority. Bianca finished the fight with a clean knife strike. The Vagabond was not a random spawn — it was a targeted, intelligent entity. The System was issuing personal challenges.',
    relatedEntries: ['Cecilia Leonelli', 'Bianca Severa', 'Marked Ledger']
  },

  {
    id: 'rail-yard-observation',
    time: 'Week 6 — Day 42',
    title: 'Rail Yard Observation — Analysts in the Field',
    chapter: 41,
    category: 'leonelli',
    description: 'Luca authorized another field deployment to the Lingotto rail yards, where spawn anomalies were building. The team observed five creatures emerge from a brief portal — smaller than scenario-grade but more organized and intelligent. Before they could engage, a group of well-coordinated Players arrived and killed the creatures in seconds. Dario and Bianca stepped out to assert territorial authority. The rival Players backed down without a fight.',
    impact: 'The chapter tracked the Division\'s transition from basement analysts to field-capable operatives. Luca told Iris that morning that his powers felt like they had always been part of him, but he couldn\'t tell whether he was controlling them or executing what the System already knew he would do.',
    relatedEntries: ['Luca Terranova', 'Iris Terranova', 'Bianca Severa']
  },

  {
    id: 'porta-nuova-reconnaissance',
    time: 'Week 6 — Day 43',
    title: 'Porta Nuova Station — Soft Ambush',
    chapter: 42,
    category: 'faction',
    description: 'Cecilia visited Porta Nuova station with Matteo using a forged municipal work permit. She observed the military checkpoint\'s fragility: young soldiers undertrained for System threats. Inside, she spotted a woman in maintenance uniform watching with too much deliberation. Four workers coordinated to block a side exit — a soft ambush designed to delay rather than attack. Cecilia and Matteo exited through the main entrance to a waiting vehicle.',
    impact: 'A new group was sending a message: they knew where she operated. Not professionals yet, but organized enough to coordinate a blocking action. Cecilia memorized the faces and ordered Matteo to investigate.',
    relatedEntries: ['Cecilia Leonelli', 'Matteo Vascari']
  },

  // ==========================================
  // WEEK 7 — LONGSHADOW AND CLOSE
  // ==========================================

  {
    id: 'fiamma-eterna-investigation',
    time: 'Week 7 — Day 44',
    title: 'The Bottom of the Drawer — Fiamma Eterna Reopened',
    chapter: 43,
    category: 'leonelli',
    description: 'During her pre-scenario file review, Cecilia found the March 11 warning note at the bottom of the drawer. Reading it now with weeks of System experience, the language she had dismissed as vague revealed itself as precise terminology. <em>"Physical parameters"</em> was accurate description. <em>"Altered"</em> implied modification from an outside hand. The note was written in a language that only made sense after the System arrived.',
    impact: 'Matteo\'s investigation identified the signatory as a historical preservation society active from the 1960s through the 1990s, associated with a castle outside Ivrea, officially dissolved but persisting in legal rumor. Motto: <em>"Fides et Flamma"</em> — Faith and Flame. A successor group that had anticipated the System\'s arrival. Cecilia opened the case but decided against direct contact.',
    relatedEntries: ['Fiamma Eterna', 'Matteo Vascari', 'Cecilia Leonelli']
  },

  {
    id: 'longshadow-begins',
    time: 'Week 7 — Day 46',
    title: 'Longshadow Scenario Begins',
    chapter: 44,
    category: 'scenario',
    description: 'The Longshadow scenario began two hours before dawn. Three fixed-point nodes: Superga Basilica, the Mirafiori Complex, and Porta Susa Station, with elevated diffuse spawns city-wide. Cecilia\'s overlay showed Authority at 330, Infamy at 78. She deployed strategically: Ruggiero at high-visibility Mirafiori, Dario creating diversionary chaos at Superga, and her own small fast squad with Bianca working the spaces between — hunting diffuse spawns and claiming secondary objectives others overlooked.',
    impact: 'Giulia\'s Artificer work paid off: enforcers carried fabricated protective vests and node disruptors. The creatures were evolving — a new type appeared with phase-shift abilities, crystalline bone blades, and tactical intelligence beyond anything previous. Cecilia and Bianca took it down through coordinated close-quarters fighting.',
    relatedEntries: ['Cecilia Leonelli', 'Bianca Severa', 'Ruggiero Brando', 'Giulia Conti']
  },

  {
    id: 'parco-dora-acquisition',
    time: 'Week 7 — Day 46',
    title: 'Parco Dora — Pulse Node Acquired',
    chapter: 45,
    category: 'leonelli',
    description: 'At Parco Dora, Cecilia found multiple Player groups converging on an old industrial silo emitting violet System energy. She held at the perimeter and let three rival factions fight each other and the silo\'s monster guards. When a creature carrying a marked objective item climbed the staircase, her enforcers shot it down. She moved through the confusion, reached the fallen object first, and acquired a <strong>Pulse Node</strong> — one of only five discovered across the entire scenario.',
    impact: 'The Red Star group\'s leader confronted her at gunpoint. Rather than escalate, she traded: two rare items from her stockpile delivered after the scenario in exchange for the group leaving the park immediately. Cheaper than casualties and avoided making enemies of a faction she might need later. The Leonellis were named in the top five contributors for the Turin region.',
    relatedEntries: ['Cecilia Leonelli']
  },

  {
    id: 'fiamma-markers-superga',
    time: 'Week 7 — Day 46',
    title: 'Fiamma Eterna Markers at Superga',
    chapter: 45,
    category: 'faction',
    description: 'During the scenario debrief, Dario produced a piece of paper from Superga bearing a hand-drawn flame-in-circle symbol: Fiamma Eterna. The tags appeared near smaller crypts at the Basilica, in areas that felt deliberately avoided — as though marked off by someone who let others handle the fighting while pursuing separate objectives. The connection to the pre-System warning note was now undeniable.',
    impact: 'The mysterious organization that predicted the System\'s arrival was active, operating alongside the scenarios, and leaving deliberate markers. Cecilia ordered continued discreet intelligence gathering rather than direct approach — premature overtures toward a group hidden by design could turn alignment into resistance.',
    relatedEntries: ['Fiamma Eterna', 'Dario Fioretti', 'Cecilia Leonelli']
  },

  {
    id: 'luca-class-disclosure',
    time: 'Week 7 — Day 47',
    title: 'Cecilia Discloses Her Class to Luca',
    chapter: 46,
    category: 'leonelli',
    description: 'Luca visited Cecilia\'s office privately and asked about her class, having observed something during the Parco Dora negotiations that looked like more than educated guessing. Cecilia shared that she chose Fixer and described her abilities as understanding human nature rather than combat powers. She framed the disclosure as operational efficiency rather than personal trust: <em>"You\'re useful. Anything I give you has to pay off for everyone."</em>',
    impact: 'The exchange revealed both the growing partnership and the boundary Cecilia maintained against emotional proximity. The Luca-Cecilia dynamic — the story\'s most interesting relationship — had settled into something genuinely bilateral in intellectual respect without resolving the tension of his constrained position.',
    relatedEntries: ['Cecilia Leonelli', 'Luca Terranova', 'FIXER']
  },

  {
    id: 'book-one-closes',
    time: 'Week 7 — Day 49',
    title: 'Just More Information',
    chapter: 46,
    category: 'leonelli',
    description: 'The Leonellis settled into a consolidating rhythm. Mornings on territory maps with Matteo and Bianca. Afternoons reviewing global intelligence with the Analysis Division. The security market had exploded post-scenario. Global intelligence showed Player factions in other cities establishing government-like control. Each member of the inner circle had evolved: Ruggiero commanding trade routes outside the city, Bianca maintaining tactical readiness, Dario bringing wine to the terrace for the most honest conversations, Matteo holding everything together while quietly building dossiers on emerging threats.',
    impact: 'The next scenario was announced: <strong>Deadlock</strong>. A six-hour hold on difficult terrain with no listed secondary objectives. Ruggiero called it boring. Dario noted that boredom reduces competition. Cecilia closed Book One looking at the sky where the System message had faded, arms crossed: <em>"There\'s no such thing as boring anymore. It\'s all just more information. And we\'ll use it."</em>',
    relatedEntries: ['Cecilia Leonelli', 'Dario Fioretti', 'Ruggiero Brando', 'Matteo Vascari', 'Bianca Severa']
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
