// SYSTEM CODEX DATA — The Apocalypse Is a Business
// Manuscript precedence through Chapter 124. 999 = unrevealed, not a substitute for known dates.
// Existing globals and field shapes are retained; ITEMS_DATA and RESEARCH_DATA are supplemental.


// 999 means Show All / unrevealed. It is not a fabricated chapter number.
// History overlays preserve the original field names used by the page renderer.
// Getters read the existing chapter selector whenever a renderer reads a field.
// Outside a browser, the default is the complete current profile.
function codexChapterLimit() {
  if (typeof document === 'undefined') return 999;
  var select = document.getElementById('chapterFilter');
  var value = select ? parseInt(select.value, 10) : 999;
  return isNaN(value) ? 999 : value;
}
function withCodexHistory(value) {
  if (Array.isArray(value)) return value.map(withCodexHistory);
  if (!value || typeof value !== 'object') return value;
  var result = {};
  Object.keys(value).forEach(function (key) { result[key] = withCodexHistory(value[key]); });
  if (!Array.isArray(value.history)) return result;
  var versions = value.history.slice().sort(function (a, b) { return a.chapter - b.chapter; });
  var keys = {};
  versions.forEach(function (version) {
    Object.keys(version).forEach(function (key) { if (key !== 'chapter' && key !== 'history') keys[key] = true; });
  });
  Object.keys(keys).forEach(function (key) {
    Object.defineProperty(result, key, {
      enumerable: true,
      configurable: false,
      get: function () {
        var current = value[key];
        var limit = codexChapterLimit();
        versions.forEach(function (version) {
          if (version.chapter <= limit && Object.prototype.hasOwnProperty.call(version, key)) current = version[key];
        });
        return current;
      }
    });
  });
  return result;
}

var SYSTEM_OVERVIEW = withCodexHistory({
  "chapter": 1,
  "intro": "The System showed up with no warning and no explanation. It didn't ask permission. It appeared in everyone's field of vision at once (text hanging in the air, monochrome, faintly luminous, impossible to look away from or cover up), and it spoke to each person directly, like it had been waiting on them.",
  "initMessage": "WELCOME TO THE NEW WORLD.\nYOUR REGISTRATION IS CONFIRMED.\nPLEASE REVIEW YOUR CLASSIFICATION OPTIONS.\nYOU HAVE 72 HOURS.",
  "interface": [
    {
      "label": "Display Method",
      "text": "Painted straight onto your perception. No device needed. No opt-out."
    },
    {
      "label": "Tone",
      "text": "It talks like a game master who's also the judge. Exact and indifferent, and never impersonal. Every notification is addressed to you, specific and direct."
    },
    {
      "label": "Personal Messages",
      "text": "Invisible to anyone standing next to you."
    },
    {
      "label": "Public Broadcasts",
      "text": "Hit every registered entity's vision at once. Same spot, same words, same instant."
    },
    {
      "label": "Hidden Prompts",
      "text": "They exist and they're never announced. They surface only when some condition you were never told about gets met. The System won't confirm they exist. It won't deny it either."
    },
    {
      "label": "Notifications",
      "text": "Transient notices can be distinct from the persistent status, quest and record information a character can inspect again."
    },
    {
      "label": "Appraise",
      "text": "A basic inspection interaction. Output depends on the target: human class/tier information, creature identification or item properties may appear. It does not universally reveal private human levels, full builds or hidden attributes."
    }
  ],
  "npcStatus": {
    "chapter": 7,
    "title": "NPC Status",
    "description": "What you get labeled if you never touch the class selection window before it shuts. Roughly 80% of Turin's population ends up an \"NPC.\" That includes most police and military, who were told by institutional command to ignore the System and wait on government guidance that never came.",
    "consequences": [
      "NPC weapons and muscle do badly reduced damage against Players and creatures",
      "NPCs don't get a pass on Scenario events. Creatures hunt them the same as Players",
      "No Player-class progression or its direct benefits; indirect territorial protection and dependent registration can still matter.",
      "It's permanent, and it's mechanical"
    ],
    "note": "Not every uniform is an NPC. A fraction ignored the official line and picked their classes anyway, and that splits the institutions down the middle. Player officers are measurably better at the job, which breeds resentment in every direction at once."
  }
});

