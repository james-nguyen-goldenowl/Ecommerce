/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import RatingPercentageBar from '../../../Components/Rating/RatingPercentageBar';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  LogBox,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import RatingBar from '../../../Components/Rating/RatingBar';
import CommentReview from '../../../Components/Flatlist/FlatListItem/CommentReview';
import ModalBoxRating from './Component/ModalBoxRating';
import Colors from '../../../utils/Color';
import {getRating, getPercent, getStatistical} from './Slice';
import {useDispatch, useSelector} from 'react-redux';
const {width, height} = Dimensions.get('window');
LogBox.ignoreAllLogs();
const ReviewScreen = ({navigation, route}) => {
  const averageRating = route.params.averageRating;
  const ratings = route.params.ratings;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRating(ratings));
    dispatch(getStatistical());
    dispatch(getPercent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ratings]);
  const statistical = useSelector(state => state.review.statisticalRating);
  const percent = useSelector(state => state.review.percent);
  const [modalOpen, setModalOpen] = useState(false);
  const [pressButton, setPressButton] = useState(0);
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
                justifyContent: 'flex-start',
              }}>
              <Text style={{fontSize: 72}}>{averageRating}</Text>
              <Text style={{fontSize: 14, color: Colors.GRAY}}>
                {ratings.length} ratings
              </Text>
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
                  <RatingPercentageBar percentage={percent.percent5Stars} />
                </View>
                <Text
                  style={{width: '15%', textAlign: 'right', paddingRight: 15}}>
                  {statistical.numberRating5Stars}
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
                  <RatingPercentageBar percentage={percent.percent4Stars} />
                </View>
                <Text
                  style={{width: '15%', textAlign: 'right', paddingRight: 15}}>
                  {statistical.numberRating4Stars}
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
                  <RatingPercentageBar percentage={percent.percent3Stars} />
                </View>
                <Text
                  style={{width: '15%', textAlign: 'right', paddingRight: 15}}>
                  {statistical.numberRating3Stars}
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
                  <RatingPercentageBar percentage={percent.percent2Stars} />
                </View>
                <Text
                  style={{width: '15%', textAlign: 'right', paddingRight: 15}}>
                  {statistical.numberRating2Stars}
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
                  <RatingPercentageBar percentage={percent.percent1Stars} />
                </View>
                <Text
                  style={{width: '15%', textAlign: 'right', paddingRight: 15}}>
                  {statistical.numberRating1Stars}
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 24,
              color: Colors.BLACK,
              fontWeight: 'bold',
            }}>
            {ratings.length} reviews
          </Text>
          <View style={{marginHorizontal: 0, width: '100%'}}>
            <CommentReview ratings={ratings} />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addModal}
        onPress={() => {
          setModalOpen(true);
          setPressButton(pressButton + 1);
        }}>
        <FontAwesome5Icon name="pen" size={15} color="white" />
        <Text style={{marginLeft: 5, color: 'white'}}>Add Review</Text>
      </TouchableOpacity>
      <ModalBoxRating isOpen={modalOpen} pressButton={pressButton} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    // margin: 10,
    width: width,
    height: height,
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
    backgroundColor: '#DB0322',
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
