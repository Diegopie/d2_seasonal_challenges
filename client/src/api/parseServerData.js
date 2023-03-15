import { getServerData } from "./server-data";

const weeks = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

const allLocalData = () => {
    
    let fullLocalArray = [];

    for (let i = 0; i < weeks.length; i++) {
        const data = JSON.parse(localStorage.getItem(`Week-${weeks[i]}`));
        if (data === null) break;
        fullLocalArray.push(data);
    }
    console.log({fullLocalArray});
    localStorage.setItem('fullLocalArray', JSON.stringify(fullLocalArray));
    return fullLocalArray;
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
        localStorage.setItem(`Week-${weeks[i]}`, JSON.stringify(serverData[i]));
    }

    return serverData;

    

}

export {allLocalData, parserServerData };
