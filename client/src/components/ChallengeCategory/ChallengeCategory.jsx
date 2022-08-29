import React from 'react';
import ChallengeCard from '../ChallengeCard/ChallengeCard/ChallengeCard';
import './ChallengeCategory.css';

const ChallengeCategory = (props) => {

    const objectives = [
        {
            isPercent: false,
            task: "Treasure Chest Unlocked",
            progress: "0",
            goal: 50,
            completed: false,
        },
        {
            isPercent: true,
            task: "Plundered Umbral Energy",
            progress: "0",
            goal: 100,
            completed: false,
        },
    ]

    return (
        <section className='ChallengeCategory-Container'>
            <article className='ChallengeCategory-Header'>
                <h2>Week One</h2>
            </article>
            <section className='ChallengeCategory-Body'>
               <ChallengeCard 
                    name="Successful Expedition"
                    desc="Obtain Plundered Umbral Energy from bonus chests in Expedition"
                    objectives={objectives}
                    reward="Repute"
                    xp="Tier1"
                    dust={null}
               />
            </section>
        </section>
    );
};

export default ChallengeCategory;