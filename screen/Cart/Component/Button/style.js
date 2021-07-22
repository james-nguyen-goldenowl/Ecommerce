import {StyleSheet} from 'react-native';
import Colors from '../../../../utils/Color';
const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 36,
    backgroundColor: Colors.WHITE,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 20,
  },
  image: {
    width: 14,
    height: 14,
  },
  promoContainer: {
    width: 36,
    height: 36,
    position: 'absolute',
    backgroundColor: Colors.BLACK,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 20,
  },
});
export default styles;
