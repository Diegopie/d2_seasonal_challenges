const challenges = [
  {
    belongsTo: String,
    name: "Eternal Queensguard",
    description: "Complete a flawless run in any Defiant Battlegrounds playlist location.",
    category: ['Defiant Battleground'],
    completed: false,
    challengeIndex: Number,
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
    belongsTo: String,
    name: "Defiant Focus",
    description: "Decode or focus Defiant Engrams at the War Table during Season of Defiance.",
    category: ['Gear'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Defiant Engram",
        progress: 0,
        goal: 20,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: String,
    name: "Favored Liberator",
    description: "Generate Favors in Seasonal activities. All members of your current fireteam contribute to overall progress",
    category: ['Defiant Battleground'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Favors generated",
        progress: 0,
        goal: 60,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: String,
    name: "Fleeting Glory",
    description: "Complete Crucible matches in the Competitive playlist. Earn bonus progress for wins.",
    category: ['PvP'],
    completed: false,
    challengeIndex: Number,
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
    xp: "Challenger XP+++",
    dust: "Bright Dust"
  },
  {
    belongsTo: String,
    name: "High-Value Hunter",
    description: "Defeat powerful combatants in Gambit. Earn bonus progress for defeating high-value targets.",
    category: ['Gambit'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "Combatants",
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
    belongsTo: String,
    name: "Grandmaster",
    description: "Complete any Nightfall strike on Grandmaster.",
    category: ['Vanguard'],
    completed: false,
    challengeIndex: Number,
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
