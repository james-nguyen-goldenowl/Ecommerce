import {createSlice} from '@reduxjs/toolkit';
const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const found = state.favorite.find(element => element === action.payload);
      found
        ? removeFavorite(action.payload)
        : state.favorite.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        item => item.name !== action.payload.name,
      );
    },
  },
});
const {actions, reducer} = favoriteSlice;
const {addFavorite, removeFavorite} = actions;
export {addFavorite, removeFavorite};
const favoriteReducer = reducer;
export default favoriteReducer;
