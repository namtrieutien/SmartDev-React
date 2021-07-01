import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./createPostsStyle.css"
import { getAllCategoriesRequestAction } from '../../redux/actions/category/category.action';
import postAction from '../../redux/actions/posts/post.action'
import s3Action from '../../redux/actions/s3/s3.action'

CreatePosts.propTypes = {

};

function CreatePosts(props) {
    const [filesState, setFilesState] = useState({
        data: null,
        error: true
    });
    const handleFileUpLoad = (e) => {
        if (e.target.files[0] == null) {
            setFilesState({
                data: null,
                error: true
            });
        } else {
            setFilesState({
                data: e.target.files[0],
                error: false
            });
        }
    }

    useEffect(() => {
        if (filesState.data == null) {
            document.getElementById('preview_image').src = null;
        } else {
            document.getElementById('preview_image').src = URL.createObjectURL(filesState.data);
        }
    }, [filesState.data]);

    const [categoryState, setCategoryState] = useState({
        data: null,
        error: true
    });

    const handleChangeCategory = (e) => {
        if (e.target.value == 'Select category') {
            setCategoryState({
                data: null,
                error: true
            });
        } else {
            setCategoryState({
                data: e.target.value,
                error: false
            });
        }
    }

    useEffect(() => {
        if (categoryState.data == null) {
            
        } else {
            
        }
    }, [categoryState.data]);


    const categories = useSelector(() => {
        return props.categoryReducer.data_getAllCategories;
    });

    const SigninSchema = yup.object().shape({
        title: yup.string().required('Title is required'),
        description: yup.string().required('Description is required'),
        price: yup.string().matches(/^[0-9]+$/, "Price must be only digits")
    });

    useEffect(() => {
        props.getAllCatogires();
    }, []);

    const { register, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(SigninSchema)
    });

    const onSubmit = (data) => {
        let formData = new FormData();
        const post = {
            title: data.title,
            description: data.description,
            price: data.price,
            size: data.size,
            categorize_id: data.categorize_id
        }

        formData.append('file', filesState.data);
        formData.append('post', JSON.stringify(post));
        props.createPost(formData);
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
                                                {errors.description &&
                                                    <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                                                        {errors.description.message}
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
                                                {errors.price &&
                                                    <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                                                        {errors.price.message}
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

                                        <div className="form-group avatar">
                                            <figure className="figure col-md-2 col-sm-3 col-xs-12">
                                                <img id="preview_image" className="img-rounded img-responsive" src="" alt="" />
                                            </figure>
                                            <div className="form-inline col-md-10 col-sm-9 col-xs-12">
                                                <input {...register("file")}
                                                    id="upload-file"
                                                    type="file"
                                                    className="file-uploader"
                                                    onChange={handleFileUpLoad}
                                                />
                                                {filesState.error &&
                                                    <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                                                        Please choose a file
                                                    </p>
                                                }
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-md-2 col-sm-3 col-xs-12 control-label">Category</label>
                                            <select {...register("categorize_id")}
                                                className="form-control"
                                                onChange={handleChangeCategory}
                                            >
                                                {
                                                    !props.categoryReducer.load_getAllCategories && <option>Select category</option>
                                                }
                                                {
                                                    categories.length > 0 && categories.map((category) =>
                                                        <option key={category.id} value={category.id}>{category.name}</option>)
                                                }
                                            </select>

                                            {categoryState.error &&
                                                <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                                                    Please select a category
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
    return {
        categoryReducer: state.categoryReducer,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getAllCatogires: () => {
            dispatch(getAllCategoriesRequestAction());
        },
        createPost: (formData) => {
            dispatch(postAction.createPostRequest(formData));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePosts);