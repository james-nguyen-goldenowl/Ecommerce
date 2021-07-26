import {createSlice} from '@reduxjs/toolkit';
const SettingScreen = createSlice({
  name: 'setting',
  initialState: {
    fullName: '',
    birthDay: '',
    saleNotify: false,
    arrivalsNotify: false,
    deliveryNotify: false,
  },
  reducers: {
    updateFullName: (state, action) => {
      state.fullName = action.payload;
    },
    updateBirthDay: (state, action) => {
      state.birthDay = action.payload;
    },
    changeSaleNotify: state => {
      const previousState = state.saleNotify;
      state.saleNotify = !previousState;
    },
    changeArrivalNotify: state => {
      const previousState = state.arrivalsNotify;
      state.arrivalsNotify = !previousState;
    },
    changeDeliveryNotify: state => {
      const previousState = state.deliveryNotify;
      state.deliveryNotify = !previousState;
    },
  },
});
const {actions, reducer} = SettingScreen;
const {
  updateBirthDay,
  updateFullName,
  changeArrivalNotify,
  changeDeliveryNotify,
  changeSaleNotify,
} = actions;
const settingReducer = reducer;
export {
  updateBirthDay,
  updateFullName,
  changeArrivalNotify,
  changeDeliveryNotify,
  changeSaleNotify,
};
export default settingReducer;
