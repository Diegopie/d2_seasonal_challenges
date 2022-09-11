import { createContext, useContext, useEffect, useReducer } from 'react';

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
    const [state, dispatch] = useReducer(reducer, challengeState);

    useEffect(() => {
        dispatch({type: 'setState', payload: props.data });
    }, [dispatch, props])
    
    return (
        <ChallengeContext.Provider value={[state, dispatch]} {...props} />
    );
}

export default ChallengeProvider;

export const useChallengeContext = () => {
    return useContext(ChallengeContext);
}