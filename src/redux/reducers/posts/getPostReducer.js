import * as type from '../../constants'


const initialState =
{
    load: true,
    post: null
};

export  const getPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.POST_LOADED:
            return {
                ...state,
                load: false,
                post: action.post
            }
        default:
            return state;
    }
};