import * as type from '../../constants'

const initialState = {
    params: {
        title: '',
        _page: 0,
        _limit: 18,
        cat_id: null,
    },
    load: true,
    data: {},
    pagination: {
        _page: 0,
        _limit: 18,
        _totalRows: 100
    },
    error: {
        code: 200,
        error: 'success',
        message: 'ok'
    }
};
export const postByCatReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.LOAD_POST_BY_CAT:
            console.log("action.params", action.params)
            return {
                ...state,
                params: action.params,
                load: true,
            };

        case type.LOADED_POST_BY_CAT:
            const { error } = action.data;
            if (error) {
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
                error: {
                    code: 200,
                    error: 'success',
                    message: 'ok'
                }
            };
        case type.RESET_PAGE:
            return {
                ...state,
                data: {},
                pagination: {
                    _page: 0,
                    _limit: 18,
                    _totalRows: 100
                },
            }
        default:
            return state;
    }
}