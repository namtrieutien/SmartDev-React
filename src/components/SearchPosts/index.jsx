import React from 'react';
import PropTypes from 'prop-types';
import './SearchPosts.css'
import { useForm } from 'react-hook-form'

SearchPosts.propTypes = {
  
};



function SearchPosts(props) {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    
    alert(JSON.stringify(data));
  };

  console.log(watch("search")); // watch input value by passing the name of it

  return (
    <div className="SearchPosts" onSubmit={handleSubmit(onSubmit)}>
      <form className="form-inline my-2 my-lg-0">
        <input
           {...register("search", {maxLength: 10 })}  
          className="form-control mr-sm-2" 
          type="search" 
          placeholder="Search" 
          aria-label="Search" />
        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchPosts;