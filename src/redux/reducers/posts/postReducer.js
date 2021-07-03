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
    error:{
        code: 200,
        error: 'success',
        message: 'ok'
    },
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        // search post
        // case type.POSTS_SEARCH_LOADING:
        //     return {
        //         ...state,
        //         params: action.params,
        //         load: true,
        //     };
        //
        // case type.POSTS_SEARCH_COMPLETE:
        //     const {error} = action.data;
        //     if(error){
        //             return {
        //                 ...state,
        //                 load: false,
        //                 error: action.data
        //             };
        //         }
        //
        //     const { data, pagination } = action.data;
        //     return {
        //         ...state,
        //         load: false,
        //         data: data,
        //         pagination: pagination,
        //         error:{
        //             code: 200,
        //             error: 'success',
        //             message: 'ok'
        //         }
        //     };

        //create post
        case type.POSTS_CREATE_POST_REQUEST:
            return{
                load: true
            };

        case type.POSTS_CREATE_POST_RESPONSE:
            return {
                ...state,
                load: false,
                // data: data,
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
