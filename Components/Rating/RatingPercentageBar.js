import React, {useState, useEffect} from 'react';
import {Animated, View, StyleSheet} from 'react-native';
const RatingPercentageBar = ({percentage}) => {
  const [animation] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animation, {
      toValue: percentage,
      duration: 500,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percentage]);

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
      }}>
      <View style={styles.progressMiddle}>
        <View style={styles.progressWrap}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: animation.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  progressMiddle: {
    height: 15,
    flex: 1,
    width: '100%',
    // marginHorizontal: 10,
  },
  progressWrap: {
    backgroundColor: 'white',
    borderRadius: 18,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: 0,
  },
  progressBar: {
    flex: 1,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'red',
    shadowOpacity: 1.0,
    shadowRadius: 4,
    backgroundColor: 'red',
    borderRadius: 18,
    minWidth: 5,
  },
});
export default RatingPercentageBar;
