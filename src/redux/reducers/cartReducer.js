const initialState = {
  list: [],
  cartCount: 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      // console.log(action.payload);
      const newList = [...state.list];
      const newItem = newList.find(item => item === action.payload)
      if (newItem === action.payload) {
        // console.log(newItem);
        var filtered = newList.filter(function(el) { return el !== newItem; }); 
        // console.log("filtered: ", filtered);
        return {
          ...state,
          cartCount: state.cartCount - 1,
          list: filtered
        };
      }
      // console.log("new item: ", newItem);
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