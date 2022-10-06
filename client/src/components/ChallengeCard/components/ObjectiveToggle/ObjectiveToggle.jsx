import { useEffect } from 'react';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectiveToggle = (props) => {

    const [{ name, week, challengeIndex }, dispatch] = useChallengeContext();

    console.log(challengeIndex);


    // NOTE: PROGRESS STILL DOES NOT UPDATE ACROSS PAGES
    const handleClick = (id, week, challengeIndex) => {
        console.log(challengeIndex);
        const currentObjective = document.getElementById(id);
        // * Update Local Storage
        const getLocal = localStorage.getItem(week);
        // ** Parse Local With Mutable Variable
        const newLocal = JSON.parse(getLocal);
        // ** Use Challenge Index From ChallengeState to Find the Correct Challenge and objectiveIndex to find the Correct Objective
        const currentTask = newLocal[challengeIndex].objectives[props.objectiveIndex];
        currentTask.completed = currentObjective.checked;
        // ** Store the Mutated Array in Local Storage
        localStorage.setItem(week, JSON.stringify(newLocal));
        // ** Dispatch Values to State for Data to Persist Between Pages
        const newObjective = newLocal[challengeIndex].objectives;
        dispatch({type:'setNewObjective', payload: { newObjective }});
    }

    useEffect(() => {
        if (props.completed) {
            document.getElementById(props.id).checked = props.completed;
        }
    }, [props.completed, props.id])

    return (
        <input
            id={props.id}
            type='checkbox'
            onClick={e => handleClick(props.id, week, challengeIndex)}
        />
    );
};

export default ObjectiveToggle;