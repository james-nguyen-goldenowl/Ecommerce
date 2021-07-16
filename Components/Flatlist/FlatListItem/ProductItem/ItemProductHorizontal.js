/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Colors from '../../../../utils/Color';
import AverageRating from '../../../Rating/AverageRating';
import FavoriteButton from '../../../Button/FavoriteButton/FavoriteButton';
const {width} = Dimensions.get('screen');
const ItemProductHorizontal = ({item, navigation}) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={item.imageUrl} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.itemTilte} numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Text>
          <Text style={{color: '#9B9B9B', fontSize: 11, fontFamily: '#9B9B9B'}}>
            {item.category}
          </Text>
          <View>
            <AverageRating idProduct={item.id} />
          </View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLike}>
        <FavoriteButton item={item} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    width: width,
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 16,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 104,
    marginRight: 16,
    marginTop: 16,
    marginLeft: 16,
  },
  imageContainer: {
    width: '40%',
  },
  image: {
    // borderRadius: 8,
    height: 104,
    width: '100%',
  },
  content: {
    paddingLeft: 20,
    paddingTop: 11,
    backgroundColor: Colors.WHITE,
    width: '60%',
    height: 104,
    fontFamily: 'Metropolis',
    // borderRadius: 8,
  },
  itemTilte: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 9,
  },
  buttonLike: {
    right: 11,
    top: 100,
    position: 'absolute',
  },
});
export default ItemProductHorizontal;
