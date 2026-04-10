// ============================================
// WORLD DATA — The Apocalypse Is a Business
// ============================================
// Four sections: FACTIONS, CREATURES, DISTRICTS, FRONTS
// Each has its own array. Copy the template at each
// section's end to add new entries.
// ============================================

// ==========================================
// FACTIONS
// ==========================================

var FACTIONS = [

  {
    id: 'leonelli',
    name: 'The Leonelli Organization',
    shortName: 'Leonelli',
    chapter: 1,
    color: '#c9a84c',
    leader: 'Cecilia Leonelli',
    territory: 'Quadrilatero Romano (HQ), Lingotto (target), Scalo Orbassano (target)',
    type: 'Crime Family',
    threat: 'Primary Faction — Protagonist',
    summary: 'Turin crime family led by Cecilia Leonelli. Pre-collapse strengths — command structure, safehouses, coercion experience, business fronts — translate directly into post-apocalypse advantage. Strategy: acquire elite gamers, formalize them into a System Analysis Division, convert information advantage into territory and legitimacy before rivals understand what\'s happening. The organization itself is treated as a progression build.',
    strengths: 'Preexisting command structure and trust network. Experience with coercion, negotiation, and ugly decisions. Business fronts with operational legitimacy. Cash and manual economies are native operating conditions. System Analysis Division provides unmatched information advantage.',
    weaknesses: 'No initial technical understanding of the System. No medical personnel. Some supplier relationships degraded by chaos. Majority of lower-tier soldiers are NPC-classified.',
    philosophy: 'Make the organization so structurally necessary to Turin\'s continued functioning that its criminal nature becomes irrelevant. Not territorial conquest. Infrastructure. The load-bearing walls of a new city.',
    subgroups: [
      { name: 'The Core Five', desc: 'Cecilia, Bianca, Ruggiero, Matteo, and Dario. Pre-existing trust network. Each occupies a non-overlapping function. Their love is possessive, violent, and exclusionary.', chapter: 1 },
      { name: 'System Analysis Division', desc: 'Internal unit of coerced, indebted, and recruited elite gamers. Cells: Optimization, Scenario Desk, Exploit Lab, Enemy Modeling, Resource Routing. Permanently tense — analysts are indispensable, humiliated, and dangerous.', chapter: 5 }
    ]
  },

  {
    id: 'ferro-patto',
    name: 'Ferro Patto (Iron Compact)',
    shortName: 'Ferro Patto',
    chapter: 3,
    color: '#6a8caf',
    leader: 'Comandante Elena Ricci',
    territory: 'Centro Storico, Financial District, Palazzo Reale',
    type: 'Militia',
    threat: 'Primary Book One Antagonist',
    summary: 'Militia coalesced within 24 hours from private security contractors, ex-military, and ex-police. Stated mission: restore order. Actual mission: become it. Has civilian legitimacy and genuine tactical training; lacks information architecture and economic logic.',
    strengths: 'Genuine tactical training. Early civilian legitimacy. Formal command hierarchy. Access to pre-collapse weapons caches. Mixed Player and NPC composition more capable than most civilian groups.',
    weaknesses: 'Leadership understands combat and public relations, not economy or information asymmetry. Claimed symbolic territory (Palazzo Reale) over logistical territory — a structural error. Does not know what it does not know about the System.',
    philosophy: 'Public order is a service obligation. They are sincere about this — and sincerely wrong about what will sustain it.',
    subgroups: []
  },

  {
    id: 'fiamma-eterna',
    name: 'Fiamma Eterna (Eternal Flame)',
    shortName: 'Fiamma Eterna',
    chapter: 3,
    color: '#d4763a',
    leader: 'Padre Elia Voss',
    territory: 'Collina Torinese, Superga Summit',
    type: 'System Cult',
    threat: 'Secondary Antagonist / Long Arc',
    summary: 'System cult controlling Collina Torinese and the Superga summit. Believes the apocalypse is a divine selection event. Members are genuinely converted — cannot be leveraged through standard self-interest mapping. Holds Turin\'s most powerful contract amplification node without knowing it is one.',
    strengths: 'Genuine faith produces obedience that requires no external maintenance. Holds the highest-value strategic position in the city. Members cannot be turned through conventional leverage. Theological framework provides clear purpose and recruitment pipeline.',
    weaknesses: 'Does not understand the mechanical value of what it holds. Theological interpretation may eventually conflict with System reality. Limited economic infrastructure.',
    philosophy: 'The System is divine selection. The Apex was proof. Superga is holy ground. The faithful will be elevated.',
    subgroups: []
  },

  {
    id: 'leone-selvaggio',
    name: 'Leone Selvaggio (Wild Lion)',
    shortName: 'Leone Selvaggio',
    chapter: 99,
    color: '#b33a3a',
    leader: 'Marco "Leone" Ferrante',
    territory: 'Aurora, Barriera di Milano (partial)',
    type: 'Street Faction',
    threat: 'Neighborhood-Scale Antagonist',
    summary: 'Player street faction, largely young men from Aurora and Barriera di Milano who selected their classes early and made straightforward decisions about the power differential. Predatory toward civilian populations, chaotic in operations, aggressively leveled through Scenario participation.',
    strengths: 'Members have been leveling aggressively since day one. Genuine combat capability. Knowledge of local streets and informal networks. NPC law enforcement cannot stop them.',
    weaknesses: 'No sophisticated organization. No analytical infrastructure. No economic logic beyond extraction. Territorial claim enforced by presence alone, not agreement.',
    philosophy: 'New power in a system that used to exclude them. The character who most directly asks the Leonellis: what exactly is the difference between what you do and what we do?',
    subgroups: []
  },

  {
    id: 'tredicesima',
    name: 'Tredicesima (Reformed Carabinieri Unit)',
    shortName: 'Tredicesima',
    chapter: 99,
    color: '#5a7a5a',
    leader: 'Capitano Andrea Moretti',
    territory: 'Centro Storico station',
    type: 'Institutional — Law Enforcement',
    threat: 'Institutional Variable',
    summary: 'A single Carabinieri unit with higher-than-average Player-class personnel because its commanding officer privately encouraged class selection regardless of official guidance. Still operates as law enforcement. Still wears the uniform. Increasingly divergent from NPC colleagues in capability.',
    strengths: 'Institutional legitimacy. Genuine tactical training. Player-class personnel measurably more effective than NPC counterparts. Moretti\'s independent judgment and methodical analysis.',
    weaknesses: 'Small unit. Constrained by institutional framework that may no longer serve its purpose. Internal tension between Player and NPC personnel.',
    philosophy: 'The gap between the institution he serves and the reality he operates in grows wider every day. The negotiation between opposition and arrangement is ongoing.',
    subgroups: []
  },

  {
    id: 'municipio',
    name: 'Municipio Coalition',
    shortName: 'Municipio',
    chapter: 99,
    color: '#7a7a8a',
    leader: 'Assessore Giulia Cannavaro',
    territory: 'Municipal infrastructure, water points, broadcast systems',
    type: 'Institutional — Governance',
    threat: 'Institutional Variable',
    summary: 'Remnant of Turin\'s formal city government. Not a fighting faction — a governance faction. Controls remaining municipal infrastructure, emergency broadcast systems, and the symbolic weight of being the recognized government. A significant portion of the population still responds to legitimate civic authority.',
    strengths: 'Symbolic legitimacy. Control of municipal infrastructure. Emergency broadcast capability. Population segment that responds to institutional authority.',
    weaknesses: 'No enforcement capacity. NPC-classified leadership. Tools no longer adequate for the operational reality. Cannot compel compliance from Player factions.',
    philosophy: 'Keep the city functional with whatever tools remain. Deal with whoever makes the practical situation better, regardless of what they are.',
    subgroups: []
  },

  {
    id: 'compagnia-acque',
    name: 'Compagnia delle Acque',
    shortName: 'Compagnia Acque',
    chapter: 99,
    color: '#4a7a9a',
    leader: 'Ingegnere Sara Valli',
    territory: 'Three primary water distribution nodes',
    type: 'Infrastructure Faction',
    threat: 'Economic Variable',
    summary: 'Player faction formed around control of Turin\'s water infrastructure within the first two weeks. Not ideological. Purely opportunistic: engineers who recognized water as the most irreplaceable civic resource and moved first. Provides water in exchange for resources, protection, and formal agreements.',
    strengths: 'Controls the most irreplaceable resource in the city. Player-class personnel at each node. Leverage cannot be answered with force without catastrophic reputational cost.',
    weaknesses: 'Small faction. Limited military capability. Dependent on external security. Leverage is defensive only — cannot project power.',
    philosophy: 'Extractive in the sophisticated sense. Not crudely predatory — harder to argue against publicly.',
    subgroups: []
  },

  {
    id: 'corporate-bloc',
    name: 'Corporate Restoration Bloc',
    shortName: 'Corporate Bloc',
    chapter: 99,
    color: '#8a7a6a',
    leader: 'Avvocato Roberto Fasce (Turin representative)',
    territory: 'Centro Storico (partial), professional districts',
    type: 'Corporate Coalition',
    threat: 'Background Pressure Book One / Primary Antagonist Book Two',
    summary: 'Loose coalition of executives, logistics professionals, and private security contractors offering privatized governance — security and supply restoration in exchange for operational authority. Dresses predation in legitimacy. Competes with the Leonellis on contracts, supply networks, and civilian legitimacy rather than combat.',
    strengths: 'Clean optics. Professional presentation. System-backed contract capability (Fasce). Economic infrastructure and business relationships. Offers something that looks like institutional normality.',
    weaknesses: 'Lacks enforcement capability. Lacks territorial depth. Lacks analytical infrastructure. Fasce believes he is better than the Leonellis — Cecilia finds this distinction operationally irrelevant.',
    philosophy: 'Institutional normality as a product. The difference between them and the Leonellis is that the Leonellis know what they are.',
    subgroups: []
  }

];

