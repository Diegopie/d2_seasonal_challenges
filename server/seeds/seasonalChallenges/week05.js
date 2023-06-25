const challenges = [
  {
    belongsTo: String,
    name: "Into the Depths V",
    description: "Complete the Week 5 Into the Depths mission",
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
    name: "Front Line Salvager V",
    description: "Complete 8 bounties from the Sonar Station in the H.E.L.M. Additionally, defeat powerful combatants anywhere in the system.",
    category: ['Deep Dive', 'Salvage'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Bounties",
        progress: 0,
        goal: 8,
        completed: false
      },
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
    name: "Heavy Salvager",
    description: "Defeat combatants with Power weapons in Salvage activities.",
    category: ['Salvage'],
    completed: false,
    challengeIndex: Number,
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
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: String,
    name: "Prepared for War",
    description: "Defeat targets with Hand Cannons or Pulse Rifles. Defeated Guardians or combatants defeated in Salvage or Deep Dive activities grant additional progress.",
    category: ['Loadout', 'Salvage', 'Deep Dive', 'Gambit', 'PvP'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "Hand Cannon or Pulse Rifle final blows",
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
    name: "Battle Rhythm",
    description: "Defeat targets anywhere in the system while using Auto Rifles, Hand Cannons, Scout Rifles, Glaives, or Linear Fusion Rifles. Bonus progress is granted for defeating Guardians.",
    category: ['Loadout', 'PvP', 'Gambit'],
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
    name: "Gotta Win Them All",
    description: "Complete activities in Vanguard, Gambit, or Crucible playlists. Bonus progress is granted for completing Vanguard playlist activities at Hero difficulty or higher, or for winning Gambit or Crucible matches.",
    category: ['Vanguard', 'Crucible', 'Gambit'],
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
    name: "Iron Sharpens Iron",
    description: "Complete Iron Banner matches. Earn bonus progress for wins.",
    category: ['Time'],
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
    name: "Flood Tide",
    description: "Acquire Last Rite.",
    category: ['Gear'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Scout Rifle",
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
