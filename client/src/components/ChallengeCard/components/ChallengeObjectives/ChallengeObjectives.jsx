import React from 'react';
import ObjectivesSelect from '../ObjectivesSelect/ObjectiveOptions';

const ChallengeObjectives = (props) => {

    return (
        <section>
            {props.objectives.map((obj, index) => {
                return (
                    <article key={obj.task} className='ChallengeObjectives-Obj'>
                        <input
                            id='challenge'
                            type='checkbox'
                        />
                        <p> {obj.task} </p>
                        {/* Tally Objectives */}
                        <article className='ChallengeObjectives-Obj'>
                            <ObjectivesSelect 
                                task={obj.task}
                                index={index}
                                progress={obj.progress}
                                goal={obj.goal}
                            />
                            {/* Tally Goal */}
                            {!obj.isPercent &&
                                <p>{obj.goal}</p>
                            }
                            {obj.isPercent &&
                                <p>{obj.goal}%</p>
                            }
                        </article>
                    </article>
                )

            })}
        </section>
    );
};

export default ChallengeObjectives;