import * as type from '../../constants'

const initialState = {
    load_getAllCategories: true,
    data_getAllCategories: {},
    error_getAllCategories:{
        code: 200,
        error: 'success',
        message: 'ok'
    },

    load_getSizeCategory: true,
    data_getSizeCategory: [],
    error_getSizeCategory:{
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
            const errorGetAllCategorieResponse = action.data.error;
            if(errorGetAllCategorieResponse){
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
        
        case type.GET_SIZE_CATEGORY_REQUEST:      
            return {
                ...state,
                load_getSizeCategory: true
            };

        case type.GET_SIZE_CATEGORY_COMPLETE:      
            const errorGetSizeCategoryResponse = action.data.error;
            if(errorGetSizeCategoryResponse){
                return {
                    ...state,
                    load_getSizeCategory: false,
                    error_getSizeCategory: action.data
                };
            }
        
            return {
                ...state,
                load_getSizeCategory: false,
                data_getSizeCategorys: action.data,
                error_getSizeCategory:{
                    code: 200,
                    error: 'success',
                    message: 'ok'
                }
            };

        default:
            return state;
    }
}