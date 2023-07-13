import { updateServerData } from "../../api/server-data";

const updateData = (objectiveIsComplete, week, challengeIndex, objectiveIndex, dispatch) => {

    // * Create Reference to Current Challenge and Objectives
    const newLocal = JSON.parse(localStorage.getItem(week));
    const currentChallenge = newLocal[challengeIndex]
    const allObjectives = currentChallenge.objectives;

    // Use Local Storage Data to Determine Total Completed Challenges
    const allObjectivesComplete = (allObjectives) => {
        // check if all objectives are complete
        const totalObjectives = allObjectives.length;
        let totalObjectivesCompleted = 0;
        for (let i = 0; i < totalObjectives; i++) {
            if (allObjectives[i].completed) {
                // console.log("hit");
                totalObjectivesCompleted++;
            }
        }
        // console.log({objectiveIsComplete});
        // console.log('-- total completed vs totalObjectives --');
        // console.log(totalObjectivesCompleted, totalObjectives);
        if (totalObjectivesCompleted === totalObjectives && totalObjectives !== 0) {
            return true
        } else if (totalObjectivesCompleted !== totalObjectives && totalObjectives !== 0) {
            return false
        }
    }

    // * Mutate Boolean for Current Objective
    allObjectives[objectiveIndex].completed = objectiveIsComplete
    // * Use allObjectivesComplete() to determine if All Challenges Are Complete
    currentChallenge.completed = allObjectivesComplete(allObjectives);
    // * Save Updated Data To Local Storage
    localStorage.setItem(week, JSON.stringify(newLocal));
    // console.log({newLocal});
    // * Update State
    dispatch({ type: 'setUpdatedChallenge', payload: { allObjectives, challengeIsCompleted: allObjectivesComplete(allObjectives) }});
    // * Update Database
    updateServerData();
}

export default updateData