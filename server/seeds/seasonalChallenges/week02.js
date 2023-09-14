const challenges = [
  {
    belongsTo: "",
    name: "Acolyte's Ascent II",
    description: "Complete Week 2 of The Bladed Path quest",
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
    name: "Luminary I",
    description: "Master the Light by defeating combatants with [Void] Void, [Arc] Arc, or [Solar] Solar damage. Explore the arcane arts by identifying Minor Arcana cards at the Lectern of Divination in the Athenaeum.",
    category: ["Loadout"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "[Void] Void, [Arc] Arc, or [Solar] Solar",
        progress: 0,
        goal: 100,
        completed: false
      },
      {
        isPercent: false,
        task: "Minor Arcana identified",
        progress: 0,
        goal: 5,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+++",
    dust: null
  },
  {
    belongsTo: "",
    name: "Legend Spire",
    description: "Complete Savathûn's Spire on Legend difficulty.",
    category: ["Savathûn's Spire"],
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
    name: "Wisps and Whispers",
    description: "Draw Whisper Cards from the Deck of Whispers in Savathûn's Spire or the Altars of Summoning to earn powerful bonuses. Unlock the Deck of Whispers by identifying 5 Major Arcana cards at the Lectern of Divination.",
    category: ["Savathûn's Spire", "Altars of Summoning"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Deck of Whispers cards",
        progress: 0,
        goal: 7,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: null
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
  },
  {
    belongsTo: "",
    name: "Most Dangerous Prey",
    description: "Defeat Guardians in Gambit or Crucible.",
    category: ["PvP", "Gambit"],
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
    name: "Bank, Kill, Repeat",
    description: "Earn points by banking Motes, defeating Blockers, and defeating Guardians in Gambit.",
    category: ["Gambit"],
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
    xp: "Challenger XP+",
    dust: "Bright Dust"
  }
];

const weekName = 'Week Two'

const week02 = {
        name: weekName,
        challenges: challenges.map((challenge, challengeIndex) => {
          challenge.belongsTo = weekName.replaceAll(' ', '-');
          challenge.challengeIndex = challengeIndex;
          return challenge;
        })
    };

module.exports = week02;
