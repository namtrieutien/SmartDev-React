import * as type from '../constants'

const cartItems = JSON.parse(localStorage.getItem("cart"));

const initialState = cartItems
  ? { list: cartItems, cartCount:cartItems.length  }
  : {  list: [], cartCount: 0, };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      console.log("action.payload",action.payload);
      const newList = [...state.list];

      const newItem = newList.find(item => JSON.stringify(item) === JSON.stringify(action.payload))

      if (JSON.stringify(newItem) === JSON.stringify(action.payload)) {
        var filtered = newList.filter(function(el) { return el !== newItem; }); 
        localStorage.setItem("cart", JSON.stringify(filtered));
        return {
          ...state,
          cartCount: state.cartCount - 1,
          list: filtered
        };
      }
      newList.push(action.payload)
      localStorage.setItem("cart", JSON.stringify(newList));
      return {
        ...state,
        cartCount: state.cartCount + 1,
        list: newList
      }
    }
    case type.ADDED_TO_CART_API:
      return {
        ...state,
        cartItemAdded: action.cartItem
      }
      case type.CART_LOADED:
        return {
          ...state,
          cartCount: action.cart.length,
          list : action.cart
        }
      case type.REMOVE_CART:
          return {
            ...state,
          cartCount: 0,
          list : []
          }
    default:
      return state;
  }
};

export default cartReducer;