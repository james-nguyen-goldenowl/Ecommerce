import {productList} from './productData';
const fakeApi = (resolve = true, dataReturn, timeDelay) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (resolve) return res({data: dataReturn});
      return rej();
    }, timeDelay);
  });
};

const getProduct = async () => {
  return await fakeApi(true, productList, 100);
};
export {getProduct};
