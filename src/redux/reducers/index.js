import { combineReducers } from 'redux'

import addressReducer from './address.reducer';
import registerReducer from './user/register.reducer'
import paymentReducer from './user/payment.reducer'
import cartReducer from './cartReducer';

// import {userReducer} from "./userReducer";

import { postReducer } from "./posts/postReducer";
import { categoryReducer } from "./category/categoryReducer";
import s3Reducer from "./s3/s3Reducer";
import { searchPostReducer } from "./posts/searchPostReducer";
import { userReducer } from "./login/userReducer";
import { editUserReducer } from "./user/edituser.reducer";
import { postByCatReducer } from "./posts/postByCatReducer";
import { managePostReducer } from "./user/managepost.reducer";


const rootReducer = combineReducers({
  addressReducer,
  userReducer,
  registerReducer,
  paymentReducer,
  cartReducer,
  searchPostReducer,
  postReducer,
  categoryReducer,
  s3Reducer,
  editUserReducer,
  postByCatReducer,
  managePostReducer
})

export default rootReducer;