import * as type from '../../constants';

export function getAllCategoriesRequestAction() {
    return {
        type: type.GET_ALL_CATEGORIES_REQUEST,
    }
}

export function getAllCategoriesCompleteAction(data) {
    return {
        type: type.GET_ALL_CATEGORIES_COMPLETE,
        data
    }
}