import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import PreLoader from '../../components/PreLoader'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PostList from '../../components/PostList';
import Pagination from '../../components/Pagination';

import { connect } from 'react-redux';
import { searchLoading as searchLoadingAction } from '../../redux/actions/posts/search.action';

// Products.propTypes = {

// };

function Products(props) {
  const [postList, setPostList] = useState(props.data);
  const [pagination, setPagination] = useState(props.pagination);

  const [filters, setFilters] = useState({
    _page: props.pagination._page,
    _limit: props.pagination._limit
  })

  function handlePageChange(newPage) {
    console.log("page change", newPage);
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  useEffect(() => {
    console.log('useEffect props.data', props.data);
    console.log('useEffect props.pagination', props.pagination);
    const params = {
      title: props.params.title,
      _page: filters._page,
      _limit: props.params._limit
    }
    props.searchPost(params);
    setPostList(props.data);
    setPagination(props.pagination);
  }, [filters])

  return (
    <div>
      <Header />
      <Content postList={props.data} handlePageChange={handlePageChange} pagination={props.pagination} />
      <Footer />
    </div>
  );
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <div className="page-heading products-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-content">
                  <h4>new arrivals</h4>
                  <h2>sixteen products</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="products">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="filters">
                  <ul>
                    <li className="active" data-filter="*">All Products</li>
                    <li data-filter=".des">Featured</li>
                    <li data-filter=".dev">Flash Deals</li>
                    <li data-filter=".gra">Last Minute</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12">
                <div className="filters-content">
                  <div className="row">
                    <PostList posts={this.props.postList} />
                  </div>
                </div>
              </div>
              <Pagination handlePageChange={this.props.handlePageChange} pagination={this.props.pagination} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { load, params, data, pagination } = state.searchPostReducer;
  return {
    load,
    params,
    data,
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);