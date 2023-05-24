import React, { useEffect } from 'react';
import { useChallengeContext } from './ChallengeContext';
import ChallengeObjectives from './components/ChallengeObjectives';
import ChallengeReward from './components/ChallengeReward';
import './ChallengeCard.css';
import { updateServerData } from '../../api/server-data';

const ChallengeCard = (props) => {

    const [{ completed, challengeIndex, description, name, objectives, week }, dispatch] = useChallengeContext();



    // *** { THIS IS BEING DOUBLED FOR SOME REASON }
    // * On Mount and State Change, Determine Which Challenges are Completed, Increment and Update DOM Value if/when value becomes not Completed, Decrement Value if/when it becomes completed
    // useEffect(() => {
    //     const challengesRemaining = document.getElementById(props.challengesRemainingID);
    //     if (!completed) {
    //         challengesRemaining.innerText = parseInt(challengesRemaining.innerText) + 1;

    //     }
    //     if (completed) {
    //         // ** Prevent DOM Value from becoming negative
    //         if (parseInt(challengesRemaining.innerText) === 0) return;
    //         challengesRemaining.innerText = parseInt(challengesRemaining.innerText) - 1;
    //     }
    // }, [completed, props.challengesRemainingID]);

    // * On Mount and State Change, Monitor if All Objectives Have Been Completed and Mark The Challenge Complete or Not Complete
    useEffect(() => {
        // ** Store The Amount of Objectives to Complete; Have a Number that Can Increment If A Challenge Is COmplete; Loop Through the Length of the Objectives Array to Increment When Any Objective is Completed
        const objectivesToComplete = objectives.length;
        let totalObjectivesCompleted = 0;
        for (let i = 0; i < objectivesToComplete; i++) {
            if (objectives[i].completed) {
                // console.log("hit");
                totalObjectivesCompleted++;
            }
        }

        // Handle Updating LocalStorage and State
        const updateLocalAndState = (isComplete) => {
            // * Update Local Storage and Parse Local With Mutable Variable
            const getLocal = localStorage.getItem(week);
            const newLocal = JSON.parse(getLocal);
            // ** Use Challenge Index From ChallengeState to Find the Correct Challenge and objectiveIndex to find the Correct Objective
            const currentTask = newLocal[challengeIndex]
            currentTask.completed = isComplete;
            // ** Store the Mutated Array in Local Storage and Dispatch Values to State for Data to Persist Between Pages
            localStorage.setItem(week, JSON.stringify(newLocal));
            dispatch({ type: 'setCompletedChallenge', payload: { completedChallenge: isComplete } });
            
        };

        // ** If Our Incremented Value is Equal to the Total Number of Objectives, The Challenge Is Marked Complete In State and Local Storage; {NOTE: State is coming in as a 0 Value on initial mount. I do not know why but preventing these condition to run when objectives are loaded as 0 prevents crashes}
        const isChecked = document.getElementById(props.togglerID).checked;
        const currentContainer = document.getElementsByClassName(name.replaceAll(' ', '-'));

        if (totalObjectivesCompleted === objectivesToComplete && objectivesToComplete !== 0) {
            // *** Update Local Storage and State with True Values
            updateLocalAndState(true);
            updateServerData();
            // *** Check if User Selected to Hide Completed Challenges. if True, hide from DOM
            // {Note: I'm having an issue where the initial state for currentContainer data is null, as the app crashes here. Returning the function if null prevents crashes then assumes desired functionality}
            if (currentContainer === null) return;
            console.log(currentContainer);

            // Loop to Add 
            for (let i = 0; i < currentContainer.length; i++) {
                currentContainer[i].classList.add('ChallengeCard-Completed'); 
            }
            
            if (isChecked) return;
            // setTimeout(() => {
            for (let i = 0; i < currentContainer.length; i++) {
                currentContainer[i].classList.add('ChallengeCard-Hide'); 
            }


            // ** If Objectives are Not All Done, or Have Been Unmarked as Complete, Store the Mutated Array in Local Storage and Dispatch Values to State for Data to Persist Between Pages
        } else if (totalObjectivesCompleted !== objectivesToComplete && objectivesToComplete !== 0) {
            // *** Update Local Storage and State with False Values
            updateLocalAndState(false);
            if (currentContainer === null) return;
            for (let i = 0; i < currentContainer.length; i++) {
                currentContainer[i].classList.remove('ChallengeCard-Hide', 'ChallengeCard-Completed');
                
            }
        }

    }, [completed, challengeIndex, dispatch, name, objectives, props.togglerID, week]);

    const isActivities = window.location.pathname.includes('/');

    return (
        <section className={`ChallengeCard-Container ${props.activityHeader} ${name.replaceAll(' ', '-')} App-DropShadow-2`} id={name.replaceAll(' ', '-')} data-completed={completed}>
            {/* NAME */}
            <article className='ChallengeCard-Header App-FlexCenter'>
                {isActivities &&
                    <h3>{name + " - " + week.replaceAll('-', ' ')}</h3>
                }
                {!isActivities &&
                    <h3>{name}</h3>
                }
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