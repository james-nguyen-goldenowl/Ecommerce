import {createSlice} from '@reduxjs/toolkit';
import {apiStatus} from '../../fakeApi';
import {categoryAsyncAction} from './AsyncAction';
const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: [],
    searchText: '',
    searchResult: null,
    status: null,
    message: null,
  },
  reducers: {
    clearState: state => {
      state.status = null;
      state.message = null;
    },
    searchState: (state, action) => {
      state.searchText = action.payload;
      const filterResult = state.category.filter(
        item =>
          item.name.toLowerCase().indexOf(state.searchText.toLowerCase()) !==
          -1,
      );
      state.searchResult = filterResult;
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
const {clearState, searchState} = actions;
export {clearState, searchState};
const categoryReducer = reducer;
export default categoryReducer;
