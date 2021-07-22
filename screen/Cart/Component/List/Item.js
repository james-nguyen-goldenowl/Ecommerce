/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Colors from '../../../../utils/Color';
import IncreaseButton from '../Button/IncreaseButton';
import DecreaseButton from '../Button/DecreaseButton';
const Item = ({item}) => {
  const product = item.product;
  const quantity = item.quantity;
  return (
    <View style={{height: 104, marginTop: 24}}>
      <View style={styles.root}>
        <View style={styles.imageContainer}>
          <Image source={product.imageUrl} style={styles.image} />
        </View>
        <View style={styles.content}>
          <Text>{product.name}</Text>
          <View style={styles.infoGroup}>
            <View>
              <Text style={styles.infoName}>Color: {product.color}</Text>
            </View>
            <View style={{paddingLeft: 14}}>
              <Text style={styles.infoName}>Size: {product.size}</Text>
            </View>
          </View>
          <View style={styles.optionGroup}>
            <View style={styles.buttonGroup}>
              <IncreaseButton product={product} />
              <View style={styles.quantity}>
                <Text>{quantity}</Text>
              </View>
              <DecreaseButton product={product} />
            </View>
            <View style={styles.price}>
              <Text style={{color: Colors.BLACK}}>{product.price}$</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 104,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
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
    height: '100%',
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
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  infoGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  infoName: {
    color: Colors.GRAY,
    fontSize: 11,
  },
  buttonGroup: {
    display: 'flex',
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  quantity: {
    paddingHorizontal: 16,
  },
  price: {
    color: Colors.BLACK,
    fontSize: 14,
    textAlign: 'right',
  },
  optionGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 56,
    left: 10,
    alignItems: 'center',
  },
});
export default Item;
