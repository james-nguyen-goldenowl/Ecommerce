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
import {useSelector} from 'react-redux';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import CommonButton from '../../Components/Button/CommonButton/CommonButton';
import Title from '../../utils/Title';
import Colors from '../../utils/Color';
import ProductCategory from '../product/ProductCategory/ProductCategory';
const Item = ({category, navigation}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('ProductCategory', {category})}>
    <Text
      style={{
        fontSize: 16,
        paddingLeft: 40,
        paddingVertical: 17,
        color: Colors.BLACK,
      }}>
      {category}
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
  const pressSearchButton = route.params.pressSearchButton;
  const [pressSearch, setPressSearch] = useState(false);
  useEffect(() => {
    pressSearchButton === true ? setPressSearch(pressSearchButton) : false;
  }, [pressSearchButton]);
  const productsList = useSelector(state => state.products.products);
  const [categoryList, setCategorys] = useState(
    Array.from(new Set(productsList.map(item => item.category))),
  );
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    let categorys = Array.from(
      new Set(productsList.map(item => item.category)),
    );
    let filterItem = categorys.filter(
      item => item.toLowerCase().indexOf(searchText.toLowerCase()) !== -1,
    );
    console.log('filter', filterItem);
    setCategorys(filterItem);
  }, [productsList, searchText]);
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    return (
      <Item
        category={item}
        navigation={navigation}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };
  return (
    <ScrollView contentContainerStyle={{backgroundColor: Colors.BACKGROUND}}>
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
                  setSearchText(text);
                }}
              />
            </View>
          </View>
        </View>
      )}
      <CommonButton
        text={Title.VIEW_ALL}
        onPress={() => {
          setSearchText('');
        }}
      />
      <Text style={{paddingTop: 10, paddingLeft: 20, color: Colors.GRAY}}>
        Choose category
      </Text>
      <FlatList
        data={categoryList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </ScrollView>
  );
};
export default ShopScreen;
