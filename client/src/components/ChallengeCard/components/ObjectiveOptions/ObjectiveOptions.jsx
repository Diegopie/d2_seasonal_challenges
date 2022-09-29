import { useState } from 'react';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectiveOptions = (props) => {

    const [{ week, challengeIndex, name }, dispatch] = useChallengeContext()

    const [objProgress, setObjProgress] = useState(() => {
        return props.progress
    });

    // This came from parsedSeasonalChallenges and needs to be refactored to removed not need arguments
    const handleSelect = (e, week, challengeIndex) => {
        const userSelectedValue = e.target.value;
        // * Set Component State to Update Page
        setObjProgress(userSelectedValue);
        // * Update Local Storage
        const getLocal = localStorage.getItem(week);
        const parseLocal = JSON.parse(getLocal)
        // ** Map Through Array and return the Objective that Needs to Be Changed
        const newLocal = parseLocal.map((challenge) => {
            const currentTask = challenge.objectives[props.objectiveIndex];
            currentTask.progress = userSelectedValue;
            return challenge
        })
        // ** Store the New Array in Local Storage
        localStorage.setItem(week, JSON.stringify(newLocal));

        // ** Dispatch Values to State for Data to Persist Between Pages
        // NOTE: PROGRESS STILL DOES NOT UPDATE ACROSS PAGES
        const newObjectiveProgress = newLocal[challengeIndex].objectives;
        dispatch({type:'setProgress', payload: { newObjectiveProgress }})
    }

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