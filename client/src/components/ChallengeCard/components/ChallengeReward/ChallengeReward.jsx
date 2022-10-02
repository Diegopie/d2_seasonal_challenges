import React from 'react';
import { useChallengeContext } from '../../ChallengeContext';

const ChallengeReward = (props) => {

    const [{reward, xp, dust}, ] = useChallengeContext();

    return (
        <section>
            {/* Check If Each Reward Type has a Truthy Value in this Challenge Instance and Render */}
            <h4>Rewards</h4>
            {reward &&
                <p>{reward}</p>
            }
            {xp &&
                <p>{xp}</p>
            }
            {dust &&
                <p>{dust}</p>
            }
        </section>
    );
};

export default ChallengeReward;