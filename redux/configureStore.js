import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const pReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: pReducer,
  middleware: [thunk],
});
// const store = configureStore({
//   reducer: rootReducer,
// });
export default store;
