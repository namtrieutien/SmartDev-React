import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'

import "./successPayment.css";
import { executePayment } from '../../../redux/actions/user/payment.action'
import loading from '../images/loading.gif'

import { useLocation } from 'react-router-dom'
import { formatPrice } from '../../../helper/helper'


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
    console.log(state.paymentReducer.data)
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
      <div className="container mt-5 pt-5 rounded cart">
        <div className="row">
          <div className="col-12">
            <div className="product-details mr-2">
              {/* <hr> */}
              <div className="mb-2">
                {data.error && <h3 className="text-center text-danger">Payment failed</h3>}
                {data.status && <h3 className="text-center text-success">Payment success</h3>}
              </div>
              <h6 className="mb-0">Shopping cart</h6>
              <div className="d-flex justify-content-between">
                <span>You have {data.order ? <>{data.order.details.length}</> : 0} paid items</span>
                <div className="d-flex flex-row align-items-center">
                  <span className="text-black-50">Sort by:</span>
                  <div className="price ml-2">
                    <span className="mr-1">price</span>
                    <i className="fa fa-angle-down"></i>
                  </div>
                </div>
              </div>
              {data.order && data.order.details.length > 0 && data.order.details.map((value, index) =>
                <div className="col-12 justify-content-between align-items-center mt-3 p-2 items rounded col-md-12 d-md-flex">
                  <div className="col-12 d-flex col-md-9 d-md-flex">
                    <div className="col-3">
                      <img className="rounded" src={value.post.image} width="80" alt="" />
                    </div>
                    <div className="d-flex flex-row col-10 col-md-10">
                      <div className="ml-2">
                        <span className="font-weight-bold d-block">{value.post.title.split(" ").slice(0, 10).join(" ")}...</span>
                        <span className="spec">{value.post.description.split(" ").slice(0, 18).join(" ")}...</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center col-12 col-md-3">
                    <span className="d-block">1</span>
                    <span className="d-block ml-5 font-weight-bold">{formatPrice(value.post.price)} VND</span>
                    <i className="ml-2 fas fa-check text-success"></i>
                    <i className="fa fa-trash-o ml-3 text-black-50"></i>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;