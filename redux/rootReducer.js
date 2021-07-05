import productsReducer from './products/Reducer';
import profileReducer from './user/Slice';

const rootReducer = {
  products: productsReducer,
  user: profileReducer,
};

export default rootReducer;
