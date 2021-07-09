import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Banner from './components/Banner';
import {useDispatch, useSelector} from 'react-redux';
import ProductList from '../../Components/Flatlist/ProductList';
import {productAsyncAction} from '../../redux/products/AsyncAction';
import {ScrollView} from 'react-native';
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.products.products);
  const [products, setProducts] = useState(productsList);
  useEffect(() => {
    dispatch(productAsyncAction());
    setProducts(productsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsList]);
  const productsSale = productsList.filter(
    product => product.sale !== undefined,
  );
  const productsNew = products.filter(
    product => product.categoryBonus !== undefined,
  );
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView style={{flex: 1}}>
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Shop');
              }}>
              <Text>View all</Text>
            </TouchableOpacity>
          </View>
          <ProductList products={productsSale} navigation={navigation} />
          <View style={styles.titleGroup}>
            <View>
              <Text style={styles.tile}>New</Text>
              <Text style={styles.subTitle}>New product</Text>
            </View>
            <TouchableOpacity>
              <Text>View all</Text>
            </TouchableOpacity>
          </View>
          <ProductList products={productsNew} navigation={navigation} />
        </View>
      </View>
    </ScrollView>
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
