import { call, put, takeLatest } from 'redux-saga/effects';
import {getAllCategoriesData} from '../../../api/category/categoryApi';
import {searchComplete} from '../../actions/category/category.action';

import * as type from '../../constants';

function* getAllCatogiresSaga() {
    try {
        const data = yield call(getAllCategoriesData);
        yield put(getAllCategoriesCompleteAction(data));
    } catch (error) {
        //handle error
    }
}

function* categorySaga() {
    yield takeLatest(type.GET_ALL_CATEGORIES_REQUEST, getAllCatogiresSaga);
}

export default categorySaga;