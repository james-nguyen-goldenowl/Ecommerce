import React from 'react';
import styles from './style';
import {Image, TouchableOpacity} from 'react-native';
import {removeToCart} from '../../../../redux/cart/Slice';
import {useDispatch} from 'react-redux';
const DecreaseButton = ({product}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => dispatch(removeToCart(product))}>
      <Image
        source={require('../../../../public/remove.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};
export default DecreaseButton;
