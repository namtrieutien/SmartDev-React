import * as type from '../../constants'

const initialState = {
  data: {},
  check: false,
  checkExecute: false,
  paymentHistory: {},
  listItems: {},
  checkGetPayment: false,
  cancel: false
}

export default function payment(state = initialState, action) {
  switch (action.type) {
    case type.USER_PAYMENT_REQUESTED:
      return {
        ...state,
        check: true
      }
    case type.USER_PAYMENT:
      console.log(action.payload);
      if (action.payload.payment_link) {
        window.open(action.payload.payment_link, '_self')
        return {
          ...state,
          data: action.payload,
          check: false
        }
      }
      else {
        return {
          ...state,
          check: false
        }
      }
    case type.USER_EXECUTE_PAYMENT_REQUESTED:
      return {
        ...state,
        checkExecute: true
      }
    case type.USER_EXECUTE_PAYMENT:
      return {
        ...state,
        data: action.payload,
        checkExecute: false
      }
    case type.USER_CANCEL_PAYMENT_REQUESTED:
      return {
        ...state,
        cancel: false
      }
    case type.USER_CANCEL_PAYMENT:
      return {
        ...state,
        cancel: true,
      }
    case type.USER_GET_PAYMENT_HISTORY_REQUESTED:
      return {
        ...state,
        checkGetPayment: true
      }
    case type.USER_GET_PAYMENT_HISTORY:
      return {
        ...state,
        paymentHistory: action.payload,
        checkGetPayment: false
      }

    case type.USER_GET_CART_ITEMS_REQUEST:
      return {
        ...state
      }
    case type.USER_GET_CART_ITEMS:
      console.log(action.payload);
      return {
        ...state,
        listItems: action.payload
      }
    default:
      return {
        ...state,
      }
  }
}