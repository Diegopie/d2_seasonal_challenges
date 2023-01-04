import React from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';
import localSeasonalChallenges from '../data/parsedSeasonalChallenges.js';
import Menu from '../layouts/Menu';

const Homepage = () => {




    return (
        <>
            <Menu />
            <main className='App-backMaxHeight'>
                <section className='App-backImg App-backImg-1-light'>
                    {localSeasonalChallenges.map((week) => {
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

export default Homepage;
