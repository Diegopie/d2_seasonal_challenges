const seasonalChallenges = [
    // Week One

    {
        name: 'Week One',
        challenges: [
            {
                belongsTo: 'Week-One',
                name: 'Successful Expedition',
                description: 'Obtain Plundered Umbral Energy from bonus chests in Expedition',
                category: ['Expedition'],
                completed: false,
                challengeIndex: 0,
                objectives: [
                    {
                        isPercent: false,
                        task: "Treasure Chest Unlocked",
                        progress: 0,
                        goal: 50,
                        completed: false,
                    },
                    {
                        isPercent: false,
                        task: "Plundered Umbral Energy",
                        progress: 0,
                        goal: 3,
                        completed: false,
                    },
                ],
                reward: 'Repute',
                xp: 'XP',
                dust: null
            },

            {
                belongsTo: 'Week-One',
                name: 'Antiquarian I',
                description: 'Return the first relic to the HELM. Defeat combatants on Europa. Defeating combatants with a Fusion Rifle will award bonus progress',
                category: ['Europa'],
                completed: false,
                challengeIndex: 1,
                objectives: [
                    {
                        isPercent: false,
                        task: "Relic Placed",
                        progress: 0,
                        goal: 1,
                        completed: false,
                    },
                    {
                        isPercent: false,
                        task: "Combatants Defeated",
                        progress: 0,
                        goal: 200,
                        completed: false,
                    },
                ],
                reward: 'Repute',
                xp: 'XP',
                dust: null
            },
            {
                belongsTo: 'Week-One',
                name: 'Fire Discipline',
                description: 'Complete Ketchcrash activities and activate cannons aboard the deck of your Ketch',
                category: ['Ketchcrash'],
                completed: false,
                challengeIndex: 2,
                objectives: [
                    {
                        isPercent: false,
                        task: "Ketchcrash activities completed",
                        progress: 0,
                        goal: 3,
                        completed: false,
                    },
                    {
                        isPercent: false,
                        task: "Cannons activated",
                        progress: 0,
                        goal: 5,
                        completed: false,
                    },
                ],
                reward: null,
                xp: 'XP',
                dust: null
            },
            {
                belongsTo: 'Week-One',
                name: 'Shaper I',
                description: 'Shape three unique Seasonal weapons',
                category: ['Gear'],
                completed: false,
                challengeIndex: 3,
                objectives: [
                    {
                        isPercent: false,
                        task: "Weapons Shaped",
                        progress: 0,
                        goal: 3,
                        completed: false,
                    }
                ],
                reward: null,
                xp: 'XP',
                dust: null
            },
        ]
        },
        // Week Two
        {
            name: 'Week Two',
            challenges: [
                {
                    belongsTo: 'Week-Two',
                    name: 'Antiquarian II',
                    description: 'Return the second relic to the H.E.L.M. Also, defeat Fallen. Defeating them with precision final blows will award bonus progress',
                    category: ['Expedition'],
                    completed: false,
                    challengeIndex: 0,
                    objectives: [
                        {
                            isPercent: false,
                            task: "Relic Placed",
                            progress: 0,
                            goal: 2,
                            completed: false,
                        },
                        {
                            isPercent: false,
                            task: "Fallen Killed",
                            progress: 0,
                            goal: 250,
                            completed: false,
                        },
                    ],
                    reward: 'Repute',
                    xp: 'XP',
                    dust: null
                },
                {
                    belongsTo: 'Week-Two',
                    name: 'Expert Expedition I',
                    description: 'Complete Expeditions and gather treasure in the treasure haul',
                    category: ['Expedition'],
                    completed: false,
                    challengeIndex: 1,
                    objectives: [
                        {
                            isPercent: false,
                            task: "Expeditions Completed",
                            progress: 0,
                            goal: 3,
                            completed: false,
                        },
                        {
                            isPercent: false,
                            task: "Treasure Gathered",
                            progress: 0,
                            goal: 25,
                            completed: false,
                        },
                    ],
                    reward: 'Repute',
                    xp: 'XP',
                    dust: null
                },
                {
                    belongsTo: 'Week-Two',
                    name: "Seeker's Cache I",
                    description: 'Complete bounties from the Star Chart or on Nessus, Cosmodrome, or Europa. Also, decipher the Small Treasure Beacon, available from the Star Chart in the H.E.L.M.',
                    category: ['Activities'],
                    completed: false,
                    challengeIndex: 2,
                    objectives: [
                        {
                            isPercent: false,
                            task: 'Bounties',
                            progress: 0,
                            goal: 15,
                            completed: false,
                        },
                        {
                            isPercent: false,
                            task: 'Small Treasure Beacon',
                            progress: 0,
                            goal: 1,
                            completed: false,
                        },
                    ],
                    reward: null,
                    xp: 'XP',
                    dust: null
                },
                {
                    belongsTo: 'Week-Two',
                    name: 'Fusillade',
                    description: 'Defeat targets with Submachine Guns. Defeating combatants in Ketchcrash and defeating Guardians will award bonus progress',
                    category: ['Ketchcrash', 'Crucible'],
                    completed: false,
                    challengeIndex: 3,
                    objectives: [
                        {
                            isPercent: false,
                            task: "Submachine Gun kills",
                            progress: 0,
                            goal: 200,
                            completed: false,
                        }
                    ],
                    reward: null,
                    xp: 'XP',
                    dust: null
                },
            ]
    },
]

export default seasonalChallenges;


