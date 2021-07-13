import { call, put, takeEvery } from 'redux-saga/effects';

import * as type from '../../constants';

import apiSunny from '../../../api/sunny';
import * as cartAction from '../../actions/cartAction'

const pay = async (requestPayment) => {
  try {
    const response = await apiSunny.post(`/order/payment`, requestPayment);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    return e.response.data;
  }
}

function* userPay(action) {
  try {
    action.requestPayment= {...action.requestPayment, intent:'SALE', method: 'Paypal'}
    // console.log(action.requestPayment);
    const data = yield call(pay, action.requestPayment);
    console.log(data);
    yield put({type: type.USER_PAYMENT, payload: data});
  } catch (e) {
    console.log(e.messages);
    // yield put({type: type.GET_USERS_FAILED, message: e.message});
  }
}

const execute = async (paymentInfo) => {
  try {
    const response = await apiSunny.post(`/order/payment/success`, paymentInfo);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

function* userPaymentSuccess(action) {
  try {
    const data = yield call(execute, action.paymentInfo);
    yield put({type: type.USER_EXECUTE_PAYMENT, payload: data});
    localStorage.removeItem('cart');
    yield put(cartAction.RemoveCartAction())
  } catch (e) {
    console.log(e.messages);
    // yield put({type: type.GET_USERS_FAILED, message: e.message});
  }
}

const getPaymentHistory = async (date) => {
  try {
    const response = await apiSunny.get(`/order/payment/history`, {
      params: date
    });
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

function* userGetPaymentHistory(action) {
  try {
    console.log(action.date);
    const data = yield call(getPaymentHistory, action.date);
    yield put({type: type.USER_GET_PAYMENT_HISTORY, payload: data});
  } catch (e) {
    console.log(e.messages);
    // yield put({type: type.GET_USERS_FAILED, message: e.message});
  }
}

const getCartItems = async () => {
  try {
    const response = await apiSunny.get(`/order/cart`);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
} 

function* userGetCartItems(action) {
  try {
    const data = yield call(getCartItems);
    yield put({type: type.USER_GET_CART_ITEMS, payload: data});
  } catch (e) {
    console.log(e.messages);
    // yield put({type: type.GET_USERS_FAILED, message: e.message});
  }
}

const cancelPayment = async (token) => {
  try {
    const response = await apiSunny.post(`/order/payment/cancel`, token);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
} 

function* userCancelPayment(action) {
  try {
    const data = yield call(cancelPayment, action.token);
    console.log(data);
    yield put({type: type.USER_CANCEL_PAYMENT, payload: data});
  } catch (e) {
    console.log(e.messages);
    // yield put({type: type.GET_USERS_FAILED, message: e.message});
  }
}

function* paymentSaga() {
  yield takeEvery(type.USER_PAYMENT_REQUESTED, userPay);
  yield takeEvery(type.USER_EXECUTE_PAYMENT_REQUESTED, userPaymentSuccess);
  yield takeEvery(type.USER_GET_PAYMENT_HISTORY_REQUESTED, userGetPaymentHistory);
  yield takeEvery(type.USER_GET_CART_ITEMS_REQUEST, userGetCartItems);
  yield takeEvery(type.USER_CANCEL_PAYMENT_REQUESTED, userCancelPayment);
}

export default paymentSaga;