// ==========================================
// CREATURES
// ==========================================

var CREATURES = [

  {
    id: 'prowlers',
    name: 'Prowlers',
    tier: 'Tier 1',
    chapter: 7,
    category: 'scenario-entity',
    appearance: 'Roughly human-scale. Elongated limbs, low center of gravity, directional speed that exceeds human capacity without looking supernatural. Do not look magical — they look like something nature could have produced and didn\'t, until now.',
    behavior: 'Pack predators deployed city-wide during the Night of First Measure. Hunt isolated individuals and stragglers. Avoid coordinated resistance. Retreat from organized response.',
    threat: 'Manageable for any organized group with combat capacity. Dangerous to isolated civilians and uncoordinated groups.',
    notes: 'First creatures encountered. Establish the baseline threat level and the cost of disorganization.'
  },

  {
    id: 'sentinels',
    name: 'Territorial Sentinels',
    tier: 'Tier 2',
    chapter: 7,
    category: 'scenario-entity',
    appearance: 'Stationary entities appearing at high-value System nodes — market entrances, freight yards, industrial access points.',
    behavior: 'Do not hunt; they hold positions on the System\'s behalf. Defeating one yields a territorial claim bonus and a supply cache. Most factions misread them as standard threats and shelter in place — the correct response is engagement.',
    threat: 'Significant individual threat. Requires coordinated group engagement. The discrepancy in faction rewards is the first breadcrumb toward hidden objectives.',
    notes: 'The faction that clears Sentinels while others hide gains the first measurable advantage. This is the System Analysis Division\'s first proof of concept.'
  },

  {
    id: 'apex',
    name: 'The Apex',
    tier: 'Tier 3',
    chapter: 7,
    category: 'scenario-entity',
    appearance: 'One per scenario event. Appears at the highest-value System node in the zone.',
    behavior: 'Not defeatable by any Book One faction. Engagement costs more than it can return. Correct response: avoidance and observation.',
    threat: 'Existential. Do not engage. The information value of its location exceeds the combat value of attempting to fight it.',
    notes: 'During the Night of First Measure, the Apex appears at Superga, marking the hilltop as System-significant. The Fiamma Eterna interprets it as a guardian. Both conclusions — avoid it, something important is here — are correct.'
  }

];

