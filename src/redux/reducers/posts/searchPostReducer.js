import * as type from '../../constants'

const initialState = {
    keywordSearch: '',
    load: false,
    data: {},
    pagination: {}
};

export const searchPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.POSTS_SEARCH_LOADING:
            return {
                ...state,
                keywordSearch: action.keywordSearch,
                load: false
            };

        case type.POSTS_SEARCH_COMPLETE:
            const { data, pagination } = action.data;
            return {
                ...state,
                load: true,
                data: data,
                pagination: pagination
            };

        default:
            return state;
    }
}