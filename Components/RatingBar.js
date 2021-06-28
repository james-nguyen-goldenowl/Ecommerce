import React from 'react';
import RatingStar from './RatingStar';
import {View, StyleSheet} from 'react-native';
const RatingBar = ({numberStar}) => {
  return (
    <View style={styles.container}>
      {numberStar >= 1 && (
        <RatingStar actived={numberStar >= 1 ? true : false} />
      )}
      {numberStar >= 2 && (
        <RatingStar actived={numberStar >= 2 ? true : false} />
      )}
      {numberStar >= 3 && (
        <RatingStar actived={numberStar >= 3 ? true : false} />
      )}
      {numberStar >= 4 && (
        <RatingStar actived={numberStar >= 4 ? true : false} />
      )}
      {numberStar >= 5 && (
        <RatingStar actived={numberStar >= 5 ? true : false} />
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
