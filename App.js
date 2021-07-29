import React from 'react';
import type {Node} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import store from './redux/configureStore';
import AppNavigation from './navigation/rootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
const App: () => Node = () => {
  let persistor = persistStore(store);
  return (
    <StoreProvider store={store}>
      <StatusBar hidden={false} backgroundColor="red" />
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
