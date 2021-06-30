import {productList} from '../../fakeApi/productData';
const GetProducts = () => {
//   console.log(productList);
  return {
    type: 'GetProducts',
    payload: productList,
  };
};
export default GetProducts;
