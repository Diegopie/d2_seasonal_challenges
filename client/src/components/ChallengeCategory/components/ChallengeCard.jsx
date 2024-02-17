import React from 'react';
import { useChallengeContext } from '../context/ChallengeContext.js';
import ChallengeObjectives from './ChallengeObjectives';
import ChallengeReward from './ChallengeReward';
import './ChallengeCard.css';

const ChallengeCard = (props) => {

    const [{ completed, description, name, week }, ] = useChallengeContext();

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


    const isWeekly = window.location.pathname.includes('/weekly');

    const nameToRender = isWeekly ? <h3>{name}</h3> : <h3>{name + " - " + week.replaceAll('-', ' ')}</h3>;

    return (
        <section className={
            `ChallengeCard-Container ${props.activityHeader} ${name.replaceAll(' ', '-')} App-DropShadow-2 ${completed ? 'ChallengeCard-Completed' : ''}`
        } id={name.replaceAll(' ', '-')} data-completed={completed}>
            {/* NAME */}
            <article className='ChallengeCard-Header App-FlexCenter'>
                { name || week ?
                    nameToRender
                    : null
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