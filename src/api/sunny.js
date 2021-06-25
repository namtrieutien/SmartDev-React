import axios from 'axios';

const instance = axios.create({
  // baseURL : 'https://smartdev-sunny.herokuapp.com/'
  baseURL: 'http://localhost:8080/'
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaXRyYW5odWVAZ21haWwuY29tIiwiaWF0IjoxNjI0NTkxNDM1LCJleHAiOjE2MjQ2MzQ2MzV9.gn-Ll-EeTjTNZCD_ykEyj5aZFZ6lHZnag-fhkY9OfEKKDKjt-_XwTMrFMxT6zCRFArXUCldh7sGzYiLzHk5P8w`;
    return config;
  }
)


export default instance;