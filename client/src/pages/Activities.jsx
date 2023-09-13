import { useEffect, useState } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import img from '../assets/production/background-img/background_Activities.jpg';
import { useGlobalContext } from '../context/GlobalContext';


const Activities = (props) => {

    const [season20Data, setSeason20Data] = useState([]);

    const [smallClass, setSmallClass] = useState('backgroundImg-Activities-small');

    const [{ parsedData },] = useGlobalContext();

    // * Manually Create an Array of Objects that Correspond with the Season's Current Categories 
    const activityChallenges = [
        {
            name: 'Loadout',
            challenges: []
        },
        {
            name: "Savathûn's Spire",
            challenges: []
        },
        {
            name: 'Altars of Summoning',
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
            name: 'Destination - EDZ',
            challenges: []
        },
        {
            name: 'Destination - Throne World',
            challenges: []
        },
        {
            name: 'Destination - Nessus',
            challenges: []
        },
        {
            name: 'Destination - Neomuna',
            challenges: []
        },
    ];

    // Manually Create Cases that Correspond with the Category's Index Value
    const handleChallenge = (category, challenge, index) => {
        // console.log({category, challenge});
        switch (category) {
            case 'Deep Dive':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'Salvage':
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
            case 'Throne World':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'Nessus':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'EDZ':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'Neomuna':
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
                <section className={`App-backImg ${smallClass} backgroundImg-Activities App-PushBottomUp`}>
                    <img src={img} alt='invisible img' className='App-Invisible-Img'
                        onLoad={() => {
                            setSmallClass('');
                        }}
                    />
                    {activityChallenges.map((week) => {
                        if (week.challenges.length > 0)
                            return (
                                <ChallengeCategory
                                    key={week.name}
                                    name={week.name.replaceAll(' ', '-')}
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
