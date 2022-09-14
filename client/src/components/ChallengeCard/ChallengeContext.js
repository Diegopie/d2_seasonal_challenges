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
            const { challenge, challengeIndex } = action.payload
            return {
                ...state,
                week: challenge.belongsTo,
                name: challenge.name,
                challengeIndex: challengeIndex,
                description: challenge.description,
                objectives: challenge.objectives,
                reward: challenge.reward,
                xp: challenge.xp,
                dust: challenge.dust,
            };
        case 'setProgress':
            const { newObjectiveProgress } = action.payload;
            return {
                ...state,
                objectives: newObjectiveProgress
            }
    
        default: return state;
    }
}

const ChallengeProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, challengeState);
    const { challenge, challengeIndex} = props.data;

    useEffect(() => {
        dispatch({type: 'setState', payload: { challenge: challenge, challengeIndex: challengeIndex} });
    }, [dispatch, challenge, challengeIndex])

    return (
        <ChallengeContext.Provider value={[state, dispatch]} {...props} />
    );
}

export default ChallengeProvider;

export const useChallengeContext = () => {
    return useContext(ChallengeContext);
}