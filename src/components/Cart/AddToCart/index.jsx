import React from 'react';
import { connect } from 'react-redux'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { addNewToCart } from '../../../redux/actions/cartAction'

// import PropTypes from 'prop-types';

// AddToCart.propTypes = {
  
// };
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
  addNewToCart,
}



function AddToCart(props) {

  // const { item } = props

  const item = {
    id: "1",
    name: "StarboyYD",
    price: "200.00$"
  };

  const handleCartItemClick = () => {
    props.addNewToCart(item);
  };

  return (
    <div className="add-to-cart">
      <AddShoppingCartIcon onClick={handleCartItemClick}/>
    </div>
  );
}



export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);