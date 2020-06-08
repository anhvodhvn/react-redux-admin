import CONSTANTS from '../utils/constants';

if(CONSTANTS.PROCESS.NODE_ENV == 'production') {
    module.exports = require('./configureStore.prod');
}
else {
    module.exports = require('./configureStore.dev');
}