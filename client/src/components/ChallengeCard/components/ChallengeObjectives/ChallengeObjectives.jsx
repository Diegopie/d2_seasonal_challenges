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
                    <article key={obj.task} className='ChallengeObjectives-Body'>
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
                        <p className='ChallengeObjectives-Task'> {obj.task} </p>
                        {/* Tally Objectives */}
                        <article className='ChallengeObjectives-OptionsContainer'>
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
                                <p className='ChallengeObjectivePercentage'>{obj.goal}</p>
                            }
                            {obj.isPercent &&
                                <p className='ChallengeObjectivePercentage'>{obj.goal}%</p>
                            }
                        </article>
                    </article>
                )

            })}
        </section>
    );
};

export default ChallengeObjectives;