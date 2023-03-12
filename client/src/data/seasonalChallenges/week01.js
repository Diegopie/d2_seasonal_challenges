const week01 = {
        name: 'Week One',
        challenges: [
            // 01
            {
              belongsTo: String,
              name: "Righteous Defiance",
              description: "Complete Defiant Battleground: EDZ.",
              category: ['Defiant Battleground'],
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
              reward: 'War Table Upgrade',
              xp: "Challenger XP",
              dust: null
            },
            // 02
            {
              belongsTo: String,
              name: "Awaken, Queensguard",
              description: "Complete Week 1 of the We Stand Unbroken quest",
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
              reward: 'War Table Upgrade',
              xp: "Challenger XP+",
              dust: null
            },
            // 03
            {
              belongsTo: String,
              name: "Legion's Bounty",
              description: "Spend a Defiant Key to earn bonus rewards at the end of a Defiant Battlegrounds playlist activity. Defiant Keys can be earned by completing Lightfall campaign missions, Terminal Overload in Neomuna, raids, Vanguard Ops playlist activities, Gambit..",
              category: ['Defiant Battleground'],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "Defiant Key",
                  progress: 0,
                  goal: 1,
                  completed: false
                },
                {
                  isPercent: false,
                  task: "Bonus rewards received",
                  progress: 0,
                  goal: 1,
                  completed: false
                }
              ],
              reward: 'War Table Upgrade',
              xp: "Challenger XP",
              dust: null
            },
            // 04
            {
              belongsTo: String,
              name: "Silver Lining",
              description: "Reach Rank 12 with Nimbus in Neomuna.",
              category: ['Neomuna'],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "Neomuna Rank",
                  progress: 0,
                  goal: 12,
                  completed: false
                }
              ],
              reward: null,
              xp: "Challenger XP++",
              dust: null
            },
            // 05
            {
              belongsTo: String,
              name: "Keycard-Operated",
              description: "Use keys to unlock Terminal Overload Key Chests in Neomuna. After completing the quest Stargazer, Terminal Overload Keys can be earned in Neomuna by completing public events, looting chests, and completing patrols",
              category: ['Neomuna'],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: false,
                  task: "Chests",
                  progress: 0,
                  goal: 2,
                  completed: false
                }
              ],
              reward: null,
              xp: "Challenger XP+",
              dust: null
            },
            // 06
            {
              belongsTo: String,
              name: "Neptune Activities",
              description: "In Neomuna, complete bounties, patrols, public events, and Lost Sectors.",
              category: ['Neomuna'],
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
            // 07
            {
              belongsTo: String,
              name: "Taking All Challenges",
              description: "Complete weekly playlist challenges.",
              category: [],
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
            // 08
            {
              belongsTo: String,
              name: "Spark Defender",
              description: "Score points in Rift. Bonus progress is awarded for igniting the Rift.",
              category: ['PvP', 'Time'],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: true,
                  task: "Points",
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
              name: "Anti-Cabal Sweep",
              description: "Defeat Cabal combatants in Vanguard playlists or strikes. Earn bonus progress for defeating tougher combatants.",
              category: ['Vanguard'],
              completed: false,
              challengeIndex: Number,
              objectives: [
                {
                  isPercent: true,
                  task: "Cabal",
                  progress: 0,
                  goal: 100,
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
              name: "Deadly Horizons",
              description: "Calibrate long-range weapons -- Pulse Rifles, Bows, and Trace Rifles -- in Neomuna. Bonus progress awarded in Lost Sectors.",
              category: ['Neomuna'],
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

export default week01;
