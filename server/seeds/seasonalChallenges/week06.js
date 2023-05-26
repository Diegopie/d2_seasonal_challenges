const challenges = [
  {
    belongsTo: String,
    name: "Forceful Liberator",
    description: "Defeat combatants in the Defiant Battlegrounds playlist using Power weapons. Earn bonus progress if they also deal Solar damage.",
    category: ['Defiant Battleground'],
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
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: String,
    name: "Relentless Liberator",
    description: "Gain bonus rewards using a Defiant Key at the end of Defiant Battlegrounds playlist activities on both Normal and Legend difficulties.Defiant Keys can be earned by completing Lightfall campaign missions, Terminal Overload in Neomuna, raids, Vanguard strikes...",
    category: ['Defiant Battleground'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Bonus rewards received",
        progress: 0,
        goal: 3,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: null
  },
  {
    belongsTo: String,
    name: "Vexing Liberator",
    description: "Defeat Vex with Seasonal weapons. These are Perpetualis, Prodigal Return, Regnant, Caretaker, Raconteur, and Royal Executioner.Bonus progress awarded for Vex defeated in Seasonal activities",
    category: ['Loadout'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "",
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
    name: "Defiant Crucible Ornament",
    description: "Acquire the Crucible ornament for Ecliptic Distaff.",
    category: ['PvP'],
    completed: false,
    challengeIndex: Number,
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
    belongsTo: String,
    name: "Elegant Weaponry",
    description: "Defeat combatants in Vanguard playlists or strikes while using a Sword, Bow, or Glaive.",
    category: ['Vanguard'],
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
    name: "Absolutely Stunning",
    description: "Stun Champions.",
    category: [],
    completed: false,
    challengeIndex: Number,
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
