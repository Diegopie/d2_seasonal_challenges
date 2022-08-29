import React from 'react';
import ChallengeObjectives from '../components/ChallengeObjectives/ChallengeObjectives';
import ChallengeReward from '../components/ChallengeReward/ChallengeReward';
import './ChallengeCard.css';

const ChallengeCard = (props) => {

    return (
        <section className='ChallengeCard-Container'>
            {/* NAME */}
            <article className='ChallengeCard-Header'>
                <h3>{props.name}</h3>
            </article>
            <section className='ChallengeCard-Body'>
                {/* Description */}
                <article>
                    <p>{props.desc}</p>
                </article>
                {/* Objectives */}
                <ChallengeObjectives 
                    objectives={props.objectives}
                />
                {/* Rewards */}
                <ChallengeReward 
                    reward={props.reward}
                    xp={props.xp}
                    dust={props.dust}
                />
            </section>
        </section>
    );
};

export default ChallengeCard;