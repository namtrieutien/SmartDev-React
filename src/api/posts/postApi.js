import axiosPost from './axiosPost';

const postApi = {
    getSearchPostData: (requestParams) => {
        const url = `posts/search/by-title`; 
        return axiosPost.get(url, { params: requestParams});
    }

}

export default postApi;