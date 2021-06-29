import * as type from '../../constants';

const postAction = {
    searchLoading: (params) => {
        return {
            type: type.POSTS_SEARCH_LOADING,
            params
        }
    },
    
    searchComplete: (data) => {
        return {
            type: type.POSTS_SEARCH_COMPLETE,
            data
        }
    }
}

export default postAction;

