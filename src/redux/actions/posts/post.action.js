import * as type from '../../constants';

const postAction = {
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

