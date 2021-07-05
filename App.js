/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as StoreProvider} from 'react-redux';
import store from './redux/configureStore';
// import TabNavigation from './navigation/BottomTabNavigation';
import AppNavigation from './navigation/rootNavigation';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
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
