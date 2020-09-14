import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.50.57:4567/api'
})

export default api;