/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CommonButton from '../../../Components/Button/CommonButton';
import SocialGroup from '../Component/SocialGroup';
import styles from '../style';
import {loginAsyncAction} from '../../../redux/user/AsyncAction';
import ArrowButton from '../../../Components/Button/ArrowButton/ArrowButton';
import {Formik} from 'formik';
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
  const [errorsText, setErrorText] = useState({});
  const dispatch = useDispatch();
  const navigation = props.navigation;
  const initValues = {
    email: '',
    password: '',
  };
  const user = useSelector(state => state.user.user);
  const validate = values => {
    const errors = {};
    if (!values.email || values.email === '') {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "'Invalid email address'";
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    setErrorText(errors);
    console.log('🚀 ~ file: LoginScreen.js ~ line 52 ~ errors', errors.email);
  };
  return (
    <Formik
      initialValues={initValues}
      validate={validate}
      onSubmit={values => {
        values.email === '' || values.password === ''
          ? Alert.alert('Please complete all information!')
          : dispatch(loginAsyncAction(values));
      }}>
      {fomik => {
        const {
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        } = fomik;
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
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {errorsText.email ? (
                <Text
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    backgroundColor: 'pink',
                    color: 'red',
                    marginBottom: 10,
                  }}>
                  * {errorsText.email}
                </Text>
              ) : null}

              <TextInput
                style={styles.input}
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
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
              <CommonButton text="LOGIN" onPress={handleSubmit} />
              <SocialGroup />
            </View>
          </View>
        );
      }}
    </Formik>
  );
};
export default LoginScreen;
