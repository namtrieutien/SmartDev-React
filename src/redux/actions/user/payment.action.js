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


