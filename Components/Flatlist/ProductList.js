import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import ProductItemFlatList from '../FlatListItem/ProductItemFlatList';
const ProductList = ({navigation, products}) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    return (
      <View>
        <ProductItemFlatList
          item={item}
          onPress={() => setSelectedId(item.id)}
          navigation={{navigation}}
        />
      </View>
    );
  };
  return (
    <FlatList
      data={products}
      horizontal
      renderItem={renderItem}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  );
};
export default ProductList;
