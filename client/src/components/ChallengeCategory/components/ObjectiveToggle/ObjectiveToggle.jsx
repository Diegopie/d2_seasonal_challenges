import { useEffect, useState } from 'react';
import updateData from '../../hooks/useUpdateData';
import { useChallengeContext } from '../../context/ChallengeContext';

const ObjectiveToggle = (props) => {

    const [{ week, challengeIndex, objectives }, dispatch] = useChallengeContext();

    const [ objComplete, setObjectiveComplete ] = useState(objectives[props.objectiveIndex].completed)

    // NOTE: PROGRESS STILL DOES NOT UPDATE ACROSS PAGES
    const handleClick = (e) => {
        setObjectiveComplete(!objComplete);
        updateData( week, challengeIndex, props.objectiveIndex, dispatch, !objComplete, null);
        
        // { bandage } update DOM across all duplicates
        const targets = document.getElementsByClassName(props.id);
        for (let i = 0; i < targets.length; i++) {
            targets[i].checked = e.target.checked;
        }
    }

    useEffect(() => {
        setObjectiveComplete(objectives[props.objectiveIndex].completed);
    }, [objectives, objComplete, props.objectiveIndex]);

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