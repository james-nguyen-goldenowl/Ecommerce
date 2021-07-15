import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeScreenNavigation';
import ShopStackScreen from './ShopScreenNavigation';
import FavoriteScreen from '../screen/Favorite/FavoriteScreen';
import ProfileStackScreen from './ProfileScreenNavigation';
import {Image, StyleSheet} from 'react-native';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconSource;
          if (route.name === 'Home') {
            iconSource = focused
              ? require('../public/home-focused.png')
              : require('../public/home.png');
          } else if (route.name === 'Shop') {
            iconSource = focused
              ? require('../public/cart-focused.png')
              : require('../public/cart.png');
          } else if (route.name === 'Bags') {
            iconSource = focused
              ? require('../public/bag-focused.png')
              : require('../public/bag.png');
          } else if (route.name === 'Favorites') {
            iconSource = focused
              ? require('../public/heart-focused.png')
              : require('../public/heart.png');
          } else if (route.name === 'Profile') {
            iconSource = focused
              ? require('../public/user-focused.png')
              : require('../public/user.png');
          }

          return <Image source={iconSource} style={styles.image} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#DB3022',
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
        style: {paddingVertical: 10},
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen
        name="Shop"
        options={{headerShown: true}}
        component={ShopStackScreen}
      />
      <Tab.Screen name="Bags" component={HomeStackScreen} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 28.24,
    height: 27,
  },
});
