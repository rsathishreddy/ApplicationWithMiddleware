const initialState = {
  cartItems: []
};

const reducer = (state = initialState, action) => {
  //console.log("pau=", action.payload);
  // console.log("carr=", state.cartItems);
  const pay = [...state.cartItems.concat(action.payload)];
  if (action.type === "addProduct") {
    return {
      ...state,
      cartItems: pay
    };
  }
  if (action.type === "deleteCartItems") {
    const afterDeleted = [
      ...state.cartItems.filter(item => {
        return item.id !== action.itemId;
      })
    ];
    return {
      ...state,
      cartItems: afterDeleted
    };
  }
  return state;
};

export default reducer;
