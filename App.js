/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
// import Provide
import TabNavigation from './navigation/BottomTabNavigation';
const Stack = createStackNavigator();
const App: () => Node = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="SignUp" component={SignUpScreen}/>
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <SignUpScreen />
    // <HomeScreen />
    <TabNavigation />
    // <Provider store={store}>
    //   //{' '}
    // </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
