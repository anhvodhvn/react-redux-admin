import api from '../api/api';
import CONSTANTS from '../utils/constants';
const { GET_PRODUCT_LIST, GET_PRODUCT_ITEM } = CONSTANTS;

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

export const addProduct = function(product) {
    return product;
};

export const editProduct = function(product) {
    return product;
};