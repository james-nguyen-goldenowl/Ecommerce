import React, {Components} from 'react';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {
  View,
  StyleSheet,
  AppRegistry,
  TouchableHighlight,
  TextInput,
  Platform,
  Alert,
  Text,
} from 'react-native';
const ModalBoxRating = () => {
  return (
    <Modal
      style={styles.container}
      position="bottom"
      backdrop={true}
      onClosed={() => Alert.alert('Modal closed')}>
      <Text>What is your rate?</Text>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContentL: 'center',
    borderRadius: Platform.OS === 'ios' ? 30 : 10,
    shadowRadius: 10,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
});
