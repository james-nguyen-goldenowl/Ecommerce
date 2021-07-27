import {createSlice} from '@reduxjs/toolkit';
import {apiStatus} from '../../fakeApi';
import {loginAsyncAction} from './AsyncAction';
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: {
      id: '',
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      gender: '',
      phone: '',
      status: '',
      avatar: '',
    },
    status: null,
    message: '',
  },
  reducers: {
    clearState: state => {
      state.status = null;
      state.message = '';
      state.user = {
        id: '',
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        phone: '',
        status: '',
        avatar: '',
      };
    },
    updatePassword: (state, action) => {
      if (action.payload === state.user.password) {
        throw 'New password must be different old password';
      } else if (action.payload.length < 6) {
        throw 'Password must be least 6 characters';
      } else {
        state.user.password = action.payload;
      }
    },
  },
  extraReducers: {
    [loginAsyncAction.pending]: state => {
      state.status = apiStatus.PENDING;
      state.message = '';
    },
    [loginAsyncAction.fulfilled]: (state, action) => {
      state.status = apiStatus.SUCCESS;
      state.user = action.payload;
      state.message = '';
    },
    [loginAsyncAction.rejected]: (state, action) => {
      state.status = apiStatus.ERROR;
      state.message = action.payload;
    },
  },
});
const {actions, reducer} = profileSlice;
const {clearState, updatePassword} = actions;
const profileReducer = reducer;
export {clearState, updatePassword};
export default profileReducer;
