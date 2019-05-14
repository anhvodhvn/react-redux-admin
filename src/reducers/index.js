import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import productReducer from './productReducer';
import merchantReducer from './merchantReducer';
import loadingReducer from '../components/base/Loading/reducer';

const rootReducer = combineReducers({
    form: reduxFormReducer,
    productReducer,
    merchantReducer,
    loadingReducer,
});

export default rootReducer;