import React, { useEffect } from "react";
import PostList from '../../../components/PostList';
import { searchByPriceLoading } from '../../../redux/actions/posts/search.action';

import { connect } from "react-redux";
import './posts.css'
import { Link } from "react-router-dom";

function Posts(props) {
  const params = {
    _page: 0,
    _limit:props.pagination._limit,
    from:0,
    to:77000
  }

  useEffect(() => {
    props.searchPost(params);
  }, [])
  const postList = Array.from(props.data);
    return (
    <div>
      <div className="latest-products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2 className="blink_me text-danger text-center col-md-11">July Best Price 77K</h2>
                <Link to="/best-price">
                  view all products <i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <PostList load={props.load} posts={postList} />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { load, error, pagination, data } = state.postByPriceReducer;
  return {
    load,
    error,
    pagination, 
    data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchPost: (params) => {
      dispatch(searchByPriceLoading(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);