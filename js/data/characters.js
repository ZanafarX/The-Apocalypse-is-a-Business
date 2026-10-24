// CHARACTER DATA — The Apocalypse Is a Business
// Manuscript sequence: Book Two, Chapters 61–124.
// Original global names and profile fields are retained.
// chapter = first appearance; history = chapter-gated changes to existing fields.
// skills and relationships retain their own chapter tags. 999 = unrevealed / Show All.
// Unsupported numerical build ratings are null; this is not a zero attribute score.
// New portraits use a generic silhouette rather than an invented character design.

// 999 means Show All / unrevealed. It is not a fabricated chapter number.
// History overlays preserve the original field names used by the page renderer.
// Getters read the existing chapter selector whenever a renderer reads a field.
// Outside a browser, the default is the complete current profile.
function characterChapterLimit() {
  if (typeof document === 'undefined') return 999;
  var select = document.getElementById('chapterFilter');
  var value = select ? parseInt(select.value, 10) : 999;
  return isNaN(value) ? 999 : value;
}
function withCharacterHistory(value) {
  if (Array.isArray(value)) return value.map(withCharacterHistory);
  if (!value || typeof value !== 'object') return value;
  var result = {};
  Object.keys(value).forEach(function (key) { result[key] = withCharacterHistory(value[key]); });
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
        var limit = characterChapterLimit();
        versions.forEach(function (version) {
          if (version.chapter <= limit && Object.prototype.hasOwnProperty.call(version, key)) current = version[key];
        });
        return current;
      }
    });
  });
  return result;
}

