import { takeEvery, call, put, all } from "redux-saga/effects";
import * as type from '../../constants';
import userApi from '../../../api/management/userApi';
import * as actions from '../../actions/user/edit.action'
import * as authAction from '../../actions/login/authAction'

//ADD TO CART
const editUserAPI = async (user) => {
  try {
    const response = await userApi.editUser(user);
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
}

function* editUser(action) {
  try {
    const data = yield call(editUserAPI, action.user);
    if (data) {
      yield put(actions.userEdited(data));
    }
  } catch (e) {
    console.log(e.messages);
  }
}

function* userEdited(action) {
  const oldUser = JSON.parse(localStorage.getItem("user"));
  const newUser = {
    ...oldUser,
    user: action.user
  };
  localStorage.setItem("user", JSON.stringify(newUser));
  yield put(authAction.userLoggedIn(newUser));
}


//WATCHER SAGA
function* watchEditUser() {
  yield takeEvery(type.EDIT_USER, editUser)
}
function* watchEditedUser() {
  yield takeEvery(type.USER_EDITED, userEdited)
}

function* editUserSaga() {
  yield all([
    watchEditUser(),
    watchEditedUser()
  ])
}

export default editUserSaga;