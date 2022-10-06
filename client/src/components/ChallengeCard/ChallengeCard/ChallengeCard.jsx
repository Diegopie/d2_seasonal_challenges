import React from 'react';
import { useChallengeContext } from '../ChallengeContext';
import ChallengeObjectives from '../components/ChallengeObjectives/ChallengeObjectives';
import ChallengeReward from '../components/ChallengeReward/ChallengeReward';
import './ChallengeCard.css';

const ChallengeCard = (props) => {

    const [{name, description, objectives}, ] = useChallengeContext();


    // TODO: compare the total number of objectives to the total number of completed objectives by tallying a number
    // console.log(objectives);
    // const objectivesToComplete = objectives.length;
    // let totalObjectivesCompleted = 0;
    // for (let i = 0; i < objectivesToComplete; i++) {
    //     if(objectives[i].completed) {
    //         console.log("hit");
    //         totalObjectivesCompleted++;
    //     }        
    // }
    // console.log(totalObjectivesCompleted);

    return (
        <section className='ChallengeCard-Container'>
            {/* NAME */}
            <article className='ChallengeCard-Header'>
                <h3>{name}</h3>
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