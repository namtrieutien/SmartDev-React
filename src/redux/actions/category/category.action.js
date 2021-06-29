import * as type from '../constants';

export function getAllCategoriesRequestAction() {
    return {
        type: type.GET_ALL_CATOGORIES_REQUEST,
    }
}

export function getAllCategoriesCompleteAction(data) {
    return {
        type: type.GET_ALL_CATOGORIES_COMPLETE,
        data
    }
}