import { all } from 'redux-saga/effects';

import addressSaga from "./address.saga";
import registerSaga from "./user/register.saga"
import userSaga from "./login/userSaga"
import paymentSaga from './user/payment.saga'
import postSaga from './posts/post.saga'
import categorySaga from './category/categorySaga';
import s3Saga from './s3/s3.saga';
import addToCartSaga from './user/addtocart.saga'
import editUserSaga from './user/edituser.saga';
import searchPostsSaga from './posts/search.saga'

export default function* rootSaga() {
    yield all([
      addressSaga(),
      registerSaga(),
      userSaga(),
      paymentSaga(),
      addToCartSaga(),
      postSaga(),
      categorySaga(),
      s3Saga(),
      editUserSaga(),
      searchPostsSaga()
    ])
}