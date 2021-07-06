import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_LOCAL_API_URL,
  // baseURL: 'http://localhost:8080/',
});

instance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  }
)

export default instance;