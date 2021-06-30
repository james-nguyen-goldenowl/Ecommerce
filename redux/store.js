import {createStore} from 'redux';
import productReducer from './products/reducer';
const store = createStore(productReducer);
export default store;
