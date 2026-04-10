// ============================================
// MAP LOCATION DATA — The Apocalypse Is a Business
// ============================================
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
    subtitle: 'Leonelli HQ',
    lat: 45.07465,
    lng: 7.67830,
    chapter: 1,
    faction: 'leonelli',
    category: 'headquarters',
    icon: 'hq',
    description: 'Leonelli operational headquarters. Via della Consolata, Quadrilatero Romano. Renovated Piedmontese Baroque palazzo with multiple entry points, reinforced interiors, adjacent controlled properties. Cellar network connects via nineteenth-century passage to neighboring buildings. Command center, secure meeting space, personnel housing. Chosen pre-collapse for operational resilience. Functions as a fortress from Day 1.',
    notes: 'Ground floor: legitimate wealth management front. Upper floors: executive nerve center and fortified apartments. Cellars: server farm and biometric vault. Rear passage connects to Turin\'s eighteenth-century catacombs.'
  },

  {
    id: 'palazzo-scorza',
    name: 'Palazzo Scorza',
    subtitle: 'Secondary Node / Contract Amplification Site',
    lat: 45.07500,
    lng: 7.67760,
    chapter: 1,
    faction: 'leonelli',
    category: 'safehouse',
    icon: 'node',
    description: 'Secondary Leonelli node, Quadrilatero Romano. Ground floor: Matteo\'s consulting office front. First floor: private members dining room for discreet negotiations. Upper floors: secure document archive, signal-blocked meeting room. Cellar connects to underground passage network.',
    notes: 'Nineteenth-century esoteric lodge history — the location where Matteo accidentally discovers the contract amplification mechanic. Most secure document archive in the organization. Some things are better done in a room that has absorbed three centuries of secret agreements.'
  },

  {
    id: 'lingotto',
    name: 'Lingotto Factory',
    subtitle: 'Target Primary HQ',
    lat: 45.03150,
    lng: 7.66650,
    chapter: 3,
    faction: 'leonelli',
    category: 'headquarters',
    icon: 'target',
    description: 'Former FIAT factory, southern Turin. Approximately 500 meters long, five stories, original spiral assembly ramps, rooftop oval test track. The Leonellis\' target for primary faction headquarters. Adjacent to the Scalo Orbassano rail axis. Defensible, symbolically loaded, spatially vast.',
    notes: 'Pre-collapse, the Leonelli front Thorn & Tribute Events held a catering contract here — the crew knows every entrance and security guard by name. Lower floors: logistics. Mid floors: operations and Analysis Division. Rooftop: Bianca\'s surveillance post with direct sightlines to the rail corridor.'
  },

  {
    id: 'scalo-orbassano',
    name: 'Scalo Orbassano',
    subtitle: 'The Logistics Prize',
    lat: 45.00500,
    lng: 7.59500,
    chapter: 3,
    faction: 'leonelli',
    category: 'strategic',
    icon: 'target',
    description: 'Italy\'s largest rail freight yard, southwest Turin. Intermodal container hub — rail to truck, vast open yards, warehouse facilities, vehicle depot, fueling infrastructure. Primary territorial objective for the Leonellis. Whoever holds it controls inbound goods flow to the city.',
    notes: 'Pre-collapse, Leonelli shell company Orbas Logistica S.r.l. operated a freight brokerage license from the corridor. In the absence of functioning courts, a thin legal instrument held by people with actual force becomes binding.'
  },

  // ==========================================
  // FERRO PATTO LOCATIONS
  // ==========================================

  {
    id: 'palazzo-reale',
    name: 'Palazzo Reale',
    subtitle: 'Ferro Patto HQ — Claimed',
    lat: 45.07250,
    lng: 7.68650,
    chapter: 3,
    faction: 'ferro-patto',
    category: 'headquarters',
    icon: 'hq',
    description: 'Former royal palace of the Savoy dynasty, adjacent to Piazza Castello. Vast interior space with historical archives, the royal armory, formal reception rooms. Ferro Patto claimed it within 48 hours — a choice that reveals their understanding of power as symbolism rather than infrastructure.',
    notes: 'The building is defensible and legible. The logistics corridor is neither. Ferro Patto chose the wrong prize. Archives contain civil records, notarial documents, and historical maps valuable to Matteo.'
  },

  // ==========================================
  // FIAMMA ETERNA LOCATIONS
  // ==========================================

  {
    id: 'superga',
    name: 'Basilica di Superga',
    subtitle: 'Fiamma Eterna HQ / Highest Amplification Node',
    lat: 45.08050,
    lng: 7.76800,
    chapter: 3,
    faction: 'fiamma-eterna',
    category: 'headquarters',
    icon: 'hq',
    description: 'Eighteenth-century baroque basilica at the summit of Collina Torinese, 672m above sea level. Contains the crypt of seventeen Savoy monarchs. Also the site of the 1949 Superga air disaster. The Fiamma Eterna established here within 48 hours, interpreting the Apex\'s appearance as divine endorsement.',
    notes: 'The highest contract amplification node in the city. Commands unobstructed sightlines over the entire city. Whoever holds Superga holds the most powerful oath-binding site in Turin. The cult holds it without knowing what it is mechanically.'
  },

  // ==========================================
  // CONTESTED / NEUTRAL LOCATIONS
  // ==========================================

  {
    id: 'porta-palazzo',
    name: 'Porta Palazzo Market',
    subtitle: 'Primary Civilian Resource Node',
    lat: 45.07700,
    lng: 7.68500,
    chapter: 1,
    faction: 'contested',
    category: 'strategic',
    icon: 'market',
    description: 'The largest open-air market in Europe, Piazza della Repubblica. Post-collapse, transforms into the city\'s primary barter economy, System drop exchange, rumor market, and civilian recruitment ground. Whoever controls its security controls civilian goodwill and information flow.',
    notes: 'Dario\'s natural domain. The Hero Coalition will want to be seen protecting it; the Leonellis will want to actually control it. The distinction between visible protection and actual control is one of the story\'s recurring structural tensions.'
  },

  {
    id: 'mole-antonelliana',
    name: 'Mole Antonelliana',
    subtitle: 'City Symbol — Contested',
    lat: 45.06900,
    lng: 7.69300,
    chapter: 1,
    faction: 'contested',
    category: 'landmark',
    icon: 'landmark',
    description: 'The iconic 167m spire defining Turin\'s skyline. Originally intended as a synagogue, completed 1889, now a film museum. Too exposed and symbolically loaded to hold quietly.',
    notes: 'Whoever lights the Mole or broadcasts from it has made a statement to the entire city. Cecilia\'s calculated position: let them have it. The Mole is theater. She will own the logistics infrastructure while they manage optics.'
  },

  {
    id: 'piazza-castello',
    name: 'Piazza Castello',
    subtitle: 'Symbolic Center of Civic Power',
    lat: 45.07100,
    lng: 7.68600,
    chapter: 1,
    faction: 'contested',
    category: 'landmark',
    icon: 'landmark',
    description: 'Symbolic center of civic power. Royal palace complex, Palazzo Madama, the armory. First flag-plant for any faction claiming legitimacy. The Centro empties of civilians faster than most districts — too exposed, too formal, too little cover.',
    notes: null
  },

  {
    id: 'porta-palatina',
    name: 'Porta Palatina',
    subtitle: 'Roman Gate — Defensible Position',
    lat: 45.07550,
    lng: 7.68350,
    chapter: 1,
    faction: 'leonelli',
    category: 'landmark',
    icon: 'node',
    description: 'Roman gate with two surviving towers. Structurally defensible, historically loaded. Northern edge of the Quadrilatero Romano, adjacent to Leonelli home territory.',
    notes: null
  },

  {
    id: 'citta-salute',
    name: 'Città della Salute e della Scienza',
    subtitle: 'Primary Hospital Complex',
    lat: 45.06300,
    lng: 7.67200,
    chapter: 1,
    faction: 'contested',
    category: 'infrastructure',
    icon: 'infrastructure',
    description: 'Turin\'s primary hospital complex. Immediate priority target for medical supply and medical personnel. Adjacent to Aurora district.',
    notes: 'The Hero Coalition will attempt to hold this symbolically; the Leonellis will want influence over who gets treated and under what terms.'
  },

  {
    id: 'porta-nuova',
    name: 'Porta Nuova Station',
    subtitle: 'Main Rail Terminal',
    lat: 45.06180,
    lng: 7.67810,
    chapter: 1,
    faction: 'contested',
    category: 'infrastructure',
    icon: 'infrastructure',
    description: 'Turin\'s older, larger passenger terminal. Resource node and population congregation point post-collapse. Rail connections north to Milan, south to Genoa, west toward France.',
    notes: 'In a collapse, functional rail is the most efficient long-distance supply and movement mechanism.'
  },

  {
    id: 'porta-susa',
    name: 'Porta Susa Station',
    subtitle: 'High-Speed Rail Hub',
    lat: 45.07200,
    lng: 7.66700,
    chapter: 1,
    faction: 'contested',
    category: 'infrastructure',
    icon: 'infrastructure',
    description: 'Modern high-speed rail hub. Connects to Milan, France via Frejus, and the broader Italian network. Becomes a resource node and population gathering point immediately post-collapse.',
    notes: null
  },

  {
    id: 'parco-valentino',
    name: 'Parco del Valentino',
    subtitle: 'Refugee Gathering Point',
    lat: 45.05800,
    lng: 7.68700,
    chapter: 1,
    faction: 'contested',
    category: 'landmark',
    icon: 'landmark',
    description: 'Turin\'s main park along the Po river. In collapse conditions becomes a refugee gathering point and contested open space. Borders the Crocetta and San Secondo districts.',
    notes: null
  },

  // ==========================================
  // SCENARIO LOCATIONS
  // ==========================================

  {
    id: 'night-first-measure-apex',
    name: 'Apex Manifestation — Superga',
    subtitle: 'Night of First Measure',
    lat: 45.08100,
    lng: 7.76900,
    chapter: 7,
    faction: 'system',
    category: 'scenario',
    icon: 'scenario',
    description: 'The Apex — a Tier 3 Scenario entity — appeared at the highest-value System node in the zone during the Night of First Measure. Not defeatable by any Book One faction. Correct response: avoidance and observation.',
    notes: 'The Fiamma Eterna interprets it as a guardian. Both conclusions — avoid it, something important is here — are correct. Marks Superga as System-significant.'
  }

];

