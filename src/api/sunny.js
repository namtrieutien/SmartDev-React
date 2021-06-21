import axios from 'axios';

const instance =  axios.create({
    baseURL : 'https://smartdev-sunny.herokuapp.com/'
});


export default instance;