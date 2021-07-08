/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
const CustomTextField = props => {
  const {field, form, error} = props;
  const {name, value} = field;
  const {handleChange} = form;
  let secureText = name === 'password' ? true : false;
  return (
    <View>
      <View style={styles.inputContainer}>
        <FloatingLabelInput
          label={name}
          isPassword={secureText}
          togglePassword={!secureText}
          value={value}
          onChangeText={handleChange(name)}
          customLabelStyles={{
            colorFocused: '#9B9B9B',
            colorBlurred: '#9B9B9B',
            fontSizeFocused: 11,
          }}
          labelStyles={{lineHeight: 20, fontFamily: 'Metropolis'}}
          darkTheme={secureText}
          maxLength={24}
        />
        {error === '' || error === undefined ? (
          <View />
        ) : (
          <Text style={styles.errorMessage}>* {error}</Text>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
    alignContent: 'stretch',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  errorMessage: {
    color: 'red',
    marginTop: 16,
  },
});
export default CustomTextField;
