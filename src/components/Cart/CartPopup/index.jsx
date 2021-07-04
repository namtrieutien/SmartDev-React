import React, { useState } from "react";
import { RemoveShoppingCart } from "@material-ui/icons";
import { connect } from "react-redux";

import { addNewToCart, RemoveCartItemAPIAction } from '../../../redux/actions/cartAction'
import { Link } from "react-router-dom"
import { VNDformat } from '../../../helpers/utils'

import "./cartPopup.css";

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.userReducer;
  return {
    list: state.cartReducer.list,
    isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCartItemAPI: (pid) => {
      dispatch(RemoveCartItemAPIAction(pid));
    },
    addNewToCart: (item) => {
      dispatch(addNewToCart(item));
    },
  };
}

const ListPopup = (props) => {

  const { list, addNewToCart, isLoggedIn, removeCartItem } = props;

  const handleRemovePopupItem = (item) => {
    addNewToCart(item);

    if (isLoggedIn) removeCartItem(item.id)
  }
  const listItems = list.map((item) => (
    <li key={item.id} className="li-list-wrapper">
      <div className="popup-sm-item p-3" data-toggle="collapse" data-target={`#${item.id}`}>
        {/* <img src={item.img} alt="" className="popup-sm-img" /> */}
        <img src="https://i.imgur.com/QRwjbm5.jpg" alt="" className="popup-sm-img" />
        <div className="popup-sm-user">
          <span className="popup-sm-username">{item.title}</span>
          <span className="popup-sm-user-price mt-2">{VNDformat(item.price)}</span>
        </div>
        <button className="popup-sm-button" onClick={() => handleRemovePopupItem(item)}>
          <RemoveShoppingCart className="popup-sm-icon" />
          Remove
        </button>
      </div>
      <div id={item.id} class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
        <span className="ml-3">{item.category}</span>
      </div>
      <hr className="solid"/>
    </li>
  ));

  return <ul className="popup-sm-list">{listItems}</ul>;
};

function CartPopup(props) {
  const priceTotal = props.list.reduce((total, item) => total + item.price, 0);
  return (
    <div
      className="modal fade cart-popup"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-light bg-danger">
            <h5 className="modal-title ml-4" id="exampleModalLabel">
              Shopping Cart
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
            <ListPopup list={props.list} addNewToCart={props.addNewToCart} isLoggedIn={props.isLoggedIn} removeCartItem={props.removeCartItemAPI} />
          </div>
          <div className="row ml-5">
            <h5 className="col-md-6">Total</h5>
            <h6 className="row ml-4 text-info mb-3" >{VNDformat(priceTotal)}</h6>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn" data-dismiss="modal">
              Close
            </button>
            <Link to={{
              pathname: '/payment',
              state: {
                listItems: props.list
              }
            }}>
              <button type="button" className="btn btn-danger"  >
                Checkout
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPopup);
