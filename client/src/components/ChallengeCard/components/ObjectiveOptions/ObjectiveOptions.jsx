import { useState } from 'react';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectiveOptions = (props) => {

    const [challengeState, ] = useChallengeContext()

    const { week, challengeIndex, name }  = challengeState;
    console.log({week});

    const [objProgress, setObjProgress] = useState();

    // ** This will replace handleSelect,  currently logging required data to make sure everything passes through
    // This came from parsedSeasonalChallenges and needs to be refactored to update local storage instead of reading
    const getLocal = (e, week, challengeIndex, isChallengeComplete, objectiveIndex, isObjectiveComplete) => {
        // * Find Correct Week
        setObjProgress(e.target.value);
        const dashedWeek = week;
        const getLocal = localStorage.getItem(dashedWeek);
        const parseLocal = JSON.parse(getLocal)
        console.log({parseLocal});
        const currentChallenge = parseLocal[challengeIndex];
        console.log({currentChallenge});
        const currentTask = currentChallenge.objectives[props.objectiveIndex];
        console.log({currentTask});
        console.log(currentTask.progress);
     
        // parseLocal.map()
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
    
    // console.log(week, challengeIndex, null, props.objectiveIndex, false );
    
    const handleSelect = (e) => {
        // * Set New State to Update Page
        setObjProgress(e.target.value);
        // * Deconstruct data from selected challenge objective
        console.log(e.target.dataset);
        const {challenge, objectiveIndex} = e.target.dataset;
        // * Get Local Storage Object
        const localChallenge = JSON.parse(localStorage.getItem(challenge));
        // * Mutate and save data
        localChallenge.objectives[objectiveIndex].progress = e.target.value
        localStorage.setItem(challenge, JSON.stringify(localChallenge));
    };

    return (
        <select 
            id={`${props.task.replaceAll(' ', '-')}`}
            value={objProgress}
            data-challenge={name.replaceAll(' ', '-')}
            data-objective-index={props.objectiveIndex}
            onChange={e => getLocal(e, week, challengeIndex)}
        >
            <option key='default' disabled>Your Progress</option>
            {[...Array((props.goal + 1))].map((num, i) => {
                return (<option key={i} value={i} >{i}</option>)
            })}
        </select>
    );
};

export default ObjectiveOptions;