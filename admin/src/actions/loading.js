import Q from 'q';
import CONSTANTS from '../utils/constants';
const { TOGGLE_LOADING } = CONSTANTS;

export const toggleLoadingModal = (status) => {
    return {
        type: TOGGLE_LOADING,
        payload: status
    };
};

export const loading = (callback) => (dispatch) => {
    let result;
    Q.fcall(function(){
        dispatch(toggleLoadingModal(true));
    })
    .then(function(){
        return callback();
    })
    .then(function(data){
        result = data;
        dispatch(toggleLoadingModal(false));
    })
    .then(function(){
        return result;
    })
    .catch(function(error){
        dispatch(toggleLoadingModal(false));
        throw error;
    });
};