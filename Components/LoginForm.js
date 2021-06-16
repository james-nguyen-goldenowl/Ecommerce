import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // console.log('props' + props);
  const navigation = props.navigation;
  // console.log(navigation);
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
          <Text>Forgot your password?</Text>
          <FontAwesome5 name={'arrow-right'} size={15} color="#DB3022" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Button
            title="LOGIN"
            color="#DD0000"
            onPress={() => Alert.alert('Email' + email)}
          />
        </TouchableOpacity>
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
  button: {
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 10,
    height: 100,
    borderColor: 'white',
    // width: 300,
    // alignContent: 'stretch',
  },
});
export default LoginForm;
