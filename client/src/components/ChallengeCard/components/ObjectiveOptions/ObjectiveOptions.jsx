import { useState } from 'react';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectivesSelect = (props) => {

    const [{name}, ] = useChallengeContext();

    const [objProgress, setObjProgress] = useState(() => {
        return(props.progress);
    });
    
    const handleSelect = (e) => {
        setObjProgress(e.target.value);
        const {challenge, index} = e.target.dataset;
        // successfully getting correct challenge from local storage
        const localChallenge = JSON.parse(localStorage.getItem(challenge));
        console.log(localChallenge.objectives[index].progress);
        localChallenge.objectives[index].progress = objProgress
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