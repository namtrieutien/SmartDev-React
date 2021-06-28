import React, { useState } from "react";
import { RemoveShoppingCart } from "@material-ui/icons";
import { connect } from "react-redux";

import { addNewToCart } from '../../../redux/actions/cartAction'
import "./cartPopup.css";
// import { popupItem } from "../../../management-pages/dummyData";

// import PropTypes from 'prop-types';

// CartBadge.propTypes = {

// };

const mapStateToProps = (state) => {
  return {
    list: state.cartReducer.list,
  };
};

const mapDispatchToProps = {
  addNewToCart,
}

const ListPopup = (props) => {

  const { list, addNewToCart } = props;
  // const [listPopUpItem, setListPostItem] = useState(popupItem);
  // const [listPopUpItem, setListPostItem] = useState(list);


  const handleRemovePopupItem = (item) => {
    // var filtered = listPopUpItem.filter(function(el) { return el !== item; });
    // setListPostItem(filtered)
    console.log("handle remove: ",item);
    addNewToCart(item);
  }

  const listItems = list.map((item) => (
    <li key={item.id} className="popup-sm-item">
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
            <ListPopup list={props.list} addNewToCart={props.addNewToCart}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-danger">
              purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPopup);
