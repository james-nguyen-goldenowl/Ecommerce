import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import Colors from '../../../../../utils/Color';
import {sortProduct} from '../../../../../redux/products/Slice';
const ItemSort = ({item}) => {
  const [background, setBackColor] = useState(Colors.BACKGROUND);
  const [textColor, setColor] = useState(Colors.BLACK);
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    sortOption: {
      width: '100%',
      paddingLeft: 16,
      marginTop: 32,
      backgroundColor: background,
      color: textColor,
      fontSize: 16,
    },
  });
  const changeColor = () => {
    setColor(Colors.WHITE);
    setBackColor(Colors.RED_BUTTON);
  };
  const onSort = () => {
    // changeColor();
    // navigation.setPar
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
