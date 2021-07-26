/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Colors from '../../utils/Color';
import Title from '../../utils/Title';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import {useDispatch, useSelector} from 'react-redux';
import {
  updateFullName,
  updateBirthDay,
  changeArrivalNotify,
  changeDeliveryNotify,
  changeSaleNotify,
} from './Slice';
import ModalPassword from './Components/ModalPassword';
const SettingScreen = () => {
  const dispatch = useDispatch();
  const fullName = useSelector(state => state.setting.fullName);
  const birthDay = useSelector(state => state.setting.birthDay);
  const saleNotify = useSelector(state => state.setting.saleNotify);
  const arrivalNotify = useSelector(state => state.setting.arrivalsNotify);
  const deliveryNotify = useSelector(state => state.setting.deliveryNotify);
  const password = useSelector(state => state.user.user.password);
  const [isModal, setModal] = useState(false);
  const [press, setPress] = useState(0);
  return (
    <View style={{backgroundColor: Colors.BACKGROUND}}>
      <ScrollView>
        <StatusBar
          hidden={false}
          backgroundColor={Colors.WHITE}
          barStyle="dark-content"
        />
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{Title.Settings}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.subTitle}>Personal Information</Text>
          <View style={{marginTop: 24}}>
            <FloatingLabelInput
              label="FullName"
              customLabelStyles={{
                colorBlurred: Colors.GRAY,
                colorFocused: Colors.GRAY,
                fontSizeBlurred: 14,
                fontSizeFocused: 11,
              }}
              value={fullName}
              onChangeText={text => dispatch(updateFullName(text))}
            />
          </View>
          <View style={{marginTop: 24}}>
            <FloatingLabelInput
              label="Date of Birth"
              customLabelStyles={{
                colorBlurred: Colors.GRAY,
                colorFocused: Colors.GRAY,
                fontSizeBlurred: 14,
                fontSizeFocused: 11,
              }}
              mask="99/99/9999"
              keyboardType="numeric"
              value={birthDay}
              onChangeText={text => dispatch(updateBirthDay(text))}
            />
          </View>
          <View style={styles.passwordTitleLine}>
            <Text style={[styles.subTitle, styles.passwordTitle]}>
              Password
            </Text>
            <TouchableOpacity
              onPress={() => {
                setPress(press + 1);
                setModal(true);
              }}>
              <Text style={styles.change}>Change</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 24}}>
            <FloatingLabelInput
              label="Password"
              customLabelStyles={{
                colorBlurred: Colors.GRAY,
                colorFocused: Colors.GRAY,
                fontSizeBlurred: 14,
                fontSizeFocused: 11,
              }}
              value={password}
              isPassword
              togglePassword={false}
              editable={false}
            />
          </View>
          <View style={styles.passwordTitleLine}>
            <Text style={[styles.subTitle, styles.passwordTitle]}>
              Notifications
            </Text>
          </View>
          <View style={styles.switchGroup}>
            <Text style={styles.switchTitle}>Sales</Text>
            <Switch
              thumbColor={saleNotify ? Colors.SUCCESS : Colors.WHITE}
              onValueChange={() => dispatch(changeSaleNotify())}
              value={saleNotify}
            />
          </View>
          <View style={styles.switchGroup}>
            <Text style={styles.switchTitle}>New arrivals</Text>
            <Switch
              thumbColor={arrivalNotify ? Colors.SUCCESS : Colors.WHITE}
              onValueChange={() => dispatch(changeArrivalNotify())}
              value={arrivalNotify}
            />
          </View>
          <View style={styles.switchGroup}>
            <Text style={styles.switchTitle}>Delivery status changes</Text>
            <Switch
              thumbColor={deliveryNotify ? Colors.SUCCESS : Colors.WHITE}
              onValueChange={() => dispatch(changeDeliveryNotify())}
              value={deliveryNotify}
            />
          </View>
        </View>
      </ScrollView>
      {isModal ? (
        <ModalPassword
          pressButton={press}
          isOpen={isModal}
          password={password}
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Colors.BACKGROUND,
    height: '100%',
    flex: 1,
  },
  contentContainer: {
    marginHorizontal: 16,
    backgroundColor: Colors.BACKGROUND,
  },
  headerContainer: {
    backgroundColor: Colors.BACKGROUND,
  },
  title: {
    fontSize: 34,
    color: Colors.BLACK,
    lineHeight: 34,
    fontWeight: 'bold',
    paddingLeft: 14,
    paddingTop: 40,
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    fontFamily: 'Metropolis',
    color: Colors.BLACK,
    marginTop: 23,
  },
  passwordTitleLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 55,
  },
  passwordTitle: {
    marginTop: 0,
  },
  change: {
    color: Colors.GRAY,
  },
  switchTitle: {
    fontSize: 14,
    marginTop: 23,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  switchGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default SettingScreen;
