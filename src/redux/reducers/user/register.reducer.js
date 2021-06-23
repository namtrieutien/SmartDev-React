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
        check : true
      }
    case type.USER_REGISTER:
      console.log(action.payload);
      return {
        ...state,
        data: action.payload,
        check : false
      }
    default:
      return {
        ...state,
      }
  }
}