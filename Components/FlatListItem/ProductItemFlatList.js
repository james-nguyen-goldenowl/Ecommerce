import React, {useState} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import RatingBar from '../Rating/RatingBar';
const ProductItemFlatList = ({item, navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  let path = '../' + item.imageUrl;
  let test = require('../../public/1.jpg');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigation.navigate('Details', {item: item});
        }}>
        <Image style={styles.image} source={item.imageUrl} />
        <Text style={styles.itemTilte} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 165,
    // backgroundColor: 'black',
  },
  itemTilte: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 10,
    color: 'red',
  },
  image: {
    height: 90,
    width: '100%',
    // resizeMode: 'cover',
  },
});
export default ProductItemFlatList;
