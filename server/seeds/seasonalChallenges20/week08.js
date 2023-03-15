const week08 = {
  name: "Week Eight",
  challenges: [
    // 01
    {
      belongsTo: String,
      name: "Seraph's Shield III",
      description: "Complete the Exotic mission Operation: Seraph's Shield on Legend difficulty. Defeat combatants with precision damage anywhere in the system using Pulse Rifles.",
      category: ["Loadout"],
      completed: false,
      challengeIndex: Number,
      objectives: [
        {
          isPercent: false,
          task: "Legend Operation: Seraph's Shield completed",
          progress: 0,
          goal: 1,
          completed: false
        },
        {
          isPercent: true,
          task: "Precision Pulse Rifle Kils",
          progress: 0,
          goal: 100,
          completed: false
        }
      ],
      reward: null,
      xp: "Challenger XP++",
      dust: null
    },
    // 02
    {
      belongsTo: String,
      name: "Flawless Heists",
      description: "Complete Heist Battlegrounds in the playlist or Legend Heist Battlegrounds without dying.",
      category: ["Heist Battlegrounds"],
      completed: false,
      challengeIndex: Number,
      objectives: [
        {
          isPercent: false,
          task: "Heist Battlegrounds",
          progress: 0,
          goal: 3,
          completed: false
        }
      ],
      reward: null,
      xp: "Challenger XP+",
      dust: null
    },
    //
    {
      belongsTo: String,
      name: "Umbral Focusing III",
      description: "Focus IKELOS weapon engrams at the Exo Frame in the H.E.L.M.",
      category: ["Gear"],
      completed: false,
      challengeIndex: Number,
      objectives: [
        {
          isPercent: false,
          task: "Engrams focused",
          progress: 0,
          goal: 5,
          completed: false
        }
      ],
      reward: null,
      xp: "Challenger XP+",
      dust: null
    },
    //
    {
      belongsTo: String,
      name: "Seraph's Calibration",
      description: "Calibrate Pulse Rifles, Fusion Rifles, and Power Grenade Launchers. Rapidly defeating combatants and defeating Guardians will award bonus progress.",
      category: ["Loadout", "PvP"],
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
      name: "Gambit Ornament",
      description: "Acquire the Gambit ornament for Veles-X.",
      category: ["Gambit"],
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
    // 
    {
      belongsTo: String,
      name: "Trial by Firing Squad",
      description: "Win multiple rounds in the Trials of Osiris.",
      category: ["PvP"],
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
    }
  ]
};

export default week08;