import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
let middlewareToApply = [thunk];
if (__DEV__) {
  const createFlipperDebugger = require('redux-flipper').default;
  middlewareToApply.push(createFlipperDebugger());
}
const pReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: pReducer,
  middleware: middlewareToApply,
});
// const store = configureStore({
//   reducer: rootReducer,
// });
export default store;
