import * as type from '../../constants'

const initialState = {
    keywordSearch: '',
    load: false
};

export const searchPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.POSTS_SEARCH_LOADING:
            return {
                ...state,
                load: true
            };

        case type.POSTS_SEARCH_COMPLETE:
            const { data } = action.payload;
            return {
                ...state,
                keywordSearch: data,
                load: true
            };

        default:
            return state;
    }
}