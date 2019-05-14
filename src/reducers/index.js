import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import productReducer from './productReducer';
import merchantReducer from './merchantReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
    form: reduxFormReducer,
    productReducer,
    merchantReducer,
    loadingReducer,
});

export default rootReducer;