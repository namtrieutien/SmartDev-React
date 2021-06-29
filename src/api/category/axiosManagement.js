import axios from 'axios';
import queryString from 'query-string';

const axiosManagement = axios.create({
  baseURL : 'https://smartdev-sunny.herokuapp.com/',
  //baseURL: 'http://localhost:8080/',
  paramsSerializer: param => queryString.stringify(param)
});

axiosManagement.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    //cheat authencation token
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2MjQ5NjIwMDcsImV4cCI6MTYyNTEzNDgwN30.EuEk_rwytEKSwHXSsw8kalGu2Zx8g1tpVMqTekGOidnFSS8LuF4RMVVnxwowcphZt6INPmvsKQxnYx3a8f_QsA`;
    
    return config;
  }
)

axiosManagement.interceptors.response.use((response) => {
  if (response && response.data) {
    console.log(response.data);
    return response.data;
  }
  return response
}, (error) => {
  // handle error
  throw error;
})

export default axiosManagement;