import { call, put, takeEvery } from 'redux-saga/effects';

import * as type from '../../constants';

import apiSunny from '../../../api/sunny';

const register = async (user) => {
  try {
    const response = await apiSunny.post(`api/user/register`, user, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

function* userRegister(action) {
  try {
    const data = yield call(register, action.user);
    yield put({type: type.USER_REGISTER, payload: data});
  } catch (e) {
    console.log(e.messages);
    // yield put({type: type.GET_USERS_FAILED, message: e.message});
  }
}

const sendActivationLink = async (email) => {
  try {
    const response = await apiSunny.post(`api/user/register/resend-activation-link`, {email});
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

function* userSendActivationLink(action) {
  try {
    const data = yield call(sendActivationLink, action.email);
    yield put({type: type.RESEND_ACTIVATION_LINK, payload: data});
  } catch (e) {
    console.log(e.messages);
    // yield put({type: type.GET_USERS_FAILED, message: e.message});
  }
}

function* registerSaga() {
  yield takeEvery(type.USER_REGISTER_REQUESTED, userRegister);
  yield takeEvery(type.RESEND_ACTIVATION_LINK_REQUEST, userSendActivationLink)
}

export default registerSaga;