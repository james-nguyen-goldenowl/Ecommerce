/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Text,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import ItemProductHorizontal from '../../Components/Flatlist/FlatListItem/ProductItem/ItemProductHorizontal';
import ItemProductVertical from '../../Components/Flatlist/FlatListItem/ProductItem/ItemProductVertical';
import Colors from '../../utils/Color';
const FavoriteScreen = ({navigation}) => {
  const favorites = useSelector(state => state.favorite.favorite);
  const [itemShowType, setShowType] = useState('horizontal');
  const onChangeView = () => {
    itemShowType === 'horizontal'
      ? setShowType('vertical')
      : setShowType('horizontal');
  };
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    return (
      <View style={styles.root}>
        {itemShowType === 'vertical' && (
          <View style={styles.containerVertical}>
            <ItemProductVertical
              item={item}
              navigation={{navigation}}
              onPress={() => setSelectedId(item.id)}
            />
          </View>
        )}
        {itemShowType === 'horizontal' && (
          <TouchableOpacity style={styles.containerHorizontal}>
            <ItemProductHorizontal item={item} navigation={{navigation}} />
          </TouchableOpacity>
        )}
      </View>
    );
  };
  return (
    <View>
      <StatusBar
        hidden={false}
        backgroundColor={Colors.WHITE}
        barStyle="dark-content"
      />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Women's top</Text>
        <View style={styles.tagLine}>
          <View style={styles.tagStyle}>
            <Text style={styles.textTag}>T-shirts</Text>
          </View>
          <View style={styles.tagStyle}>
            <Text style={styles.textTag}>Crop top</Text>
          </View>
        </View>
        <View style={styles.optionLine}>
          <TouchableOpacity style={styles.optionGroup}>
            <Image
              source={require('../../public/filter.png')}
              style={styles.iconOption}
            />
            <Text style={styles.titleOption}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionGroup}>
            <Image
              source={require('../../public/sort.png')}
              style={{width: 14, height: 18}}
            />
            <Text style={styles.titleOption}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionGroup} onPress={onChangeView}>
            <Image
              source={require('../../public/grid.png')}
              style={{width: 18, height: 18}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.root}>
        {itemShowType === 'vertical' && (
          <FlatList
            data={favorites}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
        {itemShowType === 'horizontal' && (
          <FlatList
            data={favorites}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerVertical: {
    display: 'flex',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  containerHorizontal: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerContainer: {
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontSize: 34,
    color: Colors.BLACK,
    lineHeight: 34,
    marginBottom: 12,
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
export default FavoriteScreen;
