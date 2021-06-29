import axios from 'axios';
import queryString from 'query-string';

const axiosManagement = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
})

axiosManagement.interceptors.request.use(async (config) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
  config.headers.Authorization = `Bearer ${token}`

  return config
  } else return null;
  
})

axiosManagement.interceptors.response.use((respone) => {
  if (respone && respone.data) {
    return respone.data;
  }
  return respone
}, (error) => {
  // handle error
  throw error;
})



export default axiosManagement