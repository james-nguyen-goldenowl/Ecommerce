import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import CommonButton from '../../Components/Button/CommonButton';
import {clearState} from '../../redux/user/Slice';
const ProfileScreen = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <CommonButton
        text="Log out"
        onPress={() => {
          dispatch(clearState());
        }}
      />
    </View>
  );
};
export default ProfileScreen;
