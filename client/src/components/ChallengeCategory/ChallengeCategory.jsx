import React, { useEffect, useState } from 'react';
import ChallengeCard from '../ChallengeCard/ChallengeCard/ChallengeCard';
import ChallengeProvider from '../ChallengeCard/ChallengeContext';
import './ChallengeCategory.css';

const ChallengeCategory = (props) => {

    
   
    let counter = 0;
    
    const [ completedChallenges, setCompletedChallenges] = useState(() => {
        return counter;
    })

    useEffect(() => {
        for (let i = 0; i < props.challenges.length; i++) {
            console.log(props.challenges[i].completed);
            if (!props.challenges[i].completed) {
                counter++
            }
            setCompletedChallenges(counter)
        }
    }, [props, counter])

    return (
        <section className='ChallengeCategory-Container'>
            <article className='ChallengeCategory-Header'>
                <h2 className='ChallengeCategory-Title'>{props.name}</h2>
                <div>
                    <p> Challenges Remaining: {completedChallenges}</p>
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
                            />
                        </ChallengeProvider>
                    )
                })}
            </section>
        </section>
    );
};

export default ChallengeCategory;