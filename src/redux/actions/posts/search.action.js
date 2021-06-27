import * as type from '../../constants';

export const searchLoading = (params) => {
    return {
        type: type.POSTS_SEARCH_LOADING,
        params
    }
}

export function searchComplete(data) {
    return {
        type: type.POSTS_SEARCH_COMPLETE,
        data
    }
}