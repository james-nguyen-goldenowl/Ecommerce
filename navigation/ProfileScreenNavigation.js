import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const ProfileStack = createStackNavigator();
import {TouchableOpacity} from 'react-native';
import ProfileScreen from '../screen/Profile/Profile';
import {clearState} from '../redux/user/Slice';
import {useDispatch} from 'react-redux';
import {Image} from 'react-native';
const ProfileStackScreen = () => {
  const dispatch = useDispatch();
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerTitleAlign: 'center'}}>
      <ProfileStack.Screen
        name="Profile"
        options={{headerShown: false}}
        component={ProfileScreen}
        initialParams={{pressOutButon: false}}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        options={({navigation, route}) => ({
          headerTitle: '',
          headerRight: () => {
            return (
              <TouchableOpacity
                // eslint-disable-next-line react-native/no-inline-styles
                style={{paddingRight: 20}}
                onPress={() => dispatch(clearState())}>
                <Image
                  source={require('../public/logout.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            );
          },
        })}
      />
    </ProfileStack.Navigator>
  );
};
export default ProfileStackScreen;
