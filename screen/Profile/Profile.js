import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import CommonButton from '../../Components/Button/CommonButton';
import {clearState} from '../../redux/user/Slice';
const ProfileScreen = () => {
  // const dispatch = useDispatch();
  return (
    <View>
      {/* <CommonButton
        text="Log out"
        onPress={() => {
          dispatch(clearState());
        }}
      /> */}
      <Text styles>My Profile</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    alignContent: 'flex-end',
    fontWeight: 'bold',
    color: '#222222',
    fontFamily: 'Metropolis',
  },
})
export default ProfileScreen;
