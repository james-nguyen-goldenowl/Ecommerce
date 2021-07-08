import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeScreenNavigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ShopStackScreen from './ShopScreenNavigation';
import ProfileScreen from '../screen/Profile/Profile';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName;
          if (route.name === 'Home') {
            // iconName = 'home';
            iconName = focused ? 'user' : 'home';
          } else if (route.name === 'Shop') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Bags') {
            iconName = 'shopping-bag';
          } else if (route.name === 'Favorites') {
            iconName = 'heart';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={25} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen
        name="Shop"
        options={{headerShown: true}}
        component={ShopStackScreen}
      />
      <Tab.Screen name="Bags" component={HomeStackScreen} />
      <Tab.Screen name="Favorites" component={HomeStackScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
