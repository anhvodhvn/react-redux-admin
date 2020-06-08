import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import orderReducer from './orderReducer';
import productReducer from './productReducer';
import merchantReducer from './merchantReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
    form: reduxFormReducer,
    orderReducer,
    productReducer,
    merchantReducer,
    loadingReducer,
});

export default rootReducer;