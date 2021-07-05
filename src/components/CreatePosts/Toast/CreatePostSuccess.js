import React, { useEffect, useState } from "react";

function CreatePostsSuccess(props) {
    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="bs-example">
                <div className={`toast ${props.isShow}`} id="myToast" style={{ position: 'absolute', top: 0, right: 0 }}>
                    <div className="toast-header">
                        <strong className="mr-auto"><i className="fa fa-grav" /> Message</strong>
                        <button onClick={props.handleCloseToast} type="button" className="ml-2 mb-1 close" data-dismiss="toast">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="toast-body">
                        <div>Create post is successfully. Congratulation!</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CreatePostsSuccess;