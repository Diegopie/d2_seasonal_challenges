const challenges = [
  {
    belongsTo: String,
    name: "Still Standing",
    description: "Complete Week 5 of the We Stand Unbroken quest",
    category: [],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "",
        progress: 0,
        goal: 0,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: String,
    name: "Legendary Liberator",
    description: "Complete a Defiant Battleground on Legend difficulty.",
    category: ['Defiant Battleground'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "",
        progress: 0,
        goal: 0,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: String,
    name: "Favored Warrior",
    description: "Earn Favors of Justice, Grace, and Zeal during Season of Defiance activities. Bonus progress awarded for Favors earned during activities on Legend difficulty",
    category: ['Defiant Battleground'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "Favor of Justice",
        progress: 0,
        goal: 100,
        completed: false
      },
      {
        isPercent: true,
        task: "Favor of Grace",
        progress: 0,
        goal: 100,
        completed: false
      },
      {
        isPercent: true,
        task: "Favor of Zeal",
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
    name: "Friendly Neighborhood Guardian",
    description: "Complete a weekly mission from Lightfall on Hero difficulty or higher.",
    category: ['Activities'],
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
    name: "Unraveling the Sun",
    description: "Defeat Guardians in Crucible. Bonus progress is granted for opponents defeated with Strand, Solar, and Void ability final blows.",
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
    name: "Dredgin' Up Victory",
    description: "Complete Gambit matches. Earn bonus progress for wins.",
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
    name: "Adversaries of Humanity",
    description: "Defeat Taken and Vex bosses in Vanguard playlists or strikes.",
    category: ['Vanguard'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Taken bosses",
        progress: 0,
        goal: 5,
        completed: false
      },
      {
        isPercent: false,
        task: "Vex bosses",
        progress: 0,
        goal: 5,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: String,
    name: "Righteous Blade",
    description: "Acquire Ecliptic Distaff.",
    category: ['Gear'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Glaive",
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
