import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const config = {
  screenWidth: width,
  screenHeight: height,
  // Size of the Figma frames the screens are drawn on (iPhone 16 Pro), with
  // that device's safe area insets.
  design: {
    width: 402,
    height: 874,
    safeTop: 62,
    safeBottom: 34,
  },
  button: {
    hitSlop: 8,
    activeOpacity: 0.8,
  },
  fonts: {
    onest: {
      regular: 'Onest-Regular',
      medium: 'Onest-Medium',
      semiBold: 'Onest-SemiBold',
      bold: 'Onest-Bold',
    },
  },
};

export { config };
