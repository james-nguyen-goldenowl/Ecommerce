// import {createAsyncThunk} from '@reduxjs/toolkit';
// import getProduct from '../../fakeApi/productApi';
// import apiStatus from '../../fakeApi/apiStatus';
// export const anyAsyncAction = createAsyncThunk(
//   'anyAsyncAction/products',
//   async props => {
//     try {
//       const response = await getProduct();
//       console.log(response);
//       // return response
//     } catch (err) {
//       const newError = {...err};
//       console.log(newError);
//     }
//   },
//   {
//     condition: (data, {getState}) => {
//       if (getState().product.status === apiStatus.PENDING) {
//         return false;
//       }
//     },
//     dispatchConditionRejection: false,
//   },
// );
// // export {anyAsyncAction};
