import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const FavoriteButton = () => {
  const [color, setColor] = useState('gray');
  return (
    <TouchableOpacity style={styles.buttonLike} onPress={() => setColor('red')}>
      <FontAwesome5Icon name={'heart'} size={15} color={color} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonLike: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 30,
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default FavoriteButton;
