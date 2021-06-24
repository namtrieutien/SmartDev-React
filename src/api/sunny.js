import axios from 'axios';

const instance = axios.create({
  // baseURL : 'https://smartdev-sunny.herokuapp.com/'
  baseURL: 'http://localhost:8080/'
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaXRyYW5odWVAZ21haWwuY29tIiwiaWF0IjoxNjI0NTIwODA2LCJleHAiOjE2MjQ1NjQwMDZ9.-F2jvsIQoy-SpJ4XGR0uRAubpBMqwU8SZAAGq7GqGIfdSGbGgc8N7tqN6zi5aHku6coZaH8HT4o6-IZcL1ZweA`;
    return config;
  }
)


export default instance;