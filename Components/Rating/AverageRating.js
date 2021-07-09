import React from 'react';
import ratingData from '../../fakeApi/ratingData';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import RatingStar from './RatingStar';
const AverageRating = ({idProduct, navigation}) => {
  const ratingProduct = ratingData.filter(item => item.idProduct === idProduct);
  let sumRating = 0;
  ratingProduct.map(item => (sumRating = sumRating + parseInt(item.rate, 10)));
  const averageRating = Math.round(sumRating / ratingProduct.length);
  return (
    <TouchableOpacity
      style={styles.rating}
      onPress={() => {
        navigation.navigate('Rating', {
          averageRating,
          ratings: ratingProduct,
        });
      }}>
      <RatingStar actived={averageRating >= 1 ? true : false} />
      <RatingStar actived={averageRating >= 2 ? true : false} />
      <RatingStar actived={averageRating >= 3 ? true : false} />
      <RatingStar actived={averageRating >= 4 ? true : false} />
      <RatingStar actived={averageRating >= 5 ? true : false} />
      <Text> ({ratingProduct.length})</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  rating: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
    alignItems: 'center',
  },
  totalRating: {
    lineHeight: 8,
    fontSize: 10,
    fontFamily: 'Metropolis',
  },
});
export default AverageRating;
