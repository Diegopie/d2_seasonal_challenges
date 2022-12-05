import React from 'react';
import ChallengeCard from '../ChallengeCard/ChallengeCard/ChallengeCard';
import ChallengeProvider from '../ChallengeCard/ChallengeContext';
import './ChallengeCategory.css';

const ChallengeCategory = (props) => {

    return (
        <section className='ChallengeCategory-Container'>
            <article className='ChallengeCategory-Header'>
                <h2 className='ChallengeCategory-Title'>{props.name}</h2>
                <div>
                    <p> Challenges Remaining: <span id={props.name+'-challengesRemaining'}>0</span></p>
                    <p>Hide Completed: </p>
                </div>
            </article>
            <section className='ChallengeCategory-Body'>
                {props.challenges.map((challenge) => {
                    return (
                        // Wrap the State Provider for Individual Challenges and Pass Challenge Data to Dispatch Initial State
                        <ChallengeProvider
                            key={challenge.name}
                            data={{ challenge }}
                        >
                            <ChallengeCard
                                key={challenge.name}
                                challengesRemainingID={props.name+'-challengesRemaining'}
                            />
                        </ChallengeProvider>
                    )
                })}
            </section>
        </section>
    );
};

export default ChallengeCategory;