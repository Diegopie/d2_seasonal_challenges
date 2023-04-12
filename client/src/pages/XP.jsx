import { useState } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import { useGlobalContext } from '../context/GlobalContext';


const XP = () => {

    const [season20Data, setSeason20Data] = useState([]);

    const [{ parsedData },] = useGlobalContext();
    // const [ count, setCount ] = useState(0)

    parsedData
        .then(data => {
            setSeason20Data(data)
        })

    // * Manually Create an Array of Objects that Correspond with the Season's Current Categories 
    const activityChallenges = [
        // [0]
        {
            name: 'Challenger XP',
            challenges: []
        },
        // [1]
        {
            name: 'Challenger XP+',
            challenges: []
        },
        // [2]
        {
            name: 'Challenger XP++',
            challenges: []
        }
    ];

    // Manually Create Cases that Correspond with the Category's Index Value
    const handleChallenge = (category, challenge, index) => {
        // console.log({category, challenge});
        switch (category) {
            case 'Challenger XP':
                activityChallenges[0].challenges.push(challenge)
                break;
            case 'Challenger XP+':
                activityChallenges[1].challenges.push(challenge)
                break;
            case 'Challenger XP++':
                activityChallenges[2].challenges.push(challenge)
                break;
            default:
                break;
        }
    }


    const sortChallenges = () => {
        season20Data.forEach((week => {
            week.challenges.forEach(challenge => {
                // console.log(challenge.category);
                
                    // console.log(activity);
                    handleChallenge(challenge.xp, challenge)
                
            })
        }))
    }

    sortChallenges();

    return (
        <>
            <main className='App-backMaxHeight'>
                <section className='App-backImg backgroundImg-XP'>
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

export default XP;
