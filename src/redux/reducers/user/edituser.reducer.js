import * as type from '../../constants'

const initialState = {
    user: {}
  }

export const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.USER_EDITED:
      return {
        ...state,
        user: action.user,
      }

    default:
      return state
  }
}