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
import {getSize} from '../Slice';
const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.option, backgroundColor]}>
    <Text style={[textColor]}>{item}</Text>
  </TouchableOpacity>
);

const ListSize = ({product}) => {
  const sizeSelected = useSelector(state => state.productReducer.size);
  const [selectedId, setSelectedId] = useState(null);
  // sizeSelected !== null ? setSelectedId(sizeSelected) : null;
  useEffect(() => {
    sizeSelected !== null ? setSelectedId(sizeSelected) : null;
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
          dispatch(getSize(item));
        }}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={product.size}
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

export default ListSize;
