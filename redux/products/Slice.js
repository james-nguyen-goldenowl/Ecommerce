/* eslint-disable no-fallthrough */
import {createSlice} from '@reduxjs/toolkit';
import {apiStatus} from '../../fakeApi';
import {productAsyncAction} from './AsyncAction';
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    productCategory: [],
    sort: '',
    status: null,
    message: null,
  },
  reducers: {
    clearState: state => {
      state.status = null;
      state.message = null;
    },
    getProductByCategory: (state, action) => {
      console.log(action.payload);
      if (action.payload !== 'all') {
        const idCategory = action.payload;
        state.productCategory = state.products.filter(
          item => item.category === idCategory,
        );
      } else {
        state.productCategory = state.products;
      }
    },
    sortProduct: (state, action) => {
      state.sort = action.payload;
      switch (state.sort) {
        case 'Popular':
        case 'Newest':
        case 'Customer review':
        case 'Price: lowest to high':
          state.productCategory = state.productCategory.sort(function (a, b) {
            let priceA = Number(a.price.replace(/[^0-9.-]+/g, ''));
            let priceB = Number(b.price.replace(/[^0-9.-]+/g, ''));
            return priceA - priceB;
          });
          state = {...state};
        case 'Price: highest to low':
          state.productCategory = state.productCategory
            .sort(function (a, b) {
              let priceA = Number(a.price.replace(/[^0-9.-]+/g, ''));
              let priceB = Number(b.price.replace(/[^0-9.-]+/g, ''));
              return priceB - priceA;
            })
            .reverse();
          state = {...state};
        default:
          state = {...state};
      }
      console.log(state);
    },
  },
  extraReducers: {
    [productAsyncAction.pending]: state => {
      state.status = apiStatus.PENDING;
      state.message = null;
    },
    [productAsyncAction.fulfilled]: (state, action) => {
      state.status = apiStatus.SUCCESS;
      // console.log(action);
      state.products = action.payload;
    },
    [productAsyncAction.rejected]: (state, action) => {
      state.status = apiStatus.ERROR;
      state.message = action.payload;
    },
  },
});
const {actions, reducer} = productsSlice;
const {clearState, getProductByCategory, sortProduct} = actions;
export {clearState, getProductByCategory, sortProduct};
export default reducer;
