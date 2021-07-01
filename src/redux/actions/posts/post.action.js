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

    createPostRequest: (formData) => {
        return {
            type: type.POSTS_CREATE_POST_REQUEST,
            formData
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

