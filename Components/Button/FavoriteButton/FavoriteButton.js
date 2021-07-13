/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../../../redux/favorite/Slice';
const FavoriteButton = ({item}) => {
  const dispatch = useDispatch();
  const [imageSource, setSource] = useState(
    require('../../../public/heart.png'),
  );
  const favorite = useSelector(state => state.favorite.favorite);
  useEffect(() => {
    favorite.includes(item)
      ? setSource(require('../../../public/heart-focused.png'))
      : setSource(require('../../../public/heart.png'));
  }, [favorite, item]);
  const [numPress, setNumPress] = useState(0);
  return (
    <TouchableOpacity
      style={styles.buttonLike}
      onPress={() => {
        setNumPress(numPress + 1);
        favorite.includes(item)
          ? dispatch(removeFavorite(item))
          : dispatch(addFavorite(item));
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
