import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import BaseText, { BaseTextVariant } from '../text';
import { colors, config } from '@/constants';
import { IconSize, SvgIcon, SvgXmlIconNames } from '@/assets';

const {
  button: { activeOpacity },
} = config;

interface IArrowButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const ArrowButton = ({ title, onPress, style }: IArrowButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={[styles.container, style]}
    >
      <BaseText
        variant={BaseTextVariant.regular16}
        color={colors.main.white}
        style={styles.title}
      >
        {title}
      </BaseText>
      <View style={styles.iconWrapper}>
        <SvgIcon name={SvgXmlIconNames.arrowRight} size={IconSize.lg} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingLeft: 20,
    paddingRight: 4,
    borderRadius: 99,
    overflow: 'hidden',
    backgroundColor: colors.glass.white40,
  },
  title: {
    lineHeight: 16,
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: colors.glass.black30,
  },
});

export default ArrowButton;
