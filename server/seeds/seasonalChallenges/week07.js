const challenges = [
  {
    belongsTo: "",
    name: "Front Line Salvager VII",
    description: "Complete Salvage or Deep Dive activities while wearing Season of the Deep armor. Additionally, defeat bosses and minibosses anywhere in the system.",
    category: ['Salvage', 'Deep Dive'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Seasonal activities",
        progress: 0,
        goal: 100,
        completed: false
      },
      {
        isPercent: false,
        task: "Bosses and Minibosses",
        progress: 0,
        goal: 10,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: "",
    name: "Salvage Legend",
    description: "Complete Salvage on Legend difficulty.",
    category: ['Salvage'],
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
    name: "Salvaged Munitions",
    description: "Defeat targets with Seasonal weapons. Defeated Guardians or combatants defeated in Salvage or Deep Dive activities grant additional progress.",
    category: ['Loadout', 'Salvage', 'Crucible', 'Gambit', 'Deep Dive'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Targets defeated",
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
    name: "Fleeting Glory",
    description: "Complete Crucible matches in the Competitive playlist. Earn bonus progress for wins.",
    category: ['Crucible'],
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
    name: "High-Value Hunter",
    description: "Defeat powerful combatants in Gambit. Earn bonus progress for defeating high-value targets.",
    category: ['Gambit'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Targets",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Grandmaster",
    description: "Complete any Nightfall strike on Grandmaster.",
    category: ['Vanguard'],
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
  }
]

const weekName = 'Week Seven'

const week07 = {
  name: weekName,
  challenges: challenges.map((challenge, challengeIndex) => {
    challenge.belongsTo = weekName.replaceAll(' ', '-');
    challenge.challengeIndex = challengeIndex;
    return challenge;
  })
};

module.exports = week07;
