import React from 'react';
import RatingStar from './RatingStar';
import {View, StyleSheet} from 'react-native';
const RatingBar = ({numberStar, ratingScore, size = 13}) => {
  return (
    <View style={styles.container}>
      {numberStar >= 1 && (
        <RatingStar size={size} actived={numberStar >= 1 ? true : false} />
      )}
      {numberStar >= 2 && (
        <RatingStar size={size} actived={numberStar >= 2 ? true : false} />
      )}
      {numberStar >= 3 && (
        <RatingStar size={size} actived={numberStar >= 3 ? true : false} />
      )}
      {numberStar >= 4 && (
        <RatingStar size={size} actived={numberStar >= 4 ? true : false} />
      )}
      {numberStar >= 5 && (
        <RatingStar size={size} actived={numberStar >= 5 ? true : false} />
      )}
    </View>
  );
};
export default RatingBar;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
});
