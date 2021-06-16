import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
const ProductDetails = ({navigation, route}) => {
  // console.log(props);
  const {params} = route;
  const item = params.item;
  console.log(
    '🚀 ~ file: ProductDetail.js ~ line 6 ~ ProductDetails ~ props',
    params.item.name,
  );

  return (
    <View>
      <StatusBar hidden={false} backgroundColor="white" />
      <Image
        style={styles.image}
        source={{uri: item.imageUrl}}
        resizeMode="stretch"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: width,
    height: 350,
    resizeMode: 'cover',
  },
});
export default ProductDetails;
