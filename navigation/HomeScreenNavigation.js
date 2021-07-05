import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screen/Home/Home';
import ProductDetails from '../screen/product/ProductDetail/ProductDetail';
import ReviewScreen from '../screen/product/ReviewScreen';
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
      <HomeStack.Screen
        name="Rating"
        options={{headerShown: true}}
        component={ReviewScreen}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
