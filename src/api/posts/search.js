
import axios from 'axios';

import apiSunny from '../sunny';

export const getSearchPostData = (keywordSearch) => {
    return apiSunny.get(`posts/search-post-by-title?title=` + keywordSearch + `&_page=0&_limit=6`);
}