var CHARACTERS = withCharacterHistory([
  {
    "id": "bianca",
    "name": "Bianca Severa",
    "alias": null,
    "portrait": "img/characters/bianca.png",
    "chapter": 1,
    "faction": "leonelli",
    "role": "core-five",
    "title": "Intelligence Chief, Assassin, Internal Security",
    "class": "WATCHER",
    "tier": "Origin (I)",
    "classLine": "WATCHER",
    "descriptor": "For those who see what others will not.",
    "primaryStat": "VELOCITY",
    "secondaryStat": "PRECISION",
    "stats": null,
    "appearance": "Age 27. Severe in the way of someone who's stripped out everything unnecessary. Long black hair in a braided ponytail. Pale skin with a faint flush along the cheekbones, the one involuntary thing about her. Amber-gold eyes, heavy-lidded and usually downcast, the kind of gaze that takes everything in from below its own surface. Narrow face, lips held in a flat, sealed line. Toned. She moves without a wasted motion, and when she stops moving she's the stillest thing in the room. Black suit, white shirt, blue tie, flat shoes.",
    "summary": "Leonelli intelligence chief, assassin, and internal security. Reserved, exact, unsentimental. Bianca is the stillest person in any room she's in. The stillness is concentration pulled so narrow that people who haven't learned to look for it mistake it for absence. She listens more than anyone, says less than anyone, and treats every disclosed fact as leverage thrown away. She stands where she can see the doors and the reflections. When she's locked in she barely blinks. She rarely laughs.<br><br>She's unsentimental in a flinty Piedmontese register: careful about what's owed to whom, and unwilling to fake a warmth she doesn't feel. The warmth she does feel comes out as proximity, as readiness, as how fast she moves when something threatens what she's guarding. She'd rather show you than tell you. Showing you can't be misread.<br><br>Her thing with Cecilia is the central fact of her inner life, and she's decided to keep it there. Her rule on the subject is simple: the only thing worse than caring too much was looking like you did. She lives inside that rule with the discipline of someone who's decided the discipline is the relationship. What she gives, she gives as attention.<br><br>She's wary of nearly everyone outside the Core Five. Past that perimeter her default is surveillance, and her threshold for going lethal runs lower than Cecilia would like. Cecilia's told her so. Bianca took the correction on board and goes right on operating, when she judges it necessary, a step past what she's been cleared for. She knows the trade. Losing a little of Cecilia's approval is a price worth paying to make sure there's still a Cecilia around to disapprove.<br><br>Bianca was born in Genoa, daughter of a longshoreman and a woman whose work never made it onto any document her daughter's been able to dig up. Her father died when she was fourteen, in an accident the family agreed to call an accident and that Bianca, by sixteen, had decided wasn't one. The investigation she ran between sixteen and eighteen turned up answers she's never shared and left consequences she's never described. She left Genoa at nineteen and never went back.<br><br>The years between nineteen and twenty-three go down in her file as freelance security work, which is what people call them when they don't need to know more. Whatever she did then gave her the skills she uses now and the reputation that put her on the Leonellis' radar. She was twenty-three when she came in for an interview Cecilia had requested by name, off a recommendation Cecilia had checked herself.<br><br>The interview ran forty minutes. She sat across from Cecilia who'd read her whole file, asked four questions, and offered terms better than Bianca had any right to expect. She said yes before it was over. It was the first time in her life she'd sat across from a stranger and not felt the urge to get up and leave. Since joining, she has not gone looking for a different arrangement.",
    "coreFlaw": "She reaches for elimination faster than Cecilia likes, and she trusts almost nobody outside the Core Five.",
    "skills": [
      {
        "name": "QUIET APPROACH",
        "type": "Passive",
        "chapter": 20,
        "desc": "Reduces her movement signature where cover is dominant, improves concealment in dim or enclosed spaces, and grants +30% effectiveness to stealth kills made under cover.",
        "ranks": null,
        "history": [
          {
            "chapter": 45,
            "desc": "QUIET APPROACH Rank 4 lets Bianca read the moment of commitment in an observed entity before it acts. Anticipation resolves through VELOCITY and PRECISION; it is not unrestricted future sight.",
            "ranks": "Rank 4 is explicitly announced in ."
          }
        ]
      },
      {
        "name": "SILENCE FIELD",
        "type": "Active",
        "chapter": 20,
        "desc": "Creates an area of sound suppression and System interface denial. Its size, duration and recharge improve with development.",
        "ranks": null,
        "history": [
          {
            "chapter": 49,
            "desc": "At Rank 3, all sound within the designated radius is suppressed, and enclosed entities cannot transmit, receive or execute System interface actions for the duration. Existing physical momentum and ordinary strength remain dangerous.",
            "ranks": "Rank 3 is displayed in ."
          }
        ]
      },
      {
        "name": "CLOSE COVERAGE",
        "type": "Active",
        "chapter": 45,
        "desc": "Bianca designates one protected person. An incoming effect can be intercepted and redirected to her at reduced damage. Coverage is a tactical choice.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Cecilia Leonelli",
        "detail": "Bianca's whole life orbits Cecilia, a path she walked into one small choice at a time. The affection is deep and unspoken, kept under the rule she lives by: the only thing worse than caring too much was looking like you did.",
        "chapter": 1
      },
      {
        "name": "Ruggiero Montini",
        "detail": "A quiet turf war over who gets to protect Cecilia. Bianca turning up on the dangerous jobs can set Ruggiero off, though each respects how lethal the other is.",
        "chapter": 1
      },
      {
        "name": "Dario Fioretti",
        "detail": "She's the deadpan wall his jokes break against. When Dario floated being the team's \"bard\" for morale, Bianca told him flatly she'd rather \"beat it out of people.\"",
        "chapter": 1
      },
      {
        "name": "Luca Terranova",
        "detail": "The first person she's noticed instead of just monitored. That thread comes in slow.",
        "chapter": 7
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": "Watcher → Night Auditor → Widow Fang → Silence Collector",
      "unverifiedRatings": {
        "presence": 35,
        "acuity": 55,
        "force": 45,
        "resilience": 40,
        "velocity": 90,
        "precision": 80,
        "edge": 40
      }
    },
    "history": [
      {
        "chapter": 91,
        "summary": "Leonelli intelligence chief, assassin, and internal security. Reserved, exact, unsentimental. Bianca is the stillest person in any room she's in. The stillness is concentration pulled so narrow that people who haven't learned to look for it mistake it for absence. She listens more than anyone, says less than anyone, and treats every disclosed fact as leverage thrown away. She stands where she can see the doors and the reflections. When she's locked in she barely blinks. She rarely laughs.<br><br>She's unsentimental in a flinty Piedmontese register: careful about what's owed to whom, and unwilling to fake a warmth she doesn't feel. The warmth she does feel comes out as proximity, as readiness, as how fast she moves when something threatens what she's guarding. She'd rather show you than tell you. Showing you can't be misread.<br><br>Her thing with Cecilia is the central fact of her inner life, and she's decided to keep it there. Her rule on the subject is simple: the only thing worse than caring too much was looking like you did. She lives inside that rule with the discipline of someone who's decided the discipline is the relationship. What she gives, she gives as attention.<br><br>She's wary of nearly everyone outside the Core Five. Past that perimeter her default is surveillance, and her threshold for going lethal runs lower than Cecilia would like. Cecilia's told her so. Bianca took the correction on board and goes right on operating, when she judges it necessary, a step past what she's been cleared for. She knows the trade. Losing a little of Cecilia's approval is a price worth paying to make sure there's still a Cecilia around to disapprove.<br><br>Bianca was born in Genoa, daughter of a longshoreman and a woman whose work never made it onto any document her daughter's been able to dig up. Her father died when she was fourteen, in an accident the family agreed to call an accident and that Bianca, by sixteen, had decided wasn't one. The investigation she ran between sixteen and eighteen turned up answers she's never shared and left consequences she's never described. She left Genoa at nineteen and never went back.<br><br>The years between nineteen and twenty-three go down in her file as freelance security work, which is what people call them when they don't need to know more. Whatever she did then gave her the skills she uses now and the reputation that put her on the Leonellis' radar. She was twenty-three when she came in for an interview Cecilia had requested by name, off a recommendation Cecilia had checked herself.<br><br>The interview ran forty minutes. She sat across from Cecilia who'd read her whole file, asked four questions, and offered terms better than Bianca had any right to expect. She said yes before it was over. It was the first time in her life she'd sat across from a stranger and not felt the urge to get up and leave. Since joining, she has not gone looking for a different arrangement.<br><br>During Luca's Keystone quest, she reads the Guardian's committed attacks, interrupts interface-mediated action with SILENCE FIELD and uses CLOSE COVERAGE to protect him. They escape with injuries and without confirming a kill."
      },
      {
        "chapter": 106,
        "summary": "Leonelli intelligence chief, assassin, and internal security. Reserved, exact, unsentimental. Bianca is the stillest person in any room she's in. The stillness is concentration pulled so narrow that people who haven't learned to look for it mistake it for absence. She listens more than anyone, says less than anyone, and treats every disclosed fact as leverage thrown away. She stands where she can see the doors and the reflections. When she's locked in she barely blinks. She rarely laughs.<br><br>She's unsentimental in a flinty Piedmontese register: careful about what's owed to whom, and unwilling to fake a warmth she doesn't feel. The warmth she does feel comes out as proximity, as readiness, as how fast she moves when something threatens what she's guarding. She'd rather show you than tell you. Showing you can't be misread.<br><br>Her thing with Cecilia is the central fact of her inner life, and she's decided to keep it there. Her rule on the subject is simple: the only thing worse than caring too much was looking like you did. She lives inside that rule with the discipline of someone who's decided the discipline is the relationship. What she gives, she gives as attention.<br><br>She's wary of nearly everyone outside the Core Five. Past that perimeter her default is surveillance, and her threshold for going lethal runs lower than Cecilia would like. Cecilia's told her so. Bianca took the correction on board and goes right on operating, when she judges it necessary, a step past what she's been cleared for. She knows the trade. Losing a little of Cecilia's approval is a price worth paying to make sure there's still a Cecilia around to disapprove.<br><br>Bianca was born in Genoa, daughter of a longshoreman and a woman whose work never made it onto any document her daughter's been able to dig up. Her father died when she was fourteen, in an accident the family agreed to call an accident and that Bianca, by sixteen, had decided wasn't one. The investigation she ran between sixteen and eighteen turned up answers she's never shared and left consequences she's never described. She left Genoa at nineteen and never went back.<br><br>The years between nineteen and twenty-three go down in her file as freelance security work, which is what people call them when they don't need to know more. Whatever she did then gave her the skills she uses now and the reputation that put her on the Leonellis' radar. She was twenty-three when she came in for an interview Cecilia had requested by name, off a recommendation Cecilia had checked herself.<br><br>The interview ran forty minutes. She sat across from Cecilia who'd read her whole file, asked four questions, and offered terms better than Bianca had any right to expect. She said yes before it was over. It was the first time in her life she'd sat across from a stranger and not felt the urge to get up and leave. Since joining, she has not gone looking for a different arrangement.<br><br>During Luca's Keystone quest, she reads the Guardian's committed attacks, interrupts interface-mediated action with SILENCE FIELD and uses CLOSE COVERAGE to protect him. They escape with injuries and without confirming a kill.<br><br>Her killing of Enea Serra during the courier-route operation creates legal and political consequences. Protecting Cecilia and the organization does not exempt her actions from scrutiny."
      }
    ]
  },
  {
    "id": "cecilia",
    "name": "Cecilia Leonelli",
    "alias": null,
    "portrait": "img/characters/cecilia.png",
    "chapter": 1,
    "faction": "leonelli",
    "role": "core-five",
    "title": "Head of the Leonelli Organization",
    "class": "FIXER",
    "tier": "Origin (I)",
    "classLine": "FIXER",
    "descriptor": "For those who resolve what others cannot.",
    "primaryStat": "PRESENCE",
    "secondaryStat": "ACUITY",
    "stats": null,
    "appearance": "Age 26. Young face, sharp chin, features that read as pleasant right up until they read as precise. Ash-blonde hair cut to the jaw in a clean bob, slightly layered, a faint cool undertone at the tips where the light catches them differently. Bright green eyes, steady and direct. They register everything and give back almost nothing. Slim. She's never the most physically imposing person in a room, and she's built her whole presentation around that fact. Immaculate tailored black suit, white blouse, minimal jewelry. Concealed blades.",
    "summary": "Head of the Leonelli crime family. Calm, exact, patient. She governs by attention. Her quiet is the quiet of someone who's already worked out the thing the room is about to need, and is waiting to see if anyone else gets there too. She speaks softly because softness makes a room lean in, and she rarely repeats herself, because every repetition is paid for in authority. Her resting expression is a controlled near-smile, and she deploys it in inverse proportion to how comfortable the room feels. The more dangerous the moment, the more correct her manner becomes.<br><br>She reads leverage the way other people read faces. Debts, habits, fear, ambition: four entries in a ledger she keeps on everyone she meets, updated quietly in the back of every conversation. Her politeness is tuned so that disrespecting her feels less like a risk and more like a mistake of basic competence. The courtesy is so precise it does the threatening for her.<br><br>She protects her people because they're hers. That distinction matters to her. She isn't merciful and she doesn't pretend the work is anything other than what it is. What she won't do is confuse the people who depend on her with currency. Loyalty inside the organization gets treated as load-bearing structure, maintained as carefully as the building's actual walls. Loyalty outside it she earns or buys, whichever runs cheaper.<br><br>Her dislikes are specific. She's got no patience for ornamental authority, for people who mistake the trappings of power for the work that makes power. She's got even less for cowards who've arranged their whole world so they never have to make the calls their position demands. She holds grudges for years, and she holds them so calmly that people mistake it for forgiveness. That's their error. A betrayal is just an open account, and the account stays open until she closes it.<br><br>Cecilia is the only child of Aurelio Leonelli, who ran the organization until his arrest and his death in custody, five years before the System showed up. She grew up inside the Family the way the children of senior figures do: visible to everyone, named by no one, present at functions where her presence was the whole point and her opinion went unasked. She watched her father work from balconies, from doorways, from the corners of rooms she wasn't supposed to be listening in. She listened anyway.<br><br>What she learned, she learned by watching. That authority is a performance held up by infrastructure. That infrastructure is built out of relationships. That the relationships worth having are the ones where both sides have run the math on betrayal and landed on the same number. She learned her father was very good at his work, that the work involved decisions she'd one day make herself, and, eventually, that he'd never planned for her to make them.<br><br>She was twenty-one when he was arrested. Twenty-one and a half when the hearing he'd been preparing for went badly enough that the Family understood he wasn't coming home. The gold chain she wears under her shirt was a gift from the day before that hearing. She's worn it every day since.<br><br>The succession wasn't built for her. Her father had a handful of senior men whose history made them the obvious heirs, and the obvious heirs spent a short, ugly stretch assuming the obvious. What they'd missed was that Aurelio, in the years before the arrest, had quietly wired her into the organization's records, its bookkeeping, and its dealings with its steadiest commercial partners.<br><br>By the time the obvious heirs looked at the books, the books answered to her. By the time they thought about fixing that, Ruggiero Montini and Matteo Vascari had said out loud where they stood, and correcting the situation became something you'd have to settle in blood. The men who'd have had to spill it went looking for a quieter answer.<br><br>The two years that followed she's called, in private, the apprenticeship her father never meant to give her. She made mistakes. Fewer than her doubters had bet on, and the ones she made she paid for herself, in person, which built her a name separate from his. Aurelio commanded a room because he'd been born certain he belonged in it, and the certainty showed in everything he decided. Hers she has to build new every morning, out of evidence, against a bar he set and never had to clear. The bar is useful to her. The comparison wears her down. She's decided to keep both.<br><br>She still measures herself against him in private. She knows the comparison is unfair to both of them. She keeps it anyway. By twenty-five the Family was leaner, quieter, more profitable, and more disciplined than at any point in its history, and the doubters had either left or gone silent.<br><br>The System arrived eight months after her twenty-sixth birthday. She read its first announcement, clocked it as the largest rewrite of operational reality in her lifetime, and was giving orders before the first hour was out. Everything she's built since runs on one conviction she's held since the day her father didn't come home: the world won't arrange itself around her, so arranging it is her job.",
    "coreFlaw": "She underestimates irrational actors, because she expects self-interest to run the show.",
    "skills": [
      {
        "name": "MARKED LEDGER",
        "type": "Passive",
        "chapter": 14,
        "desc": "Cecilia maintains leverage and liability records that the System recognizes as marks. Her attacks and commands can interact with designated targets.",
        "ranks": null
      },
      {
        "name": "WEIGHT OF OFFICE",
        "type": "Active — Presence-based",
        "chapter": 14,
        "desc": "Cecilia applies command pressure that can make an opponent hesitate or slow its action. Resistance and the nature of the target matter.",
        "ranks": null
      },
      {
        "name": "FINAL ACCOUNT",
        "type": "Active",
        "chapter": 49,
        "desc": "Her next attack or command against a Marked Ledger target resolves as a finishing move, multiplying active effects and dealing decisive damage.",
        "ranks": "Rank 1 is explicitly displayed in . MARKED LEDGER remains in her later skill inventory."
      },
      {
        "name": "STRUCTURAL AUTHORITY",
        "type": "Passive",
        "chapter": 60,
        "desc": "While operating in a location she controls, Cecilia gains +10% effectiveness for buffs, debuffs and faction organizational skills. The effect scales with PRESENCE. Recognized affiliation matters to who can benefit.",
        "ranks": null
      },
      {
        "name": "MAKE IT WORK",
        "type": "Active — Leverage Broker",
        "chapter": 72,
        "desc": "When a resource deficiency threatens a critical objective, designated allies directly addressing the shortfall gain increased efficiency. Duration and efficiency scale with PRESENCE. Cooldown: 48 hours.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Bianca Severa",
        "detail": "Cecilia trusts Bianca to hold the line and to keep her alive, no questions asked. Bianca is her constant shadow, and even guarded as she is, Cecilia knows the loyalty for what it is and gives it back. As she once put it, they \"don't scare easily, you and me.\"",
        "chapter": 1
      },
      {
        "name": "Ruggiero Montini",
        "detail": "She respects the years he's put in, but she's forever managing how protective he gets, making sure his urge to shield her doesn't step on her authority or turn into a liability.",
        "chapter": 1
      },
      {
        "name": "Matteo Vascari",
        "detail": "She leans hard on his counsel and his steadiness. She took the Family young, and she values that Matteo gives her professional respect instead of treating her like a kid.",
        "chapter": 1
      },
      {
        "name": "Dario Fioretti",
        "detail": "She likes how clever he is and how well he reads people. She won't let him get reckless, but she enjoys the banter, and in quiet moments she lets a looser, more honest dynamic surface between them.",
        "chapter": 1
      },
      {
        "name": "Luca Terranova",
        "detail": "Her lead analyst and an important intellectual collaborator. He is outside the Core Five and remains aware of the coercion behind his recruitment.",
        "chapter": 5
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": "Fixer → Leverage Broker → Sovereign Fixer → Final Arbiter",
      "unverifiedRatings": {
        "presence": 95,
        "acuity": 85,
        "force": 20,
        "resilience": 35,
        "velocity": 50,
        "precision": 45,
        "edge": 65
      }
    },
    "history": [
      {
        "chapter": 72,
        "class": "LEVERAGE BROKER",
        "tier": "Tier II",
        "classLine": "Fixer → Leverage Broker"
      },
      {
        "chapter": 72,
        "summary": "Head of the Leonelli crime family. Calm, exact, patient. She governs by attention. Her quiet is the quiet of someone who's already worked out the thing the room is about to need, and is waiting to see if anyone else gets there too. She speaks softly because softness makes a room lean in, and she rarely repeats herself, because every repetition is paid for in authority. Her resting expression is a controlled near-smile, and she deploys it in inverse proportion to how comfortable the room feels. The more dangerous the moment, the more correct her manner becomes.<br><br>She reads leverage the way other people read faces. Debts, habits, fear, ambition: four entries in a ledger she keeps on everyone she meets, updated quietly in the back of every conversation. Her politeness is tuned so that disrespecting her feels less like a risk and more like a mistake of basic competence. The courtesy is so precise it does the threatening for her.<br><br>She protects her people because they're hers. That distinction matters to her. She isn't merciful and she doesn't pretend the work is anything other than what it is. What she won't do is confuse the people who depend on her with currency. Loyalty inside the organization gets treated as load-bearing structure, maintained as carefully as the building's actual walls. Loyalty outside it she earns or buys, whichever runs cheaper.<br><br>Her dislikes are specific. She's got no patience for ornamental authority, for people who mistake the trappings of power for the work that makes power. She's got even less for cowards who've arranged their whole world so they never have to make the calls their position demands. She holds grudges for years, and she holds them so calmly that people mistake it for forgiveness. That's their error. A betrayal is just an open account, and the account stays open until she closes it.<br><br>Cecilia is the only child of Aurelio Leonelli, who ran the organization until his arrest and his death in custody, five years before the System showed up. She grew up inside the Family the way the children of senior figures do: visible to everyone, named by no one, present at functions where her presence was the whole point and her opinion went unasked. She watched her father work from balconies, from doorways, from the corners of rooms she wasn't supposed to be listening in. She listened anyway.<br><br>What she learned, she learned by watching. That authority is a performance held up by infrastructure. That infrastructure is built out of relationships. That the relationships worth having are the ones where both sides have run the math on betrayal and landed on the same number. She learned her father was very good at his work, that the work involved decisions she'd one day make herself, and, eventually, that he'd never planned for her to make them.<br><br>She was twenty-one when he was arrested. Twenty-one and a half when the hearing he'd been preparing for went badly enough that the Family understood he wasn't coming home. The gold chain she wears under her shirt was a gift from the day before that hearing. She's worn it every day since.<br><br>The succession wasn't built for her. Her father had a handful of senior men whose history made them the obvious heirs, and the obvious heirs spent a short, ugly stretch assuming the obvious. What they'd missed was that Aurelio, in the years before the arrest, had quietly wired her into the organization's records, its bookkeeping, and its dealings with its steadiest commercial partners.<br><br>By the time the obvious heirs looked at the books, the books answered to her. By the time they thought about fixing that, Ruggiero Montini and Matteo Vascari had said out loud where they stood, and correcting the situation became something you'd have to settle in blood. The men who'd have had to spill it went looking for a quieter answer.<br><br>The two years that followed she's called, in private, the apprenticeship her father never meant to give her. She made mistakes. Fewer than her doubters had bet on, and the ones she made she paid for herself, in person, which built her a name separate from his. Aurelio commanded a room because he'd been born certain he belonged in it, and the certainty showed in everything he decided. Hers she has to build new every morning, out of evidence, against a bar he set and never had to clear. The bar is useful to her. The comparison wears her down. She's decided to keep both.<br><br>She still measures herself against him in private. She knows the comparison is unfair to both of them. She keeps it anyway. By twenty-five the Family was leaner, quieter, more profitable, and more disciplined than at any point in its history, and the doubters had either left or gone silent.<br><br>The System arrived eight months after her twenty-sixth birthday. She read its first announcement, clocked it as the largest rewrite of operational reality in her lifetime, and was giving orders before the first hour was out. Everything she's built since runs on one conviction she's held since the day her father didn't come home: the world won't arrange itself around her, so arranging it is her job.<br><br>She advances to Leverage Broker at Level 20 after resolving the Aurora anomaly through a binding protection and vassalage agreement. The arrangement preserves the party and Sofia's authorship while bringing their activity under recognized Leonelli Authority."
      },
      {
        "chapter": 100,
        "summary": "Head of the Leonelli crime family. Calm, exact, patient. She governs by attention. Her quiet is the quiet of someone who's already worked out the thing the room is about to need, and is waiting to see if anyone else gets there too. She speaks softly because softness makes a room lean in, and she rarely repeats herself, because every repetition is paid for in authority. Her resting expression is a controlled near-smile, and she deploys it in inverse proportion to how comfortable the room feels. The more dangerous the moment, the more correct her manner becomes.<br><br>She reads leverage the way other people read faces. Debts, habits, fear, ambition: four entries in a ledger she keeps on everyone she meets, updated quietly in the back of every conversation. Her politeness is tuned so that disrespecting her feels less like a risk and more like a mistake of basic competence. The courtesy is so precise it does the threatening for her.<br><br>She protects her people because they're hers. That distinction matters to her. She isn't merciful and she doesn't pretend the work is anything other than what it is. What she won't do is confuse the people who depend on her with currency. Loyalty inside the organization gets treated as load-bearing structure, maintained as carefully as the building's actual walls. Loyalty outside it she earns or buys, whichever runs cheaper.<br><br>Her dislikes are specific. She's got no patience for ornamental authority, for people who mistake the trappings of power for the work that makes power. She's got even less for cowards who've arranged their whole world so they never have to make the calls their position demands. She holds grudges for years, and she holds them so calmly that people mistake it for forgiveness. That's their error. A betrayal is just an open account, and the account stays open until she closes it.<br><br>Cecilia is the only child of Aurelio Leonelli, who ran the organization until his arrest and his death in custody, five years before the System showed up. She grew up inside the Family the way the children of senior figures do: visible to everyone, named by no one, present at functions where her presence was the whole point and her opinion went unasked. She watched her father work from balconies, from doorways, from the corners of rooms she wasn't supposed to be listening in. She listened anyway.<br><br>What she learned, she learned by watching. That authority is a performance held up by infrastructure. That infrastructure is built out of relationships. That the relationships worth having are the ones where both sides have run the math on betrayal and landed on the same number. She learned her father was very good at his work, that the work involved decisions she'd one day make herself, and, eventually, that he'd never planned for her to make them.<br><br>She was twenty-one when he was arrested. Twenty-one and a half when the hearing he'd been preparing for went badly enough that the Family understood he wasn't coming home. The gold chain she wears under her shirt was a gift from the day before that hearing. She's worn it every day since.<br><br>The succession wasn't built for her. Her father had a handful of senior men whose history made them the obvious heirs, and the obvious heirs spent a short, ugly stretch assuming the obvious. What they'd missed was that Aurelio, in the years before the arrest, had quietly wired her into the organization's records, its bookkeeping, and its dealings with its steadiest commercial partners.<br><br>By the time the obvious heirs looked at the books, the books answered to her. By the time they thought about fixing that, Ruggiero Montini and Matteo Vascari had said out loud where they stood, and correcting the situation became something you'd have to settle in blood. The men who'd have had to spill it went looking for a quieter answer.<br><br>The two years that followed she's called, in private, the apprenticeship her father never meant to give her. She made mistakes. Fewer than her doubters had bet on, and the ones she made she paid for herself, in person, which built her a name separate from his. Aurelio commanded a room because he'd been born certain he belonged in it, and the certainty showed in everything he decided. Hers she has to build new every morning, out of evidence, against a bar he set and never had to clear. The bar is useful to her. The comparison wears her down. She's decided to keep both.<br><br>She still measures herself against him in private. She knows the comparison is unfair to both of them. She keeps it anyway. By twenty-five the Family was leaner, quieter, more profitable, and more disciplined than at any point in its history, and the doubters had either left or gone silent.<br><br>The System arrived eight months after her twenty-sixth birthday. She read its first announcement, clocked it as the largest rewrite of operational reality in her lifetime, and was giving orders before the first hour was out. Everything she's built since runs on one conviction she's held since the day her father didn't come home: the world won't arrange itself around her, so arranging it is her job.<br><br>She advances to Leverage Broker at Level 20 after resolving the Aurora anomaly through a binding protection and vassalage agreement. The arrangement preserves the party and Sofia's authorship while bringing their activity under recognized Leonelli Authority.<br><br>At Mirafiori she uses MAKE IT WORK to conserve a limited field reserve. Cooperation with the Corporate Restoration Bloc creates a useful asset and an expensive relationship, rather than eliminating a rival."
      },
      {
        "chapter": 124,
        "summary": "Head of the Leonelli crime family. Calm, exact, patient. She governs by attention. Her quiet is the quiet of someone who's already worked out the thing the room is about to need, and is waiting to see if anyone else gets there too. She speaks softly because softness makes a room lean in, and she rarely repeats herself, because every repetition is paid for in authority. Her resting expression is a controlled near-smile, and she deploys it in inverse proportion to how comfortable the room feels. The more dangerous the moment, the more correct her manner becomes.<br><br>She reads leverage the way other people read faces. Debts, habits, fear, ambition: four entries in a ledger she keeps on everyone she meets, updated quietly in the back of every conversation. Her politeness is tuned so that disrespecting her feels less like a risk and more like a mistake of basic competence. The courtesy is so precise it does the threatening for her.<br><br>She protects her people because they're hers. That distinction matters to her. She isn't merciful and she doesn't pretend the work is anything other than what it is. What she won't do is confuse the people who depend on her with currency. Loyalty inside the organization gets treated as load-bearing structure, maintained as carefully as the building's actual walls. Loyalty outside it she earns or buys, whichever runs cheaper.<br><br>Her dislikes are specific. She's got no patience for ornamental authority, for people who mistake the trappings of power for the work that makes power. She's got even less for cowards who've arranged their whole world so they never have to make the calls their position demands. She holds grudges for years, and she holds them so calmly that people mistake it for forgiveness. That's their error. A betrayal is just an open account, and the account stays open until she closes it.<br><br>Cecilia is the only child of Aurelio Leonelli, who ran the organization until his arrest and his death in custody, five years before the System showed up. She grew up inside the Family the way the children of senior figures do: visible to everyone, named by no one, present at functions where her presence was the whole point and her opinion went unasked. She watched her father work from balconies, from doorways, from the corners of rooms she wasn't supposed to be listening in. She listened anyway.<br><br>What she learned, she learned by watching. That authority is a performance held up by infrastructure. That infrastructure is built out of relationships. That the relationships worth having are the ones where both sides have run the math on betrayal and landed on the same number. She learned her father was very good at his work, that the work involved decisions she'd one day make herself, and, eventually, that he'd never planned for her to make them.<br><br>She was twenty-one when he was arrested. Twenty-one and a half when the hearing he'd been preparing for went badly enough that the Family understood he wasn't coming home. The gold chain she wears under her shirt was a gift from the day before that hearing. She's worn it every day since.<br><br>The succession wasn't built for her. Her father had a handful of senior men whose history made them the obvious heirs, and the obvious heirs spent a short, ugly stretch assuming the obvious. What they'd missed was that Aurelio, in the years before the arrest, had quietly wired her into the organization's records, its bookkeeping, and its dealings with its steadiest commercial partners.<br><br>By the time the obvious heirs looked at the books, the books answered to her. By the time they thought about fixing that, Ruggiero Montini and Matteo Vascari had said out loud where they stood, and correcting the situation became something you'd have to settle in blood. The men who'd have had to spill it went looking for a quieter answer.<br><br>The two years that followed she's called, in private, the apprenticeship her father never meant to give her. She made mistakes. Fewer than her doubters had bet on, and the ones she made she paid for herself, in person, which built her a name separate from his. Aurelio commanded a room because he'd been born certain he belonged in it, and the certainty showed in everything he decided. Hers she has to build new every morning, out of evidence, against a bar he set and never had to clear. The bar is useful to her. The comparison wears her down. She's decided to keep both.<br><br>She still measures herself against him in private. She knows the comparison is unfair to both of them. She keeps it anyway. By twenty-five the Family was leaner, quieter, more profitable, and more disciplined than at any point in its history, and the doubters had either left or gone silent.<br><br>The System arrived eight months after her twenty-sixth birthday. She read its first announcement, clocked it as the largest rewrite of operational reality in her lifetime, and was giving orders before the first hour was out. Everything she's built since runs on one conviction she's held since the day her father didn't come home: the world won't arrange itself around her, so arranging it is her job.<br><br>She advances to Leverage Broker at Level 20 after resolving the Aurora anomaly through a binding protection and vassalage agreement. The arrangement preserves the party and Sofia's authorship while bringing their activity under recognized Leonelli Authority.<br><br>At Mirafiori she uses MAKE IT WORK to conserve a limited field reserve. Cooperation with the Corporate Restoration Bloc creates a useful asset and an expensive relationship, rather than eliminating a rival.<br><br>She negotiates recurring freight and municipal services while the CRB remains a viable competitor. Bianca's conduct remains under inquiry, and the research network's larger purpose remains unresolved."
      }
    ]
  },
  {
    "id": "dario",
    "name": "Dario Fioretti",
    "alias": null,
    "portrait": "img/characters/dario.png",
    "chapter": 1,
    "faction": "leonelli",
    "role": "core-five",
    "title": "Operator — Smuggling, Vice, Street-Facing Deals",
    "class": "RUNNER",
    "tier": "Origin (I)",
    "classLine": "RUNNER",
    "descriptor": "For those who move faster than consequences.",
    "primaryStat": "EDGE",
    "secondaryStat": "PRESENCE",
    "stats": null,
    "appearance": "Age 33. Lean, with the loose posture of someone who's never needed to take up more room than he feels like taking. Dark black hair, longer on top and swept hard to one side, too consistent to be an accident. Full dark beard at medium length, a little ragged at the edges. Blue-tinted aviator glasses across the bridge of his nose, doing very little to hide what's underneath. The expression underneath is the headline: a half-smile that reads as genuine and calculated at once, the face of a man who's already decided he's the most interesting person in the room and is waiting to find out if you agree. Blue suit with a flashier cut than the others, white shirt, dark tie.",
    "summary": "Leonelli operator. Fast-talking, charming, watchful. Dario's the one member of the Core Five who's decided the work ought to be fun. He flirts on purpose, needles on purpose, and pokes at how tightly people are wound, because tightness is information and information is currency. The charm is real, in that he never had to build it, and strategic, in that he's spent most of his adult life sharpening what to do with it. He knows the effect he has on a room. He hasn't found a reason to dim it.<br><br>Under the show he's ruthless and practical. He fiddles with his cufflinks when he's reading a room he hasn't finished reading. He samples the food and the drink first in unfamiliar places. He never forgets an insult and pretends he has, because the pretending keeps the person who threw it relaxed, and a relaxed mark is a mark with his guard down. He's the youngest of the Core Five and the one whose social register sits closest to the streets the organization runs on. He uses that carefully. The carelessness, like the charm, is the act.<br><br>Dario was born in Naples and landed in Turin at fourteen, with an aunt whose explanation for why they'd left has changed three times over the years and stopped getting asked for. He grew up in Aurora, went to school when he felt like it, and learned the city the way the people who actually run cities learn them: block by block, contact by contact, debt by debt. By seventeen he was running small errands for small operators. By twenty, larger errands for larger ones. By twenty-three he'd been arrested twice, charged once, convicted never, and his name had started turning up in the conversations that decide who moves up in the city's informal economy.<br><br>He met Aurelio Leonelli at twenty-five, in circumstances he's described three different ways depending on who's listening. The version closest to true involves a deal that should've gone badly for the Leonellis and didn't, because Dario, planted to be the loose end, had done the math and figured the long-term value of being useful to Aurelio beat the short-term value of the people paying him. Aurelio noticed. The conversation that followed came with a job offer. Dario took it.<br><br>He worked under Aurelio for three years before the arrest. In that time he was the operator who could go where the senior men couldn't, into the markets and the clubs and the neighborhoods where a Leonelli suit was a liability. He built relationships none of the others could've built and kept them up in registers none of the others could've held. By the time Aurelio went down, Dario looked junior on paper and was quietly running a parallel network the senior figures only half understood.<br><br>Choosing Cecilia took roughly as long as it took her to ask. Before she'd walked into the room he'd already worked out that she was the most interesting outcome on the board, and that working for her would be more entertaining than working for anyone she might shove aside. The math has held up. He still tests her boundaries on purpose, like a man who's decided the boundaries themselves are part of what makes her worth working for. She lets him, up to a point, and corrects him when he crosses it. He notices, every time, that the correction is exact. He hasn't gotten tired of the precision yet.",
    "coreFlaw": "He takes risks because he trusts how fast he can adapt, and that trust isn't always earned.",
    "skills": [
      {
        "name": "READ THE ROOM",
        "type": "Passive",
        "chapter": 22,
        "desc": "The second Dario walks into a space, he maps where everyone's head is at, emotionally and motivationally. The System formalizes it as a passive alignment display: a rough read on the gap between what people are saying and what they actually want.",
        "ranks": null
      },
      {
        "name": "SUPPLY LINE",
        "type": "Active",
        "chapter": 22,
        "desc": "Dario carries a running mental map of the workable trade routes, contacts, and resource nodes across a given territory. Higher ranks ping him with a System notification when a key route gets compromised, before there's anything visible to see.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Cecilia Leonelli",
        "detail": "He loves poking at her boundaries with jokes and casual nonsense, and he's genuinely compelled by how completely she holds control. He gets that she's sharpening him into a better asset, and he's all in on the process.",
        "chapter": 1
      },
      {
        "name": "Bianca Severa",
        "detail": "He likes needling her with his loose attitude, casually offering her a cigarette in the middle of a mobilization just to watch her turn it down.",
        "chapter": 1
      },
      {
        "name": "Ruggiero Montini",
        "detail": "He lays the fast-talking, improvised groundwork that sets up Ruggiero's muscle and Matteo's legal traps. He'll dive straight into the messy, unpredictable crowds the older veterans would rather avoid.",
        "chapter": 1
      },
      {
        "name": "Serena Marini",
        "detail": "Genuinely fond of her. Hasn't caused a problem yet.",
        "chapter": 87
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": "Runner → Silk Knife → Vice Broker → Smiling Revenant",
      "unverifiedRatings": {
        "presence": 70,
        "acuity": 65,
        "force": 45,
        "resilience": 35,
        "velocity": 60,
        "precision": 50,
        "edge": 80
      }
    }
  },
  {
    "id": "matteo",
    "name": "Matteo Vascari",
    "alias": null,
    "portrait": "img/characters/matteo.png",
    "chapter": 1,
    "faction": "leonelli",
    "role": "core-five",
    "title": "Consigliere — Contracts, Records, Formal Strategy",
    "class": "ADVOCATE",
    "tier": "Origin (I)",
    "classLine": "ADVOCATE",
    "descriptor": "For those who make terms hold.",
    "primaryStat": "ACUITY",
    "secondaryStat": "PRESENCE",
    "stats": null,
    "appearance": "Age 49. Lean and broad-shouldered, with the kind of presence that makes his stillness feel like a choice. Silver-white hair swept back in a dramatic wave, dark streaks still running through it, the effect landing somewhere between distinguished and severe. Heavy dark brows pressed down over blue-tinted aviator glasses he wears by default, not for effect. The beard is full and shaped, dark going to silver at the chin. Angular cheekbones, a long jaw, a face that broadcasts authority without trying and skepticism without moving. Black suit, white shirt, black tie.",
    "summary": "Leonelli consigliere. Controlled, educated, exact. Matteo is the most controlled person in the Core Five and one of the most controlled in the city. The control doesn't look like stillness. He's animated, articulate, happy to argue. What's controlled is the choosing: every word he lets out is one he means, and he'll fix sloppy wording in other people mid-sentence, the way you'd wipe down a counter, not to score a point. He cleans his glasses when he's thinking, a tic so reliable the rest of the Core Five reads it as a clock. When the glasses come off, something's being worked out, and the window for interrupting has closed. He reads contracts twice even when he wrote them.<br><br>He's the best speaker in the group in any formal setting and the most dangerous writer in the group in any setting at all. He's the only one who can argue with Cecilia in front of others without costing her authority, because he argues from evidence, and because she trusts him not to open his mouth unless he's ready to be right.<br><br>Matteo was born in Asti, second son of a notarial family whose practice had run out of the same building for four generations. He read law at Turin, passed his exams on the first try, and was offered partnership in his father's firm at twenty-six. He turned it down. The partnership, he'd already worked out, meant forty years of property transfers, marriage contracts, and the winding-up of estates whose only real complications were settled long before the paperwork hit his desk. He wanted the complications nobody had settled yet.<br><br>He met Aurelio Leonelli at thirty, through a mutual acquaintance who'd been told, in terms Matteo didn't understand at the time, that the introduction would be appreciated. The conversation ran three hours. By the end Aurelio had offered him a retainer to handle the legitimate side of various arrangements whose other sides were handled elsewhere, and Matteo had taken it. Within five years the legitimate side had grown into a practice of its own. Within ten it was the most quietly influential consigliere seat in Piedmont. Studio Vascari, the notarial office on the ground floor of Palazzo Valperga, was the public face of work no public document ever named.<br><br>He served Aurelio for nineteen years, well enough that in their last conversation before the arrest, Aurelio named him as one of two men he trusted to keep the organization alive in any form he'd recognize. The other was Ruggiero. Nobody framed it as a succession talk at the time. Matteo has since reread it as exactly that.<br><br>Lining up behind Cecilia after Aurelio died was the easiest professional call he's ever made. He'd watched her grow up. He'd watched her father shape her, on purpose and otherwise. He'd watched her work the two years before the arrest, and he'd concluded she was, by a wide and measurable margin, the most capable person in the building. Backing her was just acknowledging that Aurelio had built a successor without meaning to, and that the Family was better off in her hands than anyone else's.<br><br>He treats Cecilia with professional respect, the only register he's ever offered anyone, and one she values precisely because it never wavers. In private, on rare occasions, he tells her to rest. She hasn't asked him to stop.",
    "coreFlaw": "Pride in his own intellect is the main one. He puts too much faith in systems he believes can be fully understood.",
    "skills": [
      {
        "name": "BINDING CLAUSE / BREACH PENALTY",
        "type": "Active",
        "chapter": 25,
        "desc": "Agreements Matteo formalizes carry weight the System will enforce. Break one and you trigger a Breach Penalty, a consequence the System registers and applies to whoever broke faith. Higher ranks add compulsion effects, enforcement tied to territory, and automatic flagging straight into Cecilia's Marked Ledger.",
        "ranks": null
      },
      {
        "name": "PRECEDENT",
        "type": "Unrevealed author-lore skill",
        "chapter": 999,
        "desc": "Matteo holds exact recall of any formalized agreement he's authored, witnessed, or analyzed. Higher ranks stretch it to spoken agreements made within earshot. He's a living archive of every binding commitment in reach.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Cecilia Leonelli",
        "detail": "He's old enough to be her father and careful never to play it that way. He keeps the dynamic professional, acts as her sounding board, and now and then tells her to rest, a quiet, fatherly support she privately appreciates.",
        "chapter": 1
      },
      {
        "name": "Dario Fioretti",
        "detail": "He puts up with Dario's looseness, and often weighs his unorthodox plans, like flipping informal defectors out of rival factions, with a critical but open mind.",
        "chapter": 1
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": "Advocate → Pact Advocate → Veiled Magistrate → Covenant Chancellor",
      "unverifiedRatings": {
        "presence": 70,
        "acuity": 90,
        "force": 25,
        "resilience": 40,
        "velocity": 35,
        "precision": 50,
        "edge": 55
      }
    }
  },
  {
    "id": "ruggiero",
    "name": "Ruggiero Montini",
    "alias": null,
    "portrait": "img/characters/ruggiero.png",
    "chapter": 1,
    "faction": "leonelli",
    "role": "core-five",
    "title": "Enforcer and Collections Chief",
    "class": "COLLECTOR",
    "tier": "Origin (I)",
    "classLine": "COLLECTOR",
    "descriptor": "For those who claim what is owed.",
    "primaryStat": "FORCE",
    "secondaryStat": "RESILIENCE",
    "stats": null,
    "appearance": "Age 43. Tallest in the group, broad through the shoulders and neck in a way that shrinks the rooms he walks into. Completely bald, the skull large and cleanly shaped. Ice-blue eyes set deep under a heavy brow that's pressed permanently down, so his face reads as anger at rest. It isn't anger. It's just his face. The brow's creased from decades of use, and the whole impression is of something that's absorbed a lot of force and is ready to take more. Strong jaw, wide nose, lips in a flat line. A scar runs from his left temple down to the cheekbone. Dark suit cut for a heavy frame, white shirt, striped tie.",
    "summary": "Leonelli enforcer and collections chief. Quiet, disciplined, literal. Ruggiero doesn't posture, and that absence is the most consistent thing about him. In a room full of men trained to project, he projects nothing he hasn't already earned, and the room clocks the difference. He jokes rarely. When he does it's dry, blunt, and pointed straight at the kind of pretension he's spent forty years being patient with. He checks the exits and the chokepoints on autopilot the second he's through a door. He rolls his shoulders before a fight.<br><br>His body's been the tool of his work for so long that it runs a beat ahead of his attention. He moves through spaces like they're slightly too small for him, which they generally are, and he does it without knocking anything over, because he's spent a lifetime learning the exact dimensions of rooms he doesn't fit in.<br><br>He's flatly intolerant of any disrespect aimed at Cecilia, and the intolerance is structural, not sentimental. He's decided her authority is the load-bearing wall of the whole organization, and any disrespect you let slide against it weakens the wall. When he thinks she's wrong he tells her, and only her. In public the deference is total, including on the calls he argued against in the room ten minutes earlier.<br><br>His patience for deliberation is thin. The moment a decision turns into discussion and discussion turns into stalling, Ruggiero is the voice naming what the delay is going to cost. He isn't always right. He's right often enough that Cecilia treats his impatience as an input to weigh rather than a habit to manage.<br><br>Ruggiero came into the Leonelli organization at nineteen, hired by Cecilia's father in the kind of arrangement that was common then and doesn't get talked through anymore. He came up from Bari, youngest of three brothers and the only one to see thirty. The scar at his temple is from the second of the two events that left him an only child. The rest of his scars don't show in any room he's dressed for.<br><br>He worked for Aurelio Leonelli for nineteen years before the arrest. Over that stretch he became, in order, a competent enforcer, a respected one, a feared one, and finally the head of enforcement and collections. None of it was flashy. He got promoted because the work landed correctly and on time, and because the men he was handed either rose to his standard or moved on. The reputation he built was for never reopening a decision once he'd made it.<br><br>When Aurelio was arrested, Ruggiero sat through one meeting between the obvious heirs and the other senior figures, listened for ninety minutes, and announced at the end of it, to the whole room, that the Family was Cecilia's and that any other outcome would have to come through him. Everyone understood that as the close of the discussion. In the five years since, he's given none of the men in that room a reason to reopen it. His loyalty to her runs on capability, not on her father's name. He ran the math, eyes open, and decided the Family runs better under her than under anyone else on offer.",
    "coreFlaw": "He's got no patience for liars, cowards, or ornamental authority, and he'll push for decisive force in moments where holding back would've been smarter.",
    "skills": [
      {
        "name": "IRON THRESHOLD",
        "type": "Passive",
        "chapter": 37,
        "desc": "Damage absorption rises during sustained engagement. Holding a position longer increases what Ruggiero can absorb before his output is affected.",
        "ranks": null
      },
      {
        "name": "CORRIDOR",
        "type": "Active",
        "chapter": 37,
        "desc": "Ruggiero names a stretch of space as held ground. Enemies trying to push through hit escalating resistance effects. Allies passing through get a small speed bonus.",
        "ranks": "Stacks with IRON THRESHOLD in chokepoints."
      }
    ],
    "relationships": [
      {
        "name": "Cecilia Leonelli",
        "detail": "Fiercely loyal, and quietly rattled by the new reality of Cecilia putting herself in the line of fire. He wants to be the one taking the hits, and now and then the protectiveness comes out sounding like an order.",
        "chapter": 1
      },
      {
        "name": "Matteo Vascari",
        "detail": "The two older veterans of the crew, and they move in lockstep. Matteo handles the logistics and the legal side; Ruggiero handles the part that needs hands.",
        "chapter": 1
      },
      {
        "name": "Dario Fioretti",
        "detail": "He watches Dario's charming, thrill-chasing way of meeting the apocalypse with mild disbelief, and once asked him whether squaring off against a horrific monster is \"what you call fun.\"",
        "chapter": 1
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": "Collector → Iron Collector → Execution Captain → Grave Warden",
      "unverifiedRatings": {
        "presence": 50,
        "acuity": 40,
        "force": 90,
        "resilience": 80,
        "velocity": 30,
        "precision": 45,
        "edge": 20
      }
    }
  },
  {
    "id": "francesca-esposito",
    "name": "Francesca Esposito",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 1,
    "faction": "civilian",
    "role": "civilian",
    "title": "Giorgio Esposito's older daughter",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "The older of the two Esposito sisters; maintains a composed, formal manner under pressure.",
    "summary": "Introduced during the Esposito debt meeting with her younger sister Micole.",
    "coreFlaw": null,
    "skills": [],
    "relationships": [],
    "history": [
      {
        "chapter": 90,
        "summary": "The older Esposito daughter, accustomed to representing the family in difficult conversations. Her father's overdue debt brings her and Micole into Cecilia's protection at the Palazzo. When Giorgio returns, Cecilia keeps the daughters' safety separate from the debt-service agreement he negotiates."
      },
      {
        "chapter": 118,
        "summary": "The older Esposito daughter, accustomed to representing the family in difficult conversations. Her father's overdue debt brings her and Micole into Cecilia's protection at the Palazzo. When Giorgio returns, Cecilia keeps the daughters' safety separate from the debt-service agreement he negotiates. She takes responsibility for her residential floor's household counts, distinguishes confirmed help from uncertain offers, and gives Iris meal figures for the dispatch crews. She sets limits on repeat work rather than leaving her availability open-ended."
      }
    ]
  },
  {
    "id": "giorgio",
    "name": "Esposito, G.",
    "alias": null,
    "portrait": "img/characters/giorgio.png",
    "chapter": 1,
    "faction": "civilian",
    "role": "civilian",
    "title": "Esposito debt account",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Father of Francesca and Micole; further details emerge later.",
    "summary": "The Esposito account is six weeks past due when Cecilia meets his daughters at the start of the story.",
    "coreFlaw": "Pure transactionalism can turn into its own blind spot.",
    "skills": [
      {
        "name": "READ THE TABLE",
        "type": "Analytical skill; activation type not stated",
        "chapter": 112,
        "desc": "Keeps supplied evidence, assumptions and competing explanations available for examination, including discrepancies his preferred model would overlook. It does not reveal private motives as facts.",
        "ranks": null
      },
      {
        "name": "COUNTERPLAY",
        "type": "Active",
        "chapter": 112,
        "desc": "Maintains a conditional model of one actor's decision using available evidence and assumptions. Giorgio revises it when new facts expose a mistaken priority.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Francesca Esposito",
        "chapter": 1,
        "detail": "His older daughter."
      },
      {
        "name": "Micole Esposito",
        "chapter": 1,
        "detail": "His younger daughter."
      },
      {
        "name": "Matteo Vascari",
        "chapter": 90,
        "detail": "Coordinates and examines his work for the Leonelli organization."
      },
      {
        "name": "Cecilia Leonelli",
        "chapter": 90,
        "detail": "Provides adversarial forecasts for her decisions while serving the family against his debt."
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": null,
      "unverifiedRatings": {
        "presence": 30,
        "acuity": 80,
        "force": 15,
        "resilience": 30,
        "velocity": 25,
        "precision": 40,
        "edge": 60
      }
    },
    "history": [
      {
        "chapter": 90,
        "name": "Giorgio Esposito",
        "faction": "leonelli",
        "role": "analyst",
        "title": "Analyst, Enemy Modeling Desk",
        "appearance": "Age 43, greying at the temples and carefully shaved. He makes his best jacket serve as businesswear even as its worn cuffs show the cost of his return to Turin.",
        "summary": "A former competitive poker player who became an online casino operator, Giorgio is accustomed to opponents concealing both their resources and their priorities. His family's substantial Leonelli debt outlasts the business assumptions behind it. He returns to Turin and voluntarily negotiates service against that converted debt, while keeping his daughters' protection separate from his employment terms.<br><br>On the Enemy Modeling Desk he specializes in probability under incomplete information and decisions made by adversaries. Cynical and transactional, he challenges a proposal when its structure fails rather than because its purpose troubles him. Matteo relies on his willingness to identify an unsound plan. That confidence has limits: a model is only useful while he remains willing to replace its assumptions."
      },
      {
        "chapter": 106,
        "class": "ODDSMAKER",
        "classLine": "Oddsmaker"
      },
      {
        "chapter": 112,
        "summary": "A former competitive poker player who became an online casino operator, Giorgio is accustomed to opponents concealing both their resources and their priorities. His family's substantial Leonelli debt outlasts the business assumptions behind it. He returns to Turin and voluntarily negotiates service against that converted debt, while keeping his daughters' protection separate from his employment terms.<br><br>On the Enemy Modeling Desk he specializes in probability under incomplete information and decisions made by adversaries. Cynical and transactional, he challenges a proposal when its structure fails rather than because its purpose troubles him. Matteo relies on his willingness to identify an unsound plan. That confidence has limits: a model is only useful while he remains willing to replace its assumptions.<br><br>READ THE TABLE keeps evidence and alternative explanations available for scrutiny, while COUNTERPLAY maintains a conditional model of one actor. Teresa Bosco's insistence on preserving her trained crew exposes a cash-centered assumption in his forecast. He revises the offer and the model. His class supplies disciplined analysis, not access to private thoughts or guaranteed predictions."
      }
    ]
  },
  {
    "id": "micole-esposito",
    "name": "Micole Esposito",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 1,
    "faction": "civilian",
    "role": "civilian",
    "title": "Giorgio Esposito's younger daughter",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "The younger Esposito sister; initially withdrawn and watchful beside Francesca.",
    "summary": "Introduced during the Esposito debt meeting with her older sister Francesca.",
    "coreFlaw": null,
    "skills": [],
    "relationships": [],
    "history": [
      {
        "chapter": 90,
        "summary": "The younger Esposito daughter. Initially quiet beside Francesca, she nevertheless notices uncomfortable facts about the family's finances and says what her sister would prefer to qualify. She lives at the Palazzo under protection that Cecilia keeps separate from Giorgio's debt-service terms."
      },
      {
        "chapter": 118,
        "summary": "The younger Esposito daughter. Initially quiet beside Francesca, she nevertheless notices uncomfortable facts about the family's finances and says what her sister would prefer to qualify. She lives at the Palazzo under protection that Cecilia keeps separate from Giorgio's debt-service terms. She volunteers to pack meal bags for a defined afternoon shift and declines an extension. Iris records the agreed hours, allowing her contribution to remain a bounded piece of ordinary household work."
      }
    ]
  },
  {
    "id": "santina",
    "name": "Santina",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 4,
    "faction": "leonelli",
    "role": "civilian",
    "title": "Early Leonelli recruit",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Red hair; Cecilia estimates her at nineteen or twenty.",
    "summary": "A young red-haired woman publicly discussing her abilities when Cecilia and Dario intervene against men following her. They bring her to Bianca for an informal evaluation.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "luca",
    "name": "Luca Terranova",
    "alias": "Archimede",
    "portrait": "img/characters/luca.png",
    "chapter": 5,
    "faction": "leonelli",
    "role": "analyst",
    "title": "Head of the System Analysis Division",
    "class": "ARCHITECT",
    "tier": "Origin (I)",
    "classLine": "ARCHITECT",
    "descriptor": "For those who build what others use.",
    "primaryStat": "ACUITY",
    "secondaryStat": null,
    "stats": null,
    "appearance": "Age 26. Average height, lean in a way that looks chronic rather than chosen; he forgets meals the way some people forget to answer texts. Dark hair with a faint reddish cast, permanently unkempt, falling across his forehead. Gray-purple eyes behind wire-framed glasses, usually carrying the flat look of someone who's been thinking too hard for too long. Dressed in whatever was nearest: a faded teal button-up over a white shirt, sleeves shoved to the elbow. Looks younger than he is at rest, older the moment he starts working.",
    "summary": "The first analyst the Leonellis brought in, now head of the System Analysis Division. Before the System, Luca was a competent and quietly bored data analyst at a financial modeling firm in San Donato. His real intellectual life ran under the handle \"Archimede\" on a niche gaming forum, where his MMORPG crafting simulators and market prediction tools served thousands of users who never knew his name.<br><br>The forum post that caught Cecilia's eye in the first hours after initialization wasn't the longest class-selection breakdown going around Turin. It was the most rigorously built, written for an audience he didn't have yet, digging into the language of the class descriptors for what they implied instead of what they said.<br><br>She brought him in by closing every exit before she opened the offer, then framing the deal as a meeting of interests. He signed because the arithmetic was sound, and because he could not find a better arrangement for Iris. He hasn't admitted to himself yet that he's exactly where he wants to be.",
    "coreFlaw": "Indispensable, outmaneuvered, and boxed in, and aware of all three. He's the type to reach for leverage through control of information rather than open confrontation, and he hasn't decided what he'd do with that leverage if he got it. The deeper problem he can already see: the System is reshaping how he thinks, not just sharpening it, and the only tool he'd use to study the change is the thing being changed.",
    "skills": [
      {
        "name": "LOAD-BEARING",
        "type": "Passive (developing)",
        "chapter": 42,
        "desc": "Luca instinctively finds the structural dependencies in anything he looks at: the pieces that, if you move them, bring the rest down or transform it. Right now that covers informational, organizational, and Scenario architectures. The skill has no off switch. He can't walk into a room, read a report, or sit through a briefing without clocking what's holding it up.",
        "ranks": null
      },
      {
        "name": "FRAMEWORK",
        "type": "Active (developing)",
        "chapter": 42,
        "desc": "Luca builds a predictive model of a developing situation and pushes it out as a System-legible output to a group he's designated. At low ranks it shows up as a probability estimate on their interfaces. At higher ranks it becomes a shared tactical overlay that updates live as conditions shift.",
        "ranks": "The skill that makes him irreplaceable in any complex Scenario. Also the one that makes him most dangerous to Cecilia, the day he ever turns it on understanding her specifically."
      },
      {
        "name": "Local parameter adjustment",
        "type": "System Architect capability — descriptive",
        "chapter": 99,
        "desc": "Descriptive capability label, not an announced skill name. Luca can actively maintain a limited adjustment to a selectable local relationship. Material, range, duration and effort require testing.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Cecilia Leonelli",
        "detail": "The story's most charged dynamic and the one relationship in the Core Five that's genuinely two-way on the level of intellect. She sees through almost everyone around her. Luca she can't fully see through, because he's running her own process from a different angle with different tools. The equilibrium holds because a mind she can't map is worth more to her as an ally than it is as a threat she'd have to box in.",
        "chapter": 5
      },
      {
        "name": "Iris Terranova",
        "detail": "His sister, and the emotional anchor of his storyline. Her presence in the Palazzo is what the acquisition cost, made flesh, and neither of them can quite pretend otherwise. He's protective in the way that has no clean outlet: she didn't choose to be here, and he's the one who put her here, because he couldn't see another door.",
        "chapter": 5
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": "Architect → System Architect → Framework Master → World Engine",
      "unverifiedRatings": {
        "presence": 30,
        "acuity": 85,
        "force": 20,
        "resilience": 20,
        "velocity": 25,
        "precision": 35,
        "edge": 90
      }
    },
    "history": [
      {
        "chapter": 43,
        "summary": "The first analyst the Leonellis brought in, now head of the System Analysis Division. Before the System, Luca was a competent and quietly bored data analyst at a financial modeling firm in San Donato. His real intellectual life ran under the handle \"Archimede\" on a niche gaming forum, where his MMORPG crafting simulators and market prediction tools served thousands of users who never knew his name.<br><br>The forum post that caught Cecilia's eye in the first hours after initialization wasn't the longest class-selection breakdown going around Turin. It was the most rigorously built, written for an audience he didn't have yet, digging into the language of the class descriptors for what they implied instead of what they said.<br><br>She brought him in by closing every exit before she opened the offer, then framing the deal as a meeting of interests. He signed because the arithmetic was sound, and because he could not find a better arrangement for Iris. He hasn't admitted to himself yet that he's exactly where he wants to be.<br><br>Cecilia later explicitly offers both siblings the choice to leave if Iris wants to. The offer changes his practical position without erasing how the arrangement began."
      },
      {
        "chapter": 85,
        "summary": "The first analyst the Leonellis brought in, now head of the System Analysis Division. Before the System, Luca was a competent and quietly bored data analyst at a financial modeling firm in San Donato. His real intellectual life ran under the handle \"Archimede\" on a niche gaming forum, where his MMORPG crafting simulators and market prediction tools served thousands of users who never knew his name.<br><br>The forum post that caught Cecilia's eye in the first hours after initialization wasn't the longest class-selection breakdown going around Turin. It was the most rigorously built, written for an audience he didn't have yet, digging into the language of the class descriptors for what they implied instead of what they said.<br><br>She brought him in by closing every exit before she opened the offer, then framing the deal as a meeting of interests. He signed because the arithmetic was sound, and because he could not find a better arrangement for Iris. He hasn't admitted to himself yet that he's exactly where he wants to be.<br><br>Cecilia later explicitly offers both siblings the choice to leave if Iris wants to. The offer changes his practical position without erasing how the arrangement began.<br><br>He works with Ermilio and Serena on the hidden seventh attribute. His ordinary display still labels ACUITY primary; the exact contribution of EDGE to his class remains under investigation."
      },
      {
        "chapter": 91,
        "class": "SYSTEM ARCHITECT",
        "tier": "Advanced",
        "classLine": "Architect → System Architect"
      },
      {
        "chapter": 91,
        "summary": "The first analyst the Leonellis brought in, now head of the System Analysis Division. Before the System, Luca was a competent and quietly bored data analyst at a financial modeling firm in San Donato. His real intellectual life ran under the handle \"Archimede\" on a niche gaming forum, where his MMORPG crafting simulators and market prediction tools served thousands of users who never knew his name.<br><br>The forum post that caught Cecilia's eye in the first hours after initialization wasn't the longest class-selection breakdown going around Turin. It was the most rigorously built, written for an audience he didn't have yet, digging into the language of the class descriptors for what they implied instead of what they said.<br><br>She brought him in by closing every exit before she opened the offer, then framing the deal as a meeting of interests. He signed because the arithmetic was sound, and because he could not find a better arrangement for Iris. He hasn't admitted to himself yet that he's exactly where he wants to be.<br><br>Cecilia later explicitly offers both siblings the choice to leave if Iris wants to. The offer changes his practical position without erasing how the arrangement began.<br><br>He works with Ermilio and Serena on the hidden seventh attribute. His ordinary display still labels ACUITY primary; the exact contribution of EDGE to his class remains under investigation.<br><br>He advances to System Architect at Guje di Garavot. Bianca's observation and route planning vindicate his choice of companion. The advancement offers limited local interventions, not a complete manual or global control."
      },
      {
        "chapter": 111,
        "summary": "The first analyst the Leonellis brought in, now head of the System Analysis Division. Before the System, Luca was a competent and quietly bored data analyst at a financial modeling firm in San Donato. His real intellectual life ran under the handle \"Archimede\" on a niche gaming forum, where his MMORPG crafting simulators and market prediction tools served thousands of users who never knew his name.<br><br>The forum post that caught Cecilia's eye in the first hours after initialization wasn't the longest class-selection breakdown going around Turin. It was the most rigorously built, written for an audience he didn't have yet, digging into the language of the class descriptors for what they implied instead of what they said.<br><br>She brought him in by closing every exit before she opened the offer, then framing the deal as a meeting of interests. He signed because the arithmetic was sound, and because he could not find a better arrangement for Iris. He hasn't admitted to himself yet that he's exactly where he wants to be.<br><br>Cecilia later explicitly offers both siblings the choice to leave if Iris wants to. The offer changes his practical position without erasing how the arrangement began.<br><br>He works with Ermilio and Serena on the hidden seventh attribute. His ordinary display still labels ACUITY primary; the exact contribution of EDGE to his class remains under investigation.<br><br>He advances to System Architect at Guje di Garavot. Bianca's observation and route planning vindicate his choice of companion. The advancement offers limited local interventions, not a complete manual or global control.<br><br>His shell-response adjustment transfers to another workshop, but ordinary steel provides no corresponding handle. The response ends when he releases it. He also changes the Division's working schedule after Iris challenges his assumptions about other people's time."
      }
    ]
  },
  {
    "id": "iris",
    "name": "Iris Terranova",
    "alias": null,
    "portrait": "img/characters/iris.png",
    "chapter": 6,
    "faction": "leonelli",
    "role": "analyst",
    "title": "Resident of Palazzo Valperga, Division Coordinator",
    "class": "SPARKCALLER",
    "tier": "Origin (I)",
    "classLine": "SPARKCALLER",
    "descriptor": "For those who call out what is not yet awake.",
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Age 23. Brown hair in a high, practical ponytail, a few strands always escaping around her face. Blue-gray eyes, wide and alert; the resting expression reads as mild surprise, which is misleading, because she's almost never caught off guard. It's just what attention looks like on her. Usually in a plain white top. Looks younger than she is, right up until she asks a question she already knew the answer to.",
    "summary": "Luca Terranova's younger sister and a resident of Palazzo Valperga. She was studying literature at the University of Turin when the System initialized. She's no theorist and no gamer, but she reads people the way her brother reads mechanics, with the same eye for what's implied rather than stated.<br><br>She was in the apartment when the Leonelli acquisition team showed up. She watched the whole negotiation and packed a bag without being told to. Her standing inside the Palazzo is deliberately blurry. She's no prisoner and no asset, with a position shaped by her brother's recruitment and her own developing relationships.<br><br>She runs the Analysis Division's referral pipeline, manages the team's outside contacts, and has built relationships with the people she chose to build them with. Her notebook holds observations the Division doesn't have, Matteo doesn't know about, and Cecilia would find professionally interesting and personally unwelcome. The anger isn't gone. She's just filed it.",
    "coreFlaw": "She sees too clearly, too early, inside an organization that hasn't decided what to do with someone who watches it the way she does. Her sharpest tension is with her brother. Her class makes her sensitive to latent emergence, and she isn't sure what she's watching him turn into.",
    "skills": [
      {
        "name": "LATENT SENSE",
        "type": "Unrevealed author-lore skill",
        "chapter": 999,
        "desc": "Iris picks up on suppressed or developing System-recognized potential in the people around her, as rough qualitative impressions. She doesn't have the vocabulary to pin it down, which frustrates her. It feels like intuition because she has no better frame for it yet.",
        "ranks": null
      },
      {
        "name": "SPARK",
        "type": "Unrevealed author-lore skill",
        "chapter": 999,
        "desc": "Iris discharges electrokinetic force through contact or at short range, scaled by EDGE and FORCE. The obvious use is combat. The more interesting one is diagnostic: unstable System-property objects react to the discharge in ways that reveal how they're built underneath.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Luca Terranova",
        "detail": "Her brother. The cost of his acquisition is embodied in her being here, and neither of them can fully pretend otherwise. She's watching him change. She loves him. She isn't sure the person he's becoming is someone she'd have chosen to love.",
        "chapter": 6
      },
      {
        "name": "Matteo Vascari",
        "detail": "Wary professional respect. He tested her early and she passed by asking the question he expected instead of the one he was dodging, which told him she understood the game. He's since handed her work she wasn't officially cleared for, which she takes as a compliment and a leash at the same time.",
        "chapter": 7
      },
      {
        "name": "Cecilia Leonelli",
        "detail": "The arrangement neither of them names out loud. Cecilia knows Iris is watching. Iris knows Cecilia knows. Their dealings are correct, almost cordial, and transactional all the way down.",
        "chapter": 6
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": "Sparkcaller → Arc Diviner → Latent Warden → Quickening",
      "unverifiedRatings": {
        "presence": 45,
        "acuity": 55,
        "force": 65,
        "resilience": 20,
        "velocity": 45,
        "precision": 50,
        "edge": 70
      }
    },
    "history": [
      {
        "chapter": 43,
        "summary": "Luca Terranova's younger sister and a resident of Palazzo Valperga. She was studying literature at the University of Turin when the System initialized. She's no theorist and no gamer, but she reads people the way her brother reads mechanics, with the same eye for what's implied rather than stated.<br><br>She was in the apartment when the Leonelli acquisition team showed up. She watched the whole negotiation and packed a bag without being told to. Her standing inside the Palazzo is deliberately blurry. She's no prisoner and no asset, with a position shaped by her brother's recruitment and her own developing relationships.<br><br>She runs the Analysis Division's referral pipeline, manages the team's outside contacts, and has built relationships with the people she chose to build them with. Her notebook holds observations the Division doesn't have, Matteo doesn't know about, and Cecilia would find professionally interesting and personally unwelcome. The anger isn't gone. She's just filed it.<br><br>Cecilia explicitly offers both siblings departure if Iris wants it. That promise coexists with the circumstances that brought them to the Palazzo."
      },
      {
        "chapter": 83,
        "summary": "Luca Terranova's younger sister and a resident of Palazzo Valperga. She was studying literature at the University of Turin when the System initialized. She's no theorist and no gamer, but she reads people the way her brother reads mechanics, with the same eye for what's implied rather than stated.<br><br>She was in the apartment when the Leonelli acquisition team showed up. She watched the whole negotiation and packed a bag without being told to. Her standing inside the Palazzo is deliberately blurry. She's no prisoner and no asset, with a position shaped by her brother's recruitment and her own developing relationships.<br><br>She runs the Analysis Division's referral pipeline, manages the team's outside contacts, and has built relationships with the people she chose to build them with. Her notebook holds observations the Division doesn't have, Matteo doesn't know about, and Cecilia would find professionally interesting and personally unwelcome. The anger isn't gone. She's just filed it.<br><br>Cecilia explicitly offers both siblings departure if Iris wants it. That promise coexists with the circumstances that brought them to the Palazzo.<br><br>She makes the initial approach to Serena, describes Leonelli membership candidly and secures an escorted visit with a return option if Serena declines."
      },
      {
        "chapter": 118,
        "summary": "Luca Terranova's younger sister and a resident of Palazzo Valperga. She was studying literature at the University of Turin when the System initialized. She's no theorist and no gamer, but she reads people the way her brother reads mechanics, with the same eye for what's implied rather than stated.<br><br>She was in the apartment when the Leonelli acquisition team showed up. She watched the whole negotiation and packed a bag without being told to. Her standing inside the Palazzo is deliberately blurry. She's no prisoner and no asset, with a position shaped by her brother's recruitment and her own developing relationships.<br><br>She runs the Analysis Division's referral pipeline, manages the team's outside contacts, and has built relationships with the people she chose to build them with. Her notebook holds observations the Division doesn't have, Matteo doesn't know about, and Cecilia would find professionally interesting and personally unwelcome. The anger isn't gone. She's just filed it.<br><br>Cecilia explicitly offers both siblings departure if Iris wants it. That promise coexists with the circumstances that brought them to the Palazzo.<br><br>She makes the initial approach to Serena, describes Leonelli membership candidly and secures an escorted visit with a return option if Serena declines.<br><br>Her coordination increasingly follows individual people: their actual arrival, equipment, return journeys, household obligations and consent to extra work. Francesca and Micole contribute to that understanding."
      },
      {
        "chapter": 124,
        "summary": "Luca Terranova's younger sister and a resident of Palazzo Valperga. She was studying literature at the University of Turin when the System initialized. She's no theorist and no gamer, but she reads people the way her brother reads mechanics, with the same eye for what's implied rather than stated.<br><br>She was in the apartment when the Leonelli acquisition team showed up. She watched the whole negotiation and packed a bag without being told to. Her standing inside the Palazzo is deliberately blurry. She's no prisoner and no asset, with a position shaped by her brother's recruitment and her own developing relationships.<br><br>She runs the Analysis Division's referral pipeline, manages the team's outside contacts, and has built relationships with the people she chose to build them with. Her notebook holds observations the Division doesn't have, Matteo doesn't know about, and Cecilia would find professionally interesting and personally unwelcome. The anger isn't gone. She's just filed it.<br><br>Cecilia explicitly offers both siblings departure if Iris wants it. That promise coexists with the circumstances that brought them to the Palazzo.<br><br>She makes the initial approach to Serena, describes Leonelli membership candidly and secures an escorted visit with a return option if Serena declines.<br><br>Her coordination increasingly follows individual people: their actual arrival, equipment, return journeys, household obligations and consent to extra work. Francesca and Micole contribute to that understanding.<br><br>She preserves personal boundaries around the attempt to contact her parents. Their reply reaches her and Luca through the freight network, as private correspondence rather than a research resource."
      }
    ]
  },
  {
    "id": "serena",
    "name": "Serena Marini",
    "alias": "Nullroute",
    "portrait": "img/characters/serena.png",
    "chapter": 9,
    "faction": "civilian",
    "role": "analyst",
    "title": "Gaming contact recommended by Iris",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": "For those who find where the rules end.",
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Physical description is not established at the initial mention.",
    "summary": "A gaming contact recommended by Iris Terranova under the handle Nullroute. Iris knows her work on a game economy and believes her approach could be useful.",
    "coreFlaw": "Tactically reckless by any sane standard. The analyst most likely to cause a disaster out of enthusiasm rather than resentment.",
    "skills": [
      {
        "name": "NULL STATE",
        "type": "Passive",
        "chapter": 81,
        "desc": "Lets Serena recognize certain incomplete or edge-case interactions. A usable opportunity must exist; it does not make every interaction exploitable.",
        "ranks": null
      },
      {
        "name": "EXPLOIT WINDOW",
        "type": "Active",
        "chapter": 81,
        "desc": "Lets Serena briefly hold some available interactions unresolved. Timing matters, attempts can fail, and progression conditions remain incompletely understood. She acquires the skill at Level 8; that is an acquisition milestone, not a confirmed current level.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Iris Terranova",
        "chapter": 9,
        "detail": "Iris recommends Nullroute as a potentially useful contact."
      },
      {
        "name": "Luca Terranova",
        "chapter": 83,
        "detail": "A research colleague whose capabilities complement hers without reproducing her holds."
      },
      {
        "name": "Giulia Conti",
        "chapter": 87,
        "detail": "Collaborates on repeatable contact tests and repaired conventional drones."
      },
      {
        "name": "Dario Fioretti",
        "chapter": 87,
        "detail": "Helps make the drone useful for actual field observation."
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": "Breaker → Edge Case → Undefined → Null Author",
      "unverifiedRatings": {
        "presence": 30,
        "acuity": 75,
        "force": 20,
        "resilience": 20,
        "velocity": 50,
        "precision": 60,
        "edge": 90
      }
    },
    "history": [
      {
        "chapter": 81,
        "title": "Analyst employed by the Corporate Restoration Bloc",
        "faction": "corporate-bloc",
        "appearance": "Dark hair with a teal-green gradient; restless, competitive and strongly interested in difficult mechanics.",
        "summary": "Known online as Nullroute, Serena is a former competitive speedrunner whose instinct is to test the parts of a system that other people accept as boundaries. Iris knows her work on game economies and recommends her approach before the Leonellis meet her. At the Corporate Restoration Bloc, managerial demand for useful presentations conflicts with her interest in difficult, unfinished interactions.<br><br>As a Breaker, she recognizes and briefly holds certain available interactions before they resolve. Her displayed primary stat is ACUITY. Her curiosity makes failed attempts informative, but can also tempt her to keep working beyond a sensible stopping point.",
        "class": "BREAKER",
        "tier": "Origin (I)",
        "classLine": "Breaker",
        "primaryStat": "ACUITY"
      },
      {
        "chapter": 83,
        "title": "Lead, Exploit Lab",
        "faction": "leonelli",
        "role": "analyst",
        "summary": "Known online as Nullroute, Serena is a former competitive speedrunner whose instinct is to test the parts of a system that other people accept as boundaries. Iris knows her work on game economies and recommends her approach before the Leonellis meet her. At the Corporate Restoration Bloc, managerial demand for useful presentations conflicts with her interest in difficult, unfinished interactions.<br><br>She makes an orderly departure from the Bloc and demonstrates a held interaction before negotiating Leonelli membership. The agreement provides a laboratory, resources, and defined research autonomy, preserves prior confidentiality obligations, and requires Cecilia's consent for departure. Her value lies in reproducible opportunities the other analysts cannot simply reproduce with their own classes."
      },
      {
        "chapter": 89,
        "summary": "Known online as Nullroute, Serena is a former competitive speedrunner whose instinct is to test the parts of a system that other people accept as boundaries. Iris knows her work on game economies and recommends her approach before the Leonellis meet her. At the Corporate Restoration Bloc, managerial demand for useful presentations conflicts with her interest in difficult, unfinished interactions.<br><br>She makes an orderly departure from the Bloc and demonstrates a held interaction before negotiating Leonelli membership. The agreement provides a laboratory, resources, and defined research autonomy, preserves prior confidentiality obligations, and requires Cecilia's consent for departure. Her value lies in reproducible opportunities the other analysts cannot simply reproduce with their own classes.<br><br>With Giulia she repairs conventional drones and works with Dario's people to make them useful for field observation. The drone project and the contact-test apparatus are separate pieces of work, with different practical requirements. Her displayed primary remains ACUITY; EDGE is the team's working name for a hypothesis about System interactions, rather than a confirmed new stat label on her interface."
      },
      {
        "chapter": 115,
        "summary": "Known online as Nullroute, Serena is a former competitive speedrunner whose instinct is to test the parts of a system that other people accept as boundaries. Iris knows her work on game economies and recommends her approach before the Leonellis meet her. At the Corporate Restoration Bloc, managerial demand for useful presentations conflicts with her interest in difficult, unfinished interactions.<br><br>She makes an orderly departure from the Bloc and demonstrates a held interaction before negotiating Leonelli membership. The agreement provides a laboratory, resources, and defined research autonomy, preserves prior confidentiality obligations, and requires Cecilia's consent for departure. Her value lies in reproducible opportunities the other analysts cannot simply reproduce with their own classes.<br><br>With Giulia she repairs conventional drones and works with Dario's people to make them useful for field observation. The drone project and the contact-test apparatus are separate pieces of work, with different practical requirements.<br><br>Repeated early holds during shell activation coincide with responses on two independent outside instruments. Later holds and ordinary attempts do not. She can reproduce that result without yet explaining its mechanism or full range. ACUITY remains her displayed primary; the EDGE hypothesis does not justify treating every unusual reading as proof of a new attribute."
      }
    ]
  },
  {
    "id": "giulia-conti",
    "name": "Giulia Conti",
    "alias": null,
    "portrait": "img/characters/giulia.png",
    "chapter": 11,
    "faction": "leonelli",
    "role": "analyst",
    "title": "Artificer — Division Technical Arm",
    "class": "ARTIFICER",
    "tier": "Origin (I)",
    "classLine": "ARTIFICER",
    "descriptor": "For those who coax what is built",
    "primaryStat": "PRECISION",
    "secondaryStat": "ACUITY",
    "stats": null,
    "appearance": "Age 25. Slight build, the kind that makes her look younger than she is in a full room and disappear in a crowd. Dark hair in two long braids with a faint purple tint, a choice she's kept since before any of this started. Green eyes, direct when she's focused on something, sliding off when she isn't. Darker complexion. Ink-stained fingers most days, the permanent kind that comes from technical work, not casual use. Usually a plain white t-shirt; the care she pours into objects doesn't reach her clothes. She avoids eye contact when things are unfamiliar. She holds it steady when she's explaining something she's sure of.",
    "summary": "Artificer of the System Analysis Division and the technical arm of the Leonelli operational edge. Before the System, she restored objects at a private conservation firm contracted to several of Turin's museums: quiet, credentialed work that ran on precision, patience, and an instinct for how a thing was built, because you can't fix what you don't understand. The skills the System later formalized had no professional name before it arrived.<br><br>Cecilia recruited her in the second week, and put it plainly: the things you build will keep people alive, credentials aren't the question, capability is. Giulia said yes, steadied by being wanted for something nobody had ever found a use for.<br><br>Her current output runs to the node disruptor, modified gear for Leonelli field operatives, and a restricted-license trickle to the wider protection network, which Cecilia meters out carefully to keep the technical edge in-house. In her workshop she moves without hesitating, asks straight for what she needs, and has thrown Dario out twice for being loud at the wrong moment.",
    "coreFlaw": "The anxiety in unfamiliar or high-threat places is real, not performed. She gets through a combat zone by keeping her attention on the object in her hands and off whatever's happening around her, which works right up until it doesn't.",
    "skills": [
      {
        "name": "MATERIAL SENSE",
        "type": "Passive",
        "chapter": 27,
        "desc": "Giulia reads the System properties latent in physical objects: what they'll let her modify, what won't play nice together, which stress point fails first under System-level force. It runs continuously and without her say-so, which means she hasn't been able to look at the Palazzo's infrastructure without running a structural assessment since her first week in the building.",
        "ranks": "She hasn't shared all of what she's found."
      },
      {
        "name": "INFUSE",
        "type": "Active",
        "chapter": 27,
        "desc": "Giulia works System properties into a physical object through sustained contact and focused attention. The precision it takes is no joke; sloppy infusion gives you unstable results, a lesson she's learned twice. At current ranks the process needs her workshop, the right raw materials, and time.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Cecilia Leonelli",
        "detail": "The most straightforward loyalty in the building, which is exactly why Cecilia keeps rechecking it for what she might be missing. Giulia got recognized, got a workshop, got real materials and real problems, and got told that what she built would matter. What Cecilia's watching for is the day Giulia clocks that what she builds doesn't always go where she'd send it. That day hasn't come.",
        "chapter": 11
      },
      {
        "name": "Luca Terranova",
        "detail": "Pulls her in when a Scenario analysis throws up a mechanical problem that needs a physical fix. The collaboration runs smooth and uncomplicated, by Division standards.",
        "chapter": 13
      },
      {
        "name": "Serena Marini",
        "detail": "Works with her more than anyone planned for. Exploit windows keep needing a device to prop them open. The collaboration is productive and, every so often, alarming.",
        "chapter": 87
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": "Artificer → Material Adept → Loomwright → Genesis Forge",
      "unverifiedRatings": {
        "presence": 30,
        "acuity": 65,
        "force": 10,
        "resilience": 20,
        "velocity": 25,
        "precision": 80,
        "edge": 45
      }
    },
    "history": [
      {
        "chapter": 103,
        "summary": "Artificer of the System Analysis Division and the technical arm of the Leonelli operational edge. Before the System, she restored objects at a private conservation firm contracted to several of Turin's museums: quiet, credentialed work that ran on precision, patience, and an instinct for how a thing was built, because you can't fix what you don't understand. The skills the System later formalized had no professional name before it arrived.<br><br>Cecilia recruited her in the second week, and put it plainly: the things you build will keep people alive, credentials aren't the question, capability is. Giulia said yes, steadied by being wanted for something nobody had ever found a use for.<br><br>Her current output runs to the node disruptor, modified gear for Leonelli field operatives, and a restricted-license trickle to the wider protection network, which Cecilia meters out carefully to keep the technical edge in-house. In her workshop she moves without hesitating, asks straight for what she needs, and has thrown Dario out twice for being loud at the wrong moment.<br><br>Her work with Stefano and Giovanni Baldisarri separates a material property from the housing and ordinary mechanisms that must survive it. She also builds the stands needed for controlled material tests."
      }
    ]
  },
  {
    "id": "ermilio",
    "name": "Ermilio Ferrero",
    "alias": "RaptorSix",
    "portrait": "img/characters/ermilio.png",
    "chapter": 13,
    "faction": "leonelli",
    "role": "analyst",
    "title": "Auditor — System Analysis Division",
    "class": "AUDITOR",
    "tier": "Origin (I)",
    "classLine": "AUDITOR",
    "descriptor": "For those who read what is not shown.",
    "primaryStat": "ACUITY",
    "secondaryStat": "PRECISION",
    "stats": null,
    "appearance": "Age 24. Short black hair. Yellow-amber eyes with a directness that reads as intensity until you realize it's anxiety. He looks at things the way you look at something when you're not sure it'll still be there if you glance away. Black jacket with orange-yellow accent cuffs, collar up. Looks harder than his age right up until he speaks, when the stutter comes back and revises the impression.",
    "summary": "Auditor of the System Analysis Division. A forum theory-crafter since fifteen, Ermilio spent his teens on private-server communities for games whose official support had already ended, and built up an unusual cast of mind in the process: an instinct for what's there rather than what's shown. Cut content, unreleased mechanics, developer notes left buried in the code. The handle \"RaptorSix\" came off a speedrunning technique he found and documented for a game with a twelve-person active community.<br><br>He correctly deduced several early System class mechanics from inference alone, which got him flagged by Bianca on a separate track from Luca. The two posts sat in her files together for four hours before Cecilia decided the second one was worth a visit.",
    "coreFlaw": "He's made peace with the arrangement faster than it deserves, mostly because the work is genuinely interesting. The skills he uses to help the Leonellis are the same ones he'd use to find what the Leonellis hide, from the System, and now and then from each other.",
    "skills": [
      {
        "name": "VARIABLE",
        "type": "Passive",
        "chapter": 84,
        "desc": "Ermilio sees the System flags and hidden variables hung on entities, objects, and locations: the data points the System tracks but never surfaces. Condition triggers logged across multiple instances, spawn energy piling up at a given spot, compliance flags on contracts. It arrives as a second visual layer over his normal vision, mostly unobtrusive, occasionally overwhelming where there's heavy System activity.",
        "ranks": "Where the standard interface shows a Player's class name and tier, an AUDITOR can pull the data underneath: hidden flags, accumulated trigger conditions, behavioral records, and the environmental values the System logs for its own bookkeeping."
      },
      {
        "name": "DISCREPANCY",
        "type": "Unrevealed author-lore skill",
        "chapter": 999,
        "desc": "Ermilio finds the gaps between what the System shows and what it records. When a faction's public Reputation doesn't square with its logged behavior, he sees the gap. When a contract's been technically honored in a way that guts its logged intent, he sees that too.",
        "ranks": "The skill Matteo finds most useful and most unsettling."
      }
    ],
    "relationships": [
      {
        "name": "Lorena Ferrero",
        "detail": "His wife, his anchor, and his editor. When his framing runs out past the evidence, she says so, and he listens. That's not a common dynamic in the Division, and Matteo has quietly noted it.",
        "chapter": 13
      },
      {
        "name": "Luca Terranova",
        "detail": "Complicated at first by the fact that Ermilio arrived seeing Luca as a ceiling: older, better-credentialed, working at a level he was still climbing toward. The AUDITOR/ARCHITECT dynamic has rewritten that. Luca builds models from data anyone can see; Ermilio reads data nobody else can. They need each other, which is a more comfortable footing than either of them expected.",
        "chapter": 34
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": "Auditor → Discrepant → Hidden Hand → The Witness",
      "unverifiedRatings": {
        "presence": 20,
        "acuity": 75,
        "force": 20,
        "resilience": 25,
        "velocity": 35,
        "precision": 65,
        "edge": 35
      }
    },
    "history": [
      {
        "chapter": 84,
        "summary": "Auditor of the System Analysis Division. A forum theory-crafter since fifteen, Ermilio spent his teens on private-server communities for games whose official support had already ended, and built up an unusual cast of mind in the process: an instinct for what's there rather than what's shown. Cut content, unreleased mechanics, developer notes left buried in the code. The handle \"RaptorSix\" came off a speedrunning technique he found and documented for a game with a twelve-person active community.<br><br>He correctly deduced several early System class mechanics from inference alone, which got him flagged by Bianca on a separate track from Luca. The two posts sat in her files together for four hours before Cecilia decided the second one was worth a visit.<br><br>He discovers the normally undisplayed seventh attribute by examining the underlying records beyond the six fields previously requested. The entry is directly observed; its function still requires interpretation."
      }
    ]
  },
  {
    "id": "ivan",
    "name": "Ivan Carceri",
    "alias": null,
    "portrait": "img/characters/ivan.png",
    "chapter": 13,
    "faction": "leonelli",
    "role": "analyst",
    "title": "Cartographer — Scenario Desk Lead",
    "class": "CARTOGRAPHER",
    "tier": "Origin (I)",
    "classLine": "CARTOGRAPHER",
    "descriptor": "For those who chart what is coming.",
    "primaryStat": "ACUITY",
    "secondaryStat": "VELOCITY",
    "stats": null,
    "appearance": "Age 32. Blond going platinum, pushed back from his face, receding a little at the temples in a way he hasn't registered yet. Rectangular glasses, heavy frames. Almost always in professional-grade noise-canceling headphones, around his neck or over his ears; he bought three pairs before the System arrived, for reasons he described as focus, which was technically true. Broad through the shoulders in a way that doesn't match the nervous energy he carries everywhere else. Stubble that's perpetually one day past where he meant to trim it. His resting face looks faintly aggrieved, like he's just been handed information he'd rather not have. It's not a mood. It's the permanent condition of a man whose class shows him things he can't unsee.",
    "summary": "Cartographer and Scenario Desk lead. For seven years before the System, he modeled emergency service routing in dense cities: ambulance dispatch, fire response, police deployment under shifting conditions. He was good at it because he'd grasped that systems under stress behave nothing like systems at rest, and most models break exactly where it counts. The System found that useful.<br><br>Cecilia and Bianca pulled him out during the Night of First Measure, finding him barricaded in a Crocetta apartment behind hand-drawn charts of spawn projections, creature corridors, and density estimates by district. He'd been working eighteen hours straight. The charts were startlingly accurate.<br><br>He delivers accurate reads under conditions that leave him visibly the worse for having done them, and the Division has learned to treat his physical state as a load-bearing readout. The apocalypse overwhelms him continuously; it's not a beat that resolves. He functions because the alternative is not functioning, and because he's decided his charts matter. He's probably right.",
    "coreFlaw": "The CARTOGRAPHER class cranks up a mind that was already taking in too much signal. He's most useful right at his limit, and his limit is where he breaks down, so his best outputs come at a reliable cost to his ability to produce the next one.",
    "skills": [
      {
        "name": "SURVEY",
        "type": "Passive",
        "chapter": 40,
        "desc": "Ivan takes in a low-level feed of positional and density data on System-active entities and energy buildups across a sizable radius. At rest it reads as ambient awareness: he knows which way the creatures are moving before anyone calls it in. Under stress it floods him.",
        "ranks": "The headphones are load-bearing infrastructure, not an affectation."
      },
      {
        "name": "PROJECTION",
        "type": "Active",
        "chapter": 40,
        "desc": "Ivan produces a formal predictive map of a defined area over a defined time window, rendered as a System-legible overlay he can share with designated parties. Accuracy falls off with distance and time horizon, and still beats anything you'd get from direct observation by a wide margin.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Cecilia Leonelli",
        "detail": "She pulled him out. He's aware it wasn't a rescue.",
        "chapter": 13
      },
      {
        "name": "Bianca Severa",
        "detail": "She was there for the extraction. He hasn't stopped being aware of her since.",
        "chapter": 13
      },
      {
        "name": "Luca Terranova",
        "detail": "Functional, with a running tension about framing underneath. Ivan provides the data; Luca builds the models from it. The distinction matters to Ivan because his data sometimes points at conclusions Luca's models don't reach. He's learned to flag those divergences out loud instead of letting them melt into the synthesis.",
        "chapter": 13
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": "Cartographer → Wayreader → Surveyor General → Horizon",
      "unverifiedRatings": {
        "presence": 20,
        "acuity": 75,
        "force": 25,
        "resilience": 25,
        "velocity": 60,
        "precision": 40,
        "edge": 45
      }
    },
    "history": [
      {
        "chapter": 115,
        "summary": "Cartographer and Scenario Desk lead. For seven years before the System, he modeled emergency service routing in dense cities: ambulance dispatch, fire response, police deployment under shifting conditions. He was good at it because he'd grasped that systems under stress behave nothing like systems at rest, and most models break exactly where it counts. The System found that useful.<br><br>Cecilia and Bianca pulled him out during the Night of First Measure, finding him barricaded in a Crocetta apartment behind hand-drawn charts of spawn projections, creature corridors, and density estimates by district. He'd been working eighteen hours straight. The charts were startlingly accurate.<br><br>He delivers accurate reads under conditions that leave him visibly the worse for having done them, and the Division has learned to treat his physical state as a load-bearing readout. The apocalypse overwhelms him continuously; it's not a beat that resolves. He functions because the alternative is not functioning, and because he's decided his charts matter. He's probably right.<br><br>He provides independent external references and records what his instruments and coverage can establish. An observed response is not automatically a complete explanation of its source."
      }
    ]
  },
  {
    "id": "lorena",
    "name": "Lorena Ferrero",
    "alias": null,
    "portrait": "img/characters/lorena.png",
    "chapter": 13,
    "faction": "leonelli",
    "role": "analyst",
    "title": "Scribe — System Analysis Division",
    "class": "SCRIBE",
    "tier": "Origin (I)",
    "classLine": "SCRIBE",
    "descriptor": "For those who make a record hold",
    "primaryStat": "PRECISION",
    "secondaryStat": "ACUITY",
    "stats": null,
    "appearance": "Age 24. Brown hair worn up in a high bun on working days, loose when she's off the clock, which in the Palazzo isn't often. Blue-gray eyes that go wide easily. It looks like nerves. What it actually is, is attention: she catches the things worth worrying about a half-step before everyone else, and her face shows it before she can stop it. Practical V-neck top, usually with a little ink on her hands that didn't make it onto the page. That last part bothers her.",
    "summary": "Scribe of the System Analysis Division. Matteo's contracts bind people to each other. Hers do something quieter and just as load-bearing: they establish what actually happened, in a form the System recognizes and won't let anyone rewrite later. His architecture sits on top of her foundation.<br><br>Before the System, she worked at a notarial office in the Quadrilatero: property records, witnessed signatures, the slow careful paperwork that settles who owns what. She started at nineteen and finished a legal-administration certificate on the side. The job taught her how thin the protection in a document really is, and how much of the real story lives in the parts nobody wrote down.<br><br>That second part is what she's good at, more than the careful hand: reading what isn't written. A clause that's too clean. A condition nobody stated. The System talks in clear, logical sentences, and she's the one person in the Division who hears them the way she used to read contracts, listening for the gap where the trouble always hid. She's usually right. She tends not to make a point of it.<br><br>She married Ermilio at twenty. Both families thought it was too soon, and neither of them has reconsidered. When the System hit and the only question that mattered was which faction to trust, Ermilio was still running the analysis. Lorena had already packed their bags. She decided they were going with Cecilia, and she was right about that too.",
    "coreFlaw": "She's the only person in the Division who ended up at the Palazzo entirely on someone else's account. Ermilio was the one Cecilia wanted. Lorena came with the arrangement. She sees exactly what that does to her leverage. What she's still sorting out is how she feels about an organization she joined under duress and now keeps running with her own competence.",
    "skills": [
      {
        "name": "INSCRIPTION",
        "type": "Unrevealed author-lore skill",
        "chapter": 999,
        "desc": "Lorena writes down a fact she's witnessed herself, or one that reached her through a solid chain of documentation, and the System logs it as real: authenticated, timestamped, sitting in both the physical page and the System's own registry. Precision is the whole game. A record that's sloppy, or even slightly false, comes out distorted. She feels it the moment it happens. She can't always fix it.",
        "ranks": null
      },
      {
        "name": "COLLATION",
        "type": "Unrevealed author-lore skill",
        "chapter": 999,
        "desc": "Lorena keeps perfect recall of everything she's Inscribed, and she keeps it as one connected set instead of a stack of separate pages. Every new record checks itself against all the old ones on its own. Contradictions, duplicates, things that can't both be true: they surface to her the way a misfiled deed surfaces to a clerk who knows the drawer. It's how she catches her own mistakes before they set, and how a gap she only felt at the time gets confirmed later, once the record proves she'd been reading it right.",
        "ranks": "Right now it covers her own Inscriptions. Later it reaches documents she's analyzed properly, then documents reliable people have shown her, until she can lay a stranger's record beside her own and feel exactly where it lies."
      }
    ],
    "relationships": [
      {
        "name": "Ermilio Ferrero",
        "detail": "Her husband. When his thinking runs ahead of the evidence, she's the one who reels it back in, and he listens, which is more than almost anyone else in the Division gets from him. She looks out for him the practical way, by being good enough at her own work that the organization wants to keep them both. If she's indispensable, he's safer for it.",
        "chapter": 13
      },
      {
        "name": "Matteo Vascari",
        "detail": "Probably the smoothest working relationship in the Division. Their class lines fit together cleanly, and Matteo respects precision for its own sake, which is rarer than it sounds and most of why they work. He's never once asked her to inscribe something she hadn't verified. She's noticed that. It tells her something about him. It doesn't promise anything about next time, and she knows the difference.",
        "chapter": 13
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": "Scribe → Notary → Codifier → The Canon",
      "unverifiedRatings": {
        "presence": 35,
        "acuity": 65,
        "force": 15,
        "resilience": 35,
        "velocity": 20,
        "precision": 80,
        "edge": 45
      }
    },
    "history": [
      {
        "chapter": 105,
        "summary": "Scribe of the System Analysis Division. Matteo's contracts bind people to each other. Hers do something quieter and just as load-bearing: they establish what actually happened, in a form the System recognizes and won't let anyone rewrite later. His architecture sits on top of her foundation.<br><br>Before the System, she worked at a notarial office in the Quadrilatero: property records, witnessed signatures, the slow careful paperwork that settles who owns what. She started at nineteen and finished a legal-administration certificate on the side. The job taught her how thin the protection in a document really is, and how much of the real story lives in the parts nobody wrote down.<br><br>That second part is what she's good at, more than the careful hand: reading what isn't written. A clause that's too clean. A condition nobody stated. The System talks in clear, logical sentences, and she's the one person in the Division who hears them the way she used to read contracts, listening for the gap where the trouble always hid. She's usually right. She tends not to make a point of it.<br><br>She married Ermilio at twenty. Both families thought it was too soon, and neither of them has reconsidered. When the System hit and the only question that mattered was which faction to trust, Ermilio was still running the analysis. Lorena had already packed their bags. She decided they were going with Cecilia, and she was right about that too.<br><br>She keeps experimental conditions, separate observations, permissions and stop decisions in a usable record. Her contribution includes noticing where apparently simple findings depend on definitions or omitted details."
      }
    ]
  },
  {
    "id": "sofia-power-handler",
    "name": "Sofia",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 17,
    "faction": "leonelli",
    "role": "specialist",
    "title": "Workshop recruit; former Mirafiori engineer",
    "class": "POWER HANDLER",
    "tier": null,
    "classLine": "POWER HANDLER",
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A woman in her mid-thirties.",
    "summary": "A former Mirafiori engineer found defending a generator. She can temporarily imbue mechanical objects with System energy and works with Giulia. She is distinct from the Dungeon Master Sofia Dei Guidi.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "nadia-operative",
    "name": "Nadia",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 22,
    "faction": "leonelli",
    "role": "operative",
    "title": "Leonelli surveillance operative",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "One of Dario's regular operators. She is distinct from the fuel customer Donata Sarti.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "silvio",
    "name": "Silvio",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 22,
    "faction": "leonelli",
    "role": "operative",
    "title": "Leonelli field operative",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "One of Dario's regular operators; contributes to practical equipment and field work.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "renzo",
    "name": "Renzo",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 30,
    "faction": "leonelli",
    "role": "operative",
    "title": "Leonelli operative and driver",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "Recurring field partner to Ruggiero; takes part in industrial access, transfer protection and recovery work.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "tessari",
    "name": "Tessari",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 33,
    "faction": "civilian",
    "role": "specialist",
    "title": "Freight operator and intermediary",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "A veteran operator whose pre-Integration freight relationships remain useful. Vehicles, technicians, bookings and returns still require separate commitments. No given name is established.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "greco",
    "name": "Greco",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 36,
    "faction": "leonelli",
    "role": "operative",
    "title": "Leonelli patrol leader",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "Coordinates recruits and the training bookings Sofia can actually provide.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "belmonte",
    "name": "Deputy Mayor Armano Belmonte",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 47,
    "faction": "municipio",
    "role": "faction-leader",
    "title": "Deputy mayor",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "A municipal negotiator who deals with private protection providers without simply surrendering the institutions he represents.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "calo",
    "name": "Calo",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 61,
    "faction": "leonelli",
    "role": "operative",
    "title": "Leonelli enforcer",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Missing most of one ear after a Razor-wing attack.",
    "summary": "A Leonelli enforcer whose injury is a visible reminder that ordinary patrol and protection work carry lasting costs.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "galliano",
    "name": "Signora Galliano",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 61,
    "faction": "civilian",
    "role": "civilian",
    "title": "Former renewal prospect",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "A former Leonelli renewal prospect who declines to continue under competing terms. Her decision makes the loss of clients a practical revenue problem rather than an abstract challenge to Cecilia's reputation.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "bergesio",
    "name": "Bergesio",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 62,
    "faction": "civilian",
    "role": "civilian",
    "title": "Growers' representative",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "Represents growers in supply negotiations. His contribution is access to goods and knowledge of what producers need in exchange, including the requirements attached to moving freight.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "elia-amicone",
    "name": "Shorter man in the Aurora group",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 63,
    "faction": "civilian",
    "role": "adventurer",
    "title": "Member of the Aurora group",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A shorter young man with pale forearms and pushed-up sleeves; visibly nervous at the first meeting.",
    "summary": "One of five young people occupying the unusually quiet area of Aurora.",
    "coreFlaw": null,
    "skills": [
      {
        "name": "Root restraint",
        "type": "Class capability; formal skill name not stated",
        "chapter": 68,
        "desc": "Roots rise through existing floor joints to catch limbs and hold enemies for the party. This describes the observed effect, rather than a disclosed formal skill title.",
        "ranks": null
      },
      {
        "name": "TERRAIN MANIPULATION",
        "type": "Class ability; activation type not stated",
        "chapter": 71,
        "desc": "Terrain control supports the party's positioning. A recorded narrated encounter halves its cost and grants +11% Acuity; the reduction and bonus are temporary encounter conditions.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Luca Terranova",
        "chapter": 65,
        "detail": "A technical interlocutor whose background makes the party's way of thinking familiar."
      },
      {
        "name": "Cecilia Leonelli",
        "chapter": 71,
        "detail": "The binding protection agreement brings their activity under Leonelli Authority."
      },
      {
        "name": "Sofia Dei Guidi",
        "chapter": 71,
        "detail": "A member of the same longstanding tabletop group and protected adventuring party."
      }
    ],
    "history": [
      {
        "chapter": 65,
        "name": "Elia",
        "title": "Chemistry student",
        "summary": "Originally from Foggia, Elia is a chemistry student at UniTo, in the fourth year of a three-year course when the Integration interrupts university life. He is talkative, defensive about his academic delays, and interested in sustainable agriculture. He found the others through an online tabletop recruitment post; the campaign became a friendship that survived the collapse of their ordinary lives. Returning home offered little prospect of restoring the life he wanted in Turin."
      },
      {
        "chapter": 66,
        "class": "DRUID",
        "classLine": "DRUID",
        "appearance": "Shorter than Tommaso, with pale forearms usually exposed by pushed-up sleeves. His quick explanations and nervous glances contrast with the steadier concentration he brings to the ground beneath a fight.",
        "summary": "Originally from Foggia, Elia is a chemistry student at UniTo, in the fourth year of a three-year course when the Integration interrupts university life. He is talkative, defensive about his academic delays, and interested in sustainable agriculture. He found the others through an online tabletop recruitment post; the campaign became a friendship that survived the collapse of their ordinary lives. Returning home offered little prospect of restoring the life he wanted in Turin.<br><br>He chooses Druid for growth and cultivation, then turns those interests toward the party's immediate needs. In combat he uses roots to restrain enemies and shape approaches while the others attack. His understanding of plants and terrain gives him a practical support role alongside the group's spellcasters and frontline fighters.",
        "title": "Druid and terrain support"
      },
      {
        "chapter": 71,
        "name": "Elia Amicone",
        "faction": "leonelli",
        "summary": "Originally from Foggia, Elia is a chemistry student at UniTo, in the fourth year of a three-year course when the Integration interrupts university life. He is talkative, defensive about his academic delays, and interested in sustainable agriculture. He found the others through an online tabletop recruitment post; the campaign became a friendship that survived the collapse of their ordinary lives. Returning home offered little prospect of restoring the life he wanted in Turin.<br><br>He chooses Druid for growth and cultivation, then turns those interests toward the party's immediate needs. In combat he uses roots to restrain enemies and shape approaches while the others attack. His understanding of plants and terrain gives him a practical support role alongside the group's spellcasters and frontline fighters.<br><br>The group enters Leonelli protection and vassalage together. Its agreement preserves the party as a unit; Sofia retains authorship and licenses her work, with negotiated terms governing departure and retained material. The arrangement gives their skills resources and protection while placing them inside an organization whose priorities extend beyond their own survival.<br><br><strong>System details:</strong> During the fight against Arrears, Sofia's narration grants him +11% Acuity and halves the cost of Terrain Manipulation. These are encounter effects; his permanent attribute scores and primary/secondary designations remain undisclosed."
      }
    ]
  },
  {
    "id": "marta-galimberti",
    "name": "Girl in the beanie",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 63,
    "faction": "civilian",
    "role": "adventurer",
    "title": "Member of the Aurora group",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A young woman in a black beanie pulled down toward her eyebrows, watchful even before she joins the conversation.",
    "summary": "One of five young people occupying the unusually quiet area of Aurora.",
    "coreFlaw": null,
    "skills": [
      {
        "name": "Lightning casting",
        "type": "Class capability; formal skill name not stated",
        "chapter": 68,
        "desc": "Uses a rod to direct lightning at moving targets and exposed seams. A recorded narrated encounter grants +10% Precision and reduces evocation cooldowns by five seconds; neither is a permanent base statistic.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Luca Terranova",
        "chapter": 65,
        "detail": "A technical interlocutor whose background makes the party's way of thinking familiar."
      },
      {
        "name": "Cecilia Leonelli",
        "chapter": 71,
        "detail": "The binding protection agreement brings their activity under Leonelli Authority."
      },
      {
        "name": "Sofia Dei Guidi",
        "chapter": 71,
        "detail": "A member of the same longstanding tabletop group and protected adventuring party."
      }
    ],
    "history": [
      {
        "chapter": 65,
        "name": "Marta",
        "title": "Student from Borgo San Paolo",
        "summary": "A student from Borgo San Paolo, Marta joined the tabletop campaign through an online call for players. She is blunt with strangers and reluctant to offer personal details merely to make a conversation easier. Her ties to family in Turin persist after the Integration, but proximity does not make those relationships simple. She tests Luca's explanations rather than accepting his status as an analyst as proof that he is right."
      },
      {
        "chapter": 66,
        "class": "MAGE",
        "classLine": "MAGE",
        "appearance": "A young woman with green eyes, usually wearing a black beanie pulled low toward her eyebrows. In a fight she carries a casting rod; away from combat she watches people and effects with the same direct, skeptical attention.",
        "summary": "A student from Borgo San Paolo, Marta joined the tabletop campaign through an online call for players. She is blunt with strangers and reluctant to offer personal details merely to make a conversation easier. Her ties to family in Turin persist after the Integration, but proximity does not make those relationships simple. She tests Luca's explanations rather than accepting his status as an analyst as proof that he is right.<br><br>She chooses Mage for spell theory, the deconstruction of magical effects, and the prospect of adapting to unfamiliar problems. Her lightning provides ranged damage while the others pin enemies or hold a corridor. Her interest in how an effect works also makes her useful when the group needs to examine Sofia's authored encounters from inside them.",
        "title": "Mage and effects analyst"
      },
      {
        "chapter": 71,
        "name": "Marta Galimberti",
        "faction": "leonelli",
        "summary": "A student from Borgo San Paolo, Marta joined the tabletop campaign through an online call for players. She is blunt with strangers and reluctant to offer personal details merely to make a conversation easier. Her ties to family in Turin persist after the Integration, but proximity does not make those relationships simple. She tests Luca's explanations rather than accepting his status as an analyst as proof that he is right.<br><br>She chooses Mage for spell theory, the deconstruction of magical effects, and the prospect of adapting to unfamiliar problems. Her lightning provides ranged damage while the others pin enemies or hold a corridor. Her interest in how an effect works also makes her useful when the group needs to examine Sofia's authored encounters from inside them.<br><br>The group enters Leonelli protection and vassalage together. Its agreement preserves the party as a unit; Sofia retains authorship and licenses her work, with negotiated terms governing departure and retained material. The arrangement gives their skills resources and protection while placing them inside an organization whose priorities extend beyond their own survival.<br><br><strong>System details:</strong> During the fight against Arrears, Sofia's narration grants her +10% Precision and reduces evocation spell cooldowns by five seconds. These are encounter effects, not permanent attribute scores or a confirmed primary stat."
      }
    ]
  },
  {
    "id": "nicolo-conti",
    "name": "Nicolò",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 63,
    "faction": "civilian",
    "role": "adventurer",
    "title": "Member of the Aurora group",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A skinny young man who appears to be in his mid-twenties, wearing a jacket with numerous zippers. He presents himself with practiced charm, although pressure can make the performance transparent.",
    "summary": "One of five young people occupying the unusually quiet area of Aurora.",
    "coreFlaw": null,
    "skills": [
      {
        "name": "Vocal support",
        "type": "Class capability; formal skill name not stated",
        "chapter": 69,
        "desc": "Uses his voice in the party's support and control work. A recorded narrated encounter grants +12% Presence and applies Sonic Vulnerability to its target.",
        "ranks": null
      },
      {
        "name": "Countering a howl",
        "type": "Class capability; formal skill name not stated",
        "chapter": 96,
        "desc": "Answers a Hound's howl with a sustained note, preventing its pressure from settling over the party. The maneuver requires his participation; it is not a permanent immunity.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Luca Terranova",
        "chapter": 65,
        "detail": "A technical interlocutor whose background makes the party's way of thinking familiar."
      },
      {
        "name": "Cecilia Leonelli",
        "chapter": 71,
        "detail": "The binding protection agreement brings their activity under Leonelli Authority."
      },
      {
        "name": "Sofia Dei Guidi",
        "chapter": 71,
        "detail": "A member of the same longstanding tabletop group and protected adventuring party."
      }
    ],
    "history": [
      {
        "chapter": 65,
        "name": "Nicolò",
        "title": "Party spokesperson and support combatant",
        "summary": "From Novara, Nicolò produces music and plays guitar. He and Sofia were already playing together before they brought in their neighbor Tommaso and recruited the rest of the campaign online. He commonly speaks for the group, deflecting uncomfortable questions and trying to set the terms of an encounter before anyone else can. Contact with his brother exposes their disagreement over whether the government will restore the old order."
      },
      {
        "chapter": 66,
        "class": "BARD",
        "classLine": "BARD",
        "appearance": "A skinny young man who appears to be in his mid-twenties, wearing a jacket with numerous zippers. He presents himself with practiced charm, although pressure can make the performance transparent.",
        "summary": "From Novara, Nicolò produces music and plays guitar. He and Sofia were already playing together before they brought in their neighbor Tommaso and recruited the rest of the campaign online. He commonly speaks for the group, deflecting uncomfortable questions and trying to set the terms of an encounter before anyone else can. Contact with his brother exposes their disagreement over whether the government will restore the old order.<br><br>He chooses Bard for a mixture of support, control, and knowledge gathering. His voice is a working combat tool: chants support the party, and a countering note can interrupt a Hound's howl. His confidence in negotiation is useful, but his interest in what the group's abilities might be worth can place his priorities at odds with his friends'."
      },
      {
        "chapter": 71,
        "name": "Nicolò Conti",
        "faction": "leonelli",
        "summary": "From Novara, Nicolò produces music and plays guitar. He and Sofia were already playing together before they brought in their neighbor Tommaso and recruited the rest of the campaign online. He commonly speaks for the group, deflecting uncomfortable questions and trying to set the terms of an encounter before anyone else can. Contact with his brother exposes their disagreement over whether the government will restore the old order.<br><br>He chooses Bard for a mixture of support, control, and knowledge gathering. His voice is a working combat tool: chants support the party, and a countering note can interrupt a Hound's howl. His confidence in negotiation is useful, but his interest in what the group's abilities might be worth can place his priorities at odds with his friends'.<br><br>The group enters Leonelli protection and vassalage together. Its agreement preserves the party as a unit; Sofia retains authorship and licenses her work, with negotiated terms governing departure and retained material. The arrangement gives their skills resources and protection while placing them inside an organization whose priorities extend beyond their own survival.<br><br><strong>System details:</strong> During the fight against Arrears, Sofia's narration grants him +12% Presence and applies Sonic Vulnerability to the enemy. The Presence increase is an encounter effect; it does not establish his permanent score or primary designation."
      },
      {
        "chapter": 96,
        "alias": "Nico"
      }
    ]
  },
  {
    "id": "sofia-dei-guidi",
    "name": "Girl in the grey sweatshirt",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 63,
    "faction": "civilian",
    "role": "adventurer",
    "title": "Member of the Aurora group",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A young woman in a grey sweatshirt, carrying a flat object under her arm and initially keeping her distance from the meeting.",
    "summary": "One of five young people occupying the unusually quiet area of Aurora.",
    "coreFlaw": null,
    "skills": [
      {
        "name": "Encounter authorship",
        "type": "Class capability; formal skill name not stated",
        "chapter": 68,
        "desc": "Works with suitable existing dungeon-like spaces and local spawns. Chooses arrival timing and direction, influences initial behavior, and can reduce monster capability by about fifteen percent. She cannot invent arbitrary creatures or freely build new rooms.",
        "ranks": null
      },
      {
        "name": "Temporary spatial adjustments",
        "type": "Class capability; formal skill name not stated",
        "chapter": 68,
        "desc": "Makes limited, nonstructural adjustments to walls, doors, and floor levels within a recognized space. The changes revert when she leaves its boundary. Ordinary streets and offices do not automatically qualify.",
        "ranks": null
      },
      {
        "name": "Narrated encounter conditions",
        "type": "Class capability; formal skill name not stated",
        "chapter": 71,
        "desc": "Her narration supplies tactical conditions and temporary party bonuses. Against Arrears the recorded effects include Presence +12%, Precision +10%, Force +14%, and Acuity +11% for different party members, alongside target or ability modifiers. These are encounter-specific effects, not freely assignable permanent stats.",
        "ranks": null
      },
      {
        "name": "Repeatable training campaigns",
        "type": "Class capability; formal skill name not stated",
        "chapter": 96,
        "desc": "Provides repeatable authored training under a recovery interval of roughly six days. The System determines rewards; moving the activity to another address does not create an immediate extra run. Scenario-tier threats are outside her control.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Luca Terranova",
        "chapter": 65,
        "detail": "A technical interlocutor whose background makes the party's way of thinking familiar."
      },
      {
        "name": "Cecilia Leonelli",
        "chapter": 71,
        "detail": "The binding protection agreement brings their activity under Leonelli Authority."
      },
      {
        "name": "Nicolò Conti",
        "chapter": 71,
        "detail": "A longtime player in her campaign and the group's usual spokesperson; his commercial instincts can complicate decisions about her work."
      }
    ],
    "history": [
      {
        "chapter": 65,
        "name": "Sofia",
        "title": "Physics student and Dungeon Master",
        "summary": "A second-year physics student from Trapani, Sofia runs the group's tabletop campaign and experiments with Unreal and Unity as a hobby. The campaign predates the Integration; keeping it alive gives the five friends continuity when university, family plans, and ordinary security become uncertain. She is reserved with outsiders and protective of the distinction between her own authorship and what somebody else wishes to purchase from it."
      },
      {
        "chapter": 66,
        "class": "DUNGEON MASTER",
        "classLine": "DUNGEON MASTER",
        "appearance": "A young woman in a grey sweatshirt and glasses, often holding a soft notebook secured with an elastic band. She tends to stay apart from the initial conversation, then speaks with quiet, deliberate precision when the subject reaches her work.",
        "summary": "A second-year physics student from Trapani, Sofia runs the group's tabletop campaign and experiments with Unreal and Unity as a hobby. The campaign predates the Integration; keeping it alive gives the five friends continuity when university, family plans, and ordinary security become uncertain. She is reserved with outsiders and protective of the distinction between her own authorship and what somebody else wishes to purchase from it.<br><br>Her Dungeon Master class turns encounter design into a survival resource. The party's refuge in Aurora brings that work to the attention of Luca and Cecilia. Understanding her value requires understanding her limits: she authors conditions for an encounter rather than fighting as a sixth frontline combatant or freely creating a world."
      },
      {
        "chapter": 71,
        "name": "Sofia Dei Guidi",
        "faction": "leonelli",
        "summary": "A second-year physics student from Trapani, Sofia runs the group's tabletop campaign and experiments with Unreal and Unity as a hobby. The campaign predates the Integration; keeping it alive gives the five friends continuity when university, family plans, and ordinary security become uncertain. She is reserved with outsiders and protective of the distinction between her own authorship and what somebody else wishes to purchase from it.<br><br>Her Dungeon Master class turns encounter design into a survival resource. The party's refuge in Aurora brings that work to the attention of Luca and Cecilia. Understanding her value requires understanding her limits: she authors conditions for an encounter rather than fighting as a sixth frontline combatant or freely creating a world.<br><br>The group enters Leonelli protection and vassalage together. Its agreement preserves the party as a unit; Sofia retains authorship and licenses her work, with negotiated terms governing departure and retained material. The arrangement gives their skills resources and protection while placing them inside an organization whose priorities extend beyond their own survival.<br><br><strong>System details:</strong> Her permanent attribute scores, primary/secondary designations, and level remain undisclosed. Recorded class limits include an approximately fifteen-percent downward adjustment to available monsters and a recovery interval of roughly six days; those limits are not general stat bonuses."
      },
      {
        "chapter": 96,
        "summary": "A second-year physics student from Trapani, Sofia runs the group's tabletop campaign and experiments with Unreal and Unity as a hobby. The campaign predates the Integration; keeping it alive gives the five friends continuity when university, family plans, and ordinary security become uncertain. She is reserved with outsiders and protective of the distinction between her own authorship and what somebody else wishes to purchase from it.<br><br>Her Dungeon Master class turns encounter design into a survival resource. The party's refuge in Aurora brings that work to the attention of Luca and Cecilia. Understanding her value requires understanding her limits: she authors conditions for an encounter rather than fighting as a sixth frontline combatant or freely creating a world.<br><br>The group enters Leonelli protection and vassalage together. Its agreement preserves the party as a unit; Sofia retains authorship and licenses her work, with negotiated terms governing departure and retained material. The arrangement gives their skills resources and protection while placing them inside an organization whose priorities extend beyond their own survival.<br><br><strong>System details:</strong> Her permanent attribute scores, primary/secondary designations, and level remain undisclosed. Recorded class limits include an approximately fifteen-percent downward adjustment to available monsters and a recovery interval of roughly six days; those limits are not general stat bonuses.<br><br>She works inside suitable existing spaces the System recognizes as dungeon-like. Limited changes to walls, doors, and floor levels revert when she leaves the boundary; she cannot excavate new rooms. She uses ordinary available spawns, selects arrival timing and direction, and has limited influence on their initial behavior. The roughly fifteen-percent reduction operates separately from Leonelli territorial suppression. The System sets rewards, and ordinary monster drops remain separate from authored quest rewards. Scenario-tier threats lie outside her control."
      },
      {
        "chapter": 114,
        "summary": "A second-year physics student from Trapani, Sofia runs the group's tabletop campaign and experiments with Unreal and Unity as a hobby. The campaign predates the Integration; keeping it alive gives the five friends continuity when university, family plans, and ordinary security become uncertain. She is reserved with outsiders and protective of the distinction between her own authorship and what somebody else wishes to purchase from it.<br><br>Her Dungeon Master class turns encounter design into a survival resource. The party's refuge in Aurora brings that work to the attention of Luca and Cecilia. Understanding her value requires understanding her limits: she authors conditions for an encounter rather than fighting as a sixth frontline combatant or freely creating a world.<br><br>The group enters Leonelli protection and vassalage together. Its agreement preserves the party as a unit; Sofia retains authorship and licenses her work, with negotiated terms governing departure and retained material. The arrangement gives their skills resources and protection while placing them inside an organization whose priorities extend beyond their own survival.<br><br><strong>System details:</strong> Her permanent attribute scores, primary/secondary designations, and level remain undisclosed. Recorded class limits include an approximately fifteen-percent downward adjustment to available monsters and a recovery interval of roughly six days; those limits are not general stat bonuses.<br><br>She works inside suitable existing spaces the System recognizes as dungeon-like. Limited changes to walls, doors, and floor levels revert when she leaves the boundary; she cannot excavate new rooms. She uses ordinary available spawns, selects arrival timing and direction, and has limited influence on their initial behavior. The roughly fifteen-percent reduction operates separately from Leonelli territorial suppression. The System sets rewards, and ordinary monster drops remain separate from authored quest rewards. Scenario-tier threats lie outside her control. Moving to another address does not bypass the recovery interval. She negotiates session objectives and protects time outside the training schedule, resisting pressure to treat every available room as another immediate run."
      }
    ]
  },
  {
    "id": "tommaso-peirone",
    "name": "Man with the scaffold pipe",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 63,
    "faction": "civilian",
    "role": "adventurer",
    "title": "Member of the Aurora group",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A tall young man carrying a length of scaffold pipe in both hands.",
    "summary": "One of five young people occupying the unusually quiet area of Aurora.",
    "coreFlaw": null,
    "skills": [
      {
        "name": "Frontline protection",
        "type": "Class capability; formal skill name not stated",
        "chapter": 68,
        "desc": "Holds narrow approaches with a shield or improvised weapon while the others control and attack the enemy. His class choice favors protecting other people; no formal skill name is supplied.",
        "ranks": null
      },
      {
        "name": "Narrated attack bonus",
        "type": "Temporary encounter effect",
        "chapter": 71,
        "desc": "A recorded encounter grants +14% Force and increased damage against weakened enemies. The conditions come from Sofia's narration and do not establish a permanent Force score.",
        "ranks": null
      }
    ],
    "relationships": [
      {
        "name": "Luca Terranova",
        "chapter": 65,
        "detail": "A technical interlocutor whose background makes the party's way of thinking familiar."
      },
      {
        "name": "Cecilia Leonelli",
        "chapter": 71,
        "detail": "The binding protection agreement brings their activity under Leonelli Authority."
      },
      {
        "name": "Sofia Dei Guidi",
        "chapter": 71,
        "detail": "A member of the same longstanding tabletop group and protected adventuring party."
      }
    ],
    "history": [
      {
        "chapter": 65,
        "name": "Tommaso",
        "title": "Civil engineering student",
        "summary": "Tommaso comes from a village outside Nuoro and studies civil engineering at the Politecnico, reaching his third year before the Integration. Since sixteen he has spent summers in his uncle's scaffolding yard. That experience explains both his first improvised weapon and his habit of assessing access, clearances, and the physical work a plan actually requires. He joined Sofia and Nicolò's tabletop group after they discovered he lived next door."
      },
      {
        "chapter": 66,
        "class": "PALADIN",
        "classLine": "PALADIN",
        "appearance": "Tall, initially carrying a length of scaffold pipe in both hands. He speaks softly and slowly. His later equipment includes a shield and an iron club, suited to holding a narrow approach while the others work behind him.",
        "summary": "Tommaso comes from a village outside Nuoro and studies civil engineering at the Politecnico, reaching his third year before the Integration. Since sixteen he has spent summers in his uncle's scaffolding yard. That experience explains both his first improvised weapon and his habit of assessing access, clearances, and the physical work a plan actually requires. He joined Sofia and Nicolò's tabletop group after they discovered he lived next door.<br><br>He chooses Paladin because he wants to stand in front of people and protect them. In the party he holds the line, catches attacks on his shield, and strikes enemies controlled by Elia or exposed by Marta. He is economical with words and attentive to who can reach safety, making his protective role a matter of positioning and judgment as well as class choice.",
        "title": "Frontline protector"
      },
      {
        "chapter": 71,
        "name": "Tommaso Peirone",
        "faction": "leonelli",
        "summary": "Tommaso comes from a village outside Nuoro and studies civil engineering at the Politecnico, reaching his third year before the Integration. Since sixteen he has spent summers in his uncle's scaffolding yard. That experience explains both his first improvised weapon and his habit of assessing access, clearances, and the physical work a plan actually requires. He joined Sofia and Nicolò's tabletop group after they discovered he lived next door.<br><br>He chooses Paladin because he wants to stand in front of people and protect them. In the party he holds the line, catches attacks on his shield, and strikes enemies controlled by Elia or exposed by Marta. He is economical with words and attentive to who can reach safety, making his protective role a matter of positioning and judgment as well as class choice.<br><br>The group enters Leonelli protection and vassalage together. Its agreement preserves the party as a unit; Sofia retains authorship and licenses her work, with negotiated terms governing departure and retained material. The arrangement gives their skills resources and protection while placing them inside an organization whose priorities extend beyond their own survival.<br><br><strong>System details:</strong> During the fight against Arrears, Sofia's narration grants him +14% Force and a damage bonus against weakened enemies. These are encounter effects; permanent scores, level, and primary/secondary designations remain undisclosed."
      },
      {
        "chapter": 96,
        "alias": "Tommi"
      }
    ]
  },
  {
    "id": "fassone",
    "name": "Fassone",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 64,
    "faction": "civilian",
    "role": "civilian",
    "title": "Shopkeeper",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "An elderly shopkeeper.",
    "summary": "Maintains a nearly empty shop and treats the few remaining items on its shelves with deliberate dignity. Cecilia's encounter with him challenges her assumption that every refusal can be solved by finding the correct leverage.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "anselmi",
    "name": "Signor Anselmi",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 73,
    "faction": "civilian",
    "role": "civilian",
    "title": "Building organizer",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Seventy-one years old; keeps a clipboard and a rifle close to hand.",
    "summary": "A retired postal worker who knows the residents and informal arrangements of his building. He offers Cecilia information without surrendering his own judgment, distinguishing the people under her protection from the labels the System gives them.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "ferretti-resident",
    "name": "Ferretti, younger resident",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 73,
    "faction": "civilian",
    "role": "civilian",
    "title": "Resident connected to the Compagnia network",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "A younger registered resident who works with the Compagnia network. Anselmi describes him as reliable about his building contribution, while noting the uneasy politeness that can surround someone whose new capabilities other residents need.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "grassi",
    "name": "Signora Grassi",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 73,
    "faction": "civilian",
    "role": "civilian",
    "title": "Building contact",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "A resident entrusted with a possible contact because she has time to handle correspondence. She declines to pass on an approach she cannot evaluate, showing how uncertainty and ordinary caution affect the family's access to information.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "scarpa",
    "name": "Scarpa",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 73,
    "faction": "civilian",
    "role": "civilian",
    "title": "Worker and union organizer",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "A worker and union organizer who represents occupants in negotiations over access, lost hours, equipment, and compensation. He cooperates with Leonelli and Bloc representatives when the terms protect the people doing the work, while retaining his own constituency.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "fabiani",
    "name": "Fabiani",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 75,
    "faction": "municipio",
    "role": "civilian",
    "title": "Economic Recovery Task Force representative",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A woman representing the Economic Recovery Task Force.",
    "summary": "Participates in municipal negotiations over Turin's recovery. Cecilia identifies her as the official most concerned with the economic numbers behind the proposed arrangements.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "gambino",
    "name": "Gambino",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 75,
    "faction": "municipio",
    "role": "civilian",
    "title": "Ministry of Internal Affairs representative",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A woman representing the Ministry of Internal Affairs.",
    "summary": "Participates in municipal negotiations with a focus on social order and institutional continuity as private organizations acquire powers the state can no longer exercise consistently.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "leto",
    "name": "Capitano Vitale Leto",
    "alias": null,
    "portrait": "img/characters/moretti.png",
    "chapter": 75,
    "faction": "carabinieri",
    "role": "faction-leader",
    "title": "Carabinieri captain",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Age 45. Compact, methodical, specific in his language in a way that reminds Cecilia of Matteo.",
    "summary": "A Carabinieri captain introduced at the municipal negotiations. He retains independent command and negotiates practical cooperation with private protection providers.",
    "coreFlaw": "The gap between the institution he serves and the reality he works in gets wider every day.",
    "skills": [],
    "relationships": [
      {
        "name": "Cecilia Leonelli",
        "chapter": 75,
        "detail": "Cooperation is conditional and does not erase law-enforcement scrutiny."
      },
      {
        "name": "Bianca Severa",
        "chapter": 106,
        "detail": "Her conduct in the Serra operation remains subject to inquiry."
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": null,
      "unverifiedRatings": null
    },
    "history": [
      {
        "chapter": 106,
        "summary": "A Carabinieri captain introduced at the municipal negotiations. He retains independent command and negotiates practical cooperation with private protection providers.<br><br>He continues to examine the consequences of Serra's death while maintaining the possibility of separately authorized operational cooperation."
      }
    ]
  },
  {
    "id": "fasce",
    "name": "Avvocato Roberto Fasce",
    "alias": null,
    "portrait": "img/characters/fasce.png",
    "chapter": 76,
    "faction": "corporate-bloc",
    "role": "faction-leader",
    "title": "Turin Representative, Corporate Restoration Bloc",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": "Advocate Variant",
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Age 51. A practiced corporate representative whose calm delivery and open gestures make his arguments sound measured even when he is attacking a rival's legitimacy.",
    "summary": "A corporate attorney and former logistics consultant, Fasce represents the Corporate Restoration Bloc in Turin. He sells security, services, and a claim to legitimate institutional recovery. His public contrast between professional contracts and mafia coercion targets the Leonellis' reputation as well as their revenue. Commercial cooperation remains possible where it serves the Bloc's position.",
    "coreFlaw": "His promise of reliable institutional services must survive the costs and exclusions in the agreements he sells.",
    "skills": [],
    "relationships": [
      {
        "name": "Matteo Vascari",
        "chapter": 76,
        "detail": "Professional rival and negotiator."
      },
      {
        "name": "Riva",
        "chapter": 97,
        "detail": "Relies on her engineering judgment during the Mirafiori work."
      },
      {
        "name": "Cecilia Leonelli",
        "chapter": 94,
        "detail": "Can cooperate on a defined operation while remaining her commercial and political rival."
      }
    ],
    "authorReference": {
      "chapter": 999,
      "status": "Unrevealed planning/reference data, not confirmed manuscript readings",
      "plannedClassLine": null,
      "unverifiedRatings": null
    },
    "history": [
      {
        "chapter": 124,
        "summary": "A corporate attorney and former logistics consultant, Fasce represents the Corporate Restoration Bloc in Turin. He sells security, services, and a claim to legitimate institutional recovery. His public contrast between professional contracts and mafia coercion targets the Leonellis' reputation as well as their revenue. Commercial cooperation remains possible where it serves the Bloc's position. Joint freight work, financing, a technical comparison, and a settled customer dispute leave the Bloc functioning as a rival. Practical agreements do not settle who should govern Turin."
      }
    ]
  },
  {
    "id": "nardi",
    "name": "Nardi",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 77,
    "faction": "civilian",
    "role": "civilian",
    "title": "Transport-company owner",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "In his early fifties, with a trim grey beard and a manner poised between apology and stubbornness.",
    "summary": "Owns a transport company and moves away from Leonelli protection toward the Bloc's cheaper offer. His trucks, delivery requirements, and contract costs give Cecilia a concrete example of what her competitors are selling.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "paolo-verri",
    "name": "Paolo Verri",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 79,
    "faction": "civilian",
    "role": "civilian",
    "title": "Leonelli client",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "A Leonelli client who voluntarily shares a printed Bloc proposal while choosing to stay with the family. His consignment and delivery needs let the Leonellis examine actual coverage and service promises instead of relying on the rival's advertising.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "costa",
    "name": "Costa",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 81,
    "faction": "corporate-bloc",
    "role": "operative",
    "title": "Bloc security coordinator",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A businesslike former bank security manager, quick to leave briefings for his operational work.",
    "summary": "A former bank security manager who coordinates Bloc security work. He distinguishes his own authorization from the rights of occupants and other operators. His responsibilities include staging, access coordination, and protecting the people using a site, rather than assuming every agreement grants unrestricted control.",
    "coreFlaw": null,
    "skills": [],
    "relationships": [],
    "history": [
      {
        "chapter": 95,
        "appearance": "Wears a dark jacket over a polo shirt at the site meeting; keeps a radio and notebook to hand."
      },
      {
        "chapter": 100,
        "title": "Bloc security coordinator; recognized installation claimant"
      }
    ]
  },
  {
    "id": "ferretti-manager",
    "name": "Dottor Ferretti",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 81,
    "faction": "corporate-bloc",
    "role": "civilian",
    "title": "Bloc manager",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "A Bloc manager whose presentations and emphasis on immediately useful results frustrate Serena's research. He represents the organizational priorities she has to navigate when asking for time and resources to investigate uncertain mechanics.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "marco-operative",
    "name": "Marco",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 87,
    "faction": "leonelli",
    "role": "operative",
    "title": "Leonelli field operative",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A lean, dark-haired young man, initially awkward with his equipment strap and visibly nervous before a Scenario.",
    "summary": "A junior Leonelli field operative working under Silvio. He helps prepare the drone equipment and gains experience on patrol and Scenario work. His uncertain hands contrast with the practiced routines of the older team members.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "valentina",
    "name": "Valentina",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 92,
    "faction": "civilian",
    "role": "civilian",
    "title": "Club operator and information contact",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Age 34, with long brown hair, dark eyes, and an athletic build. Comfortable in both designer clothing and professional swimwear.",
    "summary": "Runs a high-end club outside the Quadrilatero serving Players and wealthy unawakened clients. Her access to private gatherings gives Dario information about Bloc fundraising, recruitment, and the social interests behind official offers. She is a cultivated contact with her own business to protect.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "giovanni-baldisarri",
    "name": "Giovanni Baldisarri",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 93,
    "faction": "leonelli",
    "role": "specialist",
    "title": "Designer; Baldisarri workshop",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "The younger Baldisarri brother and a designer at the family workshop on Via Rivalta. He develops mechanisms and assemblies with Stefano, examining how unfamiliar materials behave inside a complete device. Their prototypes turn unusual component properties into defensive tools that still require testing, tolerances, and workable fabrication.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "maria",
    "name": "Maria",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 93,
    "faction": "civilian",
    "role": "specialist",
    "title": "Fabrication intermediary",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "Coordinates commissions and fabrication arrangements for the Baldisarri brothers. She delivers requirements, tests prototypes, and arranges payment, providing the practical link between workshop development and the people commissioning the equipment.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "stefano-baldisarri",
    "name": "Stefano Baldisarri",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 93,
    "faction": "leonelli",
    "role": "specialist",
    "title": "Fabricator; elder Baldisarri brother",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Four years older than Giovanni; works directly with the materials and prototypes at the bench.",
    "summary": "A metalworker and practical negotiator at the Baldisarri workshop. Their father preserved the business's independence by keeping it small. Leonelli commissions force Stefano to reconsider whether remaining unnoticed still offers security. He and Giovanni develop defensive prototypes.",
    "coreFlaw": null,
    "skills": [],
    "relationships": [],
    "history": [
      {
        "chapter": 103,
        "summary": "A metalworker and practical negotiator at the Baldisarri workshop. Their father preserved the business's independence by keeping it small. Leonelli commissions force Stefano to reconsider whether remaining unnoticed still offers security. He and Giovanni develop defensive prototypes before expanding their workshop activity into Borgo Dora."
      }
    ]
  },
  {
    "id": "enrico-barale",
    "name": "Enrico Barale",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 95,
    "faction": "civilian",
    "role": "specialist",
    "title": "Maintenance supervisor",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A narrow man with thick wrists, close-cut grey hair, a washed-out shirt collar, and a right thumb that healed crooked. Carries the site keys.",
    "summary": "Maintenance supervisor at the Mirafiori annex, familiar with its pumps, altered circuits, and access routes. He requires damaged tools to be replaced and insists that his crew retain the right to refuse unsafe work. His site knowledge remains essential even when armed Players arrive with a larger plan.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "milo",
    "name": "Milo",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 96,
    "faction": "leonelli",
    "role": "operative",
    "title": "Player recruit",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Narrow-shouldered, with a padded jacket hanging loosely on his frame. Carries a short club when he begins training with the party.",
    "summary": "A Leonelli Player recruit introduced to Sofia's authored training. Initially too quick to pursue an opening, he learns to work within the party's control and support. His class and numerical attributes remain undisclosed.",
    "coreFlaw": null,
    "skills": [],
    "relationships": [],
    "history": [
      {
        "chapter": 121,
        "summary": "A Leonelli Player recruit introduced to Sofia's authored training. Initially too quick to pursue an opening, he learns to work within the party's control and support. He later helps recover an electrician during the fog emergency. His class and numerical attributes remain undisclosed."
      }
    ]
  },
  {
    "id": "paola",
    "name": "Paola",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 96,
    "faction": "leonelli",
    "role": "operative",
    "title": "Player recruit",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Dark hair cut in a straight fringe just above her eyebrows. Carries a buckler and a small knife, and checks the other doors before focusing on the training notebook.",
    "summary": "A Leonelli Player recruit who trains alongside the student party. She catches a Hound on her buckler, helps operate a gate under pressure, and learns to communicate her position before acting. Her class and numerical attributes remain undisclosed.",
    "coreFlaw": null,
    "skills": [],
    "relationships": [],
    "history": [
      {
        "chapter": 121,
        "appearance": "Dark hair cut in a straight fringe just above her eyebrows. Carries a buckler and a small knife; works stationary cover while recovering from an ankle injury.",
        "summary": "A Leonelli Player recruit who trains alongside the student party. She catches a Hound on her buckler, helps operate a gate under pressure, and learns to communicate her position before acting. Her later deployment respects her medical clearance. Her class and numerical attributes remain undisclosed."
      }
    ]
  },
  {
    "id": "giulio-vannini",
    "name": "Giulio Vannini",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 97,
    "faction": "civilian",
    "role": "operative",
    "title": "Contracted expedition leader",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Scarred knuckles, a washed grey shirt, and an unwashed vest. Carries a rifle, checking its clearance against the installation entrance before slinging it behind him.",
    "summary": "Leads the contracted expedition team at Mirafiori. He settles entry responsibilities, staging arrangements, and the consequences of unexpected System decisions before committing his people. The job gives him defined obligations rather than a general place in Leonelli command.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "riva-engineer",
    "name": "Riva",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 97,
    "faction": "corporate-bloc",
    "role": "specialist",
    "title": "Bloc engineer",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "An auburn fringe falls across one eye when she bends over her laptop. Pushes it aside with the back of her wrist while working beside the installation.",
    "summary": "A Bloc engineer who establishes reference conditions and operates the Mirafiori installation. She distinguishes the insert that stabilizes its field from the pumps it supports and insists that comparisons retain operating changes that might explain a result. Her given name and exact class remain undisclosed.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "toni",
    "name": "Toni",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 98,
    "faction": "leonelli",
    "role": "operative",
    "title": "Leonelli operative and driver",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Lean build; wears a forearm guard during the installation operation. Later suffers a wound above the guard while supporting Marco.",
    "summary": "A Leonelli operative and driver wounded while supporting Marco. Recovery and the availability of replacement personnel affect what the organization can undertake afterward.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "elena-venturi",
    "name": "Agnese Venturi",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 102,
    "faction": "civilian",
    "role": "specialist",
    "title": "Research custodian; estate representative",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A narrow-faced woman with greying hair tied behind her head, resembling her father in an old surveying photograph.",
    "summary": "Agnese is Corrado Venturi's daughter and the custodian of his retained research material. She keeps instrument records and observations, answers an archive inquiry as his estate representative, and authorizes narrowly defined exchanges. Her permission governs particular records and comparisons; it does not give the Leonellis unrestricted access to everyone connected with the work.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "paolo-venturi",
    "name": "Corrado Venturi",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 102,
    "faction": "civilian",
    "role": "specialist",
    "title": "Historical engineer; retained 2011 observations",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Remembered in a framed photograph as a younger, narrow-faced man beside a surveying instrument.",
    "summary": "A deceased engineer whose retained field observations and apparatus history become relevant to current measurements. His 2011 gorge survey records an incomplete sequence, halted with the return route's safety in mind. The record matters because it predates the Integration; it does not establish that he anticipated the System or understood the later network's purpose.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "bellino",
    "name": "Signor Bellino",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 103,
    "faction": "civilian",
    "role": "civilian",
    "title": "Workshop customer",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "A workshop customer waiting to collect a repaired pump coupling. His ordinary repair shares bench time with Leonelli prototype work, grounding the workshop's new commissions in the business it still has to run.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "aldo-bassi",
    "name": "Aldo Bassi",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 104,
    "faction": "civilian",
    "role": "civilian",
    "title": "Courier",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Recognizable by his yellow work jacket. When recovered from captivity, he has a split lip and one eye swollen nearly shut.",
    "summary": "A courier abducted from a delivery run, leaving his van abandoned and a Leonelli material delivery incomplete. His rescue exposes the coercion operating through a working garage and leaves injuries requiring treatment and time away from work.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "davide-serra",
    "name": "Enea Serra",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 104,
    "faction": "civilian",
    "role": "operative",
    "title": "Armed figure in the courier-route operation",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Broad-faced, with a neat black beard. Carries a paper bag from his car to the gate man before crossing the garage yard.",
    "summary": "A leader of a local Leone Selvaggio group who organizes probes along the Quadrilatero perimeter. He uses a functioning garage and its ordinary traffic to hold people without stopping the street outside. Bianca kills him after disarming him during Aldo Bassi's recovery, creating consequences that outlast the rescue.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "rita",
    "name": "Rita",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 107,
    "faction": "civilian",
    "role": "civilian",
    "title": "Baldisarri workshop administrator",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Grey curls pinned flat on one side with two black clips. Arrives at the new workshop carrying the front-office kettle and a folder of records.",
    "summary": "Handles the Baldisarri workshop's customer calls, estimates, and records. Helps establish the Borgo Dora office while keeping the Via Rivalta customers served. Coordinates collections and her agreed working and return times rather than treating the second premises as an unlimited extension of the first.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "carlo-bellandi",
    "name": "Osvaldo Bellandi",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 108,
    "faction": "civilian",
    "role": "specialist",
    "title": "Fuel inspection and transfer technician",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "In his fifties, thick through the middle, with a sunburnt neck above a faded work shirt and steady hands.",
    "summary": "An unawakened fuel-transfer technician responsible for sampling, hoses, connections, isolation, and restart conditions. He identifies contamination and keeps untested stock separate from usable diesel. His right to stop the work makes the inspection meaningful even when the customer arrives armed.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "paolo-assistant",
    "name": "Tobia",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 108,
    "faction": "civilian",
    "role": "specialist",
    "title": "Bellandi's assistant",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A young man with heavy brows, wearing a sleeveless fleece. Sorts fittings onto a cloth beside the equipment cabinet while Bellandi performs the fuel checks.",
    "summary": "Osvaldo Bellandi's assistant at the fuel-transfer compound. Tobia sorts fittings, helps prepare the equipment cabinet, and participates in isolating and setting up the transfer under the technician's direction.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "salvatore-driver",
    "name": "Salvatore",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 108,
    "faction": "civilian",
    "role": "specialist",
    "title": "Tanker driver",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A compact man with white stubble; initially stiff when walking, then moving more easily.",
    "summary": "A tanker driver working with Bosco's carrier equipment. His availability includes a following booking, so the Leonelli trial has to account for his return and cannot treat his vehicle or attendance as indefinitely reserved.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "adele-conti",
    "name": "Adele Lamberti",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 109,
    "faction": "civilian",
    "role": "civilian",
    "title": "Professional contact in the access inquiry",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "A professional contact who referred the earlier survey-access work to Matteo. Retained correspondence establishes an ordinary, limited role in arranging that access, rather than evidence that she directed the later research network.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "marina-gallo",
    "name": "Marina Gallo",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 109,
    "faction": "civilian",
    "role": "civilian",
    "title": "Customer in an assistance-contract dispute",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A small woman with a blunt dark bob. Holds her folder against her knees while waiting, then opens the documents before explaining the disputed charge.",
    "summary": "Operates a laundry in San Donato and disputes the refusal of assistance sold under broader assurances. She pursues the difference between the offer she relied on and the dispatch exclusions invoked afterward.",
    "coreFlaw": null,
    "skills": [],
    "relationships": [],
    "history": [
      {
        "chapter": 123,
        "summary": "Operates a laundry in San Donato and disputes the refusal of assistance sold under broader assurances. She pursues the difference between the offer she relied on and the dispatch exclusions invoked afterward. Her disputed recovery cost is eventually settled against a defined invoice and the provider's actual authority. The settlement addresses the claim without turning her into a Leonelli client or establishing that every Bloc company owes the same obligation."
      }
    ]
  },
  {
    "id": "elena-parodi",
    "name": "Elena Parodi",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 110,
    "faction": "civilian",
    "role": "specialist",
    "title": "Genoa freight and dispatch contact",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Dark hair looped in a loose knot. At the freight meeting, has dried mud on her trousers and a shallow cut on one hand; leaves her jacket over a chair while working through the papers. Looks at Dario's shoes before his face.",
    "summary": "A Genoa freight and dispatch contact who arranges carriers, loading attendance, collection windows, and prices. She demands that promised barter goods actually exist and distinguishes the local escort from the onward journey. Her dealings with Dario combine workable commercial terms with an unwillingness to absorb somebody else's missed commitment.",
    "coreFlaw": null,
    "skills": [],
    "relationships": [],
    "history": [
      {
        "chapter": 122,
        "summary": "A Genoa freight and dispatch contact who arranges carriers, loading attendance, collection windows, and prices. She demands that promised barter goods actually exist and distinguishes the local escort from the onward journey. Her dealings with Dario combine workable commercial terms with an unwillingness to absorb somebody else's missed commitment. She also helps personal correspondence reach the Terranova family, using an established freight connection for a smaller human obligation."
      }
    ]
  },
  {
    "id": "enrico-valenti",
    "name": "Cesare Valenti",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 110,
    "faction": "civilian",
    "role": "civilian",
    "title": "Remembered business intermediary",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Broad-shouldered, with soft hands.",
    "summary": "A business intermediary in the network through which Tessari introduces Dario to coastal contacts. His remembered access and courtesies help start a conversation, but they do not guarantee present control of the crews or charges involved.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "mauro-rinaldi",
    "name": "Mauro Rinaldi",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 110,
    "faction": "civilian",
    "role": "operative",
    "title": "Coastal escort and access provider",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A young man whose deliberately patient telephone manner advertises his new bargaining power.",
    "summary": "A Player who provides coastal gate cover and escort to Parodi's assembly yard. He tries to increase the value of a useful junction and a limited attendance window. Dario presses him to name the crew, recovery arrangements, and exact segment covered rather than accept a general assurance that problems will be handled. His class and attribute scores remain undisclosed.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "sergio-bertone",
    "name": "Fabrizio Bertone",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 112,
    "faction": "civilian",
    "role": "civilian",
    "title": "Industrial supplier and prospective financier",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Round, clean-shaven face. Repeatedly settles the collar of his shirt while listening to the financing discussion.",
    "summary": "A valve and industrial-fittings supplier considering financing for the freight pilot. He can contribute specified goods and cash subject to inspection and recorded handovers. His dealings with Fasce support a return to auditable conventional business; they do not make him a Bloc employee.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "teresa-bosco",
    "name": "Teresa Bosco",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 112,
    "faction": "civilian",
    "role": "civilian",
    "title": "Transport-company owner",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "A square-faced woman in a work shirt, with one cuff rolled higher than the other.",
    "summary": "Owns a carrier with four vehicles and six drivers. She protects trained crews, retained vehicles, and following bookings when considering a new contract. Giorgio initially overweights immediate cash in predicting her choice; her refusal makes him revise both the offer and his model of what she is preserving.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "michele-balestra",
    "name": "Michele Balestra",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 113,
    "faction": "civilian",
    "role": "specialist",
    "title": "Proprietor, Balestra Strumenti",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Stocky build. Wears a pale shirt at the instrument business and is later observed in a green jacket, handling technical correspondence and equipment.",
    "summary": "Proprietor of Balestra Strumenti, involved in instrument servicing and the transmission of technical access material. His business provides a traceable connection in the observation network, while his competence gives him a potential role as a technical reader. Those functions establish specific responsibilities without revealing the whole network's command or purpose.",
    "coreFlaw": null,
    "skills": [],
    "relationships": [],
    "history": [
      {
        "chapter": 116,
        "summary": "Proprietor of Balestra Strumenti, involved in instrument servicing and the transmission of technical access material. His business provides a traceable connection in the observation network, while his competence gives him a potential role as a technical reader. Those functions establish specific responsibilities without revealing the whole network's command or purpose. He supplies qualifications, accepts personal-use restrictions, and is admitted as a technical reader for a defined comparison shared with both Leonelli and Bloc teams, including failed matches and limitations."
      }
    ]
  },
  {
    "id": "carlo-vianello",
    "name": "Ottavio Vianello",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 116,
    "faction": "civilian",
    "role": "specialist",
    "title": "Observation collector and coordinator",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Thinning at the crown; wears a brown coat and a pullover over his shirt, with a cuff repaired in slightly mismatched dark thread.",
    "summary": "An observation collector and coordinator connected to Agnese Venturi's records. He prioritizes reports against instrument histories and explains his part in requesting restricted consultation. Identifying him establishes a responsible contact for particular decisions, while leaving the extent of his authority and the network's larger agenda open.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "nadia-sarti",
    "name": "Donata Sarti",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 117,
    "faction": "civilian",
    "role": "civilian",
    "title": "Displaced fuel customer",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "Purchases fuel for a small food distributor. Her paid collection is displaced by the Leonelli departure arrangement, giving the larger freight plan a cost borne by a smaller customer with commitments of her own.",
    "coreFlaw": null,
    "skills": [],
    "relationships": [],
    "history": [
      {
        "chapter": 123,
        "summary": "Purchases fuel for a small food distributor. Her paid collection is displaced by the Leonelli departure arrangement, giving the larger freight plan a cost borne by a smaller customer with commitments of her own. She seeks reimbursement, resists a broad waiver, and books replacement service with the Bloc. Compensation settles a loss without purchasing her loyalty."
      }
    ]
  },
  {
    "id": "renato-driver",
    "name": "Renato",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 117,
    "faction": "civilian",
    "role": "civilian",
    "title": "Recovery-truck driver",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Broad-shouldered, with a folded jacket beside him and a sandwich wrapped in paper on the dashboard while he waits for departure.",
    "summary": "A driver for Elena Parodi's company who helps check the recovery truck's winch under load. His departure and the vehicle's return affect other accepted jobs. Directs requests to extend his wait through Elena, who controls the assignment.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "mirella-rota",
    "name": "Mirella Rota",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 118,
    "faction": "civilian",
    "role": "specialist",
    "title": "Receiving-pump technician",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": null,
    "summary": "An unawakened receiving-pump technician whose attendance includes travel time and household care obligations. She needs a reliable return arrangement and relief cover. Iris keeps those conditions in the staffing plan instead of treating a signed attendance sheet as unlimited availability.",
    "coreFlaw": null,
    "skills": [],
    "relationships": [],
    "history": [
      {
        "chapter": 121,
        "appearance": "Dark hair beneath a faded blue cap at the receiving yard."
      }
    ]
  },
  {
    "id": "bruno-farina",
    "name": "Gabriele Farina",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 121,
    "faction": "civilian",
    "role": "specialist",
    "title": "Refrigeration technician",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Bald, with a small silver hoop in one ear. Bends over the refrigeration unit's service cover and turns a screw before answering Iris.",
    "summary": "A refrigeration technician who diagnoses a failed controller rather than assuming the fan is the problem. He helps distinguish food consignments that can still be moved from temperature-sensitive material requiring a separate claim.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "enzo-sala",
    "name": "Enzo Sala",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 121,
    "faction": "civilian",
    "role": "specialist",
    "title": "Relief electrician",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Greying curls, flattened with sweat when he is brought safely inside after the fog rescue.",
    "summary": "A relief electrician initially misdirected at the receiving yard during the fog emergency. The student party locates and recovers him along the warehouse wall. Recovering his equipment and giving him a safe working approach remain separate tasks before electrical work can proceed.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  },
  {
    "id": "sandro-dispatch",
    "name": "Sandro",
    "alias": null,
    "portrait": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20200%20260%22%3E%3Crect%20width%3D%22200%22%20height%3D%22260%22%20fill%3D%22%231c2024%22/%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2288%22%20r%3D%2234%22%20fill%3D%22%2359616a%22/%3E%3Cpath%20d%3D%22M35%20240v-50a65%2065%200%200%201%20130%200v50%22%20fill%3D%22%2359616a%22/%3E%3C/svg%3E",
    "chapter": 121,
    "faction": "civilian",
    "role": "civilian",
    "title": "Dispatch helper",
    "class": "Unconfirmed",
    "tier": null,
    "classLine": null,
    "descriptor": null,
    "primaryStat": null,
    "secondaryStat": null,
    "stats": null,
    "appearance": "Seen at the receiving desk with ink across the fingers of one hand. Works with the written reports and manifests during the emergency.",
    "summary": "A dispatch helper at the receiving yard. He works with manifests and handovers and records incoming reports while Iris checks workers' actual whereabouts during the emergency.",
    "coreFlaw": null,
    "skills": [],
    "relationships": []
  }
]);

var FACTION_COLORS = {
  "leonelli": {
    "color": "#c9a84c",
    "label": "Leonelli"
  },
  "ferro-patto": {
    "color": "#6a8caf",
    "label": "Ferro Patto"
  },
  "fiamma-eterna": {
    "color": "#d4763a",
    "label": "Fiamma Eterna"
  },
  "leone-selvaggio": {
    "color": "#b33a3a",
    "label": "Leone Selvaggio"
  },
  "tredicesima": {
    "color": "#5a7a5a",
    "label": "Tredicesima"
  },
  "municipio": {
    "color": "#7a7a8a",
    "label": "Municipio Coalition"
  },
  "compagnia-acque": {
    "color": "#4a7a9a",
    "label": "Compagnia delle Acque"
  },
  "corporate-bloc": {
    "color": "#8a7a6a",
    "label": "Corporate Bloc"
  },
  "civilian": {
    "color": "#6a6a60",
    "label": "Civilian"
  },
  "carabinieri": {
    "color": "#5a7a8a",
    "label": "Carabinieri"
  }
};

var ROLE_LABELS = {
  "core-five": "Core Five",
  "analyst": "Analyst",
  "faction-leader": "Faction Leader",
  "civilian": "Civilian",
  "adventurer": "Adventurer",
  "operative": "Operative",
  "specialist": "Specialist"
};
