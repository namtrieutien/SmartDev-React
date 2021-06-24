import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import PreLoader from '../../components/PreLoader'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PostList from '../../components/PostList';
import Pagination from '../../components/Pagination';

Products.propTypes = {
  
};

function Products(props) {

  const [postList, setPostList] = useState([])
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 100,
  })

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1
  })

  function handlePageChange(newPage) {
    console.log("page change", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    })
  }

  useEffect(() => {
    async function fetchPostList() {
      // ..
      try {
        // _limit=10&_page=1
        const paramString = queryString.stringify(filters)
        const RequestUrl = `https://smartdev-sunny.herokuapp.com/posts/search-post-by-title?title=title&_page=0&_limit=1`;
        const reponse = await fetch(RequestUrl);
        const reponseJSON = await reponse.json();
        console.log("res: ", reponseJSON);

        const {data, pagination} = reponseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("falied to fetch, ", error.message); 
      }
    }

    fetchPostList()
  }, [filters])

  return (
    <div>

    <Header />
    {/* <!-- Page Content --> */}
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
                  {/* <PostList posts={postList} /> */}
                </div>
            </div>
          </div>
          <Pagination onPageChange={handlePageChange} pagination={pagination} />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Products;