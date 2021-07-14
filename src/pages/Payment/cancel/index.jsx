import React, { useState, useEffect } from 'react';

import PaymentCancelComponent from '../../../components/Payment/cancel/index'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'


function PaymentCancel(props) {
  return (
    <div>
      <Header />
      <PaymentCancelComponent />
      <Footer />
    </div>
  );
}

export default PaymentCancel;