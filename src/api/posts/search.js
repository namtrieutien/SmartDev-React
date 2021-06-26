
import axios from 'axios';

import apiSunny from '../sunny';

export const getSearchPostData = (keywordSearch) => {
    const url = 'posts/search-post-by-title?title=' + keywordSearch +'\&_page=0\&_limit=0'; 
    console.log(url);
    return apiSunny.get(url);
}