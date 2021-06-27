import * as type from '../../constants';

export const searchLoading = (keywordSearch, page, limit) => {
    return {
        type: type.POSTS_SEARCH_LOADING,
        keywordSearch,
        page,
        limit
    }
}

export function searchComplete(data) {
    return {
        type: type.POSTS_SEARCH_COMPLETE,
        data
    }
}