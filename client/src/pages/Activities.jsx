import { useEffect, useState } from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import { useGlobalContext } from '../context/GlobalContext';



const Activities = (props) => {

//    console.log(props.pageData);

const [season20Data, setSeason20Data] = useState([]);

    useEffect(() => {
        props.pageData.then(data => {
            setSeason20Data(data);
        })
    })


    return (
        <>
            <main className='App-backMaxHeight'>
                <section className='App-backImg backgroundImg-Activities'>
                    {season20Data.map((week) => {
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

export default Activities;