var STATS_DATA = withCodexHistory({
  "primaryStats": [
    {
      "name": "PRESENCE",
      "chapter": 1,
      "description": "Command, coercion, social leverage, the fear economy, pressure at the negotiating table.",
      "users": "Primary: Cecilia (Fixer). Secondary: Matteo (Advocate), Dario (Runner)."
    },
    {
      "name": "ACUITY",
      "chapter": 1,
      "description": "Pattern recognition, strategic planning, how fast you process information.",
      "users": "Used in analytical and strategic builds. Individual distributions should follow the profiles actually shown.",
      "history": [
        {
          "chapter": 85,
          "users": "The ordinary profiles of Luca and Serena still label ACUITY primary during the Chapter 85 discussion. The relationship to the hidden attribute remains unresolved."
        }
      ]
    },
    {
      "name": "FORCE",
      "chapter": 1,
      "description": "Raw physical output: strength, impact, how hard you hit.",
      "users": "Physical output used by combatants; do not infer an unreported attribute distribution from a weapon or profession."
    },
    {
      "name": "RESILIENCE",
      "chapter": 1,
      "description": "How much you can soak, how long you can stay in it, endurance.",
      "users": "Secondary: Ruggiero (Collector)."
    },
    {
      "name": "VELOCITY",
      "chapter": 1,
      "description": "Movement speed, reaction time, getting to the right spot first.",
      "users": "Primary: Bianca (Watcher). Secondary: Ivan (Cartographer)."
    },
    {
      "name": "PRECISION",
      "chapter": 1,
      "description": "Accuracy, fine motor control, how clean your targeting is.",
      "users": "Primary: Lorena (Scribe), Giulia (Artificer). Secondary: Bianca (Watcher), Ermilio (Auditor)"
    },
    {
      "name": "UNDISPLAYED ATTRIBUTE",
      "chapter": 84,
      "description": "A seventh, normally undisplayed attribute directly read by Ermilio through VARIABLE.",
      "users": "Its relationship to particular classes remains under investigation.",
      "note": "Found in Chapter 84. Its function and primary-stat status are not established by finding the entry.",
      "history": [
        {
          "chapter": 85,
          "name": "EDGE",
          "description": "The Division's working name for the seventh attribute. The leading interpretation concerns using openings, unresolved interactions and exploitable structural conditions.",
          "note": "Class, task and experience remain confounds. EDGE is not an established general competence score."
        }
      ]
    }
  ],
  "secondaryStats": [
    {
      "name": "INFAMY",
      "chapter": 13,
      "description": "Builds up through anything the System files as fear-generating: killing where people can see, enforcing deals with violence, breaking someone's resistance in public. It doesn't reset.",
      "effects": "High Infamy sharpens intimidation, underworld compliance, and command weight. It also cranks up enemy aggression, marks you for the Hero factions, and drives your bounty values higher.",
      "note": "The System tracks it because it tells the System something useful about what you're turning into."
    },
    {
      "name": "AUTHORITY",
      "chapter": 13,
      "description": "Locked until your faction gets recognized. It measures organizational command power, and it scales with the quality of your hierarchy, your membership, your territory, and how many active agreements you're running.",
      "effects": "Without a recognized faction your Authority is zero, no matter how good every other stat is. Authority is the thing that turns one Player's capability into institutional power.",
      "note": null
    }
  ]
});

