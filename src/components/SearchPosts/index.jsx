import React from "react";
// import PropTypes from "prop-types";
import "./SearchPosts.css";
import { useForm } from "react-hook-form";

// SearchPosts.propTypes = {};

function SearchPosts(props) {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

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

export default SearchPosts;
