import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import Payment from '../../components/Payment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


Products.propTypes = {

};

function Products(props) {

  return (
    <div>
      <Header />
      {/* <!-- Page Content --> */}
      {/* <div className="page-heading products-heading header-text">
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
      </div> */}
      <div className="container-fluid" style={{width : '85%'}}>
        <div className="filters-content">
          <div className="col-12">
            <div className="row">
              <Payment />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Products;