import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import React, {useState} from 'react';
import styles from '../style';
import CommonButton from '../../../Components/Button/CommonButton';
import SocialGroup from '../Component/SocialGroup';
const SignUpScreen = props => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <View style={styles.up}>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View style={styles.down}>
        <TextInput
          style={styles.input}
          placeholder="UserName"
          value={userName}
          onChangeText={name => setUserName(name)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={mail => setEmail(mail)}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={pass => setPassword(pass)}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate('Login')}>
          <Text>Already have an account? </Text>
          <FontAwesome5Icon name={'arrow-right'} size={15} color="#DB3022" />
        </TouchableOpacity>
        <CommonButton text="SIGN UP" />
        <SocialGroup />
      </View>
    </View>
  );
};
export default SignUpScreen;
