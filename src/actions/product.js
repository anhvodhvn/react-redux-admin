import api from '../api/api';
import CONSTANTS from '../utils/constants';
const { GET_PRODUCT_LIST, GET_PRODUCT_ITEM, CREATE_PRODUCT, UPDATE_PRODUCT } = CONSTANTS;

export const getProductList = function() {
    return (dispatch) => {
        return api.get('/product/list')
        .then((res) => {
            let { products } = res.data;
            dispatch({ 
                type: GET_PRODUCT_LIST, 
                payload: products 
            });
        })
        .catch((err) => {
            dispatch({ 
                type: GET_PRODUCT_LIST, 
                payload: err 
            });
        });
    };
};

export const getProductItem = function(id) {
    return (dispatch) => {
        return api.get(`/product/${id}`)
        .then((res) => {
            let { product } = res.data;
            dispatch({ 
                type: GET_PRODUCT_ITEM, 
                payload: product 
            });
        })
        .catch((err) => {
            dispatch({ 
                type: GET_PRODUCT_ITEM, 
                payload: err 
            });
        });
    };
};

export const addProduct = (product) => {
    return (dispatch) => {
        return api.post('/product/create', { data: product })
        .then((res) => {
            let { product } = res.data;
            dispatch({ 
                type: CREATE_PRODUCT, 
                payload: product 
            });
        })
        .catch((err) => {
            throw err;
        });
    };
};

export const editProduct = (product) => {
    return (dispatch) => {
        return api.put('/product/update', { data: product })
        .then((res) => {
            let { product } = res.data;
            dispatch({ 
                type: UPDATE_PRODUCT, 
                payload: product 
            });
        })
        .catch((err) => {
            throw err;
        });
    };
};