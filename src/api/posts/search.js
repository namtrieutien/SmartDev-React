import instance from './axiosPost';

export const getSearchPostData = (requestParams) => {
    const url = `posts/search/by-title`; 
    return instance.get(url, { params: requestParams});
}