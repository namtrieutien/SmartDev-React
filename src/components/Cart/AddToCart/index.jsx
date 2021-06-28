import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { addNewToCart } from '../../../redux/actions/cartAction'

// import PropTypes from 'prop-types';

// AddToCart.propTypes = {
  
// };
const mapStateToProps = (state) => {
  return {
    cartList: state.cartReducer.list,
  }
}

const mapDispatchToProps = {
  addNewToCart,
}



function AddToCart(props) {
  const [actived, setActived] = useState("black");
  const { item, cartList } = props

  useEffect(() => {
    // console.log("Incomponent cartList: ", cartList);
    const newItem = cartList.find(cartItem => cartItem === item)
    // console.log("component item ", item);
    // console.log("find newItem: ", newItem);
    if(newItem === item) {
      console.log("if newitem: ", newItem);
      setActived("red");
    } else {
      setActived("black")
    }
  }, [cartList])

  const handleCartItemClick = () => {
    props.addNewToCart(item);
  };

  return (
    <div className="add-to-cart">
      <AddShoppingCartIcon onClick={handleCartItemClick} style={{color: actived}}/>
    </div>
  );
}



export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);