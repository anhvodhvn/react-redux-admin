const CONSTANTS = {
    PROCESS: {
        NODE_ENV: 'production',
        //NODE_ENV: 'development'
    },

    /* loading */
    TOGGLE_LOADING: 'TOGGLE_LOADING',

    /* product */
    GET_PRODUCT_LIST: 'GET_PRODUCT_LIST',
    GET_PRODUCT_ITEM: 'GET_PRODUCT_ITEM',

    CREATE_PRODUCT: 'CREATE_PRODUCT',
    UPDATE_PRODUCT: 'UPDATE_PRODUCT',
    UPDATE_PRODUCT_IMAGE: 'UPDATE_PRODUCT_IMAGE',
    DELETE_PRODUCT: 'DELETE_PRODUCT',

    /* merchant */
    GET_MERCHANT_LIST: 'GET_MERCHANT_LIST',
    GET_MERCHANT_ITEM: 'GET_MERCHANT_ITEM',

    CREATE_MERCHANT: 'CREATE_MERCHANT',
    UPDATE_MERCHANT: 'UPDATE_MERCHANT',
    DELETE_MERCHANT: 'DELETE_MERCHANT',




    /* array list */
    CATEGORY: [
        {
            Code: 1,
            Name: 'Laptop - Computer'
        },
        {
            Code: 2,
            Name: 'Mobile Phone'
        },
        {
            Code: 3,
            Name: 'Clothes & Fashion'
        },
        {
            Code: 4,
            Name: 'Channel & Perfume'
        }
    ],
    LOCATION: [
        {
            Code: 1,
            Name: 'London'
        },
        {
            Code: 2,
            Name: 'Paris'
        },
        {
            Code: 3,
            Name: 'Rome'
        },
        {
            Code: 4,
            Name: 'Milan'
        },
        {
            Code: 5,
            Name: 'Turin'
        }
    ]
};

export default CONSTANTS;