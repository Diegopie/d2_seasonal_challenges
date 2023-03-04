import React from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import { useGlobalContext } from '../context/GlobalContext';

const Weekly = () => {


    const [{parsedData}, ] = useGlobalContext();

    return (
        <>
            <main className='App-backMaxHeight'>
                <section className='App-backImg backgroundImg-Weekly'>
                    {parsedData.map((week) => {
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
