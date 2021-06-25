import * as type from '../../constants'

const initialState = {
  data: {},
  check: false
}

export default function payment(state = initialState, action) {
  switch (action.type) {
    case type.USER_PAYMENT_REQUESTED:
      return {
        ...state,
        check : true
      }
    case type.USER_PAYMENT:
      console.log(action.payload);
      if (action.payload.payment_link) {
        window.open(action.payload.payment_link, "_blank")
      }
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