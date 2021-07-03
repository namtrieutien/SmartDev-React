import React, { useState } from "react";
import { RemoveShoppingCart } from "@material-ui/icons";
import { connect } from "react-redux";

import { addNewToCart, RemoveCartItemAPIAction  } from '../../../redux/actions/cartAction'
import { Link } from "react-router-dom"
import {VNDformat} from '../../../helpers/utils'

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


const { list, addNewToCart, isLoggedIn, removeCartItem  } = props;


  console.log("login", props.isLoggedIn)

  const handleRemovePopupItem = (item) => {
    addNewToCart(item);

    if (isLoggedIn) removeCartItem(item.id) 
  }

  const listItems = list.map((item) => (
    <li key={item.id} className="li-list-wrapper" >
      <div className="popup-sm-item" data-toggle="collapse" data-target={`#${item.id}`}>
        <img src={item.img} alt="" className="popup-sm-img" />
        <div className="popup-sm-user">
          <span className="popup-sm-username">{item.name}</span>
          <div className="popup-sm-user-title">
            <span className="popup-sm-user-category">{item.category}</span>
            <span className="popup-sm-user-price">{item.price}</span>
          </div>
        </div>
        <button className="popup-sm-button" onClick={() => handleRemovePopupItem(item)}>
          <RemoveShoppingCart className="popup-sm-icon" />
          Remove
        </button>
      </div>
      <div id={item.id} class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
        s labore sustainable VHS.
      </div>
    </div>
    </li>
  ));

  return <ul className="popup-sm-list accordion" id="accordionExample">{listItems}</ul>;
};

function CartPopup(props) {
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
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
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
            <ListPopup list={props.list} addNewToCart={props.addNewToCart} isLoggedIn= {props.isLoggedIn} removeCartItem={props.removeCartItemAPI}/>
          </div>
          <div className="row ml-5">

            <h4 className="col-md-6">Total</h4>
            <h4 className="row ml-4" >678.000VND</h4>
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
