import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import productReducer from './productReducer';
import merchantReducer from './merchantReducer';

const rootReducer = combineReducers({
    form: reduxFormReducer,
    productReducer,
    merchantReducer
});

export default rootReducer;