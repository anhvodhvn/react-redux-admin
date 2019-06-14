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

    /* order */
    GET_ORDER_LIST: 'GET_ORDER_LIST',
    GET_ORDER_ITEM: 'GET_ORDER_ITEM',

    CREATE_ORDER: 'CREATE_ORDER',
    UPDATE_ORDER: 'UPDATE_ORDER',

    APPROVE_ORDER: 'APPROVE_ORDER',
    REJECT_ORDER: 'REJECT_ORDER',



    ORDER_STATUS: {
        PENDING: 'PENDING',
        APPROVED: 'APPROVED',
        REJECTED: 'REJECTED',
        RECEIVED: 'RECEIVED',
        FINISHED: 'FINISHED',
    },

    CURRENCY: {
        USD: 'USD',
        VND: 'VND'
    },

    /* array list */
    CATEGORY: [
        {
            Id: 1,
            Code: 1,
            Name: 'Laptop - Computer'
        },
        {
            Id: 2,
            Code: 2,
            Name: 'Mobile Phone'
        },
        {
            Id: 3,
            Code: 3,
            Name: 'Clothes'
        },
        {
            Id: 4,
            Code: 4,
            Name: 'Channel - Fragrance'
        },
        {
            Id: 5,
            Code: 5,
            Name: 'Drinking'
        },
        {
            Id: 6,
            Code: 6,
            Name: 'Food'
        },
        {
            Id: 7,
            Code: 7,
            Name: 'Electricity'
        },
        {
            Id: 8,
            Code: 8,
            Name: 'Skin Healths'
        },
        {
            Id: 9,
            Code: 9,
            Name: 'Fashion'
        },
        {
            Id: 10,
            Code: 10,
            Name: 'Car & Bus'
        }
    ],
    LOCATION: [
        {
            Id: 1,
            Code: 1,
            Name: 'London'
        },
        {
            Id: 2,
            Code: 2,
            Name: 'Paris'
        },
        {
            Id: 3,
            Code: 3,
            Name: 'Rome'
        },
        {
            Id: 4,
            Code: 4,
            Name: 'Milan'
        },
        {
            Id: 5,
            Code: 5,
            Name: 'Turin'
        },
        {
            Id: 6,
            Code: 6,
            Name: 'New York'
        },
        {
            Id: 7,
            Code: 7,
            Name: 'Manchester'
        },
        {
            Id: 8,
            Code: 8,
            Name: 'Istanbul'
        },
        {
            Id: 9,
            Code: 9,
            Name: 'Miami'
        },
        {
            Id: 10,
            Code: 10,
            Name: 'Las Vegas'
        },
        {
            Id: 11,
            Code: 11,
            Name: 'Tokyo'
        },
        {
            Id: 12,
            Code: 12,
            Name: 'Hong Kong'
        }
    ],
    INVENTORY_STATUS: [
        {
            Code: 1,
            Name: 'Upcomming'
        },
        {
            Code: 2,
            Name: 'Inventory'
        },
        {
            Code: 3,
            Name: 'SaleOff'
        },
        {
            Code: 4,
            Name: 'Empty'
        }
    ]
};

export default CONSTANTS;