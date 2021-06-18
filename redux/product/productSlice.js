// import {createSlice} from '@reduxjs/toolkit';
// import apiStatus from '../../fakeApi/apiStatus';
// import {anyAsyncAction} from './productAction';

// const productSlice = createSlice({
//   name: 'products',
//   initialState: {
//     products: [],
//     status: null,
//     message: null,
//   },
//   reducers: {
//     clearState: state => {
//       state.status = null;
//       state.message = null;
//     },
//   },
//   extraReducers: {
//     [anyAsyncAction.pending]: state => {
//       state.status = apiStatus.PENDING;
//       state.message = null;
//     },
//     [anyAsyncAction.fulfilled]: (state, action) => {
//       state.status = apiStatus.SUCCESS;
//       state.products = action.payload;
//     },
//     // eslint-disable-next-line no-unused-vars
//     [anyAsyncAction.rejected]: (state, action) => {
//       state.status = apiStatus.ERROR;
//       console.log(action.payload);
//       state.message = action.payload;
//     },
//   },
// });
// const {actions, reducer} = productSlice;

// const {clearState} = actions;

// export {clearState};

// export default reducer;
