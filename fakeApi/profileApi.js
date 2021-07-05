/* eslint-disable no-unused-vars */
// import axios from 'apis/axiosClient';

const profile = {
  id: '72af4eeb-4b0f-40f0-a7e9-63efa7661004',
  username: 'James',
  password: '123123',
  email: 'james.nguyen.goldenowl@gmail.com',
  firstName: 'Nghi',
  lastName: 'Nguyen',
  gender: 'male',
  phone: '0123456789',
  status: 'active',
  avatar: require('../public/anh.jpg'),
};

const fakeApi = (resolve = true, dataReturn, timeDelay) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (resolve) {
        return res({data: dataReturn});
      }
      return rej({payload: "Đăng nhập không thành công!"});
    }, timeDelay);
  });
};

const getProfile = async account => {
  // return axios.get('/auth/user-info');
  if (account.email === profile.email && account.password === profile.password)
    return await fakeApi(true, profile, 100);
  else return await fakeApi(false, null, 100);
  // return await fakeApi(true, profile, 100);
};

export default {
  getProfile,
};
