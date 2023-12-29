import { useEffect, useState } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import img from '../assets/production/background-img/background_Activities.jpg';
import { useGlobalContext } from '../context/GlobalContext';


const Activities = () => {

    const [smallClass, setSmallClass] = useState('backgroundImg-Activities-small');

    const [{ parsedData },] = useGlobalContext();

    const [seasonData, setSeasonData] = useState(parsedData);

    useEffect(() => {
        setSeasonData(parsedData)
    },[parsedData])

    // * Manually Create an Array of Objects that Correspond with the Season's Current Categories 
    const activityChallenges = [
        {
            name: 'Loadout',
            challenges: []
        },
        {
            name: "Riven's Lair / The Coil",
            challenges: []
        },
        // {
        //     name: 'Altars of Summoning',
        //     challenges: []
        // },
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
            name: 'Destination - Dreaming City',
            challenges: []
        },
        {
            name: 'Destination - EDZ',
            challenges: []
        },
        {
            name: 'Destination - Neomuna',
            challenges: []
        },
        {
            name: 'Destination - Throne World',
            challenges: []
        },
    ];

    // Manually Create Cases that Correspond with the Category's Index Value
    const handleChallenge = (category, challenge, index) => {
        // console.log({category, challenge});
        switch (category) {
            // case "Savathûn's Spire":
            //     activityChallenges[index].challenges.push(challenge)
            //     break;
            case 'The Coil':
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
            case 'Ritual':
                activityChallenges[findActivityIndex("Gambit")].challenges.push(challenge);
                activityChallenges[findActivityIndex("PvP")].challenges.push(challenge);
                activityChallenges[findActivityIndex("Vanguard")].challenges.push(challenge);
                break;
            case 'Guardians':
                activityChallenges[findActivityIndex("Gambit")].challenges.push(challenge);
                activityChallenges[findActivityIndex("PvP")].challenges.push(challenge);
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
            case 'Dreaming City':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'EDZ':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'Neomuna':
                activityChallenges[index].challenges.push(challenge)
                break;
            case 'Throne World':
                activityChallenges[index].challenges.push(challenge)
                break;
            default:
                break;
        }
    }

    const findActivityIndex = (arg) => {
        let activityIndex;

        activityChallenges.forEach((category, index) => {
            if (category.name.includes(arg)) {
                activityIndex = index;
            }
        })
        return activityIndex;
    };

    // Loop Through Every Challenge in the DataBase. Add the Challenge Data To Every Category it Belongs to

    const sortChallenges = () => {
        // * Loop through each week
        seasonData.forEach((week => {
            // * Loop through each challenge in a week
            week.challenges.forEach(challenge => {
                // * Loop through each activity in the category array for a given challenge
                challenge.category.forEach((activity => {
                    handleChallenge(activity, challenge, findActivityIndex(activity))
                }))
            })
        }))
    }

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
