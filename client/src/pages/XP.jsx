import { useState } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import img from '../assets/production/background-img/background_XP.jpg';
import { useGlobalContext } from '../context/GlobalContext';


const XP = () => {

    const [smallClass, setSmallClass] = useState('backgroundImg-XP-small');

    const [{ parsedData },] = useGlobalContext();
    // const [ count, setCount ] = useState(0)

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
        parsedData.forEach((week => {
            week.challenges.forEach(challenge => {
                // console.log(challenge.category);

                // console.log(activity);
                handleChallenge(challenge.xp, challenge)

            })
        }))
    }

    sortChallenges();

    return (
        <main id='main' className='App-backMaxHeight'>
            <section className={`App-backImg ${smallClass} backgroundImg-XP App-PushBottomUp`}>
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

export default XP;
