import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { addNewToCart, AddToCartAPI } from '../../../redux/actions/cartAction'

// import PropTypes from 'prop-types';

// AddToCart.propTypes = {

// };
const mapStateToProps = (state) => {
  const { isLoggedIn } = state.userReducer;
  return {
    cartList: state.cartReducer.list,
    isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCartAPI: (pid) => {
      dispatch(AddToCartAPI(pid));
    },
    addNewToCart: (item) => {
      dispatch(addNewToCart(item));
    },
  };
}

function AddToCart(props) {
  const [actived, setActived] = useState("black");
  const { item, cartList } = props

  useEffect(() => {
    // console.log("Incomponent cartList: ", cartList);
    const newItem = cartList.find(cartItem => cartItem === item)
    // console.log("component item ", item);
    // console.log("find newItem: ", newItem);
    if (newItem === item) {
      console.log("if newitem: ", newItem);
      setActived("red");
    } else {
      setActived("black")
    }
  }, [cartList])

  const handleCartItemClick = () => {
    props.addNewToCart(item);
    if (props.isLoggedIn) props.addToCartAPI(item.id)
  };

  return (
    <div className="add-to-cart">
      <AddShoppingCartIcon onClick={handleCartItemClick} style={{ color: actived }} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);