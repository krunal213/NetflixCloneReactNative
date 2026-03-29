module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@view': './src/view',
          '@assets': './assets',
          '@domain': './src/domain',
        },
      },
    ],
    'babel-plugin-transform-typescript-metadata',
    'react-native-reanimated/plugin', // MUST BE LAST
  ],
};