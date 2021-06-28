import { USER_LOGGEDIN, USER_LOGGEDOUT, CHECK_JWT_EXP } from "../../actions/login/types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user  }
  : { isLoggedIn: false, user: null };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGEDIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
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