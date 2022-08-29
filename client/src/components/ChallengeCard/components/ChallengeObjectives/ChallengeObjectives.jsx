import React from 'react';

const ChallengeObjectives = (props) => {

    console.log(props.objectives);

    return (
        <section>
            {props.objectives.map((obj) => {
                return (
                    <article className='ChallengeObjectives-Obj'>
                        <input
                            id='challenge'
                            type='checkbox'
                        />
                        <p> {obj.task} </p>
                        {/* Tally Objectives */}
                        {!obj.isPercent &&
                            <article className='ChallengeObjectives-Obj'>
                                <select id='challenge progress' value=''>
                                    <option disabled>Your Progress</option>
                                    {[...Array((obj.goal+1))].map((num, i) => {
                                        return (<option key={i} >{i}</option>)
                                    })}
                                </select>
                                <p>{obj.goal}</p>
                            </article>
                        }
                        {/* Percentage Objectives */}
                        {obj.isPercent &&
                            <article className='ChallengeObjectives-Obj'>
                                <select id='challenge progress' value=''>
                                    <option disabled>Your Progress</option>
                                    <option>0</option>
                                    <option>1</option>
                                </select>
                                <p>3</p>
                            </article>
                        }
                    </article>
                )

            })}
            <article className='ChallengeObjectives-Obj'>
                <input
                    id='challenge'
                    type='checkbox'
                />
                <p> Treasure Chests unlocked</p>
            </article>
            <article className='ChallengeObjectives-Obj'>
                <input
                    id='challenge'
                    type='checkbox'
                />
                <p>Plundered Umbral Energy</p>
                <article className='ChallengeObjectives-Obj'>
                    <select id='challenge progress' value=''>
                        <option disabled>Your Progress</option>
                        <option>0</option>
                        <option>1</option>
                    </select>
                    <p>3</p>
                </article>
            </article>
        </section>
    );
};

export default ChallengeObjectives;