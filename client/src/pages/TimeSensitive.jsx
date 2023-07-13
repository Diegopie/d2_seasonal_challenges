import { useState, useEffect } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import img from '../assets/production/background-img/background_Time.jpeg';
import { useGlobalContext } from '../context/GlobalContext';


const TimeSensitive = () => {

    const [season20Data, setSeason20Data] = useState([]);

    const [smallClass, setSmallClass] = useState('backgroundImg-Time-small');

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
            name: 'Time Sensitive Challenges',
            challenges: []
        }
    ];

    // Manually Create Cases that Correspond with the Category's Index Value
    const handleChallenge = (category, challenge) => {
        // console.log({category, challenge});
        switch (category) {
            case 'Time':
                activityChallenges[0].challenges.push(challenge)
                break;
            default:
                break;
        }
    }

    // Loop Through Every Challenge in the DataBase. Add the Challenge Data To Every Category it Belongs to

    const sortChallenges = () => {
        season20Data.forEach((week => {
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
            <main id='main' className='App-backMaxHeight'>
                <section className={`App-backImg ${smallClass} backgroundImg-Time App-PushBottomUp`}>
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

export default TimeSensitive;
