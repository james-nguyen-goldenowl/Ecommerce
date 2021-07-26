/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modalbox';
import Colors from '../../../utils/Color';
import {View, StyleSheet, Text} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {
  getOldPass,
  getNewPass,
  getRepeat,
  checkCondition,
  clearState,
  updateState,
} from './Slice';
import {updatePassword} from '../../../redux/user/Slice';
import CommonButton from '../../../Components/Button/CommonButton/CommonButton';
import {Alert} from 'react-native';
const ModalPassword = ({isOpen, pressButton, password}) => {
  const dispatch = useDispatch();
  const [swipeToClose, setSwipeToClose] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(null);
  useEffect(() => {
    setIsOpenModal(isOpen);
  }, [isOpen, pressButton]);
  useEffect(() => {
    dispatch(getOldPass(password));
  });
  const oldPass = useSelector(state => state.password.oldPass);
  const newPass = useSelector(state => state.password.newPass);
  const repeat = useSelector(state => state.password.repeat);
  const message = useSelector(state => state.password.message);
  const condition = useSelector(state => state.password.condition);
  const [mess, setMess] = useState(message);
  useEffect(() => {
    console.log('line 37', mess);
    console.log('line 38', message);
    setMess(message);
    console.log('line 37', mess);
  }, [message]);
  const changePassword = async () => {
    dispatch(checkCondition());
    setTimeout(() => {
      console.log('message update', mess);
      if (condition === true) {
        dispatch(updatePassword(newPass));
        dispatch(clearState());
      } else {
        console.log('mess', message);
      }
    }, 1000);
  };
  return (
    <Modal
      isOpen={isOpenModal}
      swipeToClose={swipeToClose}
      style={styles.container}
      position="bottom"
      backdrop={true}
      onClosed={() => {
        setIsOpenModal(false);
        dispatch(clearState());
      }}>
      <View style={styles.rectangleContainer}>
        <View style={styles.rectangle} />
      </View>
      <Text style={styles.title}>Password Change</Text>
      <View style={styles.contentContainer}>
        <FloatingLabelInput
          label="Old Password"
          customLabelStyles={{
            colorBlurred: Colors.GRAY,
            colorFocused: Colors.GRAY,
            fontSizeBlurred: 14,
            fontSizeFocused: 11,
          }}
          value={oldPass}
          isPassword={true}
          togglePassword={false}
          editable={false}
        />
        <Text style={styles.forgotPassText}>Forgot Password?</Text>
        <FloatingLabelInput
          label="New Password"
          customLabelStyles={{
            colorBlurred: Colors.GRAY,
            colorFocused: Colors.GRAY,
            fontSizeBlurred: 14,
            fontSizeFocused: 11,
          }}
          value={newPass}
          isPassword={true}
          togglePassword={false}
          darkTheme={true}
          onChangeText={text => dispatch(getNewPass(text))}
        />
        <View style={{marginTop: 24}}>
          <FloatingLabelInput
            label="Repeat Password"
            customLabelStyles={{
              colorBlurred: Colors.GRAY,
              colorFocused: Colors.GRAY,
              fontSizeBlurred: 14,
              fontSizeFocused: 11,
            }}
            value={repeat}
            isPassword={true}
            togglePassword={false}
            darkTheme={true}
            onChangeText={text => {
              dispatch(getRepeat(text));
            }}
          />
        </View>
        <View style={{bottom: 0}}>
          <CommonButton text="SAVE PASSWORD" onPress={() => changePassword()} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '80%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.BACKGROUND,
  },
  rectangleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contentContainer: {
    marginHorizontal: 16,
  },
  rectangle: {
    width: 60,
    height: 6,
    backgroundColor: Colors.GRAY,
    marginTop: 14,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    fontSize: 18,
    lineHeight: 21.6,
  },
  line: {
    borderWidth: 0.4,
    borderColor: Colors.GRAY,
    // marginTop: 24,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  icon: {
    width: 10,
    height: 10,
  },
  forgotPassText: {
    color: Colors.GRAY,
    textAlign: 'right',
    marginTop: 14,
    marginBottom: 18,
  },
});
export default ModalPassword;
