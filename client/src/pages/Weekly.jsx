import React, { useEffect, useState } from 'react';
import { parserServerData } from '../api/parseServerData';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import { useGlobalContext } from '../context/GlobalContext';

const Weekly = (props) => {


    const [{parsedData}, ] = useGlobalContext();

    console.log(parsedData.then(data => console.log(data)));

    useEffect(() => {
        
    })

    return (
        <>
            <main className='App-backMaxHeight'>
                <section className='App-backImg backgroundImg-Weekly'>
                    {/* {parsedData.map((week) => {
                        return (
                            <ChallengeCategory
                                key={week.name}
                                name={week.name}
                                challenges={week.challenges}
                            />
                        )
                    })} */}
                </section>
            </main>
        </>
    );
};

export default Weekly;
