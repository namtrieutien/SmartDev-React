import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import "../paymentStyle.css";
// import { pay } from '../../redux/actions/user/payment.action'
// import loading from './images/loading.gif'



function PaymentSuccess(props) {

  // const dispatch = useDispatch();
  // const data = useSelector(state => {
  //   return state.paymentReducer.data;
  // });

  // const check = useSelector(state => {
  //   return state.paymentReducer.check;
  // });

 

  const onSubmit = (data) => {
    // dispatch(pay(data))
    // alert(JSON.stringify(data))
  };

  return (
    <div>
      đâswqeqweqwe
      {/* <div className={check ? "loading-bg" : "loading-bg d-none"}> */}
        {/* <img src={loading} alt="Loading..." /> */}
        dsadsads
      {/* </div> */}
    </div>
  );
}

export default PaymentSuccess;