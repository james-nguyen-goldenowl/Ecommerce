import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../../utils/Color';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  image: {
    width: width,
    height: 413,
    resizeMode: 'cover',
  },
  contentContainer: {
    margin: 10,
  },
  pickerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  picker: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 5,
    width: width / 3,
  },
  buttonLike: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 50,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    // padding: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  price: {
    color: Colors.GRAY,
    textDecorationLine: 'line-through',
    fontSize: 20,
  },
  sale: {
    color: 'red',
    fontSize: 20,
    marginLeft: 10,
  },
  btnAddContainer: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: 100,
    marginTop: 17,
  },
  btnAdd: {
    height: 50,
    borderRadius: 20,
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dropdownList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  categoryText: {
    color: Colors.GRAY,
  },
  recommendTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 16,
  },
  recommendList: {
    marginLeft: 16,
  },
});
export default styles;
