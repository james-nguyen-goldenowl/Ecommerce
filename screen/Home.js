import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Banner from '../Components/Banner';
import ItemFlatList from '../Components/ItemFlatList';
import {useDispatch, useSelector} from 'react-redux';
import GetProducts from '../redux/products/action';
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.products);
  const [products, setProducts] = useState(productsList);
  useEffect(() => {
    dispatch(GetProducts());
    setProducts(productsList);
  }, [productsList]);
  // setProducts(productsList);
  console.log('🚀 ~ file: Home.js ~ line 23 ~ HomeScreen ~ test', products);
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <ItemFlatList
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
        navigation={{navigation}}
      />
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
        <FlatList
          data={products}
          horizontal
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
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
