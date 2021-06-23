import axios from 'axios';

const instance =  axios.create({
    baseURL : 'https://smartdev-sunny.herokuapp.com/'
    // baseURL : 'http://localhost:8080/'
});


export default instance;