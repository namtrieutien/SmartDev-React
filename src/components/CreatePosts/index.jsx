import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useForm } from 'react-hook-form'
import {connect} from 'react-redux'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./createPostsStyle.css"
import { getAllCategoriesRequestAction } from '../../redux/actions/category/category.action';
import loading from './login-image/loading.gif';


CreatePosts.propTypes = {

};


const SigninSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  price: yup.string().required('Price is required')
});

function CreatePosts(props) {

  const [checkRegister, setCheckRegister] = useState(false)

  const [check, setCheck] = useState({
    checkCity: false,
    checkDistrict: false,
    checkCommute: false
  });

  const categories = useSelector(state => {
    return state.categoryReducer.data;
  });

  const responseData = useSelector(state => {
    return state.registerReducer.data;
  });
 
  useEffect(() => {
    props.getAllCatogires();
  }, []);

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(SigninSchema)
  });

  const onSubmit = (data) => {
    console.log('submit data of create post');
  };

  return (
    <div>
      <div className="create-post">
        <div className="container-fluid">
          <div className="row no-gutter">
            {/* <!-- The image half --> */}
            <div className="col-md-5 d-none d-md-flex bg-image"></div>
            {/* <!-- The content half --> */}
            <div className="col-md-7 bg-light">
              <div className="login d-flex align-items-center py-5">
                {/* <!-- Demo content--> */}
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <h3 className="display-4">Create post</h3>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="form-group mb-3">
                          <input {...register("title")}
                            id="input-title"
                            placeholder="Title"
                            className="form-control rounded-pill border-0 shadow-sm px-4" />

                          { errors.title && 
                            <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                              {errors.title.message}
                            </p>
                          }
                        </div>

                        <div className="form-group mb-3">
                          <input {...register("description")}
                            id="input-description"
                            placeholder="Description"
                            className="form-control rounded-pill border-0 shadow-sm px-4" />

                          { errors.description && 
                            <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                              {errors.description.message}
                            </p>
                          }
                        </div>

                        <div className="form-group mb-3">
                          <input {...register("price")}
                            id="input-price"
                            placeholder="Price"
                            className="form-control rounded-pill border-0 shadow-sm px-4" />

                          { errors.price && 
                            <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                              {errors.price.message}
                            </p>
                          }
                        </div>
                        
                        <div className="form-group mb-3">
                          <input {...register("Size")}
                            id="input-size"
                            placeholder="Size"
                            className="form-control rounded-pill border-0 shadow-sm px-4" />
                        </div>

                        <div className="form-group mb-3">
                          <input {...register("Image")}
                            id="input-image"
                            placeholder="Image"
                            className="form-control rounded-pill border-0 shadow-sm px-4" />
                        </div>

                        <div className="form-group mb-3">
                          <select {...register("Category")}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            onChange={(e) => {
                              console.log('change category: ', e.target.value)
                            }}
                          >
                            {!props.load_getAllCategories && <option>&#8594;Select category&#8592;</option>}
                            {categories.length > 0 && categories.map((category) =>
                              <option key={category.id} value={category.name}>{category.name}</option>
                            )}
                          </select>
                        </div>

                        <button
                          type="submit"
                          onClick={() => setCheckRegister(true)}
                          className="btn btn-login btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                          Create Post
                        </button>
                  
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal notification */}
        <div className={responseData && responseData.httpStatus === 200 ? "modal d-block " : "modal modal-notification"} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Notification</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="" style={{ fontSize: "20px" }}>
                  <i className="far fa-envelope mr-2" style={{ fontSize: '22px' }}></i>
                  Register successfull. Check your email to activate your account
                </p>
              </div>
              <div className="modal-footer">
                <a href="/login">
                <button type="button" className="btn btn-login text-uppercase rounded-pill shadow-sm">
                  Go to login
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { load_getAllCategories, data_getAllCategories, error_getAllCategories } = state.categoryReducer;
  return {
    load_getAllCategories,
    data_getAllCategories,
    error_getAllCategories
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllCatogires: () => {
      dispatch(getAllCategoriesRequestAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePosts);