import api from '../api/api';
import CONSTANTS from '../utils/constants';
const { GET_ORDER_LIST, GET_ORDER_ITEM } = CONSTANTS;

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
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
    };
};