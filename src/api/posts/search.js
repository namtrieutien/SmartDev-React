import instance from '../sunny';

export const getSearchPostData = ({keywordSearch, page, limit}) => {
    console.log('getSearchPostData keywordSearch: ' + keywordSearch);
    console.log('getSearchPostData page: ' + page);
    console.log('getSearchPostData limit: ' + limit);
    
    const pag = {
        title: keywordSearch,
        _page: page,
        _limit: limit
    }
    const url = `posts/search-post-by-title`; 
    console.log(url);
    return instance.get(url, { params: pag});
}