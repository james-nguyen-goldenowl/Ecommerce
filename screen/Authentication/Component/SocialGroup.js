import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const styles = StyleSheet.create({
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    width: 92,
    height: 64,
    backgroundColor: '#fff',
    marginRight: 10,
    // marginBottom: 10,
  },
});
const SocialGroup = () => {
  return (
    <View>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          textAlign: 'center',
          marginTop: 50,
          lineHeight: 20,
          fontSize: 16,
        }}>
        Or login with social account
      </Text>
      <View style={styles.social}>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name={'google'} color="red" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <FontAwesome5 name={'facebook-square'} color="blue" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SocialGroup;
