import React from 'react';
import ObjectiveProgressHook from '../../ObjectiveProgressHook';

const ChallengeObjectives = (props) => {

    const objectivesArray = props.objectives.map(obj => {
        return obj.progress;
    })

    console.log(objectivesArray);

    const [objectiveProgress, setObjectiveProgress] = ObjectiveProgressHook(objectivesArray);

    console.log({objectiveProgress});

    const handleSelect = (e) => {
        console.log("Hit Handle Select");
        console.dir(e.target.id);
        
    }

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
                            <select id={index} value={objectiveProgress[index]} onChange={handleSelect}>
                                <option key='default' disabled>Your Progress</option>
                                {[...Array((obj.goal + 1))].map((num, i) => {
                                    return (<option key={i} value={i} >{i}</option>)
                                })}
                            </select>
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