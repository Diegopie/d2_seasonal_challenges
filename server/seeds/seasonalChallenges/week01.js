const challenges = [
  {
    belongsTo: "",
    name: "Wishseeker I",
    description: "Complete Week 1 of Wishing All the Best.",
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
    name: "The City A Wish Built",
    description: "Complete Dreaming City public events, Lost Sectors, and patrols. Blind Well completions grant additional progress.",
    category: ['Dreaming City'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Dreaming City",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: null
  },
  {
    belongsTo: "",
    name: "Dragon's Defender I",
    description: "Defeat combatants with Solar weapons. Gain additional progress from Solar Rocket Launcher final blows.",
    category: ['Loadout'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Solar Solar weapon",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: null
  },
  {
    belongsTo: "",
    name: "Silver Blade",
    description: "Acquire the Swords and Signs Triumph.",
    category: ['Loadout'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Sword Sword",
        progress: 0,
        goal: 100,
        completed: false
      },
      {
        isPercent: true,
        task: "Solar Solar melee",
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
    name: "EDZ Activities",
    description: "In the EDZ, earn progress by completing bounties, patrols, public events, and Lost Sectors.",
    category: ['EDZ'],
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
    name: "Focused Intention",
    description: "Get final blows with weapons using Primary ammo in ritual activities. Earn bonus progress for Bow, Hand Cannon, Pulse Rifle, or Auto Rifle final blows or by defeating Guardians.",
    category: ['Gambit, PvP, Vanguard'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Primary ammo weapon",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+++",
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
