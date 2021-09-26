import axios from 'axios';
require('dotenv').config();

const { REACT_APP_CLIENTID } = process.env; 

const api = axios.create({
    baseURL: 'https://api.imgur.com/3',
    headers: {
        'Authorization': `Client-ID ${REACT_APP_CLIENTID}`
    }
  });
  
export default api;