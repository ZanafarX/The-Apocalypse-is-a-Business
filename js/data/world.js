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
      { name: 'System Analysis Division', desc: 'Internal unit of coerced, indebted, and recruited elite gamers. Cells: Optimization, Scenario Desk, Exploit Lab, Enemy Modeling, Resource Routing. Permanently tense — analysts are indispensable, humiliated, and dangerous.', chapter: 30 }
    ]
  },

  {
    id: 'ferro-patto',
    name: 'Ferro Patto (Iron Pact)',
    shortName: 'Ferro Patto',
    chapter: 99,
    color: '#6a8caf',
    leader: 'Comandante Ermes Di Falco',
    territory: 'Centro Storico, Financial District, Palazzo Reale',
    type: 'Militia',
    threat: 'Book Three Antagonist',
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
    chapter: 44,
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
    leader: 'Capitano Vitale Leto',
    territory: 'Centro Storico station',
    type: 'Institutional — Law Enforcement',
    threat: 'Institutional Variable',
    summary: 'A single Carabinieri unit with higher-than-average Player-class personnel because its commanding officer privately encouraged class selection regardless of official guidance. Still operates as law enforcement. Still wears the uniform. Increasingly divergent from NPC colleagues in capability.',
    strengths: 'Institutional legitimacy. Genuine tactical training. Player-class personnel measurably more effective than NPC counterparts. Leto\'s independent judgment and methodical analysis.',
    weaknesses: 'Small unit. Constrained by institutional framework that may no longer serve its purpose. Internal tension between Player and NPC personnel.',
    philosophy: 'The gap between the institution he serves and the reality he operates in grows wider every day. The negotiation between opposition and arrangement is ongoing.',
    subgroups: []
  },

  {
    id: 'municipio',
    name: 'Municipio Coalition',
    shortName: 'Municipio',
    chapter: 38,
    color: '#7a7a8a',
    leader: 'Assessore Armano Belmonte',
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
    threat: 'Primary Antagonist Book Two',
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
    id: 'river-prowler',
    name: 'River Prowler (Predatore Fluviale)',
    tier: 'Tier 1',
    chapter: 4,
    category: 'scenario-entity',
    appearance: 'Roughly human-scale. Long, low-slung bodies covered in an oily, black-and-blue chitinous carapace.',
    behavior: 'Pack predators deployed city-wide during the Night of First Measure. Hunt isolated individuals and stragglers. Avoid coordinated resistance. Retreat from organized response.',
    threat: 'Their primary attack is a high-velocity, close-quarters lunge that deals kinetic and piercing damage',
    notes: 'First creatures encountered. Establish the baseline threat level and the cost of disorganization.'
  },
  
  {
    id: 'cobblestone-skitterer',
    name: 'Cobblestone Skitterer (Ragno dei Sanpietrini)',
    tier: 'Tier 1',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Small, heavily mutated arachnids whose carapaces perfectly mimic the color and rough texture of Turin\'s traditional sanpietrini cobblestones.',
    behavior: 'Infest the narrow streets of the Quadrilatero and the Centro Storico. Individually trivial, but operate via highly coordinated pack-aggro. A single ignored bite can cascade into full paralysis within minutes.',
    threat: 'Stacking [Numbing Toxin] debuff drains agility and stamina. Trivial in isolation; potentially fatal through cumulative neglect.',
    notes: null
  },

  {
    id: 'slag-crawler',
    name: 'Slag Crawler (Strisciante di Scorie)',
    tier: 'Tier 1',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Heavily mutated insectoid scavengers that incorporate consumed metals, plastics, and concrete directly into their outer shells.',
    behavior: 'Drawn instinctively to Turin\'s industrial districts — Lingotto and Mirafiori. Their corrosive mandibles chew through raw industrial materials, which their biology then grafts as armor.',
    threat: 'Physical defense scales dynamically with recent consumption. A Slag Crawler fed on automotive steel is functionally immune to low-level slashing and kinetic attacks. Highly vulnerable to acid and high-tier fire.',
    notes: null
  },

  {
    id: 'fog-weaver',
    name: 'Fog Weaver (Tessitore di Nebbia)',
    tier: 'Tier 1',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Tall, spectral, elongated entities that drift over boulevards and riverbanks during early morning hours.',
    behavior: 'Active in Turin\'s characteristic autumn fog. Generate localized mana-infused fog banks that limit visual perception and dampen auditory signals. Rarely engage in melee — prefer to exhaust prey.',
    threat: 'Persistent [Disorientation] debuff within their aura. Mana-draining tendrils slowly exhaust trapped targets until collapse. Dangerous for their attrition value more than raw damage.',
    notes: null
  },

  {
    id: 'echo-hound',
    name: 'Echo Hound (Segugio dell\'Eco)',
    tier: 'Tier 1',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Hairless, heavily muscled quadrupeds with pale blind eyes and massive bat-like auditory canals.',
    behavior: 'Roam the wider avenues — Corso Regina Margherita — in packs of three to five. Hunt via System-mana tracking and echolocation. Operate as the System\'s mid-tier pursuit predators.',
    threat: '[Resonating Howl] locks onto a target and immediately alerts all hostile entities within a two-block radius. The howl also applies a brief low-level sonic stun against under-leveled Players. Danger multiplies rapidly with proximity to other enemy types.',
    notes: null
  },

  {
    id: 'catacomb-ghoul',
    name: 'Catacomb Ghoul (Divoratore delle Catacombe)',
    tier: 'Tier 2',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Gaunt, subterranean horrors adapted to Turin\'s extensive network of historical underground tunnels, cellars, and crypts.',
    behavior: 'Spawn exclusively in darkness. Violently photophobic — will not pursue prey onto the surface during daylight. Highly aggressive to anyone entering the cellars, swarming immediately.',
    threat: 'Claw attacks apply [Rot], which nullifies natural healing entirely and reduces healing potion and Mender skill effectiveness by 75%. The underground is categorically more dangerous than street-level as a result.',
    notes: null
  },

  {
    id: 'territorial-sentinel',
    name: 'Territorial Sentinel (Sentinella di Nodo)',
    tier: 'Tier 3',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Massive, heavily armored monolithic entities that incorporate local architecture into their bodies — wrought-iron fencing, streetlamps formed into halos of spikes.',
    behavior: 'Do not roam. Spawn specifically to guard high-value System nodes, territorial claim points, and high-tier supply caches. Cannot be bypassed by stealth; the System requires destruction to claim the anchored territory.',
    threat: 'Pure stat-check. Tremendous AoE kinetic attacks, shockwaves, and immense health pools. Requires a coordinated raid group. Not a threat to be absorbed into operational planning — a gate.',
    notes: null
  },

  {
    id: 'ironline-centipede',
    name: 'Ironline Centipede (Scolopendra dei Binari)',
    tier: 'Tier 2',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Massive, multi-segmented insectoids with dense carapaces that mimic the color and texture of rusted industrial steel.',
    behavior: 'Have claimed Turin\'s abandoned tram lines and rail corridors — Porta Nuova and Porta Susa. Use the metal rails to accelerate to lethal speeds. Highly predictable in pathing.',
    threat: 'Friction during movement generates [Electrified Carapace], discharging shock damage against melee attackers. High linear mobility makes them lethal in their corridors. Pathing predictability makes them susceptible to coordinated traps.',
    notes: null
  },

  {
    id: 'galleria-harpy',
    name: 'Galleria Harpy (Arpia di Vetro)',
    tier: 'Tier 1',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Vicious avian predators with feathers rewritten by the System into razor-sharp translucent crystalline structures. Nest in the upper rafters of Turin\'s glass-roofed 19th-century arcades.',
    behavior: 'Attack by dive-bombing from skylights. Deliberately shatter glass canopies and windows during engagements as a primary tactic, not a side effect.',
    threat: '[Shrapnel Rain] AoE from shattered glass creates area denial. Crystalline feathers inflict [Laceration], a stacking bleed debuff. Environmental damage potential makes enclosed arcade spaces high-risk.',
    notes: null
  },

  {
    id: 'siphon-fiend',
    name: 'Siphon Fiend (Demone Sottrattore)',
    tier: 'Tier 1',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Bulbous, leech-like aberrations roughly the size of large dogs.',
    behavior: 'Congregate around stalled traffic and abandoned petrol stations on the city\'s outer avenues. Feed indiscriminately on petrochemicals, battery acid, and biological fluids.',
    threat: 'Spit viscous flammable bile to slow targets. Igniting a Siphon Fiend — by elemental magic or environmental hazard — triggers catastrophic [Combustion], detonating violently across a wide blast radius. A trap or a mistake depending on who\'s in range.',
    notes: null
  },

  {
    id: 'piazza-shade',
    name: 'Piazza Shade (Ombra della Piazza)',
    tier: 'Tier 2',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Drifting, silhouette-like horrors that haunt Turin\'s vast empty squares — Piazza Statuto, Piazza Vittorio Veneto — exclusively at night.',
    behavior: 'The System has weaponized Turin\'s centuries-old reputation as a European capital of esoteric energy. Incorporeal and passive in daylight hours; territorial and aggressive after dark.',
    threat: 'Exceptionally high physical evasion. Functionally immune to standard ballistics. Attacks bypass physical armor, applying [Soul Drain] — a direct siphon of Mana and Stamina. Require System-infused weaponry or elemental magic to reliably kill.',
    notes: null
  },

  {
    id: 'briar-stag',
    name: 'Briar Stag (Cervo di Rovo)',
    tier: 'Tier 1',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Large mutated deer whose skeletal structures have aggressively fused with mana-infused brambles and thorn vines.',
    behavior: 'Found predominantly on the Collina Torinese and the roads leading to Superga. Highly territorial.',
    threat: 'Primary threat is a heavy kinetic charge. On impact, vines slough from the antlers and apply [Rooted], pinning the target and leaving them highly vulnerable to follow-up strikes.',
    notes: null
  },

  {
    id: 'cornice-lurker',
    name: 'Cornice Lurker (Acquattato dei Cornicioni)',
    tier: 'Tier 2',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Winged, stony entities that cling to the Baroque facades, gutters, and balconies of the Centro Storico. During daylight, enter a state of petrification and flawlessly mimic architectural grotesques and statues.',
    behavior: 'Active at night or when triggered. Exploit extreme vertical mobility to dive from rooftops.',
    threat: '[Crushing Grip] grapple attack lifts targets off the ground and drops them. Direct damage is moderate; resulting fall damage onto cobblestones is frequently fatal. Daytime camouflage makes them nearly undetectable until engaged.',
    notes: null
  },

  {
    id: 'riverbank-dredge',
    name: 'Riverbank Dredge (Dragatore Fluviale)',
    tier: 'Tier 2',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Hulking masses of dense muscle and river detritus. Larger and slower than the River Prowler.',
    behavior: 'Lurk in the shallow mudbanks and industrial runoff zones of the Po and Dora rivers.',
    threat: 'Massive health pools. Ranged attacks hurl concrete-dense clumps of hardened mud. Hits apply [Heavy Burden], drastically reducing Player movement speed and temporarily degrading low-tier armor durability.',
    notes: null
  },

  {
    id: 'ossuary-amalgam',
    name: 'Ossuary Amalgam (Amalgama dell\'Ossario)',
    tier: 'Tier 3',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Grotesque, shifting conglomerates of animated bone, wrought-iron grave fencing, and shattered tomb masonry bound together by thick System mana.',
    behavior: 'Concentrated in Turin\'s Monumental Cemetery. Passively absorbs nearby smaller undead and fresh corpses. Localized boss-tier threat.',
    threat: '[Macabre Regeneration] heals by absorbing nearby remains, demanding high-burst damage to outpace it. Delivers devastating [Cleave] AoE attacks using chunks of marble headstones. Requires burst-damage combinations rather than sustained attrition.',
    notes: null
  },

  {
    id: 'valentino-stalker',
    name: 'Valentino Stalker (Predatore del Valentino)',
    tier: 'Tier 2',
    chapter: 99,
    category: 'scenario-entity',
    appearance: 'Sleek, heavily mutated apex felines with dark fur altered by the System to passively bend ambient light, creating a natural shimmering cloaking effect.',
    behavior: 'Have turned Parco del Valentino into a lethal hunting ground. Passive cloaking is always active within their territory.',
    threat: 'Passively apply [Stalked] to any Player entering their territory, significantly increasing critical strike chance on the opening attack. Bianca Severa has spent considerable time observing them to reverse-engineer their cloaking mechanics for the Watcher class.',
    notes: null
  },

  {
    id: 'razorwing-flock',
    name: 'Razor-wing Flock (Stormo Tagliente)',
    tier: 'Tier 1',
    chapter: 34,
    category: 'scenario-entity',
    appearance: 'Turin\'s city pigeons, brutally rewritten by Initialization. Wings calcified and hardened into jagged metallic edges. Roost on statues, traffic lights, and window ledges across the entire city.',
    behavior: 'Individually trivial but aggro in flocks of twenty to fifty. Ubiquitous urban presence — more environmental pressure than discrete encounter.',
    threat: 'Swarm behavior creates a localized [Vortex of Blades] AoE. Highly lethal to Unawakened civilians or low-level Players caught in the open without overhead cover. Functions as a constant ambient hazard forcing shelter discipline.',
    notes: null
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
