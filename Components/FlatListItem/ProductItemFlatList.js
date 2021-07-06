/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AverageRating from '../Rating/AverageRating';
import FavoriteButton from '../Button/FavoriteButton/FavoriteButton';
const ProductItemFlatList = ({item, navigation}) => {
  let percentSale = 0;
  if (item.sale !== undefined) {
    let sale = Number(item.sale.replace(/[^0-9.-]+/g, ''));
    let price = Number(item.price.replace(/[^0-9.-]+/g, ''));
    percentSale = '-' + Math.round(((price - sale) / price) * 100) + '%';
  }
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigation.navigate('Details', {item: item});
        }}>
        <View>
          <Image
            style={styles.image}
            source={item.imageUrl}
            loadingIndicatorSource={{uri: '../../public/loading.gif'}}
          />
          <View style={styles.buttonLike}>
            <FavoriteButton />
          </View>
        </View>
        <AverageRating idProduct={item.id} />
        <Text style={{color: '#9B9B9B'}}>{item.category}</Text>
        <Text style={styles.itemTilte} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </TouchableOpacity>
      {percentSale !== 0 ? (
        <Text style={styles.saleText}>{percentSale}</Text>
      ) : null}
      {item.categoryBonus !== undefined ? (
        <Text style={styles.newText}>{item.categoryBonus}</Text>
      ) : null}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 165,
    height: 200,
  },
  saleText: {
    backgroundColor: '#DB0322',
    top: 20,
    left: 5,
    position: 'absolute',
    borderRadius: 10,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 20,
    width: 40,
    color: 'white',
  },
  newText: {
    backgroundColor: '#222222',
    top: 20,
    left: 5,
    position: 'absolute',
    borderRadius: 10,
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 20,
    width: 40,
    color: 'white',
  },
  itemTilte: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 5,
  },
  price: {
    fontSize: 10,
    color: 'red',
  },
  image: {
    height: 90,
    width: '100%',
  },
  buttonLike: {
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
});
export default ProductItemFlatList;
