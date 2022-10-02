import { useState } from 'react';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectiveOptions = (props) => {

    const [{ week, challengeIndex, name }, dispatch] = useChallengeContext()


    // CAN WE GET THIS FROM CHALLENGE STATE INSTEAD OF PROPS
    const [objProgress, setObjProgress] = useState(() => {
        return props.progress
    });

// NEED TO REFACTOR SO IT DOES NOT UPDATE EVERY SINGLE INSTANCE OF A CURRENT INDEX

    // This came from parsedSeasonalChallenges and needs to be refactored to removed not need arguments
    const handleSelect = (e, week, challengeIndex) => {
        const userSelectedValue = e.target.value;
        // * Set Component State to Update Page
        setObjProgress(userSelectedValue);
        // ** Parse Local With Mutable Variable
        const getLocal = localStorage.getItem(week);
        const newLocal = JSON.parse(getLocal);
        // ** Use Challenge Index From ChallengeState to Find the Correct Challenge and objectiveIndex to find the Correct Objective
        const currentTask = newLocal[challengeIndex].objectives[props.objectiveIndex];
        currentTask.progress = userSelectedValue;
        // ** Store the Mutated Array in Local Storage
        localStorage.setItem(week, JSON.stringify(newLocal));

        // ** Dispatch Values to State for Data to Persist Between Pages
        // NOTE: PROGRESS STILL DOES NOT UPDATE ACROSS PAGES
        const newObjective = newLocal[challengeIndex].objectives;
        dispatch({type:'setNewObjective', payload: { newObjective }});
    }

 

    // Can we use a useEffect to listen to completed value??

    return (
        <select
            id={`${props.task.replaceAll(' ', '-')}`}
            value={objProgress}
            data-challenge={name.replaceAll(' ', '-')}
            data-objective-index={props.objectiveIndex}
            onChange={e => handleSelect(e, week, challengeIndex)}
        >
            <option key='default' disabled>Your Progress</option>
            {[...Array((props.goal + 1))].map((num, i) => {
                return (<option key={i} value={i} >{i}</option>)
            })}
        </select>
    );
};

export default ObjectiveOptions;