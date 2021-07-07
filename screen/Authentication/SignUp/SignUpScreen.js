import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from '../style';
import CommonButton from '../../../Components/Button/CommonButton';
import SocialGroup from '../Component/SocialGroup';
import {Formik, FastField} from 'formik';
import CustomTextField from '../Component/CustomTextField';
import ArrowButton from '../../../Components/Button/ArrowButton/ArrowButton';
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
    console.log('🚀 ~ file: SignUpScreen.js ~ line 32 ~ values', values);
    let errors = {};
    if (!values.email || values.email === '') {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "'Invalid email address'";
    } else {
      errors.email = '';
    }
    if (!values.password || values.password === '') {
      errors.password = 'Required';
    } else {
      errors.password = '';
    }
    if (!values.userName || values.userName === '') {
      errors.userName = 'Required';
    } else {
      errors.userName = '';
    }
    console.log('🚀 ~ file: SignUpScreen.js ~ line 55 ~ error', errors);
    setErrorText(errors);
    console.log('🚀 ~ file: SignUpScreen.js ~ line 57 ~ errorText', errorText);
  };
  return (
    <Formik
      initialValues={initValues}
      validate={validate}
      onSubmit={values => {
        values.email === '' || values.password === '' || values.userName === ''
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
  );
};
export default SignUpScreen;
