import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { BaseText, BaseTextVariant } from '@/components';
import { colors, config } from '@/constants';
import { IconSize, SvgIcon, SvgXmlIconNames } from '@/assets';

const {
  button: { activeOpacity },
} = config;

interface ISocialLoginButtonProps {
  title: string;
  icon: SvgXmlIconNames;
  iconSize: { width: number; height: number };
  onPress: () => void;
}

const SocialLoginButton = ({
  title,
  icon,
  iconSize,
  onPress,
}: ISocialLoginButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={styles.container}
    >
      <SvgIcon name={icon} size={iconSize} />
      <BaseText variant={BaseTextVariant.medium16} color={colors.main.white}>
        {title}
      </BaseText>
      <View style={styles.arrow}>
        <SvgIcon name={SvgXmlIconNames.chevronRight} size={IconSize.lg} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 24,
    paddingRight: 10,
    borderRadius: 60,
    overflow: 'hidden',
    backgroundColor: colors.glass.white40,
  },
  arrow: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SocialLoginButton;
