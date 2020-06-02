import axios from 'axios';

const API_URL = 'https://api-inventory.azurewebsites.net/api/';
const api = axios.create({
    baseURL: API_URL
});

export default api;