const challenges = [
  {
    belongsTo: "",
    name: "Wishseeker VI",
    description: "Complete Week 6 of Wishing All the Best.",
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
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: "",
    name: "Dragon Delves",
    description: "Complete pathways in Riven's Lair and The Coil.",
    category: ["The Coil"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Pathways",
        progress: 0,
        goal: 30,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: null
  },
  {
    belongsTo: "",
    name: "Mod Collector",
    description: "Unlock artifact mods.",
    category: ['Activities'],
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
    name: "Iron Sharpens Iron",
    description: "Complete Iron Banner matches. Earn bonus progress for wins.",
    category: ['Time', 'PvP'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Progress",
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
    name: "Rapid Precision",
    description: "Get rapid precision final blows. Bonus progress is granted for defeating Guardians, and for every defeated target after the second one.",
    category: ['Loadout', 'PvP', 'Gambit'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Headshot Rapidly defeated",
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
