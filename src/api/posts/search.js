import instance from './axiosPost';

export const getSearchPostData = (requestParams) => {
    const url = `posts/search/by-title`; 
    return instance.get(url, { params: requestParams});
}
export const getPostByCat = (requestParams) => {
    const url = `posts/search/by-cat`; 
    return instance.get(url, { params: requestParams});
}
export const getPostByPrice = (requestParams) => {
    const url = `posts/search/by-price`; 
    return instance.get(url, { params: requestParams});
}