import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import TabNavigation from './BottomTabNavigation';
import SignUpScreen from '../screen/Authentication/SignUp/SignUpScreen';
import LoginScreen from '../screen/Authentication/Login/LoginScreen';
const AppStack = createStackNavigator();
export default function AppNavigation() {
  const user = useSelector(state => state.user.user);
  return (
    <AppStack.Navigator>
      {user.email !== '' ? (
        <>
          <AppStack.Screen
            name="BottomTab"
            options={{headerShown: false}}
            component={TabNavigation}
          />
        </>
      ) : (
        <>
          <AppStack.Screen
            name="Login"
            options={{headerShown: false}}
            component={LoginScreen}
          />
          <AppStack.Screen
            name="SignUp"
            options={{headerShown: false}}
            component={SignUpScreen}
          />
        </>
      )}
    </AppStack.Navigator>
  );
}
