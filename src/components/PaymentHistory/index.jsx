import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import PaymentOrder from './payment/paymentOrder.component'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import './style.css'
import { paymentHistory } from '../../redux/actions/user/payment.action'
import { formatPrice } from '../../helper/helper'

const PaymentHistorySchema = yup.object().shape({
  dateFrom: yup.string().required('dateFrom is required'),
  dateTo: yup.string().required('dateTo is required'),
});

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

  console.log(data)

  useEffect(() => {
    dispatch(paymentHistory({
      dateFrom : '',
      dateTo: ''
    }));
  }, [])

  const handleGetPosts = (posts) => {
    setPosts(posts)
  }

  const { register, formState: { errors }, handleSubmit, watch } = useForm({
    resolver: yupResolver(PaymentHistorySchema)
  });

  const onSubmit = (dataForm) => {
    console.log(dataForm);
    dispatch(paymentHistory(dataForm));
  }

  return (
    <div className="container mt-2 pt-2 rounded cart">
      <div className="row">
        <div className="col-12">
          <div className="product-details mx-2"></div>
          <h2 className="mt-3">Payment History</h2>
          <form action="#" className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="d-md-flex">
                <div className="col-12 col-md-6 d-md-flex m-0 p-0">
                  <div className="col-12 col-md-6">
                    <input {...register("dateFrom", { maxLength: 100 })} id="dateFrom" type="date" className="form-control date mr-0"/>
                    {errors.dateFrom && <span className="text-danger">{errors.dateFrom.message}</span>}
                  </div>
                  <div className="col-12 col-md-1">
                    <p className="font-weight-bold mt-md-2">
                      ~
                    </p>
                  </div>
                  <div className="col-12 col-md-6">
                    <input {...register("dateTo", { maxLength: 100 })} id="dateTo" type="date" className="form-control date" />
                    {errors.dateTo && <span className="text-danger">{errors.dateTo.message}</span>}
                  </div>
                  <div className="col-3 mt-2 col-md-2 mt-md-0 ">
                    <button type="submit" placeholder="" className="form-control search"><span className="fa fa-search"></span></button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="d-flex justify-content-center">
            {data && !data.length > 0 && <img className="mt-2" src="https://smartdev-sunny-bucket.s3.ap-southeast-1.amazonaws.com/no_item.png" alt="" />}
          </div>
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
      <div className="modal fade cart-popup" id="postsModal" tabIndex="-1" role="dialog" aria-hidden="false" modal-toggle>
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
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul>
                {posts.map((value, index) => {
                  return (
                    <li key={value.id} className="popup-sm-item mb-2">
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