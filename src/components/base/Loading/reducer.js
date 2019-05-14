import CONSTANTS from '../../../utils/constants';
const { TOGGLE_LOADING } = CONSTANTS;

const INITIAL_STATE = {
    isShow: false,
};

export default function(state = INITIAL_STATE, action){
    switch (action.type){
    case TOGGLE_LOADING:
        return {
            ...state, 
            isShow: (action.payload) ? action.payload : !state.isShow
        };
    default:
        return state;
    }
}