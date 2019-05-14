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

export const loading = (callback) => async (dispatch) => {
    try 
    {
        dispatch(toggleLoadingModal(true));
        const response = await callback();
        dispatch(toggleLoadingModal(false));
        return response;
    }
    catch (error) {
        dispatch(toggleLoadingModal(false));
        //console.log(error); // eslint-disable-line
        throw error;
    }
};