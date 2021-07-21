/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, StatusBar, ScrollView, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles/productDetailsStyle';
// import {AccordionList} from '../../../Components/AccordionList';
import {AverageRating} from '../../../Components/Rating';
import CommonButton from '../../../Components/Button/CommonButton/CommonButton';
import SaleText from '../../../Components/CustomText/SaleText';
import FavoriteButton from '../../../Components/Button/FavoriteButton/FavoriteButton';
import {addToCart} from '../../../redux/cart/Slice';
import {getSize, getColor, clearState} from './Slice';
import {useDispatch, useSelector} from 'react-redux';
import ModalAdd from './Component/ModalAdd';
const ProductDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {params} = route;
  const item = params.item;
  const itemSize = ['Size', ...item.size];
  const itemColor = ['Color', ...item.color];
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isModal, setModal] = useState(false);
  const [press, setPress] = useState(0);
  const sizeOrder = useSelector(state => state.productReducer.size);
  const colorOrder = useSelector(state => state.productReducer.color);
  const addOrder = () => {
    if (
      selectedSize == 'Size' ||
      selectedColor == 'Color' ||
      sizeOrder === null ||
      colorOrder === null
    ) {
      setPress(press + 1);
      setModal(true);
    } else {
      let product = {...item};
      product.size = sizeOrder;
      product.color = colorOrder;
      dispatch(addToCart(product));
      dispatch(clearState());
    }
  };
  return (
    <View>
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
                    dispatch(getSize(itemValue));
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
                  selectedValue={selectedColor}
                  mode="dialog"
                  onValueChange={(itemValue, itemIndex) => {
                    setSelectedColor(itemValue);
                    dispatch(getColor(itemValue));
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
              addOrder();
            }}
          />
        </View>
        {/* <AccordionList sections={Sections} /> */}
      </ScrollView>
      {isModal ? (
        <ModalAdd
          pressButton={press}
          isOpen={isModal}
          navigation={navigation}
          item={item}
        />
      ) : null}
    </View>
  );
};
export default ProductDetails;
