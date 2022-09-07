import React from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import seasonalChallenges from '../data/seasonalChallenges';

const Homepage = () => {

    


    return (
        <main className='App-backMaxHeight'>
            <section className='App-backImg App-backImg-1-light'>
                {seasonalChallenges.map((week) => {
                    console.log(week);
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
    );
};

export default Homepage;
