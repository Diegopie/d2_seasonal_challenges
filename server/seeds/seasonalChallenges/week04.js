const challenges = [
  {
    belongsTo: "",
    name: "Wishseeker IV",
    description: "Complete Week 4 of Wishing All the Best.",
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
    name: "Wishing Well",
    description: "Open chests in Riven's Lair and The Coil.",
    category: ["The Coil"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Chests",
        progress: 0,
        goal: 25,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: null
  },
  {
    belongsTo: "",
    name: "Foes of the Dragon: Vex",
    description: "Defeat Vex anywhere in the system. Defeating Vex in Riven's Lair or The Coil grants additional progress. Additionally, break pots in The Coil.",
    category: ["The Coil"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Vex",
        progress: 0,
        goal: 125,
        completed: false
      },
      {
        isPercent: false,
        task: "Pots broken",
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
    name: "Fond Farewells",
    description: "Complete the Exotic mission 'Starcrossed.'",
    category: ['Activities'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Complete",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: null,
    xp: null,
    dust: null
  },
  {
    belongsTo: "",
    name: "Gotta Win Them All",
    description: "Complete activities in Vanguard, Gambit, or Crucible playlists. Bonus progress is granted for completing Vanguard playlist activities at Hero difficulty or higher, or for winning Gambit or Crucible matches.",
    category: ['Vanguard', 'PvP', 'Gambit'],
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
  },
]

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
