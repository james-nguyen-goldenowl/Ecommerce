import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles/productDetailsStyle';
// import {AccordionList} from '../../../Components/AccordionList';
import {AverageRating} from '../../../Components/Rating';
import CommonButton from '../../../Components/Button/CommonButton';
import SaleText from '../../../Components/CustomText/SaleText';
import FavoriteButton from '../../../Components/Button/FavoriteButton/FavoriteButton';
const ProductDetails = ({navigation, route}) => {
  const {params} = route;
  const item = params.item;
  const itemSize = item.size;
  const itemColor = item.color;
  const [selectedSize, setSelectedSize] = useState(null);
  const [color, setColor] = useState(null);
  // const Sections = [
  //   {
  //     title: 'Shipping Info',
  //     content: 'knndslknlsnslskns',
  //   },
  //   {
  //     title: 'Support',
  //     content: 'anb',
  //   },
  // ];
  return (
    <ScrollView>
      <View>
        <StatusBar hidden={false} backgroundColor="red" />
        <Image
          style={styles.image}
          source={item.imageUrl}
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
                {itemColor.map(element => {
                  return (
                    <Picker.Item
                      label={element}
                      value={element}
                      key={element}
                    />
                  );
                })}
              </Picker>
            </View>
            <FavoriteButton />
          </View>
          <View style={styles.titleGroup}>
            <Text style={styles.title}>{item.name}</Text>
            <SaleText item={item} />
            {/* <View style={styles.percentSale}>
              <Text />
            </View> */}
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.sale}>{item.sale}</Text>
          </View>
        </View>
        <View style={{marginLeft: 10}}>
          <AverageRating idProduct={item.id} navigation={navigation} />
        </View>
      </View>
      <View style={styles.btnAddContainer}>
        <CommonButton
          text="ADD TO CART"
          onPress={() => {
            Alert.alert('bfjbkl');
          }}
        />
      </View>
      {/* <AccordionList sections={Sections} /> */}
    </ScrollView>
  );
};
export default ProductDetails;
