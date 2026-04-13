// ============================================
// MAP LOCATION DATA — The Apocalypse Is a Business
// ============================================
// SCOPE: Only locations that appear as scenes or are
// directly referenced in the current chapter drafts.
// Future locations will be added as chapters introduce them.
//
// HOW TO ADD A NEW LOCATION:
// 1. Copy the template block at the bottom of this file
// 2. Fill in the fields (use Google Maps to grab lat/lng)
// 3. Add it to the MAP_LOCATIONS array
// 4. The map renders it automatically
//
// HOW TO GET COORDINATES:
// Right-click any spot in Google Maps → the lat,lng appears at top of menu.
// ============================================

var MAP_LOCATIONS = [

  // ==========================================
  // LEONELLI LOCATIONS
  // ==========================================

  {
    id: 'palazzo-valperga',
    name: 'Palazzo Valperga',
    subtitle: 'Leonelli HQ — Day 1 Base',
    lat: 45.074702,
    lng: 7.679325,
    chapter: 1,
    faction: 'leonelli',
    category: 'headquarters',
    icon: 'hq',
    description: 'Leonelli operational headquarters. Via della Consolata, Quadrilatero Romano. A four-story late baroque palazzo with multiple entry points, reinforced interiors, and adjacent controlled properties. Pre-collapse, ground floor housed a private consulting office; first floor a members-only dining club. Upper floors: secure offices, document archive, signal-blocked meeting room. Two cellar levels.',
    notes: 'Chosen pre-collapse for operational resilience. By Day 2, the private dining room has become a war room. By Day 4, the building houses the Core Five, the System Analysis Division, sheltered civilians, and a growing roster of recruits. The north gate is the site of the first direct combat with Ferro Patto operatives.'
  },

  // ==========================================
  // RECRUITMENT & ENCOUNTER LOCATIONS
  // ==========================================

  {
    id: 'luca-apartment',
    name: 'Luca Terranova\'s Apartment',
    subtitle: 'Recruitment Site — Archimede',
    lat: 45.091222,
    lng: 7.661816,
    chapter: 5,
    faction: 'leonelli',
    category: 'safehouse',
    icon: 'node',
    description: 'A four-story post-war concrete building in San Donato, near Parco Dora. Ground floor converted into a small accounting practice (Studio Commerciale Ferretti). Luca had been monitoring the street from the third floor since the System arrived, using the stairwell landing for sightlines rather than his apartment window.',
    notes: 'Matteo entered twenty minutes before Cecilia and waited on the fourth floor with the tighter draft of the contract. Bianca had placed a watcher on at an adjacent building. Cecilia read the curtain gap from the street and knew Luca\'s position before she entered.'
  },

  {
    id: 'ferrero-building',
    name: 'Ferrero Building',
    subtitle: 'Recruitment Site — RaptorSix',
    lat: 45.068745,
    lng: 7.721989,
    chapter: 9,
    faction: 'leonelli',
    category: 'safehouse',
    icon: 'node',
    description: 'A residential building on Corso Casale, east bank of the Po. Ermilo Ferrero (RaptorSix) and his sister were barricaded on the top floor during the Night of First Measure. Four armed men from a rival group had attempted to take them hours earlier; two neighbors were killed on the second floor. Cecilia\'s team cleared the building, interrogated a survivor, and extracted the siblings.',
    notes: 'The survivor named Marinelli as the group\'s backer. The dead analyst Davide Lanza\'s notebook contained Ferrero\'s address with the note "top floor / use rear entrance" — both groups were working from the same list.'
  },

  {
    id: 'lanza-shop',
    name: 'Davide Lanza\'s Shop',
    subtitle: 'Analyst — Found Dead',
    lat: 45.064779,
    lng: 7.702923,
    chapter: 9,
    faction: 'contested',
    category: 'scenario',
    icon: 'scenario',
    description: 'A ground-floor studio behind a computer repair shop on Corso Casale. Cecilia\'s team found Davide Lanza — a market analyst who had built MMO auction tools still cited years later — shot dead behind his counter during the Night of First Measure. His equipment had been stripped. On the wall: "SAFE ZONE" with an arrow and a phone number.',
    notes: 'The first confirmation that a rival group was collecting System-literate talent and killing those who resisted. Lanza\'s notebook contained addresses for other targets, including Ermilo Ferrero.'
  },

  // ==========================================
  // SCENARIO & COMBAT LOCATIONS
  // ==========================================

  {
    id: 'via-po-checkpoint',
    name: 'Via Po — Police Checkpoint',
    subtitle: 'Night of First Measure',
    lat: 45.063888,
    lng: 7.696850,
    chapter: 8,
    faction: 'system',
    category: 'scenario',
    icon: 'scenario',
    description: 'During the Night of First Measure, Cecilia\'s team encountered a police checkpoint on Via Po: two patrol cars, one fire truck, four officers behind portable barriers, five trapped civilian vehicles. Three creatures attacked from beneath the cars. Ruggiero engaged hand-to-hand. One officer was killed. Cecilia ordered the barriers moved and proceeded.',
    notes: 'First direct evidence that conventional law enforcement was mechanically outmatched by System entities. When the team returned via the same route an hour later, the checkpoint was gone — one car burned to its frame, the fire truck abandoned with doors open.'
  },

  {
    id: 'corso-francia-military',
    name: 'Corso Francia — Military Position',
    subtitle: 'Abandoned / Salvaged Day 4',
    lat: 45.075971,
    lng: 7.652763,
    chapter: 12,
    faction: 'contested',
    category: 'scenario',
    icon: 'scenario',
    description: 'On Day 4, Cecilia\'s team found two armored military vehicles abandoned in the center of Corso Francia, doors open, engines dead. Bullet holes clustered in patterns indicating the soldiers hadn\'t expected the angles. Blood on the asphalt, no bodies. Cecilia recovered a military map marked with safe routes and fallback positions.',
    notes: 'Nearby, the team encountered Paride Ricci — a former Polizia supervisor who had kept a group of civilians alive in a basement through the Night of First Measure. He and his people joined the Leonellis.'
  },

  {
    id: 'palazzo-gate-battle',
    name: 'North Gate — Palazzo Valperga',
    subtitle: 'Ferro Patto Engagement',
    lat: 45.075162,
    lng: 7.679063,
    chapter: 10,
    faction: 'leonelli',
    category: 'scenario',
    icon: 'scenario',
    description: 'During the Night of First Measure, Bianca\'s north team returned to Palazzo Valperga under fire — pursued by Ferro Patto operatives and a creature. The attackers included individuals with active System abilities: one erected shimmering barriers, another threw concussive force blasts, a third had perception through cover. The roof team engaged with flood lamps and fire. A creature was caught and killed in the closing gate.',
    notes: 'First direct combat between the Leonellis and players with active System abilities. The team brought back Giulia Conti (class: Artificer). The dead creature hung in the gate until morning.'
  },

  // ==========================================
  // CITY LANDMARKS — Referenced in Chapters
  // ==========================================

  {
    id: 'piazza-castello',
    name: 'Piazza Castello',
    subtitle: 'Military Presence — Day 2+',
    lat: 45.071543,
    lng: 7.685404,
    chapter: 2,
    faction: 'contested',
    category: 'landmark',
    icon: 'landmark',
    description: 'Symbolic center of civic power. Military vehicles observed parked across the south end from Day 2 onward. Nobody stopping anyone, but slowing movement. Dario scouted alternate routes around it on the morning of Day 2.',
    notes: null
  },

  {
    id: 'porta-palazzo',
    name: 'Porta Palazzo Market',
    subtitle: 'Primary Civilian Resource Node',
    lat: 45.076735,
    lng: 7.683604,
    chapter: 14,
    faction: 'contested',
    category: 'strategic',
    icon: 'market',
    description: 'The largest open-air market in Europe, Piazza della Repubblica. By Day 4, stall count had dropped by half. System drops from the Night of First Measure were already circulating as trade goods. Some vendors had stopped accepting euros. Three unidentified Players were mapping the market\'s vulnerabilities. The Civil Security Coalition posted recruitment bulletins here.',
    notes: 'Dario reconnected with Fatima Hassan, a longtime Aurora contact. She asked whether the Leonellis were "still in business." He confirmed. The market\'s social physics — who shows up, who protects it, who sets prices — will determine civilian allegiance across the northern districts.'
  },

  {
    id: 'corso-regina-margherita',
    name: 'Corso Regina Margherita',
    subtitle: 'Military Convoy Route',
    lat: 45.087354,
    lng: 7.651502,
    chapter: 2,
    faction: 'contested',
    category: 'infrastructure',
    icon: 'infrastructure',
    description: 'A major east-west boulevard along the northern edge of the city center. On Day 1 at approximately 5 PM, a convoy of military vehicles — open-topped APCs with decades-old Soviet-style gear and anomalous plate numbers — pressed southwest into the metropolitan zone.',
    notes: 'The military\'s arrival didn\'t bring anyone back inside. Quite the opposite.'
  },

  {
    id: 'piazza-vittorio',
    name: 'Piazza Vittorio Veneto',
    subtitle: 'Class Evangelist Sighting',
    lat: 45.064837,
    lng: 7.695375,
    chapter: 2,
    faction: 'contested',
    category: 'landmark',
    icon: 'landmark',
    description: 'Turin\'s largest piazza, opening toward the Po. On the first night, Dario observed a man standing on a park bench near the piazza, preaching about levels, classes, and quests to a growing crowd. Two listeners began glowing — hands, mostly. "Like light, but not from a bulb."',
    notes: 'The man said anyone who didn\'t choose a class would get a bad one. That it was a test. Dario left before anything else happened. He wasn\'t wrong about that part.'
  },

  {
    id: 'via-garibaldi',
    name: 'Via Garibaldi',
    subtitle: 'Looted Corridor — Day 2',
    lat: 45.07080,
    lng: 7.67550,
    chapter: 4,
    faction: 'contested',
    category: 'landmark',
    icon: 'landmark',
    description: 'Turin\'s main pedestrian street. By Day 2, shops were mostly shuttered. A tabacchi had been forced open, its grate bent back. Pharmacies showed the same selective logic: obvious goods taken, specialist medicines left by people who couldn\'t read the labels. Blood pressure cuffs and reading glasses remained on the floor.',
    notes: 'Cecilia noted: "We don\'t have anyone with clinical training. That\'s going to be expensive before long."'
  }

];

