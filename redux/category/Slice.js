import {createSlice} from '@reduxjs/toolkit';
import {apiStatus} from '../../fakeApi';
import {categoryAsyncAction} from './AsyncAction';
const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: [],
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
    [categoryAsyncAction.pending]: state => {
      state.status = apiStatus.PENDING;
      state.message = null;
    },
    [categoryAsyncAction.fulfilled]: (state, action) => {
      state.status = apiStatus.SUCCESS;
      state.category = action.payload;
    },
    [categoryAsyncAction.rejected]: (state, action) => {
      state.status = apiStatus.ERROR;
      state.message = action.payload;
    },
  },
});
const {actions, reducer} = categorySlice;
const {clearState} = actions;
export {clearState};
const categoryReducer = reducer;
export default categoryReducer;
