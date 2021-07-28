import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const SaleText = ({item}) => {
  let percentSale = 0;
  if (item.sale !== undefined) {
    percentSale =
      '-' + Math.round(((item.price - item.sale) / item.price) * 100) + '%';
  }
  return (
    <View>
      {percentSale !== 0 ? (
        <View style={styles.saleTextView}>
          <Text style={styles.saleText}>{percentSale}</Text>
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  saleTextView: {
    backgroundColor: '#DB0322',
    width: 40,
    height: 24,
    borderRadius: 29,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saleText: {
    color: 'white',
    fontSize: 11,
    textAlign: 'center',
  },
});
export default SaleText;
