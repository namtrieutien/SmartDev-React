import { call, put, takeEvery } from 'redux-saga/effects';

import * as type from '../../constants';

import apiSunny from '../../../api/sunny';

const pay = async (requestPayment) => {
  try {
    const response = await apiSunny.post(`api/user/payment/pay`, requestPayment);
    console.log(response.data);
    // window.open(response.data.payment_link, "_blank")
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    return e.response.data;
  }
}

function* userPay(action) {
  try {
    action.requestPayment= {...action.requestPayment, intent:'SALE', method: 'Paypal'}
    const data = yield call(pay, action.requestPayment);
    yield put({type: type.USER_PAYMENT, payload: data});
  } catch (e) {
    console.log(e.messages);
    // yield put({type: type.GET_USERS_FAILED, message: e.message});
  }
}


function* registerSaga() {
  yield takeEvery(type.USER_PAYMENT_REQUESTED, userPay);
}

export default registerSaga;