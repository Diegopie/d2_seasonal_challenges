import { updateServerData } from "../../api/server-data";

const updateData = (objectiveIsComplete, week, challengeIndex, objectiveIndex, dispatch, objectives) => {


    // check if all objectives are complete
    const totalObjectives = objectives.length;
    let totalObjectivesCompleted = 0;
    for (let i = 0; i < totalObjectives; i++) {
        if (objectives[i].completed) {
            // console.log("hit");
            totalObjectivesCompleted++;
        }
    }

    // Update Local Storage

    const newLocal = JSON.parse(localStorage.getItem(week));
    const currentChallenge = newLocal[challengeIndex]
    const currentObjective = currentChallenge.objectives[objectiveIndex];

    const allObjectivesComplete = () => {
        if (totalObjectivesCompleted === totalObjectives && totalObjectives !== 0) {
            return true
        } else if (totalObjectivesCompleted !== totalObjectives && totalObjectives !== 0) {
            return false
        }
    }


    // ** Use Challenge Index From ChallengeState to Find the Correct Challenge and objectiveIndex to find the Correct Objective

    currentChallenge.completed = allObjectivesComplete();
    currentObjective.completed = objectiveIsComplete
    // ** Store the Mutated Array in Local Storage
    localStorage.setItem(week, JSON.stringify(newLocal));
    // console.log({newLocal});
    // ** Dispatch Values to State for Data to Persist Between Pages
    const newObjective = newLocal[challengeIndex].objectives;
    // Update State
    dispatch({ type: 'setNewObjective', payload: { newObjective } });
    // Update Database
    updateServerData();
}

export default updateData