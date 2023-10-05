const challenges = [
  {
    belongsTo: "",
    name: "Filamentary Magic",
    description: "Defeat targets with Strand, Arc, or Solar Supers. Earn bonus progress for defeating Guardians.",
    category: ["Loadout", "PvP", "Gambit"],
    completed: false,
    challengeIndex: "",
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
    belongsTo: "",
    name: "Ponderous Orbs",
    description: "Generate Orbs of Power and find any hidden chest within Savathûn's Spire.",
    category: ["Savathûn's Spire"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Orbs of Power",
        progress: 0,
        goal: 100,
        completed: false
      },
      {
        isPercent: false,
        task: "Hidden chests",
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
    name: "Precision Paraphysics",
    description: "Defeat targets with Bows or Hand Cannons. Earn bonus progress by defeating Guardians or by defeating combatants in Season of the Witch activities.",
    category: ["Loadout", "PvP", "Gambit", "Savathûn's Spire", "Altars of Summoning"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Bow or Hand Cannon Final blows",
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
    name: "Punch Drunk",
    description: "Get powered melee final blows in Season of the Witch activities.",
    category: ["Savathûn's Spire", "Altars of Summoning"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Melee Melee",
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
    name: "Flourish of Power",
    description: "Defeat Guardians in the Mayhem playlist with Super abilities.",
    category: ["PvP", "Time"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Guardians",
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
    name: "Boss Battle",
    description: "Defeat bosses in strikes or Vanguard playlists.",
    category: ["Vanguard"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Bosses",
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
    belongsTo: "",
    name: "Kinetic Forces",
    description: "Get final blows with Kinetic weapons. Bonus progress for defeating Guardians.",
    category: ["Loadout", "PvP", "Gambit"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Kinetic weapon",
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

const weekName = 'Week Eight';

const week08 = {
  name: weekName,
  challenges: challenges.map((challenge, challengeIndex) => {
    challenge.belongsTo = weekName.replaceAll(' ', '-');
    challenge.challengeIndex = challengeIndex;
    return challenge;
  })
};

module.exports = week08;