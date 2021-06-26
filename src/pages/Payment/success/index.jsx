import React, { useState, useEffect } from 'react';

import PaymentSuccessComponent from '../../../components/Payment/success/index'
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