import {combineReducers} from 'redux'

import addressReducer from './address.reducer';
import registerReducer from './user/register.reducer'
import paymentReducer from './user/payment.reducer'

import {userReducer} from "./userReducer";

import {postReducer} from "./posts/postReducer";
import {categoryReducer} from "./category/categoryReducer";

const rootReducer = combineReducers({
  addressReducer,
  userReducer,
  registerReducer,
  paymentReducer,
  postReducer,
  categoryReducer
})

export default rootReducer;