import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'

import '../style.css'
import {formatPrice} from '../../../helper/helper'
function PaymentOrder({ payment, handleGetPosts}) {

  return (
      <div
      className="justify-content-around align-items-center mt-3 items rounded col-12 d-flex col-md-6 d-md-flex mr-1"
      style={{ height: '100px', backgroundColor: '#D4DFE6' }}
      onClick={() => handleGetPosts(payment.order.details)}
      data-toggle="modal" data-target="#postsModal"
    >
      <div className="d-flex flex-row"><img className="rounded" src="https://cdn.iconscout.com/icon/free/png-256/paypal-4-226455.png" width="50" height="50" alt="" />
        <div className="ml-2">
          <span className="font-weight-bold d-block">Order #{payment.order.id}</span>
          <span className="spec d-block">{new Date(payment.order.createdAt).toLocaleString()}</span>
          <span className="spec">Items: {payment.order.details.length}</span>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center">
        <div className="ml-4">
          <span className="d-block">{formatPrice(payment.order.totalPrice)}  VND</span>
          <span className="d-block">(Paypal) : {formatPrice(payment.totalPrice)} {payment.currency}</span>
        </div>
        <i className="fa fa-trash-o ml-3 text-black-50"></i>
      </div>
    </div>
  );
}

export default PaymentOrder;