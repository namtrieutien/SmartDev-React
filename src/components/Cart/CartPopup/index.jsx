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
    console.log("handle remove: ", item);
    addNewToCart(item);

    if (isLoggedIn) removeCartItem(item.id) 
  }

  const listItems = list.map((item) => (
    <li key={item.id} className="popup-sm-item">
      {/* <img src={item.img} alt="" className="popup-sm-img" /> */}
      <img src="https://i.imgur.com/QRwjbm5.jpg" alt="" className="popup-sm-img" />
      <div className="popup-sm-user">
        <span className="popup-sm-username">{item.title}hhhhhhhhhhhhhhhhhhhhhhhh677777777777777</span>
        <div className="row">
          {/* <span className="col-sm-6">{item.category}</span> */}
          <span className="col-sm-4 popup-sm-user-price">{VNDformat(item.price + 99999999)}</span>
          <button className="popup-sm-button" onClick={() => handleRemovePopupItem(item)}>
        <RemoveShoppingCart className="popup-sm-icon" />
        Remove
      </button>
        </div>
      </div>
      
    </li>
  ));

  return <ul className="popup-sm-list">{listItems}</ul>;
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
      <div className="modal-dialog modal-notify modal-danger" role="document">
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