var CLASSES_DATA = withCodexHistory([
  {
    "id": "fixer",
    "name": "FIXER",
    "chapter": 1,
    "holder": "Cecilia Leonelli",
    "descriptor": "For those who resolve what others cannot.",
    "tier": "Origin (I)",
    "primary": "PRESENCE",
    "secondary": "ACUITY",
    "classLine": [
      "Fixer"
    ],
    "ceiling": "No stated evolution ceiling. The classification window closed for this entity. That's a different designation, not a cap.",
    "buildDirection": "Command authority, leverage application, territory-linked effects, execution bonuses against marked targets, compulsion and contract interactions.",
    "combatNotes": "Cecilia isn't a frontline fighter. Her combat scenes are short, decisive, and set up by a read that made the outcome inevitable before a blow landed. She hits with precision, at the exact moment it costs her opponent the most."
  },
  {
    "id": "collector",
    "name": "COLLECTOR",
    "chapter": 8,
    "holder": "Ruggiero Montini",
    "descriptor": "For those who claim what is owed.",
    "tier": "Origin (I)",
    "primary": "FORCE",
    "secondary": "RESILIENCE",
    "classLine": [
      "Collector"
    ],
    "ceiling": null,
    "buildDirection": "Enforcer-tank-controller. Terrain domination, group suppression, breaking up formations, staying in the fight. Ruggiero soaks punishment and turns it into forward momentum.",
    "combatNotes": "His fights should feel physical and cumulative. He absorbs. He pushes forward. He doesn't stop. The second he's in a room, the tactical math changes for everyone else in it."
  },
  {
    "id": "advocate",
    "name": "ADVOCATE",
    "chapter": 8,
    "holder": "Matteo Vascari",
    "descriptor": "For those who make terms hold.",
    "tier": "Origin (I)",
    "primary": "ACUITY",
    "secondary": "PRESENCE",
    "classLine": [
      "Advocate"
    ],
    "ceiling": null,
    "buildDirection": "Control-support built on contract architecture, informational suppression, and ward systems. Matteo does almost no direct combat. He makes the terms of every engagement favorable before it starts.",
    "combatNotes": "Matteo doesn't fight. He writes the conditions under which other people fight and lose. His strongest scene is the moment a Breach Penalty executes where everyone can see it, and the room works out what it means."
  },
  {
    "id": "runner",
    "name": "RUNNER",
    "chapter": 20,
    "holder": "Dario Fioretti",
    "descriptor": "For those who move faster than consequences.",
    "tier": "Origin (I)",
    "primary": null,
    "secondary": "PRESENCE",
    "classLine": [
      "Runner"
    ],
    "ceiling": null,
    "buildDirection": "Mobile skirmisher, social infiltrator, market operator. Dario wins by being in exactly the wrong spot for his opponents and exactly the right one for himself.",
    "combatNotes": "His fights should feel almost unfair. He's never where you expect him. Weapons: knives, garrote, poison. Close-range and opportunistic, all of it."
  },
  {
    "id": "watcher",
    "name": "WATCHER",
    "chapter": 8,
    "holder": "Bianca Severa",
    "descriptor": "For those who see what others will not.",
    "tier": "Origin (I)",
    "primary": "VELOCITY",
    "secondary": "PRECISION",
    "classLine": [
      "Watcher"
    ],
    "ceiling": null,
    "buildDirection": "Precision eliminator and intelligence operative. She's at her best in silence: physical, informational, territorial. She's the most dangerous member of the crew in the exact situations she's built for, and she's taken pains to make those situations come up a lot.",
    "combatNotes": "Bianca's violence is personal. Her scenes should feel quiet even when they're not. What unsettles people isn't what she does. It's how completely it doesn't trouble her to do it."
  },
  {
    "id": "architect",
    "name": "ARCHITECT",
    "chapter": 8,
    "holder": "Luca Terranova",
    "descriptor": "For those who build what others use.",
    "tier": "Origin (I)",
    "primary": "ACUITY",
    "secondary": null,
    "classLine": [
      "Architect"
    ],
    "ceiling": null,
    "buildDirection": "Structural analysis and modeling of dependencies and possible interventions.",
    "combatNotes": "Luca contributes analysis and preparation rather than replacing trained security."
  },
  {
    "id": "sparkcaller",
    "name": "SPARKCALLER",
    "chapter": 9,
    "holder": "Iris Terranova",
    "descriptor": "For those who call out what is not yet awake.",
    "tier": "Origin (I)",
    "primary": null,
    "secondary": null,
    "classLine": [
      "Sparkcaller"
    ],
    "ceiling": null,
    "buildDirection": "Iris chooses Sparkcaller and describes it as building connections. Its full skill and attribute distribution has not been established in the shown scenes.",
    "combatNotes": "Her demonstrated coordination and insight must not be replaced with an unreported combat build."
  },
  {
    "id": "cartographer",
    "name": "CARTOGRAPHER",
    "chapter": 13,
    "holder": "Ivan Carceri",
    "descriptor": "For those who chart what is coming.",
    "tier": "Origin (I)",
    "primary": "ACUITY",
    "secondary": "VELOCITY",
    "classLine": [
      "Cartographer"
    ],
    "ceiling": null,
    "buildDirection": "Non-combat spatial-temporal intelligence. It maps the System's patterns across space and time: spawn density, creature movement, energy accumulation, the probability corridors events run down. A Velocity secondary is unusual for a non-combat class, and it's there because the output is real-time. At higher ranks the map stretches to faction movements, resource flows, and systemic trend lines that have nothing to do with creatures.",
    "combatNotes": "Ivan doesn't fight. The class never switches off; the signal keeps coming. His value is the projection, not the engagement. The noise-canceling headphones are load-bearing infrastructure."
  },
  {
    "id": "auditor",
    "name": "AUDITOR",
    "chapter": 13,
    "holder": "Ermilio Ferrero",
    "descriptor": "For those who read what is not shown.",
    "tier": "Origin (I)",
    "primary": "ACUITY",
    "secondary": "PRECISION",
    "classLine": [
      "Auditor"
    ],
    "ceiling": null,
    "buildDirection": "Non-combat hidden-variable intelligence. He can reach the System's internal records, the variables it tracks but never pushes to the standard interface: hidden flags, accumulated trigger conditions, behavioral records, the environmental values it logs for itself. He sees the System working, not just the result it shows. He can spot where the visible output and the hidden record don't match.",
    "combatNotes": "Ermilio doesn't fight. His value is informational: the gap between what a faction shows and what the System has on file. The skill Matteo finds most useful and most unsettling."
  },
  {
    "id": "scribe",
    "name": "SCRIBE",
    "chapter": 14,
    "holder": "Lorena Ferrero",
    "descriptor": "For those who make a record hold.",
    "tier": "Origin (I)",
    "primary": "PRECISION",
    "secondary": "ACUITY",
    "classLine": [
      "Scribe"
    ],
    "ceiling": null,
    "buildDirection": "Non-combat records infrastructure. A Scribe turns System data into physical records the System then treats as real: written down, validated, timestamped, living in both the document and the System's own registry. Those records carry System-backed authenticity, can't be altered afterward without leaving a visible discrepancy, and hold up as primary evidence in adjudicated disputes. The deeper half of the class is comprehension. A Scribe reads System language the way a notary reads a contract, taking in what it states and, underneath that, the shape of what it leaves out.",
    "combatNotes": "Lorena doesn't fight. The System treats her records as primary sources: the official version of what happened, solid enough that Matteo's contracts get built on top of them."
  },
  {
    "id": "artificer",
    "name": "ARTIFICER",
    "chapter": 13,
    "holder": "Giulia Conti",
    "descriptor": "For those who coax what is built.",
    "tier": "Origin (I)",
    "primary": "PRECISION",
    "secondary": "ACUITY",
    "classLine": [
      "Artificer"
    ],
    "ceiling": null,
    "buildDirection": "Non-combat technical arm. She manipulates and upgrades physical items by working System properties into them, dealing directly with the material layer the System recognizes. She enhances existing gear, composites incompatible System properties into combinations that actually function, and builds devices that touch System mechanics in ways standard equipment can't. At higher ranks she moves from modifying things toward making objects the System has no prior record of.",
    "combatNotes": "Giulia doesn't fight on the line. Her anxiety in high-threat places is real. She gets through it by keeping her attention on the object in her hands. Her output includes the node disruptor, modified field gear, and a tightly restricted licensing line out to the wider protection network."
  },
  {
    "id": "breaker",
    "name": "BREAKER",
    "chapter": 81,
    "holder": "Serena Marini",
    "descriptor": "For those who find where the rules end.",
    "tier": "Origin (I)",
    "primary": "ACUITY",
    "secondary": null,
    "classLine": [
      "Breaker"
    ],
    "ceiling": "Progression conditions are incompletely understood. The absence of a clear condition does not prove that the System cannot know it.",
    "buildDirection": "Recognizes and briefly holds certain incomplete or edge-case interactions. Availability and timing matter, and attempts can fail.",
    "combatNotes": "A usable opening must exist. A held interaction does not establish universal control over time or completed System actions."
  },
  {
    "id": "leverage-broker",
    "name": "LEVERAGE BROKER",
    "chapter": 72,
    "holder": "Cecilia Leonelli",
    "descriptor": null,
    "tier": "Tier II",
    "primary": "PRESENCE",
    "secondary": null,
    "classLine": [
      "Fixer",
      "Leverage Broker"
    ],
    "ceiling": null,
    "buildDirection": "Tier II advancement after the Aurora reconciliation. Organizational leverage and the efficiency skill MAKE IT WORK.",
    "combatNotes": "Level 20 provides advancement eligibility, not automatic completion. No unshown skill tree is implied."
  },
  {
    "id": "system-architect",
    "name": "SYSTEM ARCHITECT",
    "chapter": 91,
    "holder": "Luca Terranova",
    "descriptor": null,
    "tier": null,
    "primary": "ACUITY",
    "secondary": null,
    "classLine": [
      "Architect",
      "System Architect"
    ],
    "ceiling": null,
    "buildDirection": "Allows limited intervention in selectable local relationships, with effects established through measurement.",
    "combatNotes": "The shell response is material-specific and ends on release. The regulator's 48/50 settings are not universal System units; forty-three seconds is not a universal duration cap."
  },
  {
    "id": "dungeon-master",
    "name": "DUNGEON MASTER",
    "chapter": 66,
    "holder": "Sofia Dei Guidi",
    "descriptor": null,
    "tier": null,
    "primary": null,
    "secondary": null,
    "classLine": [
      "Dungeon Master"
    ],
    "ceiling": null,
    "buildDirection": "Authors encounters using ordinary available spawns and suitable existing space. Can arrange arrivals, narrate recognized conditions and reduce suitable arrivals by roughly fifteen percent. The System sets rewards.",
    "combatNotes": "Territorial suppression is separate. Monsters are not permanent puppets; Scenario-tier threats are outside her control. Roughly six days of recovery cannot be bypassed by changing address."
  },
  {
    "id": "paladin",
    "name": "PALADIN",
    "chapter": 66,
    "holder": "Tommaso Peirone",
    "descriptor": null,
    "tier": null,
    "primary": null,
    "secondary": null,
    "classLine": [
      "Paladin"
    ],
    "ceiling": null,
    "buildDirection": "Frontline protection, positioning and support for people behind him.",
    "combatNotes": "Observed actions do not establish an unreported skill tree or future class line."
  },
  {
    "id": "mage",
    "name": "MAGE",
    "chapter": 66,
    "holder": "Marta Galimberti",
    "descriptor": null,
    "tier": null,
    "primary": null,
    "secondary": null,
    "classLine": [
      "Mage"
    ],
    "ceiling": null,
    "buildDirection": "Evocation and study of effects, including the party's authored bonuses.",
    "combatNotes": "Lightning is demonstrated; exact attributes and formal spell names remain unreported."
  },
  {
    "id": "druid",
    "name": "DRUID",
    "chapter": 66,
    "holder": "Elia Amicone",
    "descriptor": null,
    "tier": null,
    "primary": null,
    "secondary": null,
    "classLine": [
      "Druid"
    ],
    "ceiling": null,
    "buildDirection": "Growth, roots, restraint and terrain support.",
    "combatNotes": "A sustainable-agriculture interest informs the choice, without establishing arbitrary control of all natural processes."
  },
  {
    "id": "bard",
    "name": "BARD",
    "chapter": 66,
    "holder": "Nicolò Conti",
    "descriptor": null,
    "tier": null,
    "primary": null,
    "secondary": null,
    "classLine": [
      "Bard"
    ],
    "ceiling": null,
    "buildDirection": "Sonic support, disruption, control and knowledge gathering.",
    "combatNotes": "Do not assign invented formal names to every vocal action."
  },
  {
    "id": "oddsmaker",
    "name": "ODDSMAKER",
    "chapter": 106,
    "holder": "Giorgio Esposito",
    "descriptor": null,
    "tier": null,
    "primary": null,
    "secondary": null,
    "classLine": [
      "Oddsmaker"
    ],
    "ceiling": null,
    "buildDirection": "Conditional analysis under incomplete information; READ THE TABLE and COUNTERPLAY are demonstrated in Chapter 112.",
    "combatNotes": "A model can be wrong when its assumptions about a person's priorities are wrong. COUNTERPLAY remains focused on one active decision model."
  }
]);

