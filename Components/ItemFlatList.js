import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
const Item = ({item, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigation.navigate('Details', {item: item});
        }}>
        <Image
          style={styles.image}
          source={{uri: item.imageUrl}}
          resizeMode={'stretch'}
        />
        <Text style={styles.itemTilte}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 150,
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
  image: {
    height: 90,
    width: 135,
    resizeMode: 'cover',
  },
});
export default Item;
