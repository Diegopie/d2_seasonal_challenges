import React, { useEffect, useState } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import { useGlobalContext } from '../context/GlobalContext';

const Weekly = (props) => {

    console.log(props);

    const [{parsedData}, ] = useGlobalContext();

    const [season20Data, setSeason20Data] = useState([]);

    useEffect(() => {
        parsedData.then(data => {
            setSeason20Data(data);
        })
    })

    return (
        <>
            <main className='App-backMaxHeight'>
                <section className='App-backImg backgroundImg-Weekly'>
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
