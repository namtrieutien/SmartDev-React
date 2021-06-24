import * as type from '../../constants';

export function pay(requestPayment) {
    return {
        type: type.USER_PAYMENT_REQUESTED,
        requestPayment
    }
}

