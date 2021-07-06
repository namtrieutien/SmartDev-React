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
        _limit: 18, 
        _totalRows: 100
    },
    error:{
        code: 200,
        error: 'success',
        message: 'ok'
    },
    lastTitleFound: ''
};

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
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
