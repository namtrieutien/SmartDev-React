import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { loadPosts, deletePost } from '../../redux/actions/user/managepost.action'
import { connect } from 'react-redux'

import "./mypost.css";
import { VNDformat } from '../../helpers/utils';

function PostItem({ postItem, handelClick }) {
    const { id, title, size, price, status, category, image, createdAt } = postItem;
    return (
        <tr>
            <td><img className="item-img" src={image} /> </td>
            <td>{title}</td>
            <td className="text-center">{id}</td>
            <td className="text-center">{category}</td>
            <td>{status ? <div class="p-3 mb-2 bg-success text-white text-center">Sold</div> : <div class="p-3 mb-2  bg-light text-dark">Selling</div>}</td>
            <td>{size}</td>
            <td className="text-center">{createdAt}</td>
            <td className="text-right">{VNDformat(price)}</td>
            <td className="text-right">
                <button className="btn btn-sm btn-danger" onClick={() => handelClick(id)} data-toggle="modal" data-target="#deleteModal">
                    <i className="fa fa-trash" /></button> </td>
        </tr>
    );
}


function MyPosts(props) {

    useEffect(() => {
        props.loadPosts();
    }, [])

    const postList = props.postList;
    return (
        <div>
            <Header />
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading text-light">My Posts</h1>
                </div>
            </section>
            <div class="grey-bg container">
                <div className="row p-5">
                    <div className="col-xl-6 col-sm-6 col-12">
                        <div className="card card-my-post">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="align-self-center">
                                            <img className="d-block  float-left" style={{ width: '20%', height: '40%' }} src="https://image.flaticon.com/icons/png/512/3578/3578169.png" alt="" />
                                        </div>
                                        <div className="media-body text-right">
                                            <h4 className="text-info mb-3">SOLDOUT</h4>
                                            <h6>{VNDformat(props.total_sold)}</h6>
                                            <span>{props.total_sold_posts} posts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-sm-6 col-12">
                        <div className="card card-my-post">
                            <div className="card-content">
                                <div className="card-body">
                                    <div className="media d-flex">
                                        <div className="align-self-center">
                                            <img className="d-block  float-left" style={{ width: '20%', height: '40%' }} src="https://image.flaticon.com/icons/png/512/4454/4454332.png" alt="" />
                                        </div>
                                        <div className="media-body text-right">
                                            <h4 className="text-info mb-3">SELLING</h4>
                                            <h6>{VNDformat(props.total_selling)}</h6>
                                            <span>{props.total_selling_posts} posts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col" className="text-center">Post</th>
                                        <th scope="col" className="text-center">ID</th>
                                        <th scope="col" className="text-center">Category</th>
                                        <th scope="col">Available</th>
                                        <th scope="col">Size</th>
                                        <th scope="col" className="text-center">Create At</th>
                                        <th scope="col" className="text-right">Price</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {postList && postList.map(item =>
                                        <PostItem
                                            key={item.id}
                                            postItem={item}
                                            handelClick={props.deletePost} />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className={props.response ? "modal fade d-block " : "modal fade modal-notification"} id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="col-11 modal-title text-center ml-3">Successfully!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h5 className="col-12 text-center">
                                <img style={{ width: '30%', height: '50%' }} src="https://www.legalpillers.com/wp-content/uploads/2020/09/success.gif" alt="Card image cap" />
                            </h5>
                            <p className="text-center my-3" style={{ fontSize: "17px" }}>
                                {props.response}
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success btn-block" type="button" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
const mapStateToProps = (state) => {
    const { postList,
        total_sold,
        total_selling,
        total_sold_posts,
        total_selling_posts,
        response } = state.managePostReducer
    return {
        postList,
        total_sold,
        total_selling,
        total_sold_posts,
        total_selling_posts,
        response
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: () => {
            dispatch(loadPosts());
        },
        deletePost: (pid) => {
            dispatch(deletePost(pid));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
