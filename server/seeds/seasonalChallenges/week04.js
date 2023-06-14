const challenges = [
  {
    belongsTo: String,
    name: "Into the Depths IV",
    description: "Complete the Week 4 Into the Depths mission",
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
    name: "Front Line Salvager IV",
    description: "Complete Salvage or Deep Dive activities while using a Void subclass. Additionally, defeat Hive anywhere in the system.",
    category: ['Salvage', 'Deep Dive'],
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
        task: "Hive",
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
    name: "Deep Diver",
    description: "Successfully complete encounters at any depth in Deep Dive activities. Pressure Trial encounters grant increased progress.",
    category: ['Deep Dive'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Encounters",
        progress: 0,
        goal: 6,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: String,
    name: "Commendable Salvager",
    description: "Give or receive commendations in matchmade Salvage activities.",
    category: ['Salvage'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Commendations",
        progress: 0,
        goal: 6,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: String,
    name: "Mod Collector",
    description: "Unlock artifact mods.",
    category: [],
    completed: false,
    challengeIndex: Number,
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
    belongsTo: String,
    name: "Momentum Crash",
    description: "Defeat Guardians in Momentum Control. Earn bonus progress with Zone Advantage.",
    category: ['PvP'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Guardians",
        progress: 0,
        goal: 50,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: "Bright Dust"
  },
  {
    belongsTo: String,
    name: "Sound of Metal",
    description: "Defeat targets with Auto Rifles, Hand Cannons, and Scout Rifles in Gambit. Bonus progress is granted for defeating Guardians.",
    category: ['Gambit'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "Auto Rifle Auto Rifle",
        progress: 0,
        goal: 100,
        completed: false
      },
      {
        isPercent: true,
        task: "Hand Cannon Hand Cannon",
        progress: 0,
        goal: 100,
        completed: false
      },
      {
        isPercent: true,
        task: "Scout Rifle Scout Rifle",
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
    name: "Darkest Nightfall",
    description: "Complete any Nightfall strike on Hero difficulty or higher.",
    category: ['Vanguard'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Nightfall",
        progress: 0,
        goal: 3,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: "Bright Dust"
  },
  {
    belongsTo: String,
    name: "Precision Calibration",
    description: "Calibrate marksman weapons—Scout Rifles, Sniper Rifles, and Linear Fusion Rifles—by landing precision final blows. Bonus progress against Guardians.",
    category: ['Loadout', 'Gambit', 'PvP'],
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
];

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
