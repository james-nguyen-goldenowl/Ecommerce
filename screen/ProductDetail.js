import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles/productDetailsStyle';
import AccordionList from '../Components/AccordionList';
import AverageRating from '../Components/AverageRating';
import RatingPercentageBar from '../Components/RatingPercentageBar';
const ProductDetails = ({navigation, route}) => {
  const {params} = route;
  const item = params.item;
  const itemSize = item.size;
  const itemColor = item.color;
  const [selectedSize, setSelectedSize] = useState(null);
  const [color, setColor] = useState(null);
  var sale = Number(item.sale.replace(/[^0-9.-]+/g, ''));
  var price = Number(item.price.replace(/[^0-9.-]+/g, ''));
  let percentSale = '-' + Math.round(((price - sale) / price) * 100) + '%';
  const Sections = [
    {
      title: 'Shipping Info',
      content: 'knndslknlsnslskns',
    },
    {
      title: 'Support',
      content: 'anb',
    },
  ];
  return (
    <ScrollView>
      <View>
        <StatusBar hidden={false} backgroundColor="red" />
        <Image
          style={styles.image}
          source={{uri: item.imageUrl}}
          resizeMode="stretch"
        />
        <View style={styles.contentContainer}>
          <View style={styles.pickerContainer}>
            <View style={styles.picker}>
              <Picker
                selectedValue={selectedSize}
                mode="dialog"
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedSize(itemValue);
                }}>
                {/* <Picker.Item label={item.size} value={item.size} /> */}
                {itemSize.map(size => {
                  return (
                    <Picker.Item
                      color="black"
                      label={size}
                      value={size}
                      key={size}
                    />
                  );
                })}
              </Picker>
            </View>
            <View style={styles.picker}>
              <Picker
                selectedValue={color}
                mode="dialog"
                onValueChange={(itemValue, itemIndex) => {
                  setColor(itemValue);
                }}>
                {itemColor.map(color => {
                  return (
                    <Picker.Item label={color} value={color} key={color} />
                  );
                })}
              </Picker>
            </View>
            <TouchableOpacity style={styles.buttonLike}>
              <FontAwesome5Icon name={'heart'} size={15} />
            </TouchableOpacity>
          </View>
          <View style={styles.titleGroup}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.percentSale}>{percentSale}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.sale}>{item.sale}</Text>
          </View>
        </View>
        <AverageRating idProduct={item.id} navigation={navigation} />
        {/* <RatingPercentageBar percentage={84} /> */}
      </View>
      <View style={styles.btnAddContainer}>
        <TouchableOpacity style={{padding: 20, borderRadius: 20}}>
          <Text style={styles.btnAdd}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
      <AccordionList sections={Sections} />
    </ScrollView>
  );
};
// const styles = StyleSheet.create({
//   image: {
//     width: width,
//     height: 350,
//     resizeMode: 'cover',
//   },
//   pickerContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     margin: 20,
//     alignItems: 'center',
//   },
//   picker: {
//     backgroundColor: 'white',
//     borderWidth: 0.5,
//     borderRadius: 5,
//     width: width / 3,
//     margin: 10,
//   },
//   buttonLike: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     borderWidth: 1,
//     width: 50,
//     height: 50,
//     display: 'flex',
//     flexDirection: 'row',
//     alignContent: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginRight: 10,
//   },
// });
export default ProductDetails;
