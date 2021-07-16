/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const ListInfo = ({title, info}) => {
  return (
    <View>
      <View style={styles.infoGroupContainer}>
        <View style={styles.info}>
          <Text style={styles.titleInfo}>{title}</Text>
          <Text style={styles.subTitle}>{info}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../../public/next.png')}
            style={styles.imageIcon}
          />
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#9B9B9B',
          borderBottomWidth: 1,
          marginTop: 17,
          marginBottom: 18,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    backgroundColor: '#F9F9F9',
    fontFamily: 'Metropolis',
  },
  title: {
    fontSize: 34,
    alignContent: 'flex-end',
    fontWeight: 'bold',
    color: '#222222',
    fontFamily: 'Metropolis',
  },
  infoGroupContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 53,
    width: '100%',
  },
  imageContainer: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 69,
    height: 53,
  },
  info: {
    flex: 7,
    paddingLeft: 10,
    height: 53,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  imageAvatar: {
    width: 69,
    height: 69,
    borderRadius: 40,
  },
  titleInfo: {
    fontSize: 18,
    alignContent: 'flex-end',
    fontWeight: 'bold',
    color: '#222222',
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9B9B9B',
    marginTop: 9,
  },
  imageIcon: {
    height: 12,
    width: 7.4,
  },
});
export default ListInfo;
