import * as types from '../../constants'

const initialState = {
    total_all_orders: null,
    by_category : []
};
export const manageUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_STATISTIC:
            return { ...state, 
                total_all_orders : action.total_all_orders,
                by_category     : action.by_category
             }
        default:
            return state;
    }
};