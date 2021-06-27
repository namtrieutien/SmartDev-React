import axios from 'axios';
import queryString from 'query-string';

const instance = axios.create({
  baseURL : 'https://smartdev-sunny.herokuapp.com/',
  //baseURL: 'http://localhost:8080/',
  paramsSerializer: param => queryString.stringify(param)
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYW0xQGdtYWlsLmNvbSIsImlhdCI6MTYyNDc1NTg0MSwiZXhwIjoxNjI0Nzk5MDQxfQ.K60RpUBtaz3is3KjaP5Mb3_1da4FsKT_xs3eStiUGxlsG3e_v2OvjpNNbD6_Cn5nMZtisNjETIHgSxthSCooYA`;
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