import React from 'react';
import ChallengeCard from '../ChallengeCard/ChallengeCard/ChallengeCard';
import './ChallengeCategory.css';

const ChallengeCategory = (props) => {

    return (
        <section className='ChallengeCategory-Container'>
            <article className='ChallengeCategory-Header'>
                <h2>Week One</h2>
            </article>
            <section className='ChallengeCategory-Body'>
               <ChallengeCard />
               <ChallengeCard />
               <ChallengeCard />
               <ChallengeCard />
            </section>
        </section>
    );
};

export default ChallengeCategory;