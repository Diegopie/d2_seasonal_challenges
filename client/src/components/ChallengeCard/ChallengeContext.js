import { createContext, useContext, useEffect, useReducer } from 'react';

const ChallengeContext = createContext({});

const challengeState = {
    week: '',
    name: '',
    challengeIndex: '',
    description: '',
    objectives: [],
    reward: '',
    xp: '',
    dust: ''
}

const reducer = (state, action) => {

    

    switch (action.type) {
        case 'setState':
            const { week, challenge, challengeIndex } = action.payload
            return {
                ...state,
                week: week,
                name: challenge.name,
                challengeIndex: challengeIndex,
                description: challenge.description,
                objectives: challenge.objectives,
                reward: challenge.reward,
                xp: challenge.xp,
                dust: challenge.dust,
            };
    
        default: return state;
    }
}

const ChallengeProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, challengeState);
    const { week, challenge, challengeIndex} = props.data;

    useEffect(() => {
        dispatch({type: 'setState', payload: {week:week, challenge: challenge, challengeIndex: challengeIndex} });
    }, [dispatch, week, challenge, challengeIndex])

    return (
        <ChallengeContext.Provider value={[state, dispatch]} {...props} />
    );
}

export default ChallengeProvider;

export const useChallengeContext = () => {
    return useContext(ChallengeContext);
}