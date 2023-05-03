import { useEffect, useState } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import { useGlobalContext } from '../context/GlobalContext';


const Activities = (props) => {

    const [season20Data, setSeason20Data] = useState([]);

    const [{ parsedData }, ] = useGlobalContext();

    // * Manually Create an Array of Objects that Correspond with the Season's Current Categories 
    const activityChallenges = [
        {
            name: 'Loadout',
            challenges: []
        },
        {
            name: 'Defiant Battleground',
            challenges: []
        },
        {
            name: 'Gambit',
            challenges: []
        },
        {
            name: 'PvP',
            challenges: []
        },
        {
            name: 'Vanguard',
            challenges: []
        },
        {
            name: 'Activities',
            challenges: []
        },

        {
            name: 'Gear',
            challenges: []
        },
        {
            name: 'Destination - Neomuna',
            challenges: []
        },
        {
            name: 'Destination - Cosmodrome',
            challenges: []
        },
        {
            name: 'Destination - EDZ',
            challenges: []
        },
    ];

    // Manually Create Cases that Correspond with the Category's Index Value
    const handleChallenge = (category, challenge, index) => {
        // console.log({category, challenge});
        switch (category) {
            case 'Defiant Battleground':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'Gambit':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'PvP':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'Vanguard':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'Activities':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'Loadout':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'Gear':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'Neomuna':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'Cosmodrome':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'EDZ':
                activityChallenges[index].challenges.push(challenge)
                break;
            default:
                break;
        }
    }

    const findActivityIndex = (arg) => {
        let activityIndex;

        activityChallenges.forEach((category, index) => {
            // console.log(category.name);
            if (category.name.includes(arg)) {
                // console.log(index);
                activityIndex = index;
            }
        })
        return activityIndex;
    };

    // Loop Through Every Challenge in the DataBase. Add the Challenge Data To Every Category it Belongs to

    const sortChallenges = () => {
        // * Loop through each week
        season20Data.forEach((week => {
            // * Loop through each challenge in a week
            week.challenges.forEach(challenge => {
                // console.log(challenge.category);
                // * Loop through each activity in the category array for a given challenge
                challenge.category.forEach((activity => {
                    // console.log(activity);
                    handleChallenge(activity, challenge, findActivityIndex(activity))
                }))
            })
        }))
    }

    useEffect(() => {
        parsedData
            .then(data => {
                setSeason20Data(data)
            });
    }, [parsedData])

    sortChallenges();

    return (
        <>
            <main id='main' className='App-backMaxHeight'>
                <section className='App-backImg backgroundImg-Activities'>
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
            {/* <FootNav /> */}
        </>
    );
};

export default Activities;
