import { takeLatest, takeEvery, call, put, all } from "redux-saga/effects";
import * as AuthService from "../../../services/AuthService";
import * as types from "../../actions/login/types";
import * as actions from '../../actions/login/authAction'
import * as cartAction from '../../actions/cartAction'
import history from '../../../history'
import { Redirect } from "react-router-dom";

function* login({ email, password }) {
    try {
        const data = yield call(AuthService.login, { email, password })
        yield put(actions.userLoggedIn(data))
        yield put(cartAction.loadCartAction())
        // yield put({type: types.USER_LOGGEDIN, payload: false});
        if (data.user.roles.includes("ROLE_ADMIN"))
            return <Redirect to="/management" />;
        else return <Redirect to="/profile" />;

    } catch (e) {
        yield put({type: types.ERROR, payload: e.response.data});
        console.log("error login:", e.response.data)
    }
}

function* logout() {
    yield call(AuthService.logout)
    yield put(actions.userLoggedOutAction())
    yield put(cartAction.RemoveCartAction())
    history.push('/home')
}

function* checkJWT() {
    const result = yield call(AuthService.isExpired);
    if (result === true) {
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