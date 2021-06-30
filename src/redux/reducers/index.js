import {combineReducers} from 'redux'

import addressReducer from './address.reducer';
import registerReducer from './user/register.reducer'
import paymentReducer from './user/payment.reducer'

import {userReducer} from "./userReducer";

import {postReducer} from "./posts/postReducer";
import {categoryReducer} from "./category/categoryReducer";
import s3Reducer from "./s3/s3Reducer";

const rootReducer = combineReducers({
  addressReducer,
  userReducer,
  registerReducer,
  paymentReducer,
  postReducer,
  categoryReducer,
  s3Reducer
})

export default rootReducer;