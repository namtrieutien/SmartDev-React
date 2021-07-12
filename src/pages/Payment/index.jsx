import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import PaymentComponent from '../../components/Payment'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

Payment.propTypes = {

};

function Payment(props) {
  const { isLoggedIn } = props;
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  } else
  return (
    <div>
      <Header />
      <PaymentComponent />
      <Footer />
    </div>
  );
}
const mapStateToProps= state => {
  const { isLoggedIn } = state.userReducer;
  return {
    isLoggedIn
  }
}
export default connect(mapStateToProps)(Payment);