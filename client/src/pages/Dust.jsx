import { useRef } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import img from '../assets/production/background-img/background_Dust.jpg';
import { useGlobalContext } from '../context/GlobalContext';


const Dust = () => {

    const smallClass = useRef('backgroundImg-Dust-small');
    const imgContainer = useRef(null);

    const [{ parsedData },] = useGlobalContext();
    // const [ count, setCount ] = useState(0)

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
        parsedData.forEach((week => {
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
                <section ref={imgContainer} className={`App-backImg ${smallClass.current} backgroundImg-Dust App-PushBottomUp`}>
                    <img src={img} alt='invisible img' className='App-Invisible-Img'
                        onLoad={() => {
                            imgContainer.current.classList.remove(smallClass.current);
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

export default Dust;
