import React from 'react';
import { useChallengeContext } from '../../ChallengeContext';
import ObjectivesSelect from '../ObjectiveOptions/ObjectiveOptions';

const ChallengeObjectives = (props) => {

    const [challengeState, ] = useChallengeContext()

    const {name, objectives} = challengeState;

    console.log(challengeState);

    // ** MOVING SETTING LOCAL HER BREAKS THE REST OF THE CONTEXT
    const getLocal = (index) => {
        const getLocal = localStorage.getItem(name.replaceAll(' ', '-'));
        if (getLocal === null) {
            // console.log(getLocal);
            localStorage.setItem(name.replaceAll(' ', '-'), JSON.stringify(challengeState));
            return 0;
        }
        
        const progress = JSON.parse(getLocal).objectives[index].progress;
        console.log(progress);
        return progress
    }

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
                                progress={getLocal(index)}
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