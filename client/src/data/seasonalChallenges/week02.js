const week02 =  {
    name: 'Week Two',
    challenges: [
        // 01
        {
          belongsTo: String,
          name: "Against the Shadows",
          description: "Complete Week 2 of the We Stand Unbroken quest",
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
        // 02
        {
          belongsTo: String,
          name: "Favored Liberator",
          description: "Generate Favors in Seasonal activities. All members of your current fireteam contribute to overall progress",
          category: ["Defiant Battleground"],
          completed: false,
          challengeIndex: Number,
          objectives: [
            {
              isPercent: false,
              task: "Favors generated",
              progress: 0,
              goal: 30,
              completed: false
            }
          ],
          reward: 'War Table Upgrade',
          xp: "Challenger XP",
          dust: null
        },
        // 03
        {
          belongsTo: String,
          name: "Rohan's Legacy",
          description: "Complete the quest Unfinished Business. Also, defeat combatants throughout Neomuna with precision final blows. Bonus progress awarded for using Machine Guns",
          category: ['Neomuna'],
          completed: false,
          challengeIndex: Number,
          objectives: [
            {
              isPercent: false,
              task: "Unfinished Business",
              progress: 0,
              goal: 1,
              completed: false
            },
            {
              isPercent: false,
              task: "[Headshot] Precision",
              progress: 0,
              goal: 50,
              completed: false
            }
          ],
          reward: null,
          xp: "Challenger XP++",
          dust: null
        },
        // 04
        {
          belongsTo: String,
          name: "The Full Set",
          description: "In Neomuna, collect and place four action figures.",
          category: ['Neomuna'],
          completed: false,
          challengeIndex: Number,
          objectives: [
            {
              isPercent: false,
              task: "Progress",
              progress: 0,
              goal: 4,
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
        // 06
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
        // 07
        {
          belongsTo: String,
          name: "Flourish of Power",
          description: "Defeat Guardians in the Mayhem playlist with Super abilities.",
          category: ['PvP', 'Time'],
          completed: false,
          challengeIndex: Number,
          objectives: [
            {
              isPercent: false,
              task: "Guardians",
              progress: 0,
              goal: 25,
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
          name: "Bank, Kill, Repeat",
          description: "Earn points by banking Motes, defeating Blockers, and defeating Guardians in Gambit.",
          category: ['Gambit'],
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
        },
        // 10
        {
          belongsTo: String,
          name: "Close-Range Calibration",
          description: "Calibrate close-range weapons—Sidearms, Submachine Guns, Shotguns, Glaives, and Swords—in the Cosmodrome. Bonus progress for rapidly defeating combatants.",
          category: ['Cosmodrome'],
          completed: false,
          challengeIndex: Number,
          objectives: [
            {
              isPercent: false,
              task: "Calibration",
              progress: 0,
              goal: "0/200",
              completed: false
            }
          ],
          reward: null,
          xp: "Challenger XP+",
          dust: "Bright Dust"
        }
      ]
};

export default week02;
