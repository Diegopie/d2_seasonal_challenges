const challenges = [
  {
    belongsTo: "",
    name: "Super Salvager",
    description: "Defeat combatants with Super abilities in Salvage activities.",
    category: ['Salvage'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Super",
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
    name: "Treasures from the Deep",
    description: "Complete a Deep Dive activity with the highest tier reward bonus.",
    category: ['Deep Dive'],
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
    xp: "Challenger XP++",
    dust: null
  },
  {
    belongsTo: "",
    name: "Commendable Diver",
    description: "Give or receive commendations in matchmade Deep Dive activities.",
    category: ['Deep Dive'],
    completed: false,
    challengeIndex: "",
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
    belongsTo: "",
    name: "Pinnacle",
    description: "Reach Power Level 1810 by earning pinnacle rewards.",
    category: [],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Power Level",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Trial by Firing Squad",
    description: "Win multiple rounds in the Trials of Osiris.",
    category: ['PvP'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Wins",
        progress: 0,
        goal: 20,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Broadside",
    description: "Defeat targets in Gambit with Power Weapons. Bonus progress is granted for final blows with Linear Fusion Rifles and for defeating Guardians.",
    category: ['Gambit'],
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
    xp: "Challenger XP+",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Implements of War",
    description: "Defeat targets with Auto Rifles, Hand Cannons, Scout Rifles, Glaives, and Linear Fusion Rifles. Bonus progress is granted for defeating Guardians.",
    category: ['Loadout', 'PvP' , 'Gambit'],
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
  }
];

const weekName = 'Week Eight';

const week08 = {
  name: weekName,
  challenges: challenges.map((challenge, challengeIndex) => {
    challenge.belongsTo = weekName.replaceAll(' ', '-');
    challenge.challengeIndex = challengeIndex;
    return challenge;
  })
};

module.exports = week08;