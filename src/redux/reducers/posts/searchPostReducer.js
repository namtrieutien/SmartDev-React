import * as type from '../../constants'

const initialState = {
    params: {
        title: '',
        _page: 0,
        _limit: 6
    },
    load: true,
    data: {},
    pagination: {
        _page:0, 
        _limit: 6, 
        _totalRows: 100
    },
};

export const searchPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.POSTS_SEARCH_LOADING:      
            return {
                ...state,
                params: action.params,
                load: true,
            };

        case type.POSTS_SEARCH_COMPLETE:
            const { data, pagination } = action.data;
            return {
                ...state,
                load: false,
                data: data,
                pagination: pagination
            };

        default:
            return state;
    }
}