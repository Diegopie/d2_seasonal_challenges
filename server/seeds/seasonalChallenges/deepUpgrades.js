const challenges = [
  {
    belongsTo: String,
    name: "Deep Challenger",
    description: "Complete Week 1 of Into the Depths to unlock the following Seasonal bonus: Completing a Season of the Deep weekly activity challenge grants a chance to earn an additional Deep Engram when completing activities. Resets weekly",
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
    reward: "Deep Challenger",
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: String,
    name: "Deep Armor Focusing",
    description: "Obtain a full set of Season of the Deep armor to unlock the following Seasonal bonus: Deep Engrams can be focused into individual pieces of high-stat Season of the Deep armor.",
    category: ['Gear'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "NPA Weir-Walker Head",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: false,
        task: "NPA Weir-Walker Arms",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: false,
        task: "NPA Weir-Walker Chest",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: false,
        task: "NPA Weir-Walker Legs",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: false,
        task: "NPA Weir-Walker Class Item",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: "Deep Armor Focusing",
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: String,
    name: "Deep Weapon Focusing",
    description: "Obtain any 6 Season of the Deep or reprised Reckoning weapons to unlock the following Seasonal bonus: Deep Engrams can be focused into individual Season of the Deep or Reckoning weapons. The weapon must be acquired previously in order to focus it.",
    category: ['Gear'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Weapons",
        progress: 0,
        goal: 6,
        completed: false
      }
    ],
    reward: "Deep Weapon Focusing",
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: String,
    name: "Synchronized Swimming",
    description: "Reach Rank 7 with the Sonar Station in the H.E.L.M. to unlock the following Seasonal bonus: You and your fireteam gain bonus reputation when opening chests in Salvage or Deep Dive activities. The reputation granted increases for each fireteam member ...",
    category: [],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Sonar Station rank",
        progress: 0,
        goal: 6,
        completed: false
      }
    ],
    reward: "Synchronized Swimming",
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: String,
    name: "Deep Attraction",
    description: "Reach Rank 13 with the Sonar Station in the H.E.L.M. to unlock the following Seasonal bonus: Completing activities grants a chance to earn an additional Deep Engram.",
    category: [],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Sonar Station rank",
        progress: 0,
        goal: 12,
        completed: false
      }
    ],
    reward: "Deep Attraction",
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: String,
    name: "Efficient Angler",
    description: "Catch fish while a Fish Pond is at its maximum catch bonus to unlock the following Seasonal bonus: When fishing with Bait, you have a chance to have your Bait returned after catching a fish.",
    category: [],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Fish",
        progress: 0,
        goal: 25,
        completed: false
      }
    ],
    reward: "Efficient Angler",
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: String,
    name: "Forgotten Treasures",
    description: "As a fireteam, complete 3 jobs within a single Salvage activity to unlock the following Seasonal bonus: When you redeem a key in Salvage or Deep Dive activities, you have a chance to earn an additional Deep Engram.",
    category: ["Activities"],
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
    reward: "Forgotten Treasures",
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: String,
    name: "Deepsight Salvaging",
    description: "Defeat each unique boss in Salvage activities to unlock the following Seasonal bonus: Your first craftable weapon individually focused at the Sonar Station in the H.E.L.M. each week is guaranteed to have Deepsight Resonance.",
    category: ["Salvage"],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Azshradat, Celebrant of Xivu Arath",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: false,
        task: "Uorgotha, Scourge of the Deep",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: "Deepsight Salvaging",
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: String,
    name: "Deep Sea Locksmith",
    description: "Defeat each unique boss in Deep Dive activities to unlock the following Seasonal bonus: When you redeem a Salvage Key, you have a chance to earn a Deep Dive Key.",
    category: ['Deep Dive'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "J4W-S, Wrathborn Servitor defeated",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: false,
        task: "Kudazad, Bound to Xivu Arath defeated",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: false,
        task: "Kelgorath, Taken from Bones defeated",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: "Deep Sea Locksmith",
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: String,
    name: "Dive Station",
    description: "Successfully complete an encounter at the Abyss depth in a Deep Dive activity to unlock the following Seasonal bonus: An ammo crate containing Special and Heavy ammo is hidden at each depth in Deep Dive activities. Opening the crate also grants addi ...",
    category: ['Deep Dive'],
    completed: false,
    challengeIndex: Number,
    objectives: [
      {
        isPercent: false,
        task: "Abyss completed",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: "Dive Station",
    xp: "Challenger XP",
    dust: null
  }
]

const weekName = 'Season of the Deep Upgrades'

const deepUpgrades = {
        name: weekName,
        challenges: challenges.map((challenge, challengeIndex) => {
          challenge.belongsTo = weekName.replaceAll(' ', '-');
          challenge.challengeIndex = challengeIndex;
          return challenge;
        })
    };

module.exports = deepUpgrades;
