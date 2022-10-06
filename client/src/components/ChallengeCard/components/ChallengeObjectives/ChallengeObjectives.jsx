import React from 'react';
import { useChallengeContext } from '../../ChallengeContext';
import ObjectiveOptions from '../ObjectiveOptions/ObjectiveOptions';
import ObjectiveToggle from '../ObjectiveToggle/ObjectiveToggle';

const ChallengeObjectives = (props) => {

    const [{name, objectives}, ] = useChallengeContext();

    return (
        <section>
            {objectives.map((obj, index) => {
                const id = name.replaceAll(' ', '-') + '-' + obj.task.replaceAll(' ', '-');
                return (
                    <article key={obj.task} className='ChallengeObjectives-Obj'>
                        {/* <input
                            id={id}
                            type='checkbox'
                            onClick={e => handleClick(id, week, index)}
                        /> */}
                        <ObjectiveToggle
                            id={id}
                            objectiveIndex={index}
                            progress={obj.progress}
                            completed={obj.completed}
                        />
                        <p> {obj.task} </p>
                        {/* Tally Objectives */}
                        <article className='ChallengeObjectives-Obj'>
                            {/* Use Prop Data Rather Than Context to Easier Mange Individual Instances of ObjectiveOptions */}
                            <ObjectiveOptions 
                                task={obj.task}
                                objectiveIndex={index}
                                progress={obj.progress}
                                goal={obj.goal}
                                completed={obj.completed}
                            />
                            {/* Tally Goal - Render a Percentage if Goal is a Percentage*/}
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