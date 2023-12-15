const challenges = [
  {
    belongsTo: "",
    name: "Wishful Armor Focusing",
    description: "Obtain a full set of Season of the Wish armor to unlock the following seasonal bonus: Wish engrams can be focused into individual pieces of high-stat Season of the Wish armor.",
    category: ['Gear'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Wyrmguard head",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: false,
        task: "Wyrmguard arms",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: false,
        task: "Wyrmguard chest",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: false,
        task: "Wyrmguard legs",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: false,
        task: "Wyrmguard Class Item",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: "",
    name: "Wishful Weapon Focusing",
    description: "Obtain any 6 Season of the Wish or reprised Undying weapons to unlock the following seasonal bonus: Wish engrams can be focused into individual Season of the Wish or reprised Undying weapons. Weapons must first be obtained to be focused.",
    category: ['Gear'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Seasonal or reprise weapons",
        progress: 0,
        goal: 6,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: "",
    name: "Wishcrafting",
    description: "Successfully clear pathways in the Riven's Lair playlist or within The Coil to unlock the following seasonal bonus: Your first Wish Weapon engram focused with Spirit Riven in the HELM each week is guaranteed to contain a weapon with a Deepsight Reso ...",
    category: ["Riven's Lair/The Coil"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Pathways cleared",
        progress: 0,
        goal: 8,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: "",
    name: "Solcrafting",
    description: "Defeat Vex with reprised Undying weapons to unlock the following Seasonal bonus: Your first Undying Weapon engram focused with the Spirit of Riven in the H.E.L.M. each week is guaranteed to contain a weapon with a Deepsight Resonance that you do not ...",
    category: ['Loadout'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Vex",
        progress: 0,
        goal: 150,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: "",
    name: "Wishful Generosity",
    description: "Reach Rank 10 with the Spirit of Riven in the H.E.L.M. to unlock the following Seasonal bonus: Completing activities grants an additional Wish Engram anytime one is rewarded.",
    category: ['Activities'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Ranks earned",
        progress: 0,
        goal: 10,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: "",
    name: "Wishful Keys",
    description: "Redeem Lair Keys when opening Lair Chests in Riven's Lair or The Coil to unlock the following Seasonal bonus: When you redeem a Lair Key in Riven's Lair activities, you have a chance to earn an additional Wish Engram.",
    category: ["Riven's Lair/The Coil"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Lair Keys redeemed",
        progress: 0,
        goal: 8,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: "",
    name: "Keycrafting",
    description: "Complete The Coil activity with a Silver or higher score to unlock the following Seasonal bonus: The first time you redeem a Lair Key in Riven's Lair or The Coil each week, you will receive a Season of the Wish weapon with a Deepsight Resonance that ...",
    category: ["Riven's Lair/The Coil"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "The Coil complete",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: "",
    name: "Well Wishes",
    description: "Complete the Blind Well event in the Dreaming City after triggering its Heroic encounter to unlock the following Seasonal bonus: The first successful completion of the Blind Well on Tier 3 or higher each week grants a Wish Engram and either a piece ...",
    category: ['Activities'],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Heroic Blind Well",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: "",
    name: "Your Wishes, My Commands",
    description: "Purchase Tier 2 or higher Dragon's Gifts (Tier 3 Dragon's Gifts provide the most progress) in The Coil to unlock the following Seasonal bonus: Additional Tier 2 and Tier 3 Dragon's Gifts are now available in The Coil. Tier 2 and Tier 3 now contain a ...",
    category: ["Riven's Lair/The Coil"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Dragon's Gifts purchased",
        progress: 0,
        goal: 10,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP",
    dust: null
  }
];

const weekName = 'Season of the Wish Upgrades'

const deepUpgrades = {
        name: weekName,
        challenges: challenges.map((challenge, challengeIndex) => {
          challenge.belongsTo = weekName.replaceAll(' ', '-');
          challenge.challengeIndex = challengeIndex;
          return challenge;
        })
    };

module.exports = deepUpgrades;
