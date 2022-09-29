import { useState } from 'react';
import { useChallengeContext } from '../../ChallengeContext';

const ObjectiveToggle = (props) => {

    const [challengeState, dispatch] = useChallengeContext()

    const { week, challengeIndex, name } = challengeState;

    const [objProgress, setObjProgress] = useState(() => {
        return props.progress
    });

    // This came from parsedSeasonalChallenges and needs to be refactored to removed not need arguments
    const handleClick = (id, week, index) => {
       const objective = document.getElementById(id);
       console.log(objective);
    }

    return (
        <input
            id={props.id}
            type='checkbox'
            onClick={e => handleClick(props.id, week, props.index)}
        />
    );
};

export default ObjectiveToggle;