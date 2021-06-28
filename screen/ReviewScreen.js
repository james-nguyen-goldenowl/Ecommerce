/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import RatingPercentageBar from '../Components/RatingPercentageBar';
import RatingStar from '../Components/RatingStar';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
  SafeAreaView,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import RatingBar from '../Components/RatingBar';
import CommentReview from '../Components/CommentReview';
const {width, height} = Dimensions.get('screen');
const ReviewScreen = ({navigation, route}) => {
  const averageRating = route.params.averageRating;
  const ratings = route.params.ratings;
  const numberRating5Stars = ratings.filter(item => item.rate === 5).length;
  const numberRating4Stars = ratings.filter(item => item.rate === 4).length;
  const numberRating3Stars = ratings.filter(item => item.rate === 3).length;
  const numberRating2Stars = ratings.filter(item => item.rate === 2).length;
  const numberRating1Stars = ratings.filter(item => item.rate === 1).length;
  const percent5Stars = (numberRating5Stars / ratings.length) * 100;
  const percent4Stars = (numberRating4Stars / ratings.length) * 100;
  const percent3Stars = (numberRating3Stars / ratings.length) * 100;
  const percent2Stars = (numberRating2Stars / ratings.length) * 100;
  const percent1Stars = (numberRating1Stars / ratings.length) * 100;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Rating&Review</Text>
          <View style={styles.ratingContainer}>
            <View
              style={{
                width: '30%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 72}}>{averageRating}</Text>
              <Text style={{fontSize: 20}}>{ratings.length} ratings</Text>
            </View>
            <View style={styles.ratingRank}>
              <View style={styles.ratingLine}>
                <View
                  style={{
                    width: '35%',
                    alignItems: 'flex-end',
                    marginRight: 5,
                  }}>
                  <RatingBar numberStar={5} />
                </View>
                <View style={{width: '50%'}}>
                  <RatingPercentageBar percentage={percent5Stars} />
                </View>
                <Text
                  style={{width: '15%', textAlign: 'right', paddingRight: 15}}>
                  {numberRating5Stars}
                </Text>
              </View>
              <View style={styles.ratingLine}>
                <View
                  style={{
                    width: '35%',
                    alignItems: 'flex-end',
                    marginRight: 5,
                  }}>
                  <RatingBar numberStar={4} />
                </View>
                <View style={{width: '50%'}}>
                  <RatingPercentageBar percentage={percent4Stars} />
                </View>
                <Text
                  style={{width: '15%', textAlign: 'right', paddingRight: 15}}>
                  {numberRating4Stars}
                </Text>
              </View>
              <View style={styles.ratingLine}>
                <View
                  style={{
                    width: '35%',
                    alignItems: 'flex-end',
                    marginRight: 5,
                  }}>
                  <RatingBar numberStar={3} />
                </View>
                <View style={{width: '50%'}}>
                  <RatingPercentageBar percentage={percent3Stars} />
                </View>
                <Text
                  style={{width: '15%', textAlign: 'right', paddingRight: 15}}>
                  {numberRating3Stars}
                </Text>
              </View>
              <View style={styles.ratingLine}>
                <View
                  style={{
                    width: '35%',
                    alignItems: 'flex-end',
                    marginRight: 5,
                  }}>
                  <RatingBar numberStar={2} />
                </View>
                <View style={{width: '50%'}}>
                  <RatingPercentageBar percentage={percent2Stars} />
                </View>
                <Text
                  style={{width: '15%', textAlign: 'right', paddingRight: 15}}>
                  {numberRating2Stars}
                </Text>
              </View>
              <View style={styles.ratingLine}>
                <View
                  style={{
                    width: '35%',
                    alignItems: 'flex-end',
                    marginRight: 5,
                  }}>
                  <RatingBar numberStar={1} />
                </View>
                <View style={{width: '50%'}}>
                  <RatingPercentageBar percentage={percent1Stars} />
                </View>
                <Text
                  style={{width: '15%', textAlign: 'right', paddingRight: 15}}>
                  {numberRating1Stars}
                </Text>
              </View>
            </View>
          </View>
          <Text>{ratings.length} reviews</Text>
          <View style={{marginHorizontal: 0, width: '100%'}}>
            <CommentReview ratings={ratings} />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.addModal}>
        <FontAwesome5Icon name={'pen'} size={15} color="white" />
        <Text style={{marginLeft: 5, color: 'white'}}>Add Review</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    // margin: 10,
    width: width,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  ratingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width,
  },
  ratingLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // padding: 10,
  },
  ratingRank: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '70%',
    // backgroundColor: 'red',
  },
  addModal: {
    backgroundColor: 'red',
    bottom: 0,
    right: 0,
    position: 'absolute',
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 160,
  },
});
export default ReviewScreen;
