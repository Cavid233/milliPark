import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { colors, config } from '@/constants';
import { IconSize, SvgIcon, SvgXmlIconNames } from '@/assets';

const {
  button: { activeOpacity, hitSlop },
} = config;

interface IRoundIconButtonProps {
  icon: SvgXmlIconNames;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const RoundIconButton = ({ icon, onPress, style }: IRoundIconButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      hitSlop={hitSlop}
      onPress={onPress}
      style={[styles.container, style]}
    >
      <SvgIcon name={icon} size={IconSize.md22} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 99,
    backgroundColor: colors.glass.white30,
    boxShadow: `0px 2px 28px 0px ${colors.shadow.mint}`,
  },
});

export default RoundIconButton;
