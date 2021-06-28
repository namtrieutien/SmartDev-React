import { takeLatest, takeEvery, call, put, all } from "redux-saga/effects";
import * as AuthService from "../../../services/AuthService";
import * as types from "../../actions/login/types";
import * as actions from '../../actions/login/authAction'
import history from '../../../history'

function* login({ email, password }) {
    try {
        const user = yield call(AuthService.login, { email, password })
        yield put(actions.userLoggedIn(user))
        history.push('/profile')
    } catch (e) {
        console.log("error login:", e.msg)
    }
}

function* logout() {
    yield call(AuthService.logout)
    yield put(actions.userLoggedOutAction())
    history.push('/home')
}

function* checkJWT() {
    const result = yield call(AuthService.isExpired);
    if (result ===  true) {
        yield call(AuthService.logout)
        yield put(actions.userLoggedOutAction())
    } 
}

function* watchLoginUser() {
    yield takeEvery(types.LOGIN_USER, login)
}

function* watchLogoutUser() {
    yield takeEvery(types.LOGOUT_USER, logout)
}
function* watchCheckJWT() {
    yield takeLatest(types.CHECK_JWT_EXP, checkJWT)
}
function* userSaga() {
    yield all([
        watchLoginUser(),
        watchLogoutUser(),
        watchCheckJWT()
    ])
}

export default userSaga;