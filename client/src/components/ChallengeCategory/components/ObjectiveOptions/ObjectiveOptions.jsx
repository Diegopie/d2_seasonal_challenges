import { useState } from 'react';
import { useChallengeContext } from '../../context/ChallengeContext';
import updateData from '../../hooks/useUpdateData';

const ObjectiveOptions = (props) => {

    const [{ completed, week, challengeIndex, name }, dispatch] = useChallengeContext()

    // CAN WE GET THIS FROM CHALLENGE STATE INSTEAD OF PROPS
    const [objProgress, setObjProgress] = useState(() => {
        return props.progress
    });

    const selectId = props.task.replaceAll(' ', '-');

    const handleSelect = (e, week, challengeIndex) => {
        const userSelectedValue = Number(e.target.value);
        // * Set Component State to Update Page
        setObjProgress(userSelectedValue);

        const progressData = { 
            goal: props.goal,
            progress: userSelectedValue
        }

        updateData( week, challengeIndex, props.objectiveIndex, dispatch, null, progressData );
    
        const targets = document.getElementsByClassName(selectId);
            for (let i = 0; i < targets.length; i++) {
                targets[i].value = userSelectedValue;
            }
    }

    return (
        <select
            id={selectId}
            className={`ObjectiveOptions ${selectId} ${completed ? 'ChallengeCard-Completed' : ''}`}
            value={objProgress}
            data-challenge={name.replaceAll(' ', '-')}
            data-objective-index={props.objectiveIndex}
            disabled={props.completed}
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