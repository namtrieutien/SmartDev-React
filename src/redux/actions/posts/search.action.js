import * as type from '../../constants';

export function searchLoading(keywordSearch) {
    return {
        type: type.POSTS_SEARCH_LOADING,
        keywordSearch
    }
}

export function searchComplete(data) {
    return {
        type: type.POSTS_SEARCH_COMPLETE,
        data
    }
}