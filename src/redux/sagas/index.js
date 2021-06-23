import { all } from 'redux-saga/effects';

import addressSaga from "./address.saga";
import registerSaga from "./user/register.saga"

export default function* rootSaga() {
    yield all([
      addressSaga(),
      registerSaga()
    ])
}