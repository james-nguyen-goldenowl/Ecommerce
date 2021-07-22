import React from 'react';
import styles from './style';
import {Image, TouchableOpacity} from 'react-native';
import {removeToCart} from '../../../../redux/cart/Slice';
import {useDispatch} from 'react-redux';
const PromoButton = () => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity style={styles.promoContainer}>
      <Image
        source={require('../../../../public/next.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};
export default PromoButton;
