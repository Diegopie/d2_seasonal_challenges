const challenges = [
  {
    belongsTo: "",
    name: "Nyahamkara Hunt",
    description: "Find 7 of Queen Mara's loyal companions.",
    category: ['Activities'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Starcats",
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
    name: "Throne World Activities",
    description: "In the Throne World, complete bounties and earn progress by completing patrols, public events, and looting Lost Sectors.",
    category: ['Throne World'],
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
    xp: "Challenger XP",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Last Rites",
    description: "Get ability final blows in Crucible, Gambit, or Vanguard. Bonus progress is granted for Guardian final blows.",
    category: ['Ritual'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Ability",
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
    name: "Most Dangerous Prey",
    description: "Defeat Guardians in Gambit or Crucible.",
    category: ['Guardians'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Eliminations",
        progress: 0,
        goal: 25,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Momentum Crash",
    description: "Defeat Guardians in Momentum Control. Earn bonus progress with Zone Advantage.",
    category: ['PvP', 'Time'],
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
    xp: "Challenger XP+",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Bank, Kill, Repeat",
    description: "Earn points by banking Motes, defeating Blockers, and defeating Guardians in Gambit.",
    category: ['Gambit'],
    completed: false,
    challengeIndex: "",
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
    xp: "Challenger XP",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Calibrate Long Range",
    description: "Calibrate long-range weapons—Pulse Rifles, Bows, and Trace Rifles. Bonus progress is granted for defeating Guardians.",
    category: ['Loadout', 'Guardians'],
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
    xp: "Challenger XP++",
    dust: "Bright Dust"
  }
];

const weekName = 'Week Ten'

const week10 = {
name: weekName,
challenges: challenges.map((challenge, challengeIndex) => {
  challenge.belongsTo = weekName.replaceAll(' ', '-');
  challenge.challengeIndex = challengeIndex;
  return challenge;
})
};

module.exports = week10;