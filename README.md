# Destiny 2 Seasonal Challenges

<!-- ![App hero image](./client/public/assets/img/readme/app.png) -->

## Description

If efficiency is how you play then you're at the right place! I often find myself spending more time preparing to play Destiny rather than playing it. There is so much to do and so little time 😞. I made this app to have a little Ghost companion do the thinking for me. Rather than filtering through each week to know how many challenges I have to suffer through Gambit with one can simply visit this site and simply see all Seasonal Challenges that are related to a given activity!

So if you are preparing to do your Pinnacle Vanguard challenge you can visit the Activities page and see all the current Vanguard Seasonal Challenges. This App is [not yet](#future-development) connected to the Destiny API, so your challenge progress must be manually updated for now. This is more easy to do in the home page as it will directly match the order seen in the game

<!-- [Live Link 😁](https://diegopie.herokuapp.com/) -->

<!-- [Adobe XD Wireframe and Prototype](https://xd.adobe.com/view/7f0c8103-9ba6-49dd-8bca-2eaeeb93bbf6-2a5f/) -->

&NewLine;
&NewLine;

## Updates

Big news! The mid season update is introducting a very basic user system. This lets you sync your data between devices! It is very basic with now passwords, but gets us running 👌

## Table of Contents

- [Destiny 2 Seasonal Challenges](#destiny-2-seasonal-challenges)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Development](#development)
    - [Technology Overview](#technology-overview)
    - [Dependencies/Packages](#dependenciespackages)
      - [Dev Dependencies](#dev-dependencies)
    - [Client](#client)
      - [Persisting User Data](#persisting-user-data)
      - [Setting and Updating State](#setting-and-updating-state)
    - [Bugs](#bugs)
    - [Future Development](#future-development)
    - [Resources](#resources)
    - [Contact](#contact)
    - [License](#license)

## Development

- [Technology Overview](#technology-overview)
- [Dependencies/Packages](#dependenciespackages)
- [Client](#client)

### Technology Overview

&NewLine;
&NewLine;

```sh
Frontend – React, CSS3,  
Backend – Node, Express, MongoDB
```

&NewLine;
&NewLine;

### Dependencies/Packages

&NewLine;
&NewLine;

| | |
| ------ | ------ | 
| [express](https://www.npmjs.com/package/express) | [mongoose](https://www.npmjs.com/package/mongoose) |
<!-- [react-router-dom](https://www.npmjs.com/package/react-router-dom) | -->

&NewLine;
&NewLine;

#### Dev Dependencies

&NewLine;
&NewLine;

| | |
| ------ | ------ |
| [eslint](https://www.npmjs.com/package/eslint) | [nodemon](https://www.npmjs.com/package/nodemon) |

&NewLine;
&NewLine;

> [Back To Development](#development) || [Back To Table of Contents](#table-of-contents)

### Client

This app is rendered using React. My key goal was to manage all the data with useContext and sync the user's data will local storage. This is rather limiting for gamers that use multiple devices but was faster than sitting down and learning the Destiny 2 API. Though that integration will come in [future builds](#future-development)

#### Persisting User Data

Because I did not want to work with the API just yet I had to figure out how to store data for a user. I've created very basic user accounts in the past but want to spend more time to figure out how to make it more secure, more user friendly, and creating account recovery. Moreover, connecting to the API would let users login though their Bungie Accounts anyway. So I moved forward with a simple local storage solution.

Every seasonal challenge in the game has to be manually entered into a JS file then parsed into localSeasonalChallenges. This accomplishes three things: save new challenges into the client's local storage, create key data points for the application to reference to be able to update/save progress in state and local storage, and sync data in local storage to render on screen.

``` js
const localSeasonalChallenges = seasonalChallenges.map((week) => {
    // * Set weekName to be JSON and LocalStorage Friendly
    const weekName = week.name.replaceAll(' ', '-');
    // * If a Given Week is Not In Local Storage, Save to LocalStorage
    if (localStorage.getItem(weekName) === null) {
        localStorage.setItem(weekName, JSON.stringify(week.challenges));
    }
    // * If a Challenges are Added to As Week, add Them To LocalStorage without Deleting User Data
    const localData = JSON.parse(localStorage.getItem(weekName))
    const serverData = week.challenges;
    // ** Checks if Server has new data by comparing the it's length to LocalStorage
    if (serverData.length > localData.length) {
        // *** Start Loop with the length of LocalStorage, since we would already have those indexes saved with user data and we do not want to overwrite them with default values
        //  // Loop through the length of the server data and push any new data at index [i]
        for (let i = localData.length; i < serverData.length; i++) {
            localData.push(serverData[i]);
        }
        // *** Save Updated Data to Local Storage
        localStorage.setItem(weekName, JSON.stringify(localData));
    }

    // * For a Given Week, map() Through Each Challenge, Programmatically Create Data, and Sync Data In Local Storage
    week.challenges.map((challenge, challengeIndex) => {
        // *** Create belongsTo string
        challenge.belongsTo = weekName;
        // *** Create challengeIndex Number
        challenge.challengeIndex = challengeIndex;
        // *** Use getLocal to Sync Completed Data
        challenge.completed = getLocal(weekName, challengeIndex, true);
        // ** For a Given Challenge, map() Through Each Objective and Sync Data in Local Storage
        challenge.objectives.map((objective, objectiveIndex) => {
            // *** Use getLocal to Sync Data
            objective.completed = getLocal(weekName, challengeIndex, false, objectiveIndex, true)
            objective.progress = getLocal(weekName, challengeIndex, false, objectiveIndex, false)
            // *** Return Updated Data
            return objective;
        })
        // *** Return Updated Data
        return challenge;
    })
    // console.log({week});
    localStorage.setItem(weekName, JSON.stringify(week.challenges));
    // *** Return Updated Data
    return week;
});
```

> [Back To Client](#client) || [Back To Development](#development)

#### Setting and Updating State

The client renders each week or category of challenge by mapping through the localSeasonalChallenges data. Because of this, we can initialize state context for every single challenge in our database programmatically.

``` js
{
    props.challenges.map((challenge) => {
        return (
            // Wrap the State Provider for Individual Challenges and Pass Challenge Data to Dispatch Initial State
            <ChallengeProvider
                key={challenge.name}
                data={{ challenge }}
            >
                <ChallengeCard
                    key={challenge.name}
                    challengesRemainingID={challengesRemainingID}
                    togglerID={togglerID}
                    activityHeader={activityHeader}
                />
            </ChallengeProvider>
        )
    })
}
```

Now we just have to update local storage when a user changes a value so that can be seen on reload and dispatch the change in state for the client to update the screen

``` js
// ** Store the Mutated Array in Local Storage
localStorage.setItem(week, JSON.stringify(newLocal));
// ** Dispatch Values to State for Data to Persist Between Pages
const newObjective = newLocal[challengeIndex].objectives;
dispatch({type:'setNewObjective', payload: { newObjective }});

```

> [Back To Client](#client) || [Back To Development](#development)

### Bugs

Two big things to figure out are that state is not persisting between pages and that challenges do not sync when they appear multiple times on the page

### Future Development

There were a few coding concepts I wanted to practice when creating this project so I laid out the development process base on what I wanted to learn/practice. The initial concept was working with and rendering a larger amount of data that can be updated by a user then managing all of that in local storage.

This are the concepts I would like to practice in the future and how they effect the app

- PWA - Offline
  - Offline support is mostly for me to learn service workers. Destiny is an online game so I don't see how many users will benefit from offline support but I can brag about it to my wife 🥰

- Seasonal Triumphs
  - Many Destiny players get their Seasonal Challenges knocked out in the week. A bigger pie to eat are 
  Seasonal Triumphs. Tackling these effeciently are a next big step to help more players! 
  
- JWT Authentication and Server Database
  - I have implemented many very basic user account and authentication but I would like to have something more polished and user friendly
  - With user auth, I can connect to a database so users can track their progress anywhere! A very basic version is running now
  
- Destiny API Integration
  - This would render most of the work done completely redundant but will be a huge quality of life improvement. I have many ideas for Destiny apps learning all the previous coding concepts are important for that. This will also be a good baby step for using the huge amount of data the Destiny API offers

### Resources

<!-- Adobe Icons: [freepik.com](https://www.freepik.com) -->

### Contact

If you have any feedback our questions, please reach me by [email](diegopie@outlook.com), [GitHub](https://github.com/Diegopie), or [LinkedIn](https://www.linkedin.com/in/diego-hernandez-7327381b2/)!

### License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed
