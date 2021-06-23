import {combineReducers} from 'redux'

import addressReducer from './address.reducer';
import registerReducer from './user/register.reducer'

const rootReducer = combineReducers({
  addressReducer,
  registerReducer
})

export default rootReducer;