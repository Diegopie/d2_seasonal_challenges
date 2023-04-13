const week10 = {
  name: "Week Ten",
  challenges: [
    {
      belongsTo: String,
      name: "Seraph's Shield IV",
      description: "Locate all Warmind nodes and destroy all security drones in the Exotic mission Operation: Seraph's Shield",
      category: [],
      completed: false,
      challengeIndex: Number,
      objectives: [
        {
          isPercent: false,
          task: "Warmind nodes",
          progress: 0,
          goal: 4,
          completed: false
        },
        {
          isPercent: false,
          task: "Security drones",
          progress: 0,
          goal: 12,
          completed: false
        }
      ],
      reward: null,
      xp: "Challenger XP++",
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
          isPercent: false,
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
      name: "Vanguard Ornament",
      description: "Acquire the Vanguard ornament for Veles-X.",
      category: ['Vanguard'],
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

export default week10;