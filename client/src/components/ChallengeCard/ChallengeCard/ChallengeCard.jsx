import React from 'react';
import './ChallengeCard.css';

const ChallengeCard = (props) => {

    return (
        <section className='ChallengeCard-Container'>
                    {/* NAME */}
                    <article className='ChallengeCard-Header'>
                        <h3>{props.name}</h3>
                    </article>
                    <section className='ChallengeCard-Body'>
                        {/* Description */}
                        <article>
                            <p>{props.desc}</p>
                        </article>
                        {/* Objectives */}
                        <section>
                            {/* ObjOne  */}
                            <article className='ChallengeObjective-Obj'>
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
                            { props.reward &&
                                <p>{props.reward}</p>
                            }
                            { props.xp &&
                                <p>{props.xp}</p>
                            }
                            { props.dust &&
                                <p>{props.dust}</p>
                            }
                        </section>
                    </section>
                </section>
    );
};

export default ChallengeCard;