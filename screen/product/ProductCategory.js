import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ItemFlatList from '../../Components/Flatlist/FlatListItem/ProductItemFlatList';
const ProductCategory = ({navigation, route}) => {
  const [selectedId, setSelectedId] = useState(null);
  const products = useSelector(state => state.products.products);
  const productCategory = products.filter(
    product => product.category === route.params.category,
  );
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <ItemFlatList
          item={item}
          onPress={() => setSelectedId(item.id)}
          navigation={{navigation}}
        />
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView>
      <FlatList
        renderItem={renderItem}
        data={productCategory}
        keyExtractor={item => item.id}
        numColumns={2}
        extraData={selectedId}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 1,
  },
  content: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 20,
  },
  tile: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subTitle: {
    opacity: 0.5,
  },
  titleGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
});
export default ProductCategory;
