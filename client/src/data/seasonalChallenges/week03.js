const week03 =  {
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
            category: ['Europa'],
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
};

export default week03;
