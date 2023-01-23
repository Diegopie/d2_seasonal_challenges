const week06 =  {
    name: 'Week Six',
    challenges: [
        // 01
        {
          belongsTo: String,
          name: "More Than a Weapon VI",
          description: "Complete Week 6 of More Than a Weapon. Defeat powerful Hive and Fallen combatants anywhere in the system. Bonus progress for defeating them in Heist Battlegrounds and the Exotic mission Operation: Seraph's Shield.",
          category: ["More Than A Weapon", "Heist Battlegrounds", "Operation: Seraph's Shield"],
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
        // 02
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
        // 03
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
        // 04
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
        // 05
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
        // 06
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
        // 07
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
};

export default week06;
