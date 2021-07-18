import {createSlice} from '@reduxjs/toolkit';
const productCategorySlice = createSlice({
  name: 'productCategorySlice',
  initialState: {
    idCategory: null,
    products: [],
    sortText: '',
  },
  reducers: {
    getAll: (state, action) => {
      state.products = action.payload;
    },
    getByID: (state, action) => {
      state.idCategory = action.payload;
      state.products = state.products.filter(
        item => item.category === state.idCategory,
      );
    },
  },
});
const {actions, reducer} = productCategorySlice;
const {getAll, getByID} = actions;
const productCategoryReducer = reducer;
export default productCategoryReducer;
export {getAll, getByID};
