import React from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import localSeasonalChallenges from '../data/parsedSeasonalChallenges';;

const Activities = () => {

    const activityChallenges = [
        // [0]
        {
            name: 'Expedition',
            challenges: []
        },
        // [1]
        {
            name: 'Ketchcrash',
            challenges: []
        },
        // [2]
        {
            name: 'Gambit',
            challenges: []
        },
        // [3]
        {
            name: 'PvP',
            challenges: []
        },
        // [4]
        {
            name: 'Vanguard',
            challenges: []
        },
        // [5]
        {
            name: 'Activities',
            challenges: []
        },
        // [6]
        {
            name: 'Loadout',
            challenges: []
        },
        // [7]
        {
            name: 'Gear',
            challenges: []
        },
        // [8]
        {
            name: 'Destination - Europa',
            challenges: []
        },
    ];

    const handleChallenge = (category, challenge) => {
        // console.log({category, challenge});
        switch (category) {
            case 'Expedition':
                activityChallenges[0].challenges.push(challenge)
                break;
            case 'Ketchcrash':
                activityChallenges[1].challenges.push(challenge)
                break;
            case 'Gambit':
                activityChallenges[2].challenges.push(challenge)
                break;
            case 'PvP':
                activityChallenges[3].challenges.push(challenge)
                break;
            case 'Vanguard':
                activityChallenges[4].challenges.push(challenge)
                break;
            case 'Activities':
                activityChallenges[5].challenges.push(challenge)
                break;
            case 'Loadout':
                activityChallenges[6].challenges.push(challenge)
                break;
            case 'Gear':
                activityChallenges[7].challenges.push(challenge)
                break;
            case 'Europa':
                activityChallenges[7].challenges.push(challenge)
                break;
            default:
                break;
        }
    }

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
        <main className='App-backMaxHeight'>
            <section className='App-backImg App-backImg-1-light'>
                {activityChallenges.map((week) => {
                    console.log(week);
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
    );
};

export default Activities;