// ============================================
// MARKER STYLE CONFIG
// ============================================
var MARKER_STYLES = {
  'leonelli':       { color: '#c9a84c', label: 'Leonelli' },
  'ferro-patto':    { color: '#6a8caf', label: 'Ferro Patto' },
  'contested':      { color: '#888888', label: 'Contested' },
  'system':         { color: '#e04040', label: 'System Event' }
};

var CATEGORY_LABELS = {
  'headquarters':   'Headquarters',
  'safehouse':      'Recruitment Site',
  'strategic':      'Strategic Target',
  'landmark':       'Landmark',
  'infrastructure': 'Infrastructure',
  'scenario':       'Scenario Event'
};

// ============================================
// NEIGHBORHOOD CONFIG
// ============================================
// Colors and narrative notes for each quartiere.
// The key should match the neighborhood name exactly as it
// appears in the GeoJSON file's properties (check after converting).
//
// After you convert the shapefile, open quartieri.geojson in a
// text editor and look for the property name used for each
// neighborhood (likely "NOME_QU" or "NOME" or "QUARTIERE").
// Set HOOD_NAME_PROPERTY below to match that key.
//
// HOW TO ADD NOTES FOR A NEW NEIGHBORHOOD:
// 1. Find the neighborhood name in the GeoJSON
// 2. Add a matching entry to HOOD_CONFIG below
// ============================================

