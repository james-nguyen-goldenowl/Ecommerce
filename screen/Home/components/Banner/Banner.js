import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
const {width} = Dimensions.get('window');
const Banner = () => {
  // let path = '../../public/images.jpeg';
  return (
    <View style={styles.cardView}>
      <Image
        style={styles.image}
        source={require('../../../../public/images.jpeg')}
      />
      <View style={styles.textView}>
        <Text style={styles.imageTitle}>Street Clothes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    // display: 'flex',
    // position: 'absolute',
    // flex: 1,
    width: width,
    height: 175,
    // flexDirection: 'column',
    // alignContent: 'flex-end',
  },
  textView: {
    position: 'absolute',
    marginTop: 80,
    marginLeft: 30,
    alignContent: 'flex-end',
    alignItems: 'flex-end',
  },
  image: {
    width: width,
    height: 175,
  },
  imageTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Banner;
