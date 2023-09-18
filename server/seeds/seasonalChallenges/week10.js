const challenges = [
  {
    belongsTo: "",
    name: "Greatsword Logic",
    description: "Defeat bosses and minibosses anywhere in the system. Earn bonus progress by defeating Headless Ones in Haunted Sectors during Festival of the Lost.",
    category: ["Activities", "Time"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Bosses",
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
    name: "Hive Eradicator",
    description: "Defeat Hive anywhere in the system. Earn bonus progress by defeating Hive in Season of the Witch activities or in Haunted Sectors during Festival of the Lost.",
    category: ["Savathûn's Spire", "Altars of Summoning", "Time"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Hive",
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
    name: "Throne World Activities",
    description: "In the Throne World, complete bounties and earn progress by completing patrols, public events, and looting Lost Sectors.",
    category: ["Throne World"],
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
    name: "Mean and Green",
    description: "Get final blows with Strand weapons or abilities in the Crucible.",
    category: ["PvP"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Strand final blows",
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
    name: "Bring a Sword",
    description: "Get final blows with Swords. Earn bonus progress in Haunted Sectors.",
    category: ["Loadout", "Time"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Calibration",
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
    name: "Primary School",
    description: "Get final blows with Primary ammo in ritual activities. Earn bonus progress for Submachine Gun, Bow, or Scout Rifle final blows or by defeating Guardians.",
    category: ["Vanguard", "Gambit", "PvP"],
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
    xp: "Challenger XP++",
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