import { useState } from 'react';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectiveOptions = (props) => {

    const [challengeState, ] = useChallengeContext()

    const {name} = challengeState;

    const [objProgress, setObjProgress] = useState(() => {
        const getLocal = localStorage.getItem(name.replaceAll(' ', '-'));
        if (getLocal === null) {
            // console.log(getLocal);
            localStorage.setItem(name.replaceAll(' ', '-'), JSON.stringify(challengeState));
            return 0;
        }
        
        const progress = JSON.parse(getLocal).objectives[props.index].progress;
        console.log(progress);
        return progress
    });


    
    const handleSelect = (e) => {
        // * Set New State to Update Page
        setObjProgress(e.target.value);
        // * Deconstruct data from selected challenge objective
        const {challenge, index} = e.target.dataset;
        // * Get Local Storage Object
        const localChallenge = JSON.parse(localStorage.getItem(challenge));
        // * Mutate and save data
        localChallenge.objectives[index].progress = e.target.value
        localStorage.setItem(challenge, JSON.stringify(localChallenge));
    };

    return (
        <select 
            id={`${props.task.replaceAll(' ', '-')}`}
            value={objProgress}
            data-challenge={name.replaceAll(' ', '-')}
            data-index={props.index}
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