import {createSlice} from '@reduxjs/toolkit';
import {apiStatus} from '../../fakeApi';
import {loginAsyncAction} from './AsyncAction';
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: {
      email: '',
      password: '',
    },
    status: null,
    message: '',
  },
  reducers: {
    clearState: state => {
      state.status = null;
      state.message = '';
      state.user = {
        email: '',
        password: '',
      };
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
      console.log('🚀 ~ file: Slice.js ~ line 40 ~ action', state.message);
    },
  },
});
const {actions, reducer} = profileSlice;
const {clearState} = actions;
const profileReducer = reducer;
export {clearState};
export default profileReducer;
