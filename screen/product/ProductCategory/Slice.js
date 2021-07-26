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
    sortProduct: (state, action) => {
      let sortArr = [];
      state.sort = action.payload;

      switch (state.sort) {
        case 'Popular':
          state.products = state.products;
          break;
        case 'Newest':
        case 'Customer review':
        case 'Price: lowest to high':
          sortArr = state.products.sort(function (a, b) {
            return a.price - b.price;
          });
          state = {...state, products: sortArr};
          break;
        case 'Price: highest to low':
          sortArr = state.products.sort(function (a, b) {
            return b.price - a.price;
          });
          state = {...state, products: sortArr};
          break;
        default:
          break;
      }
    },
  },
});
const {actions, reducer} = productCategorySlice;
const {getAll, getByID, sortProduct} = actions;
const productCategoryReducer = reducer;
export default productCategoryReducer;
export {getAll, getByID, sortProduct};
