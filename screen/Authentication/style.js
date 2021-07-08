import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
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
  link: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default styles;
