import React from 'react';
import styles from './style';
import {Image, TouchableOpacity} from 'react-native';
const PromoButton = () => {
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
