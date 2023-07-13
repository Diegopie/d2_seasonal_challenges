import { updateServerData } from "../../api/server-data";

const updateData = ( week, challengeIndex, objectiveIndex, dispatch, objectiveIsComplete, progress) => {

    // * Create Reference to Current Challenge and Objectives
    const newLocal = JSON.parse(localStorage.getItem(week));
    const currentChallenge = newLocal[challengeIndex]
    const allObjectives = currentChallenge.objectives;
    const currentObjective = allObjectives[objectiveIndex];

    // * Use Local Storage Data to Determine if All Objectives are Completed
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

    // * Check if Initiated By ObjectiveOptions to Update Progress
    if (progress) {
        currentObjective.progress = progress.progress;
        // ** Check If Progress Matches Goal to Mark Objective as Complete, then Run Logic To Update Objective and Challenge Complete
        if (progress.progress === progress.goal) {
            objectiveIsComplete = true;
        } else {
            // ** If they don't match, update local, state, db, and end the function
            localStorage.setItem(week, JSON.stringify(newLocal));
            dispatch({type:'setNewObjective', payload: { updatedProgress: allObjectives }});
            updateServerData();
            return;
        }
    }

    if (objectiveIsComplete !== null) {
        currentObjective.completed = objectiveIsComplete
        currentChallenge.completed = allObjectivesComplete(allObjectives);
    }
    // * Mutate Boolean for Current Objective
    // * Use allObjectivesComplete() to determine if All Challenges Are Complete
    // * Save Updated Data To Local Storage
    localStorage.setItem(week, JSON.stringify(newLocal));
    // * Update State
    dispatch({ type: 'setUpdatedChallenge', payload: { allObjectives, challengeIsCompleted: allObjectivesComplete(allObjectives) }});
    // * Update Database
    updateServerData();
}

export default updateData