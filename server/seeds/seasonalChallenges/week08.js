const challenges = [
  {
    belongsTo: "",
    name: "Nest Egg",
    description: "Complete The Coil activity and access the Chamber of Wishes.",
    category: ["The Coil"],
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
    name: "Ritual Ornament",
    description: "Acquire any ornament for the Seasonal ritual weapon.",
    category: ["Gear"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Weapon Ornament",
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
    name: "Taking All Challenges",
    description: "Complete weekly playlist challenges.",
    category: ["Ritual"],
    completed: false,
    challengeIndex: "",
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
    belongsTo: "",
    name: "Fleeting Glory",
    description: "Complete Crucible matches in the Competitive playlist. Earn bonus progress for wins.",
    category: ['PvP'],
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
    name: "Life Dispersion",
    description: "Defeat targets with the Solar, Stasis, or Strand subclass equipped in Gambit. Bonus progress is granted for ability final blows and final blows against Guardians.",
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
    name: "Kinetic Forces",
    description: "Get final blows with Kinetic weapons. Bonus progress for defeating Guardians.",
    category: ['Guardians', 'Loadout'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Kinetic weapon",
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
    name: "Classified",
    description: "Keep it secret. Keep it safe.",
    category: [],
    completed: false,
    challengeIndex: "",
    objectives: [],
    reward: null,
    xp: null,
    dust: null
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