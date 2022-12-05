import React, { useEffect } from 'react';
import { useChallengeContext } from '../ChallengeContext';
import ChallengeObjectives from '../components/ChallengeObjectives/ChallengeObjectives';
import ChallengeReward from '../components/ChallengeReward/ChallengeReward';
import './ChallengeCard.css';

const ChallengeCard = (props) => {

    const [{ completed, challengeIndex, description, name, objectives, week }, dispatch] = useChallengeContext();

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

        // ** If Our Incremented Value is Equal to the Total Number of Objectives, The Challenge Is Marked Complete In State and Local Storage; {NOTE: State is coming in as a 0 Value on initial mount. I do not know why but preventing these condition to run when objectives are loaded as 0 prevents crashes}
        if (totalObjectivesCompleted === objectivesToComplete && objectivesToComplete !== 0) {
            // * Update Local Storage and Parse Local With Mutable Variable
            const getLocal = localStorage.getItem(week);
            const newLocal = JSON.parse(getLocal);
            // ** Use Challenge Index From ChallengeState to Find the Correct Challenge and objectiveIndex to find the Correct Objective
            const currentTask = newLocal[challengeIndex]
            currentTask.completed = true;
            // ** Store the Mutated Array in Local Storage and Dispatch Values to State for Data to Persist Between Pages
            localStorage.setItem(week, JSON.stringify(newLocal));
            dispatch({ type: 'setCompletedChallenge', payload: { completedChallenge: true } });

        // ** If Objectives are Not All Done, or Have Been Unmarked as Complete, Store the Mutated Array in Local Storage and Dispatch Values to State for Data to Persist Between Pages
        } else if ( totalObjectivesCompleted !== objectivesToComplete && objectivesToComplete !== 0) {
            const getLocal = localStorage.getItem(week);
            const newLocal = JSON.parse(getLocal);
            const currentTask = newLocal[challengeIndex]
            currentTask.completed = false;
            localStorage.setItem(week, JSON.stringify(newLocal));
            dispatch({ type: 'setCompletedChallenge', payload: { completedChallenge: false } });
        }
    }, [completed, challengeIndex, dispatch, objectives, week])

    return (
        <section className='ChallengeCard-Container'>
            {/* NAME */}
            <article className='ChallengeCard-Header'>
                <h3>{name}</h3>
                {completed === true &&
                    <p>Completed!</p>
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