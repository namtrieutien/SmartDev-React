import {combineReducers} from 'redux'

import addressReducer from './address.reducer';
import registerReducer from './user/register.reducer'
import paymentReducer from './user/payment.reducer'

const rootReducer = combineReducers({
  addressReducer,
  registerReducer,
  paymentReducer
})

export default rootReducer;