var SKILLS_OVERVIEW = withCodexHistory({
  "chapter": 1,
  "acquisition": "Skills can develop through behavior and use, and class advancement can grant abilities directly. Descriptions still need to be tested against observed effects.",
  "visibleRanks": "Announced ranks include the explicit QUIET APPROACH Rank 4 notification. There is no demonstrated universal announcement cutoff after rank three.",
  "hiddenRanks": "Some conditions and interactions remain undisclosed. A hidden condition is distinct from every rank above three.",
  "hiddenRank4Rule": "Qualitative changes must be grounded in the particular skill's demonstrated notification or effect; the manuscripts do not establish one universal Hidden Rank 4 rule.",
  "classWindowNote": "Descriptor analysis is useful, but Luca's theories about selection patterns and the System's purpose are not omniscient statements of its design."
});

var SKILLS_DATA = withCodexHistory([
  {
    "id": "marked-ledger",
    "name": "MARKED LEDGER",
    "chapter": 14,
    "holder": "Cecilia Leonelli",
    "class": "FIXER",
    "type": "Passive",
    "description": "Cecilia maintains leverage and liability records that the System recognizes as marks. Her attacks and commands can interact with designated targets.",
    "ranks": []
  },
  {
    "id": "final-account",
    "name": "FINAL ACCOUNT",
    "chapter": 49,
    "holder": "Cecilia Leonelli",
    "class": "FIXER",
    "type": "Active — Finishing move",
    "description": "The next attack or command against a Marked Ledger target resolves as a finishing move, multiplying active effects and dealing decisive damage. Explicitly displayed at Rank 1 in Chapter 49. MARKED LEDGER remains in the inventory.",
    "ranks": [
      {
        "rank": 1,
        "text": "Finishing effect displayed during the SILENCE FIELD combination. A BREACH PENALTY is not established as a universal prerequisite.",
        "chapter": 49
      }
    ]
  },
  {
    "id": "terms",
    "name": "WEIGHT OF OFFICE",
    "chapter": 14,
    "holder": "Cecilia Leonelli",
    "class": "FIXER",
    "type": "Active — Presence-based",
    "description": "Cecilia applies command pressure that can make an opponent hesitate or slow its action. Resistance and the nature of the target matter.",
    "ranks": []
  },
  {
    "id": "iron-threshold",
    "name": "IRON THRESHOLD",
    "chapter": 37,
    "holder": "Ruggiero Montini",
    "class": "COLLECTOR",
    "type": "Passive",
    "description": "Damage absorption rises during sustained engagement. Holding a position longer increases what Ruggiero can absorb before his output is affected.",
    "ranks": [
      {
        "rank": 1,
        "text": "Reactive: he has to take damage first to trigger the elevated state.",
        "chapter": 7
      }
    ]
  },
  {
    "id": "corridor",
    "name": "CORRIDOR",
    "chapter": 37,
    "holder": "Ruggiero Montini",
    "class": "COLLECTOR",
    "type": "Active",
    "description": "Ruggiero names a stretch of space as held ground. Enemies trying to push through hit escalating resistance effects. Allies passing through get a small speed bonus.",
    "ranks": []
  },
  {
    "id": "binding-clause",
    "name": "BINDING CLAUSE / BREACH PENALTY",
    "chapter": 25,
    "holder": "Matteo Vascari",
    "class": "ADVOCATE",
    "type": "Active",
    "description": "Agreements Matteo formalizes carry weight the System will enforce. Break one and you trigger a Breach Penalty, a consequence the System registers and applies to whoever broke faith. Higher ranks add compulsion effects, enforcement tied to territory, and automatic flagging straight into Cecilia's Marked Ledger.",
    "ranks": [
      {
        "rank": 1,
        "text": "A minor notification-based consequence on breach.",
        "chapter": 7
      }
    ]
  },
  {
    "id": "precedent",
    "name": "PRECEDENT",
    "chapter": 999,
    "holder": "Matteo Vascari",
    "class": "ADVOCATE",
    "type": "Unrevealed author-lore skill",
    "description": "Matteo holds exact recall of any formalized agreement he's authored, witnessed, or analyzed. Higher ranks stretch it to spoken agreements made within earshot. He's a living archive of every binding commitment in reach.",
    "ranks": []
  },
  {
    "id": "read-the-room",
    "name": "READ THE ROOM",
    "chapter": 22,
    "holder": "Dario Fioretti",
    "class": "RUNNER",
    "type": "Passive",
    "description": "The second Dario walks into a space, he maps where everyone's head is at, emotionally and motivationally. The System formalizes it as a passive alignment display: a rough read on the gap between what people are saying and what they actually want.",
    "ranks": []
  },
  {
    "id": "supply-line",
    "name": "SUPPLY LINE",
    "chapter": 22,
    "holder": "Dario Fioretti",
    "class": "RUNNER",
    "type": "Active",
    "description": "Dario carries a running mental map of the workable trade routes, contacts, and resource nodes across a given territory. Higher ranks ping him with a System notification when a key route gets compromised, before there's anything visible to see.",
    "ranks": []
  },
  {
    "id": "quiet-approach",
    "name": "QUIET APPROACH",
    "chapter": 20,
    "holder": "Bianca Severa",
    "class": "WATCHER",
    "type": "Passive",
    "description": "Reduces her movement signature where cover is dominant, improves concealment in dim or enclosed spaces, and grants +30% effectiveness to stealth kills made under cover.",
    "ranks": [
      {
        "rank": 4,
        "text": "QUIET APPROACH Rank 4 lets Bianca read the moment of commitment in an observed entity before it acts. Anticipation resolves through VELOCITY and PRECISION; it is not unrestricted future sight.",
        "chapter": 45
      }
    ]
  },
  {
    "id": "silence-field",
    "name": "SILENCE FIELD",
    "chapter": 20,
    "holder": "Bianca Severa",
    "class": "WATCHER",
    "type": "Active",
    "description": "Creates an area of sound suppression and System interface denial. Its size, duration and recharge improve with development.",
    "ranks": [
      {
        "rank": 3,
        "text": "At Rank 3, all sound within the designated radius is suppressed, and enclosed entities cannot transmit, receive or execute System interface actions for the duration. Existing physical momentum and ordinary strength remain dangerous.",
        "chapter": 49
      }
    ]
  },
  {
    "id": "close-coverage",
    "name": "CLOSE COVERAGE",
    "chapter": 45,
    "holder": "Bianca Severa",
    "class": "WATCHER",
    "type": "Active",
    "description": "Bianca designates one protected person. An incoming effect can be intercepted and redirected to her at reduced damage. Coverage is a tactical choice.",
    "ranks": []
  },
  {
    "id": "load-bearing",
    "name": "LOAD-BEARING",
    "chapter": 42,
    "holder": "Luca Terranova",
    "class": "ARCHITECT",
    "type": "Passive — Developing",
    "description": "Luca instinctively finds the structural dependencies of anything he's looking at: the pieces that, if you pull or change them, bring the rest down or transform it. In a Scenario, he's clocked which part of the enemy deployment or objective chain is load-bearing before anyone else has finished reading the announcement.",
    "ranks": []
  },
  {
    "id": "framework",
    "name": "FRAMEWORK",
    "chapter": 42,
    "holder": "Luca Terranova",
    "class": "ARCHITECT",
    "type": "Active — Developing",
    "description": "Luca builds a predictive model of a developing situation and pushes it out as a System-legible output to a group he's designated. At low ranks it shows up as a probability estimate on their interfaces. At higher ranks it becomes a shared tactical overlay that updates live as conditions shift.",
    "ranks": []
  },
  {
    "id": "spark-latent",
    "name": "LATENT SENSE",
    "chapter": 999,
    "holder": "Iris Terranova",
    "class": "SPARKCALLER",
    "type": "Unrevealed author-lore skill",
    "description": "Iris picks up on suppressed or developing System-recognized potential in the people around her, as rough qualitative impressions. She doesn't have the vocabulary to pin it down, which frustrates her. It feels like intuition because she has no better frame for it yet.",
    "ranks": []
  },
  {
    "id": "spark-electro",
    "name": "SPARK",
    "chapter": 999,
    "holder": "Iris Terranova",
    "class": "SPARKCALLER",
    "type": "Unrevealed author-lore skill",
    "description": "Iris discharges electrokinetic force through contact or at short range, scaled by EDGE and FORCE. The obvious use is combat. The more interesting one is diagnostic: unstable System-property objects react to the discharge in ways that reveal how they're built underneath.",
    "ranks": []
  },
  {
    "id": "survey",
    "name": "SURVEY",
    "chapter": 40,
    "holder": "Ivan Carceri",
    "class": "CARTOGRAPHER",
    "type": "Passive",
    "description": "Ivan takes in a low-level feed of positional and density data on System-active entities and energy buildups across a sizable radius. At rest it reads as ambient awareness: he knows which way the creatures are moving before anyone calls it in. Under stress it floods him.",
    "ranks": []
  },
  {
    "id": "projection",
    "name": "PROJECTION",
    "chapter": 40,
    "holder": "Ivan Carceri",
    "class": "CARTOGRAPHER",
    "type": "Active",
    "description": "Ivan produces a formal predictive map of a defined area over a defined time window, rendered as a System-legible overlay he can share with designated parties. Accuracy falls off with distance and time horizon, and still beats anything you'd get from direct observation by a wide margin.",
    "ranks": []
  },
  {
    "id": "variable",
    "name": "VARIABLE",
    "chapter": 84,
    "holder": "Ermilio Ferrero",
    "class": "AUDITOR",
    "type": "Passive",
    "description": "Ermilio sees the System flags and hidden variables hung on entities, objects, and locations: the data points the System tracks but never surfaces. Condition triggers logged across multiple instances, spawn energy piling up at a given spot, compliance flags on contracts. It arrives as a second visual layer over his normal vision, mostly unobtrusive, occasionally overwhelming where there's heavy System activity.",
    "ranks": []
  },
  {
    "id": "discrepancy",
    "name": "DISCREPANCY",
    "chapter": 999,
    "holder": "Ermilio Ferrero",
    "class": "AUDITOR",
    "type": "Unrevealed author-lore skill",
    "description": "Ermilio finds the gaps between what the System shows and what it records. When a faction's public Reputation doesn't square with its logged behavior, he sees the gap. When a contract's been technically honored in a way that guts its logged intent, he sees that too.",
    "ranks": []
  },
  {
    "id": "inscription",
    "name": "INSCRIPTION",
    "chapter": 999,
    "holder": "Lorena Ferrero",
    "class": "SCRIBE",
    "type": "Unrevealed author-lore skill",
    "description": "Lorena writes down a fact she's witnessed herself, or one that reached her through a solid chain of documentation, and the System logs it as real: authenticated, timestamped, sitting in both the physical page and the System's own registry. Precision is the whole game. A record that's sloppy, or even slightly false, comes out distorted. She feels it the moment it happens. She can't always fix it.",
    "ranks": []
  },
  {
    "id": "collation",
    "name": "COLLATION",
    "chapter": 999,
    "holder": "Lorena Ferrero",
    "class": "SCRIBE",
    "type": "Unrevealed author-lore skill",
    "description": "Lorena keeps perfect recall of everything she's Inscribed, and she keeps it as one connected set instead of a stack of separate pages. Every new record checks itself against all the old ones on its own. Contradictions, duplicates, things that can't both be true: they surface to her the way a misfiled deed surfaces to a clerk who knows the drawer. It's how she catches her own mistakes before they set, and how a gap she only felt at the time gets confirmed later, once the record proves she'd been reading it right.",
    "ranks": []
  },
  {
    "id": "material-sense",
    "name": "MATERIAL SENSE",
    "chapter": 27,
    "holder": "Giulia Conti",
    "class": "ARTIFICER",
    "type": "Passive",
    "description": "Giulia reads the System properties latent in physical objects: what they'll let her modify, what won't play nice together, which stress point fails first under System-level force. It runs continuously and without her say-so, which means she hasn't been able to look at the Palazzo's infrastructure without running a structural assessment since her first week in the building.",
    "ranks": []
  },
  {
    "id": "infuse",
    "name": "INFUSE",
    "chapter": 27,
    "holder": "Giulia Conti",
    "class": "ARTIFICER",
    "type": "Active",
    "description": "Giulia works System properties into a physical object through sustained contact and focused attention. The precision it takes is no joke; sloppy infusion gives you unstable results, a lesson she's learned twice. At current ranks the process needs her workshop, the right raw materials, and time.",
    "ranks": []
  },
  {
    "id": "null-state",
    "name": "NULL STATE",
    "chapter": 81,
    "holder": "Serena Marini",
    "class": "BREAKER",
    "type": "Passive",
    "description": "Lets Serena recognize certain incomplete or edge-case interactions. A usable opportunity must exist; it does not make every interaction exploitable.",
    "ranks": []
  },
  {
    "id": "exploit-window",
    "name": "EXPLOIT WINDOW",
    "chapter": 81,
    "holder": "Serena Marini",
    "class": "BREAKER",
    "type": "Active — Developing",
    "description": "Lets Serena briefly hold some available interactions unresolved. Timing matters, attempts can fail, and progression conditions remain incompletely understood.",
    "ranks": []
  },
  {
    "id": "structural-authority",
    "name": "STRUCTURAL AUTHORITY",
    "chapter": 60,
    "holder": "Cecilia Leonelli",
    "class": "FIXER",
    "type": "Passive",
    "description": "While operating in a location she controls, Cecilia gains +10% effectiveness for buffs, debuffs and faction organizational skills. The effect scales with PRESENCE. Recognized affiliation matters to who can benefit.",
    "ranks": []
  },
  {
    "id": "make-it-work",
    "name": "MAKE IT WORK",
    "chapter": 72,
    "holder": "Cecilia Leonelli",
    "class": "LEVERAGE BROKER",
    "type": "Active — Leverage Broker",
    "description": "When a resource deficiency threatens a critical objective, designated allies directly addressing the shortfall gain increased efficiency. Duration and efficiency scale with PRESENCE. Cooldown: 48 hours.",
    "ranks": []
  },
  {
    "id": "read-the-table",
    "name": "READ THE TABLE",
    "chapter": 112,
    "holder": "Giorgio Esposito",
    "class": "ODDSMAKER",
    "type": "Analytical skill; activation type not stated",
    "description": "Keeps supplied evidence, assumptions and competing explanations available for examination, including discrepancies his preferred model would overlook. It does not reveal private motives as facts.",
    "ranks": []
  },
  {
    "id": "counterplay",
    "name": "COUNTERPLAY",
    "chapter": 112,
    "holder": "Giorgio Esposito",
    "class": "ODDSMAKER",
    "type": "Active",
    "description": "Maintains a conditional model of one actor's decision using available evidence and assumptions. Giorgio revises it when new facts expose a mistaken priority.",
    "ranks": []
  }
]);

