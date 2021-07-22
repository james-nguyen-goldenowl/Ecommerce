import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../../utils/Color';
import Item from './Component/List/Item';
import PromoButton from './Component/Button/PromoButton';
import CommonButton from '../../Components/Button/CommonButton/CommonButton';
import {caculateMoney} from './Slice';
const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const [promo, setPromo] = useState('');
  useEffect(() => {
    dispatch(caculateMoney(cart));
  });
  let money = useSelector(state => state.cartScreen.priceTotal);
  const renderItem = ({item}) => {
    return (
      <View>
        <Item item={item} />
      </View>
    );
  };
  return (
    <ScrollView style={styles.root}>
      <StatusBar
        hidden={false}
        backgroundColor={Colors.WHITE}
        barStyle="dark-content"
      />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>My Bag</Text>
      </View>
      {cart.length !== 0 && (
        <View style={styles.contentContainer}>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
          <View style={styles.promoContainer}>
            <TextInput
              placeholder="Enter your promo code"
              style={styles.promoInput}
              value={promo}
              onChangeText={text => {
                setPromo(text);
              }}
            />
            <TouchableOpacity style={styles.promoButton}>
              <PromoButton />
            </TouchableOpacity>
          </View>
          <View style={styles.amountLine}>
            <Text style={styles.totalAmount}>Total Amount: </Text>
            <Text style={styles.priceTotal}>{money}$</Text>
          </View>
          <CommonButton text="CHECK OUT" />
        </View>
      )}
      {cart.length === 0 && (
        <View style={styles.empty}>
          <Text>Your cart is empty</Text>
        </View>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Colors.BACKGROUND,
    height: '100%',
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 16,
    backgroundColor: Colors.BACKGROUND,
  },
  headerContainer: {
    backgroundColor: Colors.BACKGROUND,
  },
  title: {
    fontSize: 34,
    color: Colors.BLACK,
    lineHeight: 34,
    fontWeight: 'bold',
    paddingLeft: 14,
    paddingTop: 40,
  },
  tagStyle: {
    width: 100,
    height: 30,
    backgroundColor: Colors.BLACK,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 29,
    marginBottom: 18,
    marginLeft: 8,
  },
  textTag: {
    color: Colors.WHITE,
  },
  tagLine: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 16,
  },
  optionLine: {
    marginHorizontal: 16,
    marginBottom: 10,
    marginTop: 18,
    backgroundColor: Colors.BACKGROUND,
    height: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 24,
    alignItems: 'center',
  },
  iconOption: {
    width: 18,
    height: 12,
  },
  titleOption: {
    fontSize: 11,
    marginLeft: 11,
  },
  modalBox: {
    position: 'absolute',
    bottom: 0,
  },
  empty: {
    width: '100%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoInput: {
    fontSize: 14,
    paddingLeft: 15,
    backgroundColor: Colors.WHITE,
    height: '100%',
  },
  promoContainer: {
    marginTop: 25,
    width: '100%',
    backgroundColor: 'yellow',
    height: 45,
  },
  promoButton: {
    position: 'absolute',
    right: 0,
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  totalAmount: {
    marginTop: 28,
    marginBottom: 26,
    color: Colors.GRAY,
    fontSize: 14,
  },
  amountLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceTotal: {
    color: Colors.BLACK,
    fontWeight: 'bold',
  },
});
export default CartScreen;
