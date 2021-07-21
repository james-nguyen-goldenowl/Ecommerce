import {createSlice} from '@reduxjs/toolkit';
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex(item => item.product == product);
      index !== -1
        ? (state.cart[index].quantity = state.cart[index].quantity + 1)
        : state.cart.push({product: product, quantity: 1});
        console.log(state.cart)
    },
    removeToCart: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex(item => item.product === product);
      state.cart[index].quantity !== 1
        ? (state.cart[index].quantity = state.cart[index].quantity - 1)
        : (state.cart = state.cart.filter(item => item.product !== product));
    },
  },
});
const {actions, reducer} = cartSlice;
const {addToCart, removeToCart} = actions;
export {addToCart, removeToCart};
const cartReducer = reducer;
export default cartReducer;
