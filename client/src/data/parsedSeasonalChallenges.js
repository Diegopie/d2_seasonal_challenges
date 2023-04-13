import { getServerData } from "../api/server-data";

const localSeasonalChallenges = () => {
    const username = localStorage.getItem('username');
    if (username === null) return;

    return getServerData(username)
    .then(data => {
        // console.log(data);
        const serverData = data.data.seasonalChallenges20
        serverData.map((week) => {
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
            // *** Return Updated Data
            return week;
        });

        return serverData;
    })
}

export default localSeasonalChallenges;
