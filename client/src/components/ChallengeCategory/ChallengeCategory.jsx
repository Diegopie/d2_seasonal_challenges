import React, { useEffect } from 'react';
import ChallengeCard from '../ChallengeCard';
import ChallengeProvider from '../ChallengeCard/ChallengeContext';
import './ChallengeCategory.css';
import { useGlobalContext } from '../../context/GlobalContext';

const ChallengeCategory = (props) => {
    const challengesRemainingID = props.name + '-challengesRemaining';
    const activityHeader = props.name.replaceAll(' ', '-');

    // Manage Hiding All Challenges for a Given Section
    const togglerActivitiesID = props.name + '-activitiesToggler';
    const ChallengeCategoryContainerID = props.name.replaceAll(' ', '-') + '-challengeContainer';

    const handleToggleActivities = () => {
        const isChecked = document.getElementById(togglerActivitiesID).checked;
        const selectedSection = document.getElementById(ChallengeCategoryContainerID);
        // If isChecked is True, Hide All Challenges
        if (isChecked) {
            selectedSection.classList.add('ChallengeCard-Hide');
            return;
        }
        // If isChecked is False, Add All Challenges back to DOM
        selectedSection.classList.remove('ChallengeCard-Hide');
    };

    // Manage Hiding and Unhiding Completed Challenges (Also Handled in ChallengeCard)
    const togglerID = activityHeader + '-completeToggler';
    const activityChallenges = document.getElementsByClassName(activityHeader);

    const handleToggleChallenges = (e) => {
        const isChecked = document.getElementById(togglerID).checked;
        // If isChecked is True, Hide Completed Challenges
        console.log(isChecked);
        if (isChecked) {
            // Loop through each returned element, check if their data set is true, and add to DOM
            for (let i = 0; i < activityChallenges.length; i++) {
                const isCompleted = activityChallenges[i].dataset.completed;
                if (isCompleted === 'true') {
                    activityChallenges[i].classList.remove('ChallengeCard-Hide');
                    activityChallenges[i].classList.add('ChallengeCard-Completed');
                }
            }
            return;
        }
        // IF isChecked is False, remove all challenges from DOM
        for (let i = 0; i < activityChallenges.length; i++) {
            const isCompleted = activityChallenges[i].dataset.completed;
            if (isCompleted === 'true') {
                activityChallenges[i].classList.add('ChallengeCard-Hide');
            }
        }
    };

    const [ ,dispatchGlobal] = useGlobalContext();

    useEffect(() => {
        if (window.location.pathname === '/weekly') {
            // console.log(document.getElementById(togglerID).checked)
            document.getElementById(togglerID).checked = true;
        }
        const activitiesContainer = document.getElementsByClassName('ChallengeCategory-Container');
        let navIDs = [];
        for (let i = 0; i < activitiesContainer.length; i++) {
            navIDs.push(activitiesContainer[i].getAttribute('id'));
        }
        dispatchGlobal({type:'updateActivityIdsNav', payload: navIDs})
    }, [togglerID, dispatchGlobal])

    return (
        <section id={props.name.replaceAll(' ', '-')} className='ChallengeCategory-Container'>
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
                    let uuid = crypto.randomUUID();
                    return (
                        // Wrap the State Provider for Individual Challenges and Pass Challenge Data to Dispatch Initial State
                        <ChallengeProvider
                            key={uuid}
                            data={{ challenge }}
                        >
                            <ChallengeCard
                                key={uuid}
                                // key={uuidv4()}
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