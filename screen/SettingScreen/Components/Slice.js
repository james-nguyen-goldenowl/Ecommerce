import {createSlice} from '@reduxjs/toolkit';
const ModalAddSlice = createSlice({
  name: 'modalpassword',
  initialState: {
    oldPass: '',
    newPass: '',
    repeat: '',
    condition: false,
    message: '',
  },
  reducers: {
    clearState: state => {
      state.oldPass = '';
      state.newPass = '';
      state.repeat = '';
      state.message = '';
      state.condition = false;
    },
    getOldPass: (state, action) => {
      state.oldPass = action.payload;
    },
    getNewPass: (state, action) => {
      state.newPass = action.payload;
    },
    getRepeat: (state, action) => {
      state.repeat = action.payload;
    },
    checkCondition: state => {
      if (state.newPass.length < 6) {
        state.message = 'Password must be at least 6 characters';
      } else if (state.oldPass === state.newPass) {
        console.log('check', state.oldPass === state.newPass);
        state.message =
          'The new password must be different from the old password';
      } else if (state.newPass !== state.repeat) {
        state.message = 'Repeat password does not match';
      } else {
        console.log('bnfknfk', state.message);
        state.message === '' ? (state.condition = true) : null;
      }
    },
    updateState: state => {
      const previousState = {...state};
      state = {...previousState};
    },
  },
});
const {actions, reducer} = ModalAddSlice;
const {
  getOldPass,
  getNewPass,
  getRepeat,
  checkCondition,
  clearState,
  updateState,
} = actions;
const passwordReducer = reducer;
export {
  getNewPass,
  getOldPass,
  getRepeat,
  checkCondition,
  clearState,
  updateState,
};
export default passwordReducer;
