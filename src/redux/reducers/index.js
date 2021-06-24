import {combineReducers} from 'redux'

import addressReducer from './address.reducer';
import registerReducer from './user/register.reducer'

import {userReducer} from "./userReducer";
const rootReducer = combineReducers({
  addressReducer,
  registerReducer,
    userReducer
})

export default rootReducer;