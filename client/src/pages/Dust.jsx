import { useEffect, useState } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import img from '../assets/production/background-img/background_Dust.jpg';
import { useGlobalContext } from '../context/GlobalContext';


const Dust = () => {

    const [season20Data, setSeason20Data] = useState([]);

    const [smallClass, setSmallClass] = useState('backgroundImg-Dust-small');

    const [{ parsedData },] = useGlobalContext();
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
            name: 'Bright Dust',
            challenges: []
        }
    ];

    // Manually Create Cases that Correspond with the Category's Index Value
    const handleChallenge = (category, challenge, index) => {
        // console.log({category, challenge});
        switch (category) {
            case 'Bright Dust':
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
                handleChallenge(challenge.dust, challenge)

            })
        }))
    }

    sortChallenges();

    return (
        <>
            <main id='main' className='App-backMaxHeight'>
                <section className={`App-backImg ${smallClass} backgroundImg-Dust App-PushBottomUp`}>
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
        </>
    );
};

export default Dust;
