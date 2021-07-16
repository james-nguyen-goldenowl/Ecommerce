/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StatusBar,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import CommonButton from '../../Components/Button/CommonButton/CommonButton';
import Title from '../../utils/Title';
import Colors from '../../utils/Color';
import {searchCategory} from './Slice';
const Item = ({category, navigation}) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate('ProductCategory', {categoryID: category.id})
    }>
    <Text
      style={{
        fontSize: 16,
        paddingLeft: 40,
        paddingVertical: 17,
        color: Colors.BLACK,
      }}>
      {category.name}
    </Text>
    <View
      style={{
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 0.4,
      }}
    />
  </TouchableOpacity>
);
const ShopScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const pressSearchButton = route.params.pressSearchButton;
  const [pressSearch, setPressSearch] = useState(false);
  useEffect(() => {
    pressSearchButton === true ? setPressSearch(pressSearchButton) : false;
  }, [pressSearchButton]);
  const shopState = useSelector(state => state.shop);
  const category = useSelector(state => state.category.category);
  const searchText = shopState.searchText;
  const [data, setData] = useState([]);
  setTimeout(() => {
    setData(category);
  }, 1000);
  useEffect(() => {
    setData(shopState.categoryView);
  }, [searchText, shopState.categoryView]);
  const renderItem = ({item}) => {
    return <Item category={item} navigation={navigation} />;
  };
  return (
    <ScrollView style={{backgroundColor: Colors.BACKGROUND}}>
      <StatusBar hidden={false} backgroundColor="red" />
      {pressSearch === true && (
        <View style={{flex: 1, paddingTop: 20}}>
          <View
            style={{
              height: 40,
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 40,
                backgroundColor: 'white',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FontAwesome5Icon
                name="search"
                size={15}
                style={{fontSize: 10}}
              />
              <TextInput
                placeholder="Search"
                style={{fontSize: 15, paddingLeft: 15}}
                value={searchText}
                onChangeText={text => {
                  let action = {
                    searchText: text,
                    category: category,
                  };
                  dispatch(searchCategory(action));
                }}
              />
            </View>
          </View>
        </View>
      )}
      <CommonButton
        text={Title.VIEW_ALL}
        onPress={() =>
          navigation.navigate('ProductCategory', {categoryID: 'all'})
        }
      />
      <Text style={{paddingTop: 10, paddingLeft: 20, color: Colors.GRAY}}>
        Choose category
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};
export default ShopScreen;
