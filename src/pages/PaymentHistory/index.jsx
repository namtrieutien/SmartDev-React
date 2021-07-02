import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import PaymentHisotry from '../../components/PaymentHistory'
Payment.propTypes = {

};

function Payment(props) {

  return (
    <div>
      <Header />
      <PaymentHisotry/>
      <Footer />
    </div>
  );
}

export default Payment;