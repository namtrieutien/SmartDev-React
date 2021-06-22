import axios from 'axios';

const instance =  axios.create({
    baseURL : 'https://dc.tintoc.net/app/api-customer/public/'
});


export default instance;