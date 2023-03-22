import localSeasonalChallenges from "./parsedSeasonalChallenges";

const pageData = [];

const getPageData = (page) => {
    return localSeasonalChallenges()
        .then(data => {
            return parser(page, data)
        })
}

const parser  = (page, data) => {
    switch (page) {
        case 'weekly':
            console.log('hit weekly');
            console.log(data);
            return data;
    
        default:
            break;
    }
}

export default getPageData;