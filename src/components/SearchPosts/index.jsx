import React from "react";
// import PropTypes from "prop-types";
import "./SearchPosts.css";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';

import { searchLoading as searchLoadingAction } from '../../redux/actions/posts/search.action';

import history from '../../history'

// SearchPosts.propTypes = {};

let submitedSearch = false;
function SearchPosts(props) {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    const {search} = data;
    const params = {
      title: search,
      _page: props.pagination._page,
      _limit: props.pagination._limit
    }
    props.searchPost(params);
    submitedSearch = true;
   
  };

  if(!props.load && submitedSearch){
    if(props.error.code == 200){
      history.push('/product');
    } else {
      history.push('/home');
    }
    submitedSearch = false;
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
  const { load, error,  pagination } = state.searchPostReducer;
  return {
    load,
    error,
    pagination
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchPost: (params) => {
      dispatch(searchLoadingAction(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPosts);
