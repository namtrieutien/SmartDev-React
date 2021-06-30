import * as type from '../../constants';

const s3Action = {
    uploadFileRequest: (dataRequest) => {
        return {
            type: type.UPLOAD_FILE_REQUEST,
            dataRequest
        }

    },
    uploadFileComplete: (dataResponse) => {
        return {
            type: type.UPLOAD_FILE_COMPLETE,
            dataResponse
        }

    }
}

export default s3Action;

