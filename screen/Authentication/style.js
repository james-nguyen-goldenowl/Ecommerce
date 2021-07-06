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
    marginHorizontal: 10,
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default styles;
