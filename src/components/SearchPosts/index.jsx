import React from 'react';
import PropTypes from 'prop-types';
import './SearchPosts.css'

SearchPosts.propTypes = {
  
};

function SearchPosts(props) {
  return (
    <div className="SearchPosts">
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchPosts;