import { call, put, takeLatest } from 'redux-saga/effects';
import {getSearchPostData} from '../../../api/posts/search';
import {searchComplete} from '../../actions/posts/search.action';

import * as type from '../../constants';

function* getSearchPostSaga({keywordSearch}) {
    try {
        const data = yield call(getSearchPostData, keywordSearch);
        yield put(searchComplete(data));
    } catch (error) {
        //handle error
    }
}

function* searchPostsSaga() {
    yield takeLatest(type.POSTS_SEARCH_LOADING, getSearchPostSaga);
}

export default searchPostsSaga;