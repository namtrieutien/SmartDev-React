export const addNewToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  }
}
