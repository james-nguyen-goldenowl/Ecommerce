import React from 'react';
import styles from './style';
import {Image, TouchableOpacity} from 'react-native';
import {addToCart} from '../../../../redux/cart/Slice';
import {useDispatch} from 'react-redux';
const IncreaseButton = ({product}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => dispatch(addToCart(product))}>
      <Image
        source={require('../../../../public/plus.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};
export default IncreaseButton;
