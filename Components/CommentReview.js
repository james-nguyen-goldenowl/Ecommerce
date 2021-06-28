import React from 'react';
import {Text, View, StyleSheet, Image, FlatList} from 'react-native';
import RatingBar from './RatingBar';
const CommentReview = ({ratings}) => {
  const renderItem = ({item}) => <Item item={item} />;
  return (
    <FlatList
      data={ratings}
      renderItem={renderItem}
      keyExtractor={item => item.userName}
      ex
    />
  );
};
const Item = ({item}) => (
  <View style={styles.container}>
    <Image
      style={styles.imageAvatar}
      source={{uri: item.userAvatar}}
      resizeMode={'cover'}
    />
    <View style={styles.commentContainer}>
      <Text>{item.userName}</Text>
      <RatingBar numberStar={item.rate} />
      <Text>{item.reviewContent}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'red',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    width: '80%',
  },
  commentContainer: {
    backgroundColor: 'white',
    // margin: 20,
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
  },
  avatarView: {
    height: 45,
    width: 60,
    borderRadius: 80,
    borderColor: 'yellow',
    resizeMode: 'cover',
    // backgroundColor: 'red',
  },
  imageAvatar: {
    height: 45,
    width: 40,
    borderRadius: 80,
    top: 0,
    left: 0,
  },
});
export default CommentReview;
