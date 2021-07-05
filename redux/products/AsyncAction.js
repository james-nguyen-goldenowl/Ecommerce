import {createAsyncThunk} from '@reduxjs/toolkit';
import {apiStatus} from '../../fakeApi';
import {productApi} from '../../fakeApi';
const productAsyncAction = createAsyncThunk(
  'productAsyncAction/getProducts',
  async props => {
    try {
      const response = await productApi.getProduct();
      return response.data;
    } catch (err) {
      const newError = {...err};
      const payload = {error: newError.response.data};
      return props.rejectWithValue(payload);
    }
  },
  {
    condition: (data, {getState}) => {
      if (getState().products.status === apiStatus.PENDING) {
        return false;
      }
    },
    dispatchConditionRejection: false, //* default false: don't dispatch reject action
  },
);
export {productAsyncAction};