// ==========================================
// DISTRICTS
// ==========================================

var DISTRICTS = [

  {
    id: 'centro-storico',
    name: 'Centro Storico',
    subtitle: 'The Formal Core',
    chapter: 1,
    controlledBy: 'Ferro Patto (partial)',
    character: 'Baroque architecture, luxury retail, government buildings, museums, banks. The most formally imposing part of the city. The Centro empties of civilians faster than most districts — too exposed, too formal, too little cover.',
    collapseNotes: 'Government and financial actors attempt to hold it; they fail within days or are absorbed by whoever arrives with actual force. Financial district notarial offices contain documentation valuable to Matteo\'s operations.',
    keyLocations: 'Piazza Castello, Palazzo Reale, Via Roma arcades, Piazza San Carlo'
  },

  {
    id: 'quadrilatero',
    name: 'Quadrilatero Romano',
    subtitle: 'The Old Bones — Leonelli Home Territory',
    chapter: 1,
    controlledBy: 'Leonelli',
    character: 'The oldest surviving street grid in the city, laid over the Roman military camp. Narrow streets, medieval-scale blocks, dense residential. The neighborhood has gentrified but retains a compressed, layered quality — buildings sitting on Roman foundations, medieval walls visible in basements.',
    collapseNotes: 'Residents are more likely to organize locally and hold ground. The district does not empty — it tightens. Natural Leonelli home territory. The narrow streets favor people who know them.',
    keyLocations: 'Porta Palatina, Palazzo Valperga, Palazzo Scorza, underground cellars throughout'
  },

  {
    id: 'aurora-porta-palazzo',
    name: 'Aurora & Porta Palazzo',
    subtitle: 'The Market District',
    chapter: 1,
    controlledBy: 'Contested (Leonelli / Leone Selvaggio)',
    character: 'Porta Palazzo hosts the largest open-air market in Europe. Aurora is dense, multicultural, economically marginal, historically working class. The most ethnically and economically diverse district in the city.',
    collapseNotes: 'Does not collapse — reorganizes. Community structures and informal networks activate quickly. Functional food and goods distribution within days while other neighborhoods are still panicking. Black markets emerge here first.',
    keyLocations: 'Piazza della Repubblica / Porta Palazzo market, Balon flea market, Città della Salute e della Scienza hospital'
  },

  {
    id: 'barriera',
    name: 'Barriera di Milano',
    subtitle: 'The Northern Industrial Belt',
    chapter: 1,
    controlledBy: 'Independent / Contested',
    character: 'Working class, post-industrial, politically militant by historical tradition. Where FIAT and Lancia workers lived. Architecture is utilitarian — apartment blocks, small factories, repair shops. Deep collective memory of organized labor resistance.',
    collapseNotes: 'Organizes around existing community structures. May resist outside authority more than softer districts. Ruggiero is the most credible Leonelli representative for this population. The district\'s labor force and mechanical skills are operationally useful.',
    keyLocations: 'Industrial storage facilities, automotive repair infrastructure, community centers'
  },

  {
    id: 'crocetta',
    name: 'Crocetta & San Secondo',
    subtitle: 'The Bourgeois Interior',
    chapter: 1,
    controlledBy: 'Uncontested (early)',
    character: 'Most conventionally middle-class and upper-middle-class residential district. Broad streets, art nouveau apartments, good schools, private clinics. Professionals: doctors, pharmacists, engineers, accountants, lawyers.',
    collapseNotes: 'Slow to organize, prone to attempting normalcy for too long, then vulnerable. Private security will be hired; it will not be enough. The district will need protection from someone, and Cecilia will be ready to offer terms.',
    keyLocations: 'Private clinics and pharmacies, professional offices, Parco del Valentino'
  },

  {
    id: 'lingotto-mirafiori',
    name: 'Lingotto & Mirafiori',
    subtitle: 'The FIAT Spine',
    chapter: 1,
    controlledBy: 'Leonelli (target)',
    character: 'Southern Turin along the rail line. Lingotto contains the former FIAT factory — now partly converted but the original 1920s industrial structure remains, including the rooftop test track. Mirafiori is the larger active industrial zone.',
    collapseNotes: 'Commercial parts of Lingotto empty quickly. Mirafiori may see labor-organized resistance similar to Barriera di Milano. The Lingotto factory is one of the most defensible, symbolically loaded, and spatially versatile structures in the city.',
    keyLocations: 'Lingotto Factory (target HQ), Mirafiori industrial zone, rail corridor to Scalo Orbassano'
  },

  {
    id: 'collina',
    name: 'Collina Torinese',
    subtitle: 'The High Ground',
    chapter: 1,
    controlledBy: 'Fiamma Eterna (Superga)',
    character: 'East bank of the Po, rising steeply. Affluent residential with villas, gated properties, limited access points. Basilica di Superga at the summit. Wooded in places, commanding unobstructed views of the entire city.',
    collapseNotes: 'Wealthy residents attempt to shelter in place. Security proves insufficient over time. The hill becomes contested between whoever holds the city below and the cult that holds the summit. Controlling two or three road junctions controls all movement.',
    keyLocations: 'Basilica di Superga, villa estates, hilltop road network'
  },

  {
    id: 'valdocco',
    name: 'Valdocco & Borgata Vittoria',
    subtitle: 'The Frontier North',
    chapter: 1,
    controlledBy: 'Uncontested',
    character: 'Post-industrial transition zone north and northwest of Aurora. Sparse in places, dense in others.',
    collapseNotes: 'Fragments quickly. Does not consolidate without external force. Useful for safe houses, transit routes, and operations requiring distance from the center.',
    keyLocations: null
  }

];

