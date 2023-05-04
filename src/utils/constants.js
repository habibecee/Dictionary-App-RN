const {StyleSheet} = require('react-native');

export const fonts = StyleSheet.create({
  regular: 'Kalam-Regular',
  bold: 'Kalam-Bold',
  light: 'Kalam-Light',
});

export const GeneralStyles = StyleSheet.create({
  fontRegular: {
    fontFamily: fonts.regular,
  },

  fontBold: {
    fontFamily: fonts.bold,
  },

  fontLight: {
    fontFamily: fonts.light,
  },
});
