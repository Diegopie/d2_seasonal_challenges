import { createContext, useContext, useReducer } from 'react';
import localSeasonalChallenges from '../data/parsedSeasonalChallenges';

export const GlobalContext = createContext();

const localDarkMode = JSON.parse(localStorage.getItem('darkMode'));

const determineDarkMode = () => {
    // Check No Local Storage
    if (localDarkMode === null) {
        // Check matchMedia Support
        if (window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        // Default to false
        } else {
            return false;
        }
    // Use data From Local
    } else {
        return localDarkMode;
    }
}

// parserServerData().then(data => console.log(data))

const defaultState = {
    // Functions
    hidesLoader: () => document.querySelector('.load-icon').classList.add('hide-icon'),
    showLoader: () => document.querySelector('.load-icon').classList.remove('hide-icon'),
    darkMode: determineDarkMode(),
    parsedData: localSeasonalChallenges(),
    activityIdsNav: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'setParsedData':
            return {
                ...state,
                parsedData: localSeasonalChallenges()
            }
        case 'setDarkMode':
            return {
                ...state,
                darkMode: action.payload
            };
        case 'updateParsedData':
            return {
                ...state,
                parsedData: localSeasonalChallenges()
            };
        case 'updateActivityIdsNav':
            return {
                ...state,
                activityIdsNav: action.payload
            };
        default: return state;
    }
};

const GlobalProvider = (props) => {
    const [state, dispatchGlobal] = useReducer(reducer, defaultState);

    return (
        <GlobalContext.Provider value={[state, dispatchGlobal]} {...props} />
    );

};

export default GlobalProvider;

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};