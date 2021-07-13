/* eslint-disable react-native/no-inline-styles */
import {View, Text, Alert, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import styles from '../style';
import CommonButton from '../../../Components/Button/CommonButton/CommonButton';
import SocialGroup from '../Component/SocialGroup';
import {Formik, FastField} from 'formik';
import CustomTextField from '../Component/CustomTextField';
import ArrowButton from '../../../Components/Button/ArrowButton/ArrowButton';
const height = Dimensions.get('screen').height;
const SignUpScreen = props => {
  const navigation = props.navigation;
  const [errorText, setErrorText] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const initValues = {
    userName: '',
    email: '',
    password: '',
  };
  const validate = values => {
    let errors = {};
    if (!values.email || values.email.trim() === '') {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    } else {
      errors.email = '';
    }
    if (!values.password || values.password.trim() === '') {
      errors.password = 'Required';
    } else {
      values.password.length < 6
        ? (errors.password = 'Password must have min 6 characters')
        : null;
    }
    if (!values.userName || values.userName.trim() === '') {
      errors.userName = 'Required';
    } else {
      errors.userName = '';
    }
    setErrorText(errors);
  };
  return (
    <ScrollView
      style={{flex: 1, height: height}}
      contentContainerStyle={{flex: 1}}>
      <Formik
        initialValues={initValues}
        validate={validate}
        onSubmit={values => {
          values.email === '' ||
          values.password === '' ||
          values.userName === ''
            ? Alert.alert('Please complete all information!')
            : console.log('Sign up', values);
        }}>
        {formik => {
          const {touched, handleSubmit} = formik;
          return (
            <View style={styles.container}>
              <View style={styles.up}>
                <Text style={styles.title}>Sign Up</Text>
              </View>
              <View style={styles.down}>
                <FastField
                  error={errorText.userName}
                  touch={touched.userName}
                  component={CustomTextField}
                  name="userName"
                  placeholder="UserName"
                />
                <FastField
                  error={errorText.email}
                  touch={touched.email}
                  component={CustomTextField}
                  name="email"
                  placeholder="Email"
                />
                <FastField
                  error={errorText.password}
                  touch={touched.password}
                  component={CustomTextField}
                  name="password"
                  placeholder="Password"
                />
                <ArrowButton
                  text="Already have an account? "
                  navigation={navigation}
                  destinaion="Login"
                />
                <CommonButton text="SIGN UP" onPress={handleSubmit} />
                <SocialGroup />
              </View>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
};
export default SignUpScreen;
