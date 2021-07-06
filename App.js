import React from 'react';
import type {Node} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import store from './redux/configureStore';
import AppNavigation from './navigation/rootNavigation';
import {NavigationContainer} from '@react-navigation/native';
const App: () => Node = () => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
