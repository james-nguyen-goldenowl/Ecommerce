import productsReducer from './products/Reducer';
import profileReducer from './user/Slice';
import favoriteReducer from './favorite/Slice';
import categoryReducer from './category/Slice';
import {combineReducers} from 'redux';
import shopScreenReducer from '../screen/Shop/Slice';
import productCategoryReducer from '../screen/product/ProductCategory/Slice';
import cartReducer from './cart/Slice';
import productReducer from '../screen/product/ProductDetail/Slice';
import cartScreenReducer from '../screen/Cart/Slice';
import settingReducer from '../screen/SettingScreen/Slice';
import passwordReducer from '../screen/SettingScreen/Components/Slice';
import reviewReducer from '../screen/product/ReviewScreen/Slice';
const rootReducer = combineReducers({
  products: productsReducer,
  user: profileReducer,
  favorite: favoriteReducer,
  category: categoryReducer,
  shop: shopScreenReducer,
  productCategory: productCategoryReducer,
  cart: cartReducer,
  productDetail: productReducer,
  cartScreen: cartScreenReducer,
  setting: settingReducer,
  password: passwordReducer,
  review: reviewReducer,
});

export default rootReducer;
