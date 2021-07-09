import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  image: {
    width: width,
    height: 350,
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
    // alignC?ontent: 'center',
    justifyContent: 'flex-start',
  },
  percentSale: {

  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  price: {
    color: 'gray',
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
    alignContent: 'center',
    width: width,
    height: 100,
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
});
export default styles;
