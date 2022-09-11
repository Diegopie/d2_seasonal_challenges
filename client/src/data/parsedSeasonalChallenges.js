import seasonalChallenges from "./seasonalChallenges";

const getLocal = (week, challengeIndex, isChallengeComplete, objectiveIndex, isObjectiveComplete) => {
    // * Find Correct Week
    const dashedWeek = week.replaceAll(' ', '-');
    const getLocal = localStorage.getItem(dashedWeek);
    const parseLocal = JSON.parse(getLocal)
    if (isChallengeComplete) {
        //  ** Find Correct Challenge
        return parseLocal[challengeIndex].completed
    }
    if (isObjectiveComplete) {
        return parseLocal[challengeIndex].objectives[objectiveIndex].completed
    }
    return parseLocal[challengeIndex].objectives[objectiveIndex].progress
}

const localSeasonalChallenges = seasonalChallenges.map((week) => {
    const weekName = week.name.replaceAll(' ', '-');
    // Need to add logic to also update local if a new challenge is added to the week array
    if (localStorage.getItem(weekName) === null) {
        localStorage.setItem(weekName, JSON.stringify(week.challenges));
    }
    week.challenges.map((challenge ,challengeIndex) => {
        challenge.objectives.map((objective, objectiveIndex) => {
            objective.completed = getLocal(weekName, challengeIndex, false, objectiveIndex, true)
            objective.progress = getLocal(weekName, challengeIndex, false, objectiveIndex, false)
            return objective
        })
        challenge.completed = getLocal(weekName, challengeIndex, true)
        return challenge
    })
    return week;
});

// console.log('-- localSeasonalChallenges -- ');
// console.log(localSeasonalChallenges);

export default localSeasonalChallenges;