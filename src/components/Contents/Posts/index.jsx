import React, { useEffect } from "react";
import CardPost from "../../Post/CardPost";
import { searchByCatLoading } from '../../../redux/actions/posts/search.action';

import { connect } from "react-redux";
import { getAllCategoriesRequestAction } from "../../../redux/actions/category/category.action";
// import PropTypes from "prop-types";

// Posts.propTypes = {};

function Posts(props) {
  const params = {
    title: "",
    _page: props.pagination !== undefined ? props.pagination._page : props.data.pagination._page,
    // _page: props.pagination._page,
        _limit: props.pagination !== undefined ? props.pagination._limit : props.data.pagination._limit,
    cat_id: 2
  }

  useEffect(() => {
    props.getCat();
    props.searchPost(params);
  }, [])
  const postList = Array.from(props.data);
  console.log("postList", postList)
  const cat = Array.from(props.category);
    return (
    <div>
      <div className="latest-products">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Điện dân dụng</h2>
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
  const { load, pagination, data } = state.postByCatReducer;
  const { data_getAllCategories : category } = state.categoryReducer;
  return {
    load,
    pagination, 
    data,
    category
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchPost: (params) => {
      dispatch(searchByCatLoading(params));
    },
    getCat: () => {
      dispatch(getAllCategoriesRequestAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);