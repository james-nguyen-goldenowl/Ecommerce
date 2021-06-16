import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/Home';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import SignUpForm from './SignUpForm';
import SignUpScreen from '../screen/SignUpScreen';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let colorIcon;

            if (route.name === 'Home') {
              iconName = 'home';
              //   colorIcon = focused ? 'red' : 'white';
            } else if (route.name === 'Settings') {
              iconName = 'shopping-cart';
              //   colorIcon = focused ? 'red' : 'white';
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
