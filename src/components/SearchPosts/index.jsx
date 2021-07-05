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
    const params = {
      title: search,
      _page: 0,
      _limit: 6
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
    <div onSubmit={handleSubmit(onSubmit)}>
      <form className="d-flex">
        <input
          {...register("search", { maxLength: 100 })}
          id="search"
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
