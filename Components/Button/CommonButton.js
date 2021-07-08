import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
// const defaultPress = () => {};
const CommonButton = ({text, onPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#DB3022',
    borderRadius: 25,
    width: '95%',
    height: 50,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(211, 38, 38, 0.25)',
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Metropolis',
    lineHeight: 20,
  },
});
export default CommonButton;
