const challenges = [
  {
    belongsTo: "",
    name: "Wishseeker VII",
    description: "Complete Week 7 of Wishing All the Best.",
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
    name: "Swift Dispersal",
    description: "Rapidly defeat combatants in Riven's Lair or The Coil. Gain additional progress from final blows within The Coil. Additionally, collect Wishing Glass Shards in The Coil.",
    category: ["The Coil"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Rapidly defeated",
        progress: 0,
        goal: 100,
        completed: false
      },
      {
        isPercent: false,
        task: "Shards collected",
        progress: 0,
        goal: 500,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: "",
    name: "Dragon's Defender V",
    description: "Defeat targets with Trace Rifles or Linear Fusion Rifles. Gain additional progress from Guardian final blows and final blows within Riven's Lair or The Coil.",
    category: ['Loadout', 'PvP', 'Gambit', "The Coil"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Trace Rifle or Linear Fusion Rifle final blows",
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
    name: "On a Whim",
    description: "Acquire Chivalric Fire.",
    category: ['Gear'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Sword Sword",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Expedited Violence",
    description: "Rapidly defeat targets in Crucible, Gambit, or Vanguard. Bonus progress is granted for Guardian final blows.",
    category: ['Vanguard', 'PvP', 'Gambit'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Rapidly defeated combatants",
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
    name: "Weight of Dreams",
    description: "Get final blows with weapons using Heavy ammo in ritual activities. Earn bonus progress for Rocket Launcher final blows or by defeating Guardians.",
    category: ['Vanguard', 'PvP', 'Gambit'],
    completed: false,
    challengeIndex: "",
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
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Flourish of Power",
    description: "Defeat Guardians in the Mayhem playlist with Super abilities.",
    category: ['Time', 'PvP'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Guardians",
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
    name: "Darkest Nightfall",
    description: "Complete any Nightfall strike on Hero difficulty or higher. Bonus progress is granted for completing Nightfalls above Hero difficulty.",
    category: ['Vanguard'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Nightfall",
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
    name: "Mid-Range Calibration",
    description: "Calibrate mid-range weapons—Hand Cannons, Glaives, Auto Rifles, Fusion Rifles, and Machine Guns. Bonus progress is granted for defeating Guardians.",
    category: ['Loadout', 'PvP'],
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

const weekName = 'Week Seven'

const week07 = {
  name: weekName,
  challenges: challenges.map((challenge, challengeIndex) => {
    challenge.belongsTo = weekName.replaceAll(' ', '-');
    challenge.challengeIndex = challengeIndex;
    return challenge;
  })
};

module.exports = week07;
