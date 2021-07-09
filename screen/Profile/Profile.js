import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {clearState} from '../../redux/user/Slice';
import ListInfo from './Component/ListInfo/ListInfo';
import styles from './styles';
const ProfileScreen = () => {
  // const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const userName = `${user.firstName} ${user.lastName}`;
  return (
    <ScrollView>
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
          <ListInfo title="Setting" info="Notification, password" />
        </View>
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
