const initialState = {
  cartItems: [],
  products: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addProduct":
      const pay = [...state.cartItems.concat(action.payload)];
      return {
        ...state,
        cartItems: pay
      };
    case "deleteCartItems":
      const afterDeleted = [
        ...state.cartItems.filter(item => {
          return item.id !== action.itemId;
        })
      ];
      return {
        ...state,
        cartItems: afterDeleted
      };
    case "SETPRODUCTS":
      return {
        ...state,
        products: action.products
      };
    default:
  }
  return state;
};

export default reducer;
