import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {sortProduct} from '../../../../../redux/products/Slice';
const ItemSort = ({item}) => {
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    sortOption: {
      width: '100%',
      paddingLeft: 16,
      marginTop: 32,
      fontSize: 16,
    },
  });
  const onSort = () => {
    dispatch(sortProduct(item.title));
  };
  return (
    <ScrollView>
      <TouchableOpacity onPress={onSort}>
        <Text style={styles.sortOption}>{item.title}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default ItemSort;
