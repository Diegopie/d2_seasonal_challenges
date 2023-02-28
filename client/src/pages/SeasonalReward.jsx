import React from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import { useGlobalContext } from '../context/GlobalContext';


const SeasonalReward = () => {

    // * Manually Create an Array of Objects that Correspond with the Season's Current Categories 
    const activityChallenges = [
        // [0]
        {
            name: 'Exo Frame Modules',
            challenges: []
        },
    ];

    // Manually Create Cases that Correspond with the Category's Index Value
    const handleChallenge = (category, challenge) => {
        // console.log({category, challenge});
        switch (category) {
            case 'Exo Frame Module':
                activityChallenges[0].challenges.push(challenge)
                break;
            default:
                break;
        }
    }

    // Loop Through Every Challenge in the DataBase. Add the Challenge Data To Every Category it Belongs to
    const [{parsedData}, ] = useGlobalContext();

    const sortChallenges = () => {
        parsedData.forEach((week => {
            week.challenges.forEach(challenge => {
                // console.log(challenge.category);
                
                    // console.log(activity);
                    handleChallenge(challenge.reward, challenge)
                
            })
        }))
    }

    sortChallenges();

    return (
        <>
            <main className='App-backMaxHeight'>
                <section className='App-backImg backgroundImg-SeasonalReward'>
                    {activityChallenges.map((week) => {
                        if (week.challenges.length > 0)
                            return (
                                <ChallengeCategory
                                    key={week.name}
                                    name={week.name}
                                    challenges={week.challenges}
                                />
                            )
                        return [];
                    })}
                </section>
            </main>
        </>
    );
};

export default SeasonalReward;
