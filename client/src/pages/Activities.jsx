import React from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import localSeasonalChallenges from '../data/parsedSeasonalChallenges';
import Menu from '../layouts/Menu';


const Activities = () => {

    // * Manually Create an Array of Objects that Correspond with the Season's Current Categories 
    const activityChallenges = [
        // [0]
        {
            name: 'More Than A Weapon',
            challenges: []
        },
        // [1]
        {
            name: 'Heist Battlegrounds',
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
            name: 'Destination - Moon',
            challenges: []
        },
        // [9]
        {
            name: 'Destination - Cosmodrome',
            challenges: []
        },
        // [10]
        {
            name: 'Destination - Europa',
            challenges: []
        },
    ];

    // Manually Create Cases that Correspond with the Category's Index Value
    const handleChallenge = (category, challenge) => {
        // console.log({category, challenge});
        switch (category) {
            case 'More Than A Weapon':
                activityChallenges[0].challenges.push(challenge)
                break;
            case 'Heist Battlegrounds':
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
            case 'Moon':
                activityChallenges[8].challenges.push(challenge)
                break;
            case 'Cosmodrome':
                activityChallenges[9].challenges.push(challenge)
                break;
            case 'Europa':
                activityChallenges[10].challenges.push(challenge)
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
                <section className='App-backImg backgroundImg-02'>
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

export default Activities;
