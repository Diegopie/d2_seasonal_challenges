const seasonalChallenges = [
    // Week One
    {
        name: 'Week One',
        challenges: [
            // 01
            {
                belongsTo: Number,
                name: "More Than a Weapon I",
                description: "Complete Week 1 of More Than a Weapon.",
                category: ['More Than A Weapon'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "More than a Weapon: Week 1 completed",
                        progress: 0,
                        goal: 1,
                        completed: false
                    }
                ],
                reward: "Exo Frame Module",
                xp: "Challenger XP+",
                dust: null
            },
            // 02
            {
                belongsTo: Number,
                name: "Heist Battlegrounds I",
                description: "In the Heist Battlegrounds playlist or Legend Heist Battlegrounds, open Seraph Chests and defeat powerful Hive combatants.",
                category: ['Heist Battlegrounds'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Seraph Chests",
                        progress: 0,
                        goal: 5,
                        completed: false
                    },
                    {
                        isPercent: false,
                        task: "Powerful Hive defeated",
                        progress: 0,
                        goal: 50,
                        completed: false
                    }
                ],
                reward: "Exo Frame Module",
                xp: "Challenger XP+",
                dust: null
            },
            // 03
            {
                belongsTo: Number,
                name: "Frozen Lightning",
                description: "Defeat combatants with Stasis or Arc damage in Heist Battlegrounds.",
                category: ['Heist Battlegrounds'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: true,
                        task: "Stasis or Arc final blows",
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
                belongsTo: Number,
                name: "Precision Loadout",
                description: "Defeat targets with Bows or Linear Fusion Rifles. Bonus progress for defeating Guardians. Defeat combatants in Heist Battlegrounds with precision final blows.",
                category: ['Loadout', 'PvP', 'Heist Battlegrounds'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: true,
                        task: "Bow or Linear Fusion Rifle final blows",
                        progress: 0,
                        goal: 100,
                        completed: false
                    },
                    {
                        isPercent: false,
                        task: "Precision Final Blows in Heist Battlegrounds",
                        progress: 0,
                        goal: 50,
                        completed: false
                    }
                ],
                reward: null,
                xp: "Challenger XP+",
                dust: null
            },
            // 05
            {
                belongsTo: Number,
                name: "Moon Activities",
                description: "On the Moon, earn progress by completing bounties, patrols, public events, and Lost Sectors.",
                category: ['Moon'],
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
            // 06
            {
                belongsTo: Number,
                name: "Taking All Challenges",
                description: "Complete weekly playlist challenges.",
                category: ['Vanguard', 'PvP', 'Gambit'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Challenges",
                        progress: 0,
                        goal: 3,
                        completed: false
                    }
                ],
                reward: null,
                xp: "Challenger XP+",
                dust: "Bright Dust"
            },
            // 07
            {
                belongsTo: Number,
                name: "Long-Range Calibration",
                description: "Calibrate long-range weapons — Pulse Rifles, Bows, Trace Rifles — on the Moon. Bonus progress in Lost Sectors.",
                category: ['Moon'],
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
            // 08
            {
                belongsTo: Number,
                name: "Dredgin' Up Victory",
                description: "Complete Gambit matches. Earn bonus progress for wins.",
                category: ['Gambit'],
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
            // 09
            {
                belongsTo: Number,
                name: "Spark Defender",
                description: "Score points in Rift. Bonus progress is awarded for igniting the Rift.",
                category: ['PvP', 'Time'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Points",
                        progress: 0,
                        goal: 50,
                        completed: false
                    }
                ],
                reward: null,
                xp: "Challenger XP+",
                dust: "Bright Dust"
            },
            // 10
            {
                belongsTo: Number,
                name: "Hive Slayer",
                description: "Defeat Hive combatants in Vanguard playlists or strikes. Earn bonus progress for defeating tougher combatants.",
                category: ['Vanguard'],
                completed: false,
                challengeIndex: Number,
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
                dust: "Bright Dust"
            }
        ]
    },
    // Week Two
    {
        // 01
        name: 'Week Two',
        challenges: [
            {
                belongsTo: String,
                name: "More Than a Weapon II",
                description: "Complete Week 2 of More Than a Weapon.",
                category: ['More Than A Weapon'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "More Than a Weapon: Week 2 completed",
                        progress: 0,
                        goal: 1,
                        completed: false
                    }
                ],
                reward: "Exo Frame Module",
                xp: "Challenger XP",
                dust: null
            },
            // 02
            {
                belongsTo: String,
                name: "Heist Battlegrounds II",
                description: "In the Heist Battlegrounds playlist, complete heists and defeat Deathtongue Choristers.",
                category: ['Heist Battlegrounds'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Heist Battlegrounds",
                        progress: 0,
                        goal: 10,
                        completed: false
                    },
                    {
                        isPercent: false,
                        task: "Deathtongue Choristers",
                        progress: 0,
                        goal: 5,
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
                name: "Fire in the Void",
                description: "Defeat combatants with Void or Solar damage in Heist Battlegrounds.",
                category: ['Heist Battlegrounds'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: true,
                        task: "Void or Solar final blows",
                        progress: 0,
                        goal: 100,
                        completed: false
                    }
                ],
                reward: null,
                xp: "Challenger XP+",
                dust: null
            },
            // 4
            {
                belongsTo: String,
                name: "Umbral Focusing I",
                description: "Focus a Season of the Seraph engram at the Exo Frame in the HELM",
                category: ['Gear'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Engrams focused",
                        progress: 0,
                        goal: 1,
                        completed: false
                    }
                ],
                reward: null,
                xp: "Challenger XP",
                dust: null
            },
            // 05
            {
                belongsTo: String,
                name: "Cosmodrome Activities",
                description: "In the Cosmodrome, earn progress by completing bounties, patrols, public events, and Lost Sectors.",
                category: ['Cosmodrome'],
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
            // 05
            {
                belongsTo: String,
                name: "Lost in the Legend",
                description: "Complete a Lost Sector on Legend or higher.",
                category: ['Activities'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Lost Sectors",
                        progress: 0,
                        goal: 1,
                        completed: false
                    }
                ],
                reward: null,
                xp: "Challenger XP+",
                dust: "Bright Dust"
            },
            // 06
            {
                belongsTo: String,
                name: "Mid-Range Calibration",
                description: "Calibrate mid-range weapons—Hand Cannons, Glaives, Auto Rifles, Fusion Rifles, Machine Guns—in the Cosmodrome. Bonus progress for rapidly defeating combatants.",
                category: ['Cosmodrome'],
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
                name: "Bank, Kill, Repeat",
                description: "Earn points by banking Motes, defeating Blockers, and defeating Guardians in Gambit.",
                category: ['Gambit'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Points",
                        progress: 0,
                        goal: 250,
                        completed: false
                    }
                ],
                reward: null,
                xp: "Challenger XP+",
                dust: "Bright Dust"
            },
            // 08
            {
                belongsTo: String,
                name: "Freezing Void",
                description: "Defeat Guardians. Bonus progress is granted for opponents defeated with Void or Stasis effects.",
                category: ['PvP'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Guardians",
                        progress: 0,
                        goal: 80,
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
                name: "The Fallen Fall",
                description: "Defeat Fallen combatants in Vanguard playlists or strikes. Earn bonus progress for defeating tougher combatants.",
                category: ['Vanguard'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Fallen",
                        progress: 0,
                        goal: 200,
                        completed: false
                    }
                ],
                reward: null,
                xp: "Challenger XP+",
                dust: "Bright Dust"
            },
        ]
    },
    // Week Three
    {
        name: 'Week Three',
        challenges: [
            // 01 
            {
                belongsTo: Number,
                name: "More Than a Weapon III",
                description: "Complete Week 3 of More Than and defeat Hive and Fallen combatants anywhere in the system",
                category: ['More Than A Weapon'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "More than a Weapon: Week 3 completed",
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
                name: "Seraph's Shield I",
                description: "Complete the Exotic mission 'Operation: Seraph's Shield' to earn the Revision Zero Exotic Pulse Rifle. Defeat combatants anywhere in the system with Pulse Rifles",
                category: ['Activities', 'Loadout'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Operation: Seraph's Shield complete",
                        progress: 0,
                        goal: 1,
                        completed: false
                    },
                    {
                        isPercent: true,
                        task: "Combatants",
                        progress: 0,
                        goal: 100,
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
                name: "In the Cold Light of the Sun",
                description: "Defeat combatants with Solar or Stasis damage in Heist Battlegrounds",
                category: ['Heist Battlegrounds'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: true,
                        task: "Solar or Stasis final blows",
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
                name: "Rapid Loadout",
                description: "Defeat targets with Pulse Rifles or Trace Rifles. Bonus progress for defeating Guardians.Rapidly defeat combatants in Heist Battlegrounds",
                category: ['Heist Battlegrounds', 'PvP', 'Loadout'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: true,
                        task: "Pulse Rifle or Trace Rifle final blows",
                        progress: 0,
                        goal: 100,
                        completed: false
                    },
                    {
                        isPercent: false,
                        task: "Rapidly defeated",
                        progress: 0,
                        goal: 10,
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
                name: "Europa Activities",
                description: "On Europa, earn progress by completing bounties, patrols, public events, and Lost Sectors",
                category: ['Europa'],
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
            // 06
            {
                belongsTo: String,
                name: "Power Broker",
                description: "Reach Power Level 1580 by earning powerful rewards and Prime Engrams.",
                category: [],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Power Level",
                        progress: 0,
                        goal: 1580,
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
                name: "Close-Range Calibration",
                description: "Calibrate close-range weapons—Sidearms, Submachine Guns, Shotguns, Glaives, and Swords—on Europa. Bonus progress for rapidly defeating combatants.",
                category: ['Loadout'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Calibration",
                        progress: 0,
                        goal: 200,
                        completed: false
                    }
                ],
                reward: null,
                xp: "Challenger XP+",
                dust: "Bright Dust"
            },
            // 08
            {
                belongsTo: String,
                name: "Primeval Entourage",
                description: "Defeat Taken in Gambit. Earn bonus progress for defeating tougher combatants.",
                category: ['Gambit'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Taken",
                        progress: 0,
                        goal: 100,
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
                name: "Scorched Earth",
                description: "Defeat Guardians in Team Scorched. Charged detonations in midair or on surfaces earn bonus progress.",
                category: ['PvP', 'Time'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Guardians",
                        progress: 0,
                        goal: 40,
                        completed: false
                    }
                ],
                reward: null,
                xp: "Challenger XP+",
                dust: "Bright Dust"
            },
            // 10
            {
                belongsTo: String,
                name: "Ultimate Champion",
                description: "Defeat Champions in any Nightfall strike on Hero difficulty or higher. Earn bonus progress at higher difficulty tiers.",
                category: ['Vanguard'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Champions",
                        progress: 0,
                        goal: 60,
                        completed: false
                    }
                ],
                reward: null,
                xp: "Challenger XP+",
                dust: "Bright Dust"
            },
        ]
    },
    // Week Four
    {
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
    },
    // Week Five
    {
        name: 'Week Five',
        challenges: [
            // 01 
            {
                belongsTo: Number,
                name: "More Than a Weapon V",
                description: "Complete Week 5 of More Than a Weapon. Defeat Hive and Taken anywhere in the system",
                category: ['More Than A Weapon'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "More than a Weapon: Week 5 completed",
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
                name: "Heist Battlegrounds IV",
                description: "In the Heist Battlegrounds playlist, complete heists and defeat Champions.",
                category: ['Heist Battlegrounds'],
                completed: false,
                challengeIndex: Number,
                objectives: [
                    {
                        isPercent: false,
                        task: "Heist Battlegrounds",
                        progress: 0,
                        goal: 25,
                        completed: false
                    },
                    {
                        isPercent: false,
                        task: "Champions",
                        progress: 0,
                        goal: 5,
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
              name: "Quick Heists",
              description: "Complete a Heist Battleground in under 12 minutes.",
              category: ['Heist Battlegrounds'],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "Incomplete",
                  progress: 0,
                  goal: 1,
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
                name: "Umbral Focusing II",
                description: "Focus a Season of the Seraph engram at the Exo Frame in the HELM",
                category: ['Gear'],
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
            // 05
            {
              belongsTo: String,
              name: "Timeless Iteration",
              description: "Acquire Veles-X.",
              category: ['Gear'],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "Acquired",
                  progress: 0,
                  goal: 1,
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
              name: "Iron Sharpens Iron",
              description: "Complete Iron Banner matches. Earn bonus progress for wins.",
              category: ['PvP', 'Time'],
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
            // 07
            {
              belongsTo: String,
              name: "Fell and Fallen",
              description: "Defeat Fallen and Hive bosses in strikes or Vanguard playlists.",
              category: ['Vanguard'],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "Hive boss defeated",
                  progress: 0,
                  goal: 5,
                  completed: false
                },
                {
                  isPercent: false,
                  task: "Fallen boss defeated",
                  progress: 0,
                  goal: 5,
                  completed: false
                }
              ],
              reward: null,
              xp: "Challenger XP++",
              dust: "Bright Dust"
            },
          ]
    },
    // Week Six
    {
        name: 'Week Six',
        challenges: [
            //
            {
              belongsTo: String,
              name: "More Than a Weapon VI",
              description: "Complete Week 6 of More Than a Weapon. Defeat powerful Hive and Fallen combatants anywhere in the system. Bonus progress for defeating them in Heist Battlegrounds and the Exotic mission Operation: Seraph's Shield.",
              category: ["More Than a Weapon", "Heist Battlegrounds", "Operation: Seraph's Shield"],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "More Than a Weapon: Week 6 completed",
                  progress: 0,
                  goal: 1,
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
              reward: "Exo Frame Module",
              xp: "Challenger XP++",
              dust: null
            },
            //
            {
              belongsTo: String,
              name: "Heist Battlegrounds V",
              description: "In the Heist Battlegrounds playlist or Legend Heist Battlegrounds, open Seraph Chests and defeat Deathtongue Choristers before they can channel Xivu Arath's battlesong.",
              category: ["Heist Battlegrounds"],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "Seraph Chests",
                  progress: 0,
                  goal: 30,
                  completed: false
                },
                {
                  isPercent: false,
                  task: "Deathtongue Choristers",
                  progress: 0,
                  goal: 5,
                  completed: false
                }
              ],
              reward: "Exo Frame Module",
              xp: "Challenger XP++",
              dust: null
            },
            //
            {
              belongsTo: String,
              name: "Seraph's Secrets",
              description: "Open hidden chests in the Exotic mission Operation: Seraph's Shield.",
              category: ["Operation: Seraph's Shield"],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "Hidden chests",
                  progress: 0,
                  goal: 2,
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
              name: "CQC Loadout",
              description: "Defeat targets with Glaives. Bonus progress for defeating Guardians. Defeat combatants in Heist Battlegrounds with melee final blows",
              category: ["Loadout", "Crucible", "Heist Battlegrounds"],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: true,
                  task: "Glaive final blows",
                  progress: 0,
                  goal: 100,
                  completed: false
                },
                {
                  isPercent: false,
                  task: "Melee Final Blows",
                  progress: 0,
                  goal: 50,
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
              name: "Apex Armorer",
              description: "Masterwork a piece of armor.",
              category: ["Gear"],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "Armor upgraded",
                  progress: 0,
                  goal: 1,
                  completed: false
                }
              ],
              reward: null,
              xp: "Challenger XP+",
              dust: "Bright Dust"
            },
            //
            {
              belongsTo: String,
              name: "Absolutely Stunning",
              description: "Stun Champions.",
              category: ["Activities"],
              completed: false,
              challengeIndex: Number,
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
            //
            {
              belongsTo: String,
              name: "Crucible Ornament",
              description: "Acquire the Crucible ornament for Veles-X.",
              category: ["Crucible"],
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
          ]
    },
    // Week Seven
    {
        name: 'Week Seven',
        challenges: [
            // 01
            {
              belongsTo: String,
              name: "More Than a Weapon VII",
              description: "Complete Week 7 of More Than a Weapon. Defeat Hive and Fallen bosses anywhere in the system. Bonus progress for defeating them in Heist Battlegrounds and the Exotic mission Operation: Seraph's Shield.",
              category: ["More Than a Weapon", "Heist Battlegrounds", "Operation: Seraph's Shield"],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "More Than a Weapon: Week 7 completed",
                  progress: 0,
                  goal: 1,
                  completed: false
                },
                {
                  isPercent: false,
                  task: "Bosses",
                  progress: 0,
                  goal: 5,
                  completed: false
                }
              ],
              reward: "Exo Frame Module",
              xp: "Challenger XP++",
              dust: null
            },
            // 02
            {
              belongsTo: String,
              name: "Heist Battlegrounds VI",
              description: "In the Heist Battlegrounds playlist, complete heists and defeat combatants with Season of the Seraph or IKELOS weapons.",
              category: ["Heist Battlegrounds"],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "Heist Battlegrounds",
                  progress: 0,
                  goal: 35,
                  completed: false
                },
                {
                  isPercent: true,
                  task: "Combatants",
                  progress: 0,
                  goal: 100,
                  completed: false
                }
              ],
              reward: "Exo Frame Module",
              xp: "Challenger XP++",
              dust: null
            },
            // 03
            {
              belongsTo: String,
              name: "Legendary Heists",
              description: "Complete a Heist Battleground on Legend difficulty.",
              category: ["Heist Battlegrounds"],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "Completed",
                  progress: 0,
                  goal: 1,
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
              name: "Seasonal Shaping II",
              description: "Earn levels with Shaped Seasonal or IKELOS v1.0.3 weapons.",
              category: ["Loadout"],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "Weapon levels",
                  progress: 0,
                  goal: 10,
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
              name: "Down to Size",
              description: "Defeat targets with Trace Rifles, Glaives, and Linear Fusion Rifles in Gambit. Bonus progress for defeating invading Guardians.",
              category: ["Gambit"],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: true,
                  task: "Trace Rifle",
                  progress: 0,
                  goal: 100,
                  completed: false
                },
                {
                  isPercent: true,
                  task: "Glaive",
                  progress: 0,
                  goal: 100,
                  completed: false
                },
                {
                  isPercent: true,
                  task: "Linear Fusion Rifle",
                  progress: 0,
                  goal: 100,
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
              name: "Fleeting Glory",
              description: "Complete Crucible matches in the Competitive playlist. Earn bonus progress for wins.",
              category: ["PvP"],
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
              xp: "Challenger XP+++",
              dust: "Bright Dust"
            },
            // 07
            {
              belongsTo: String,
              name: "Grandmaster",
              description: "Complete any Nightfall strike on Grandmaster.",
              category: ["Vanguard"],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "Nightfall",
                  progress: 0,
                  goal: 1,
                  completed: false
                }
              ],
              reward: null,
              xp: "Challenger XP+++",
              dust: "Bright Dust"
            }
          ]
    },
]

export default seasonalChallenges;


