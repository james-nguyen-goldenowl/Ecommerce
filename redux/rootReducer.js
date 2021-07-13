import productsReducer from './products/Reducer';
import profileReducer from './user/Slice';
// import favoriteReducer from './favorite/Slice';
// import cartReducer from './cart/Slice';
const rootReducer = {
  products: productsReducer,
  user: profileReducer,
  // favorite: favoriteReducer,
  // cart: cartReducer,
};

export default rootReducer;
