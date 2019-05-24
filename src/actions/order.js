import api from '../api/api';
import CONSTANTS from '../utils/constants';
const { GET_ORDER_LIST, GET_ORDER_ITEM, APPROVE_ORDER, REJECT_ORDER } = CONSTANTS;

export const getOrderList = function() {
    return (dispatch) => {
        return api.get('/order/list')
        .then((res) => {
            let { orders } = res.data;
            dispatch({ 
                type: GET_ORDER_LIST, 
                payload: orders 
            });
        })
        .catch((err) => {
            throw err;
        });
    };
};

export const getOrderItem = function(id) {
    return (dispatch) => {
        return api.get(`/order/${id}`)
        .then((res) => {
            let { order } = res.data;
            dispatch({ 
                type: GET_ORDER_ITEM, 
                payload: order
            });
            return res;
        })
        .catch((err) => {
            throw err;
        });
    };
};

export const approveOrder = (orderId) => {
    return (dispatch) => {
        return api.put('/order/approve', {orderId})
        .then((res) => {
            let { order } = res.data;
            dispatch({
                type: APPROVE_ORDER, 
                payload: order
            });
            return res;
        })
        .catch((err) => {
            throw err;
        });
    };
};

export const rejectOrder = (orderId) => {
    return (dispatch) => {
        return api.put('/order/reject', {orderId})
        .then((res) => {
            let { order } = res.data;
            dispatch({
                type: REJECT_ORDER, 
                payload: order
            });
            return res;
        })
        .catch((err) => {
            throw err;
        });
    };
};