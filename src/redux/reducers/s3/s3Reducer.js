import * as type from '../../constants'

const initialState = {
    load: true,
    data: ''
};

export const s3Reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.UPLOAD_FILE_REQUEST:      
            return {
                ...state,
                load: true,
            };

        case type.UPLOAD_FILE_COMPLETE:  
            return {
                ...state,
                load: false,
                data: action.data
            };

        default:
            return state;
    }
}
