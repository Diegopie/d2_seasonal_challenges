# Destiny 2 Seasonal Challenges

<!-- ![App hero image](./client/public/assets/img/readme/app.png) -->

## Description

If efficiency is how you play then you're at the right place! I often find myself spending more time preparing to play Destiny rather than playing it. There is so much to do and so little time 😞. I made this app to have a little Ghost companion do the thinking for me. Rather than filtering through each week to know how many challenges I have to suffer through Gambit with one can simply visit this site and simply see all Seasonal Challenges that are related to a given activity!

So if you are preparing to do your Pinnacle Vanguard challenge you can visit the Activities page and see all the current Vanguard Seasonal Challenges. This App is [not yet](#future-development) connected to the Destiny API, so your challenge progress must be manually updated for now. This is more easy to do in the home page as it will directly match the order seen in the game

<!-- [Live Link 😁](https://diegopie.herokuapp.com/) -->

<!-- [Adobe XD Wireframe and Prototype](https://xd.adobe.com/view/7f0c8103-9ba6-49dd-8bca-2eaeeb93bbf6-2a5f/) -->

&NewLine;
&NewLine;

## Table of Contents

- [Destiny 2 Seasonal Challenges](#destiny-2-seasonal-challenges)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
- [Development](#development)
  - [Technology Overview](#technology-overview)
  - [Dependencies/Packages](#dependenciespackages)
    - [Dev Dependencies](#dev-dependencies)
  - [Client](#client)
    - [App Feature](#app-feature)
    - [Another Feature](#another-feature)
  - [Bugs](#bugs)
  - [Future Development](#future-development)
  - [Resources](#resources)
  - [Contact](#contact)
  - [License](#license)
- [react-template](#react-template)
- [d2\_seasonal\_challenges](#d2_seasonal_challenges)

# Development

- [Technology Overview](#Technology-Overview)
- [Dependencies/Packages](#Dependencies/Packages)
- [Client](#Client)

## Technology Overview

&NewLine;
&NewLine;

```sh
Frontend – React, CSS3,  
Backend – Node, Express
```

&NewLine;
&NewLine;

## Dependencies/Packages

&NewLine;
&NewLine;

| | |
| ------ | ------ |
| [express](https://www.npmjs.com/package/express) | [mongoose](https://www.npmjs.com/package/mongoose) |
<!-- [react-router-dom](https://www.npmjs.com/package/react-router-dom) | -->

&NewLine;
&NewLine;

### Dev Dependencies

&NewLine;
&NewLine;

| | |
| ------ | ------ |
| [eslint](https://www.npmjs.com/package/eslint) | [nodemon](https://www.npmjs.com/package/nodemon) |

&NewLine;
&NewLine;

> [Back To Development](#Development) || [Back To Table of Contents](#Table-of-Contents)

## Client

This app is rendered using React. My key goal was to manage all the data with useContext and sync the user's data will local storage. This is rather limiting for gamers that use multiple devices but was faster than sitting down and learning the Destiny 2 API. Though that integration will come in [future builds](#future-development)

### App Feature

Describe key app features and how it works

``` js
// use code snippets to display work
console.log("Hello World")
```

> [Back To Client](#Client) || [Back To Development](#Development)

### Another Feature

Describe a second feature, if desired

``` js
console.log("Hello Again")
```

> [Back To Client](#Client) || [Back To Development](#Development)

## Bugs

- Be honest, this app has something not working right 😬

## Future Development

There were a few coding concepts I wanted to practice when creating this project so I laid out the development process base on what I wanted to learn/practice. The initial concept was working with and rendering a larger amount of data that can be updated by a user then managing all of that in local storage.

This are the concepts I would like to practice in the future and how they effect the app

- PWA - Offline and Installable App
  - PWAs just make me happy ☺️ and many console users like their Destiny companion apps on their phone. This will give a more native app feel for those users and something neat for PC users
  - Offline support is mostly for me to learn service workers. Destiny is an online game so I don't see how many users will benefit from offline support but I can brag about it to my fiancee 🥰
  
- JWT Authentication and Server Database
  - I have implemented many very basic user account and authentication but I would like to have something more polished and user friendly
  - With user auth, I can connect to a database so users can track their progress anywhere!
  
- Destiny API Integration
  - This would render most of the work done completely redundant but will be a huge quality of life improvement. I have many ideas for Destiny apps learning all the previous coding concepts are important for that. This will also be a good baby step for using the huge amount of data the Destiny API offers

## Resources

<!-- Adobe Icons: [freepik.com](https://www.freepik.com) -->

## Contact

If you have any feedback our questions, please reach me by [email](diegopie@outlook.com), [GitHub](https://github.com/Diegopie), or [LinkedIn](https://www.linkedin.com/in/diego-hernandez-7327381b2/)!

## License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed
# react-template
# d2_seasonal_challenges
