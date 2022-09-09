import { createContext, useContext, useReducer } from 'react';

const ChallengeContext = createContext({});

const challengeState = {
    name: '',
    description: '',
    objectives: [],
    reward: '',
    xp: '',
    dust: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setState':
            return {
                ...state,
                name: action.payload.name,
                description: action.payload.description,
                objectives: action.payload.objectives,
                reward: action.payload.reward,
                xp: action.payload.xp,
                dust: action.payload.dust,
            };
    
        default: return state;
    }
}

const ChallengeProvider = (props) => {
    console.log(props);
    const [state, dispatch] = useReducer(reducer, challengeState);

    return (
        <ChallengeContext.Provider value={[state, dispatch]} {...props} />
    );
}

export default ChallengeProvider;

export const useChallengeContext = () => {
    return useContext(ChallengeContext);
}