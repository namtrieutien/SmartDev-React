import * as type from '../../constants'

const initialState = {
    params: {
        title: '',
        _page: 0,
        _limit: 18
    },
    load: true,
    data: {},
    pagination: {
        _page:0,
        _limit:18,
        _totalRows: 100
    },
    error:{
        code: 200,
        error: 'success',
        message: 'ok'
    }
};

export const searchPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.POSTS_SEARCH_LOADING:
            console.log(action.params)
            return {
                ...state,
                params: action.params,
                load: true,
            };

        case type.POSTS_SEARCH_COMPLETE:
            const {error} = action.data;
            if(error){
                return {
                    ...state,
                    load: false,
                    error: action.data
                };
            }

            const { data, pagination } = action.data;
            return {
                ...state,
                load: false,
                data: data,
                pagination: pagination,
                error:{
                    code: 200,
                    error: 'success',
                    message: 'ok'
                }
            };

        default:
            return state;
    }
}