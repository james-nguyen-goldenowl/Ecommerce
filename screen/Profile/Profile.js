import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, Image, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import ListInfo from './Component/ListInfo/ListInfo';
import styles from './styles';
const ProfileScreen = ({navigation}) => {
  // const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const userName = `${user.firstName} ${user.lastName}`;
  return (
    <ScrollView>
      <StatusBar hidden={false} backgroundColor="red" />
      <View style={styles.container}>
        <View style={styles.up}>
          <Text style={styles.title}>My Profile</Text>
          <View style={styles.infoGroupContainer}>
            <View style={styles.avatarContainer}>
              <Image source={user.avatar} style={styles.imageAvatar} />
            </View>
            <View style={styles.info}>
              <Text style={styles.name}>{userName}</Text>
              <Text style={styles.infoBonus}>{user.email}</Text>
            </View>
          </View>
        </View>
        <View style={styles.down}>
          <ListInfo title="My order" info="Already have 12 orders" />
          <ListInfo title="Shipping addresses" info="3 addresses" />
          <ListInfo title="Payment methods" info="Visa **34" />
          <ListInfo title="Promocodes" info="You have special promocodes" />
          <ListInfo title="My reviews" info="Reviews for 4 items" />
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <ListInfo title="Setting" info="Notification, password" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
