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
    fontSize: 34,
    alignContent: 'flex-end',
    fontWeight: 'bold',
    color: '#222222',
    fontFamily: 'Metropolis',
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  linkSignUp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
export default styles;
