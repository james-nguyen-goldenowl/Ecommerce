import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {View, Text, StyleSheet, StatusBar, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../utils/Color';
import Item from './Component/List/Item';
import PromoButton from './Component/Button/PromoButton';
const CartScreen = () => {
  const cart = useSelector(state => state.cart.cart);
  const [promo, setPromo] = useState('');
  const renderItem = ({item}) => {
    return (
      <View>
        <Item item={item} />
      </View>
    );
  };
  return (
    <View style={{backgroundColor: Colors.BACKGROUND}}>
      <StatusBar
        hidden={false}
        backgroundColor={Colors.WHITE}
        barStyle="dark-content"
      />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>My Bag</Text>
      </View>
      <View style={styles.root}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.promoContainer}>
        <TextInput
          placeholder="Enter your promo code"
          style={styles.promo}
          value={promo}
          onChangeText={text => {
            setPromo(text);
          }}
        />
        <View>
          <PromoButton />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    marginHorizontal: 16,
    backgroundColor: Colors.BACKGROUND,
  },
  promo: {
    fontSize: 14,
    paddingLeft: 15,
    backgroundColor: Colors.WHITE,
  },
  promoContainer: {
    marginTop: 25,
    marginHorizontal: 16,
    backgroundColor: 'red',
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
});
export default CartScreen;
