import { useState } from 'react';

const ObjectivesSelect = (props) => {

    const [objProgress, setObjProgress] = useState(() => {
        return(props.progress);
    });
    
    const handleSelect = (e) => {
        setObjProgress(e.target.value);
    };

    return (
        <select id={`${props.task} ${props.index}`} value={objProgress} onChange={handleSelect}>
            <option key='default' disabled>Your Progress</option>
            {[...Array((props.goal + 1))].map((num, i) => {
                return (<option key={i} value={i} >{i}</option>)
            })}
        </select>
    );
};

export default ObjectivesSelect;