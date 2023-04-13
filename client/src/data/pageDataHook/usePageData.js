import { useGlobalContext } from "../../context/GlobalContext";
// import sortActivityChallenges from "./activitesData";

const usePageData = (page) => {

    const [{parsedData}, ] = useGlobalContext();
    // const [ count, setCount ] = useState(0)
    
    return parsedData
        .then(data => {
            return parser(page, data)
        })
}

const parser  = (page, data) => {
    // console.log({usePageData: data});
    switch (page) {
        case 'weekly':
            // console.log('hit weekly');
            return data;
        // case 'activities':
        //     console.count('hit activities');
        //     return sortActivityChallenges(data);
        // case 'xp':
        //     // console.log('hit xp');
        //     return sortActivityChallenges(data);
        default:
            break;
    }
}

export default usePageData;