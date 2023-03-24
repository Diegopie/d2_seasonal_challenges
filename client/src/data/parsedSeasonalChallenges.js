import { getServerData } from "../api/server-data";

// Check for seasonal progress wipe at the start of the season
if (localStorage.getItem('StartSeason20') === null) {
    localStorage.clear();
    localStorage.setItem('StartSeason20', true);
}

// console.log(getServerData('ass').then(data => {return data}));

const localSeasonalChallenges = () => {

    return getServerData('ass')
    .then(data => {
        // console.log(data);
        // console.log(parseData(data.data.seasonalChallenges20));
        return parseData(data.data.seasonalChallenges20)
    })
}

// * Return Challenge Complete, Objective Complete, or Progress base off which Booleans are passed to the function
const getLocal = (week, challengeIndex, isChallengeComplete, objectiveIndex, isObjectiveComplete) => {
    // * Find Correct Week and Parse Data
    const getLocal = localStorage.getItem(week);
    const parseLocal = JSON.parse(getLocal);
    // console.log(parseLocal);

    if (isChallengeComplete) {
        //  ** Find Correct Challenge
        return parseLocal[challengeIndex].completed;
    }
    if (isObjectiveComplete) {
        // console.log(parseLocal[challengeIndex]);
        return parseLocal[challengeIndex].objectives[objectiveIndex].completed;
    }
    return parseLocal[challengeIndex].objectives[objectiveIndex].progress;
}



// 1) * Map Through Seasonal Challenge Data, Determine if it Needs To Be Newly Saved to Local Storage, if More Challenges Have Been Added, Sync any Values that May Exist In Local Storage, Programmatically Update Data Values, and Re-save to Local Storage
const parseData = (data) => {

    return data.map((week) => {
        // * Set weekName to be JSON and LocalStorage Friendly
        const weekName = week.name.replaceAll(' ', '-');
        // * If a Given Week is Not In Local Storage, Save to LocalStorage
        if (localStorage.getItem(weekName) === null) {
            localStorage.setItem(weekName, JSON.stringify(week.challenges));
        }
        
        // * For a Given Week, map() Through Each Challenge, Programmatically Create Data, and Sync Data In Local Storage
        week.challenges.map((challenge, challengeIndex) => {
            // *** Use getLocal to Sync Completed Data
            challenge.completed = getLocal(weekName, challengeIndex, true);
            // ** For a Given Challenge, map() Through Each Objective and Sync Data in Local Storage
            challenge.objectives.map((objective, objectiveIndex) => {
                // *** Use getLocal to Sync Data
                objective.completed = getLocal(weekName, challengeIndex, false, objectiveIndex, true)
                objective.progress = getLocal(weekName, challengeIndex, false, objectiveIndex, false)
                // *** Return Updated Data
                return objective;
            })
            // *** Return Updated Data
            return challenge;
        })
        // console.log({week});
        localStorage.setItem(weekName, JSON.stringify(week.challenges));
        // *** Return Updated Data
        return week;
    });
}

export default localSeasonalChallenges;
