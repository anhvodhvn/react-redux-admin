import axios from 'axios';
import fnc from './fnc';

const API_URL = fnc.aws_url;
const api = axios.create({
    baseURL: API_URL
});

export default api;