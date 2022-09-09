import React from 'react';
import ChallengeCard from '../ChallengeCard/ChallengeCard/ChallengeCard';
import ChallengeProvider from '../ChallengeCard/ChallengeContext';
import './ChallengeCategory.css';

const ChallengeCategory = (props) => {

    return (
        <section className='ChallengeCategory-Container'>
            <article className='ChallengeCategory-Header'>
                <h2>{props.name}</h2>
            </article>
            <section className='ChallengeCategory-Body'>
                {props.challenges.map((challenge) => {
                    return (
                        <ChallengeProvider 
                            key={challenge.name}
                            data={challenge}
                        >
                            <ChallengeCard
                                key={challenge.name}
                                name={challenge.name}
                                desc={challenge.description}
                                objectives={challenge.objectives}
                                reward={challenge.reward}
                                xp={challenge.xp}
                                dust={challenge.dust}
                                data={challenge}
                            />
                        </ChallengeProvider>
                    )
                })}
            </section>
        </section>
    );
};

export default ChallengeCategory;