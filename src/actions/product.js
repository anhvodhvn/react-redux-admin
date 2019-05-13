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

export const addProduct = (data) => {
    return (dispatch) => {
        return api.post('/product/create', data)
        .then((res) => {
            let { product } = res.data;
            dispatch({
                type: CREATE_PRODUCT, 
                payload: product 
            });
            return res;
        })
        .catch((err) => {
            throw err;
        });
    };
};

export const editProduct = (data) => {
    return (dispatch) => {
        return api.put('/product/update', data)
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

export const uploadProductImage = (selectedFile) => {
    let { name: fileName, type: fileType } = selectedFile;
    return new Promise(function(resolve, reject) {
        api.post('product/image/signurl',{
            fileName : fileName,
            fileType : fileType
        })
        .then(response => {
            let returnData = response.data.returnData;
            let { signedRequest, url } = returnData;
            let options = {
                headers: { 'Content-Type': fileType }
            };
            
            api.put(signedRequest, selectedFile, options)
            .then(result => {
                resolve({ result, signedRequest, url });
            })
            .catch(error => {
                reject(error);
            });
        })
        .catch(error => {
            reject(error);
        });
    });
};