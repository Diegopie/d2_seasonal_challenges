// import { useEffect } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import { useGlobalContext } from '../context/GlobalContext';



const Activities = () => {

   

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
    const [{parsedData}, ] = useGlobalContext();
    // console.log(parsedData[0].challenges[3].objectives);

    const sortChallenges = () => {
        // * Loop through each week
        parsedData.forEach((week => {
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

    
       
        sortChallenges()
    
// useEffect(() => {
//     // I want the sorter to run in useEffect to update on every run but it wont do it
// console.log('why no?');
// console.log(parsedData);
// }, [parsedData])
    

    
    // console.log(findActivityIndex('Europa'));

    return (
        <>
            <main className='App-backMaxHeight'>
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
        </>
    );
};

export default Activities;
