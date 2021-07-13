/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CommonButton from '../../../Components/Button/CommonButton/CommonButton';
import SocialGroup from '../Component/SocialGroup';
import styles from '../style';
import {loginAsyncAction} from '../../../redux/user/AsyncAction';
import ArrowButton from '../../../Components/Button/ArrowButton/ArrowButton';
import {Formik, FastField} from 'formik';
import CustomTextField from '../Component/CustomTextField';
import * as Yup from 'yup';
const LoginScreen = props => {
  const user = useSelector(state => state.user);
  const [errorsText, setErrorText] = useState({});
  const dispatch = useDispatch();
  const navigation = props.navigation;
  const initValues = {
    email: '',
    password: '',
  };
  const validate = values => {
    const errors = {};
    if (!values.email || values.email.trim() === '') {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password || values.password.trim() === '') {
      errors.password = 'Required';
    } else {
      values.password.length < 6
        ? (errors.password = 'Password must have min 6 characters')
        : null;
    }
    setErrorText(errors);
  };
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView contentContainerStyle={{flex: 1, height: '100%'}}>
      <Formik
        initialValues={initValues}
        validate={validate}
        onSubmit={values => {
          values.email === '' || values.password === ''
            ? Alert.alert('Please complete all information!')
            : dispatch(loginAsyncAction(values));
          console.log(user.message === '');
          user.message !== '' || user.message
            ? Alert.alert('Login Information is incorrect')
            : null;
        }}>
        {formik => {
          const {touched, handleSubmit} = formik;
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
                    text="Forgot your password? "
                    destinaion=""
                  />
                </View>
                <CommonButton text="LOGIN" onPress={handleSubmit} />
                <View style={styles.linkSignUp}>
                  <ArrowButton
                    navigation={navigation}
                    text="Create a new account? "
                    destinaion="SignUp"
                  />
                </View>
                <SocialGroup />
              </View>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};
export default LoginScreen;
