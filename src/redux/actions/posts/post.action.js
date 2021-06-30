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
    },

    createPostRequest: (dataRequest) => {
        return {
            type: type.POSTS_CREATE_POST_REQUEST,
            dataRequest
        }

    },
    createPostComplete: (dataResponse) => {
        return {
            type: type.POSTS_CREATE_POST_RESPONSE,
            dataResponse
        }

    }
}

export default postAction;

