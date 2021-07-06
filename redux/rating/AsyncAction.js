// import {createAsyncThunk} from '@reduxjs/toolkit';
// import {apiStatus} from '../../fakeApi';
// import {profileApi} from '../../fakeApi';
// const loginAsyncAction = createAsyncThunk(
//   'profileAsyncAction/signIn',
//   async account => {
//     try {
//       const response = await profileApi.getProfile(account);
//       return response.data;
//     } catch (err) {
//       const newError = {...err};
//       const payload = {error: newError.response.data};
//       return account.rejectWithValue(payload);
//     }
//   },
//   {
//     condition: (data, {getState}) => {
//       if (getState().user.status === apiStatus.PENDING) {
//         return false;
//       }
//     },
//     dispatchConditionRejection: false, //* default false: don't dispatch reject action
//   },
// );
// export {loginAsyncAction};
