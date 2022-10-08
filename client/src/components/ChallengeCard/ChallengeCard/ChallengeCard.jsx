import React, { useEffect } from 'react';
import { useChallengeContext } from '../ChallengeContext';
import ChallengeObjectives from '../components/ChallengeObjectives/ChallengeObjectives';
import ChallengeReward from '../components/ChallengeReward/ChallengeReward';
import './ChallengeCard.css';

const ChallengeCard = (props) => {

    const [{ name, description, objectives, completed }, dispatch] = useChallengeContext();



    // TODO: compare the total number of objectives to the total number of completed objectives by tallying a number


    useEffect(() => {
        // console.log({name});
        // console.log(objectives);
        // console.log({ completed });
        const objectivesToComplete = objectives.length;
        let totalObjectivesCompleted = 0;
        for (let i = 0; i < objectivesToComplete; i++) {
            if (objectives[i].completed) {
                // console.log("hit");
                totalObjectivesCompleted++;
            }
        }
        // console.log("-- After ++ ");
        // console.log({ name });
        // console.log({ totalObjectivesCompleted });
        // console.log({ objectivesToComplete });
        // console.log(totalObjectivesCompleted === objectivesToComplete);

        // TODO: add in the not zero condition fixed crashes - now we should probably check if completed it true at the very top so this code does not need to run and it just renders completed
        // TODO: add local storage update
        if (totalObjectivesCompleted === objectivesToComplete && objectivesToComplete!== 0) {
            console.log("how here??");
            // console.log("-- Complete Condition --");
            // console.log({ name });
            // console.log(objectives);
            // console.log({ completed });
            dispatch({ type: 'setCompletedObjective', payload: { completedObjective: true } });
        } else {
            dispatch({ type: 'setCompletedObjective', payload: { completedObjective: false } });
        }
    }, [dispatch, objectives])

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