import { useState } from 'react';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectivesSelect = (props) => {

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
        console.log('-----');
        console.log("handleSelect e.target.val");
        console.log(e.target.value);
        setObjProgress(e.target.value);
        console.log("handleSelect objProgress");
        console.log(objProgress);
        const {challenge, index} = e.target.dataset;
        // successfully getting correct challenge from local storage
        const localChallenge = JSON.parse(localStorage.getItem(challenge));
        console.log('old local');
        console.log(localChallenge.objectives[index].progress);
        // console.log(localChallenge.objectives[index].progress);
        localChallenge.objectives[index].progress = e.target.value
        console.log('new local');
        console.log(localChallenge.objectives[index].progress);
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

export default ObjectivesSelect;