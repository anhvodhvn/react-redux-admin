import axios from 'axios';
import CONSTANTS from '../utils/constants';

let API_URL = '';
if (CONSTANTS.PROCESS.NODE_ENV == 'production') {
    API_URL = 'https://78n3id557f.execute-api.us-east-1.amazonaws.com/api/';
}
else {
    API_URL = 'http://localhost:3000';
}

const api = axios.create({
    baseURL: API_URL
});

export default api;