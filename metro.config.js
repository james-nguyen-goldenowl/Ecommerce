/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
// const path = require('path');
// const extraNodeModules = {
//   public: path.resolve(__dirname + '/../public'),
// };
// const watchFolders = [path.resolve(__dirname + '/../public')];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  // resolver: {
  //   extraNodeModules,
  // },
  // watchFolders,
};
