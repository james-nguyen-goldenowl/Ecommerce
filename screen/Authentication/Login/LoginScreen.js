/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CommonButton from '../../../Components/Button/CommonButton';
import SocialGroup from '../Component/SocialGroup';
import styles from '../style';
import {loginAsyncAction} from '../../../redux/user/AsyncAction';
import ArrowButton from '../../../Components/Button/ArrowButton/ArrowButton';
import {Formik, FastField} from 'formik';
import CustomTextField from '../Component/CustomTextField';
const LoginScreen = props => {
  const [errorsText, setErrorText] = useState({});
  const dispatch = useDispatch();
  const navigation = props.navigation;
  const initValues = {
    email: '',
    password: '',
  };
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
        const {touched, handleSubmit} = fomik;
        return (
          <View style={styles.container}>
            <View style={styles.up}>
              <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.down}>
              <FastField
                error={errorsText.email}
                touch={touched.email}
                component={CustomTextField}
                name="email"
                placeholder="Email"
              />
              <FastField
                error={errorsText.password}
                touch={touched.email}
                component={CustomTextField}
                name="password"
                placeholder="Password"
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