var SCENARIOS_DATA = withCodexHistory({
  "overview": {
    "chapter": 8,
    "text": "The System throws Scenarios regularly and at every scale. They're the main progression engine for every Player. The Leonellis treat each one as an intelligence event first and a survival event second."
  },
  "scaleTypes": [
    {
      "name": "City-Wide Scenarios",
      "chapter": 8,
      "desc": "They hit all of Turin at once. Short-notice announcement. The secondary objectives never get disclosed. Every registered entity gets the alert. Creatures manifest at scale. Fixed duration. Rewards go out on performance and on factors nobody's told. These reshape the faction landscape more than anything else."
    },
    {
      "name": "District Scenarios",
      "chapter": 8,
      "desc": "They hit a specific area. They may or may not get announced outside the affected district. Shorter and more focused, with creature types or conditions tied to whatever the district is. A faction sitting in the right spot can pull disproportionate value out of one."
    },
    {
      "name": "Faction Scenarios",
      "chapter": 8,
      "desc": "Handed straight to recognized factions. Invisible to anyone outside. Specific objectives, sometimes aimed at a rival faction. It's how the System stress-tests a faction's structure and pays out organizational depth."
    },
    {
      "name": "Individual Scenarios",
      "chapter": 38,
      "desc": "Issued to a specific Player. Private. They grow out of behavioral patterns the System's been watching, tuned to push that Player toward a threshold or test one particular capacity."
    },
    {
      "name": "Recurring Minor Scenarios",
      "chapter": 8,
      "desc": "One goes off somewhere in the city every day. Not every district sees one, but citywide, Scenarios are a permanent background condition."
    },
    {
      "name": "Class Advancement Tasks",
      "chapter": 61,
      "desc": "A Level 20 Player can receive an advancement task. Eligibility and completion are separate; the available objective depends on the particular quest."
    }
  ],
  "namedTypes": [
    {
      "name": "CLAIM",
      "chapter": 8,
      "desc": "Contest a designated node between factions. The fight around the node usually pays better than the node itself."
    },
    {
      "name": "SUPPLY",
      "chapter": 8,
      "desc": "Spawn resource caches weighted to a district's economic value, not scattered at random."
    },
    {
      "name": "RANKING",
      "chapter": 8,
      "desc": "Publish individual and faction standings citywide. The information is the event."
    },
    {
      "name": "HIDDEN OBJECTIVE",
      "chapter": 8,
      "desc": "Announce a primary objective that isn't the real one."
    },
    {
      "name": "NARRATIVE",
      "chapter": 999,
      "desc": "The rarest type. Structural choices with permanent, irreversible consequences that reshape the city's conditions. The biggest Leonelli advantages and the worst threats both come in through Narrative Events."
    }
  ],
  "keyNote": "The Leonelli information edge is heaviest in the first weeks and closes as the population learns the hard way, by attrition. Turning that early knowledge into durable structural advantage before the gap shuts is the whole game."
});

