import { useState } from 'react';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectivesSelect = (props) => {

    const [{name}, ] = useChallengeContext();

    const [objProgress, setObjProgress] = useState(() => {
        return(props.progress);
    });
    
    const handleSelect = (e) => {
        console.log(e.target);
        setObjProgress(e.target.value);
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