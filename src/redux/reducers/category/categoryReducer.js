import * as type from '../../constants'

const initialState = {
    load: true,
    data: {},
    error:{
        code: 200,
        error: 'success',
        message: 'ok'
    }
};

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_ALL_CATEGORIES_REQUEST:      
            return {
                ...state,
                load: true
            };

        case type.GET_ALL_CATEGORIES_COMPLETE:
            const {error} = action.data;
            if(error){
                return {
                    ...state,
                    load: false,
                    error: action.data
                };
            }

            const { data } = action.data;
            return {
                ...state,
                load: false,
                data: data,
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