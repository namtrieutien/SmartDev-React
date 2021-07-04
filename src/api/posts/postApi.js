import axiosPost from './axiosPost';

const postApi = {
    createPost: (formData) =>
    {
        const url = `posts/create`; 
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        return axiosPost.post(url, formData, config).then( (response) => {
            if (response && response.data) {
                return response.data;
            } 
            return response;} );
    }
}

export default postApi;