import {createSlice} from '@reduxjs/toolkit';
const ShopSlice = createSlice({
  name: 'shopslice',
  initialState: {
    searchText: '',
    categoryView: [],
  },
  reducers: {
    searchCategory: (state, action) => {
      let categoryState = action.payload.category;
      state.searchText = action.payload.searchText;
      const filterResult = categoryState.filter(
        item =>
          item.name.toLowerCase().indexOf(state.searchText.toLowerCase()) !==
          -1,
      );
      state.categoryView = filterResult;
    },
  },
});
const {actions, reducer} = ShopSlice;
const {searchCategory} = actions;
const shopScreenReducer = reducer;
export default shopScreenReducer;
export {searchCategory};
