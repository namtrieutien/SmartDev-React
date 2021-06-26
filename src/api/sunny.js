import axios from 'axios';
import queryString from 'query-string';

const instance = axios.create({
  baseURL : 'https://smartdev-sunny.herokuapp.com/',
  //baseURL: 'http://localhost:8080/',
  paramsSerializer: param => queryString.stringify(param)
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYW0xQGdtYWlsLmNvbSIsImlhdCI6MTYyNDY4MjI2MCwiZXhwIjoxNjI0NzI1NDYwfQ.V0cMISLYX5K2eC3UtXzuYgUPnQQCfZwsUN8s1PFRzFtgXqeecFAv5R9nGzhYEPdrIqqzrnt4Q3rzbmQT7b4SiA`;
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