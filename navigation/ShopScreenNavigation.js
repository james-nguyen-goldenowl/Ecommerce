import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShopScreen from '../screen/Shop/Shop';
const ShopStack = createStackNavigator();
import {TouchableOpacity, Image} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ProductCategory from '../screen/product/ProductCategory/ProductCategory';
import {useDispatch} from 'react-redux';
import {categoryAsyncAction} from '../redux/category/AsyncAction';
const ShopStackScreen = () => {
  const [pressSearch, setPress] = useState(false);
 
  return (
    <ShopStack.Navigator
      initialRouteName="Category"
      screenOptions={{headerTitleAlign: 'center'}}>
      <ShopStack.Screen
        name="Category"
        options={{headerShown: true}}
        component={ShopScreen}
        initialParams={{pressSearchButton: false}}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        options={({navigation, route}) => ({
          headerTitle: 'Category',
          headerRight: () => {
            return (
              <TouchableOpacity
                // eslint-disable-next-line react-native/no-inline-styles
                style={{paddingRight: 20}}
                onPress={() =>
                  navigation.navigate('Category', {
                    pressSearchButton: true,
                  })
                }>
                <FontAwesome5Icon name="search" size={20} />
              </TouchableOpacity>
            );
          },
        })}
      />
      <ShopStack.Screen
        name="ProductCategory"
        component={ProductCategory}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        options={({navigation, route}) => ({
          headerTitle: '',
          headerRight: () => {
            return (
              <TouchableOpacity
                // eslint-disable-next-line react-native/no-inline-styles
                style={{paddingRight: 20}}
                onPress={() =>
                  navigation.navigate('ProductCategory', {
                    pressSearchButton: !pressSearch,
                  })
                }>
                <FontAwesome5Icon name="search" size={20} />
              </TouchableOpacity>
            );
          },
        })}
      />
    </ShopStack.Navigator>
  );
};
export default ShopStackScreen;
