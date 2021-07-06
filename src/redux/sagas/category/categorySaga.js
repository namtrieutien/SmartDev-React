import { call, put, takeLatest } from 'redux-saga/effects';
import categoryApi from '../../../api/category/categoryApi';
import {getAllCategoriesCompleteAction, getSizeCategoryCompleteAction} from '../../actions/category/category.action';

import * as type from '../../constants';

function* getAllCatogiresSaga() {
    try {
        const data = yield call(categoryApi.getAllCategoriesData);
        yield put(getAllCategoriesCompleteAction(data));
    } catch (error) {
        //handle error
    }
}

function* getSizeCategorySaga(action) {
    try {
        const data = yield call(categoryApi.getSizeCategory(action.data));
        yield put(getSizeCategoryCompleteAction(data));
    } catch (error) {
        //handle error
    }
}

function* categorySaga() {
    yield takeLatest(type.GET_ALL_CATEGORIES_REQUEST, getAllCatogiresSaga);
    yield takeLatest(type.GET_SIZE_CATEGORY_REQUEST, getSizeCategorySaga);
}

export default categorySaga;