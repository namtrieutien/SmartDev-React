import {combineReducers} from 'redux'

import addressReducer from './address.reducer';
import registerReducer from './user/register.reducer'
import paymentReducer from './user/payment.reducer'

import {userReducer} from "./userReducer";

import {searchPostReducer} from "./posts/searchPostReducer";

const rootReducer = combineReducers({
  addressReducer,
  userReducer,
  registerReducer,
  paymentReducer,
  searchPostReducer,
})

export default rootReducer;