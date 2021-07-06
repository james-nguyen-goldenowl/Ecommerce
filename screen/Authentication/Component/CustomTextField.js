/* eslint-disable no-unused-vars */
import React from 'react';
import {TextInput} from 'react-native';
import {Formik, TextField} from 'formik';
const CustomTextField = props => {
  const {field, form, type, label, error, touch} = props;
  const {name, value, onChange, onBlur} = field;
  const {values, errors, touched} = form;
  return <TextInput placeholder="test" />;
};
export default CustomTextField;
