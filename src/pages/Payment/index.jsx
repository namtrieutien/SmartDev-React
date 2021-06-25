import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import PaymentComponent from '../../components/Payment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


Payment.propTypes = {

};

function Payment(props) {

  return (
    <div>
      <Header />
      <PaymentComponent />
      <Footer />
    </div>
  );
}

export default Payment;