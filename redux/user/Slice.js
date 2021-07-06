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
    message: null,
  },
  reducers: {
    clearState: state => {
      state.status = null;
      state.message = null;
      state.user = {
        email: '',
        password: '',
      };
    },
  },
  extraReducers: {
    [loginAsyncAction.pending]: state => {
      state.status = apiStatus.PENDING;
      state.message = null;
    },
    [loginAsyncAction.fulfilled]: (state, action) => {
      state.status = apiStatus.SUCCESS;
      state.user = action.payload;
      state.message = null;
    },
    [loginAsyncAction.rejected]: (state, action) => {
      state.status = apiStatus.ERROR;
      state.message = action.payload;
    },
  },
});
const {actions, reducer} = profileSlice;
const {clearState} = actions;
const profileReducer = reducer;
export {clearState};
export default profileReducer;
