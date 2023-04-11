const week04 = {
    name: 'Week Four',
    challenges: [
      {
        belongsTo: String,
        name: "All That Matters",
        description: "Complete Week 4 of the We Stand Unbroken quest",
        category: [],
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
        reward: "War Table Upgrade",
        xp: "Challenger XP+",
        dust: null
      },
      {
        belongsTo: String,
        name: "Cunning Liberator",
        description: "Defeat combatants in the Defiant Battlegrounds playlist using Energy weapons. Earn bonus progress if they also deal Void or Arc damage.",
        category: ['Defiant Battleground'],
        completed: false,
        challengeIndex: Number,
        objectives: [
          {
            isPercent: true,
            task: "Energy weapon",
            progress: 0,
            goal: 100,
            completed: false
          }
        ],
        reward: "War Table Upgrade",
        xp: "Challenger XP",
        dust: null
      },
      {
        belongsTo: String,
        name: "Focused Defiance",
        description: "Decode or focus Defiant Engrams at the War Table during Season of Defiance.",
        category: ['Gear'],
        completed: false,
        challengeIndex: Number,
        objectives: [
          {
            isPercent: false,
            task: "Defiant Engram",
            progress: 0,
            goal: 10,
            completed: false
          }
        ],
        reward: "War Table Upgrade",
        xp: "Challenger XP",
        dust: null
      },
      {
        belongsTo: String,
        name: "Strandweaver",
        description: "Complete The Final Strand quest. Also, rapidly defeat combatants throughout Neomuna. Bonus for Sidearm final blows.",
        category: ['Neomuna'],
        completed: false,
        challengeIndex: Number,
        objectives: [
          {
            isPercent: false,
            task: "The Final Strand",
            progress: 0,
            goal: 1,
            completed: false
          },
          {
            isPercent: true,
            task: "Rapidly defeated combatants",
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
        belongsTo: String,
        name: "Mod Collector",
        description: "Unlock artifact mods.",
        category: ['Activities'],
        completed: false,
        challengeIndex: Number,
        objectives: [
          {
            isPercent: false,
            task: "Mods unlocked",
            progress: 0,
            goal: 12,
            completed: false
          }
        ],
        reward: null,
        xp: "Challenger XP++",
        dust: "Bright Dust"
      },
      {
        belongsTo: String,
        name: "Momentum Crash",
        description: "Defeat Guardians in Momentum Control. Earn bonus progress with Zone Advantage.",
        category: ['PvP', 'Time'],
        completed: false,
        challengeIndex: Number,
        objectives: [
          {
            isPercent: false,
            task: "Guardians",
            progress: 0,
            goal: 50,
            completed: false
          }
        ],
        reward: null,
        xp: "Challenger XP+",
        dust: "Bright Dust"
      },
      {
        belongsTo: String,
        name: "Razor's Edge",
        description: "Defeat targets with Swords, Bows, and Glaives in Gambit. Bonus progress for defeating Guardians.",
        category: ['Gambit'],
        completed: false,
        challengeIndex: Number,
        objectives: [
          {
            isPercent: true,
            task: "Glaive",
            progress: 0,
            goal: 100,
            completed: false
          },
          {
            isPercent: true,
            task: "Sword",
            progress: 0,
            goal: 100,
            completed: false
          },
          {
            isPercent: true,
            task: "Bow",
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
        name: "Darkest Nightfall",
        description: "Complete any Nightfall strike on Hero difficulty or higher.",
        category: ['Vanguard'],
        completed: false,
        challengeIndex: Number,
        objectives: [
          {
            isPercent: false,
            task: "Nightfall",
            progress: 0,
            goal: 3,
            completed: false
          }
        ],
        reward: null,
        xp: "Challenger XP+",
        dust: "Bright Dust"
      },
      {
        belongsTo: String,
        name: "Precision Calibration",
        description: "Calibrate marksman weapons—Scout Rifles, Sniper Rifles, and Linear Fusion Rifles—by landing precision final blows. Bonus progress against Guardians.",
        category: ['Loadout', 'PvP', 'Gambit'],
        completed: false,
        challengeIndex: Number,
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
};

export default week04;