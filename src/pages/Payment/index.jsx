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
      <Payment />
      <Footer />
    </div>
  );
}

export default Products;