import * as type from '../../constants';

export function register(user) {
    return {
        type: type.USER_REGISTER_REQUESTED,
        user
    }
}

