import productsReducer from './products/Reducer';
import profileReducer from './user/Slice';
import favoriteReducer from './favorite/Slice';
import categoryReducer from './category/Slice';
import {combineReducers} from 'redux';
// import cartReducer from './cart/Slice';
const rootReducer = combineReducers({
  products: productsReducer,
  user: profileReducer,
  favorite: favoriteReducer,
  category: categoryReducer,
  // cart: cartReducer,
});

export default rootReducer;
