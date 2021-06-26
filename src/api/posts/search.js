
import axios from 'axios';
import queryString from 'query-string';
import instance from '../sunny';

export const getSearchPostData = (keywordSearch) => {
    const pag = {
        title: keywordSearch,
        _page: 1,
        _limit: 10
    }
    const paramString = queryString.stringify(pag)
    const url = `posts/search-post-by-title?${paramString}`; 
    console.log(url);
    return instance.get(url);
}