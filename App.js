import React from 'react';
import type {Node} from 'react';
import {Provider as StoreProvider} from 'react-redux';
import store from './redux/configureStore';
import AppNavigation from './navigation/rootNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
const App: () => Node = () => {
  return (
    <StoreProvider store={store}>
      <StatusBar hidden={false} backgroundColor="red" />
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
