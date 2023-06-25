const challenges = [
  {
    belongsTo: String,
    name: "Into the Depths II",
    description: "Complete the Week 2 Into the Depths mission",
    category: [],
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
    name: "Front Line Salvager II",
    description: "Open chests in Salvage. Redeeming Salvage Keys grants additional progress. Additionally, defeat Taken anywhere in the system.",
    category: ['Salvage'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Salvage Chests",
        progress: 0,
        goal: 3,
        completed: false
      },
      {
        isPercent: true,
        task: "Taken",
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
    belongsTo: String,
    name: "Powerful Salvager",
    description: "Defeat powerful combatants in Salvage activities.",
    category: ['Salvage'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "Powerful combatants",
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
    belongsTo: String,
    name: "Antithetical Armaments",
    description: "Defeat targets with Shotguns or Sniper Rifles. Defeated Guardians or defeated combatants in Salvage or Deep Dive activities grant additional progress.",
    category: ['Loadout', 'Salvage', 'Deep Dive', 'Gambit', 'PvP'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "Shotgun or Sniper Rifle final blows",
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
    belongsTo: String,
    name: "Throne World Activities",
    description: "In the Throne World, complete bounties and earn progress by completing patrols, public events, and looting Lost Sectors.",
    category: ['Throne World'],
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
    xp: "Challenger XP+",
    dust: "Bright Dust"
  },
  {
    belongsTo: String,
    name: "Lost in the Legend",
    description: "Complete a Lost Sector on Legend or higher.",
    category: ['Activities'],
    completed: false,
    challengeIndex: Number,
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
    belongsTo: String,
    name: "Flourish of Power",
    description: "Defeat Guardians in the Mayhem playlist with Super abilities.",
    category: ['PvP', 'Time'],
    completed: false,
    challengeIndex: Number,
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
    xp: "Challenger XP+",
    dust: "Bright Dust"
  },
  {
    belongsTo: String,
    name: "Primeval Entourage",
    description: "Defeat Taken in Gambit. Earn bonus progress for defeating tougher combatants.",
    category: ['Gambit'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "Taken",
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
    belongsTo: String,
    name: "Taken Decimator",
    description: "Defeat Taken combatants in Vanguard playlists or strikes. Earn bonus progress for defeating tougher combatants.",
    category: ['Vanguard'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "Taken",
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
    belongsTo: String,
    name: "Calibrate Long Range",
    description: "Calibrate long-range weapons—Pulse Rifles, Bows, and Trace Rifles. Bonus progress is granted for defeating Guardians.",
    category: ['Loadout', 'PvP'],
    completed: false,
    challengeIndex: Number,
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
]

const weekName = 'Week Two'

const week02 = {
        name: weekName,
        challenges: challenges.map((challenge, challengeIndex) => {
          challenge.belongsTo = weekName.replaceAll(' ', '-');
          challenge.challengeIndex = challengeIndex;
          return challenge;
        })
    };

module.exports = week02;
