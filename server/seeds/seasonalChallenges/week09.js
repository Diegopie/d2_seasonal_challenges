const challenges = [
  {
    belongsTo: "",
    name: "Sol Sorcery",
    description: "Defeat combatants anywhere in the system with the damage type that matches your subclass. Earn bonus progress from combatants in Haunted Sectors during Festival of the Lost.",
    category: ["Loadout", "Timed"],
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
    name: "Sun and Moon",
    description: "Defeat combatants with Void or Solar damage in the Altars of Summoning.",
    category: ["Altars of Summoning"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Void Void or Solar Solar final blows",
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
    name: "Into the Unknown",
    description: "Complete Lost Sectors on Neptune, in Savathûn's throne world, or on Europa. Haunted Sectors also grant progress during Festival of the Lost.",
    category: ["Throne World", "Activities", "Time"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Lost Sectors completed",
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
    name: "Ritual Ornament",
    description: "Acquire any ornament for the Seasonal ritual weapon.",
    category: ["Gear"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Weapon Ornament",
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
    name: "Moon Activities",
    description: "On the Moon, earn progress by completing bounties, patrols, public events, and Lost Sectors.",
    category: ["Moon"],
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
    name: "Eyeing Iron",
    description: "Complete Crucible matches. Earn bonus progress in Iron Banner and for victories.",
    category: ["PvP", "Time"],
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
    name: "Darkest Nightfall",
    description: "Complete any Nightfall strike on Hero difficulty or higher.",
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
    xp: "Challenger XP++",
    dust: "Bright Dust"
  }
];

const weekName = 'Week Nine'

const week09 = {
  name: weekName,
  challenges: challenges.map((challenge, challengeIndex) => {
    challenge.belongsTo = weekName.replaceAll(' ', '-');
    challenge.challengeIndex = challengeIndex;
    return challenge;
  })
};

module.exports = week09;