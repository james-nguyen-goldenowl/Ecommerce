/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import AverageRating from '../../../Rating/AverageRating';
import FavoriteButton from '../../../Button/FavoriteButton/FavoriteButton';
import SaleText from '../../../CustomText/SaleText';
const ItemProductVertical = ({item, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigation.navigate('Details', {item: item});
        }}
        style={{height: '100%'}}>
        <Image
          style={styles.image}
          source={item.imageUrl}
          loadingIndicatorSource={{uri: '../../public/loading.gif'}}
        />
        <View>
          <AverageRating idProduct={item.id} />
        </View>
        <Text style={{color: '#9B9B9B', fontSize: 11, fontFamily: '#9B9B9B'}}>
          {item.category}
        </Text>
        <Text style={styles.itemTilte} numberOfLines={1} ellipsizeMode="tail">
          {item.name}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLike}>
        <FavoriteButton item={item} />
      </TouchableOpacity>
      <View style={{position: 'absolute', top: 15, left: 26}}>
        <SaleText item={item} />
      </View>
      {item.categoryBonus !== undefined ? (
        <View style={styles.newTextView}>
          <Text style={styles.newText}>{item.categoryBonus}</Text>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 176,
    height: 276,
    marginRight: 0,
    fontFamily: 'Metropolis',
  },
  newTextView: {
    backgroundColor: '#222222',
    top: 15,
    left: 26,
    position: 'absolute',
    borderRadius: 29,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: 26,
    width: 40,
  },
  newText: {
    color: 'white',
    // lineHeight: 11,
  },
  itemTilte: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 10,
    color: 'red',
  },
  image: {
    height: 177.3,
    width: 147,
    borderRadius: 10,
  },
  buttonLike: {
    right: 11,
    top: 164,
    position: 'absolute',
  },
  ratingBar: {
    top: 185,
  },
  sale: {
    top: 15,
    left: 26,
  },
});
export default ItemProductVertical;
