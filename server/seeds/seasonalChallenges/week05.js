const challenges = [
  {
    belongsTo: "",
    name: "Acolyte's Ascent V",
    description: "Complete Week 5 of The Bladed Path quest.",
    category: [],
    completed: false,
    challengeIndex: "",
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
    xp: "Challenger XP",
    dust: null
  },
  {
    belongsTo: "",
    name: "Master Magus",
    description: "Complete combat encounters in the Altars of Summoning. More difficult encounters grant bonus progress.",
    category: ["Altars of Summoning"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Encounters completed",
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
    belongsTo: "",
    name: "Runic Rifles",
    description: "Defeat targets with Scout Rifles or Sniper Rifles. Earn bonus progress by defeating Guardians or by defeating combatants in Season of the Witch activities.",
    category: ["Loadout", "Savathûn's Spire", "Altars of Summoning", "PvP", "Gambit"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Scout Rifle or Sniper Rifle Final blows",
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
    belongsTo: "",
    name: "Mist and Mysteries",
    description: "Solve the Cunning Test in the Imbaru Engine and identify Minor Arcana.",
    category: [],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Cunning conjured",
        progress: 0,
        goal: 1,
        completed: false
      },
      {
        isPercent: false,
        task: "Minor Arcana identified",
        progress: 0,
        goal: 15,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP+",
    dust: null
  },
  {
    belongsTo: "",
    name: "Cursed by Success",
    description: "Acquire the Hand Cannon, Malediction.",
    category: ["Gear"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Hand Cannon Hand Cannon",
        progress: 0,
        goal: 1,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Fleeting Glory",
    description: "Complete Crucible matches in the Competitive playlist. Earn bonus progress for wins.",
    category: ["PvP"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: false,
        task: "Progress",
        progress: 0,
        goal: 8,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Special Forces",
    description: "Defeat combatants with weapons that use Special ammunition.",
    category: ["Loadout"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Special ammo weapon",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: "Bright Dust"
  },
  {
    belongsTo: "",
    name: "Higher Caliber",
    description: "Defeat Guardians in Crucible or Gambit with Submachine Guns, Bows, Scout Rifles, Sniper Rifles, or Machine Guns. Earn bonus progress for Sniper Rifle or Machine Gun final blows.",
    category: ["PvP", "Gambit"],
    completed: false,
    challengeIndex: "",
    objectives: [
      {
        isPercent: true,
        task: "Weapon",
        progress: 0,
        goal: 100,
        completed: false
      }
    ],
    reward: null,
    xp: "Challenger XP++",
    dust: "Bright Dust"
  }
]

const weekName = 'Week Five'

const week05 = {
  name: weekName,
  challenges: challenges.map((challenge, challengeIndex) => {
    challenge.belongsTo = weekName.replaceAll(' ', '-');
    challenge.challengeIndex = challengeIndex;
    return challenge;
  })
};

module.exports = week05;
