const initialState = {
  list: [],
  cartCount: 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      console.log(action.payload);
      const newList = [...state.list];
      newList.push(action.payload)
      return {
        ...state,
        cartCount: state.cartCount + 1,
        list: newList
      }
    }

    default:
      return state;
  }
};

export default cartReducer;