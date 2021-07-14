import React, { useEffect } from "react";
import './latestPost.css'
import { connect } from "react-redux";
import { searchLoading } from '../../redux/actions/posts/search.action';
import { Link } from "react-router-dom";
import PostList from "../PostList"
function LatestPost(props) {
    const params = {
        title: "",
        _page: props.pagination._page,
        _limit: props.pagination._limit,
    }
    useEffect(() => {
        props.searchPost(params);
    }, [])
    const postList = Array.from(props.data);

    return (
        <div className="container-fluid my-5 ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="bbb_container">
                        <Link to={`/product`}>
                            <h3 className="bbb_title" style={{ fontSize: '1.7vw' }}>Latest Posts Today</h3></Link>
                            <div className="bbb_text mb-3">
                                <p>Buy now before they sold out</p>
                            </div>
                            {/*Controls*/}
                            <div className="controls-top d-flex mb-3">
                                <a className="left btn btn-danger mr-3" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left" /></a>
                                <a className="right btn btn-danger" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right" /></a>
                            </div>
                            {/*/.Controls*/}
                        </div>
                    </div>
                    <div id="multi-item-example" className="col-md-10 carousel slide carousel-multi-item" data-ride="carousel">
                        {/*Slides*/}
                        <div className="carousel-inner " role="listbox">
                            {/*First slide*/}
                            <div className="carousel-item active">
                                <div className="row">
                                <PostList load={props.load} posts={postList.slice(0, 6)} size={5} />
                                </div>
                            </div>
                            {/*/.First slide*/}
                            {/*Second slide*/}
                            <div className="carousel-item">
                                <div className="row">
                                <PostList load={props.load} posts={postList.slice(6, 12)} size={5}/>
                                </div>
                            </div>
                            {/*/.Second slide*/}
                            {/*Third slide*/}
                            <div className="carousel-item">
                                <div className="row">
                                <PostList load={props.load} posts={postList.slice(12, 18)} size={5}/>
                                </div>
                            </div>
                            {/*/.Third slide*/}
                        </div>
                        {/*/.Slides*/}
                    </div>
                </div>
            </div>
        </div>

    );
}
const mapStateToProps = (state) => {
    const { pagination, data, load } = state.searchPostReducer;
    return {
        pagination,
        data, 
        load
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        searchPost: (params) => {
            dispatch(searchLoading(params));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LatestPost);