import * as type from '../../constants';

export function register(user) {
    return {
        type: type.USER_REGISTER_REQUESTED,
        user
    }
}

export const resendActivationLink = (email) => {
  return {
      type: type.RESEND_ACTIVATION_LINK_REQUEST,
      email,
  }
}