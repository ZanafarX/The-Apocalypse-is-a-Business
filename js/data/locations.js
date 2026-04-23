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
    lat: 45.067751,
    lng: 7.6806806,
    chapter: 1,
    faction: 'leonelli',
    category: 'headquarters',
    icon: 'hq',
    description: 'Leonelli operational headquarters. Via Vittorio Alfieri, Quadrilatero Romano. A four-story late baroque palazzo with multiple entry points, reinforced interiors, and adjacent controlled properties. Pre-System, ground floor housed a private consulting office; first floor a members-only dining club. Upper floors: apartments, secure offices, document archive, signal-blocked meeting room. Two cellar levels.',
    notes: 'Chosen pre-System for operational resilience. By Day 2, the private dining room has become a war room. By Day 4, the building houses the core syndicate members, the System Analysis Division, and a growing roster of recruits.'
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
    description: 'A residential building on Corso Casale, east bank of the Po. Ermilo Ferrero (RaptorSix) and his wife Lorena were barricaded on the top floor during the Night of First Measure. Four armed men from a rival group had attempted to take them hours earlier; two neighbors were killed on the second floor. Cecilia\'s team cleared the building, interrogated a survivor, and extracted the siblings.',
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
    notes: 'Historic civic and commercial heart of Turin, part of Circoscrizione 1 with Crocetta. Piazza Castello, Via Roma, Palazzo Reale, and the major arcaded boulevards. Includes the Quadrilatero Romano — the Roman-era street grid with narrow alleys and baroque palazzi.'
  },
  'AURORA': {
    color: '#d4763a',
    notes: 'Historic working-class district north of the city center, part of Circoscrizione 7. Includes the Porta Palazzo quarter — home to Europe\'s largest open-air market in Piazza della Repubblica — as well as Borgo Dora and Valdocco. High immigrant population, dense informal economy, and strong community networks.'
  },
  'BARRIERA DI MILANO': {
    color: '#b33a3a',
    notes: 'Industrial northeast district, part of Circoscrizione 6 with Regio Parco, Falchera, and Rebaudengo. Named for a former toll gate on the road to Milan. High population density, aging housing stock, and limited infrastructure investment. One of Turin\'s most economically precarious neighborhoods.'
  },
  'SAN DONATO': {
    color: '#6a8caf',
    notes: 'Northwestern residential district, part of Circoscrizione 4 with Campidoglio and Parella. Bounded by Corso Francia, Corso Potenza, and Parco Dora. Known for the Art Nouveau villas along Corso Francia, the Torre Intesa Sanpaolo skyscraper, and a mix of students, immigrants, and working families.'
  },
  'CROCETTA': {
    color: '#5a7a5a',
    notes: 'Affluent residential quarter south of the center, part of Circoscrizione 1 with Centro. Home to the Politecnico di Torino. Elegant late-nineteenth-century housing, quiet tree-lined streets, and an upper-middle-class residential character.'
  },
  'VANCHIGLIA': {
    color: '#4a7a9a',
    notes: 'East of center, part of Circoscrizione 7 with Aurora and Madonna del Pilone. University neighborhood with a younger population and active cafe scene. Piazza Vittorio Veneto — Turin\'s largest piazza — opens toward the Po at its southern edge.'
  },
  'SAN SALVARIO': {
    color: '#8a7a6a',
    notes: 'Dense, diverse district south of Porta Nuova station, part of Circoscrizione 8. Multicultural population, active street commerce, and established community organizations. One of Turin\'s most vibrant and socially mixed neighborhoods.'
  },
  'BORGO PO E CAVORETTO': {
    color: '#6a6a60',
    notes: 'East bank of the Po, part of Circoscrizione 8. Borgo Po lines the riverside with affluent villas and Corso Casale. Cavoretto sits higher on the Collina Torinese with panoramic views over the city and access to hillside parks.'
  },
  'CENISIA': {
    color: '#887766',
    notes: 'Western residential district, part of Circoscrizione 3 with San Paolo and Pozzo Strada. Includes the Cit Turin sub-neighborhood, known for its Art Nouveau architecture. The Palazzo di Giustizia (Turin\'s courthouse) is located here.'
  },
  'SAN PAOLO': {
    color: '#7a6655',
    notes: 'Southwestern working-class quarter, part of Circoscrizione 3. Historically tied to industrial employment. Strong neighborhood identity, dense housing, and active local commerce.'
  },
  'BORGATA VITTORIA': {
    color: '#7a8a6a',
    notes: 'Northern residential district, part of Circoscrizione 5 with Madonna di Campagna, Lucento, and Le Vallette. Formerly wooded and then industrial land, populated mainly during the 1950s demographic boom. Affordable housing, local markets, and proximity to Parco Dora.'
  },
  'FALCHERA': {
    color: '#6a7a6a',
    notes: 'Far northeastern public housing district, part of Circoscrizione 6. Designed in the 1950s by architect Giovanni Astengo as one of Italy\'s earliest planned suburban communities with integrated green spaces. The Laghetti di Falchera — two artificial lakes reclaimed from former gravel quarries — sit at its northern edge.'
  },
  'LE VALLETTE': {
    color: '#5a6a5a',
    notes: 'Northwestern periphery, part of Circoscrizione 5. Large post-war public housing complex built as a self-sufficient satellite quarter. Near the Allianz Stadium (Juventus) and the Le Verbene shopping center.'
  },
  'MADONNA DEL PILONE': {
    color: '#8a8a6a',
    notes: 'Hillside residential quarter on the east bank of the Po, part of Circoscrizione 7 with Aurora and Vanchiglia. Quiet, partially wooded, with limited river crossing points. Named for a pillar shrine at a historic crossing of the Po.'
  },
  'MADONNA DI CAMPAGNA': {
    color: '#7a6a5a',
    notes: 'Northern district bordering Borgata Vittoria to the east, part of Circoscrizione 5. Wide streets, green areas, and a metro station on Turin\'s Airport Line. Former agricultural zone that urbanized rapidly during the industrial era.'
  },
  'MERCATI GENERALI': {
    color: '#6a6a7a',
    notes: 'Southern district named for the rationalist wholesale market buildings designed by Umberto Cuzzi in 1932, located beyond the railway from the Lingotto complex. Part of the broader Lingotto-area urban renewal led by Renzo Piano.'
  },
  'MIRAFIORI NORD': {
    color: '#5a7a7a',
    notes: 'Southwestern residential district, part of Circoscrizione 2 with Santa Rita and Mirafiori Sud. Built largely to house factory workers arriving from southern Italy during the industrial boom. Dense apartment blocks, local schools, and the historic Borgo Mirafiori with its nineteenth-century rural core.'
  },
  'MIRAFIORI SUD': {
    color: '#4a6a6a',
    notes: 'Southern periphery, part of Circoscrizione 2. Dominated by the Fiat Mirafiori factory complex, built in 1939 and expanded in 1956 as Fiat\'s primary production plant. Working-class housing with strong ties to the factory\'s economic cycle. Home to the Orti Generali urban garden project.'
  },
  'NIZZA MILLEFONTI': {
    color: '#7a7a5a',
    notes: 'Southern district along the Po river, part of Circoscrizione 8. Named for the underground springs ("mille fonti") that once fed the area. Home to the Lingotto building (former Fiat factory, now a Renzo Piano-designed multipurpose complex), the 2006 Olympic Village, and vestiges of the 1961 Italia \'61 Expo.'
  },
  'PARELLA': {
    color: '#6a7a8a',
    notes: 'Western residential quarter, part of Circoscrizione 4 with San Donato and Campidoglio. Quiet, middle-class, with post-war housing blocks and local parks. Connected to the center via Corso Francia.'
  },
  'POZZO STRADA': {
    color: '#7a8a7a',
    notes: 'Far western residential district near the ring road, part of Circoscrizione 3 with San Paolo and Cenisia. Suburban character with lower building density. Corso Francia runs through it toward Rivoli and the Alpine valleys.'
  },
  'REGIO PARCO': {
    color: '#8a7a7a',
    notes: 'Northeast district along the Dora Riparia river, part of Circoscrizione 6. Named for a sixteenth-century royal castle built by Emanuele Filiberto, destroyed during the French siege in the eighteenth century. Working-class neighborhood undergoing urban renewal.'
  },
  'SANTA RITA': {
    color: '#7a6a7a',
    notes: 'Southwestern residential district, part of Circoscrizione 2 with Mirafiori Nord and Mirafiori Sud. One of Turin\'s most populated neighborhoods, with dense housing, strong local commerce along Via Tripoli and Corso Sebastopoli, and a solidly middle-class residential character.'
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
