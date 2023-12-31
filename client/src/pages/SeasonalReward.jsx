import { useState } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
// import img from '../assets/production/background-img/background_SeasonalReward.jpg';
import img from '../assets/production/background-img/background_Time.jpg';
import { useGlobalContext } from '../context/GlobalContext';


const SeasonalReward = () => {

    const [smallClass, setSmallClass] = useState('backgroundImg-SeasonalReward-small');

    const [{ parsedData },] = useGlobalContext();
    // const [ count, setCount ] = useState(0)

    // * Manually Create an Array of Objects that Correspond with the Season's Current Categories 
    const activityChallenges = [
        // [0]
        {
            name: 'Season of the Wish Upgrades',
            challenges: []
        },
    ];

    // Manually Create Cases that Correspond with the Category's Index Value
    const handleChallenge = (category, challenge) => {
        // console.log({category, challenge});
        switch (category) {
            case 'Season-of-the-Wish-Upgrades':
                activityChallenges[0].challenges.push(challenge)
                break;
            default:
                break;
        }
    }

    const sortChallenges = () => {
        parsedData.forEach((week => {
            week.challenges.forEach(challenge => {

                handleChallenge(challenge.belongsTo, challenge);
            })
        }))
    }

    sortChallenges();

    return (
        <>
            <main id='main' className='App-backMaxHeight'>
                <section className={`App-backImg ${smallClass} backgroundImg-SeasonalReward App-PushBottomUp`}>
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
        </>
    );
};

export default SeasonalReward;
