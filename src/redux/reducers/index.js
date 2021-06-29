import {combineReducers} from 'redux'

import addressReducer from './address.reducer';
import registerReducer from './user/register.reducer'
import paymentReducer from './user/payment.reducer'
import {manageUserReducer} from './user/manage.reducer'

import {searchPostReducer} from "./posts/searchPostReducer";

import {userReducer} from "./login/userReducer";

const rootReducer = combineReducers({
  addressReducer,
  userReducer,
  registerReducer,
  paymentReducer,
  searchPostReducer,
  manageUserReducer
})

export default rootReducer;