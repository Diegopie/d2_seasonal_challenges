const challenges = [
  {
    belongsTo: "",
    name: "Wicked Depths",
    description: "Complete the Whetstone encounter in Deep Dives and earn the Wicked Implement Scout Rifle.",
    category: ['Activities'],
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
    xp: "Challenger XP++",
    dust: null
  },
  {
    belongsTo: "",
    name: "Neptune Activities",
    description: "In Neomuna, complete bounties, patrols, public events, and Lost Sectors.",
    category: ['Neomuna'],
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
    name: "Sparks of Arc",
    description: "Defeat Guardians in Crucible matches with the Arc subclass equipped. Bonus progress is granted for defeating blinded opponents.",
    category: ['PvP'],
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
    name: "Special Measures",
    description: "Defeat targets in Gambit with weapons using Special ammo. Bonus progress is granted for defeating Guardians and landing final blows with Glaives and Hand Cannons using Special ammo.",
    category: ['Gambit'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
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
    name: "Tried and True",
    description: "Defeat combatants in Vanguard playlists or strikes with Primary ammo. Bonus progress is granted for more challenging combatants.",
    category: ['Vanguard'],
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
  }
]

const weekName = 'Week Ten'

const week10 = {
name: weekName,
challenges: challenges.map((challenge, challengeIndex) => {
  challenge.belongsTo = weekName.replaceAll(' ', '-');
  challenge.challengeIndex = challengeIndex;
  return challenge;
})
};

module.exports = week10;