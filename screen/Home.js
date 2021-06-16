import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
// import {useDispatch} from 'react-redux';
import Banner from '../Components/Banner';
import {productList} from '../fakeApi/productData';
// import {anyAsyncAction} from '../redux/product/productAction';
import Item from '../Components/ItemFlatList';
import productAction from '../redux/product/actions';
const HomeScreen = () => {
  // const dispatch = useDispatch();
  const renderItem = ({item}) => <Item item={item} />;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // dispatch(productAction());
    setProducts(productList);
  }, []);
  let Image_Http_URL = {
    uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  };
  return (
    <View style={styles.container}>
      <View>
        <Banner />
      </View>
      <View style={styles.content}>
        <Text style={styles.tileGroup}>Sale</Text>
        <FlatList
          data={productList}
          horizontal
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        {/* <Image source={{Image_Http_URL}} /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // flexDirection: 'row',
    // alignContent: 'stretch',
    // flex: 1,
  },
  banner: {
    position: 'absolute',
  },
  content: {
    marginLeft: 10,
    marginTop: 30,
  },
  tileGroup: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default HomeScreen;
