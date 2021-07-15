import categoryList from './categoryData';
const fakeApi = (resolve = true, dataReturn, timeDelay) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (resolve) {
        return res({data: dataReturn});
      }
      return rej();
    }, timeDelay);
  });
};

const getCategory = async () => {
  return await fakeApi(true, categoryList, 100);
};
export default {getCategory};
