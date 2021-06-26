import axios from 'axios';

const instance = axios.create({
  //baseURL : 'https://smartdev-sunny.herokuapp.com/'
  baseURL: 'http://localhost:8080/'
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYW0xQGdtYWlsLmNvbSIsImlhdCI6MTYyNDY4MjI2MCwiZXhwIjoxNjI0NzI1NDYwfQ.V0cMISLYX5K2eC3UtXzuYgUPnQQCfZwsUN8s1PFRzFtgXqeecFAv5R9nGzhYEPdrIqqzrnt4Q3rzbmQT7b4SiA`;
    return config;
  }
)


export default instance;