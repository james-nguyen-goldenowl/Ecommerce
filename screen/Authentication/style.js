import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#F9F9F9',
  },
  up: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: 0,
  },
  down: {
    flex: 6,
    flexDirection: 'column',
    padding: 10,
    marginHorizontal: 15,
    alignContent: 'space-around',
  },
  title: {
    fontSize: 40,
    alignContent: 'flex-end',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    // borderRadius: 10,
    alignContent: 'stretch',
    height: 65,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    textAlign: 'right',
    margin: 10,
  },
});
export default styles;
