import { useEffect } from 'react';
import { updateServerData } from '../../../../api/server-data';
import updateData from '../../update-data';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectiveToggle = (props) => {

    const [{ completed, week, challengeIndex, objectives }, dispatch] = useChallengeContext();


    // NOTE: PROGRESS STILL DOES NOT UPDATE ACROSS PAGES
    const handleClick = (e) => {
        const objectiveIsComplete = e.target.checked;
        console.log(week);
        updateData(objectiveIsComplete, week, challengeIndex, props.objectiveIndex, dispatch, objectives);
        // * Update Local Storage
        // const newLocal = JSON.parse(localStorage.getItem(week));
        // // ** Use Challenge Index From ChallengeState to Find the Correct Challenge and objectiveIndex to find the Correct Objective
        // const currentTask = newLocal[challengeIndex].objectives[props.objectiveIndex];
        // currentTask.completed = objectiveIsComplete
        // // ** Store the Mutated Array in Local Storage
        // localStorage.setItem(week, JSON.stringify(newLocal));
        // // console.log({newLocal});
        // // ** Dispatch Values to State for Data to Persist Between Pages
        // const newObjective = newLocal[challengeIndex].objectives;
        // dispatch({type:'setNewObjective', payload: { newObjective }});
        // updateServerData();

        // { bandaid } update DOM accoss all duplicates
        const targets = document.getElementsByClassName(props.id);
            for (let i = 0; i < targets.length; i++) {
                targets[i].checked = e.target.checked;
            }
    }

    useEffect(() => {
        // Toggle All Checkboxes to true if challenge is complete; Use className as some challenges are duplicated on DOM
        if (completed) {
            const targets = document.getElementsByClassName(props.id);
            for (let i = 0; i < targets.length; i++) {
                targets[i].checked = completed;
            }
        }
    }, [completed, props.id])

    return (
        <input
            id={props.id}
            type='checkbox'
            className={`ObjectiveToggle ${props.id}`}
            onClick={e => handleClick(e)}
        />
    );
};

export default ObjectiveToggle;