const challenges = [
  {
    belongsTo: String,
    name: "Legendary Defiance",
    description: "Complete Defiant Battlegrounds on Legend difficulty.",
    category: ['Defiant Battleground'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Progress",
        progress: 0,
        goal: 2,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: null
  },
  {
    belongsTo: String,
    name: "Favored Warrior",
    description: "Earn Favors of Justice, Grace, and Zeal during Season of Defiance activities. Bonus progress awarded for Favors earned during activities on Legend difficulty.",
    category: ['Defiant Battleground'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Favor of Justice",
        progress: 0,
        goal: 20,
        completed: false
      },
      {
        isPercent: false,
        task: "Favor of Grace",
        progress: 0,
        goal: 20,
        completed: false
      },
      {
        isPercent: false,
        task: "Favor of Zeal",
        progress: 0,
        goal: 20,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: String,
    name: "Defiant Specialist",
    description: "Defeat combatants with precision final blows in Seasonal activities. Bonus progress awarded for using Season of Defiance weapons. These are Perpetualis, Prodigal Return, Regnant, Caretaker, Raconteur, and Royal Executioner.",
    category: ['Defiant Battleground'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Precision",
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
    name: "Pinnacle",
    description: "Reach Power Level 1810 by earning pinnacle rewards.",
    category: ['Gear'],
    completed: false,
    challengeIndex: Number,
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
    belongsTo: String,
    name: "Warp and Weft",
    description: "In Gambit, defeat targets with a Strand, Solar, or Void subclass equipped. Bonus progress is awarded for ability final blows and defeating Guardians.",
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
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: String,
    name: "Weaving Sunlight",
    description: "Defeat combatants in Vanguard playlists with a Strand, Solar, or Void subclass equipped. Bonus progress awarded for ability final blows.",
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
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: String,
    name: "Armory-Wide Calibration",
    description: "Calibrate Kinetic, Energy, and Power weapons. Bonus progress against Champions.",
    category: ['Loadout'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "Kinetic weapon",
        progress: 0,
        goal: 100,
        completed: false
      },
      {
        isPercent: true,
        task: "Energy weapon",
        progress: 0,
        goal: 100,
        completed: false
      },
      {
        isPercent: true,
        task: "Power weapon",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+++",
    dust: "Bright Dust"
  }
];

const weekName = 'Week Nine'

const week09 = {
  name: weekName,
  challenges: challenges.map((challenge, challengeIndex) => {
    challenge.belongsTo = weekName.replaceAll(' ', '-');
    challenge.challengeIndex = challengeIndex;
    return challenge;
  })
};

module.exports = week09;