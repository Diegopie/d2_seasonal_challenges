import React, { useEffect } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import { useGlobalContext } from '../context/GlobalContext';

const Weekly = (props) => {


    // const [{parsedData}, ] = useGlobalContext();

    console.log(props);

    

    return (
        <>
            <main className='App-backMaxHeight'>
                <section className='App-backImg backgroundImg-Weekly'>
                    {/* {props.parsedData.map((week) => {
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
