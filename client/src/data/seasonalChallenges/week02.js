const week02 =  {
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
};

export default week02;
