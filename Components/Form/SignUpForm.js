import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const SignUpForm = props => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('props' + props);
  const navigation = props.navigation;
  console.log(navigation);
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
          onPress={() => navigation.navigate("Login")}>
          <Text>Already have an account? </Text>
          <FontAwesome5 name={'arrow-right'} size={15} color="#DB3022" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => console.log('hello')}>
          <Button title="Sign Up" color="#DD0000" />
        </TouchableOpacity>
        <Text style={{textAlign: 'center'}}>
          Or sign up with social account
        </Text>
        <View style={styles.social}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome5 name={'google'} color="red" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome5 name={'facebook-square'} color="blue" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  up: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 15,
  },
  down: {
    flex: 6,
    flexDirection: 'column',
    padding: 10,
    marginHorizontal: 15,
    alignContent: 'space-around',
  },
  title: {
    fontSize: 30,
    alignContent: 'flex-end',
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    alignContent: 'stretch',
    height: 45,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    textAlign: 'right',
    margin: 10,
  },
  signUp: {
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
    height: 100,
    borderColor: 'white',
    // width: 300,
    // alignContent: 'stretch',
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 90,
    height: 75,
    backgroundColor: '#fff',
    margin: 5,
  },
});
export default SignUpForm;
