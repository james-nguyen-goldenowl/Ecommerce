import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
const CustomTextField = props => {
  const {field, form, error} = props;
  const {name, value} = field;
  const {handleChange} = form;
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={value}
        onChangeText={handleChange(name)}
      />
      {error === '' || error === undefined ? (
        <View />
      ) : (
        <Text style={styles.errorMessage}>* {error}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    alignContent: 'stretch',
    height: 65,
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
    backgroundColor: 'pink',
    color: 'red',
    marginBottom: 10,
  },
});
export default CustomTextField;
