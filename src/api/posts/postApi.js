import axiosPost from './axiosPost';

const postApi = {
    getSearchPostData: (requestParams) => {
        const url = `posts/search/by-title`; 
        return axiosPost.get(url, { params: requestParams});
    },
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