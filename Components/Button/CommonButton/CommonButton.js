import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Colors from '../../../utils/Color';
const {RED_BUTTON, WHITE, SHADOW_BUTTON} = Colors;
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
    backgroundColor: RED_BUTTON,
    borderRadius: 25,
    width: '95%',
    height: 50,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: SHADOW_BUTTON,
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    color: WHITE,
    fontFamily: 'Metropolis',
    lineHeight: 20,
  },
});
export default CommonButton;
