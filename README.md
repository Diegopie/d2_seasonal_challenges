# Destiny 2 Seasonal Challenges

<!-- ![App hero image](./client/public/assets/img/readme/app.png) -->

## Description

If efficiency is how you play then you're at the right place! I often find myself spending more time preparing to play Destiny rather than playing it. There is so much to do and so little time 😞. I made this app to have a little Ghost companion do the thinking for me. Rather than filtering through each week to know how many challenges I have to suffer in Gambit with, one can simply visit this site and see all Seasonal Challenges that are related to a given activity!

So if you are preparing to do your Pinnacle Vanguard challenge you can visit the Activities page and see all the current Vanguard Seasonal Challenges. This App is [not yet](#future-development) connected to the Destiny API, so your challenge progress must be manually updated for now. This is more easy to do in the home page as it will directly match the order seen in the game

[Live Link 😁](https://d2-seasonal-challenges.herokuapp.com/)

<!-- [Adobe XD Wireframe and Prototype](https://xd.adobe.com/view/7f0c8103-9ba6-49dd-8bca-2eaeeb93bbf6-2a5f/) -->

&NewLine;
&NewLine;

## Updates

12/15/23
Added data for season 23. New images for the season to come! I've also finally played with the Destiny API, I hope to roll out bungie.net login in the next few weeks. Getting data from your accounts to show on the screen will essentially be a rewrite of the project 🙃

10/09/23
Just in time for the end of the season, I have done some back end work so that I can much more quickly update the site. I still may look into getting the site to add new data on reset but at this stage I think I will finally do proper research on the Destiny API to make this a rich, synced experiance with the game

09/15/23
Season 22 update! New Bungie art has been added to each page.

05/23/23
Season 21 update! New Bungie art has been added to each page. Many UI updates have been made, most notably having icons for the Rewards of a Challenge. The site has been updated to manage the new Seasonal Upgrades so you can continue to be efficient with these challenges

04/18/23
Big news! The mid season update is introducing a very basic user system. This lets you sync your data between devices! It is very basic with now passwords, but gets us running 👌

## Table of Contents

- [Destiny 2 Seasonal Challenges](#destiny-2-seasonal-challenges)
  - [Description](#description)
  - [Updates](#updates)
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
    - [Support](#support)
    - [License](#license)

## Development

- [Technology Overview](#technology-overview)
- [Dependencies/Packages](#dependenciespackages)
- [Client](#client)

### Technology Overview

&NewLine;
&NewLine;

```sh
Frontend – React, CSS3, Bootstrap Navbar 
Backend – Node, Express, MongoDB
```

&NewLine;
&NewLine;

### Dependencies/Packages

&NewLine;
&NewLine;

| | | |
| ------ | ------ | ------ |
| [express](https://www.npmjs.com/package/express) | [mongoose](https://www.npmjs.com/package/mongoose) | [react-router-dom](https://www.npmjs.com/package/react-router-dom) |

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

This app is rendered using React. My key goal was to whip this up as fast as possible so I can get back to playing the game. This was not a great idea! 😅. The idea was to slap something together, learn the Destiny API, then make this thing polished and synced with game data.

But it is very hard to get free time and I wanted to share this with my friends. Much of the app is still rooted in the original local storage solution for storing user data and I still plan to figure out the API in a [future build](#future-development).

&NewLine;
&NewLine;

#### Persisting User Data

I very lazily wanted to avoid learning the Destiny API that would allow me to get user data directly from Bungie and not have to worry about this at all, buut I was lazy. This is the original local storage solution that I am actually quite proud of. Programmatically looping through all data and newly added data as the season progressed.

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

The client renders each week or category of challenge by mapping through the server data. Because of this, we can initialize state context for every single challenge in our database programmatically.

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

When a user updates a value on a challenge, it still uses the original local storage solution to save the data, then the local storage data is used to save to the data base. The server data is just a mirror of the local storage data. Not very elegant or efficient, but it works well enough before implementing the Destiny API

``` js
// ** Store the Mutated Array in Local Storage
localStorage.setItem(week, JSON.stringify(newLocal));
// ** Dispatch Values to State for Data to Persist Between Pages
const newObjective = newLocal[challengeIndex].objectives;
dispatch({type:'setNewObjective', payload: { newObjective }});
updateServerData();

```

> [Back To Client](#client) || [Back To Development](#development)

### Bugs

Two big things to figure out are that state is not persisting between pages and that challenges do not sync when they appear multiple times on the page.

State is initiated for every single item that is mapped in the JSX. This means if one challenge is included in multiple categories than it will be given multiple state initiations so they will not sync.
I've updated the code so that when a user updates a value it checks for any duplications through the DOM, then updates all the duplicates on the DOM. 
This is not elegant buuut it works well enough since getting the Destiny API working will solve all this.

### Future Development

There were a few coding concepts I wanted to practice when creating this project so I laid out the development process based on what I wanted to learn/practice. The initial concept was working with and rendering a larger amount of data that can be updated by a user then managing all of that in local storage.

These are the concepts I would like to practice in the future and how they effect the app

- PWA - Offline
  - Offline support is mostly for me to learn service workers. Destiny is an online game so I don't see how many users will benefit from offline support but I can brag about it to my wife 🥰

- Seasonal Triumphs
  - Many Destiny players get their Seasonal Challenges knocked out in the week. A bigger pie to eat are
  Seasonal Triumphs. Tackling these efficiently are a next big step to help more players!
  
- JWT Authentication and Server Database
  - I have implemented many very basic user account and authentication but I would like to have something more polished and user friendly
  - With user auth, I can connect to a database so users can track their progress anywhere! A very basic version is running now
  
- Destiny API Integration
  - This would render most of the work done completely redundant but will be a huge quality of life improvement. I have many ideas for Destiny apps learning all the previous coding concepts are important for that. This will also be a good baby step for using the huge amount of data the Destiny API offers

### Resources

<!-- Adobe Icons: [freepik.com](https://www.freepik.com) -->

### Contact

If you have any feedback our questions, please reach me by [email](diegopie@outlook.com), [GitHub](https://github.com/Diegopie), or [LinkedIn](https://www.linkedin.com/in/diego-hernandez-7327381b2/)!

### Support

Like the app? Show some love! My wife and I have an [e-commerce](https://www.amway.com/myshop/ParkerandDiego) business with plenty of gamer juice to keep you in the grind.
You can also visit my [Buy Me a Coffee page](https://www.buymeacoffee.com/diegopie)

### License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed
