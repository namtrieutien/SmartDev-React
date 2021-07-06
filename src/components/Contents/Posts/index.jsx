import React, { useEffect } from "react";
import CardPost from "../../Post/CardPost";
import { searchLoading } from '../../../redux/actions/posts/search.action';
import { connect } from "react-redux";
// import PropTypes from "prop-types";

// Posts.propTypes = {};

function Posts(props) {
  const params = {
    title: "",
    _page: props.pagination !== undefined ?  props.pagination._page:  props.data.pagination._page,
    // _page: props.pagination._page,
    _limit: props.pagination !== undefined ?  props.pagination._limit:  props.data.pagination._limit,
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
                <h2>Flash Deals</h2>
                <a href="products.html">
                  view all products <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            {postList!=null ? 
            (postList.map( item => 
            <CardPost
            key={item.id} 
            post = {item} />
            )):
            <h7 className="d-flex align-items-center ml-5 mb-3"><i className="material-icons text-success ml-5 mr-2">Loading...</i></h7>
          }
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { load, error,  pagination, data } = state.searchPostReducer;
  return {
    load,
    error,
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts);