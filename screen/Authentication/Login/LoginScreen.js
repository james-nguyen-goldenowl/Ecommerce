import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, useSelector} from 'react-redux';
import CommonButton from '../../../Components/Button/CommonButton';
import SocialGroup from '../Component/SocialGroup';
import styles from '../style';
import {loginAsyncAction} from '../../../redux/user/AsyncAction';
const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [account, setAccount] = useState({
    email: email,
    password: password,
  });
  useEffect(
    () =>
      setAccount({
        email: email,
        password: password,
      }),
    [email, password],
  );
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const message = useSelector(state => state.user.message);
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.up}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.down}>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Email"
          value={email}
          onChangeText={mail => setEmail(mail)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={pass => setPassword(pass)}
        />
        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate('SignUp')}>
          <Text>Forgot your password? </Text>
          <FontAwesome5 name={'arrow-right'} size={15} color="#DB3022" />
        </TouchableOpacity>
        <CommonButton
          text="LOGIN"
          onPress={() => {
            email === '' || password === ''
              ? Alert.alert('Vui lòng điền đầy đủ thông tin!')
              : dispatch(loginAsyncAction(account));
          }}
        />
        <SocialGroup />
      </View>
    </View>
  );
};
export default LoginScreen;
