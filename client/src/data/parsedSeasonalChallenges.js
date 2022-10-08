import seasonalChallenges from "./seasonalChallenges";

const getLocal = (week, challengeIndex, isChallengeComplete, objectiveIndex, isObjectiveComplete) => {
    // * Find Correct Week and Parse Data
    const dashedWeek = week.replaceAll(' ', '-');
    const getLocal = localStorage.getItem(dashedWeek);
    const parseLocal = JSON.parse(getLocal);

    if (isChallengeComplete) {
        //  ** Find Correct Challenge
        return parseLocal[challengeIndex].completed;
    }
    if (isObjectiveComplete) {
        return parseLocal[challengeIndex].objectives[objectiveIndex].completed;
    }
    return parseLocal[challengeIndex].objectives[objectiveIndex].progress;
}

const localSeasonalChallenges = seasonalChallenges.map((week) => {
    // * Set weekName to be JSON and LocalStorage Friendly
    const weekName = week.name.replaceAll(' ', '-');
    // * If a Given Week is Not In Local Storage, Save to LocalStorage
    if (localStorage.getItem(weekName) === null) {
        localStorage.setItem(weekName, JSON.stringify(week.challenges));
    }
    // * If a Challenges are Added to As Week, add Them To LocalStorage without Deleting User Data
    const localData = JSON.parse(localStorage.getItem(weekName))
    const serverData = week.challenges;
    // ** Checks if Server has new data by comparing the it's length to LocalStorage
    if (serverData.length > localData.length) {
        // *** Start Loop with the length of LocalStorage, since we would already have those indexes saved with user data and we do not want to overwrite them with default values
        //  // Loop through the length of the server data and push any new data at index [i]
        for (let i = localData.length; i < serverData.length; i++) {
            localData.push(serverData[i]);
        }
        // *** Save Updated Data to Local Storage
        localStorage.setItem(weekName, JSON.stringify(localData));
    }
    
    // TODO: Create and Store the value for BelongsTo and challengeIndex Programmatically 
    // * For a Given Week, map() Through Each Challenge and Sync Data In Local Storage
    week.challenges.map((challenge ,challengeIndex) => {
        // ** For a Given Challenge, map() Through Each Objective and Sync Data in Local Storage
        challenge.objectives.map((objective, objectiveIndex) => {
            // *** Use getLocal to Sync Data
            objective.completed = getLocal(weekName, challengeIndex, false, objectiveIndex, true)
            objective.progress = getLocal(weekName, challengeIndex, false, objectiveIndex, false)
            // *** Return Updated Data
            return objective;
        })
        // *** Use getLocal to Sync Data
        challenge.completed = getLocal(weekName, challengeIndex, true);
        // *** Return Updated Data
        return challenge;
    })
    // *** Return Updated Data
    return week;
});

// console.log('-- localSeasonalChallenges -- ');
// console.log(localSeasonalChallenges);

export default localSeasonalChallenges;