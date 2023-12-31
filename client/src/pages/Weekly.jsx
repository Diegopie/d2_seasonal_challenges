import React, { useMemo, useState } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import img from '../assets/production/background-img/background_Home.jpg';
import { useGlobalContext } from '../context/GlobalContext';

const Weekly = (props) => {

    const [smallClass, setSmallClass] = useState('backgroundImg-Weekly-small');

    const [{ parsedData },] = useGlobalContext();

    return (
        <>
            <main id='main' className='App-backMaxHeight'>
                <section className={`App-backImg ${smallClass} backgroundImg-Weekly App-PushBottomUp`} >
                    <img src={img} alt='invisible img' className='App-Invisible-Img'
                        onLoad={() => {
                            setSmallClass('');
                        }}
                    />
                    {parsedData.map((week) => {
                        return (
                            <ChallengeCategory
                                key={week.name}
                                name={week.name.replaceAll(' ', '-')}
                                challenges={week.challenges}
                            />
                        )
                    })}
                </section>
            </main>
        </>
    );
};

export default Weekly;

// ffmpeg -i background_XP.png -vf scale=30:-1 background_XP-small.png