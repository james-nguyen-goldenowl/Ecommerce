import {createSlice} from '@reduxjs/toolkit';
const ProductDetailSlice = createSlice({
  name: 'productDetail',
  initialState: {
    size: null,
    color: null,
    products: [],
  },
  reducers: {
    getSize: (state, action) => {
      action.payload !== 'Size' ? (state.size = action.payload) : null;
    },
    getColor: (state, action) => {
      action.payload !== 'Color' ? (state.color = action.payload) : null;
    },
    clearState: state => {
      state.color = null;
      state.size = null;
    },
    getRecommend: (state, action) => {
      const {initial, productId} = action.payload;
      state.products = initial;
      let count = state.products.length;
      let arrRecommend = [];
      for (let i = 0; i < 12; i++) {
        let chosenIndex = Math.floor(Math.random() * count);
        let chosenProduct = state.products[chosenIndex];
        if (chosenProduct.id === productId) {
          i = i - 1;
        } else {
          let index = arrRecommend.findIndex(
            element => element.id === chosenProduct.id,
          );
          index != -1 ? (i = i - 1) : arrRecommend.push(chosenProduct);
        }
      }
      state.products = [...arrRecommend];
    },
  },
});
const {actions, reducer} = ProductDetailSlice;
const {getSize, getColor, clearState, getRecommend} = actions;
const productReducer = reducer;
export {getSize, getColor, clearState, getRecommend};
export default productReducer;
