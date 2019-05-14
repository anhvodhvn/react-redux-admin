import CONSTANTS from '../../../utils/constants';
const { TOGGLE_LOADING } = CONSTANTS;

export function toggleLoading() {
    return {
        type: TOGGLE_LOADING
    };
}

export const toggleLoadingModal = (status) => {
    return {
        type: TOGGLE_LOADING,
        payload: status
    };
};

export const loading = (callback) => (dispatch) => {
    try
    {
        dispatch(toggleLoadingModal(true));
        callback();
        setTimeout(function(){
            dispatch(toggleLoadingModal(false));
        }, 5000);
    }
    catch (error) {
        dispatch(toggleLoadingModal(false));
        //console.log(error); // eslint-disable-line
        throw error;
    }
};