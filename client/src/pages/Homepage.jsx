import React from 'react';
import ChallengeCategory from '../components/ChallengeCategory/ChallengeCategory';


const Homepage = () => {

    const seasonalChallenges = [
            // Week One
            
                {
                    name: 'Week One',
                    challenges: [
                        {
                            name: 'Successful Expedition',
                            description: 'Obtain Plunderd Umbral Energy from bonus chests in Expedition',
                            category: 'Expedition',
                            objectives: [
                                {
                                    isPercent: false,
                                    task: "Treasure Chest Unlocked",
                                    progress: 0,
                                    goal: 50,
                                    completed: false,
                                },
                                {
                                    isPercent: true,
                                    task: "Plundered Umbral Energy",
                                    progress: 0,
                                    goal: 3,
                                    completed: false,
                                },
                            ],
                            reward: 'Repute',
                            xp: 'XP',
                            dust: null
                        }
                    ]
                },
            
            // Week Two
    ]


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
