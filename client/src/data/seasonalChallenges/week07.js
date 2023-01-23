const week07 = {
    name: 'Week Seven',
    challenges: [
        // 01
        {
          belongsTo: String,
          name: "More Than a Weapon VII",
          description: "Complete Week 7 of More Than a Weapon. Defeat Hive and Fallen bosses anywhere in the system. Bonus progress for defeating them in Heist Battlegrounds and the Exotic mission Operation: Seraph's Shield.",
          category: ["More Than A Weapon", "Heist Battlegrounds", "Operation: Seraph's Shield"],
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
};

export default week07;
