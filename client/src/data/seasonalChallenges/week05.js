const week05 = {
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
};

export default week05;