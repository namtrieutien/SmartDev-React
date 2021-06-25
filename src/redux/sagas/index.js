import { all } from 'redux-saga/effects';

import addressSaga from "./address.saga";
import registerSaga from "./user/register.saga"
import userSaga from "./login/userSaga"
import paymentSaga from './user/payment.saga'

export default function* rootSaga() {
    yield all([
      addressSaga(),
      registerSaga(),
      userSaga(),
      paymentSaga()
    ])
}