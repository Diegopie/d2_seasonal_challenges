const challenges = [
  {
      belongsTo: "",
      name: "Wishseeker III",
      description: "Complete Week 3 of Wishing All the Best.",
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
      name: "Elemental Extremes",
      description: "Get Arc, Solar, or Stasis final blows. Bonus progression is granted for jolt, ignite, shatter final blows.",
      category: ['Loadout'],
      completed: false,
      challengeIndex: "",
      objectives: [
          {
              isPercent: true,
              task: 'Progress',
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
      name: "Foes of the Dragon: Scorn",
      description: "Defeat Scorn anywhere in the system. Defeating Scorn in Riven's Lair or The Coil grants additional progress. Additionally, defeat Glass Collectors in The Coil.",
      category: ["The Coil"],
      completed: false,
      challengeIndex: "",
      objectives: [
          {
              isPercent: true,
              task: "Scorn",
              progress: 0,
              goal: 100,
              completed: false
          },
          {
              isPercent: false,
              task: "Glass Collectors",
              progress: 0,
              goal: 3,
              completed: false
          }
      ],
      reward: null,
      xp: "Challenger XP+",
      dust: null
  },
  {
      belongsTo: "",
      name: "Dragon's Defender III",
      description: "Defeat targets with Pulse or Fusion Rifles. Gain additional progress from Guardian final blows and final blows within Riven's Lair or The Coil.",
      category: ["The Coil", "PvP", "Gambit"],
      completed: false,
      challengeIndex: "",
      objectives: [
          {
              isPercent: true,
              task: "Pulse Rifle or Fusion Rifle final blows",
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
      name: "Round and Round We Go",
      description: "Generate Orbs of Power in Vanguard, Gambit, or Crucible playlists.",
      category: ['Vanguard', 'Gambit', 'PvP'],
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
      name: "Trial by Firing Squad",
      description: "Win multiple rounds in the Trials of Osiris.",
      category: ['PvP', 'Time'],
      completed: false,
      challengeIndex: "",
      objectives: [
          {
              isPercent: false,
              task: "Wins",
              progress: 0,
              goal: 10,
              completed: false
          }
      ],
      reward: null,
      xp: "Challenger XP++",
      dust: "Bright Dust"
  }
];
  
  const weekName= 'Week Three'
  
  const week03 = {
    name: weekName,
    challenges: challenges.map((challenge, challengeIndex) => {
      challenge.belongsTo = weekName.replaceAll(' ', '-');
      challenge.challengeIndex = challengeIndex;
      return challenge;
    })
};

module.exports = week03;
  