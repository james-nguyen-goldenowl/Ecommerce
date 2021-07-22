import {createSlice} from '@reduxjs/toolkit';
const ProductDetailSlice = createSlice({
  name: 'productDetail',
  initialState: {
    size: null,
    color: null,
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
  },
});
const {actions, reducer} = ProductDetailSlice;
const {getSize, getColor, clearState} = actions;
const productReducer = reducer;
export {getSize, getColor, clearState};
export default productReducer;
