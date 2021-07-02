import * as type from '../../constants'

const initialState = {
    load_getAllCategories: true,
    data_getAllCategories: {},
    error_getAllCategories:{
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
                load_getAllCategories: true
            };

        case type.GET_ALL_CATEGORIES_COMPLETE:
            const {error} = action.data;
            if(error){
                return {
                    ...state,
                    load_getAllCategories: false,
                    error_getAllCategories: action.data
                };
            }

            return {
                ...state,
                load_getAllCategories: false,
                data_getAllCategories: action.data,
                error_getAllCategories:{
                    code: 200,
                    error: 'success',
                    message: 'ok'
                }
            };

        default:
            return state;
    }
}