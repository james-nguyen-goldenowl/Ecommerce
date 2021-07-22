import {createSlice} from '@reduxjs/toolkit';
const CartScreenSlice = createSlice({
  name: 'cartScreen',
  initialState: {
    cart: [],
    priceTotal: 0,
  },
  reducers: {
    caculateMoney: (state, action) => {
      state.cart = [...action.payload];
      console.log('🚀 ~ file: Slice.js ~ line 11 ~ state.cart', state.cart);
      const cartExample = state.cart.map(
        item => item.product.price * item.quantity,
      );
      state.priceTotal = cartExample.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
    },
  },
});
const {actions, reducer} = CartScreenSlice;
const {caculateMoney} = actions;
const cartScreenReducer = reducer;
export {caculateMoney};
export default cartScreenReducer;
