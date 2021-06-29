import React, { useState } from "react";
import { RemoveShoppingCart } from "@material-ui/icons";
import { connect } from "react-redux";

import { addNewToCart, RemoveCartItemAPIAction  } from '../../../redux/actions/cartAction'
import { Link } from "react-router-dom"

import "./cartPopup.css";
// import { popupItem } from "../../../management-pages/dummyData";

// import PropTypes from 'prop-types';

// CartBadge.propTypes = {

// };

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
const VNDformat = (money) => {
  return money.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}


const ListPopup = (props) => {

  const { list, addNewToCart, isLoggedIn, removeCartItem  } = props;
  // const [listPopUpItem, setListPostItem] = useState(popupItem);
  // const [listPopUpItem, setListPostItem] = useState(list);
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
        <span className="popup-sm-username">{item.title}</span>
        <div className="popup-sm-user-title">
          <span className="popup-sm-user-category">{item.category}</span>
          <span className="popup-sm-user-price">{VNDformat(item.price)}</span>
        </div>
      </div>
      <button className="popup-sm-button" onClick={() => handleRemovePopupItem(item)}>
        <RemoveShoppingCart className="popup-sm-icon" />
        Remove
      </button>
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
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Item was added:
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
