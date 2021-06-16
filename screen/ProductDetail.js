import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const {width, height} = Dimensions.get('screen');
const ProductDetails = ({navigation, route}) => {
  // console.log(props);
  const {params} = route;
  const item = params.item;
  const itemSize = item.size;
  const itemColor = item.color;
  const [selectedSize, setSelectedSize] = useState(null);
  const [color, setColor] = useState(null);
  console.log(
    '🚀 ~ file: ProductDetail.js ~ line 18 ~ ProductDetails ~ selectedSize',
    selectedSize,
  );
  return (
    <View>
      <StatusBar hidden={false} backgroundColor="white" />
      <Image
        style={styles.image}
        source={{uri: item.imageUrl}}
        resizeMode="stretch"
      />

      <Picker
        itemStyle={{backgroundColor: 'red'}}
        selectedValue={selectedSize}
        mode="dialog"
        onValueChange={(itemValue, itemIndex) => {
          setSelectedSize(itemValue);
        }}>
        {/* <Picker.Item label={item.size} value={item.size} /> */}
        {itemSize.map(size => {
          return (
            <Picker.Item color="black" label={size} value={size} key={size} />
          );
        })}
      </Picker>
      {/* <Picker
          selectedValue={color}
          mode="dialog"
          onValueChange={(itemValue, itemIndex) => {
            setColor(itemValue);
          }}>
          {itemColor.map(color => {
            return <Picker.Item label={color} value={color} key={color} />;
          })}
        </Picker> */}
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: width,
    height: 350,
    resizeMode: 'cover',
  },
  pickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    height: 50,
    width: 150,
  },
});
export default ProductDetails;
