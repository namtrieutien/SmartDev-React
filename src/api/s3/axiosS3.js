import axios from 'axios';
import queryString from 'query-string';

const axiosS3 = axios.create({
  //baseURL : 'https://smartdev-sunny.herokuapp.com/',
  baseURL: 'http://localhost:8080/',
});

axiosS3.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }

    //cheat authencation token
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYW0xQGdtYWlsLmNvbSIsImlhdCI6MTYyNTAxNDY0NSwiZXhwIjoxNjI1MTg3NDQ1fQ.DfdYrEeMQJvRbLdCFU6chamyOzlOgoCqCj5iTIGfYkNE17bPosU7c7zyN0v4qEhQdpD_IVM9ztC-kdfaBM4GvA`;

    return config;
  }
)

axiosS3.interceptors.response.use((response) => {
  if (response && response.data) {
    console.log(response.data);
    return response.data;
  }
  return response;
}, (error) => {
  // handle error
  throw error;
})

export default axiosS3;