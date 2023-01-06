import React from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import localSeasonalChallenges from '../data/parsedSeasonalChallenges';
import Menu from '../layouts/Menu';


const TimeSensitive = () => {

    // * Manually Create an Array of Objects that Correspond with the Season's Current Categories 
    const activityChallenges = [
        // [0]
        {
            name: 'Time Sensitive Challenges',
            challenges: []
        }
    ];

    // Manually Create Cases that Correspond with the Category's Index Value
    const handleChallenge = (category, challenge) => {
        // console.log({category, challenge});
        switch (category) {
            case 'Time':
                activityChallenges[0].challenges.push(challenge)
                break;
            default:
                break;
        }
    }

    // Loop Through Every Challenge in the DataBase. Add the Challenge Data To Every Category it Belongs to
    const sortChallenges = () => {
        localSeasonalChallenges.forEach((week => {
            week.challenges.forEach(challenge => {
                // console.log(challenge.category);
                challenge.category.forEach((activity => {
                    // console.log(activity);
                    handleChallenge(activity, challenge)
                }))
            })
        }))
    }

    sortChallenges();

    return (
        <>
            <Menu />
            <main className='App-backMaxHeight'>
                <section className='App-backImg backgroundImg-04'>
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

export default TimeSensitive;
