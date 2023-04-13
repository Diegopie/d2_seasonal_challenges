// * Manually Create an Array of Objects that Correspond with the Season's Current Categories 
const xpChallenges = [
    // [0]
    {
        name: 'Challenger XP',
        challenges: []
    },
    // [1]
    {
        name: 'Challenger XP+',
        challenges: []
    },
    // [2]
    {
        name: 'Challenger XP++',
        challenges: []
    }
];

// Manually Create Cases that Correspond with the Category's Index Value
const handleChallengeSort = (category, challenge, index) => {
    // console.log({category, challenge});
    switch (category) {
        case 'Challenger XP':
            xpChallenges[index].challenges.push(challenge)
            break;
        case 'Challenger XP+':
            xpChallenges[index].challenges.push(challenge)
            break;
        case 'Challenger XP++':
            xpChallenges[index].challenges.push(challenge)
            break;
        default:
            break;
    }
}

const findActivityIndex = (arg) => {
    let activityIndex;

    xpChallenges.forEach((category, index) => {
        // console.log(category.name);
        if (category.name.includes(arg)) {
            // console.log(index);
            activityIndex = index;
        }
    })
    return activityIndex;
};

// Loop Through Every Challenge in the DataBase. Add the Challenge Data To Every Category it Belongs to

const sortXpChallenges = (data) => {
    // * Loop through each week
    console.log({ xpData: data });
    data.forEach((week => {
        // * Loop through each challenge in a week
        week.challenges.forEach(challenge => {
            // console.log(challenge.category);

            // console.log(activity);
            handleChallengeSort(activity, challenge, findActivityIndex(challenge.xp))
        })
    }))
    return xpChallenges;
}

export { sortXpChallenges };
