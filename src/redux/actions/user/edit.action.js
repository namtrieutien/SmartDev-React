import * as type from '../../constants';

export const edit = user => {
    return {
        type: type.EDIT_USER,
        user
    }
  }
export const userEdited = user => {
    return {
        type: type.USER_EDITED,
        user
    }
  }

