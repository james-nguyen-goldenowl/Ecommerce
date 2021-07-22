import {createSlice} from '@reduxjs/toolkit';
const findProduct = (item, product) => {
  let condition = 0;
  item.product.id === product.id ? (condition = condition + 1) : null;
  item.product.size === product.size ? (condition = condition + 1) : null;
  item.product.color === product.color ? (condition = condition + 1) : null;
  if (condition === 3) {
    return true;
  } else {
    return false;
  }
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex(item => findProduct(item, product));
      index !== -1
        ? (state.cart[index].quantity = state.cart[index].quantity + 1)
        : state.cart.push({product: product, quantity: 1});
    },
    removeToCart: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex(item => findProduct(item, product));
      state.cart[index].quantity !== 1
        ? (state.cart[index].quantity = state.cart[index].quantity - 1)
        : (state.cart = state.cart.filter(item => !findProduct(item, product)));
    },
  },
});
const {actions, reducer} = cartSlice;
const {addToCart, removeToCart} = actions;
export {addToCart, removeToCart};
const cartReducer = reducer;
export default cartReducer;
