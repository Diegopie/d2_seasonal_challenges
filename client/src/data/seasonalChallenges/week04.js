const week04 = {
    name: 'Week Four',
    challenges: [
        // 01 
        {
            belongsTo: Number,
            name: "More Than a Weapon IV",
            description: "Complete Week 4 of More Than a Weapon. Defeat Hive and Scorn anywhere in the system",
            category: ['More Than A Weapon'],
            completed: false,
            challengeIndex: Number,
            objectives: [
                {
                    isPercent: false,
                    task: "More than a Weapon: Week 4 completed",
                    progress: 0,
                    goal: 1,
                    completed: false
                },
                {
                    isPercent: false,
                    task: "Combatants",
                    progress: 0,
                    goal: 250,
                    completed: false
                }
            ],
            reward: "Exo Frame Module",
            xp: "Challenger XP+",
            dust: null
        },
        // 02
        {
            belongsTo: String,
            name: "Heist Battlegrounds III",
            description: "In the Heist Battlegrounds playlist, complete heists and breach submind vaults without alerting Wrathborn reinforcements.",
            category: ['Heist Battlegrounds'],
            completed: false,
            challengeIndex: Number,
            objectives: [
                {
                    isPercent: false,
                    task: "Heist Battlegrounds",
                    progress: 0,
                    goal: 20,
                    completed: false
                },
                {
                    isPercent: false,
                    task: "Vaults breached",
                    progress: 0,
                    goal: 3,
                    completed: false
                }
            ],
            reward: "Exo Frame Module",
            xp: "Challenger XP+",
            dust: null
        },
        // 03
        {
            belongsTo: String,
            name: "Entropic Shock",
            description: "Defeat combatants with Arc of Void damage in Heist Battlegrounds.",
            category: ['Heist Battlegrounds'],
            completed: false,
            challengeIndex: Number,
            objectives: [
              {
                isPercent: true,
                task: "Arc of Void final blows",
                progress: 0,
                goal: 100,
                completed: false
              }
            ],
            reward: null,
            xp: "Challenger XP+",
            dust: null
          },
        // 04
        {
          belongsTo: String,
          name: "Seasonal Shaping I",
          description: "Unlock the Pattern for any Seasonal or IKELOS v1.0.3 weapon.",
          category: ['Gear'],
          completed: false,
          challengeIndex: Number,
          objectives: [
            {
              isPercent: false,
              task: "Pattern unlocked",
              progress: 0,
              goal: 1,
              completed: false
            }
          ],
          reward: null,
          xp: "Challenger XP+",
          dust: null
        },
        // 05
        {
          belongsTo: String,
          name: "Mod Collector",
          description: "Unlock artifact mods.",
          category: ['Gear'],
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
        // 06
        {
          belongsTo: String,
          name: "Precision Calibration",
          description: "Calibrate marksman weapons—Scout Rifles, Sniper Rifles, and Linear Fusion Rifles—by landing precision final blows. Bonus progress against Guardians.",
          category: ['Loadout', 'PvP'],
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
        },
        // 07
        {
          belongsTo: String,
          name: "High-Value Hunter",
          description: "Defeat powerful combatants in Gambit. Earn bonus progress for defeating high-value targets.",
          category: ['Gambit'],
          completed: false,
          challengeIndex: Number,
          objectives: [
            {
              isPercent: true,
              task: "Combatants",
              progress: 0,
              goal: 100,
              completed: false
            }
          ],
          reward: null,
          xp: "Challenger XP++",
          dust: "Bright Dust"
        },
        // 08
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
        // 09
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
          reward: 'Nightfall Weapon',
          xp: "Challenger XP+",
          dust: "Bright Dust"
        },
      ]
};

export default week04;