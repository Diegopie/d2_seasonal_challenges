import React from 'react';
import ChallengeCard from '../ChallengeCard/ChallengeCard/ChallengeCard';
import ChallengeProvider from '../ChallengeCard/ChallengeContext';
import './ChallengeCategory.css';

const ChallengeCategory = (props) => {

    const challengesRemainingID = props.name + '-challengesRemaining';
    const activityHeader = props.name.replaceAll(' ', '-');
    
    // Manage Hiding All Challenges for a Given Section
    const togglerActivitiesID = props.name + '-activitiesToggler';
    const ChallengeCategoryContainerID = props.name.replaceAll(' ', '-') + '-challengeContainer';

    const handleToggleActivities = () => {
        const isChecked = document.getElementById(togglerActivitiesID).checked;
        console.log(isChecked);
        console.log(document.getElementById(ChallengeCategoryContainerID));
        const selectedSection = document.getElementById(ChallengeCategoryContainerID);
        // If isChecked is True, Hide All Challenges
        if (isChecked) {
            selectedSection.classList.add('ChallengeCard-Hide');
            return;
        }
        selectedSection.classList.remove('ChallengeCard-Hide');
        // If isChecked is False, Add All Challenges back to DOM
    };

     // Manage Hiding and Unhiding Completed Challenges (Also Handled in ChallengeCard)
    const togglerID = activityHeader + '-completeToggler';
    const activityChallenges = document.getElementsByClassName(activityHeader);

    const handleToggleChallenges = (e) => {
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
                <div className='ChallengeCategory-Title'>
                    <h2>{props.name}</h2>
                    <div className='App-FlexCenter'>
                        <p>Hide: {props.name}</p>
                        <label className="HideCompleted">
                            <input
                                id={togglerActivitiesID}
                                type='checkbox'
                                onClick={handleToggleActivities}
                            />
                            <span className='HideCompleted-slider HideCompleted-round'></span>
                        </label>
                    </div>
                </div>
                <div>
                    <p> Challenges Remaining: <span id={challengesRemainingID}>0</span></p>
                    <div className='App-FlexCenter'>
                        <p>Show Completed: </p>
                        <label className="HideCompleted">
                            <input
                                id={togglerID}
                                type='checkbox'
                                onClick={handleToggleChallenges}
                            />
                            <span className='HideCompleted-slider HideCompleted-round'></span>
                        </label>
                    </div>
                </div>
            </article>
            <section className='ChallengeCategory-Body' id={ChallengeCategoryContainerID}>
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