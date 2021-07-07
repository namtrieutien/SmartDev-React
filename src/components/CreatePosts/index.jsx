import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./createPostsStyle.css"
import { getAllCategoriesRequestAction } from '../../redux/actions/category/category.action';
import postAction from '../../redux/actions/posts/post.action'
import Header from '../Header'
import Footer from '../Footer'
import CreatePostsSuccess from './Toast/CreatePostSuccess';
import categoryApi from '../../api/category/categoryApi'
import { getSizeCategoryRequestAction } from '../../redux/actions/category/category.action';

CreatePosts.propTypes = {

};

function CreatePosts(props) {
    const [submitedForm, setSubmitedForm] = useState(false)
    const [createPostStatus, setCreatePostStatus] = useState(false)
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
            props.getSizeCategory(e.target.value);
        }
    }

    const categories = useSelector(() => {
        return props.categoryReducer.data_getAllCategories;
    });

    const sizes = useSelector(() => {
        return props.categoryReducer.data_getSizeCategory;
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

    const handleCreatePost = (data) => {
        let formData = new FormData();
        const post = {
            title: data.title,
            description: data.description,
            price: data.price,
            size: sizes?data.size:"N/A",
            categorize_id: data.categorize_id
        }

        formData.append('file', filesState.data);
        formData.append('post', JSON.stringify(post));
        props.createPost(formData);
        setSubmitedForm(true);
    };

    if (!props.load && submitedForm) {
        setSubmitedForm(false);
        setCreatePostStatus(true);
        document.getElementById("create-post-btn").disabled = true;
        document.getElementById("input-title").disabled = true;
        document.getElementById("input-description").disabled = true;
        document.getElementById("input-price").disabled = true;
        document.getElementById("select-category").disabled = true;
        if(sizes)
        {
            document.getElementById("select-size").disabled = true;
        }
        document.getElementById("upload-file").disabled = true;
    }

    const handleCloseToast = () => {
        setCreatePostStatus(false);
        document.getElementById("create-post-btn").disabled = false;
        document.getElementById("input-title").disabled = false;
        document.getElementById("input-title").value = "";
        document.getElementById("input-description").disabled = false;
        document.getElementById("input-description").value = "";
        document.getElementById("input-price").disabled = false;
        document.getElementById("input-price").value = "";
        document.getElementById("select-category").disabled = false;
        document.getElementById("select-category").value = "";
        if(sizes)
        {
            document.getElementById("select-size").disabled = false;
            document.getElementById("select-size").value = "";
        }
        document.getElementById("upload-file").disabled = false;
        document.getElementById("upload-file").value = null;
    }

    return (
        <div>
            <Header />
            <div>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
                <div className="container">
                    <div className="view-account">
                        <section className="module">
                            <div className="module-inner">
                                <div className="side-bar">
                                    <div className="user-info">

                                    </div>
                                </div>
                                <div className="content-panel">
                                    <h2 className="title">Create new post</h2>
                                    <form onSubmit={handleSubmit(handleCreatePost)} className="form-horizontal">
                                        <fieldset className="fieldset">

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
                                                <label className="col-md-2 col-sm-3 col-xs-12 control-label">Category</label>
                                                <div className="col-md-10 col-sm-9 col-xs-12">
                                                    <select {...register("categorize_id")}
                                                        id="select-category"
                                                        className="form-control"
                                                        onChange={handleChangeCategory}
                                                    >
                                                        {
                                                            !props.categoryReducer.load_getAllCategories && <option>Select category</option>
                                                        }
                                                        {
                                                            categories && categories.length > 0 && categories.map((category) =>
                                                                <option key={category.id} value={category.id}>{category.name}</option>)
                                                        }
                                                    </select>

                                                    {categoryState.error &&
                                                        <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                                                            Please select a category
                                                        </p>
                                                    }
                                                </div>

                                            </div>

                                            {
                                                sizes &&
                                                <div className="form-group">
                                                    <label className="col-md-2 col-sm-3 col-xs-12 control-label">Size</label>
                                                    <div className="col-md-10 col-sm-9 col-xs-12">
                                                        <select {...register("size")}
                                                            id="select-size"
                                                            className="form-control"
                                                        >
                                                            {
                                                                sizes && sizes.length > 0 && sizes.map((size) =>
                                                                    <option key={size} value={size}>{size}</option>)
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            }

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
                                                </div>
                                                {filesState.error &&
                                                    <p className="ml-2 text-danger mt-1" style={{ fontSize: "16px", }}>
                                                        Please choose a file
                                                    </p>
                                                }
                                            </div>
                                        </fieldset>

                                        <br />
                                        <div className="form-group">
                                            <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                                <button id="create-post-btn" className="btn btn-primary" type="submit">Create Post</button>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <CreatePostsSuccess handleCloseToast={handleCloseToast} isShow={createPostStatus ? 'show' : ''} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
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
        getSizeCategory: (param) => {
            dispatch(getSizeCategoryRequestAction(param));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePosts);
