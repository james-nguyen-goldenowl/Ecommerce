import productsReducer from './products/Reducer';
import profileReducer from './user/Slice';
import favoriteReducer from './favorite/Slice';
import categoryReducer from './category/Slice';
import {combineReducers} from 'redux';
import shopScreenReducer from '../screen/Shop/Slice';
import productCategoryReducer from '../screen/product/ProductCategory/Slice';
// import cartReducer from './cart/Slice';
const rootReducer = combineReducers({
  products: productsReducer,
  user: profileReducer,
  favorite: favoriteReducer,
  category: categoryReducer,
  shop: shopScreenReducer,
  productCategory: productCategoryReducer,
  // cart: cartReducer,
});

export default rootReducer;
