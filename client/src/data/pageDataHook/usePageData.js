import { useGlobalContext } from "../../context/GlobalContext";
import sortActivityChallenges from "./activitesData";

const usePageData = (page) => {

    const [{parsedData}, ] = useGlobalContext();
    
    return parsedData
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
        case 'activities':
            console.log('hit activities');
            console.log(data);
            return sortActivityChallenges(data)
            
    
        default:
            break;
    }
}

export default usePageData;