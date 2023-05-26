import { useState } from 'react';
import { updateServerData } from '../../../../api/server-data';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectiveOptions = (props) => {

    const [{ completed, week, challengeIndex, name }, dispatch] = useChallengeContext()

    // CAN WE GET THIS FROM CHALLENGE STATE INSTEAD OF PROPS
    const [objProgress, setObjProgress] = useState(() => {
        return props.progress
    });

    const selectId = props.task.replaceAll(' ', '-');

    const handleSelect = (e, week, challengeIndex) => {
        const userSelectedValue = Number(e.target.value);
        // * Set Component State to Update Page
        setObjProgress(userSelectedValue);
        // ** Parse Local With Mutable Variable
        const getLocal = localStorage.getItem(week);
        const newLocal = JSON.parse(getLocal);
        // ** Use Challenge Index From ChallengeState to Find the Correct Challenge and objectiveIndex to find the Correct Objective
        const currentTask = newLocal[challengeIndex].objectives[props.objectiveIndex];
        currentTask.progress = userSelectedValue;
        // ** If a User Selects the Final Options, Mark Objective as Complete
        if(userSelectedValue === props.goal) {
            // console.log("hit");
            currentTask.completed = true;
        }
        // ** Store the Mutated Array in Local Storage
        localStorage.setItem(week, JSON.stringify(newLocal));
        // ** Dispatch Values to State for Data to Persist Between Pages
        // NOTE: PROGRESS STILL DOES NOT UPDATE ACROSS PAGES
        const newObjective = newLocal[challengeIndex].objectives;
        dispatch({type:'setNewObjective', payload: { newObjective }});
        updateServerData();

        // {patch} update dom to sync any duplicate Challenges
        const targets = document.getElementsByClassName(selectId);
            for (let i = 0; i < targets.length; i++) {
                targets[i].value = userSelectedValue;
            }
    }

    return (
        <select
            id={selectId}
            className={`ObjectiveOptions ${selectId} ${completed ? 'ChallengeCard-Completed' : ''}`}
            value={objProgress}
            data-challenge={name.replaceAll(' ', '-')}
            data-objective-index={props.objectiveIndex}
            disabled={props.completed}
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