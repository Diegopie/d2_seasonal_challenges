const challenges = [
  {
      belongsTo: "",
      name: "Wishseeker II",
      description: "Complete Week 2 of Wishing All the Best.",
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
      name: "Inner Fires",
      description: "Get Solar, Void, or Strand final blows. Bonus progression is granted for scorch, volatile, or suspended final blows.",
      category: ['Loadout'],
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
      xp: "Challenger XP++",
      dust: null
  },
  {
      belongsTo: "",
      name: "Foes of the Dragon: Taken",
      description: "Defeat Taken anywhere in the system. Defeating Taken in Riven's Lair or The Coil grants additional progress. Additionally, complete pathways in Riven's Lair and The Coil.",
      category: ["The Coil"],
      completed: false,
      challengeIndex: "",
      objectives: [
          {
              isPercent: true,
              task: "Taken",
              progress: 0,
              goal: 100,
              completed: false
          },
          {
              isPercent: false,
              task: "Pathways",
              progress: 0,
              goal: 8,
              completed: false
          }
      ],
      reward: null,
      xp: "Challenger XP+",
      dust: null
  },
  {
      belongsTo: "",
      name: "Dragon's Defender II",
      description: "Defeat targets with Shotguns and Bows. Gain additional progress from Guardian final blows and final blows within Riven's Lair or The Coil.",
      category: ['Loadout', 'PvP', 'Gambit', "The Coil"],
      completed: false,
      challengeIndex: "",
      objectives: [
          {
              isPercent: true,
              task: "Shotgun or Bow final blows",
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
      name: "Absolutely Stunning",
      description: "Stun Champions.",
      category: ['Activities'],
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
      name: "The Sun's Fire",
      description: "Defeat Guardians with Solar damage in the Crucible.",
      category: ['PvP'],
      completed: false,
      challengeIndex: "",
      objectives: [
          {
              isPercent: true,
              task: "Solar Solar",
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
      name: "Precision Calibration",
      description: "Calibrate marksman weapons—Scout Rifles, Sniper Rifles, and Linear Fusion Rifles—by landing precision final blows. Bonus progress against Guardians.",
      category: ['Loadout', 'PvP', 'Gambit'],
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
