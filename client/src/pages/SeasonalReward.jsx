import { useEffect, useState } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import { useGlobalContext } from '../context/GlobalContext';


const SeasonalReward = () => {

    const [season20Data, setSeason20Data] = useState([]);

    const [{ parsedData }, ] = useGlobalContext();
    // const [ count, setCount ] = useState(0)

    useEffect(() => {
        parsedData
            .then(data => {
                setSeason20Data(data);
            })
    }, [parsedData])

    // * Manually Create an Array of Objects that Correspond with the Season's Current Categories 
    const activityChallenges = [
        // [0]
        {
            name: 'War Table Upgrade',
            challenges: []
        },
    ];

    // Manually Create Cases that Correspond with the Category's Index Value
    const handleChallenge = (category, challenge) => {
        // console.log({category, challenge});
        switch (category) {
            case 'War Table Upgrade':
                activityChallenges[0].challenges.push(challenge)
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
                    handleChallenge(challenge.reward, challenge)
                
            })
        }))
    }

    sortChallenges();

    return (
        <>
            <main id='main' className='App-backMaxHeight'>
                <section className='App-backImg backgroundImg-SeasonalReward App-PushBottomUp'>
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
