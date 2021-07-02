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
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYW0xQGdtYWlsLmNvbSIsImlhdCI6MTYyNTE4ODExMiwiZXhwIjoxNjI1MzYwOTEyfQ.cZgRB8CRtd2NRZ-tQqgIubQt93J9kqFcJIA-UWGiRwXzy33G0C2w2BckH3_yIODrw3PrbugfnvbzbNOv9qWhiQ`;
    
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