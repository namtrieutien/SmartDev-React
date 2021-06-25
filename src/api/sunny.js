import axios from 'axios';

const instance = axios.create({
  // baseURL : 'https://smartdev-sunny.herokuapp.com/'
  baseURL: 'http://localhost:8080/'
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaXRyYW5odWVAZ21haWwuY29tIiwiaWF0IjoxNjI0NTg2NDYzLCJleHAiOjE2MjQ2Mjk2NjN9.wklefcsRrCVRLkCtI7NtqvutYLZisQebVM2Ya5tPMhLUrqdlpwEGSQ8meQf88gC8LPgswxDKZXxRQXJ_RDQ56g`;
    return config;
  }
)


export default instance;