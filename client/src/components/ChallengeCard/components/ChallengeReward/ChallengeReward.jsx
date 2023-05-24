import React from 'react';
import { useChallengeContext } from '../../ChallengeContext';

const ChallengeReward = (props) => {

    const [{ reward, xp, dust },] = useChallengeContext();

    const getXpImg = (xpTier) => {
        // {note: I don't see different Icons in light gg and they're not in game. Not sure if Bungie actually has different icons, so maybe I'll make them?}
        if (xpTier === 'Challenger XP') return '/assets/img/icons/xp-t1.png'
        if (xpTier === 'Challenger XP+') return '/assets/img/icons/xp-t1.png'
        if (xpTier === 'Challenger XP++') return '/assets/img/icons/xp-t1.png'
    }

    return (
        <section>
            {/* Check If Each Reward Type has a Truthy Value in this Challenge Instance and Render */}
            <h4>Rewards</h4>
            {reward &&
                <div className='ChallengeReward-Body'>
                    <img
                        className='ChallengeReward-Img'
                        alt={`${reward} Icon`}
                        src={`/assets/img/icons/${reward === 'War Table Upgrade' ? 'war-table.png' : 'weapon.jpg'}`}
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