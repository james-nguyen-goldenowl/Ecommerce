/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GetProducts from '../../redux/products/action';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import CommonButton from '../../Components/Button/CommonButton';
const Item = ({category, navigation}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('ProductCategory', {category})}>
    <Text style={{fontSize: 20, padding: 20}}>{category}</Text>
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        borderBottomColor: '#9B9B9B',
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
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.products.products);
  const [products, setProducts] = useState(productsList);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    dispatch(GetProducts());
    setProducts(productsList);
  }, [productsList]);
  useEffect(() => {
    let filterItem = productsList.filter(
      item =>
        item.category.toLowerCase().indexOf(searchText.toLowerCase()) !== -1,
    );
    setProducts(filterItem);
  }, [searchText]);
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    return (
      <Item
        category={item.category}
        navigation={navigation}
        onPress={() => setSelectedId(item.id)}
      />
    );
  };
  return (
    <ScrollView>
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
        text="VIEW ALL ITEMS"
        onPress={() => {
          Alert.alert('a');
        }}
      />
      <Text style={{paddingLeft: 10}}>Choose category</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#DB3022',
    borderRadius: 20,
    width: '80%',
    height: 40,
    marginVertical: 20,
  },
});
export default ShopScreen;
