import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const ArrowButton = ({text, navigation, destinaion}) => {
  return (
    <TouchableOpacity
      style={styles.arrowButton}
      onPress={() => navigation.navigate(destinaion)}>
      <Text>{text}</Text>
      <FontAwesome5Icon name={'arrow-right'} size={15} color="#DB3022" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  arrowButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    textAlign: 'right',
    margin: 10,
  },
});
export default ArrowButton;
