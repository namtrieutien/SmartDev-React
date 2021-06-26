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
    console.log('search: ' + search);
    props.searchPost(search);
  };

  const {load} = props;
  if(load){
    //return <Redirect to="/product" />;
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
  const { load } = state.searchPostReducer;
  return {
    load
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchPost: (keywordSearch) => {
      dispatch(searchLoadingAction(keywordSearch));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPosts);
