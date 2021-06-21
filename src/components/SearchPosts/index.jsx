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
      <form class="d-flex">
          <input  {...register("search", {maxLength: 10 })}   class="px-2 search" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn0" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchPosts;