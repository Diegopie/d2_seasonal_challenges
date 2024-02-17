import React from 'react';
import { useChallengeContext } from '../../context/ChallengeContext';

const ChallengeReward = (props) => {

    const [{ reward, xp, dust, week },] = useChallengeContext();



    // console.log(week);

    const getRewardImg = (reward) => {
        if (week.includes('Deep')) return `/assets/img/icons/deep-rewards/${reward.replaceAll(' ', '-')}.png`
        if (reward === 'War Table Upgrade') return '/assets/img/icons/war-table.png';
        if (reward.includes('Weapon')) return '/assets/img/icons/weapon.jpg';
    }
    const getXpImg = (xpTier) => {
        // {note: I don't see different Icons in light gg and they're not in game. Not sure if Bungie actually has different icons, so maybe I'll make them?}
        if (xpTier === 'Challenger XP') return '/assets/img/icons/xp-t1.png'
        if (xpTier === 'Challenger XP+') return '/assets/img/icons/xp-t1.png'
        if (xpTier === 'Challenger XP++') return '/assets/img/icons/xp-t1.png'
        if (xpTier === 'Challenger XP+++') return '/assets/img/icons/xp-t1.png'
    }

    return (
        <section>
            {/* Check If Each Reward Type has a Truthy Value in this Challenge Instance and Render */}
             { reward || xp || dust ?
                <h4>Rewards</h4>
                : null
             } 
            {reward &&
                <div className='ChallengeReward-Body'>
                    <img
                        className='ChallengeReward-Img'
                        alt={`${reward} Icon`}
                        src={getRewardImg(reward)}
                    />
                    <p>{reward}</p>
                </div>
            }
            {xp &&
                <div className='ChallengeReward-Body'>
                    <img
                        className='ChallengeReward-Img'
                        alt={`${xp} Icon`}
                        src={getXpImg(xp)}
                    />
                    <p>{xp}</p>
                </div>
            }
            {dust &&
                <div className='ChallengeReward-Body'>
                    <img
                        alt={`${dust} Icon`}
                        className='ChallengeReward-Img'
                        src='/assets/img/icons/bright-dust.png'
                    />
                    <p>{dust}</p>
                </div>
            }
        </section>
    );
};

export default ChallengeReward;