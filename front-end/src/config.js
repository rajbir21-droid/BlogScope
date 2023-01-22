import axios from 'axios';

export const axiosInstance = axios.create({
   baseURL: "https://blogscope.onrender.com/api/"
})