var MECHANICS_DATA = withCodexHistory({
  "contracts": {
    "chapter": 23,
    "title": "Contracts",
    "description": "Written agreements, System-recognized agreements, Matteo's enforcement skills, faction membership and commercial access are distinct. Terms depend on the particular agreement; they do not impose one universal rule of permanent service.",
    "effects": [
      "System recognition can formalize specified commitments.",
      "Breach consequences depend on the agreement and relevant skills.",
      "A paid service or research permission does not automatically transfer ownership, membership or command."
    ],
    "amplification": {
      "chapter": 999,
      "title": "Location-dependent contract effects — unconfirmed",
      "text": "The retained observations and the collection network do not yet establish a general esoteric-location amplification mechanic.",
      "peakNode": "No verified peak-amplification location is established."
    },
    "history": [
      {
        "chapter": 83,
        "effects": [
          "System recognition can formalize specified commitments.",
          "Breach consequences depend on the agreement and relevant skills.",
          "The Aurora agreement licenses Sofia's output and retains authorship; Serena negotiates a different membership agreement.",
          "A paid service or research permission does not automatically transfer ownership, membership or command."
        ]
      }
    ]
  },
  "territory": {
    "chapter": 14,
    "title": "Territory, suppression and maintenance",
    "tiers": [
      {
        "name": "Recognized territory",
        "desc": "Organizational control and registered affiliation affect the System's treatment of territory and benefits."
      },
      {
        "name": "Territorial suppression",
        "desc": "A separate effect that can reduce ordinary spawn pressure. It must not be credited to Sofia's personal reduction."
      }
    ],
    "history": [
      {
        "chapter": 74,
        "tiers": [
          {
            "name": "Recognized territory",
            "desc": "Organizational control and registered affiliation affect the System's treatment of territory and benefits."
          },
          {
            "name": "Territorial suppression",
            "desc": "A separate effect that can reduce ordinary spawn pressure. It must not be credited to Sofia's personal reduction."
          },
          {
            "name": "Maintenance and dependents",
            "desc": "Chapter 74 assesses 50 System Credits per unspecified cycle for 5,312 registered dependents in Quadrilatero Romano and Aurora. Failure can cause Authority decay, suppression loss and revoked protection status. Weekly is an assumption in dialogue, not a defined universal cycle."
          }
        ]
      }
    ]
  },
  "factionMechanics": {
    "chapter": 14,
    "title": "Faction Recognition",
    "description": "Recognized organization, territory and differentiated roles create institutional benefits. Formal affiliation can change who receives organizational effects; it is distinct from being a customer or a hired specialist.",
    "orgQuests": "Private System directives only faction leadership can see. They're generated off organizational status and territorial position. Completing them pays institutional rewards: the organization itself levels up, not the individual.",
    "note": "Commercial customers and hired specialists are not automatically faction members.",
    "history": [
      {
        "chapter": 71,
        "note": "Affiliation changes the Aurora reconciliation. Its conflicting numeric totals require a separate manuscript decision."
      }
    ]
  },
  "classSelection": {
    "chapter": 1,
    "title": "Class Selection Window",
    "description": "The initialization window lasts 72 hours. Eligible people who do not select a class are classified as NPCs/Unawakened when it closes. They lack Player-class progression; ordinary skills and indirect territorial protection can still matter.",
    "tierThresholds": [
      {
        "tier": "Tier II eligibility",
        "condition": "Level 20 can make an advancement task available. Completion is required; Cecilia advances in Chapter 72."
      },
      {
        "tier": "Later advancement",
        "condition": "Unrevealed requirements are not supplied here as a universal level table."
      }
    ]
  }
});

