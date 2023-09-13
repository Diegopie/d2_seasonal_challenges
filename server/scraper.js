const seasonalChallenges = $('.record-container')[0].children;

let parsedChallenges = [];

for (let i = 0; i < seasonalChallenges.length; i++) {

    // I believes this was to manage 'Redacted' challenges that were not yet in the API
    if ($(seasonalChallenges[i]).children('h3').text() === '') {
        // console.log('hit');
        continue;
    }

    const name = $(seasonalChallenges[i]).children('h3').text().trim();
    // console.dir($(seasonalChallenges[i]).children('.record-description'));
    const descriptionTarget = $(seasonalChallenges[i]).children('.record-description');
    // console.dir(descriptionTarget);
    const description = descriptionTarget[0].innerText.trim().replace(/"/g, "");

    const allObjectives = $(seasonalChallenges[i]).children('.objective-progress-container').children();
    const parsedObjectives = [];
    for (let i = 0; i < allObjectives.length; i++) {

        // ** Determine Value of an Objective's Goal
        const goal = () => {
            // Path to goal on DOM
            const target = $(allObjectives[i]).children('div').children('span').text().trim();
            // * Return 1 if Goal is 'Incomplete', meaning there is only one task to achieve
            if (target === 'Incomplete') {
                return 1;
            }
            // Regex Remove any character before a '/' and the '/' itself, return something like 50 instead of 0/50
            return parseInt($(allObjectives[i]).children('div').children('span').text().match(/\/(.*)/)[1]);
        }

        // console.log(goal());

        const objective = {
            isPercent: false,
            task: $(allObjectives[i]).children('strong').text().trim().split(/\[|\]/).join(""),
            progress: 0,
            goal: goal(),
            completed: false,
        }
        parsedObjectives.push(objective);
    }


    let reward = null;
    let xp = null;
    let dust = null;

    const allRewards = $(seasonalChallenges[i]).children('.triumph-rewards-container').children('.reward-item');
    for (let i = 0; i < allRewards.length; i++) {
        // console.log($(allRewards[i]).find('strong').text().trim());
        const thisReward = $(allRewards[i]).find('strong').text().trim();
        if (thisReward === 'War Table Upgrade') reward = thisReward;
        if (thisReward.includes('Challenger')) xp = thisReward;
        if (thisReward === 'Bright Dust') dust = thisReward;
    }

    const parsedData =
    {
        belongsTo: '',
        name: name,
        description: description,
        category: [],
        completed: false,
        challengeIndex: '',
        objectives: parsedObjectives,
        reward: reward,
        xp: xp,
        dust: dust
    }
    parsedChallenges.push(parsedData);
}

console.log(parsedChallenges);
