const challenges = [
  {
    belongsTo: "",
    name: "Acolyte's Ascent I",
    description: "Complete Week 1 of The Bladed Path quest.",
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
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: "",
    name: "Adept Arcana",
    description: "Complete Major Arcana quests to collect your Deck of Whispers.",
    category: [],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Quests completed",
        progress: 0,
        goal: 5,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: "",
    name: "Witch's Spoils",
    description: "Open chests in Savathûn's Spire or the Altars of Summoning. Earn bonus progress by opening chests with Witch's Keys.",
    category: ["Savathûn's Spire", "Altars of Summoning"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Chests opened",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+++",
    dust: null
  },
  {
    belongsTo: "",
    name: "Master Conjurer",
    description: "Collect offerings, which are used to summon combatants in the Altars of Summoning. Complete Altars of Summoning encounters. Higher difficulty encounters grant bonus progress.",
    category: ["Altars of Summoning"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Offerings acquired",
        progress: 0,
        goal: 5,
        completed: false
      },
      {
        isPercent: true,
        task: "Encounters completed",
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
    name: "Taking All Challenges",
    description: "Complete weekly playlist challenges.",
    category: [],
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
    name: "Round and Round We Go",
    description: "Generate Orbs of Power in Vanguard, Gambit, or Crucible playlists.",
    category: [],
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
    xp: "Challenger XP+++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Precision Calibration",
    description: "Calibrate marksman weapons—Scout Rifles, Sniper Rifles, and Linear Fusion Rifles—by landing precision final blows. Bonus progress against Guardians.",
    category: ["Loadout", "PvP"],
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
