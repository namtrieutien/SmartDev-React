import * as types from '../constants';

export const addNewToCart = (payload) => {
  return {
    type: 'ADD_TO_CART',
    payload: payload,
  }
}

export const AddToCartAPI = (pid) => {
  console.log("AddToCartAPI_action_Pid: ", pid);
  return {
    type: types.ADD_TO_CART_API,
    post_id: pid,
  }
}
export const addedToCartAction = cartItem => {
  return {
      type: types.ADDED_TO_CART_API,
      cartItem
  }
}

export const RemoveCartItemAPIAction = (pid) => {
  console.log("REMOVECartAPI_action_Pid: ", pid);
  return {
    type: types.REMOVE_CART_ITEM_API,
    post_id: pid,
  }
}
