import React from "react";
// import PropTypes from "prop-types";
import "./SearchPosts.css";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { useEffect } from "react";

import { searchLoading } from '../../redux/actions/posts/search.action';

import history from '../../history'


// SearchPosts.propTypes = {};

let submitedSearch = false;
function SearchPosts(props) {
  useEffect(() => {
    document.getElementById('search').value = props.params.title;
  }, [props.params.title])
  
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    const { search } = data;
    var searchLowCase = search.toLowerCase();
    const params = {
      title: searchLowCase,
      _page: 0,
      _limit: 18
    }
    props.searchPost(params);
    submitedSearch = true;
  };

  if (!props.load && submitedSearch) {
    history.push('/product');
    submitedSearch = false;
  }

  // console.log(watch("search")); // watch input value by passing the name of it
  return (
    <form action="#" className="searchform order-sm-start order-lg-last" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group d-flex">
        <input {...register("search", { maxLength: 100 })} id="search" type="search" className="form-control pl-3" placeholder="Search" />
        <button type="submit" placeholder="" className="form-control search"><span className="fa fa-search"></span></button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  const { load, error, pagination, params } = state.searchPostReducer;
  return {
    load,
    error,
    pagination,
    params
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchPost: (params) => {
      dispatch(searchLoading(params));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchPosts);
