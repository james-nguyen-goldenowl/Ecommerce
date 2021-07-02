import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import Banner from '../../Components/Banner/Banner';
import ProductItemFlatList from '../../Components/FlatListItem/ProductItemFlatList';
import {useDispatch, useSelector} from 'react-redux';
import ProductList from '../../Components/Flatlist/ProductList';
import {productAsyncAction} from '../../redux/products/Products.asyncAction';
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.products.products);
  const [products, setProducts] = useState(productsList);
  useEffect(() => {
    dispatch(productAsyncAction());
    setProducts(productsList);
  }, [productsList]);
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    return (
      <View>
        <ProductItemFlatList
          item={item}
          onPress={() => setSelectedId(item.id)}
          navigation={{navigation}}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View>
        <Banner />
      </View>
      <View style={styles.content}>
        <View style={styles.titleGroup}>
          <View>
            <Text style={styles.tile}>Sale</Text>
            <Text style={styles.subTitle}>Super summer sale</Text>
          </View>
          <TouchableOpacity>
            <Text>View all</Text>
          </TouchableOpacity>
        </View>
        {/* <FlatList
          data={products}
          horizontal
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        /> */}
        <ProductList products={products} navigation={navigation} />
        <View style={styles.titleGroup}>
          <View>
            <Text style={styles.tile}>New</Text>
            <Text style={styles.subTitle}>New product</Text>
          </View>
          <TouchableOpacity>
            <Text>View all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={products}
          horizontal
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
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
    marginTop: 10,
    marginRight: 20,
  },
  tile: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    opacity: 0.5,
  },
  titleGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
});
export default HomeScreen;
