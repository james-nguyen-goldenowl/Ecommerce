import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiStatus} from '../../fakeApi';
import {categoryApi} from '../../fakeApi';
const categoryAsyncAction = createAsyncThunk(
  'categoryAsyncAction/getCategoryList',
  async props => {
    try {
      const response = await categoryApi.getCategory();
      if (response.data) {
        return response.data;
      } else {
        const payload = {response};
        return props.rejectWithValue(payload);
      }
    } catch (err) {
      const newError = {...err};
      const payload = {error: newError.response.data};
      return props.rejectWithValue(payload);
    }
  },
  {
    condition: (data, {getState}) => {
      if (getState().category.status === apiStatus.PENDING) {
        return false;
      }
    },
    dispatchConditionRejection: false, //* default false: don't dispatch reject action
  },
);
export {categoryAsyncAction};
