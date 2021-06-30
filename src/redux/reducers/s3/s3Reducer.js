import * as type from '../../constants'

const initialState = {
    load: true,
    image_url: ''
};

export default function s3Reducer (state = initialState, action){
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
                image_url: action.dataResponse.substring(16)
            };

        default:
            return state;
    }
}
