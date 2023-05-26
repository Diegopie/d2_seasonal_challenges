import { useEffect } from 'react';
import { updateServerData } from '../../../../api/server-data';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectiveToggle = (props) => {

    const [{ completed, week, challengeIndex }, dispatch] = useChallengeContext();

    // NOTE: PROGRESS STILL DOES NOT UPDATE ACROSS PAGES
    const handleClick = (e, id, week, challengeIndex) => {
        const currentObjective = e.target;
        // * Update Local Storage
        const getLocal = localStorage.getItem(week);
        // ** Parse Local With Mutable Variable
        const newLocal = JSON.parse(getLocal);
        // ** Use Challenge Index From ChallengeState to Find the Correct Challenge and objectiveIndex to find the Correct Objective
        const currentTask = newLocal[challengeIndex].objectives[props.objectiveIndex];
        currentTask.completed = currentObjective.checked;
        // ** Store the Mutated Array in Local Storage
        localStorage.setItem(week, JSON.stringify(newLocal));
        // console.log({newLocal});
        // ** Dispatch Values to State for Data to Persist Between Pages
        const newObjective = newLocal[challengeIndex].objectives;
        dispatch({type:'setNewObjective', payload: { newObjective }});
        updateServerData();

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
            onClick={e => handleClick(e, props.id, week, challengeIndex)}
        />
    );
};

export default ObjectiveToggle;