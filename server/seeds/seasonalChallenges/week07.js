const challenges = [
  {
    belongsTo: "",
    name: "Acolyte's Ascent VII",
    description: "Complete Week 7 of The Bladed Path quest.",
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
    name: "Power Caster",
    description: "Defeat combatants with Power weapons in Season of the Witch activities.",
    category: ["Savathûn's Spire", "Altars of Summoning"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Heavy ammo final blows",
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
    name: "Ritual Rampage",
    description: "Rapidly defeat combatants and defeat challenging combatants in the Altars of Summoning.",
    category: ["Altars of Summoning"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Rapidly defeated combatants",
        progress: 0,
        goal: 100,
        completed: false
      },
      {
        isPercent: true,
        task: "Powerful combatants",
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
    name: "Boomsayer",
    description: "Defeat targets with Rocket Launchers or Machine Guns. Earn bonus progress by defeating Guardians or by defeating combatants in Season of the Witch activities.",
    category: ["Loadout", "PvP", "Savathûn's Spire", "Altars of Summoning"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Rocket Launcher or Machine Gun Final blows",
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
    name: "Lost in the Legend",
    description: "Complete a Lost Sector on Legend or higher.",
    category: ["Activities"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Lost Sectors",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Guardian Spirit",
    description: "Assist your allies via revives, healing, overshields, and subclass buffs in Vanguard, Gambit, or Crucible playlists.",
    category: ["Vanguard", "Gambit", "PvP"],
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
    name: "Gotta Win Them All",
    description: "Complete activities in Vanguard, Gambit, or Crucible playlists. Bonus progress is granted for completing Vanguard playlist activities at Hero difficulty or higher, or for winning Gambit or Crucible matches.",
    category: ["Vanguard", "Gambit", "PvP"],
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
    name: "Enlightened Gambit",
    description: "Defeat targets with the Arc, Solar, or Void subclass equipped in Gambit. Bonus progress is awarded for ability final blows and Guardian final blows.",
    category: ["Gambit"],
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
    name: "Rapid Precision",
    description: "Get rapid precision final blows. Bonus progress is granted for every defeated target after the second one.",
    category: ["Loadout"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Headshot Rapidly defeated",
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
