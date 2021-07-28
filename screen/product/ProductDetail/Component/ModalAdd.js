/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modalbox';
import {View, StyleSheet, Text, Alert, Image} from 'react-native';
import Colors from '../../../../utils/Color';
import ListSize from './ListSize';
import ListColor from './ListColor';
import CommonButton from '../../../../Components/Button/CommonButton/CommonButton';
import {clearState} from '../Slice';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../../../redux/cart/Slice';
const ModalAdd = ({isOpen, pressButton, item}) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [swipeToClose, setSwipeToClose] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(null);
  useEffect(() => {
    setIsOpenModal(isOpen);
  }, [isOpen, pressButton]);
  const sizeSelected = useSelector(state => state.productDetail.size);
  const colorSelected = useSelector(state => state.productDetail.color);
  const addOrder = () => {
    if (sizeSelected === null || colorSelected === null) {
      Alert.alert('Please choose size and color');
    } else {
      let product = {...item};
      product.size = sizeSelected;
      product.color = colorSelected;
      dispatch(addToCart(product));
    }
  };
  return (
    <Modal
      isOpen={isOpenModal}
      style={styles.container}
      swipeToClose={swipeToClose}
      position="bottom"
      backdrop={true}
      onClosed={() => {
        setIsOpenModal(false);
        dispatch(clearState());
      }}>
      <View style={styles.rectangleContainer}>
        <View style={styles.rectangle} />
      </View>
      <Text style={styles.title}>Select size</Text>
      <ListSize product={item} />
      <Text style={styles.title}>Select color</Text>
      <ListColor product={item} />
      <View style={styles.line} />
      <View style={styles.info}>
        <Text style={{marginVertical: 16}}>Size info</Text>
        <Image
          source={require('../../../../public/next.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.line} />
      <View style={{bottom: 0}}>
        <CommonButton text="ADD TO CART" onPress={addOrder} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '90%',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.BACKGROUND,
  },
  rectangleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rectangle: {
    width: 60,
    height: 6,
    backgroundColor: Colors.GRAY,
    marginTop: 14,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    fontSize: 18,
    lineHeight: 21.6,
  },
  line: {
    borderWidth: 0.4,
    borderColor: Colors.GRAY,
    // marginTop: 24,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  icon: {
    width: 10,
    height: 10,
  },
});
export default ModalAdd;
