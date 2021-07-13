import * as type from '../../constants';

export function pay(requestPayment) {
    return {
        type: type.USER_PAYMENT_REQUESTED,
        requestPayment
    }
}

export function executePayment(paymentInfo) {
  return {
      type: type.USER_EXECUTE_PAYMENT_REQUESTED,
      paymentInfo
  }
}

export function cancelPayment(token) {
  return {
      type: type.USER_CANCEL_PAYMENT_REQUESTED,
      token
  }
}

export function paymentHistory(date) {
  return {
      type: type.USER_GET_PAYMENT_HISTORY_REQUESTED,
      date
  }
}

export function getCartItems() {
  return {
      type: type.USER_GET_CART_ITEMS_REQUEST,
  }
}