// ==========================================
// BUSINESS FRONTS & ORGANIZATIONS
// ==========================================

var FRONTS = [

  {
    id: 'thorn-tribute',
    name: 'Thorn & Tribute Events S.r.l.',
    chapter: 1,
    faction: 'leonelli',
    type: 'Business Front',
    function: 'Hospitality and events management company.',
    preCollapse: 'Active contracts: catering and event services for Lingotto Fiere conference center; private dining supply for Centro Storico hotels; event staffing for venue clients across the city.',
    postCollapse: 'Justifies Leonelli presence at Lingotto from Day 1. Vehicle and staffing infrastructure transitions directly to operational use. Relationships with venue security personnel for recruitment or removal.'
  },

  {
    id: 'orbas-logistica',
    name: 'Orbas Logistica S.r.l.',
    chapter: 1,
    faction: 'leonelli',
    type: 'Business Front',
    function: 'Freight brokerage and logistics consulting.',
    preCollapse: 'Freight brokerage operating license tied to Scalo Orbassano corridor. Consulting relationships with Piedmontese logistics operators.',
    postCollapse: 'Paper basis for Leonelli claim to Scalo operations. Familiarity with facility layout, rail schedules, and key personnel. Thread to truck operators and freight handlers whose skills become essential.'
  },

  {
    id: 'studio-vascari',
    name: 'Studio Vascari — Consulenze e Mediazioni',
    chapter: 1,
    faction: 'leonelli',
    type: 'Business Front',
    function: 'Matteo\'s personal professional front — consulting, contract drafting, and discreet notarial-adjacent services.',
    preCollapse: 'Contract drafting and dispute mediation for clients who prefer discretion. Notarial-adjacent services. Document certification and archiving.',
    postCollapse: 'The most directly useful front post-collapse. Document archive, professional relationships with actual notaries and lawyers, and Matteo\'s reputation as a man who handles difficult matters quietly give the Leonellis a legal infrastructure no other criminal organization possesses.'
  }

];


