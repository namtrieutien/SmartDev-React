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
  // handle token here
  const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaXRyYW52dkBnbWFpbC5jb20iLCJpYXQiOjE2MjQ1MDUwNzcsImV4cCI6MTYyNDU0ODI3N30.jLu0yAmqtHq8tR966UHxtLNr8NCGNu-vp0DKkLeG5eL7jFeJ3lCM9Gw46K_GHGdo994ekgNv045aG84Res-nGA'
  console.log("token: ", token);
  config.headers.Authorization = `Bearer ${token}`

  return config
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