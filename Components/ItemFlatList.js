import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
const Item = ({item}) => {
  let imageSource = {uri: item.imageUrl};
  // let Image_Http_URL = {
  //   uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
  // };
  // console.log(
  //   '🚀 ~ file: ItemFlatList.js ~ line 6 ~ Item ~ imageSource',
  //   imageSource,
  // );
  return (
    <View style={styles.container}>
      <Image source={{uri: item.imageUrl}} resizeMode={'stretch'} />
      <Text style={styles.itemTilte}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemTilte: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 5,
  },
  price: {
    fontSize: 10,
    color: 'red',
  },
});
export default Item;
