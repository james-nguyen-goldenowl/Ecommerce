import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import ItemProductVertical from './FlatListItem/ProductItem/ItemProductVertical';
const ProductList = ({navigation, products}) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    return (
      <View>
        <ItemProductVertical
          item={item}
          onPress={() => setSelectedId(item.id)}
          navigation={{navigation}}
        />
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={products}
        horizontal
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
};
export default ProductList;
