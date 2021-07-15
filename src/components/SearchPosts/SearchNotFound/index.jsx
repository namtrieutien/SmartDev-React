import React from "react";
import './css/style.css'
import {useState} from 'react'
import {searchLoading} from '../../../redux/actions/posts/search.action'
import history from '../../../history'
import { connect } from "react-redux";

const SearchNotFound = (props) => {
  const [submitedSearch, setSubmitedSearch] = useState(false);
  const handleButton = () =>
  {
    const params = {
      title: '',
      _page: 0,
      _limit: 18
    }
    props.searchPost(params);
    setSubmitedSearch(true);
  };

  if (!props.load && submitedSearch) {
    history.push('/product');
    setSubmitedSearch(false);
  }
  
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
        </div>
        <h2>Search No Result</h2>
        <h6 className="mb-3">We're sorry. We cannot find any matches for your search term <b>{props.params.title}</b></h6>
        <button onClick={handleButton} className="btnRemoveKeyWord" type="submit">
          Remove keyword
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { params ,load, error, pagination } = state.searchPostReducer;
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchNotFound);

