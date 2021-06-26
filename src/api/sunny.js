import axios from 'axios';
import queryString from 'query-string';

const instance = axios.create({
  baseURL : 'https://smartdev-sunny.herokuapp.com/',
  //baseURL: 'http://localhost:8080/',
  paramsSerializer: param => queryString.stringify(param)
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYW0xQGdtYWlsLmNvbSIsImlhdCI6MTYyNDcwOTg1NCwiZXhwIjoxNjI0NzUzMDU0fQ.gU5tkVn72uiAPFUtPeeyO9gFFtoJk4fHb7br0I6q6yKozgmbTM-idQXRgEi4P3DJYeapE5nn96EY6GwWAHbLew`;
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