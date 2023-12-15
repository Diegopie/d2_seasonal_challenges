import { getServerData } from "./server-data";

const weeks = ['Season-of-the-Wish-Upgrades', 'Week-One', 'Week-Two', 'Week-Three', 'Week-Four', 'Week-Five', 'Week-Six', 'Week-Seven', 'Week-Eight', 'Week-Nine', 'Week-Ten'];

const allLocalData = () => {

    function Week (name, data) {
        this.name = name;
        this.challenges = data
    }
    
   const allData = []

    for (let i = 0; i < weeks.length; i++) {
        const week = weeks[i];
        const data = JSON.parse(localStorage.getItem(week));
        // console.log(data);
        if (data === null) break;

        allData.push(new Week(week.replace('-', ' '), data))
    }
    return allData;
}

const parserServerData = async () => {
    const username = localStorage.getItem('username');
    if(localStorage.getItem('initServerData') === null) {
        localStorage.setItem('initServerData', false);
        if (window.location.pathname !== '/') {
            window.location.replace('/');
        }
        return false;

    }
    if (username === null) {
        return;
    }

    // let serverData = [];
    const serverData = await getServerData(localStorage.getItem('username'))
    .then(({data}) => {

        console.log(data);
        return data.seasonalChallenges20
    })

    for (let i = 0; i < serverData.length; i++) {
        // localStorage.setItem(`Week-${weeks[i]}`, JSON.stringify(serverData[i]));
    }

    return serverData;

}

export {allLocalData, parserServerData };
