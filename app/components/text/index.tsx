import React, { memo } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { colors, config } from '@/constants';

const {
  fonts: { onest },
} = config;

export interface BaseTextVariantValue {
  fontSize: number;
  fontFamily: string;
}

export const BaseTextVariant = {
  semiBold36: { fontFamily: onest.semiBold, fontSize: 36 },
  semiBold20: { fontFamily: onest.semiBold, fontSize: 20 },
  semiBold18: { fontFamily: onest.semiBold, fontSize: 18 },
  medium20: { fontFamily: onest.medium, fontSize: 20 },
  medium16: { fontFamily: onest.medium, fontSize: 16 },
  regular16: { fontFamily: onest.regular, fontSize: 16 },
  regular13: { fontFamily: onest.regular, fontSize: 13.333 },
  regular12: { fontFamily: onest.regular, fontSize: 12 },
  light14: { fontFamily: onest.light, fontSize: 14 },
} satisfies Record<string, BaseTextVariantValue>;

interface IBaseTextProps extends TextProps {
  variant?: BaseTextVariantValue;
  color?: string;
}

const BaseText = ({
  variant = BaseTextVariant.regular16,
  color = colors.main.black,
  style,
  ...rest
}: IBaseTextProps) => {
  return <Text style={[styles.text, variant, { color }, style]} {...rest} />;
};

const styles = StyleSheet.create({
  text: {
    includeFontPadding: false,
  },
});

export default memo(BaseText);
