const challenges = [
  {
    belongsTo: String,
    name: "Light of the Righteous",
    description: "Complete Mission: Retribution",
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
    name: "Size Defying",
    description: "Defeat Champions or bosses in Defiant Battlegrounds playlist. Bonus progress awarded for those defeated on Legend difficulty",
    category: ['Defiant Battleground'],
    completed: false,
    challengeIndex: Number,
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
    dust: null
  },
  {
    belongsTo: String,
    name: "Relentless Liberator",
    description: "Gain bonus rewards using a Defiant Key at the end of Defiant Battlegrounds playlist activities on both Normal and Legend difficulties. Defiant Keys can be earned by completing Lightfall campaign missions, Terminal Overload in Neomuna, raids, Vanguard...",
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
    name: "Trial by Firing Squad",
    description: "Win multiple rounds in the Trials of Osiris.",
    category: ['PvP'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Wins",
        progress: 0,
        goal: 20,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+++",
    dust: "Bright Dust"
  },
  {
    belongsTo: String,
    name: "Defiant Gambit Ornament",
    description: "Acquire the Gambit ornament for Ecliptic Distaff.",
    category: ['Gambit'],
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
    name: "Defiant Calibration",
    description: "Calibrate Swords, Bows, and Glaives. Bonus progress for defeating Guardians.",
    category: ['Loadout', 'PvP', 'Gambit'],
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
  }
]

const weekName = 'Week Eight'

const week08 = {
name: weekName,
challenges: challenges.map((challenge, challengeIndex) => {
  challenge.belongsTo = weekName.replaceAll(' ', '-');
  challenge.challengeIndex = challengeIndex;
  return challenge;
})
};

module.exports = week08;