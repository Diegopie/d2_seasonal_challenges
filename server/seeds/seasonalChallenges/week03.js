const challenges = [
  {
    belongsTo: String,
    name: "Into the Depths III",
    description: "Complete the Week 3 Into the Depths mission",
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
    name: "Front Line Salvager III",
    description: "Complete Salvage or Deep Dive activities while wielding any Season of the Deep weapon. Additionally, defeat targets with Arc or Strand damage anywhere in the system. Guardians grant additional progress.",
    category: ['Salvage', 'Deep Dive', 'Loadout', 'PvP', 'Gambit'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Seasonal activities",
        progress: 0,
        goal: 3,
        completed: false
      },
      {
        isPercent: true,
        task: "Arc or Strand damage",
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
    name: "Depth Charge",
    description: "Defeat bosses in Salvage activities.",
    category: ['Salvage'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Bosses",
        progress: 0,
        goal: 5,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: String,
    name: "Short-Range Salvager",
    description: "Defeat targets with Submachine Guns or Swords. Defeated Guardians or combatants defeated in Salvage or Deep Dive activities grant additional progress.",
    category: ['Loadout', 'Salvage', 'Deep Dive'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "SMG or Sword final blows",
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
    name: "Nessus Activities",
    description: "On Nessus, earn progress by completing bounties, patrols, public events, and Lost Sectors.",
    category: ['Nessus'],
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
    name: "Commendation Appreciation",
    description: "Earn progress for giving commendations in Vanguard, Crucible, and Gambit activities.",
    category: ['Vanguard', 'Crucible', 'Gambit'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Progress",
        progress: 0,
        goal: 10,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: "Bright Dust"
  },
  {
    belongsTo: String,
    name: "Cosmic Churn",
    description: "Defeat Guardians in Crucible. Bonus progress is granted for opponents defeated with Arc, Strand, and Void ability final blows.",
    category: ['PvP'],
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
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: String,
    name: "Bank, Kill, Repeat",
    description: "Earn points by banking Motes, defeating Blockers, and defeating Guardians in Gambit.",
    category: ['Gambit'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "Points",
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
    name: "Ultimate Champion",
    description: "Defeat Champions in any Nightfall strike on Hero difficulty or higher. Earn bonus progress at higher difficulty tiers.",
    category: ['Vanguard'],
    completed: false,
    challengeIndex: Number,
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
    belongsTo: String,
    name: "Mid-Range Calibration",
    description: "Calibrate mid-range weapons—Hand Cannons, Glaives, Auto Rifles, Fusion Rifles, and Machine Guns. Bonus progress is granted for defeating Guardians.",
    category: ['Loadout', 'PvP', 'Gambit'],
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
    xp: "Challenger XP+",
    dust: "Bright Dust"
  }
]
  
  const weekName = 'Week Three'
  
  const week03 = {
          name: weekName,
          challenges: challenges.map((challenge, challengeIndex) => {
            challenge.belongsTo = weekName.replaceAll(' ', '-');
            challenge.challengeIndex = challengeIndex;
            return challenge;
          })
      };
  
  module.exports = week03;
  