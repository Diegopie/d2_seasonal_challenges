const challenges = [
  {
    belongsTo: "",
    name: "Dragon's Defender VI",
    description: "Defeat targets with Pulse or Scout Rifles. Gain additional progress from Guardian final blows and final blows within Riven's Lair or The Coil.",
    category: ["The Coil", "Guardians", "Loadout"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Pulse Rifle or Scout Rifle final blows",
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
    name: "Lost in the Legend",
    description: "Complete a Lost Sector on Legend or higher.",
    category: ['Activities'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Lost Sectors",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Overspecialized",
    description: "Get final blows with weapons using Special ammo in ritual activities. Earn bonus progress by defeating Guardians.",
    category: ['Ritual'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Special ammo weapon",
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
    name: "Eyeing Iron",
    description: "Complete Crucible matches. Earn bonus progress in Iron Banner and for victories.",
    category: ['PvP', 'Time'],
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
    name: "Ultimate Champion",
    description: "Defeat Champions in any Nightfall strike on Hero difficulty or higher. Earn bonus progress at higher difficulty tiers.",
    category: ['Vanguard'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Champions",
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
    name: "Calibrate Close Range",
    description: "Calibrate close-range weapons—Sidearms, Submachine Guns, Shotguns, Glaives, and Swords. Bonus progress for defeating Guardians.",
    category: ['Loadout', 'Guardians'],
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