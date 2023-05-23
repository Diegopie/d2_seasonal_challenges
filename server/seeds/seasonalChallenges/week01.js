const challenges = [
  {
    belongsTo: String,
    name: "Into the Depths I",
    description: "Complete the Week 1 Into the Depths mission",
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
    name: "Front Line Salvager I",
    description: "Complete Salvage or Deep Dive activities while using an Arc or Strand subclass. Additionally, defeat Fallen anywhere in the system.",
    category: ['Deep Dive', 'Salvage'],
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
        task: "Fallen",
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
    name: "Successful Salvager",
    description: "Successfully complete jobs in Salvage activities.",
    category: ['Salvage'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Jobs",
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
    name: "The One That Didn't Get Away",
    description: "Catch fish at any Fish Pond. Additionally, complete public events on any destination.",
    category: ['Activities'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Fish",
        progress: 0,
        goal: 50,
        completed: false
      },
      {
        isPercent: false,
        task: "Public events",
        progress: 0,
        goal: 2,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: String,
    name: "EDZ Activities",
    description: "In the EDZ, earn progress by completing bounties, patrols, public events, and Lost Sectors.",
    category: ['EDZ'],
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
    name: "Taking All Challenges",
    description: "Complete weekly playlist challenges.",
    category: ['Activites'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Challenges",
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
    name: "Spark Defender",
    description: "Score points in Rift. Bonus progress is awarded for igniting the Rift.",
    category: ['PvP', 'Time'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Points",
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
    name: "Standard Issue",
    description: "Defeat targets in Gambit with Primary ammo. Bonus progress is granted for using Auto Rifles, Hand Cannons, and Scout Rifles. Bonus progress also is granted for defeating Guardians.",
    category: ['Gambit'],
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
    name: "The Fallen Fall",
    description: "Defeat Fallen combatants in Vanguard playlists or strikes. Earn bonus progress for defeating tougher combatants.",
    category: ['Vanguard'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "Fallen",
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
    name: "Calibrate Close Range",
    description: "Calibrate close-range weapons—Sidearms, Submachine Guns, Shotguns, Glaives, and Swords. Bonus progress for defeating Guardians.",
    category: ['Loadout', 'PvP', 'Gambit'],
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

const weekName = 'Week One'

const week01 = {
        name: weekName,
        challenges: challenges.map((challenge, challengeIndex) => {
          challenge.belongsTo = weekName.replaceAll(' ', '-');
          challenge.challengeIndex = challengeIndex;
          return challenge;
        })
    };

module.exports = week01;
