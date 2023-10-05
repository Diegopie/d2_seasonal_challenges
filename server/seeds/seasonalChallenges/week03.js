const challenges = [
  {
    belongsTo: "",
    name: "Acolyte's Ascent III",
    description: "Complete Week 3 of The Bladed Path quest",
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
    name: "Athamethodology",
    description: "Complete Savathûn's Spire or Altars of Summoning encounters with Season of the Witch weapons equipped. These include Locus Locutus, Eleatic Principle, Semiotician, Kept Confidence, The Eremite, and Brya's Love. Earn bonus progress for each additiona ...",
    category: ["Savathûn's Spire", "Altars of Summoning"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Season of the Witch activities",
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
    name: "Kinesic Spellcraft",
    description: "Defeat challenging combatants and earn melee or ability final blows in Savathûn's Spire.",
    category: ["Savathûn's Spire"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Challenging combatants",
        progress: 0,
        goal: 50,
        completed: false
      },
      {
        isPercent: false,
        task: "Ability",
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
    belongsTo: "",
    name: "Doom and Boom",
    description: "Defeat targets with Fusion Rifles or Grenade Launchers. Earn bonus progress by defeating Guardians or by defeating combatants in Season of the Witch activities.",
    category: ["Loadout", "Savathûn's Spire", "Altars of Summoning", "PvP", "Gambit"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Fusion Rifle or Grenade Launcher Final blows",
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
    name: "Commendation Appreciation",
    description: "Earn progress for giving commendations in Vanguard, Crucible, and Gambit activities.",
    category: ["Vanguard", "Crucible", "Gambit"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Progress",
        progress: 0,
        goal: 10,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Neptune Activities",
    description: "In Neomuna, complete bounties, patrols, public events, and Lost Sectors.",
    category: ["Neomuna"],
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
    name: "Ritual Violence",
    description: "Rapidly defeat targets in Season of the Witch activities.",
    category: ["Savathûn's Spire", "Altars of Summoning"],
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
    name: "Iron Sharpens Iron",
    description: "Complete Iron Banner matches. Earn bonus progress for wins.",
    category: ["PvP", "Time"],
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
    name: "Ultimate Champion",
    description: "Defeat Champions in any Nightfall strike on Hero difficulty or higher. Earn bonus progress at higher difficulty tiers.",
    category: ["Vanguard"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Champions",
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
  
  const weekName = 'Week Three'
  
  const week03 = {
          name: weekName,
          challenges: challenges.map((challenge, challengeIndex) => {
            challenge.belongsTo = weekName.replaceAll(' ', '-');
            challenge.challengeIndex = challengeIndex;
            return challenge;
          })
      };
  
  module.exports = week03;
  