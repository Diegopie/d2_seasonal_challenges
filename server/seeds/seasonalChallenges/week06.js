const challenges = [
  {
    belongsTo: "",
    name: "Into the Depths VI",
    description: "Complete the Week 6 Into the Depths mission.",
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
    name: "Front Line Salvager VI",
    description: "Open chests in Deep Dive activities. Redeeming Deep Dive Keys grants bonus progress. Additionally, defeat targets with Void damage anywhere in the system. Guardians grant increased progress.",
    category: ['Deep Dive', 'Loadout'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Deep Dive Chests",
        progress: 0,
        goal: 3,
        completed: false
      },
      {
        isPercent: true,
        task: "Void Void",
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
    name: "Under Pressure",
    description: "Successfully complete a Pressure Trial encounter at any depth in a Deep Dive activity. Additionally, defeat bosses and minibosses in Deep Dive activities.",
    category: ['Deep Dive'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Pressure Trial",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: false,
        task: "Bosses and Minibosses",
        progress: 0,
        goal: 7,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: "",
    name: "Go Big (Fish) or Go Home",
    description: "Catch large or bigger fish at any Fish Pond. Fish must be at least 18kg to be considered large.",
    category: ['Activities'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Large fish",
        progress: 0,
        goal: 15,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: "",
    name: "Round and Round We Go",
    description: "Generate Orbs of Power in Vanguard, Gambit, or Crucible playlists.",
    category: ['Vanguard', 'Gambit', 'Crucible'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Orbs of Power",
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
    name: "The Deep End",
    description: "Defeat opponents in the Crucible with Auto Rifles, Hand Cannons, Scout Rifles, Glaives, or Linear Fusion Rifles. Additional progress is granted for landing final blows with Glaives, Linear Fusion Rifles, and Hand Cannons that use Special ammo.",
    category: ['Crucible'],
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
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Boss Battle",
    description: "Defeat bosses in strikes or Vanguard playlists.",
    category: ['Vanguard'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Bosses",
        progress: 0,
        goal: 10,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Absolutely Stunning",
    description: "Stun Champions.",
    category: [],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Champions",
        progress: 0,
        goal: 50,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+++",
    dust: "Bright Dust"
  }
];

const weekName = 'Week Six'

const week06 = {
        name: weekName,
        challenges: challenges.map((challenge, challengeIndex) => {
          challenge.belongsTo = weekName.replaceAll(' ', '-');
          challenge.challengeIndex = challengeIndex;
          return challenge;
        })
    };

module.exports = week06;
