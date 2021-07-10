import { USER_LOGGEDIN, USER_LOGGEDOUT, LOGIN_USER, ERROR } from "../../actions/login/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user, check: false, error: false }
  : { isLoggedIn: false, user: null, check: false, error: false };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        check: true,
        error: false
      }
    case USER_LOGGEDIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        check: false,
      }
    case ERROR:
      return {
        check: false,
        error: action.payload
      }
    case USER_LOGGEDOUT:

      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }

    default:
      return state
  }
}