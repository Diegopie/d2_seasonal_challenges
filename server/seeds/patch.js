const seedSeasonalChallenges = require("./seasonalChallenges");

const patchNumber = 21.4;

const patchedSeasonalChallenges = (data) => {
    const userData = data;

    const patch = seedSeasonalChallenges.map((week, index) => {
        // * Set weekName to be JSON and LocalStorage Friendly

        // * For a Given Week, map() Through Each Challenge, Programmatically Create Data, and Sync Data In Local Storage
        week.challenges.map((challenge, challengeIndex) => {
            challenge.completed = userData[index].challenges[challengeIndex].completed
            // ** For a Given Challenge, map() Through Each Objective and Sync Data in Local Storage
            challenge.objectives.map((objective, objectiveIndex) => {
                // *** Use getLocal to Sync Data
                objective.completed = userData[index].challenges[challengeIndex].objectives[objectiveIndex].completed
                objective.progress = userData[index].challenges[challengeIndex].objectives[objectiveIndex].progress
                // *** Return Updated Data
                return objective;
            })
            // *** Return Updated Data
            return challenge;
        })
        // *** Return Updated Data
        return week;
    });
    return patch;
}


// console.log('-- patchedSeasonalChallenges -- ');
// console.log(patchedSeasonalChallenges);

module.exports = { patchNumber, patchedSeasonalChallenges, };