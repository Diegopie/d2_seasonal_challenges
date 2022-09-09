import React from 'react';
import { useChallengeContext } from '../../ChallengeContext';
import ObjectivesSelect from '../ObjectiveOptions/ObjectiveOptions';

const ChallengeObjectives = (props) => {

    const [{objectives}, ] = useChallengeContext()



    return (
        <section>
            {objectives.map((obj, index) => {
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