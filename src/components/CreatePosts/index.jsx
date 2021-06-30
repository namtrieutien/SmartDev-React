import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./createPostsStyle.css"
import { getAllCategoriesRequestAction } from '../../redux/actions/category/category.action';
import postAction from '../../redux/actions/posts/post.action'

CreatePosts.propTypes = {

};

function CreatePosts(props) {
    const categories = useSelector(state => {
        return state.categoryReducer.data_getAllCategories;
    });

    const SigninSchema = yup.object().shape({
        title: yup.string().required('Title is required'),
        description: yup.string().required('Description is required'),
        price: yup.string().required('Price is required')
    });

    useEffect(() => {
        console.log('useEffect');
        props.getAllCatogires();
    }, []);

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(SigninSchema)
    });

    const onSubmit = (data) => {
        console.log('submit data of create post', data);
        props.createPost(data);
    };

    return (
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="container">
                <div className="view-account">
                    <section className="module">
                        <div className="module-inner">
                            <div className="content-panel">
                                <h2 className="title">Create new post<span className="pro-label label label-warning">PRO</span></h2>
                                <form onSubmit={handleSubmit(onSubmit)} className="form-horizontal">
                                    <fieldset className="fieldset">
                                        <h3 className="fieldset-title">Post info</h3>
                                        <div className="form-group">
                                            <label className="col-md-2 col-sm-3 col-xs-12 control-label">Title</label>
                                            <div className="col-md-10 col-sm-9 col-xs-12">
                                                <input {...register("title")}
                                                    id="input-title"
                                                    placeholder="Title"
                                                    className="form-control" />
                                                {errors.title &&
                                                    <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                                                        {errors.title.message}
                                                    </p>
                                                }
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-md-2 col-sm-3 col-xs-12 control-label">Description</label>
                                            <div className="col-md-10 col-sm-9 col-xs-12">
                                                <input {...register("description")}
                                                    id="input-description"
                                                    placeholder="Description"
                                                    className="form-control" />
                                                {errors.title &&
                                                    <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                                                        {errors.title.message}
                                                    </p>
                                                }
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-md-2 col-sm-3 col-xs-12 control-label">Price</label>
                                            <div className="col-md-10 col-sm-9 col-xs-12">
                                                <input {...register("price")}
                                                    id="input-price"
                                                    placeholder="Price"
                                                    className="form-control" />
                                                {errors.title &&
                                                    <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                                                        {errors.title.message}
                                                    </p>
                                                }
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-md-2 col-sm-3 col-xs-12 control-label">Size</label>
                                            <div className="col-md-10 col-sm-9 col-xs-12">
                                                <input {...register("size")}
                                                    id="input-size"
                                                    placeholder="Size"
                                                    className="form-control" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-md-2 col-sm-3 col-xs-12 control-label">Image</label>
                                            <div className="col-md-10 col-sm-9 col-xs-12">
                                                <input {...register("image")}
                                                    id="input-image"
                                                    placeholder="Image"
                                                    className="form-control" />
                                            </div>
                                        </div>

                                        <div className="form-group avatar">
                                            <figure className="figure col-md-2 col-sm-3 col-xs-12">
                                                <img className="img-rounded img-responsive" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                            </figure>
                                            <div className="form-inline col-md-10 col-sm-9 col-xs-12">
                                                <input type="file" className="file-uploader pull-left" />
                                                <button type="submit" className="btn btn-sm btn-default-alt pull-left">Update Image</button>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-md-2 col-sm-3 col-xs-12 control-label">Category</label>
                                            <select {...register("categorize_id")}
                                                className="form-control"
                                                onChange={(e) => {
                                                    console.log('change category: ', e.target.value)
                                                }}
                                            >
                                                {
                                                    !props.load_getAllCategories && <option>&#8594;Select category&#8592;</option>
                                                }
                                                {
                                                    categories.length > 0 && categories.map((category) =>
                                                        <option key={category.id} value={category.id}>{category.name}</option>)
                                                }
                                            </select>

                                            {errors.category &&
                                                <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                                                    {errors.category.message}
                                                </p>
                                            }
                                        </div>
                                    </fieldset>

                                    <hr />
                                    <div className="form-group">
                                        <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                            <button className="btn btn-primary" type="submit">Create Post</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
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
        createPost: (postRequest) => {
            dispatch(postAction.createPostRequest(postRequest));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePosts);