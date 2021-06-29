import axios from 'axios';
import queryString from 'query-string';

const axiosCategory = axios.create({
  //baseURL : 'https://smartdev-sunny.herokuapp.com/',
  baseURL: 'http://localhost:8080/',
  paramsSerializer: param => queryString.stringify(param)
});

axiosCategory.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    //cheat authencation token
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYW0xQGdtYWlsLmNvbSIsImlhdCI6MTYyNDk3MjIyOSwiZXhwIjoxNjI1MTQ1MDI5fQ.IFFkp_uV4r5RxwJ56De0P95SRGcMucdyuY9auOblzdsxDTnMjo_dGCP8E3IIJCDN8wH-iofuE6Sme0k1khIuyA`;
    
    return config;
  }
)

axiosCategory.interceptors.response.use((response) => {
  if (response && response.data) {
    console.log(response.data);
    return response.data;
  }
  return response
}, (error) => {
  // handle error
  throw error;
})

export default axiosCategory;