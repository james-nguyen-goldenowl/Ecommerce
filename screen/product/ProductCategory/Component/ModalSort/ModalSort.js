/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modalbox';
import {
  View,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Colors from '../../../../../utils/Color';
import ItemSort from './ItemSort';
const options = [
  {id: 1, title: 'Popular'},
  {id: 2, title: 'Newest'},
  {id: 3, title: 'Customer review'},
  {id: 4, title: 'Price: lowest to high'},
  {id: 5, title: 'Price: highest to low'},
];
const ModalSort = ({isOpen, press, navigation, category}) => {
  // eslint-disable-next-line no-unused-vars
  const [swipeToClose, setSwipeToClose] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(null);
  console.log('Modal box', category);
  useEffect(() => {
    setIsOpenModal(isOpen);
  }, [isOpen, press]);

  const renderItem = ({item}) => {
    return <ItemSort item={item} navigation={navigation} category={category} />;
  };
  return (
    <Modal
      isOpen={isOpenModal}
      style={styles.container}
      swipeToClose={swipeToClose}
      position="bottom"
      backdrop={true}
      onClosed={() => {
        setIsOpenModal(false);
      }}>
      <View style={styles.rectangleContainer}>
        <View style={styles.rectangle} />
      </View>
      <Text style={styles.title}>Sort by</Text>
      <View style={styles.optionGroup}>
        <FlatList
          data={options}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: Platform.OS === 'ios' ? 30 : 40,
    borderTopRightRadius: Platform.OS === 'ios' ? 30 : 40,
    shadowRadius: 10,
    width: '100%',
    height: '80%',
    position: 'absolute',
    backgroundColor: Colors.BACKGROUND,
    fontFamily: 'Metropolis',
    bottom: 0,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    fontSize: 18,
    lineHeight: 21.6,
  },
  optionGroup: {
    marginBottom: 39,
  },
  rectangleContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rectangle: {
    width: 60,
    height: 6,
    backgroundColor: Colors.GRAY,
    marginTop: 14,
  },
});
export default ModalSort;