var ITEMS_DATA = withCodexHistory([
  {
    "id": "contact-resonator-fragment",
    "name": "CONTACT RESONATOR FRAGMENT",
    "chapter": 82,
    "type": "Incomplete System component",
    "description": "Produces a faint resonant vibration in response to Player contact; the response subsides when contact ends. Original assembly unidentified.",
    "research": "Serena's held response is a separate skill intervention. The cradle improves repeatability; later shell tests use a different material and a controlled powered input."
  }
]);

var RESEARCH_DATA = withCodexHistory([
  {
    "id": "keystone",
    "chapter": 91,
    "title": "Architect's Keystone",
    "description": "Seven connected calibrations, an origin point and a Level 20 Guardian of Thresholds. Luca advances and the pair escapes; no kill is confirmed."
  },
  {
    "id": "outside-response",
    "chapter": 115,
    "title": "Held transition and outside response",
    "description": "Three early holds coincide with responses on two independent outside instruments; later holds and ordinary attempts do not. Mechanism and complete range remain open."
  },
  {
    "id": "historical-comparison",
    "chapter": 124,
    "title": "Earlier observations",
    "description": "Paolo and Elena Venturi's retained research supports a comparison with current operation. An outside response precedes recorded claim confirmation; this does not isolate its cause or establish a complete match to the 2011 apparatus."
  }
]);
