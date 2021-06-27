import {combineReducers} from 'redux'

import addressReducer from './address.reducer';
import registerReducer from './user/register.reducer'
import paymentReducer from './user/payment.reducer'
import cartReducer from './cartReducer';

import {userReducer} from "./userReducer";
const rootReducer = combineReducers({
  addressReducer,
  userReducer,
  registerReducer,
  paymentReducer,
  cartReducer,
})

export default rootReducer;