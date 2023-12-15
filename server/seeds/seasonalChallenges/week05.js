const challenges = [
  {
    belongsTo: "",
    name: "Wishseeker V",
    description: "Complete Week 5 of Wishing All the Best.",
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
    name: "Dreamcrusher",
    description: "Defeat bosses and minibosses in Riven's Lair or The Coil.",
    category: ["The Coil"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Bosses",
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
    name: "Dragon's Defender IV",
    description: "Defeat targets with Hand Cannons or Submachine Guns. Gain additional progress from Guardian final blows and final blows within Riven's Lair or The Coil.",
    category: ["The Coil", 'Loadout', 'PvP', "Gambit"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Hand Cannon or SMG final blows",
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
    name: "Neptune Activities",
    description: "In Neomuna, complete bounties, patrols, public events, and Lost Sectors.",
    category: ['Neomuna'],
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
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Commendation Appreciation",
    description: "Earn progress for giving commendations in Vanguard, Crucible, and Gambit activities.",
    category: ['Vanguard', 'PvP', 'Gambit'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Progress",
        progress: 0,
        goal: 5,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Potent Projectiles",
    description: "Defeat Guardians in Crucible or Gambit with Bows, Hand Cannons, Pulse Rifles, Auto Rifles, or Rocket Launchers. Earn bonus progress for Rocket Launcher final blows.",
    category: ['PvP', 'Gambit'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Guardians",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Boss Battle",
    description: "Defeat bosses in strikes or Vanguard playlists. Bonus progress is granted for defeating bosses on Hero difficulty or higher.",
    category: ['Vanguard'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Bosses",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+++",
    dust: "Bright Dust"
  }
]

const weekName = 'Week Five'

const week05 = {
  name: weekName,
  challenges: challenges.map((challenge, challengeIndex) => {
    challenge.belongsTo = weekName.replaceAll(' ', '-');
    challenge.challengeIndex = challengeIndex;
    return challenge;
  })
};

module.exports = week05;
