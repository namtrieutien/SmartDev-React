import React from 'react';
import { connect } from 'react-redux';


import {ShoppingCartOutlined} from '@material-ui/icons';
import { addNewToCart } from '../../../redux/actions/cartAction'
import "./CartBadge.css"

// import PropTypes from 'prop-types';

// CartBadge.propTypes = {
  
// };

const mapStateToProps = (state) => {
  return {
    cartCount: state.cartReducer.cartCount,
  }
}

const mapDispatchToProps = {
}

function CartBadge(props) {
  return (
    <div className="card-badge">
      <div className="cart-icon-container">
        <ShoppingCartOutlined style={{ fontSize: 30 }} className="cart-icon"/>
        <span className="badge badge-danger cart-icon-badge">{props.cartCount}</span>
      </div>
    </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(CartBadge);