import { createContext, useContext, useEffect, useReducer } from 'react';

const ChallengeContext = createContext({});

const challengeState = {
    week: '',
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
                week:action.payload.week,
                name: action.payload.challenge.name,
                description: action.payload.challenge.description,
                objectives: action.payload.challenge.objectives,
                reward: action.payload.challenge.reward,
                xp: action.payload.challenge.xp,
                dust: action.payload.challenge.dust,
            };
    
        default: return state;
    }
}

const ChallengeProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, challengeState);

    useEffect(() => {
        dispatch({type: 'setState', payload: {week:props.data.week, challenge: props.data.challenge} });
    }, [dispatch, props])

    return (
        <ChallengeContext.Provider value={[state, dispatch]} {...props} />
    );
}

export default ChallengeProvider;

export const useChallengeContext = () => {
    return useContext(ChallengeContext);
}