import {createSlice} from '@reduxjs/toolkit';
import {apiStatus, productApi} from '../../fakeApi';
import {productAsyncAction} from './Products.asyncAction';
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
const {clearState} = actions;
export {clearState};
export default reducer;
