import React from 'react';
import ChallengeCard from '../ChallengeCard/ChallengeCard/ChallengeCard';
import ChallengeProvider from '../ChallengeCard/ChallengeContext';
import './ChallengeCategory.css';

const ChallengeCategory = (props) => {

    const challengesRemainingID = props.name + '-challengesRemaining';
    const activityHeader = props.name.replaceAll(' ', '-')
    const togglerID = activityHeader + '-completeToggler'
    const activityChallenges = document.getElementsByClassName(activityHeader);

    // Manage Hiding and Unhiding Completed Challenges (Also Handled in ChallengeCard)
    const handleToggle = (e) => {
        const isChecked = document.getElementById(togglerID).checked;
        // If isChecked is True, Hide Completed Challenges
        if (isChecked) {
            // Loop through each returned element, check if their data set is true, and remove from DOM
            for (let i = 0; i < activityChallenges.length; i++) {
                const isCompleted = activityChallenges[i].dataset.completed;
                if (isCompleted === 'true') {
                    activityChallenges[i].classList.remove('ChallengeCard-Hide');
                }
            }
            return;
        }
        // IF isChecked is False, add all challenges back to DOM
        for (let i = 0; i < activityChallenges.length; i++) {
            const isCompleted = activityChallenges[i].dataset.completed;
            if (isCompleted === 'true') {
                activityChallenges[i].classList.add('ChallengeCard-Hide');
            }
        }
    };

    return (
        <section className='ChallengeCategory-Container'>
            <article className='ChallengeCategory-Header'>
                <h2 className='ChallengeCategory-Title'>{props.name}</h2>
                <div>
                    <p> Challenges Remaining: <span id={challengesRemainingID}>0</span></p>
                    <div className='HideCompleted-Body'>
                        <p>Show Completed: </p>
                        <label className="HideCompleted">
                            <input
                                id={togglerID}
                                type='checkbox'
                                onClick={handleToggle}
                            />
                            <span className='HideCompleted-slider HideCompleted-round'></span>
                        </label>
                    </div>
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
                                challengesRemainingID={challengesRemainingID}
                                togglerID={togglerID}
                                activityHeader={activityHeader}
                            />
                        </ChallengeProvider>
                    )
                })}
            </section>
        </section>
    );
};

export default ChallengeCategory;