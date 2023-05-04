const challenges = [
  {
    belongsTo: String,
    name: "Ultimate Defiance",
    description: "Defeat combatants with Supers in the Defiant Battlegrounds playlist. Bonus progress awarded if you also have the Strand subclass equipped.",
    category: ['Defiant Battleground'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "Super",
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
    name: "Favored Liberator",
    description: "Generate Favors in Seasonal activities. All members of your current fireteam contribute to overall progress.",
    category: ['Defiant Battleground'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: true,
        task: "Favors generated",
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
    name: "Europa Activities",
    description: "On Europa, earn progress by completing bounties, patrols, public events, and Lost Sectors.",
    category: ['Destination - Europa'],
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
    name: "Defiant Vanguard Ornament",
    description: "Acquire the Vanguard ornament for Ecliptic Distaff.",
    category: ['Vanguard'],
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
  }
];

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