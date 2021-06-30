import axiosPost from './axiosPost';

const postApi = {
    getSearchPostData: (requestParams) => {
        const url = `posts/search/by-title`; 
        return axiosPost.get(url, { params: requestParams});
    },
    createPost: (postContent) =>
    {
        const url = `posts/create`; 
        return axiosPost.post(url, postContent);
    }
}

export default postApi;