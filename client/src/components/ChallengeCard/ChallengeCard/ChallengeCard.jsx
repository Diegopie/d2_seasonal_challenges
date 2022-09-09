import React, { useEffect } from 'react';
import { useChallengeContext } from '../ChallengeContext';
import ChallengeObjectives from '../components/ChallengeObjectives/ChallengeObjectives';
import ChallengeReward from '../components/ChallengeReward/ChallengeReward';
import './ChallengeCard.css';

const ChallengeCard = (props) => {

    const [{name, description}, dispatch] = useChallengeContext();

    useEffect(() => {
        dispatch({type: 'setState', payload: props.data });
    }, [dispatch, props])

    console.log(name);

    return (
        <section className='ChallengeCard-Container'>
            {/* NAME */}
            <article className='ChallengeCard-Header'>
                <h3>{name}</h3>
            </article>
            <section className='ChallengeCard-Body'>
                {/* Description */}
                <article>
                    <p>{description}</p>
                </article>
                {/* Objectives */}
                <ChallengeObjectives 
                />
                {/* Rewards */}
                <ChallengeReward 
                />
            </section>
        </section>
    );
};

export default ChallengeCard;