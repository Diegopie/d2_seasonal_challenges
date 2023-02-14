const week09 = {
  name: "Week Nine",
  challenges: [
    {
      belongsTo: String,
      name: "Legend Heist Battlegrounds II",
      description: "Complete each Heist Battleground on Legend difficulty.",
      category: ['Heist Battleground'],
      completed: false,
      challengeIndex: Number,
      objectives: [
        {
          isPercent: false,
          task: "Legend Heist Battleground: Europa",
          progress: 0,
          goal: 1,
          completed: false
        },
        {
          isPercent: false,
          task: "Legend Heist Battleground: Moon",
          progress: 0,
          goal: 1,
          completed: false
        },
        {
          isPercent: false,
          task: "Legend Heist Battleground: Mars",
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
      belongsTo: String,
      name: "Heavy Loadout",
      description: "Defeat targets with Machine Guns. Bonus progress for defeating Guardians. Defeat powerful combatants in Heist Battlegrounds",
      category: ['Heist Battleground', 'PvP'],
      completed: false,
      challengeIndex: Number,
      objectives: [
        {
          isPercent: true,
          task: "Machine Gun final blows",
          progress: 0,
          goal: 100,
          completed: false
        },
        {
          isPercent: true,
          task: "Challenging combatants",
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
      name: "Pinnacle",
      description: "Reach Power Level 1590 by earning pinnacle rewards.",
      category: ['Gear'],
      completed: false,
      challengeIndex: Number,
      objectives: [
        {
          isPercent: false,
          task: "Power Level",
          progress: 0,
          goal: 1590,
          completed: false
        }
      ],
      reward: null,
      xp: "Challenger XP+++",
      dust: "Bright Dust"
    },
    {
      belongsTo: String,
      name: "Armory-Wide Calibration",
      description: "Calibrate Kinetic, Energy, and Power weapons. Bonus progress against Champions.",
      category: ['Loadout'],
      completed: false,
      challengeIndex: Number,
      objectives: [
        {
          isPercent: true,
          task: "Kinetic weapon",
          progress: 0,
          goal: 100,
          completed: false
        },
        {
          isPercent: true,
          task: "Energy weapon",
          progress: 0,
          goal: 100,
          completed: false
        },
        {
          isPercent: true,
          task: "Power weapon",
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
      belongsTo: String,
      name: "Icy Singularity",
      description: "Defeat targets with Void or Stasis effects. Bonus progress for defeating invading Guardians.",
      category: ['Loadout', 'Gambit'],
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
    },
    {
      belongsTo: String,
      name: "Cosmic Chill",
      description: "Defeat combatants with Void or Stasis effects in Vanguard playlists.",
      category: ['Vanguard'],
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
};

export default week09;