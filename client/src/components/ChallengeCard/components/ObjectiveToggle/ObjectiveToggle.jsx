import { useState } from 'react';
import updateData from '../../update-data';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectiveToggle = (props) => {

    const [{ week, challengeIndex, objectives }, dispatch] = useChallengeContext();

    const [ objComplete, setObjectiveComplete ] = useState(objectives[props.objectiveIndex].completed)

    // NOTE: PROGRESS STILL DOES NOT UPDATE ACROSS PAGES
    const handleClick = (e) => {
        setObjectiveComplete(!objComplete);
        updateData(!objComplete, week, challengeIndex, props.objectiveIndex, dispatch, objectives);
        
        // { bandage } update DOM across all duplicates
        const targets = document.getElementsByClassName(props.id);
        for (let i = 0; i < targets.length; i++) {
            targets[i].checked = e.target.checked;
        }
    }

    return (
        <input
            id={props.id}
            type='checkbox'
            checked={objComplete}
            className={`ObjectiveToggle ${props.id}`}
            onChange={e => handleClick(e)}
        />
    );
};

export default ObjectiveToggle;