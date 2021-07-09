/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
const FavoriteButton = () => {
  const [imageSource, setSource] = useState(
    require('../../../public/heart.png'),
  );
  const [numPress, setNumPress] = useState(0);
  return (
    <TouchableOpacity
      style={styles.buttonLike}
      onPress={() => {
        setNumPress(numPress + 1);
        numPress % 2 === 0
          ? setSource(require('../../../public/heart-focused.png'))
          : setSource(require('../../../public/heart.png'));
      }}>
      <Image style={{width: 16, height: 16}} source={imageSource} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonLike: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: 36,
    height: 36,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default FavoriteButton;
