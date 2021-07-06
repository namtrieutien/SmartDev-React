import React, { useEffect } from "react";
import './latestPost.css'
import CardPost from "../Post/CardPost";
import { connect } from "react-redux";
import { searchLoading } from '../../redux/actions/posts/search.action';

function LatestPost(props) {
    const params = {
        title: "",
        _page: props.pagination !== undefined ? props.pagination._page : props.data.pagination._page,
        // _page: props.pagination._page,
        _limit: props.pagination !== undefined ? props.pagination._limit : props.data.pagination._limit,
    }
    useEffect(() => {
        props.searchPost(params);
    }, [])
    const postList = Array.from(props.data);
    const slide1 = postList.slice(0, 6);
    const slide2 = postList.slice(6, 12);
    const slide3 = postList.slice(12, 18);

    return (
        <div className="container-fluid my-5 ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="bbb_container">
                            <h3 className="bbb_title" style={{ fontSize: '1.7vw' }}>Latest Posts Today</h3>
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
                                    {slide1 != null ?
                                        (slide1.map(item =>
                                            <CardPost
                                                key={item.id}
                                                post={item} />
                                        )) :
                                        <h7 className="d-flex align-items-center ml-5 mb-3"><i className="material-icons text-success ml-5 mr-2">Loading...</i></h7>
                                    }

                                </div>
                            </div>
                            {/*/.First slide*/}
                            {/*Second slide*/}
                            <div className="carousel-item">
                                <div className="row">
                                    {slide2 != null ?
                                        (slide2.map(item =>
                                            <CardPost
                                                key={item.id}
                                                post={item} />
                                        )) :
                                        <h7 className="d-flex align-items-center ml-5 mb-3"><i className="material-icons text-success ml-5 mr-2">Loading...</i></h7>
                                    }
                                </div>
                            </div>
                            {/*/.Second slide*/}
                            {/*Third slide*/}
                            <div className="carousel-item">
                                <div className="row">
                                    {slide3 != null ?
                                        (slide3.map(item =>
                                            <CardPost
                                                key={item.id}
                                                post={item} />
                                        )) :
                                        <h7 className="d-flex align-items-center ml-5 mb-3"><i className="material-icons text-success ml-5 mr-2">Loading...</i></h7>
                                    }
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
    const { pagination, data } = state.searchPostReducer;
    return {
        pagination,
        data
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