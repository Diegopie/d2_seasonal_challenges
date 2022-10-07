import React from 'react';
import ChallengeCard from '../ChallengeCard/ChallengeCard/ChallengeCard';
import ChallengeProvider from '../ChallengeCard/ChallengeContext';
import './ChallengeCategory.css';

const ChallengeCategory = (props) => {
    console.log(props.challenges)
    return (
        <section className='ChallengeCategory-Container'>
            <article className='ChallengeCategory-Header'>
                <h2>{props.name}</h2>
            </article>
            <section className='ChallengeCategory-Body'>
                {/* Map Through Prop Data for Every Challenge in that Week */}
                {/* NOTE: THIS DOES NOT WORK IN ACTIVITIES PAGE SINCE THEY WILL HAVE A DIFFERENT INDEX VALUE THAN ACTIVITIES (SYNCED WITH LOCAL STORAGE) */}
                {/* I AM TRYING TO HARD CODE CHALLENGE INDEX IN DATA BUT IT IS CAUSING A CRASH AT THE MOMENT */}
                {props.challenges.map((challenge) => {
                    return (
                        // Wrap the State Provider for Individual Challenges and Pass Challenge Data to Dispatch Initial State
                        <ChallengeProvider 
                            key={challenge.name}
                            data={{challenge}}
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