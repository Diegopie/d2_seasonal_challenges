const week03 =  {
    name: 'Week Three',
    challenges: [
        {
          belongsTo: String,
          name: "The Longest Path",
          description: "Complete Week 3 of the We Stand Unbroken quest",
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
          reward: null,
          xp: "Challenger XP+",
          dust: null
        },
        {
          belongsTo: String,
          name: "Bane of the Shadow Legion",
          description: "Use abilities to defeat combatants in the Defiant Battlegrounds playlist. Defeating combatants with the Strand subclass will grant bonus progress.",
          category: ['Defiant Battlegrounds'],
          completed: false,
          challengeIndex: Number,
          objectives: [
            {
              isPercent: true,
              task: "Ability",
              progress: 0,
              goal: 100,
              completed: false
            }
          ],
          reward: null,
          xp: "Challenger XP",
          dust: null
        },
        {
          belongsTo: String,
          name: "Defiantly Defeated",
          description: "Defeat combatants with Season of Defiance weapons. These are Perpetualis, Prodigal Return, Regnant, Caretaker, Raconteur, and Royal Executioner. Bonus progress awarded for combatant defeated in Seasonal activities",
          category: ['Loadout', 'Defiant Battlegrounds'],
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
          xp: "Challenger XP+",
          dust: null
        },
        {
          belongsTo: String,
          name: "Uprooted Nightmare",
          description: "Complete each encounter in the Root of Nightmares raid",
          category: ['Activities'],
          completed: false,
          challengeIndex: Number,
          objectives: [
            {
              isPercent: false,
              task: "Cataclysm encounter completed",
              progress: 0,
              goal: 1,
              completed: false
            },
            {
              isPercent: false,
              task: "Scission encounter completed",
              progress: 0,
              goal: 1,
              completed: false
            },
            {
              isPercent: false,
              task: "Macrocosm encounter completed",
              progress: 0,
              goal: 1,
              completed: false
            },
            {
              isPercent: false,
              task: "Nezarec encounter completed",
              progress: 0,
              goal: 1,
              completed: false
            }
          ],
          reward: null,
          xp: "Challenger XP+++",
          dust: null
        },
        {
          belongsTo: String,
          name: "EDZ Activities",
          description: "In the EDZ, earn progress by completing bounties, patrols, public events, and Lost Sectors.",
          category: ['EDZ'],
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
        {
          belongsTo: String,
          name: "Commendation Appreciation",
          description: "Earn progress for giving commendations in Vanguard, Crucible, and Gambit activities.",
          category: ['PvP', 'Gambit', 'Vanguard'],
          completed: false,
          challengeIndex: Number,
          objectives: [
            {
              isPercent: false,
              task: "Progress",
              progress: 0,
              goal: 50,
              completed: false
            }
          ],
          reward: null,
          xp: "Challenger XP+",
          dust: "Bright Dust"
        },
        {
          belongsTo: String,
          name: "Iron Sharpens Iron",
          description: "Complete Iron Banner matches. Earn bonus progress for wins.",
          category: ['Time'],
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
        {
          belongsTo: String,
          name: "Primeval Entourage",
          description: "Defeat Taken in Gambit. Earn bonus progress for defeating tougher combatants.",
          category: ['Gambit'],
          completed: false,
          challengeIndex: Number,
          objectives: [
            {
              isPercent: true,
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
        {
          belongsTo: String,
          name: "Ultimate Champion",
          description: "Defeat Champions in any Nightfall strike on Hero difficulty or higher. Earn bonus progress at higher difficulty tiers.",
          category: ['Vanguard'],
          completed: false,
          challengeIndex: Number,
          objectives: [
            {
              isPercent: true,
              task: "Champions",
              progress: 0,
              goal: 100,
              completed: false
            }
          ],
          reward: null,
          xp: "Challenger XP+",
          dust: "Bright Dust"
        },
        {
          belongsTo: String,
          name: "Mid-Range Calibration",
          description: "Calibrate mid-range weapons—Hand Cannons, Auto Rifles, Glaives, Fusion Rifles, and Machine Guns—in the EDZ. Bonus progress for rapidly defeating combatants.",
          category: ['EDZ'],
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

export default week03;
