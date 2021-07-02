import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import PaymentOrder from './payment/paymentOrder.component'

import './style.css'
import { paymentHistory } from '../../redux/actions/user/payment.action'
import { formatPrice } from '../../helper/helper'

function PaymentHistory(props) {

  const dispatch = useDispatch();

  const data = useSelector(state => {
    let payments = state.paymentReducer.paymentHistory.payments;
    if (payments !== undefined) {
      payments = payments.reduce(function (rows, key, index) {
        return (index % 2 === 0 ? rows.push([key])
          : rows[rows.length - 1].push(key)) && rows;
      }, []);
    }
    return payments;
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    dispatch(paymentHistory());
  }, [])

  const handleGetPosts = (posts) => {
    setPosts(posts)
  }

  return (
    <div className="container mt-2 pt-2 rounded cart">
      <div className="row">
        <div className="col-12">
          <div className="product-details mx-2"></div>
          <h2>Payment History</h2>
          {data && data.map((value, index) => {
            return (
              <div className="row">
                <div className="col-12  col-md-12 d-md-flex">
                  {value.map((value1, index1) => {
                    return (
                      <PaymentOrder payment={value1} key={value1.id} handleGetPosts={handleGetPosts} />
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div
        className="modal fade cart-popup"
        id="postsModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="false"
        modal-toggle
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Items ({posts.length}):
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul>
                {posts.map((value, index) => {
                  return (
                    <li key={value.id} className="popup-sm-item">
                      <img src={value.post.image} alt="" className="rounded" width="65" height="65" />
                      <div className="d-flex col-12 pl-1">
                        <span className="col-7 pl-1 post-title">{value.post.title}</span>
                        <span className="col-4 text-danger pl-1">{formatPrice(value.post.price)} VND</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;