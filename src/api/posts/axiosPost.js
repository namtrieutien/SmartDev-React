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
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYW0xQGdtYWlsLmNvbSIsImlhdCI6MTYyNTExMzQ0MSwiZXhwIjoxNjI1Mjg2MjQxfQ.ABwh4bygJRKDmPFJd0b846vv4XlrZGUxJ2CRcAneWL2lUb66nIlCLA25MtLW743oVieah2iuQq6_4QzF_NBN4A`;

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