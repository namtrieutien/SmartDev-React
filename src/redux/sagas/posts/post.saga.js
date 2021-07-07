import { call, put, takeLatest } from 'redux-saga/effects';
import postApi from '../../../api/posts/postApi';
import postAction from '../../actions/posts/post.action';

import * as type from '../../constants';

function* createPostSaga(action) {
    try {
        const data = yield call(postApi.createPost, action.formData);
        yield put(postAction.createPostComplete(data));
    } catch (error) {
        //handle error
    }
}


function* postSaga() {
    yield takeLatest(type.POSTS_CREATE_POST_REQUEST, createPostSaga);
}

export default postSaga;