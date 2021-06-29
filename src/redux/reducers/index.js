import {combineReducers} from 'redux'

import addressReducer from './address.reducer';
import registerReducer from './user/register.reducer'
import paymentReducer from './user/payment.reducer'

import {userReducer} from "./userReducer";

import {searchPostReducer} from "./posts/searchPostReducer";
import {categoryReducer} from "./category/categoryReducer";

const rootReducer = combineReducers({
  addressReducer,
  userReducer,
  registerReducer,
  paymentReducer,
  searchPostReducer,
  categoryReducer
})

export default rootReducer;