import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import PaymentSuccessComponent from '../../../components/Payment/success'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'


PaymentSuccess.propTypes = {

};

function PaymentSuccess(props) {
  return (
    <div>
      <Header />
      <PaymentSuccessComponent />
      <Footer />
    </div>
  );
}

export default PaymentSuccess;