import React, { useEffect } from 'react';
import { useChallengeContext } from './ChallengeContext';
import ChallengeObjectives from './components/ChallengeObjectives';
import ChallengeReward from './components/ChallengeReward';
import './ChallengeCard.css';
import { updateServerData } from '../../api/server-data';
import useComponentDidUpdate from '../../hooks/useComponentDidUpdate';

const ChallengeCard = (props) => {

    const [{ completed, challengeIndex, description, name, objectives, week }, dispatch] = useChallengeContext();

    // {NOTE} WHAT IF WE ADD A STATE TO CHALLENGE CONTEXT THAT HAS THE TOTAL NUMBER OF CHALLENGES AND A FUNCTION TO UPDATE SERVER AND LOCAL WHEN THE CHANGE HAPPENS, THIS WAY WE CAN MAKE THE COMPARESON ON TOGGLE INSTEAD OF ON USEEFFECT

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

    // {thought} What if this check happens when we complete an objective? We could make a hook that handles updating an objectives complete key to use in ObjectiveToggle and Options. This hook could then do the work of checking if all objectives are complete. If true, it can update the challenges' complete key then we only need one get req to manage both and we can remove all this code found here
    useEffect(() => {
        // ** Store The Amount of Objectives to Complete; Have a Number that Can Increment If A Challenge Is COmplete; Loop Through the Length of the Objectives Array to Increment When Any Objective is Completed
        const totalObjectives = objectives.length;
        let totalObjectivesCompleted = 0;
        for (let i = 0; i < totalObjectives; i++) {
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
            // ** Use Challenge Index From ChallengeState to Find the Correct Challenge
            const currentChallenge = newLocal[challengeIndex]
            currentChallenge.completed = isComplete;
            // ** Store the Mutated Array in Local Storage and Dispatch Values to State for Data to Persist Between Pages
            localStorage.setItem(week, JSON.stringify(newLocal));
            dispatch({ type: 'setCompletedChallenge', payload: { completedChallenge: isComplete } });

        };

        if (totalObjectivesCompleted === totalObjectives && totalObjectives !== 0) {
            // *** Update Local Storage and State with True Values
            updateLocalAndState(true);
            // updateServerData();

            // ** If Objectives are Not All Done, or Have Been Unmarked as Complete, Store the Mutated Array in Local Storage and Dispatch Values to State for Data to Persist Between Pages
        } else if (totalObjectivesCompleted !== totalObjectives && totalObjectives !== 0) {
            // *** Update Local Storage and State with False Values
            updateLocalAndState(false);
            // updateServerData();
        }

    }, [dispatch, challengeIndex, objectives, week]);


    const isWeekly = window.location.pathname.includes('/weekly');

    return (
        <section className={
            `ChallengeCard-Container ${props.activityHeader} ${name.replaceAll(' ', '-')} App-DropShadow-2 ${completed ? 'ChallengeCard-Completed' : ''}`
        } id={name.replaceAll(' ', '-')} data-completed={completed}>
            {/* NAME */}
            <article className='ChallengeCard-Header App-FlexCenter'>
                {!isWeekly &&
                    <h3>{name + " - " + week.replaceAll('-', ' ')}</h3>
                }
                {isWeekly &&
                    <h3>{name}</h3>
                }
            </article>
            <section className='ChallengeCard-Body'>
                {/* Description */}
                <article>
                    <p>{description}</p>
                </article>
                {/* Objectives */}
                <ChallengeObjectives />
                {/* Rewards */}
                <ChallengeReward />
            </section>
        </section>
    );
};

export default ChallengeCard;