const challenges = [
  {
    belongsTo: "",
    name: "Acolyte's Ascent VI",
    description: "Complete Week 6 of The Bladed Path quest.",
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
    name: "Luminary III",
    description: "Master the Light by defeating combatants with Void, Arc, or Solar damage. Earn bonus progress by affecting combatants with subclass abilities: [Void] Volatile [Arc] Blind [Solar] Scorch",
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
    name: "Sympathetic Magic",
    description: "Defeat combatants in Savathûn's Spire using damage that matches your active subclass.",
    category: ["Savathûn's Spire"],
    completed: false,
    challengeIndex: "",
    objectives: [
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
    name: "Bone Breaker",
    description: "Crush Lucent Hive Ghosts anywhere in Savathûn's throne world. Earn bonus progress during Season of the Witch activities.",
    category: ["Throne World", "Savathûn's Spire", "Altars of Summoning"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Hive Ghosts crushed",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: "",
    name: "Mod Collector",
    description: "Unlock artifact mods.",
    category: ["Gear"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Mods unlocked",
        progress: 0,
        goal: 12,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Trial by Firing Squad",
    description: "Win multiple rounds in the Trials of Osiris.",
    category: ["PvP", "Time"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Wins",
        progress: 0,
        goal: 10,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Calibrate Long Range",
    description: "Calibrate long-range weapons—Pulse Rifles, Bows, and Trace Rifles. Bonus progress is granted for defeating Guardians.",
    category: ["Loadout", "PvP"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Calibration",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Heavy Hardware",
    description: "Get final blows with Heavy ammo in ritual activities. Earn bonus progress for Machine Gun final blows or by defeating Guardians.",
    category: ["Vanguard", "Gambit", "PvP"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Power weapon",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+++",
    dust: "Bright Dust"
  }
];

const weekName = 'Week Six'

const week06 = {
        name: weekName,
        challenges: challenges.map((challenge, challengeIndex) => {
          challenge.belongsTo = weekName.replaceAll(' ', '-');
          challenge.challengeIndex = challengeIndex;
          return challenge;
        })
    };

module.exports = week06;
