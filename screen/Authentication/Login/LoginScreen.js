import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import CommonButton from '../../../Components/Button/CommonButton';
import SocialGroup from '../Component/SocialGroup';
import styles from '../style';
import {loginAsyncAction} from '../../../redux/user/AsyncAction';
import ArrowButton from '../../../Components/Button/ArrowButton/ArrowButton';
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
        <View style={styles.link}>
          <ArrowButton
            navigation={navigation}
            text="Create a new account? "
            destinaion="SignUp"
          />
          <ArrowButton
            navigation={navigation}
            text="Forgot your password? "
            destinaion=""
          />
        </View>
        <CommonButton
          text="LOGIN"
          onPress={() => {
            email === '' || password === ''
              ? Alert.alert('Please complete all information!')
              : dispatch(loginAsyncAction(account));
          }}
        />
        <SocialGroup />
      </View>
    </View>
  );
};
export default LoginScreen;
