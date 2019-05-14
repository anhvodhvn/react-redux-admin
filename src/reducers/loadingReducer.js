import CONSTANTS from '../utils/constants';
const { TOGGLE_LOADING } = CONSTANTS;

const INITIAL_STATE = {
    loading: false,
};

export default function(state = INITIAL_STATE, action){
    switch (action.type){
    case TOGGLE_LOADING:
        return {
            ...state, 
            loading: (action.payload) ? action.payload : !state.loading
        };
    default:
        return state;
    }
}