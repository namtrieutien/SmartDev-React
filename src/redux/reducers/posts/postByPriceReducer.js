import * as type from '../../constants'

const initialState = {
    params: {
        _page: 0,
        _limit: 18,
        from: 0,
        to: 10000000,
    },
    load: true,
    data: {},
    pagination: {
        _page: 0,
        _limit: 18,
        _totalRows: 100
    },
    response: {
        code: 200,
        response: 'success',
        message: 'ok'
    }
};
export const postByPriceReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.LOAD_POST_BY_PRICE:
            return {
                ...state,
                params: action.params,
                load: true,
            };

        case type.LOADED_POST_BY_PRICE:
            const { response } = action.data;
            if (response) {
                return {
                    ...state,
                    load: false,
                    response: action.data
                };
            }
            const { data, pagination } = action.data;
            return {
                ...state,
                load: false,
                data: data,
                pagination: pagination,
                response: {
                    code: 200,
                    response: 'success',
                    message: 'ok'
                }
            };
        default:
            return state;
    }
}