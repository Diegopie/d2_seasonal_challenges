import React from 'react';

const ChallengeReward = (props) => {

    return (
        <section>
            <h4>Rewards</h4>
            {props.reward &&
                <p>{props.reward}</p>
            }
            {props.xp &&
                <p>{props.xp}</p>
            }
            {props.dust &&
                <p>{props.dust}</p>
            }
        </section>
    );
};

export default ChallengeReward;