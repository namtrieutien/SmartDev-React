import * as type from '../../constants'

const initialState = {
  data: {},
  check: false
}

export default function register(state = initialState, action) {
  switch (action.type) {
    case type.USER_REGISTER_REQUESTED:
      return {
        ...state,
        check: true
      }
    case type.USER_REGISTER:
      return {
        ...state,
        data: action.payload,
        check: false
      }
    case type.RESEND_ACTIVATION_LINK_REQUEST:
      console.log("si");
      console.log(action);
      return {
        ...state,
        email: action.email
      }
    default:
      return {
        ...state,
      }
  }
}