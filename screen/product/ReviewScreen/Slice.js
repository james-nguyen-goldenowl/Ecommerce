import {createSlice} from '@reduxjs/toolkit';
const ReviewSlice = createSlice({
  name: 'reviewProduct',
  initialState: {
    ratings: [],
    statisticalRating: {
      numberRating5Stars: 0,
      numberRating4Stars: 0,
      numberRating3Stars: 0,
      numberRating2Stars: 0,
      numberRating1Stars: 0,
    },
    percent: {
      percent5Star: 0,
      percent4Star: 0,
      percent3Star: 0,
      percent2Star: 0,
      percent1Star: 0,
    },
  },
  reducers: {
    getRating: (state, action) => {
      state.ratings = action.payload;
    },
    getStatistical: state => {
      let numberRating5Stars = state.ratings.filter(
        item => item.rate === 5,
      ).length;
      let numberRating4Stars = state.ratings.filter(
        item => item.rate === 4,
      ).length;
      let numberRating3Stars = state.ratings.filter(
        item => item.rate === 3,
      ).length;
      let numberRating2Stars = state.ratings.filter(
        item => item.rate === 2,
      ).length;
      let numberRating1Stars = state.ratings.filter(
        item => item.rate === 1,
      ).length;
      state.statisticalRating = {
        numberRating5Stars,
        numberRating4Stars,
        numberRating3Stars,
        numberRating2Stars,
        numberRating1Stars,
      };
    },
    getPercent: state => {
      const percent5Stars =
        (state.statisticalRating.numberRating5Stars / state.ratings.length) *
        100;
      const percent4Stars =
        (state.statisticalRating.numberRating4Stars / state.ratings.length) *
        100;
      const percent3Stars =
        (state.statisticalRating.numberRating3Stars / state.ratings.length) *
        100;
      const percent2Stars =
        (state.statisticalRating.numberRating2Stars / state.ratings.length) *
        100;
      const percent1Stars =
        (state.statisticalRating.numberRating1Stars / state.ratings.length) *
        100;
      state.percent = {
        percent5Stars,
        percent4Stars,
        percent3Stars,
        percent2Stars,
        percent1Stars,
      };
    },
  },
});
const {actions, reducer} = ReviewSlice;
const {getRating, getStatistical, getPercent} = actions;
const reviewReducer = reducer;
export {getPercent, getRating, getStatistical};
export default reviewReducer;
