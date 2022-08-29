import React from 'react';
import './ChallengeCard.css';

const ChallengeCard = (props) => {

    return (
        <section className='ChallengeCard-Container'>
                    <article className='ChallengeCard-Header'>
                        <h3>Challenge Name</h3>
                    </article>
                    <section className='ChallengeCard-Body'>
                        <article>
                            <p>Challenge description</p>
                        </article>
                        <section>
                            <article className='ChallengeCardObjective-Obj'>
                                <input
                                    id='challenge'
                                    type='checkbox'
                                />
                                <p> Treasure Chests unlocked</p>
                            </article>
                            <article className='ChallengeObjective-Obj'>
                                <input
                                    id='challenge'
                                    type='checkbox'
                                />
                                <p>Plundered Umbral Energy</p>
                                <article className='ChallengeObjective-Obj'>
                                    <select id='challenge progress' value=''>
                                        <option disabled>Your Progress</option>
                                        <option>0</option>
                                        <option>1</option>
                                    </select>
                                    <p>3</p>
                                </article>
                            </article>
                        </section>
                        <section>
                            <h4>Rewards</h4>
                            <p>Repute</p>
                            <p>Challenger XP</p>
                        </section>
                    </section>
                </section>
    );
};

export default ChallengeCard;