import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/Home';
import ProductDetails from '../screen/ProductDetail';
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerTitleAlign: 'center'}}>
      <HomeStack.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <HomeStack.Screen
        name="Details"
        options={{headerShown: true}}
        component={ProductDetails}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
