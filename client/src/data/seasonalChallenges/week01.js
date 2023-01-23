const week01 = {
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
    };

export default week01;
