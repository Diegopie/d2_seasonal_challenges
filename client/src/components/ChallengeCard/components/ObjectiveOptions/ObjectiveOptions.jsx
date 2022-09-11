import { useState } from 'react';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectiveOptions = (props) => {

    const [challengeState, ] = useChallengeContext()

    const { week, challengeIndex, name }  = challengeState;

    const [objProgress, setObjProgress] = useState(() => {
        const getLocal = localStorage.getItem(name.replaceAll(' ', '-'));
        if (getLocal === null) {
            // console.log(getLocal);
            localStorage.setItem(name.replaceAll(' ', '-'), JSON.stringify(challengeState));
            return 0;
        }
        
        const progress = JSON.parse(getLocal).objectives[props.objectiveIndex].progress;
        return progress
    });

    const getLocal = (week, challengeIndex, isChallengeComplete, objectiveIndex, isObjectiveComplete) => {
        // * Find Correct Week
        const dashedWeek = week.replaceAll(' ', '-');
        const getLocal = localStorage.getItem(dashedWeek);
        const parseLocal = JSON.parse(getLocal)
        if (isChallengeComplete) {
            //  ** Find Correct Challenge
            return parseLocal[challengeIndex].completed
        }
        if (isObjectiveComplete) {
            return parseLocal[challengeIndex].objectives[objectiveIndex].completed
        }
        return parseLocal[challengeIndex].objectives[objectiveIndex].progress
    }

    console.log(week, challengeIndex, null, props.objectiveIndex, false );
    
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
            onChange={handleSelect}
        >
            <option key='default' disabled>Your Progress</option>
            {[...Array((props.goal + 1))].map((num, i) => {
                return (<option key={i} value={i} >{i}</option>)
            })}
        </select>
    );
};

export default ObjectiveOptions;