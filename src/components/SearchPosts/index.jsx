import React from "react";
// import PropTypes from "prop-types";
import "./SearchPosts.css";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';

import { searchLoading as searchLoadingAction } from '../../redux/actions/posts/search.action';
import { Redirect } from "react-router-dom";

// SearchPosts.propTypes = {};

function SearchPosts(props) {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    const {search} = data;
    const keywordSearch = search;
    const page = props.pagination._page;
    const limit = props.pagination._limit;
    
    console.log('submit keywordSearch: ' + keywordSearch);
    console.log('submit page: ' + page);
    console.log('submit limit: ' + limit);
    props.searchPost(keywordSearch, page, limit);
  };

  const {load} = props;
  if(load){
    return <Redirect to="/product" />;
  }

  // console.log(watch("search")); // watch input value by passing the name of it
  return (
    <div onSubmit={handleSubmit(onSubmit)}>
      <form className="d-flex">
        <input
          {...register("search", { maxLength: 10 })}
          className="px-2 search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn0" type="submit">
          Search
        </button>
        
      </form>
    </div>
  );

}

const mapStateToProps = (state) => {
  const { load, pagination } = state.searchPostReducer;
  return {
    load,
    pagination
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchPost: (keywordSearch, page, limit) => {
      dispatch(searchLoadingAction(keywordSearch, page, limit));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPosts);
