import { call, put, takeLatest } from 'redux-saga/effects';
import s3Api from '../../../api/s3/s3Api';
import s3Action from '../../actions/s3/s3.action';

import * as type from '../../constants';

function* uploadFileSaga(action) {
    try {
        const data = yield call(s3Api.uploadFile, action.dataRequest);
        yield put(s3Action.uploadFileComplete(data));
    } catch (error) {
        //handle error
    }
}


function* s3Saga() {
    yield takeLatest(type.UPLOAD_FILE_REQUEST, uploadFileSaga);
}

export default s3Saga;