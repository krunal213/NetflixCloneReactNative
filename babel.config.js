module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // ✅ MUST be first
    ['@babel/plugin-proposal-decorators', { legacy: true }],

    // ✅ Required with decorators
    ['@babel/plugin-proposal-class-properties', { loose: true }],

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

    // ✅ Needed for tsyringe (metadata reflection)
    'babel-plugin-transform-typescript-metadata',

    // ✅ MUST BE LAST
    'react-native-reanimated/plugin',
  ],
};