// ============================================
// TEMPLATES — Copy to add new entries:
// ============================================

/*
--- FACTION ---
  {
    id: 'unique-id',
    name: 'Full Faction Name',
    shortName: 'Short Name',
    chapter: 1,
    color: '#hex',
    leader: 'Leader Name',
    territory: 'Territory description',
    type: 'Militia / Cult / Crime Family / etc.',
    threat: 'Threat level or role in story',
    summary: 'Full summary.',
    strengths: 'What they do well.',
    weaknesses: 'Where they fail.',
    philosophy: 'What they believe.',
    subgroups: [
      { name: 'Subgroup Name', desc: 'Description.', chapter: 1 }
    ]
  },

--- CREATURE ---
  {
    id: 'unique-id',
    name: 'Creature Name',
    tier: 'Tier 1 / Tier 2 / Tier 3',
    chapter: 1,
    category: 'scenario-entity',
    appearance: 'Physical description.',
    behavior: 'How it acts.',
    threat: 'Threat assessment.',
    notes: 'Narrative notes.'
  },

--- DISTRICT ---
  {
    id: 'unique-id',
    name: 'District Name',
    subtitle: 'Tagline',
    chapter: 1,
    controlledBy: 'Faction or Contested',
    character: 'Description of the area.',
    collapseNotes: 'How it behaves post-collapse.',
    keyLocations: 'Notable locations within or null'
  },

--- FRONT ---
  {
    id: 'unique-id',
    name: 'Business Name',
    chapter: 1,
    faction: 'leonelli',
    type: 'Business Front',
    function: 'What it does.',
    preCollapse: 'Pre-apocalypse operations.',
    postCollapse: 'Post-apocalypse utility.'
  },
*/