// ============================================
// MARKER STYLE CONFIG
// ============================================
var MARKER_STYLES = {
  'leonelli':       { color: '#c9a84c', label: 'Leonelli' },
  'ferro-patto':    { color: '#6a8caf', label: 'Ferro Patto' },
  'fiamma-eterna':  { color: '#d4763a', label: 'Fiamma Eterna' },
  'leone-selvaggio':{ color: '#b33a3a', label: 'Leone Selvaggio' },
  'tredicesima':    { color: '#5a7a5a', label: 'Tredicesima' },
  'municipio':      { color: '#7a7a8a', label: 'Municipio' },
  'compagnia-acque':{ color: '#4a7a9a', label: 'Compagnia Acque' },
  'corporate-bloc': { color: '#8a7a6a', label: 'Corporate Bloc' },
  'contested':      { color: '#888888', label: 'Contested' },
  'system':         { color: '#e04040', label: 'System Event' },
  'civilian':       { color: '#6a6a60', label: 'Civilian' }
};

var CATEGORY_LABELS = {
  'headquarters':   'Headquarters',
  'safehouse':      'Safe House / Node',
  'strategic':      'Strategic Target',
  'landmark':       'Landmark',
  'infrastructure': 'Infrastructure',
  'scenario':       'Scenario Event'
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
