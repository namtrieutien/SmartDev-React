import axios from 'axios';
import queryString from 'query-string';

const instance = axios.create({
  //baseURL : 'https://smartdev-sunny.herokuapp.com/',
  baseURL: 'http://localhost:8080/',
  paramsSerializer: param => queryString.stringify(param)
});

instance.interceptors.request.use(
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

instance.interceptors.response.use((respone) => {
  if (respone && respone.data) {
    console.log(respone.data);
    return respone.data;
  }
  return respone
}, (error) => {
  // handle error
  throw error;
})

export default instance;