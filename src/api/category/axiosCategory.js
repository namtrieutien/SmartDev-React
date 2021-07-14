import axios from 'axios';
import queryString from 'query-string';

const axiosCategory = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_API_URL,
  paramsSerializer: param => queryString.stringify(param)
});

axiosCategory.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    return config;
  }
)

axiosCategory.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }
  return response
}, (error) => {
  throw error;
})

export default axiosCategory;