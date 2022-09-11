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
                {/* Map Through Prop Data for Every Challenge in that Week */}
                {props.challenges.map((challenge, index) => {
                    console.log(index);
                    return (
                        // Wrap the State Provider for Individual Challenges and Pass Challenge Data to Dispatch Initial State
                        <ChallengeProvider 
                            key={challenge.name}
                            data={{week: props.name.replaceAll(' ', '-'), challenge, challengeIndex: index}}
                        >
                            <ChallengeCard
                                key={challenge.name}
                            />
                        </ChallengeProvider>
                    )
                })}
            </section>
        </section>
    );
};

export default ChallengeCategory;