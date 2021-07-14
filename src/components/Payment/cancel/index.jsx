import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

import { cancelPayment } from '../../../redux/actions/user/payment.action'
import loading from '../images/loading.gif'

function PaymentCancel(props) {

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

  const location = useLocation();
  let token = searchToObject(location.search)

  const dispatch = useDispatch();

  const cancel = useSelector(state => {
    return state.paymentReducer.cancel;
  });

  useEffect(() => {
    console.log(token);
    dispatch(cancelPayment(token));
  }, []);

  console.log(cancel);

  return (
    <div>
      <div className={!cancel ? "loading-bg" : "loading-bg d-none"}>
        <img src={loading} alt="Loading..." />
      </div>
      <div className="container mt-5 pt-5 rounded cart">
        <div className="row">
          <div className="col-12">
            <div className="product-details mr-2">
              <div className="d-flex flex-row align-items-center">
                <Link to={{pathname: '/',}} style={{color: 'blue'}}><i class="fas fa-arrow-left"></i>
                  <span className="ml-2 text">Back to Homepage</span>
                </Link>
              </div>
              {/* <hr> */}
              <div className="mb-2">
                {cancel && <h3 className="text-center text-warning">Payment cancel</h3>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentCancel;