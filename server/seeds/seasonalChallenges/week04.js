const challenges = [
  {
    belongsTo: "",
    name: "Acolyte's Ascent IV",
    description: "Complete Week 4 of The Bladed Path quest.",
    category: [],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: "",
    name: "Forgotten Power",
    description: "Complete a Powerful encounter in the Altars of Summoning and defeat combatants using the damage type that matches your subclass.",
    category: ["Altars of Summoning", "Loadout"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Powerful encounter completed",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: true,
        task: "Matching damage defeats",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: "",
    name: "Luminary II",
    description: "Master the Light by defeating combatants with [Void] Void, [Arc] Arc, or [Solar] Solar damage. Earn bonus progress by affecting combatants with subclass abilities: [Void] Weaken [Arc] Jolt [Solar] Ignite",
    category: ["Loadout"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Void Void, Arc Arc, or Solar Solar",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: null
  },
  {
    belongsTo: "",
    name: "Bounty Conjurer",
    description: "Complete daily bounties during the Season of the Witch.",
    category: [],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Season of the Witch bounties",
        progress: 0,
        goal: 3,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: "",
    name: "Last Rites",
    description: "Get ability final blows in Season of the Witch activities.",
    category: ["Savathûn's Spire", "Altars of Summoning"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Ability",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Grandmaster",
    description: "Complete any Nightfall strike on Grandmaster.",
    category: ["Vanguard"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Nightfall",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Calibrate Close Range",
    description: "Calibrate close-range weapons—Sidearms, Submachine Guns, Shotguns, Glaives, and Swords. Bonus progress for defeating Guardians.",
    category: ["Loadout", "PvP", "Gambit"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Calibration",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: "Bright Dust"
  }
];

const weekName = 'Week Four'

const week04 = {
        name: weekName,
        challenges: challenges.map((challenge, challengeIndex) => {
          challenge.belongsTo = weekName.replaceAll(' ', '-');
          challenge.challengeIndex = challengeIndex;
          return challenge;
        })
    };

module.exports = week04;
