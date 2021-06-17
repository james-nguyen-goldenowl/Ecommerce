import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
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
    borderWidth: 1,
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  percentSale: {
    backgroundColor: 'red',
    color: 'white',
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
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
});
export default styles;
