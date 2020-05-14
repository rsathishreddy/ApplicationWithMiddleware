import Axios from "axios";

export const setProducts = products => {
  return {
    type: "SETPRODUCTS",
    products: products
  };
};

export const onInitialRender = () => {
  return dispatch => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      dispatch(setProducts(res.data));
    });
  };
};
