import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";

import "./paymentStyle.css";
import { pay } from '../../redux/actions/user/payment.action'
import loading from './images/loading.gif'

const PaymentSchema = yup.object().shape({
  description: yup.string().required('Description is required'),
});

function Payment(props) {

  const dispatch = useDispatch();

  const data = useSelector(state => {
    return state.paymentReducer.data;
  });

  const check = useSelector(state => {
    return state.paymentReducer.check;
  });

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(PaymentSchema)
  });

  const onSubmit = (data) => {
    dispatch(pay(data))
    // alert(JSON.stringify(data))
  };

  return (
    <div>
      <div className={check ? "loading-bg" : "loading-bg d-none"}>
        <img src={loading} alt="Loading..." />
      </div>
      <div className="container mt-5 pt-5 rounded cart">
        <div className="row">
          <div className="col-md-8">
            <div className="product-details mr-2">
              <div className="d-flex flex-row align-items-center"><i className="fa fa-long-arrow-left"></i><span className="ml-2">Continue Shopping</span></div>
              {/* <hr> */}
              <h6 className="mb-0">Shopping cart</h6>
              <div className="d-flex justify-content-between"><span>You have 4 items in your cart</span>
                <div className="d-flex flex-row align-items-center"><span className="text-black-50">Sort by:</span>
                  <div className="price ml-2"><span className="mr-1">price</span><i className="fa fa-angle-down"></i></div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row"><img className="rounded" src="https://i.imgur.com/QRwjbm5.jpg" width="40" alt="" />
                  <div className="ml-2"><span className="font-weight-bold d-block">Iphone 11 pro</span><span className="spec">256GB, Navy Blue</span></div>
                </div>
                <div className="d-flex flex-row align-items-center"><span className="d-block">2</span><span className="d-block ml-5 font-weight-bold">$900</span><i className="fa fa-trash-o ml-3 text-black-50"></i></div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row"><img className="rounded" src="https://i.imgur.com/GQnIUfs.jpg" width="40" alt="" />
                  <div className="ml-2"><span className="font-weight-bold d-block">One pro 7T</span><span className="spec">256GB, Navy Blue</span></div>
                </div>
                <div className="d-flex flex-row align-items-center"><span className="d-block">2</span><span className="d-block ml-5 font-weight-bold">$900</span><i className="fa fa-trash-o ml-3 text-black-50"></i></div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row"><img className="rounded" src="https://i.imgur.com/o2fKskJ.jpg" width="40" alt="" />
                  <div className="ml-2"><span className="font-weight-bold d-block">Google pixel 4 XL</span><span className="spec">256GB, Axe black</span></div>
                </div>
                <div className="d-flex flex-row align-items-center"><span className="d-block">1</span><span className="d-block ml-5 font-weight-bold">$800</span><i className="fa fa-trash-o ml-3 text-black-50"></i></div>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                <div className="d-flex flex-row"><img className="rounded" src="https://i.imgur.com/Tja5H1c.jpg" width="40" alt="" />
                  <div className="ml-2"><span className="font-weight-bold d-block">Samsung galaxy Note 10&nbsp;</span><span className="spec">256GB, Navy Blue</span></div>
                </div>
                <div className="d-flex flex-row align-items-center"><span className="d-block">1</span><span className="d-block ml-5 font-weight-bold">$999</span><i className="fa fa-trash-o ml-3 text-black-50"></i></div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="payment-info">
              <div className="d-flex justify-content-between align-items-center"><span>Card details</span><img className="rounded" src="https://i.imgur.com/WU501C8.jpg" width="30" alt="" /></div><span className="type d-block mt-3 mb-1">Card type</span>
              {/* <label className="radio"> <input type="radio" name="card" value="payment" checked="" /> <span><img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png" alt=""/></span> </label> */}
              {/* <label className="radio"> <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/officel/48/000000/visa.png" alt="" /></span> </label> */}
              {/* <label className="radio"> <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png" alt="" /></span> </label> */}
              <label className="radio"> <input type="radio" name="card" value="payment" /> <span><img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png" alt="" /></span> </label>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="credit-card-label">Currency</label>
                  <select className="form-control credit-inputs" {...register("currency")}>
                    <option value="USD">United States dollar (USD)</option>
                    <option value="THB">Thai baht (THB)</option>
                    <option value="RUB">Russian ruble (RUB)</option>
                  </select>
                </div>
                <div>
                  <label className="credit-card-label">Description</label>
                  <input type="text" className="form-control credit-inputs" {...register("description")} />
                  {errors.description && <p className="badge badge-danger">{errors.description.message}</p>}
                </div>
                <div>
                  <input type="text" hidden {...register("price")} value="123" />
                </div>
                {/* <div className="row">
              <div className="col-md-6"><label className="credit-card-label">Date</label><input type="text" className="form-control credit-inputs" placeholder="12/24" /></div>
              <div className="col-md-6"><label className="credit-card-label">CVV</label><input type="text" className="form-control credit-inputs" placeholder="342" /></div>
            </div> */}
                {/* <hr className="line"> */}
                {/* <div className="d-flex justify-content-between information"><span>Subtotal</span><span>$3000.00</span></div> */}
                {/* <div className="d-flex justify-content-between information"><span>Shipping</span><span>$20.00</span></div> */}
                <div className="d-flex justify-content-between information mt-3">
                  <span>Total(Incl. taxes)</span><span>$3020.00</span>
                </div>
                <button
                  className="btn btn-primary btn-block d-flex justify-content-between mt-3"
                  type="submit"
                >
                  <span>$3020.00</span><span>Checkout<i className="fa fa-long-arrow-right ml-1"></i></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Payment;