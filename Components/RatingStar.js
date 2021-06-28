import React, {useState} from 'react';
import ratingData from '../fakeApi/ratingData';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
const RatingStar = ({actived = false, size = 13}) => {
  return (
    <View>
      <FontAwesome5Icon
        name={'star'}
        color={actived === true ? '#FF9966' : 'gray'}
        size={size}
        solid={actived === true ? true : false}
      />
    </View>
  );
};
export default RatingStar;
