import * as type from '../../constants'

const initialState = {
    user: {},
    checkStatus: false,
    checkSuccessful: false
  }

export const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.EDIT_USER:
      return {
        ...state,
        checkStatus: true,
      }
    case type.USER_EDITED:
      return {
        ...state,
        user: action.user,
        checkStatus: false,
        checkSuccessful: true
      }

    default:
      return state
  }
}