import React, { useEffect, useState } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import { useGlobalContext } from '../context/GlobalContext';

const Weekly = () => {

    const [season20Data, setSeason20Data] = useState([]);

    const [{ parsedData }, ] = useGlobalContext();
    // const [ count, setCount ] = useState(0)

    useEffect(() => {
        parsedData
            .then(data => {
                setSeason20Data(data);
                console.log(data);
            })
    }, [parsedData])

    return (
        <>
            <main id='main' className='App-backMaxHeight'>
                <section className='App-backImg backgroundImg-Weekly App-PushBottomUp' >
                    {season20Data.map((week) => {
                        return (
                            <ChallengeCategory
                                key={week.name}
                                name={week.name}
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
