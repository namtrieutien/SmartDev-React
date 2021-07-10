import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PostList from '../../components/PostList';
import Pagination from '../../components/Pagination';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchByCatLoading } from '../../redux/actions/posts/search.action';
import SearchNotFound from '../../components/SearchPosts/SearchNotFound';

// Products.propTypes = {

// };

function CategoryPosts(props) {
  const { cat_id } = useParams();
  const [postList, setPostList] = useState(props.data);
  const [pagination, setPagination] = useState(props.pagination);

  const [filters, setFilters] = useState({
    _page: props.pagination._page,
    _limit: props.pagination._limit
  })

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage
    })
  }

  useEffect(() => {
    const params = {
      title: props.params.title,
      _page: filters._page,
      _limit: props.params._limit,
      cat_id
    }
    props.searchPost(params);
    if (props.error.code == 200) {
      setPostList(props.data);
      setPagination(props.pagination);
    }
  }, [filters, props.params.title, cat_id])

  return (
    <div>
      <Header />
      <Content postList={props.error.code == 200 ? props.data : {}} handlePageChange={handlePageChange} pagination={props.error.code == 200 ? props.pagination : null} />
      {props.error.code != 200 && <SearchNotFound />}
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
                  <h2>CHỢ TỐT PRODUCTS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="products">
          <div className="container-fluid ml-5">
            <div className="row mr-5">
              <div className="col-md-12">
                {/* <div className="filters">
                  <ul>
                    <li className="active" data-filter="*">All Products</li>
                    <li data-filter=".des">Featured</li>
                    <li data-filter=".dev">Flash Deals</li>
                    <li data-filter=".gra">Last Minute</li>
                  </ul>
                </div> */}
              </div>

              <div className="col-md-12">
                <div className="filters-content">
                  <div className="row">
                    <PostList posts={this.props.postList} />
                  </div>
                </div>
              </div>
              {
                this.props.pagination && <Pagination handlePageChange={this.props.handlePageChange} pagination={this.props.pagination} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { load, params, data, pagination, error } = state.postByCatReducer;
  return {
    load,
    params,
    data,
    pagination,
    error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchPost: (params) => {
      dispatch(searchByCatLoading(params));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPosts);