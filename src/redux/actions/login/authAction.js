import * as types from "./types";

 export const loginUserAction = (email, password) => {
  return {
      type: types.LOGIN_USER,
      email, 
      password
  }
}

/**
* 
* @param {email, token} user 
*/
export const userLoggedIn = (user) => {
  return {
      type: types.USER_LOGGEDIN,
      user
  }
}

export const logoutUserAction = () => {
  return {
      type: types.LOGOUT_USER
  }
}

export const userLoggedOutAction = () => {
  return {
      type: types.USER_LOGGEDOUT
  }
}