import {createSlice} from '@reduxjs/toolkit';
const ModalAddSlice = createSlice({
  name: 'modalpassword',
  initialState: {
    oldPass: '',
    newPass: '',
    repeat: '',
  },
  reducers: {
    clearState: state => {
      state.oldPass = '';
      state.newPass = '';
      state.repeat = '';
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
    checkRepeat: state => {
      if (state.newPass !== state.repeat) {
        throw 'Re-entered password does not match';
      }
    },
  },
});
const {actions, reducer} = ModalAddSlice;
const {getOldPass, getNewPass, getRepeat, checkRepeat, clearState} = actions;
const passwordReducer = reducer;
export {getNewPass, getOldPass, getRepeat, checkRepeat, clearState};
export default passwordReducer;
