import { parserServerData } from "../api/parseServerData";
import seasonalChallenges from "./seasonalChallenges/index";

// Check for seasonal progress wipe at the start of the season
if (localStorage.getItem('StartSeason20') === null) {
    localStorage.clear();
    localStorage.setItem('StartSeason20', true);
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
const localSeasonalChallenges = async () => {

    // const fuck = await parserServerData()
    // console.log(fuck);

    //  const serverData = () => {
    //         if (!parserServerData) return week.challenges;
    //         return p
    //     }

    return seasonalChallenges.map((week) => {
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

        // * For a Given Week, map() Through Each Challenge, Programmatically Create Data, and Sync Data In Local Storage
        week.challenges.map((challenge, challengeIndex) => {
            // *** Create belongsTo string
            challenge.belongsTo = weekName;
            // *** Create challengeIndex Number
            challenge.challengeIndex = challengeIndex;
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

console.log('-- localSeasonalChallenges -- ');
console.log(localSeasonalChallenges);

export {localSeasonalChallenges};