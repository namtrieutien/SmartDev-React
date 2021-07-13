import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'

import '../style.css'
import { formatPrice } from '../../../helper/helper'
function PaymentOrder({ payment, handleGetPosts }) {
  console.log(payment);
  let color = payment.status ? '#D4DFE6' : '#FDD692';
  return (
    <div
      className="justify-content-around align-items-center mt-3 items rounded col-12 d-flex col-md-6 d-md-flex mr-1"
      style={{ height: '100px', backgroundColor: color }}
      onClick={() => handleGetPosts(payment.order.details)}
      data-toggle={payment.status && "modal"} data-target={payment.status && "#postsModal"}
    >
      <div className="d-flex flex-row"><img className="rounded" src="https://cdn.iconscout.com/icon/free/png-256/paypal-4-226455.png" width="50" height="50" alt="" />
        <div className="ml-2">
          {payment.status && <span className="font-weight-bold d-block">Order #{payment.order.id}</span>}
          {!payment.status && <span className="font-weight-bold d-block text-danger">Payment Canceled</span>}
          <span className="spec d-block">{new Date(payment.createdAt).toLocaleString()}</span>
          {payment.status && <span className="spec">Items: {payment.order.details.length}</span>}
        </div>
      </div>
      <div className="d-flex flex-row align-items-center">
        <div className="ml-4">
          {payment.status && <span className="d-block">{formatPrice(payment.order.totalPrice)}  VND</span>}
          <span className="d-block">(Paypal) : {formatPrice(payment.totalPrice)} {payment.currency}</span>
        </div>
        <i className="fa fa-trash-o ml-3 text-black-50"></i>
      </div>
    </div>
  );
}

export default PaymentOrder;