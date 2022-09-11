import { useState } from 'react';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectiveOptions = (props) => {

    const [challengeState,] = useChallengeContext()

    const { week, challengeIndex, name } = challengeState;

    const [objProgress, setObjProgress] = useState(() => {
        return props.progress
    });

    // ** This will replace handleSelect,  currently logging required data to make sure everything passes through
    // This came from parsedSeasonalChallenges and needs to be refactored to update local storage instead of reading
    const handleSelect = (e, week, challengeIndex, isChallengeComplete, objectiveIndex, isObjectiveComplete) => {
        // * Find Correct Week
        setObjProgress(e.target.value);
        const dashedWeek = week;
        console.log(week);
        const getLocal = localStorage.getItem(dashedWeek);
        const parseLocal = JSON.parse(getLocal)

        const newLocal = parseLocal.map((challenge) => {
            const currentTask = challenge.objectives[props.objectiveIndex];
            console.log({ currentTask });
            console.log(currentTask.progress);
            currentTask.progress = e.target.value;
            return challenge
        })

        localStorage.setItem(week, JSON.stringify(newLocal));

        // ** Toggle Challenge Completed
        // if (isChallengeComplete) {
        //     //  ** Find Correct Challenge
        //     return parseLocal[challengeIndex].completed
        // }

        // ** Toggle Task Objective Completed
        // if (isObjectiveComplete) {
        //     return parseLocal[challengeIndex].objectives[objectiveIndex].completed
        // }

        //  ** Toggle Task Completed
        // return parseLocal[challengeIndex].objectives[objectiveIndex].progress

        // ** Update Task Value
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