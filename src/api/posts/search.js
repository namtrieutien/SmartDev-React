import instance from '../sunny';

export const getSearchPostData = (keywordSearch) => {
    const pag = {
        title: keywordSearch,
        _page: 0,
        _limit: 6
    }
    const url = `posts/search-post-by-title`; 
    console.log(url);
    return instance.get(url, { params: pag});
}