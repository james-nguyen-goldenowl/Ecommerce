/* eslint-disable no-fallthrough */
import {createSlice} from '@reduxjs/toolkit';
import {apiStatus} from '../../fakeApi';
import {productAsyncAction} from './AsyncAction';
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: null,
    message: null,
  },
  reducers: {
    clearState: state => {
      state.status = null;
      state.message = null;
    },
    sortProduct: (state, action) => {
      let sortArr = [];
      state.sort = action.payload;

      switch (state.sort) {
        case 'Popular':
          state.productCategory = state.products;
        case 'Newest':
        case 'Customer review':
        case 'Price: lowest to high':
          sortArr = state.productCategory.sort(function (a, b) {
            let priceA = Number(a.price.replace(/[^0-9.-]+/g, ''));
            let priceB = Number(b.price.replace(/[^0-9.-]+/g, ''));
            return priceA - priceB;
          });
          state = {...state, productCategory: sortArr};
        case 'Price: highest to low':
          sortArr = state.productCategory.sort(function (a, b) {
            let priceA = Number(a.price.replace(/[^0-9.-]+/g, ''));
            let priceB = Number(b.price.replace(/[^0-9.-]+/g, ''));
            return priceB - priceA;
          });
          state = {...state, productCategory: sortArr};
        default:
      }
    },
  },
  extraReducers: {
    [productAsyncAction.pending]: state => {
      state.status = apiStatus.PENDING;
      state.message = null;
    },
    [productAsyncAction.fulfilled]: (state, action) => {
      state.status = apiStatus.SUCCESS;
      state.products = action.payload;
    },
    [productAsyncAction.rejected]: (state, action) => {
      state.status = apiStatus.ERROR;
      state.message = action.payload;
    },
  },
});
const {actions, reducer} = productsSlice;
const {clearState, sortProduct} = actions;
export {clearState, sortProduct};
export default reducer;
