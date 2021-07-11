import * as type from '../../constants'

const initialState = {
  data: {},
  check: false,
  checkMail: false,
  checkSent: false
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
      return {
        ...state,
        email: action.email,
        checkMail: true,
        checkSent: false
      }
    case type.RESEND_ACTIVATION_LINK:
      return {
        ...state,
        checkMail: false,
        checkSent: true
      }
    default:
      return {
        ...state,
      }
  }
}