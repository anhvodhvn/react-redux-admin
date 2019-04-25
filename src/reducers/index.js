import { combineReducers } from 'redux';
import productReducer from './productReducer';
import merchantReducer from './merchantReducer';

const rootReducer = combineReducers({
    productReducer,
    merchantReducer
});

export default rootReducer;