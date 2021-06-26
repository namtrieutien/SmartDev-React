import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'

import "./successPayment.css";
import { executePayment } from '../../../redux/actions/user/payment.action'
import loading from '../images/loading.gif'

import { useLocation } from 'react-router-dom'


const searchToObject = (pairs) => {
  var pairs = pairs.substring(1).split("&"),
    obj = {},
    pair,
    i;

  for (i in pairs) {
    if (pairs[i] === "") continue;

    pair = pairs[i].split("=");

    obj[decodeURIComponent(pair[0]) === 'PayerID' ? 'payerId' : decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return obj;
}

function PaymentSuccess(props) {

  const dispatch = useDispatch();
  const data = useSelector(state => {
    return state.paymentReducer.data;
  });

  const check = useSelector(state => {
    return state.paymentReducer.checkExecute;
  });
  
  const location = useLocation();
  let paymentInfo = searchToObject(location.search)

  useEffect(() => {
    dispatch(executePayment(paymentInfo))
  }, []);

  return (
    <div>
      <div className={check ? "loading-bg" : "loading-bg d-none"}>
        <img src={loading} alt="Loading..." />
      </div>
      <div className="mt-3">
        {data.error && <h3 className="text-center">Payment failed</h3>}
        {data.status && <h3 className="text-center">Payment success</h3>}
      </div>
    </div>
  );
}

export default PaymentSuccess;  