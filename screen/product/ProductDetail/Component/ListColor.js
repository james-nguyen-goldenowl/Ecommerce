/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../../../../utils/Color';
import {getColor} from '../Slice';
LogBox.ignoreAllLogs();
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.option, backgroundColor]}>
    <Text style={[textColor]}>{item}</Text>
  </TouchableOpacity>
);

const ListColor = ({product}) => {
  const colorSelected = useSelector(state => state.productReducer.color);
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    colorSelected !== null ? setSelectedId(colorSelected) : null;
  }, []);
  const dispatch = useDispatch();
  const renderItem = ({item}) => {
    const backgroundColor =
      item === selectedId ? Colors.RED_BUTTON : Colors.WHITE;
    const color = item === selectedId ? Colors.WHITE : Colors.BLACK;
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item);
          dispatch(getColor(item));
        }}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={product.color}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={item => item}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginBottom: 24,
  },
  option: {
    width: 100,
    height: 40,
    backgroundColor: Colors.WHITE,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.GRAY,
    borderWidth: 0.4,
    borderRadius: 8,
    marginTop: 16,
    marginLeft: 22,
  },
  optionPress: {
    width: 100,
    height: 40,
    backgroundColor: Colors.WHITE,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.GRAY,
    borderWidth: 0.4,
    borderRadius: 8,
    marginTop: 16,
    marginLeft: 22,
  },
  line: {
    borderWidth: 0.4,
    borderColor: Colors.GRAY,
  },
});

export default ListColor;
