import axiosS3 from './axiosS3';

const s3Api = {
    uploadFile: (formData) =>
    {
        const url = `uploadfile`; 
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        return axiosS3.post(url, formData, config).then( (response) => console.log(response) );
    }
}

export default s3Api;