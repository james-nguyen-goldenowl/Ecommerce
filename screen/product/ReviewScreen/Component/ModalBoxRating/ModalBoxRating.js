/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modalbox';
import {
  View,
  StyleSheet,
  TextInput,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {RatingStar} from '../../../../../Components/Rating';
const ModalBoxRating = ({isOpen, pressButton}) => {
  // eslint-disable-next-line no-unused-vars
  const [swipeToClose, setSwipeToClose] = useState(true);
  const [rating, setRating] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(null);
  useEffect(() => {
    setIsOpenModal(isOpen);
  }, [isOpen, pressButton]);
  const [text, setText] = useState('');
  return (
    <Modal
      isOpen={isOpenModal}
      style={styles.container}
      swipeToClose={swipeToClose}
      position="bottom"
      backdrop={true}
      onClosed={() => {
        setIsOpenModal(false);
      }}>
      <Text style={styles.title}>What is your rate?</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            setRating(1);
          }}>
          <RatingStar size={40} actived={rating >= 1 ? true : false} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setRating(2);
          }}>
          <RatingStar size={40} actived={rating >= 2 ? true : false} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setRating(3);
          }}>
          <RatingStar size={40} actived={rating >= 3 ? true : false} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setRating(4);
          }}>
          <RatingStar size={40} actived={rating >= 4 ? true : false} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setRating(5);
          }}>
          <RatingStar size={40} actived={rating >= 5 ? true : false} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>
        Please share your opinion about the product
      </Text>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={textReview => {
          setText(textReview);
        }}
        placeholder="Your review"
        numberOfLines={6}
      />
      <View style={styles.square}>
        <View style={styles.cameraBackground}>
          <FontAwesome5Icon name="camera" color="white" size={30} />
        </View>
        <Text style={{fontSize: 10, fontWeight: 'bold'}}>Add your photos</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Send Review</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    // justifyContentL: 'center',
    borderTopLeftRadius: Platform.OS === 'ios' ? 30 : 40,
    borderTopRightRadius: Platform.OS === 'ios' ? 30 : 40,
    shadowRadius: 10,
    width: '100%',
    height: '90%',
    position: 'absolute',
    backgroundColor: '#E5E5E5',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    fontSize: 20,
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    margin: 15,
  },
  square: {
    margin: 10,
    width: '20%',
    height: '16%',
    backgroundColor: 'white',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraBackground: {
    backgroundColor: 'red',
    borderRadius: 80,
    width: '80%',
    height: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    position: 'absolute',
  },
  button: {
    width: '60%',
    height: '85%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ModalBoxRating;