var HOOD_NAME_PROPERTY = 'DENOM';  // ← Change this to match your GeoJSON property name

var HOOD_CONFIG = {
  // The keys below are guesses based on common Turin quartiere names.
  // After you convert the shapefile, check the actual property values
  // and update these keys to match exactly (case-sensitive).

  'CENTRO': {
    color: '#7a7a8a',
    notes: 'Symbolic civic center. Piazza Castello, Via Roma, Palazzo Reale. Military presence from Day 2. High visibility, low defensibility.'
  },
  'QUADRILATERO ROMANO': {
    color: '#c9a84c',
    notes: 'Leonelli home territory. Roman-era street grid, narrow alleys, baroque palazzi. Palazzo Valperga sits at its western edge.'
  },
  'AURORA': {
    color: '#d4763a',
    notes: 'Working-class district north of the Quadrilatero. Dense immigrant population, informal economy, strong community networks. Porta Palazzo market sits at its southern edge. Dario\'s operational territory.'
  },
  'BARRIERA DI MILANO': {
    color: '#b33a3a',
    notes: 'Northeast district beyond Aurora. Industrial heritage, high population density. Contested ground — no faction has claimed it by Day 4.'
  },
  'SAN DONATO': {
    color: '#6a8caf',
    notes: 'Northwestern residential district. Post-war housing stock, Parco Dora industrial park. Luca Terranova\'s apartment is here.'
  },
  'CROCETTA': {
    color: '#5a7a5a',
    notes: 'Affluent residential district south of the center. Politecnico di Torino campus. Bourgeois, orderly, and entirely unprepared for collapse conditions.'
  },
  'VANCHIGLIA': {
    color: '#4a7a9a',
    notes: 'East of center, bordering the Po. University area, younger population. Piazza Vittorio Veneto is at its southern edge.'
  },
  'SAN SALVARIO': {
    color: '#8a7a6a',
    notes: 'South of Porta Nuova station. Dense, diverse, commercially active. Strong candidate for early civilian self-organization.'
  },
  'BORGO PO': {
    color: '#6a6a60',
    notes: 'East bank of the Po. Residential, hilly, affluent. Corso Casale runs through it — site of the Lanza shop and Ferrero building.'
  },
  'CENISIA': {
    color: '#887766',
    notes: 'Western residential district. Corso Francia runs through — site of the abandoned military vehicles on Day 4.'
  },
  'SAN PAOLO': {
    color: '#7a6655',
    notes: 'Southwest residential. Working-class, dense, practical. Good candidate for early Leonelli outreach.'
  }

  // Add more as needed. Neighborhoods not listed here will still
  // render with a default gray color — only the notes will be missing.
};

// Default style for neighborhoods not in HOOD_CONFIG
var HOOD_DEFAULT = {
  color: '#555555',
  notes: null
};

// ============================================
// TEMPLATE — Copy this block to add a new location:
// ============================================
/*
  {
    id: 'unique-id',
    name: 'Location Name',
    subtitle: 'Short descriptor',
    lat: 45.0000,                // latitude — right-click Google Maps to get this
    lng: 7.0000,                 // longitude
    chapter: 1,                  // first chapter this location is relevant
    faction: 'leonelli',         // must match a key in MARKER_STYLES
    category: 'headquarters',    // must match a key in CATEGORY_LABELS
    icon: 'hq',                  // icon type: hq, node, target, market, landmark, infrastructure, scenario
    description: 'Full description.',
    notes: 'Additional narrative notes or null.'
  },
*/
